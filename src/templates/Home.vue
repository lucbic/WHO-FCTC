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
		    			<p class="mt20" style="font-size:1.4em">{{ $t('home.hero.description') }}</p>
		    			<router-link to="/about" class="button mt20" style="font-size:1.4em">{{ $t('home.hero.cta') }}</router-link>
	    			</div>
	    		</div>
	    	</div>
		</div>
		<div class="p30 rel sidebanner-padding" style="background-color:#e1ecf0; margin:30px 0; padding-bottom:40px;">
			<div class="sidebanner sidebanner--white">
				<h2>{{ $t('home.howTo.title') }}</h2>
			</div>
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-4">
		    			<div class="stepper">
		    				<div class="img__container">
              					<img src="../assets/img/home_s1.png" alt="" />
		    				</div>
			    			<h4>{{ $t('home.howTo.step.one.title') }}</h4>
			    			<p>{{ $t('home.howTo.step.one.description') }}</p>
		    			</div>
		    		</div>
		    		<div class="col-xs-4">
		    			<div class="stepper">
		    				<div class="img__container">
              					<img src="../assets/img/home_s2.png" alt="" />
		    				</div>
			    			<h4>{{ $t('home.howTo.step.two.title') }}</h4>
								<p>{{ $t('home.howTo.step.two.description') }}</p>
		    			</div>
		    		</div>
		    		<div class="col-xs-4">
		    			<div class="stepper">
		    				<div class="img__container">
              					<img src="../assets/img/home_s3.png" alt="" />
		    				</div>
			    			<h4>{{ $t('home.howTo.step.three.title') }}</h4>
								<p>{{ $t('home.howTo.step.three.description') }}</p>
		    			</div>
		    		</div>
		    	</div>
			</div>
		</div>
		<div class="p40" style="margin:80px 0">
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-8 col-xs-offset-2 text-center">
		    			<h3>{{ $t('home.whereToStart.title') }}</h3><br>
		    			<p>{{ $t('home.whereToStart.description') }}</p>
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
			    			<p v-html="$t('home.whereToStart.dontKnow.description')"/>
			    			<a href="#" class="button mt20" @click.prevent="showpop = !showpop">{{ $t('home.whereToStart.dontKnow.cta') }}</a>
		    			</div>
		    		</div>
		    		<div class="col-xs-5 col-xs-offset-2 col-lg-4 col-lg-offset-2 text-center">
		    			<div class="start-block p30">
								<p v-html="$t('home.whereToStart.doKnow.description')"/>
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
			    			<h3>{{ $t('home.whereToStart.doKnow.scenario.one.title') }}</h3>
			    			<p v-html="$t('home.whereToStart.doKnow.scenario.one.description')" />
			    		</router-link>
		    		</div>
		    		<div class="col-xs-4 text-center">
		    			<router-link to="/scenario/2">
	              			<img src="../assets/img/home_s2_2.png" alt="" />
								<h3>{{ $t('home.whereToStart.doKnow.scenario.two.title') }}</h3>
								<p v-html="$t('home.whereToStart.doKnow.scenario.two.description')" />
			    		</router-link>
		    		</div>
		    		<div class="col-xs-4 text-center">
		    			<router-link to="/scenario/3">
	              			<img src="../assets/img/home_s2_3.png" alt="" />
			    			<h3>{{ $t('home.whereToStart.doKnow.scenario.three.title') }}</h3>
								<p v-html="$t('home.whereToStart.doKnow.scenario.three.description')" />
			    		</router-link>
		    		</div>
		    	</div>
			</div>
		</div>

		<div class="p30" style="background-color:#e1ecf0; padding:80px 0; margin:40px 0">
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-7">
		    			<h3>{{ $t('home.why.title') }}</h3><br/>
		    			<p>{{ $t('home.why.description') }}</p>
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
		    			<h3>{{ $t('home.contact.title') }}</h3>

		    			<div class="hp-cbox" >
			    			<h4>{{ $t('home.contact.name') }}</h4>
							<p>
								{{ $t('home.contact.WHO') }}
							</p>
							<p>
								{{ $t('home.contact.address') }}
							</p>
							<p>
								{{ $t('home.contact.phone') }}
								<br />
								{{ $t('home.contact.fax') }}
							</p>

							<p v-html="$t('home.contact.mail')"/>
						</div>

		    		</div>
		    		<div class="col-xs-6 col-xs-offset-1">
		    			<h3>{{ $t('home.whatIsIt.title') }}</h3><br>
		    			<p>{{ $t('home.whatIsIt.description.firstP') }}</p>
		    			<p>{{ $t('home.whatIsIt.description.secondP') }}</p>
							<br/>
		    			<a href="https://fctc.who.int/who-fctc/overview" target="_blank" class="button">
								{{ $t('home.whatIsIt.cta') }}
							</a>
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
								<h2>{{ $t('home.popup.question.one.title') }}</h2>
							</div>
						</div>
					</div>
					<div class="pop-exp text-left">
						<span class="heading">{{ $t('home.popup.question.one.heading') }}</span>
						<p>{{ $t('home.popup.question.one.description') }}</p>
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
								<h2 style="max-width:400px;">{{ $t('home.popup.question.two.title') }}</h2>
							</div>
						</div>
					</div>
					<div class="pop-exp text-left">
						<span class="heading">{{ $t('home.popup.question.two.heading') }}</span>
						<p>{{ $t('home.popup.question.two.description') }}</p>
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