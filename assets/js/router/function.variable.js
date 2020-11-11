export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <!-- detail section -->
		  <div class="info">
			  <div>
				  <h4>
					  Variable
				  </h4>
				  <h5>
					  "Set variable related to this user. Variable can be used in chatbot respond by using this format: {{variableName}} or {{jsonVariableName.objectName}} or {{myJsonArray.0.title}} varType variable can be: string (default), integer, float, boolean, json Non
					  permanent variable will only be stored while the conversation is active. If user is idle for more than 30 minutes, the conversation will be marked as timeout and the variable will be erased. Permanent variable is stored forever."
					  <br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  userVariableSet(string $varKey, mixed $varValue, string $varType = "string", boolean $varPermanent = false) <br>"userVariableSet(""customVar"", ""Lorem Ipsum""); respondText(""Variable customVar anda adalah: {{user.customVar}}"");"
				  </figure>
				  <h5>
					  Get variable related to this user.
					  <br> Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  userVariableGet(string $varKey) <br>"$myVar = userVariableGet(""customVar""; respondText(""Variable customVar anda adalah: "".$myVar);"
				  </figure>
			  </div>
		  </div>
		  <!-- end detail section -->
	</div>`
}