<template>
	<div id="home-page">
	    <div class="container">
	    	<div class="row" style="margin:50px 0;">
	    		<div class="col-xs-4 text-center">
              		<img src="../assets/img/home-main.png" alt="" />
	    		</div>
	    		<div class="col-xs-7">
	    			<div class="p30">
		    			<h1>{{ $t('home.hero.title') }}</h1>
		    			<p class="mt20" style="font-size:1.4em">Your interactive guide to taking legal action against the tobacco industry.</p>
		    			<router-link to="/about" class="button mt20" style="font-size:1.4em">Read More</router-link>
	    			</div>
	    		</div>
	    	</div>
		</div>
		<div class="p30 rel sidebanner-padding" style="background-color:#e1ecf0; margin:30px 0; padding-bottom:40px;">
			<div class="sidebanner sidebanner--white">
				<h2>How to use the Toolkit</h2>
			</div>
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-4">
		    			<div class="stepper">
		    				<div class="img__container">
              					<img src="../assets/img/home_s1.png" alt="" />
		    				</div>
			    			<h4>Step 1</h4>
			    			<p>Select a scenario or click BEGIN to find out which one you fit into with a few simple questions.</p>
		    			</div>
		    		</div>
		    		<div class="col-xs-4">
		    			<div class="stepper">
		    				<div class="img__container">
              					<img src="../assets/img/home_s2.png" alt="" />
		    				</div>
			    			<h4>Step 2</h4>
			    			<p>Let the Toolkit guide you through the questions and examples that best suit your context.</p>
		    			</div>
		    		</div>
		    		<div class="col-xs-4">
		    			<div class="stepper">
		    				<div class="img__container">
              					<img src="../assets/img/home_s3.png" alt="" />
		    				</div>
			    			<h4>Step 3</h4>
			    			<p>Use the decision tree based on your answers to plot your path to successful litigation.</p>
		    			</div>
		    		</div>
		    	</div>
			</div>
		</div>
		<div class="p40" style="margin:80px 0">
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-8 col-xs-offset-2 text-center">
		    			<h3>Where to start</h3><br>
		    			<p>This interactive Toolkit is a guide for tobacco victims, health care providers, insurers, civil society groups and lawyers who want to take legal action against the tobacco industry. We've identified three main litigation scenarios that can help.</p>
		    		</div>
		    	</div>
			</div>
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-12 text-center">
              			<img src="../assets/img/home_branch_1.png" alt="" class="home_branch_1" />
		    		</div>
		    		<div class="col-xs-5 col-sm-offset-0 col-lg-4 col-lg-offset-1 text-center">
		    			<div class="start-block p30">
			    			<p>If you <strong>don't know</strong> which litigation scenario is right for your jurisdiction we’ll help you find out.</p>
			    			<a href="#" class="button mt20" @click.prevent="showpop = !showpop">Begin</a>
		    			</div>
		    		</div>
		    		<div class="col-xs-5 col-xs-offset-2 col-lg-4 col-lg-offset-2 text-center">
		    			<div class="start-block p30">
			    			<p>If you <strong>do know</strong> which litigation scenario is right for your jurisdiction, click on the scenario below.</p>
			    		</div>
		    		</div>
		    	</div>
			</div>
		    <div class="container h_scenarios">
		    	<div class="row">
		    		<div class="col-xs-12 text-center">
              			<img src="../assets/img/home_branch_2.png" alt="" />
		    		</div>
		    		<div class="col-xs-4 text-center">
		    			<router-link to="/scenario/1">
	              			<img src="../assets/img/home_s2_1.png" alt="" />
			    			<h3>Scenario 1</h3>
			    			<p>Healthcare Cost Recovery</p>
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

		<div class="p30" style="background-color:#e1ecf0; padding:80px 0; margin:40px 0">
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-7">
		    			<h3>Why you need the toolkit</h3><br/>
		    			<p>It is challenging to bring claims against the tobacco industry to court, and even more so to win them. There are many reasons for this, but examples of obstacles to successful tobacco litigation have a number of features in common. This Toolkit presents ways to address these challenges. </p>
		    		</div>
		    		<div class="col-xs-5 text-center">
	              			<img src="../assets/img/h_why.png" alt="" />
		    		</div>
		    	</div>
			</div>
		</div>
		<div style="padding-top:20px;">
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-5">
		    			<h3>Contact us</h3>

		    			<div class="hp-cbox" >
			    			<h4>Secretariat of the WHO Framework Convention on Tobacco Control</h4>
							<p>
								World Health Organization
							</p>
							<p>
								Avenue Appia 20, 1211 Geneva 27, Switzerland
							</p>
							<p>Tel: + 41 22 791 5043<br />
							Fax: + 41 22 791 5830</p>

							<p>Email: <a href="mailto:fctcsecretariat@who.int">fctcsecretariat@who.int</a></p>
						</div>

		    		</div>
		    		<div class="col-xs-6 col-xs-offset-1">
		    			<h3>What is the WHO FCTC?</h3><br>
		    			<p>The WHO Framework Convention on Tobacco Control (WHO FCTC) is the first international treaty negotiated under the auspices of WHO. It was adopted by the World Health Assembly on 21 May 2003 and entered into force on 27 February 2005. It has since become one of the most rapidly and widely embraced treaties in United Nations history.
</p><p>
The WHO FCTC was developed in response to the globalization of the tobacco epidemic and is an evidence-based treaty that reaffirms the right of all people to the highest standard of health. The Convention represents a milestone for the promotion of public health and provides new legal dimensions for international health cooperation.</p><br>

		    			<a href="https://fctc.who.int/who-fctc/overview" target="_blank" class="button">Read More</a>
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
						<li><img class="homeInstructionImage" src="../assets/img/downRightArrow.png"></li>
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