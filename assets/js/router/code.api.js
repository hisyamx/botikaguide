export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <!-- detail section -->
		  <div class="info">
			  <div>
				  <h4>
					  API
				  </h4>
				  <h5>
					  Access 3rd party REST API. method variable can be: GET or POST header default: [] maximum result allowed returned by the API is 1 MB
					  <br>Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  jsonApi(string $method, string $url [, array $headers, string $body) : string <br> "$result = jsonApi(""GET"", ""http://newsapi.org/v2/top-headlines?country=id&apiKey=335d66fe32874246a453c747f19b86ab""); $result = json_decode($result,
					  true); for($i=0;$i
					  < sizeof($result[ ""articles ""]);$i++) { respondText($result[ ""articles ""][$i][ ""title ""]); } ">							
				  </figure>
			  </div>
		  </div>
		  <!-- end detail section -->
	</div>`
}