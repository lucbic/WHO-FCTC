<template>
	<div id="home-page">
		<div class="p40" style="margin:80px 0">
			<div class="container h_scenarios">
				<div class="row">
					<br/>
					<br/>
					<div
						v-for="scenario in scenarios"
						:key="scenario.id"
						class="col-xs-4 text-center"
					>
						<router-link :to="scenario.link">
							<img :src="scenario.img" alt="" />

							<h3>{{ scenario.title }}</h3>

							<p v-html="scenario.description" />
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
	name: 'Scenario',

	data () {
		return {
		  showpop: false,
		  popq: 1,
			images: { one: '', two: '', three: '' }
		}
	},

	computed: {
		isArabic () {
			return this.$i18n.locale === 'ar';
		},

		scenarios () {
			const scenarios = [
				{
					id: 1,
					title: this.$t('scenario.first.title'),
					description: this.$t('scenario.first.description'),
					img: this.images.one,
					link: '/scenario/1'
				},
				{
					id: 2,
					title: this.$t('scenario.second.title'),
					description: this.$t('scenario.second.description'),
					img: this.images.two,
					link: '/scenario/2'
				},
				{
					id: 3,
					title: this.$t('scenario.third.title'),
					description: this.$t('scenario.third.description'),
					img: this.images.three,
					link: '/scenario/3'
				}
			]

			return this.isArabic ? scenarios.reverse() : scenarios;
		}
	},

	async created () {
		this.images.one = (await import('../assets/img/home_s2_1.png')).default
		this.images.two = (await import('../assets/img/home_s2_2.png')).default
		this.images.three = (await import('../assets/img/home_s2_3.png')).default

	  this.$parent.$emit('scrollup', 'test');
	}
}
</script>