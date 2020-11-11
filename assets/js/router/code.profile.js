export default {
	template: `<div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    		<h1 class="h2">Helpdesk</h1>
  		</div>

		  <!-- detail section -->
		  <div class="info">
			  <div>
				  <h4>
					  Profile
				  </h4>
				  <h5>
					  "Set this user profile. varKey variable can be: firstName User's firt name lastName User's last name nickName User's nick name address User's address city User's city phone1 User's phone number phone2 User's phone number (additional) phone3 User's phone
					  number (additional) email1 User's email email2 User's email (additional) gender User's gender profilePic User's profile piture url dateOfBirth User's date of birth User profile can be accessed with {{user.
					  <profileKey>}}} format" <br>Visible to User: No.
				  </h5>
				  <figure class="highlight">
					  userProfileSet(string $varKey, string $varValue) <br> "userProfileSet(""nickName"", ""John""); respondText(""Namamu sekarang adalah: {{user.nickName}}"");"
				  </figure>
			  </div>
		  </div>
		  <!-- end detail section -->
	</div>`
}