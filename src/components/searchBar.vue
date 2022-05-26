<template>
    <div class="search-bar">
        <input type="text" v-model="searchContent" placeholder="search string in jokes">
        <button @click="SearchJoke">Search </button>
        <button v-if="searchContent" @click="cleanSearch">X</button>
        <select v-model="searchCategory" id="joke-type">
            <option value="Programming">Programming</option>
            <option value="Misc">Misc</option>
            <option value="Dark">Dark</option>
            <option value="Pun">Pun</option>
            <option value="Spooky">Spooky</option>
            <option value="Christmas">Chrismas</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: {
        search: {type: String},
        search_category: {type: String}
    },
    data(){
        return {
            searchContent: this.search,
            searchCategory: this.search_category
        }
    },
    methods: {
        cleanSearch: function() {
            this.searchContent = ""
		},
        SearchJoke(){
            if(this.searchContent==undefined){
                this.searchContent=""
            }
            this.$emit('toSearch', this.searchContent)
            localStorage.setItem("search", this.searchContent)
            this.searchContent=""
            this.$emit('categoryToSearch', this.searchCategory)
            localStorage.setItem("searchCategory", this.searchCategory)
        },
    }
}
</script>

<style scoped>
    .search-bar{
        padding: 30px ;
        font-size: 100px;

    }
</style>