<template>
  <div class="fixed-top">
    <vs-list class="no-border">
      <vs-list-item>
        <vs-button target href="https://www.facebook.com/muhammad.zulfa.dhiaulhaq/" class="zoom" :aria-label="`open-facebook-${owner}`" radius color="dark" icon-pack="fa" icon="fa-facebook-f"></vs-button>
      </vs-list-item>
      <vs-list-item>
        <vs-button target href="https://github.com/iZuul" class="zoom" :aria-label="`open-github-${owner}`" radius color="dark" icon-pack="fa" icon="fa-github"></vs-button>
      </vs-list-item>
      <vs-list-item>
        <vs-button target href="https://www.linkedin.com/in/muhammad-dhiaulhaq/" :aria-label="`open-linkedin-${owner}`" class="zoom" radius color="dark" icon-pack="fa" icon="fa-linkedin-square"></vs-button>
      </vs-list-item>
    </vs-list>
  </div>
</template>

<script>
import profile from '~/static/images/profile.jpg'
export default {
  data() {
    return {
      profile: profile,
      owner: 'muhammad-zulfa'
    }
  }
}
</script>

<style>
</style>