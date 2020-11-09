const router = new VueRouter({
    mode: 'history',
    base: baseurl.replace(window.location.origin, ''),
  	routes: [
  		{
  			path: '/variable',
  			name: 'Variable',
  			component: function() {
  				return import(`./router/variable.js?v=${ version }`);
  			},
  			children: [
  				{
  					path: 'user',
  					name: 'Variable User',
  					component: function() {
  						return import(`./router/variable.user.js?v=${ version }`);
  					}
  				}, 
  				{
  					path: 'nps',
  					name: 'Variable NPS',
  					component: function() {
  						return import(`./router/variable.nps.js?v=${ version }`);
  					}
  				}, 
  				{
  					path: 'helpdesk',
  					name: 'Variable Helpdesk',
  					component: function() {
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
  			path: '/',
  			name: 'Home',
  			component: function() {
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
		            			<router-link class="nav-link" to="/variable/nps" v-bind:class="($root.$route.name == 'Variable NPS' ? 'active' : '')">
		              				NPS
		            			</router-link>
		          			</li>
		          			<li class="nav-item">
		            			<router-link class="nav-link" to="/variable/helpdesk" v-bind:class="($root.$route.name == 'Variable Helpdesk' ? 'active' : '')">
		              				Helpdesk
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