<template>
	<div id="about-page" :class="{showpopup: popupvisible}">
	    <div class="container">
	    	<div class="row" style="padding:50px 0;">
	    		<div class="col-xs-4 text-center">
              		<img src="../assets/img/resources.png" alt="" style="width:300px"/>
	    		</div>
	    		<div class="col-xs-7">
	    			<div class="p30">
	    				<br>
	    				<br>
	    				<br>
		    			<h1 style="font-size:3em;">Resources</h1>
	    			</div>
	    		</div>
	    	</div>
		</div>

		<div class="p30 rel sidebanner-padding" style="background-color:#e1ecf0; margin:30px 0; padding-bottom:40px;">
			<div class="sidebanner sidebanner--white">
				<h2>List of resources below</h2>
			</div>

		    <div v-for="(resource, index) in resources" class="container">
		    	<div class="row">
		    		<div class="col-xs-12" v-if="resource.fields.categoryColour != '#ffffff'">
		    			<div class="row" style="margin:65px 0" v-bind:style="{ backgroundColor:resource.fields.categoryColour }">
		    				<div class="col-xs-3 text-center" style="margin:-50px 0;">
		    					<div v-if="resource.fields.categoryImage">
              					<img :src="resource.fields.categoryImage.fields.file.url" alt="" style="width:200px"/>
              					</div>
		    				</div>
	    					<div class="col-xs-9">
				    			<br>
				    				<h2 style="color:#fff">{{ resource.fields.title }}</h2>
				    			<br>
	    					</div>
		    			</div>
		    			<br>
		    		</div>
		    		<div class="row" v-for="item in resource.fields.categorySection">
		    			<div class="co-xs-12" v-if="item.fields.displayTitle">
	    					<div class="p30">
				    			<h3>{{ item.fields.sectionTitle }}</h3>
				    		</div>
		    			</div>
		    			<div class="col-xs-6">
	    					<div class="p30 tickle" v-html="item.fields.leftColumn">
				    		</div>
		    			</div>
		    			<div class="col-xs-6">
	    					<div class="p30 tickle" v-html="item.fields.rightColumn">
				    		</div>
		    			</div>
		    		</div>
		    		<hr>
		    	</div>
			</div>
		</div>

    <div class="popup__outer">
      <div class="popup__inner">
        <div class="popup__content">
          <div class="popup__html">
            
            <div class="popup-top">
                <h4>{{ activepopup.section }}</h4>
                <h2>{{ activepopup.header }}</h2>
                <h5 style="font-style:italic; font-weight:normal; font-size:18px;" v-if="activepopup.subHeader">{{ activepopup.subHeader }}</h5>
            </div>

            <div class="row text-left">
              <div class="col-xs-6">
                <div class="leftText">
                  <div v-html="activepopup.textLeft"></div>
                </div>
              </div>
              <div class="col-xs-6 text-center">
                <div class="leftText" style="text-align:left; margin-top:70px;" v-if="activepopup.textRight">
                  <div v-html="activepopup.textRight"></div>
                </div>
                <img :src="activepopup.imageR" alt="" >
              </div>
            </div>
            <div class="clip-container">
              <div class="row text-left">
                <div class="col-xs-12">
                  <div class="top-bar top-bar--yellow">
                    <img src="../assets/img/icons/legal.png" />
                    <div class="t1">{{ activepopup.clipH1 }}</div>
                    <span class="t2">{{ activepopup.clipH2 }}</span>
                  </div>
                </div>
                <div class="col-xs-12">
                  <div class="body-bar body-bar--yellow" v-html="activepopup.clipBody"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="popup__close" @click="closePopup()"><i class="fa fa-times" aria-hidden="true"></i></div>
      </div>
    </div>

	    <div class="loading" :class="{loaded: !popupsloading}">
	      <i class="fa fa-spinner" aria-hidden="true"></i>
	    </div>

	</div>
</template>

<script>

export default {
  name: 'resourceSection',
  data () {
    return {
      resources: [],
      popups: [],
      activepopup: [],
      popupsloading: true,
      popupvisible: false
    }
  },
  methods: {
        getData: function () {
            var self = this;
            contentfulClient.getEntries({
                content_type: 'resourceSection',
                order: 'fields.order'
            }).then(function(entries) {
            	// console.log(entries)
                var items = entries.items;
                for (var item in items) {
                	for (var i = items[item].fields.categorySection.length - 1; i >= 0; i--) {
                		items[item].fields.categorySection[i].fields.leftColumn = marked(items[item].fields.categorySection[i].fields.leftColumn)
                		items[item].fields.categorySection[i].fields.rightColumn = marked(items[item].fields.categorySection[i].fields.rightColumn)
                	}
                }
                self.resources = items;
                
            }).then(function() {
              self.getPopups();
            })
        },
        getPopups: function () {
            var self = this;
            contentfulClient.getEntries({
                content_type: 'popups'
            }).then(function(entries) {
                var items = entries.items;
                for (var item in items) {
                  if((items[item].fields).hasOwnProperty('textLeft')) {
                    items[item].fields.textLeft = marked(items[item].fields.textLeft);
                  }
                  if((items[item].fields).hasOwnProperty('textRight')) {
                    items[item].fields.textRight = marked(items[item].fields.textRight);
                  }
                  if((items[item].fields).hasOwnProperty('clipBody')) {
                    items[item].fields.clipBody = marked(items[item].fields.clipBody);
                  }
                  if((items[item].fields).hasOwnProperty('imageRight')) {
                    items[item].fields.imageR = items[item].fields.imageRight.fields.file.url
                  }
                }
                self.popups = items;
            }).then(function() {

	            setTimeout(function() {
	                $('a[data-target="popup"]').off('click', {});
	                $('a[data-target="popup"]').on('click', function(e) {
	                    e.preventDefault();
	                    var id = $(this).attr("data-id");
	                    self.setPopup(id);
	                });
	            }, 200);

            })
            self.popupsloading = false;
        },
        singlePopup: function(id) {
          // console.log("id")
          // console.log(id)
          // console.log("Allpopups")
          // console.log(this.popups)
          return this.popups.filter(function (popup) {
             return popup.sys.id == id
          })
        },
        setPopup: function(pid) {
            var spop = this.singlePopup(pid)

            // console.log("spop")
            // console.log(spop)
            
            if(spop.length >= 1) {
              this.activepopup = spop[0].fields
              this.openPopup();
            } else {
              alert("popup not found")
            }
        },
        openPopup: function() {
            $('body').addClass("noscroll")
            this.popupvisible = true;
        },
        closePopup: function() {
            $('body').removeClass("noscroll")
            var self = this;
            setTimeout(function() {
                self.activepopup = []
            }, 800);
            this.popupvisible = false;
        }
    },
    computed: {
    },
    created: function () {
      this.$parent.$emit('scrollup', 'test');
      setTimeout(this.getData, 300);
    },
}
</script>