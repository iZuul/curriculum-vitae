<template>
  <div class="fixed-top">
    <vs-list class="no-border">
      <vs-list-item>
        <vs-button target href="https://www.facebook.com/muhammad.zulfa.dhiaulhaq/" class="zoom" radius color="dark" icon-pack="fa" icon="fa-facebook-f"></vs-button>
      </vs-list-item>
      <vs-list-item>
        <vs-button target href="https://github.com/iZuul" class="zoom" radius color="dark" icon-pack="fa" icon="fa-github"></vs-button>
      </vs-list-item>
      <vs-list-item>
        <vs-button target href="https://www.linkedin.com/in/muhammad-dhiaulhaq/" class="zoom" radius color="dark" icon-pack="fa" icon="fa-linkedin-square"></vs-button>
      </vs-list-item>
    </vs-list>
  </div>
</template>

<script>
import profile from '~/static/images/profile.jpg'
export default {
  data() {
    return {
      profile: profile
    }
  }
}
</script>

<style>
</style>