<template>
  <div class="structure-card">
    <div>
      <h3 class="Setup">{{setup}}</h3>
      <p class="Delivery">{{delivery}}</p>
      <p class="Hover">{{hover}}</p>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'StructureCard',

	props: {
		setup: {type: String, required: true},
		delivery: String, 
    hover: String, 
	}
}
</script>

<style>
	.structure-card {
    border: 5px solid darkblue;
    margin: 10px;
    height: 330px;
    width: 330px;
	}
  .structure-card:hover .Delivery{color: black;}
  .Delivery {
    color: transparent;
	}
  .structure-card:hover .Hover{color: transparent;}
  .Hover {
    color: black;
	}

	h2 {
    font-size: 40px;
	}
</style>