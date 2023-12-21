<template>
	<div id="about-page">
		<div style="background-color:#f5f9fa">
			<div class="container">
				<div class="row" style="padding:50px 0;">
					<div class="col-xs-4 text-center">
						<img src="../assets/img/ani/1.gif" alt="" />
					</div>

					<div class="col-xs-8">
						<div class="p30">
							<br>
							<h1>{{ $t('about.hero.title') }}</h1>
							<p style="font-size:1.5em;">{{ $t('about.hero.description') }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row" style="padding:50px 0;">
				<div class="col-xs-12 text-center">
					<img src="../assets/img/abranch_1.png" alt="" style="margin-top:-140px; margin-bottom:30px; margin-right:110px;"/>
				</div>

				<div class="col-xs-6">
					<div class="p30" style="background-color:#e1ecf0; min-height:430px">
						<h3>{{ $t('about.notes.title') }}</h3><br/>

						<ul class="ticklist">
							<li v-for="item in $t('about.notes.items')" v-html="item" />
						</ul>
					</div>
				</div>

				<div class="col-xs-6">
					<div class="p30" style="background-color:#e1ecf0; min-height:430px">
						<h3>{{ $t('about.input.title') }}</h3><br/>

						<ul class="ticklist">
							<li v-for="item in $t('about.input.items')" v-html="item" />
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row" style="padding:0 0 50px 0;">
				<div class="col-xs-6">
					<h3>{{ $t('about.why.title') }}</h3><br>
					<p>{{ $t('about.why.description.firstP') }}</p>
					<p>{{ $t('about.why.description.secondP') }}</p>
				</div>
				<div class="col-xs-6">
					<img src="../assets/img/7.gif" width="455" height="227">
					<br/>
					<blockquote>
						{{ $t('about.why.quote') }}
					</blockquote>
				</div>
			</div>
		</div>

		<div class="p30 rel sidebanner-padding" style="background-color:#e1ecf0; margin:30px 0; padding-bottom:40px;">
			<div class="sidebanner sidebanner--white" :class="{ '-inverted': isArabic }">
				<h2>{{ $t('about.how.title') }}</h2>
			</div>

			<div class="container">
				<div class="row">
					<div class="col-xs-10 col-xs-offset-1 text-center">
						<p style="padding:0 40px;">{{ $t('about.how.description') }}</p>
						<br>
					</div>

					<template v-if="isArabic">
						<div class="col-xs-3">
							<img src="../assets/img/10.gif">
							<span class="numbd">4</span>
							<p v-html="$t('about.how.item.four')" />
						</div>

						<div class="col-xs-3">
							<img src="../assets/img/11.gif">
							<span class="numbd">3</span>
							<p v-html="$t('about.how.item.three')" />
						</div>

						<div class="col-xs-3">
							<img src="../assets/img/9.gif">
							<span class="numbd">2</span>
							<p v-html="$t('about.how.item.two')" />
						</div>

						<div class="col-xs-3">
							<img src="../assets/img/8.gif">
							<span class="numbd">1</span>
							<p v-html="$t('about.how.item.one')" />
						</div>
					</template>

					<template v-else>
						<div class="col-xs-3">
							<img src="../assets/img/8.gif">
							<span class="numbd">1</span>
							<p v-html="$t('about.how.item.one')" />
						</div>

						<div class="col-xs-3">
							<img src="../assets/img/9.gif">
							<span class="numbd">2</span>
							<p v-html="$t('about.how.item.two')" />
						</div>

						<div class="col-xs-3">
							<img src="../assets/img/11.gif">
							<span class="numbd">3</span>
							<p v-html="$t('about.how.item.three')" />
						</div>

						<div class="col-xs-3">
							<img src="../assets/img/10.gif">
							<span class="numbd">4</span>
							<p v-html="$t('about.how.item.four')" />
						</div>
					</template>
				</div>

				<div class="row">
					<div class="col-xs-12 text-center">
						<img src="../assets/img/abranch_2.png" alt="" style="width:90%"/>
					</div>

					<div class="col-xs-12">
						<div class="row" style="background-color:#fff;">
							<div class="col-xs-8">
								<br><br>
								<p style="display:block; padding:10px 0 30px 50px;">{{ $t('about.how.card') }}</p>
							</div>

							<div class="col-xs-4 text-right">
								<img src="../assets/img/eg_toolkit.png" alt="" style="margin:-30px 0"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-xs-12 text-center">
					<img src="../assets/img/abranch_3.png" alt=""/>
				</div>

				<div class="col-xs-6">
					<div class="p40">
						<h3>{{ $t('about.FCTC.title') }}</h3><br>
						<p>{{ $t('about.FCTC.description') }}</p><br>
						<ul class="ticklist">
							<li v-for="item in $t('about.FCTC.items')">
								<p>{{ item }}</p>
							</li>
						</ul><br>
						<a href="http://www.who.int/fctc/en/" target="_blank" class="button">
							{{ $t('about.FCTC.cta') }}
						</a>
					</div>
				</div>

				<div class="col-xs-6">
					<div class="p40" style="background-color:#e1ecf0">
						<h3>{{ $t('about.links.title') }}</h3><br>
						<ul class="ticklist">
							<li v-for="item in $t('about.links.items')">
								<p>{{ item }}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'about',

	created () {
	  this.$emit('scrollup', 'test');

		echo.init({
			offsetVertical: 300,
			throttle: 250,
			unload: false,
			callback: function(element, op) {
				if(op === 'load') {
				  element.classList.add('loaded');
				} else {
				  element.classList.remove('loaded');
				}
			}
		});
	},

	computed: {
		isArabic () {
			return this.$i18n.locale === 'ar';
		}
	}
}
</script>