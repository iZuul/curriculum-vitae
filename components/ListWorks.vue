<template>
  <div>
    <vs-collapse type="margin" class="vs-collapse-open-fullheight">
      <vs-collapse-item open>
        <div slot="header">
          <h4>My Work</h4>
        </div>
        <div :style="styleWorks">
          <vs-row>
            <vs-col :vs-w="columnCardWork" class="px-3 pb-2 py-4" v-for="(item, index) in listProject" :key="index">
              <vs-card fixedHeight class="zoom">
                <div slot="header">
                  <h3>
                    {{ item.title }}
                  </h3>
                </div>
                <div slot="media">
                  <img :src="item.image" :alt="item.title">
                </div>
                <div>
                  <span>{{ item.description }}</span>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button :href="item.link" :aria-label="`open-${item.shortName}`" type="gradient" color="primary" icon="arrow_forward" target></vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
          </vs-row>
        </div>
     </vs-collapse-item>
    </vs-collapse>
  </div>
</template>

<script>
import imageNanimeScraper from '@/static/images/nanime-scraper.png'
import imageNanimeScraperAPI from '@/static/images/nanime-scraper-api.png'
import imageMedicalWebApp from '@/static/images/medical-web-app.png'

export default {
  props:{
    columnCardWork: Number,
    styleWorks: String
  },
  data() {
    return {
      listProject: [
        {
          title: 'Nanime Scraper',
          image: imageNanimeScraper,
          description: 'Built with Vue, Bootswatch, and Express API',
          link: 'https://nanime-scraper.netlify.app',
          shortName: 'nanime-scraper'
        },
        {
          title: 'Nanime Scraper API',
          image: imageNanimeScraperAPI,
          description: 'Built with Express, Cherrio, and node-fetch',
          link: 'https://server-nanime-scraper-api.herokuapp.com',
          shortName: 'nanime-scraper-api'
        },
        {
          title: 'Medical Web App',
          image: imageMedicalWebApp,
          description: 'Built with Vue, Vuetify and Firebase',
          link: 'https://pasienku.netlify.app',
          shortName: 'medical-web-app'
        }
      ]
    }
  }
}
</script>