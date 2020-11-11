export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <div class="info">
		  <div>
			  <h4>
				  Helpdesk Function
			  </h4>
			  <h5>
				  "Transfer current conversation to human operator and create helpdesk support ticket. Human operator can view, reply and manage support ticket by using Omnibotika If queueIfBusy variable is true, then user will be put in waiting queue when human operator
				  is busy The function return an array with the following format: Array( ""result"" => ""success"", ""msg"" => ""Addtional message (if any)"", ""ticketId"" => ""123456"", ""wait"" => 0 )".
				  <br>Visible to User: No.
			  </h5>
			  <figure class="highlight">
				  conversationHelpdesk(boolean $queueIfBusy) : array <br> "respondText(""Anda akan terhubung dengan customer service kami""); $helpdesk = conversationHelpdesk(true); $helpdesk = json_decode($helpdesk, true); if($helpdesk[""result""]==""success"")
				  { if($helpdesk[""wait""]==0) { respondText(""Nomor ticket anda adalah: "".$helpdesk[""ticketId""]); } else { respondText(""Mohon menunggu, customer service kami akan segera melayani anda. Antrian anda adalah nomor: "".$helpdesk[""wait""]);
				  } } else { respondText(""Mohon maaf, customer service kami sedang tidak tersedia""); }"
			  </figure>
		  </div>
	  </div>
	  <!-- end detail section -->
	</div>`
}