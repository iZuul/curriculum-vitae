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
				<vs-col :vs-lg="4" :vs-sm="12" :vs-xs="12" type="flex" vs-align="center">
					<Profile class="px-3"/>
				</vs-col>
				<vs-col :vs-lg="4" :vs-sm="6" :vs-xs="12" l type="flex" vs-align="center">
					<Card class="px-3" header="Personal Profile" :description="profileDescription"/>
					<Card class="px-3" header="Education" :shortLists="eduactionList"/>
				</vs-col>
				<vs-col :vs-lg="4" :vs-sm="6" :vs-xs="12" l type="flex" vs-align="center">
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
					<ListWorks :styleWorks="styleWorks" class="px-3 pt-3" :listWorks="portofolio.data"/>
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

		setTimeout(() => {
			this.$vs.loading.close()
			this.loading = false
		}, 500)
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