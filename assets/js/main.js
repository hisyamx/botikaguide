const router = new VueRouter({
	mode: 'history',
	base: baseurl.replace(window.location.origin, ''),
	routes: [{
			path: '/variable',
			name: 'Variable',
			component: function () {
				return import(`./router/variable.js?v=${ version }`);
			},
			children: [{
					path: 'user',
					name: 'Variable User',
					component: function () {
						return import(`./router/variable.user.js?v=${ version }`);
					}
				},
				{
					path: 'usernps',
					name: 'Variable UserNPS',
					component: function () {
						return import(`./router/variable.usernps.js?v=${ version }`);
					}
				},
				{
					path: 'helpdesk',
					name: 'Variable Helpdesk',
					component: function () {
						return import(`./router/variable.helpdesk.js?v=${ version }`);
					}
				},
				{
					path: '*',
					redirect: 'user'
				}
			]
		},
		{
			path: '/codefunction',
			name: 'Code',
			component: function () {
				return import(`./router/code.js?v=${ version }`);
			},
			children: [{
				path: 'respond',
				name: 'Code Respond',
				component: function () {
					return import(`./router/code.respond.js?v=${ version }`);
				}
			},
			{
				path: 'variable',
				name: 'Code Variable',
				component: function () {
					return import(`./router/code.variable.js?v=${ version }`);
				}
			},
			{
				path: 'profile',
				name: 'Code Profile',
				component: function () {
					return import(`./router/code.profile.js?v=${ version }`);
				}
			},
			{
				path: 'nps',
				name: 'Code NPS',
				component: function () {
					return import(`./router/code.nps.js?v=${ version }`);
				}
			},
			{
				path: 'report',
				name: 'Code Report',
				component: function () {
					return import(`./router/code.report.js?v=${ version }`);
				}
			},
			{
				path: 'analytic',
				name: 'Code Analytic',
				component: function () {
					return import(`./router/code.analytic.js?v=${ version }`);
				}
			},
			{
				path: 'api',
				name: 'Code API',
				component: function () {
					return import(`./router/code.api.js?v=${ version }`);
				}
			},
			{
				path: 'email',
				name: 'Code Email',
				component: function () {
					return import(`./router/code.email.js?v=${ version }`);
				}
			},
			{
				path: 'transcript',
				name: 'Code Transcript',
				component: function () {
					return import(`./router/code.transcript.js?v=${ version }`);
				}
			},
			{
				path: 'log',
				name: 'Code Log',
				component: function () {
					return import(`./router/code.log.js?v=${ version }`);
				}
			},
			{
				path: 'then',
				name: 'Code Then',
				component: function () {
					return import(`./router/code.then.js?v=${ version }`);
				}
			},
			{
				path: 'variable',
				name: 'Code Variable',
				component: function () {
					return import(`./router/code.variable.js?v=${ version }`);
				}
			},
			{
				path: 'profile',
				name: 'Code Profile',
				component: function () {
					return import(`./router/code.profile.js?v=${ version }`);
				}
			},
			{
				path: '*',
				redirect: 'user'
			}
		]
		},
		{
			path: '/',
			name: 'Home',
			component: function () {
				return import(`./router/home.js?v=${ version }`);
			}
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})

new Vue({
	el: '#app',
	data() {
		return {}
	},
	router,
	template: `<div>
		<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
		  	<a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Docs</a>
		  	<button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
		    	<span class="navbar-toggler-icon"></span>
		  	</button>
		</nav>
		<div class="container-fluid">
		  	<div class="row">
		    	<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
		      		<div class="sidebar-sticky pt-3">
		        		<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">
		          			<span>Variable</span>
		        		</h6>
		        		<ul class="nav flex-column mb-2">
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/variable/user" v-bind:class="($root.$route.name == 'Variable User' ? 'active' : '')">
		              				User
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/variable/usernps" v-bind:class="($root.$route.name == 'Variable UserNPS' ? 'active' : '')">
		              				User NPS
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/variable/helpdesk" v-bind:class="($root.$route.name == 'Variable Helpdesk' ? 'active' : '')">
		              				User Helpdesk
		            			</router-link>
		          			</li>
						</ul>
						<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">
						<span>Code Function</span>
						  </h6>
						  <ul class="nav flex-column mb-2">
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/respond" v-bind:class="($root.$route.name == 'Code Respond' ? 'active' : '')">
		              				Respond
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/variable" v-bind:class="($root.$route.name == 'Code Variable' ? 'active' : '')">
		              				Variable
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/profile" v-bind:class="($root.$route.name == 'Code Profile' ? 'active' : '')">
		              				Profile
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/nps" v-bind:class="($root.$route.name == 'Code NPS' ? 'active' : '')">
		              				NPS
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/report" v-bind:class="($root.$route.name == 'Code Report' ? 'active' : '')">
		              				Report
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/analytic" v-bind:class="($root.$route.name == 'Code Analytic' ? 'active' : '')">
		              				Analytic
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/api" v-bind:class="($root.$route.name == 'Code API' ? 'active' : '')">
		              				API
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/email" v-bind:class="($root.$route.name == 'Code Email' ? 'active' : '')">
		              				Email
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/helpdesk" v-bind:class="($root.$route.name == 'Code Helpdesk' ? 'active' : '')">
		              				Helpdesk
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/transcript" v-bind:class="($root.$route.name == 'Code Transcript' ? 'active' : '')">
		              				Transcript
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/log" v-bind:class="($root.$route.name == 'Code Log' ? 'active' : '')">
		              				Log
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/codefunction/then" v-bind:class="($root.$route.name == 'Code Then' ? 'active' : '')">
		              				Then
		            			</router-link>
							  </li>
						</ul>
		      		</div>
		    	</nav>

		    	<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
		    		<router-view></router-view>
		    	</main>
		  	</div>
		</div>
	</div>`
});