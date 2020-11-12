export default {
	data: function() {
		return {
			data: this.$root.data.variable.helpdesk
		}
	},
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">User Helpdesk</h1>
  		</div>

		<!-- detail section -->
		<div class="info">
	  		<div v-for="(list, i) in data"> 
	  			<h6 class="pb-2 mb-0">{{ list.name }}</h6>
	  			<p class="mb-1"><b>{{ list.variable }}</b></p>
	  			<p class="mb-1">This variable serves to get {{ list.description }}. Example:</p>
	  			<PrismComponent class="m-0" language="php">{{ list.example.request }}</PrismComponent>
	  			<p class="mb-0" v-if="list.example.response">The above example would return something like: <i>{{ list.example.response }}</i></p>
	  			<hr>
	  		</div>
		</div>
		<!-- end detail section -->

	</div>`
}