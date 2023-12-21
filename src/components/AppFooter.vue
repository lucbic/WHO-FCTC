<template>
  <footer class="app-footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-4">
          <div class="logo-box text-center">
            <img src="../assets/img/FCTC_logo.png" alt="">
          </div>
        </div>

        <div class="col-xs-3">
          <div class="p30 footer-social">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-youtube-play"></i>
          </div>
        </div>

        <div class="col-xs-5">
          <div class="p30 footer-links">
            <ul class="list-inline">
              <li><router-link to="/about">{{ $t('app.footer.about.title') }}</router-link></li>
              <li><router-link to="/resources">{{ $t('app.footer.resources.title') }}</router-link></li>
              <li><router-link to="/contact">{{ $t('app.footer.contact.title') }}</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="scss">
.app-footer {
	background-color: #ea9a56;
	color: #fff;

	a { color: #fff; }

	.logo-box {
		background-color: #e18b41;
		padding: 20px;
		padding-bottom: 150px;
	}

	.footer {
		&-social {
			i {
				display: inline-block;
				width:40px;
				line-height: 38px;
				font-size: 25px;
				color: #ea9a56;
				background-color: #fff;
				text-align: center;
				margin-right: 10px;
				margin-bottom: 10px;
				border-radius: 40px;
				padding-top:2px;
			}
		}


		&-links {
			a {
				line-height:40px;
				font-size: 16px;
				padding: 0 15px;
				font-weight: 500;
				text-decoration: none;
				letter-spacing: 0.1em;

				&:hover {
					color: #fff;
				}
			}
		}
	}
}

</style>