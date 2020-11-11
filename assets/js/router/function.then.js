export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <!-- detail section -->
		  <div class="info">
			  <div>
				  <h4>
					  Then
				  </h4>
				  <h5>
					  After the code is executed, stop and wait for the nex user message <br>Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  thenStop()
				  </figure>
				  <h5>
					  Default. After the code is executed, continue run the next action. <br>Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  thenContinue()
				  </figure>
				  <h5>
					  After the code is executed, jump to the state, stop and wait for next user message.<br>Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  thenJumpTo(string $stateName)
				  </figure>
				  <h5>
					  After the code is executed, jump to the state and run the actions.<br>Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  thenJumpAndRun(string $stateName)
				  </figure>
				  <h5>
					  After the code is executed, end the conversation and restart from the beginning.<br>Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  thenEndChat()
				  </figure>
			  </div>
		  </div>
		  <!-- end detail section -->
	</div>`
}