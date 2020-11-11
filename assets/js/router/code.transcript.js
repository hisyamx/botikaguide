export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <!-- detail section -->
		  <div class="info">
			  <div>
				  <h4>
					  Transcript
				  </h4>
				  <h5>
					  Send this user conversation transcript to your email <br>Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  transcriptSend(array $to, string $subject) <br>transcriptSend(Array("john@gmail.com"), "Conversation Transcript ".date("Y-n-j H:i:s"));
				  </figure>
			  </div>
		  </div>
		  <!-- end detail section -->
	</div>`
}