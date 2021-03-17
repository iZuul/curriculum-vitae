<template>
  <div class="main">
		
		<template v-if="loading">
			<div class="light"></div>
		</template>

		<template v-else>
			<vs-row>
				<vs-col>
					<ListButton style="z-index:1000;"></ListButton>
				</vs-col>
			</vs-row>
			<vs-row class="h-100">
				<vs-col :vs-w="columnWidth1" type="flex" vs-align="center">
					<Profile class="px-3"/>
				</vs-col>
				<vs-col :vs-w="columnWidth2" l type="flex" vs-align="center">
					<Card class="px-3" header="Personal Profile" :description="profileDescription"/>
					<Card class="px-3" header="Education" :shortLists="eduactionList"/>
				</vs-col>
				<vs-col :vs-w="columnWidth3" l type="flex" vs-align="center">
					<Card class="px-3" header="Skills" :skillLists="skills.data"/>
				</vs-col>
			</vs-row>
			<vs-row>
				<vs-col>
					<Card class="px-3" header="Carrer Summary" :longLists="careers.data" />
				</vs-col>
			</vs-row>
			<vs-row>
				<vs-col>
					<ListWorks :columnCardWork="columnCardWork" :styleWorks="styleWorks" class="px-3 pt-3" :listWorks="portofolio.data"/>
				</vs-col>
			</vs-row>
		</template>
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import Card from '@/components/Card'
import ListButton from '@/components/ListButton'
import ListWorks from '@/components/ListWorks'

export default {
	components: {
		Profile,
		Card,
		ListButton,
		ListWorks
	},
	head() {
		return {
      title: "Muhammad Zulfa Dhiaulhaq | Resume",
      meta: [
				{ hid: 'description', name: 'description', content: 'Resume dan Profil Muhammad Zulfa Dhiaulhaq, Junior Frontend Web Developer' },
				{ hid: 'author', name: 'author', content: 'Muhammad Zulfa Dhiaulhaq' }
			],
			htmlAttrs: {
				lang: 'en'
			}
    }
	},
  data(){
    return {
			loading: true,
			columnWidth1:4,
			columnWidth2:4,
			columnWidth3:4,
			profileDescription: "I was born in Surakarta and grew up there. Want to become a professional front end developer who can realize various kinds of designs",
			eduactionList: [
				{
					place: 'Universitas Gadjah Mada',
					from_year: '2016',
					until_year: '2020',
					major: 'Teknologi Informasi',
				},
				{
					place: 'SMA Negeri 1 Surakarta',
					from_year: '2013',
					until_year: '2016',
					major: '',
				}
			],
    }
	},
	mounted() {
		this.$vs.loading()
		if (window.innerWidth <= 767) {
			this.columnWidth1 = this.columnWidth2 = this.columnWidth3 = this.columnCardWork = 12
			this.styleWorks = `max-height: 25rem; overflow-y: scroll; overflow-x: hidden;`
		}
		else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
			this.columnWidth1 = 12
			this.columnWidth2 = this.columnWidth3 = 6
			this.columnCardWork = 4
			this.styleWorks = ''
		}
		else {
			this.columnWidth1 = this.columnWidth2 = this.columnWidth3 = 4
			this.columnCardWork = 4
			this.styleWorks = ''
		}

		setTimeout(() => {
			this.$vs.loading.close()
			this.loading = false
		}, 500)

		function resize() {
			if (window.innerWidth <= 767) {
				this.columnWidth1 = this.columnWidth2 = this.columnWidth3 = this.columnCardWork = 12
				this.styleWorks = `max-height: 25rem; overflow-y: scroll; overflow-x: hidden;`
			}
			else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
				this.columnWidth1 = 12
				this.columnWidth2 = this.columnWidth3 = 6
				this.columnCardWork = 4
				this.styleWorks = ''
			}
			else {
				this.columnWidth1 = this.columnWidth2 = this.columnWidth3 = 4;
				this.columnCardWork = 4
				this.styleWorks = ''
			}
		}
		window.onresize = resize;
	},
	async asyncData(context) {
		const response_skills = await context.app.$storyapi.get('cdn/stories', {
			version: 'publish',
			starts_with: 'skills/'
		})

		const response_careers = await context.app.$storyapi.get('cdn/stories', {
			version: 'publish',
			starts_with: 'careers/'
		})

		const response_portofolio = await context.app.$storyapi.get('cdn/stories', {
			version: 'publish',
			starts_with: 'blog/'
		})

		const portofolio = {
			data: response_portofolio.data.stories
		}

		const skills = {
			data: response_skills.data.stories
		}
		
		const careers = {
			data: response_careers.data.stories
		}

		return {
			portofolio,
			skills,
			careers
		}
	}
}
</script>