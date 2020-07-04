<template>
  <div>
    <vs-card class="position-relative zoom">
      <div class="avatar-center">
        <vs-avatar size="125px" :src="profile" text="Muhammad Zulfa Dhiaulhaq"/>
      </div>
      <div class="pt-6 text-center">
        <h1>Muhammad Zulfa Dhiaulhaq</h1>
        <p class="py-2">Im a Front End Engineer</p>
      </div>
    </vs-card>
    <vs-card class="zoom">
      <vs-row justify="center">
        <vs-col>
          <vs-list>
            <vs-list-item class="none-border" title="Phone" subtitle="081393004304"></vs-list-item>
            <vs-list-item class="none-border" title="Email" subtitle="zdhiaulhaq20@gmail.com"></vs-list-item>
            <vs-list-item class="none-border" title="Linkedin" subtitle="Muhammad Zulfa"></vs-list-item>
            <vs-list-item class="none-border" title="Address" subtitle="Yogyakarta"></vs-list-item>
          </vs-list>
        </vs-col>
      </vs-row>
    </vs-card>
  </div>
</template>

<script>
import profile from '~/static/images/profile.jpg'
export default {
  data() {
    return {
      profile: profile
    }
  },
  mounted() {
    console.log(this.$refs['image'])
  }
}
</script>

<style>
</style>