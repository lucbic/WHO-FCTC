<template>
	<div id="home-page">
		<div class="p40" style="margin:80px 0">
		    <div class="container h_scenarios">
		    	<div class="row">
		    		<br>
		    		<br>
		    		<div class="col-xs-4 text-center">
		    			<router-link to="/scenario/1">
	              			<img src="../assets/img/home_s2_1.png" alt="" />
			    			<h3>Scenario 1</h3>
			    			<p>Healthcare Cost Recovery Reform</p>
			    		</router-link>
		    		</div>
		    		<div class="col-xs-4 text-center">
		    			<router-link to="/scenario/2">
	              			<img src="../assets/img/home_s2_2.png" alt="" />
			    			<h3>Scenario 2</h3>
			    			<p>Access to Justice on a<br/>Collective+Individual Basis</p>
			    		</router-link>
		    		</div>
		    		<div class="col-xs-4 text-center">
		    			<router-link to="/scenario/3">
	              			<img src="../assets/img/home_s2_3.png" alt="" />
			    			<h3>Scenario 3</h3>
			    			<p>Public Interest Litigation</p>
			    		</router-link>
		    		</div>
		    	</div>
			</div>
		</div>

		
		<div class="pop-cover" :class="{visible:showpop}">
			
		</div>
		<div class="pop-block" :class="{visible:showpop}">
			<transition name="fade" mode="out-in">
				<div class="pop-question" v-if="popq == 1" key="q1">
					<div class="pop-top">
						<div class="row">
							<div class="col-xs-4">
		              			<img src="../assets/img/pop-img.png" alt="" style="max-height:150px; margin:10px;" />
							</div>
							<div class="col-xs-8 text-left">
								<h2>Does health care cost recovery legislation exist?</h2>
							</div>
						</div>
					</div>
					<div class="pop-exp text-left">
						<span class="heading">Explanation</span>
						<p>Health care cost recovery legislation is a powerful way for governments and health care providers to bring claims directly against the industry, which helps ensure the full financial costs of tobacco related harm can be recovered, and not just the losses suffered by individual victims.</p>
					</div>
					<ul class="pop-circles">
						<li><router-link to="/scenario/1" class="choice"><i class="fa fa-check"></i></router-link></li>
						<li><a href="#no" class="choice choice--no" @click.prevent="popq = 2" ><i class="fa fa-times"></i></a></li>
					</ul>	
				</div>

				<div class="pop-question" v-if="popq == 2" key="q2">
					<div class="pop-top">
						<div class="row">
							<div class="col-xs-4">
		              			<img src="../assets/img/pop-img.png" alt="" style="max-height:150px; margin:10px;" />
							</div>
							<div class="col-xs-8 text-left">
								<h2 style="max-width:400px;">Do class action procedures exist?</h2>
							</div>
						</div>
					</div>
					<div class="pop-exp text-left">
						<span class="heading">Explanation</span>
						<p>The most significant successes in civil liability claims against the tobacco industry have been achieved via class action procedures where a class of claimants suffering from a tobacco-related disease considered common issues about the tobacco companies’ conduct in relation to the group, finding the industry liable on a number of grounds.</p>
					</div>
					<ul class="pop-circles">
						<li><router-link to="/scenario/2" class="choice"><i class="fa fa-check"></i></router-link></li>
						<li><router-link to="/scenario/3" class="choice choice--no"><i class="fa fa-times"></i></router-link></li>
					</ul>	
				</div>
			</transition>
			<div class="close-button" @click.prevent="showpop = !showpop"><i class="fa fa-times"></i></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
		  showpop: false,
		  popq: 1,
		}
	},
  	methods: {
	},
	computed: {

	},
	created: function () {
	  this.$parent.$emit('scrollup', 'test');
	}
}
</script>