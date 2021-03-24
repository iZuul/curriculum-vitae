<template>
  <div>
    <vs-card>
      <div slot="header">
        <h4>My Work</h4>
      </div>
      <div :style="styleWorks">
        <vs-row>
          <vs-col :vs-lg="6" :vs-sm="12" :vs-xs="12" class="px-3 pb-2 py-4" v-for="({ content }, index) in listWorks" :key="index">
            <vs-card fixedHeight class="zoom">
              <div slot="header">
                <h3>
                  {{ content.title }}
                </h3>
              </div>
              <div slot="media">
                <img :src="content.image.filename" :alt="content.image.alt">
              </div>
              <div>
                <span>{{ content.short_description }}</span>
              </div>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <a v-if="content.link.url" :href="content.link.url" target="_blank">
                    <vs-button :href="content.link" :aria-label="`open-${content.shortName}`" type="gradient" color="primary" icon="arrow_forward" target></vs-button>
                  </a>
                </vs-row>
              </div>
            </vs-card>
          </vs-col>
        </vs-row>
      </div>
    </vs-card>
  </div>
</template>

<script>
export default {
  props:{
    columnCardWork: Number,
    styleWorks: String,
    listWorks: Array
  },
}
</script>