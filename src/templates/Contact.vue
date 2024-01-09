<template>
	<div id="resources-page">
		<div class="p30 rel sidebanner-padding" style="background-color:#e1ecf0; margin:0px 0 30px 0; padding-bottom:40px;">
			<div
				class="sidebanner sidebanner--white"
				:class="{ '-inverted': isArabic }"
			>
				<h2>{{ $t('contact.title') }}</h2>
			</div>
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-8 col-xs-offset-2">
		    			<div class="p40 cbox" >
			    			<h3>{{ $t('contact.name') }}</h3>
								<br />
								<p>{{ $t('contact.WHO') }}</p>
								<p>
									{{ $t('contact.address.first') }},<br />
									{{ $t('contact.address.second') }},<br />
									{{ $t('contact.address.third') }}
								</p>
								<p>
									{{ $t('contact.phone') }}<br />
									{{ $t('contact.fax') }}
								</p>

								<p v-html="$t('contact.mail')" />
							</div>
		    		</div>
		    	</div>
			</div>

		</div>

	</div>
</template>

<script>
export default {
	name: 'Contact',

	computed: {
		isArabic() {
			return this.$i18n.locale === 'ar';
		}
	},

	created () {
	  this.$parent.$emit('scrollup', 'test');
	}
}
</script>