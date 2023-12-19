<template>
	<div id="resources-page">
		<div class="p30 rel sidebanner-padding" style="background-color:#e1ecf0; margin:0px 0 30px 0; padding-bottom:40px;">
			<div class="sidebanner sidebanner--white">
				<h2>Contact Us</h2>
			</div>
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xs-8 col-xs-offset-2">
		    			<div class="p40 cbox" >
			    			<h3>Secretariat of the WHO Framework Convention on Tobacco Control</h3>
							<p><br />
								World Health Organization
							</p>
							<p>
								Avenue Appia 20,<br />1211 Geneva 27,<br />Switzerland
							</p>
							<p>Tel: + 41 22 791 5043<br />
							Fax: + 41 22 791 5830</p>

							<p>Email: <a href="mailto:fctcsecretariat@who.int">fctcsecretariat@who.int</a></p>
						</div>
		    		</div>
		    	</div>
			</div>

		</div>

	</div>
</template>

<script>
export default {
  	name: 'resources',
	created: function () {
	  this.$parent.$emit('scrollup', 'test');
	}
}
</script>