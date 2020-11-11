const router = new VueRouter({
	mode: 'history',
	base: baseurl.replace(window.location.origin, ''),
	routes: [
		{
			path: '/variable',
			name: 'Variable',
			component: function () {
				return import(`./router/variable.js?v=${ version }`);
			},
			children: [
				{
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
			path: '/function',
			name: 'Function',
			component: function () {
				return import(`./router/function.js?v=${ version }`);
			},
			children: [
				{
					path: 'respond',
					name: 'Function Respond',
					component: function () {
						return import(`./router/function.respond.js?v=${ version }`);
					}
				},
				{
					path: 'variable',
					name: 'Function Variable',
					component: function () {
						return import(`./router/function.variable.js?v=${ version }`);
					}
				},
				{
					path: 'profile',
					name: 'Function Profile',
					component: function () {
						return import(`./router/function.profile.js?v=${ version }`);
					}
				},
				{
					path: 'nps',
					name: 'Function NPS',
					component: function () {
						return import(`./router/function.nps.js?v=${ version }`);
					}
				},
				{
					path: 'report',
					name: 'Function Report',
					component: function () {
						return import(`./router/function.report.js?v=${ version }`);
					}
				},
				{
					path: 'analytic',
					name: 'Function Analytic',
					component: function () {
						return import(`./router/function.analytic.js?v=${ version }`);
					}
				},
				{
					path: 'api',
					name: 'Function API',
					component: function () {
						return import(`./router/function.api.js?v=${ version }`);
					}
				},
				{
					path: 'email',
					name: 'Function Email',
					component: function () {
						return import(`./router/function.email.js?v=${ version }`);
					}
				},
				{
					path: 'transcript',
					name: 'Function Transcript',
					component: function () {
						return import(`./router/function.transcript.js?v=${ version }`);
					}
				},
				{
					path: 'log',
					name: 'Function Log',
					component: function () {
						return import(`./router/function.log.js?v=${ version }`);
					}
				},
				{
					path: 'then',
					name: 'Function Then',
					component: function () {
						return import(`./router/function.then.js?v=${ version }`);
					}
				},
				{
					path: 'variable',
					name: 'Function Variable',
					component: function () {
						return import(`./router/function.variable.js?v=${ version }`);
					}
				},
				{
					path: 'profile',
					name: 'Function Profile',
					component: function () {
						return import(`./router/function.profile.js?v=${ version }`);
					}
				},
				{
					path: '*',
					redirect: 'respond'
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

Vue.component('PrismComponent', PrismComponent);

new Vue({
	el: '#app',
	data() {
		return {
			// data: json
			data: null
		}
	},
	router,
	mounted: function() {
		var vuethis = this;
		$.getJSON(baseurl+'assets/json/data.json', function(json) {
			vuethis.data = json;
		});
	},
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
		            			<router-link class="nav-link" to="/function/respond" v-bind:class="($root.$route.name == 'Function Respond' ? 'active' : '')">
		              				Respond
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/variable" v-bind:class="($root.$route.name == 'Function Variable' ? 'active' : '')">
		              				Variable
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/profile" v-bind:class="($root.$route.name == 'Function Profile' ? 'active' : '')">
		              				Profile
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/nps" v-bind:class="($root.$route.name == 'Function NPS' ? 'active' : '')">
		              				NPS
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/report" v-bind:class="($root.$route.name == 'Function Report' ? 'active' : '')">
		              				Report
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/analytic" v-bind:class="($root.$route.name == 'Function Analytic' ? 'active' : '')">
		              				Analytic
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/api" v-bind:class="($root.$route.name == 'Function API' ? 'active' : '')">
		              				API
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/email" v-bind:class="($root.$route.name == 'Function Email' ? 'active' : '')">
		              				Email
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/helpdesk" v-bind:class="($root.$route.name == 'Function Helpdesk' ? 'active' : '')">
		              				Helpdesk
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/transcript" v-bind:class="($root.$route.name == 'Function Transcript' ? 'active' : '')">
		              				Transcript
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/log" v-bind:class="($root.$route.name == 'Function Log' ? 'active' : '')">
		              				Log
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/function/then" v-bind:class="($root.$route.name == 'Function Then' ? 'active' : '')">
		              				Then
		            			</router-link>
							  </li>
						</ul>
		      		</div>
		    	</nav>

		    	<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4" v-if="data">
		    		<router-view></router-view>
		    	</main>
		  	</div>
		</div>
	</div>`
});