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
					<Card class="px-3" header="Carrer Summary" :longLists="careerList" />
				</vs-col>
				<vs-col :vs-w="columnWidth3" l type="flex" vs-align="center">
					<Card class="px-3" header="Education" :shortLists="eduactionList"/>
					<Card class="px-3" header="Skills" :skillLists="skillLists"/>
				</vs-col>
			</vs-row>
			<vs-row>
				<vs-col>
					<ListWorks :columnCardWork="columnCardWork" class="px-3 pt-3"/>
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
			profileDescription: "I born in Surakarta and grew up there. Want to become a professional front end developer who can realize various kinds of designs",
			careerList: [
				{
					text: 'Frontend Developer in TraceYuk Research Team',
					year: '2020',
					description: 'Developing Admin Website For TracYuk Mobile App',
				},
				{
					text: 'Frontend Developer Intern in Fakultas Teknik UGM',
					year: '2019',
					description: 'Developing one of Administation Website for Fakultas Teknik Universitas Gadjah Mada',
				},
				{
					text: '1st Champion Of Speedhack',
					year: '2018',
					description: 'Built an Prototype Android Mobile App Tracking Trans Jogja Bus'
				}
			],
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
			skillLists: [
				{
					name: 'Vue',
					percent: 85,
					color:'success'
				},
				{
					name: 'Bootstrap',
					percent: 80,
					color:'primary'
				},
				{
					name: 'JavaScript',
					percent: 80,
					color:'warning'
				},
				{
					name: 'HTML',
					percent: 85,
					color: 'danger'
				},
				{
					name: 'CSS',
					percent: 75,
					color:'primary'
				}
			]
    }
	},
	beforeMount() {
	},
	mounted() {
		console.log(process.env.baseUrl)
		const self = this;
		self.$vs.loading()
		if (window.innerWidth <= 767) {
			self.columnWidth1 = self.columnWidth2 = self.columnWidth3 = 12
			self.columnCardWork = 6
		}
		else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
			self.columnWidth1 = 12
			self.columnWidth2 = self.columnWidth3 = 6
			self.columnCardWork = 4
		}
		else {
			self.columnWidth1 = self.columnWidth2 = self.columnWidth3 = 4
			self.columnCardWork = 4
		}

		setTimeout(() => {
			self.$vs.loading.close()
			self.loading = false
		}, 500)

		function resize() {
			if (window.innerWidth <= 767) {
				self.columnWidth1 = self.columnWidth2 = self.columnWidth3 = 12
				self.columnCardWork = 6
			}
			else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
				self.columnWidth1 = 12
				self.columnWidth2 = self.columnWidth3 = 6
				self.columnCardWork = 4
			}
			else {
				self.columnWidth1 = self.columnWidth2 = self.columnWidth3 = 4;
				self.columnCardWork = 4
			}
		}
		window.onresize = resize;
	}
}
</script>