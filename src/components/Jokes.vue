<template>
  <div class="hello">
    <Header/>
    <searchBar @toSearch="(_Search)=>search=_Search" @categoryToSearch="(_Search)=>searchCategory=_Search"/>
    <JokesGallery :stringToFind = "search" :categoryToFind = "searchCategory"/>
    <Footer/>
  </div>
</template>

<script>
/* eslint-disable */
import Header from './Header.vue'
import searchBar from './searchBar.vue'
import JokesGallery from './JokesGallery.vue'
import Footer from './Footer.vue'

export default {
  name: 'HelloWorld',
  components: {
    Header,
    searchBar,
    JokesGallery,
    Footer
  },
  data() {
    return {
        search: localStorage.getItem("search") || "",
        searchCategory: localStorage.getItem("searchCategory") || "",      
    }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
