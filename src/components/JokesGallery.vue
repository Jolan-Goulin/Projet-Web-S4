<template>
	<div class="structures-gallery">
		<div v-for="joke in jokeOragnisedData" :key="joke.id">
			<JokeCard :setup= 'joke.setup + (joke.joke == "undefined") ? joke.setup : joke.joke' 
			:delivery="joke.delivery" 
			:hover= '(joke.delivery ) ? "Hover this element to get the delivery of the joke": ""'/>
		</div>
	</div>
</template>

<script>
import JokeCard from './JokeCard.vue'
import {fetchData} from './../services/api/JokeApi.js'

export default {
  name: 'StructuresGallery',
	components: {
		JokeCard
	},
	props: {
		stringToFind: {type: String, required: true},
		categoryToFind: {type: String, required: true}
	},
	data(){
		return{
			jokeData: []
		}
	},
	computed: { 
		jokeOragnisedData: function() {
			let data = this.jokeData.jokes
			console.log(typeof(data))
			return data
		}
	},
	created: function(){
		this.retriveStructsData(this.stringToFind, this.categoryToFind)

	},
	methods: {
		async retriveStructsData(stringToFind, categoryToFind){
			this.jokeData = await fetchData(stringToFind, categoryToFind)		
		}
	},
	watch: {
		stringToFind(newValue) {
			this.retriveStructsData(newValue,this.categoryToFind)
		},
		categoryToFind(newValue) {
			this.retriveStructsData(this.stringToFind,newValue)
		}
	}
};
</script>

<style>
	.structures-gallery {
        display: flex;
		flex-wrap: wrap;
		width:90%;
		justify-content: space-evenly;
		gap: 10px;
	}
</style>