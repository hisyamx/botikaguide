export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <!-- detail section -->
		  <div class="info">
			  <div>
				  <h4>
					  NPS
				  </h4>
				  <h5>
					  Store NPS and feedback data given by this user. The collected NPS can be found at Botmaster. <br>Visible to User: Yes.
				  </h5>
				  <figure class="highlight">
					  userNpsSet(mixed $score, string $feedback) <br>userNpsSet("9", "Ok bagus");
				  </figure>
			  </div>
		  </div>
		  <!-- end detail section -->
	</div>`
}