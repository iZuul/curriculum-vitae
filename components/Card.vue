<template>
  <div>
    <vs-card class="zoom">
      <div slot="header" class="none-shadow-header">
        <h3>
          {{ header }}
        </h3>
      </div>
      <div>
        <span v-if="description !== undefined">
          {{ description }}
        </span>
        <div v-if="shortLists !== undefined">
          <vs-list>
            <vs-list-item v-for="(item, index) in shortLists" :key="index" :title="`${item.place} | ${item.from_year} - ${item.until_year}`" :subtitle="item.major"></vs-list-item>
          </vs-list>
        </div>
        <div v-if="longLists !== undefined">
          <vs-collapse>
            <vs-collapse-item v-for="(item, index) in longLists" :key="index">
              <div slot="header" class="pr-2 font-bold">
                {{item.text}} - {{item.year}}
              </div>
              <div>
                {{item.description}}
              </div>
            </vs-collapse-item>
          </vs-collapse>
        </div>
        <div v-if="skillLists !== undefined">
          <div v-for="(item, index) in skillLists" :key="index">
            <span>{{item.name}}</span>
            <vs-progress :percent="item.percent" :color="item.color" :height="item.height"></vs-progress>
          </div>
        </div>
      </div>
    </vs-card>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    description: String,
    shortLists: Array,
    longLists: Array,
    skillLists:  Array
  }
}
</script>
