<template>
  <v-parallax src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="100vh">
    <v-app style = "background: rgb(0,0,0,0)" fill-height>
      
    <v-toolbar  app color="rgb(0,0,0,0.7)" dark >
    <v-toolbar-title class="headline text-uppercase" dark>
     <v-layout row wrap>
     <v-btn fab small @click="go()" flat>
        <span class="display-1"><</span>
     </v-btn>
        <v-flex pt-2 mt-1>
        <span class=" grey--text">get </span>
        <span class="font-weight-light white--text">college</span>
        </v-flex>
     </v-layout>
      </v-toolbar-title>
      
  <v-spacer></v-spacer>
   
    </v-toolbar>

    <v-navigation-drawer
    v-model="drawer"
    app dark
    :mini-variant.sync="mini"
    hide-overlay
    stateless
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
       
      </v-list-tile>
      <v-dialog width="600">
       <v-btn @click="func()" slot="activator"> 
            <v-icon left class="mr-5">assessment</v-icon>
            <span>  Top Rated Contributor</span>
            </v-btn>
             <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs6 class="my-2">
            <v-card v-for="item in cons" color="blue-grey darken-2" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{item.id}}</div>
                    <div>{{item.data().rating}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  
                </v-flex>
              </v-layout>
             
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
            </v-dialog>
    </v-list>
  </v-navigation-drawer>

    <br><br><br><br>

    <v-layout class="mt-5">
        <v-flex app xs10 sm8 offset-sm2 offset-xs3>
            <v-card flat color="rgba(255,255,255,0.1)">
                <v-container
                    fluid
                    grid-list-lg
                >   
                    <v-card color="rgba(0,0,0,0.3)">
                   <v-text-field
        dark
        v-model="search"
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
                    </v-card>
                    
                    <br>
                    <v-layout row wrap justify-center class="mt-5">
                    <v-flex xs12 sm6>
                        <v-card v-for="item in filter" v-if="filter.length<=2" :key="item.id" color="rgb(0,128,128,0.6)" class="white--text headline">
                            <v-layout row wrap>
                                <v-flex xs12 md5>
                                <v-img
                                class="ma-3"
                                    :src="item.data().pfp"
                                    height="250px"
                                    contain
                                ></v-img>
                                </v-flex>

                                <v-flex xs12 md7 justify-center align-center>
                                <v-card-title primary-title>
                                    <div>
                                    <div class="headline font-weight-thin">{{item.id}}</div>
                                    <div class="subheading"><v-icon dark left>fas fa-user-shield</v-icon>{{item.data().role}}</div>
                                    <div class="subheading">{{item.data().college}}</div>
                                    <div class="subheading">{{item.data().branch}}</div>
                                    <div class="subheading">Rating: {{item.data().rating}}</div>
                                    <div class="subheading">Age: {{item.data().age}}</div>
                                    </div>
                                </v-card-title>
                                </v-flex>
                                
                            </v-layout>
                            <v-divider color="black" light></v-divider>
                            
                                
                                    <v-layout class="ma-3 pb-4" row wrap justify-space-around>
                                        
                                            <v-btn :href="item.data().fb" target="_blank" fab dark large color="#3b5998">
                                            <center>
                                            <v-icon dark>fab fa-facebook-f</v-icon>
                                            </center>
                                            </v-btn>
                                            <v-btn :href="item.data().git" target="_blank" fab dark large color="black">
                                            <center>
                                            <v-icon dark>fab fa-github</v-icon>
                                            </center>
                                            </v-btn>
                                            <v-btn :href="item.data().google" target="_blank" fab dark large color="#CC3333">
                                            <center>
                                            <v-icon dark>fab fa-google</v-icon>
                                            </center>
                                            </v-btn>
                                        
                                    </v-layout>
                                
                            
                        </v-card>
                    </v-flex>
                    <br>
                    
                    
                  
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>

    </v-app>
  </v-parallax>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        search:'',
        userdoc: [],
        cons: [],
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
        mini: true,
        right: null
      }
    },
    created() {
        var vm=this;
        db.collection("users").get().then(function(snapshot){
            vm.userdoc=snapshot.docs;
        })
    },
    methods :{
      go(){
        this.$router.go("-1");
      },
      func() {
        var vm=this;
        db.collection("users").orderBy("rating","desc").limit(4).get().then(function(snapshot){
          vm.cons=snapshot.docs;
        })
      }
    },
    computed: {
          filter: function(){
            return this.userdoc.filter((item)=>{
                return item.id.toLowerCase().match(this.search.toLowerCase())
            })
        }
    },
  }
</script>