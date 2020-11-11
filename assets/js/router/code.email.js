export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <!-- detail section -->
		  <div class="info">
			  <div>
				  <h4>
					  Email
				  </h4>
				  <h5>
					  Send automated email. Sender address is always "noreply@botika.online". <br>Visible to User: No
				  </h5>
				  <figure class="highlight">
					  emailSend(array $to, array $cc, array $bcc, string $subject, string $body) <br> emailSend(Array("john@gmail.com","jane@gmail.com"), Array(), Array(), "Email otomatis dari chatbot", "Halo :)<br><br>Ini adalah email otomatis
					  dari chatbot<br><br>Terima kasih");
				  </figure>
			  </div>
		  </div>
		  <!-- end detail section -->
	</div>`
}