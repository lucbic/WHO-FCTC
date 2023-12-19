<template>
  <div id="scenarios-page" :class="{showpopup: popupvisible}">

    <transition name="fader" mode="out-in">
      <div v-if="report" v-bind:key="report">

        <div class="container hide-print">
          <div class="row" style="padding:50px 0;">
            <div class="col-xs-4 text-center">
                    <img src="../assets/img/reports-head.png" alt="" />
            </div>
            <div class="col-xs-7">
              <div class="p30">
                <br>
                <h1>Results Report</h1>
                <p class="mt20" style="font-size:1.4em">Congratulations! You have have identified the litigation pathway best suited to your jurisdiction.</p>
                <a href="#print" class="button mt20" style="font-size:1.4em; text-transform:uppercase" @click.prevent="printpage">Print Report</a>
              </div>
            </div>
          </div>
        </div>

        <div class="p30 rel sidebanner-padding" style="background-color:#e1ecf0; margin:30px 0; padding-bottom:40px;">
          <div class="sidebanner sidebanner--white">
            <h1 class="hide-screen" style="padding-left:10px;">Results Report</h1>
            <h2>Your identified path</h2>
          </div>
            
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="row" style="background-color:#ea9a56; margin:65px 0">
                  <div class="col-xs-3 text-center" style="margin:-50px 0;">
                      <img src="../assets/img/r-healthcare.png" alt="" style="width:200px"/>
                  </div>
                  <div class="col-xs-9">
                      <h2 style="color:#fff; margin-top:30px; margin-bottom:5px;">{{ selectedReport.title }}</h2>
                      <p style="color:#fff; font-weight:500;"><i>{{ selectedReport.subTitle }}</i></p>
                    <br>
                  </div>
                </div>
                <br>
              </div>
              <div class="col-xs-6 print-full">
                <div v-html="selectedReport.introLeft"></div>
                <div v-html="selectedReport.introRight"></div>
              </div>
              <div class="col-xs-6 print-full">
                <div class="tickle print-list" v-html="selectedReport.leftCol"></div>
                <div class="tickle print-list" v-html="selectedReport.rightCol"></div>
              </div>
            </div>
          </div>
        </div>


        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <br><br>
            </div>
          </div>
        </div>

        <div class="container hide-screen print-break">
          <div class="row">
            <div class="col-xs-12">
              <div style="padding-left:30px">
                <h3>Your path at a glance</h3>
                <hr>
                <span v-for="(question, index) in questions" class="print-break">
                      <h4>Question {{ index + 1 }}</h4>
                      <p>{{ question.title }}</p>
                      <span v-html="question.explanationIntro"></span>
                      <div v-html="question.explanationFull"></div>
                      <h5>You answered: <span v-if="question.choice == 'no'">No</span> <span v-if="question.choice == 'yes'">Yes</span></h5>
                      <br><br>
                </span>
              </div>
              
            </div>
            <div class="col-xs-12">
              <div style="padding-left:30px">
                <h3>The way Forward</h3>
                 <hr>
                 <div v-html="selectedReport.theWayForward"></div>
              </div>
              
            </div>
          </div>
        </div>
            
        <div class="container hide-print">
          <div class="row reprow">
            <div class="col-xs-6">
              <div style="margin-top:30px">
                <h3>Your path at a glance</h3>
                <div style="position:relative">
                  <div class="pexp">
                    <p>Hover over the decision tree nodes to review questions in the scenario.</p>
                  </div>
                  <div class="text-center">
                    <div class="treee">
                      <img src="../assets/img/rt-s1.png" alt=""  style="max-height:600px;" v-if="selectedScenario.scenarioNumber == 1" />
                      <img src="../assets/img/rt-s2.png" alt=""  style="max-height:600px;" v-if="selectedScenario.scenarioNumber == 2" />
                      <img src="../assets/img/rt-s3.png" alt=""  style="max-height:600px;" v-if="selectedScenario.scenarioNumber == 3" />

                      <span v-for="(question, index) in questions" class="treee__check"  :class="[question.questionCode, question.choice]">
                          <div class="treee__pop">
                            <h3>Question {{ index + 1 }}</h3>
                            <p>{{ question.title }}</p>
                          </div>
                      </span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-6 res_column">
              <div class="p30" style="background-color:#fff5df">
                <h3>Helpful Resources</h3>
                <div class="row" v-if="selectedReport.generalInfo">
                  <div class="col-xs-2">
                    <img src="../assets/img/r-1.png" alt="" />
                  </div>
                  <div class="col-xs-10">
                    <h4>General Info</h4>
                    <div class="" v-html="selectedReport.generalInfo"></div>
                  </div>
                </div>
                <div class="row" v-if="selectedReport.enablingLegislation">
                  <div class="col-xs-2">
                    <img src="../assets/img/r-2.png" alt="" />
                  </div>
                  <div class="col-xs-10">
                    <h4>Enabling Legislation</h4>
                    <div class="" v-html="selectedReport.enablingLegislation"></div>
                  </div>
                </div>
                <div class="row" v-if="selectedReport.caseBriefs">
                  <div class="col-xs-2">
                    <img src="../assets/img/r-3.png" alt="" />
                  </div>
                  <div class="col-xs-10">
                    <h4>Case Briefs</h4>
                    <div class="" v-html="selectedReport.caseBriefs"></div>
                  </div>
                </div>
                <div class="row" v-if="selectedReport.legalExplanations">
                  <div class="col-xs-2">
                    <img src="../assets/img/r-4.png" alt="" />
                  </div>
                  <div class="col-xs-10">
                    <h4>Legal Explanations</h4>
                    <div class="" v-html="selectedReport.legalExplanations"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="p30 rel sidebanner-padding hide-print" style="; margin:0; padding-bottom:20px;">
          <div class="sidebanner sidebanner--white">
            <h2>The way forward</h2>
          </div>
            
          <div class="container">
            <div class="row">
              <div class="col-xs-5">
                <br><br>
                 <div v-html="selectedReport.theWayForward"></div>
              </div>
              <div class="col-xs-2">
                  <img src="../assets/img/r-branch.png" alt="" />
              </div>
              <div class="col-xs-5 curScenario">
                  <router-link to="/scenario/1"><img src="../assets/img/r-s1.png" alt="" :class="{current: currentScenario == 1}" /></router-link>
                  <router-link to="/scenario/2"><img src="../assets/img/r-s2.png" alt="" :class="{current: currentScenario == 2}" /></router-link>
                  <router-link to="/scenario/3"><img src="../assets/img/r-s3.png" alt="" :class="{current: currentScenario == 3}" /></router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="container" style="margin-top:80px;">
          <div class="row">
            <div class="col-xs-6 tickle hide-print">
              <h3>Additional Resources</h3><br>
              <ul>
                <li><a href="http://untobaccocontrol.org/impldb/article-19/" target="_blank">WHO FCTC Implementation Database</a></li>
                <li><a href="http://www.who.int/fctc/cop/cop7/Documentation-Decisions/en/ " target="_blank">WHO FCTC Conference of the Parties (COP) Decisions</a></li>
                <li><a href="https://www.industrydocumentslibrary.ucsf.edu/tobacco/ " target="_blank">Truth Tobacco Industry Documents: ‘Industry Documents Library’ (UCSF)</a></li>
                <li><a href="https://www.tobaccocontrollaws.org/" target="_blank">Campaign for Tobacco-Free Kids: Tobacco Control Laws and Litigation</a></li>
                <li><a href="https://www.corporateaccountability.org/tobacco/" target="_blank">Corporate Accountability International</a></li>
              </ul>
            </div>
            <div class="col-xs-5 col-xs-offset-1">
              <h3>Contact us</h3>

              <div class="hp-cbox" >
                <h4>Convention Secretariat</h4>
              <p>
                WHO Framework Convention on Tobacco Control<br>
                World Health Organization
              </p>
              <p>
                Avenue Appia 20, 1211 Geneva 27, Switzerland
              </p>
              <p>Tel: + 27 78 393 0200</p>

              <p>Email: <a href="mailto:tom@lushomo.net">tom@lushomo.net</a></p>
            </div>

            </div>
          </div>
      </div>


      </div>

      <div v-if="!report" v-bind:key="report">
        <div class="container" id="outer" :class="{loaded: !loading}">
          <div class="row">

            <!-- Scenario Output -->

            <div class="col-sm-4">
              <div style="position:relative;">
                <div class="fixed-scenario">
                  <span v-if="selectedScenario.hasImage">
                    <img height="250" :src="selectedScenario.mainIcon.fields.file.url" alt="" class="scenarioIcon">
                  </span>

                  <h3>{{ selectedScenario.title }}:</h3>
                  <h4>{{ selectedScenario.byline1 }}<br/>{{ selectedScenario.byline2 }}</h4>

                    <div class="treeContainer">
                      <img src="../assets/img/rt-s1-.png" alt=""  style="max-width:100%;" v-if="selectedScenario.scenarioNumber == 1" />
                      <img src="../assets/img/rt-s2-.png" alt=""  style="max-width:100%;" v-if="selectedScenario.scenarioNumber == 2" />
                      <img src="../assets/img/rt-s3-.png" alt=""  style="max-width:100%;" v-if="selectedScenario.scenarioNumber == 3" />

                        <div v-for="(question, index) in questions" class="treee__check2"  :class="[question.questionCode, question.choice]" key="question.questionCode"></div>
                    </div>
                </div>
              </div>
            </div>
            
            <!-- Questions -->
            <div class="col-sm-8" style="padding-bottom:300px;">
                <transition-group name="list" tag="div">
              <div v-for="(question, index) in questions" v-bind:key="index" >
                <div class="row">
                  <div class="col-sm-3" v-if="question.hasImage">
                    <div class="row question_choices">
                      <div class="col-xs-12">
                        <div class="questionIcon__container">
                          <span v-if="question.icon.fields.file">
                          <img :src="[question.icon.fields.file.url + '#' + last]" alt="" class="questionIcon" :class="{visible: question.showanimation}">
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="questionheader col-sm-9">
                    <span>Question {{ index + 1 }}</span>
                    <h2>{{ question.title }}</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <div class="row question_choices" v-if="question.yesQuestion || question.noQuestion || question.endYes || question.endNo">
                      <div class="row question_yn">
												<img class="instructions" src="../assets/img/UpLeftArrow.png" v-if="index == 0">
                        <div class="col-xs-6">
                          <a href="#" class="yes" v-if="question.yesQuestion && !question.endYes" @click.prevent="publishQuestion(question.yesQuestion.sys.id, index, 'yes')" :class="{selected: question.choice == 'yes'}"><i class="fa fa-check" aria-hidden="true"></i></a>

                          <a href="#" class="yes" v-if="question.endYes" @click.prevent="finishScenario(index, 'yes')" :class="{selected: question.choice == 'yes'}"><i class="fa fa-check" aria-hidden="true"></i></a>
                        </div>
                        <div class="col-xs-6">
                          <a href="#" class="no" v-if="question.noQuestion && !question.endNo" @click.prevent="publishQuestion(question.noQuestion.sys.id, index, 'no')" :class="{selected: question.choice == 'no'}"><i class="fa fa-times" aria-hidden="true"></i></a>

                          <a href="#" class="no" v-if="question.endNo" @click.prevent="finishScenario(index, 'no')" :class="{selected: question.choice == 'no'}"><i class="fa fa-times" aria-hidden="true"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row explanations" :class="{open: index < questions.length - 1}" style="position:relative">
                  <div class="col-xs-12" style="position:static ;padding-bottom:30px"  v-if="question.yesQuestion || question.noQuestion || question.endYes || question.endNo">
                    <div class="aniline__container" :class="{open: checkBar(index), no: question.choice == 'no', yes: question.choice == 'yes'}" >
                      <div class="aniline__yesno"></div>
                      <div class="aniline__updown"><i aria-hidden="true" class="fa fa-angle-down"></i></div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <h3>Explanation:</h3>
                    <span v-html="question.explanationIntro"></span>
                    <div class="openTextButton" :class="{ open: question.expanded }"><i @click="expandExplanation(index)" v-show="question.explanationFull" class="fa fa-angle-down" aria-hidden="true"></i></div>
                      <!-- <hr> -->
                    <span class="hiddenText" :class="{ showMore: question.expanded }"><div v-html="question.explanationFull" class="expInner"></div></span>
                  </div>
                </div>

              <div :id="['index' + index]" class="div-bottom"></div>
              </div>
                </transition-group>

                <transition name="fadedelay">
                <div class="row" v-if="finalarrow == questions.length - 1">
                  <div class="col-xs-12 text-center">
                    <div class="congrats">
                      <h2>Congratulations! <span>You have completed your path.</span></h2>
                      <a href="#" class="button" @click.prevent="displayReport(lastQuestionCode)">View Report</a>
                    </div>
                  </div>
                  <!-- <div class="col-xs-6 text-left">
                    <a href="#" class="button" @click.prevent="switches = !switches">Change Scenarios</a>
                  </div> -->
                </div>
              </transition>

            </div>


            
            <!-- End Questions -->
          </div>
        </div>
      </div>

    </transition>
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

    <div class="loading" :class="{loaded: !loading}">
      <i class="fa fa-spinner" aria-hidden="true"></i>
    </div>

    <div class="switch-cover" :class="{visible: switches}">

      <div class="container h_scenarios">
        <div class="row">
          <div class="col-xs-12 text-center" style="height:130px">
                  
          </div>
          <div class="col-xs-4 text-center onit" :class="{on:currentScenario == 1}">
            <a href="/#/scenario/1" @click="changeScenario(1)">
                    <img src="../assets/img/home_s2_1.png" alt="" />
              <h3>Scenario 1</h3>
              <p>Healthcare Cost Recovery</p>
            </a>
          </div>
          <div class="col-xs-4 text-center onit" :class="{on:currentScenario == 2}">
            <a href="/#/scenario/2" @click="changeScenario(2)">
                    <img src="../assets/img/home_s2_2.png" alt="" />
              <h3>Scenario 2</h3>
              <p>Access to Justice on a<br/>Collective+Individual Basis</p>
            </a>
          </div>
          <div class="col-xs-4 text-center onit" :class="{on:currentScenario == 3}">
            <a href="/#/scenario/3" @click="changeScenario(3)">
                    <img src="../assets/img/home_s2_3.png" alt="" />
              <h3>Scenario 3</h3>
              <p>Public Interest Litigation</p>
            </a>
          </div>
        </div>
        <div class="close-button" @click.prevent="switches = !switches"><i class="fa fa-times"></i></div>
      </div>
    </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      scenarios: [],
      questions: [],
      popups: [],
      activepopup: [],
      fetchedEntries: [],
      currentScenario: 1,
      lastCode: "Loading",
      last: "Loading",
      selectedScenario: [],
      loading: true,
      switches: false,
      popupsloading: true,
      popupvisible: false,
      reports: [],
      selectedReport:{},
      report: false,
      reportLoading: false,
      finalarrow: null,
    }
  },
  methods: {
        getData: function () {
            var self = this;
            contentfulClient.getEntries({
                content_type: 'scenarios',
                order: 'fields.scenarioNumber'
            }).then(function(entries) {
                var items = entries.items;
                for (var item in items) {

                    items[item].fields.initialQuestion.fields.explanationIntro = marked(items[item].fields.initialQuestion.fields.explanationIntro);

                    if(items[item].fields.initialQuestion.fields.explanationFull){
                        items[item].fields.initialQuestion.fields.explanationFull = marked(items[item].fields.initialQuestion.fields.explanationFull);
                    }
                  
                    items[item].fields.initialQuestion.fields.choice = "none";
                    items[item].fields.initialQuestion.fields.expanded = false;
                    items[item].fields.initialQuestion.fields.showanimation = true;
                }
              
                self.scenarios = items;
                
            }).then(function() {
              self.changeScenario(self.currentScenario);
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
                // console.log(self.popups)
            })
            self.popupsloading = false;
        },
        getAnswer: function (id, index, answer) {
            var self = this;
            contentfulClient.getEntries({
                content_type: 'questions',
                "sys.id" : id
            })
            .then(function(entry) {
                self.preStoreEntry(entry.items[0].fields.yesQuestion)
                self.preStoreEntry(entry.items[0].fields.noQuestion)
                self.storeEntry(entry.items[0])
            }).then(function() {
                if(index) {
                    self.publishQuestion(id, index, answer)
                }
            })
        },
        changeScenario: function(scenarioNumber) {
            this.currentScenario = scenarioNumber,
            this.$parent.$emit('scrollup', 'test');
            this.loading = true;
            this.switches = false;
            var self = this
            var selected = this.single(scenarioNumber);
            this.selectedScenario = selected[0].fields

            this.questions = [];
            
            this.loading = false;

            var theQuestion = this.selectedScenario.initialQuestion.fields
            this.questions.push(theQuestion);

            if(theQuestion.yesQuestion.sys.id){ this.getAnswer(theQuestion.yesQuestion.sys.id) }
            if(theQuestion.noQuestion.sys.id){ this.getAnswer(theQuestion.noQuestion.sys.id) }

                
            setTimeout(function() {
                $('a[data-target="popup"]').off('click', {});
                $('a[data-target="popup"]').on('click', function(e) {
                    e.preventDefault();
                    var id = $(this).attr("data-id");
                    self.setPopup(id);
                });
            }, 200);

        },
        single: function(scenarioNumber) {
          return this.scenarios.filter(function (scenario) {
             return scenario.fields.scenarioNumber == parseInt(scenarioNumber)
          })
        },
        singleQuestion: function(id) {
          return this.fetchedEntries.filter(function (entry) {
             return entry.id == id
          })
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
        preStoreEntry: function(entry) {
            if(entry) {
                this.storeEntry(entry)
            }
        },
        storeEntry: function(entry) {

            entry.fields.explanationIntro = marked(entry.fields.explanationIntro);
            if(entry.fields.explanationFull) {
                entry.fields.explanationFull = marked(entry.fields.explanationFull);
            }
      
          entry.fields.expanded = false;
          entry.fields.choice = "none";
          var new_entry = {
            id : entry.sys.id,
            fields : entry.fields,
          }
          this.fetchedEntries.push(new_entry);
        },
        publishQuestion: function(id, index, answer) {
            var self = this
            this.questions[index].choice = answer


            this.questions.length=index+1
            var entry = this.singleQuestion(id);
            
            if(entry.length > 0) {
                this.questions.push(entry[0].fields);
                this.questions[index+1].showanimation = false;
                this.questions[index+1].choice = "none";
                this.scrollToIndex(index);

                setTimeout(function() {
                    $('a[data-target="popup"]').off('click', {});
                    $('a[data-target="popup"]').on('click', function(e) {
                        e.preventDefault();
                        var id = $(this).attr("data-id");
                        self.setPopup(id);
                    });
                }, 200);

            } else {
                this.getAnswer(id, index, answer)
            }

        },
        finishScenario: function(index, answer) {
            this.questions[index].choice = answer;
            this.questions.length=index+1
            this.finalarrow = index
            this.scrollToIndex(index);
        },
        scrollToIndex: function(index) {
            var self = this;
            var thisindex = "#index" + parseInt(index)
            var cancelScroll

            var options = {
              container: "body",
              duration: 1000,
              easing: "ease-in-out",
              offset: -100,
              cancelable: true,
              onDone: function() {  setTimeout(function() { self.lastAnimation() }, 0); },
              onCancel: false,
              x: false,
              y: true
            }

            setTimeout(function() {
                cancelScroll = self.$scrollTo(thisindex, 1000, options)
                setTimeout(function() {
                    var ql = self.questions.length - 1;
                    self.questions[ql].showanimation = true;
                }, 1000);
            }, 1000);
        },
        expandExplanation: function (index) {
          this.questions[index].expanded = !this.questions[index].expanded;
        },
        lastAnimation: function() {
            var ql = this.questions.length - 1;
            this.questions[ql].showanimation = true;
            this.last = Date.now();
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
        },
        checkBar: function(index) {
          if(index < this.questions.length - 1) {
            return true
          }
          if (this.finalarrow == index) {
            return true
          }
        },
        displayReport(reportCode){
          var self = this
          this.loading = true;
          var reportCode = this.lastQuestionCode
          var singleReport = this.getOneReport(reportCode)

          if(singleReport.length == 1) {
            this.selectedReport = singleReport[0].fields
            setTimeout(function() { 
              self.$parent.$emit('scrollup', 'test');
              self.report = true;
              self.reportLoading = true;
              
              // console.log("reporting");

              $('a[data-target="popup"]').off('click', {});
              setTimeout(function() { 
                $('a[data-target="popup"]').on('click', function(e) {
                    e.preventDefault();
                    var id = $(this).attr("data-id");
                    // console.log(id);
                    self.setPopup(id);
                });
              }, 500);

              self.loading = false;
            }, 500);
          } else {
            this.fetchReports(reportCode)
          }
        },
        getOneReport: function (code) {
          return this.reports.filter(function (report) {
             return report.fields.reportCode == code
          })
        },
        fetchReports: function (code) {
          // console.log("Fetch Reports from Contentful - and then populate with " + code)

          var self = this;
            contentfulClient.getEntries({
                content_type: 'reports',
            }).then(function(entries) {
                var items = entries.items;
                for (var item in items) {

                  if(items[item].fields.introLeft){
                    items[item].fields.introLeft = marked(items[item].fields.introLeft);
                  }
                  if(items[item].fields.introRight){
                    items[item].fields.introRight = marked(items[item].fields.introRight);
                  }
                  if(items[item].fields.leftCol){
                    items[item].fields.leftCol = marked(items[item].fields.leftCol);
                  }
                  if(items[item].fields.rightCol){
                    items[item].fields.rightCol = marked(items[item].fields.rightCol);
                  }
                  if(items[item].fields.generalInfo){
                    items[item].fields.generalInfo = marked(items[item].fields.generalInfo);
                  }
                  if(items[item].fields.enablingLegislation){
                    items[item].fields.enablingLegislation = marked(items[item].fields.enablingLegislation);
                  }
                  if(items[item].fields.caseBriefs){
                    items[item].fields.caseBriefs = marked(items[item].fields.caseBriefs);
                  }
                  if(items[item].fields.legalExplanations){
                    items[item].fields.legalExplanations = marked(items[item].fields.legalExplanations);
                  }
                  if(items[item].fields.theWayForward){
                    items[item].fields.theWayForward = marked(items[item].fields.theWayForward);
                  }
                }
              
                self.reports = items;
                // console.log(items)
            }).then(function() {
              self.displayReport(code)
            })
        },
        printpage: function () {
          window.print();
        }
    },
    computed: {
        endOfLine: function () {
          if (this.questions.length >= 1) { 
            if (this.questions[this.questions.length - 1].endOfTheLine) {
              return true
            } else {
              return false
            }
          }
        },
        lastQuestionCode: function () {
          return this.questions[this.questions.length - 1].questionCode
        },
        questionsList: function() {
          return this.questions
        }
    },
    created: function () {
      this.currentScenario = this.$route.params.id
      this.$parent.$emit('scrollup', 'test');
      setTimeout(this.getData, 500);
    },
    watch: {
      '$route.params.id': function (id) {
        self = this
        if(this.$route.params.id !== this.currentScenario) {
          this.loading = true
          setTimeout(function() {
            self.currentScenario = self.$route.params.id
            self.changeScenario(self.currentScenario);
            self.finalarrow = null
            self.report = false
            self.reportLoading = false
          }, 1750);
        }
      }
    },
}
</script>