<template>
  <v-parallax src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="100vh">
    <v-app style = "background: rgb(0,0,0,0)" fill-height>
      
    <v-toolbar   app color="rgb(0,0,0,0.7)" dark>
 <v-toolbar-title class="headline text-uppercase" dark>
        <span class=" grey--text">get </span>
        <span class="font-weight-light white--text">college</span>
      </v-toolbar-title>
  <v-spacer></v-spacer>
 
  
    <v-btn id="lel" @click="mm()" large flatzyy >
      <span >LOGOUT</span>
     <v-icon right large>perm_identity</v-icon>
     
    </v-btn>
    <v-dialog>
       
    
     
    
     
  
    </v-dialog>
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
        
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

    <br><br><br>
    <v-layout
      align-center
      column
      justify-center
    >
    <v-container
        fluid
        justify-center align-center
      >
      <v-layout fill-height>
      <v-flex align-self-center fill-height>
    <v-card flat color="rgba(0,0,0,0)">
      <v-container
        fluid
        justify-center align-center
      >
        <v-layout row wrap >
          <v-flex xs10 s8 md8 offset-xs3 offset-s2 offset-md2>
            <v-card color="rgb(0,128,128,0.6)" class="white--text">
              <v-layout row wrap>

                <v-flex xs12 md5>
                  <v-img
                    src="https://scontent.flko3-1.fna.fbcdn.net/v/t1.0-9/59839122_2349267375398556_5855625142826172416_n.jpg?_nc_cat=105&_nc_oc=AQnFXO9CdwJSF6iRmSsGvsW0QOLGM9K-gu9FhVWsT8AbkoQzxaOJryW1Mu1uiLG_Iov-MvH3CXYtYSeJd4TvNYOo&_nc_ht=scontent.flko3-1.fna&oh=9f1173fa0c190b9f3a983fccc51f3024&oe=5D7A97B0"
                    height="350px"
                    contain
                  ></v-img>
                </v-flex>

                <v-flex xs12 md7 align-self-end>
                  <v-card-title primary-title>
                    <div>
                      <div class="display-3 font-weight-thin">Ayush Shakya</div>
                      <div class="headline"><v-icon dark left>fas fa-user-shield</v-icon>Contributor/Moderator</div>
                      <div class="headline">Indian Institue of Technology, Kanpur</div>
                      <div class="headline">Chemistry (BS)</div>
                      <div class="title font-weight-thin">#euu934ru472</div>
                    </div>
                  </v-card-title>
                </v-flex>
                
              </v-layout>
              <v-divider light></v-divider>
              <v-flex>
                  <v-container fluid grid-list-xl>
                      <v-layout row justify-space-around>
                        <v-layout justify-end>
                          <v-btn fab dark large color="#3b5998">
                          <v-icon dark>fab fa-facebook-f</v-icon>
                          </v-btn>
                        </v-layout>
                        <v-layout justify-center>
                          <v-btn fab dark large color="black">
                          <v-icon dark>fab fa-github</v-icon>
                          </v-btn>
                        </v-layout>
                        <v-layout>
                          <v-flex xs9>
                          <v-btn fab dark large color="#CC3333">
                          <v-icon dark>fab fa-google</v-icon>
                          </v-btn>
                          </v-flex>
                          <v-flex align-self-end xs3>

                            <v-layout row justify-center>
                              <v-dialog v-model="dialog" persistent max-width="600px">
                                <template v-slot:activator="{ on }">
                                  <v-btn fab dark small color="grey">
                                  <v-icon dark v-on="on">fas fa-user-cog</v-icon>
                                  </v-btn>
                                </template>
                                <v-card color="rgba(255,255,255,0.7)">
                                  <v-card-title>
                                    <span class="headline">Update User Profile</span>
                                  </v-card-title>
                                  <v-card-text>
                                    <v-container grid-list-md>
                                      <v-layout wrap>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field label="First name*" required value="Ayush"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field label="Middle name"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field
                                            label="Last name*"
                                            value="Shakya"
                                            required
                                          ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                          <v-text-field label="Facebook ID link*" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                          <v-text-field label="Github ID link*" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                          <v-text-field label="Google Account link*" required></v-text-field>
                                        </v-flex>

                                        <v-flex xs12>
                                          <v-text-field label="Profile Picture link*"
                                          value="https://scontent.flko3-1.fna.fbcdn.net/v/t1.0-9/59839122_2349267375398556_5855625142826172416_n.jpg?_nc_cat=105&_nc_oc=AQnFXO9CdwJSF6iRmSsGvsW0QOLGM9K-gu9FhVWsT8AbkoQzxaOJryW1Mu1uiLG_Iov-MvH3CXYtYSeJd4TvNYOo&_nc_ht=scontent.flko3-1.fna&oh=9f1173fa0c190b9f3a983fccc51f3024&oe=5D7A97B0"
                                          required></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm6>
                                          <v-select
                                            :items="['15','16','17', '18','19','20', '21', '22', '23', '25', '25+']"
                                            label="Age*"
                                            value="19"
                                            required
                                          ></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                          <v-select
                                            :items="['Aerospace Engineering','Biological Sciences & Bio-Engineering','Chemical Engineering','Chemistry (BS)','Civil Engineering','Computer Science & Engineering', 'Earth Sciences (BS)', 'Electrical Engineering', 'Economics (BS)','Material Science & Engineering','Mathematics & Scientific Computing','Mechanical Engineering', 'Physics (BS)']"
                                            label="Branch*"
                                            value="Chemistry (BS)"
                                            required
                                          ></v-select>
                                        </v-flex>
                                      </v-layout>
                                    </v-container>
                                    <small>*indicates required field</small>
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                                    <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-layout>
                  </v-container>
                </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
      </v-flex>
      </v-layout>
    </v-container>
    </v-layout>
    </v-app>
  </v-parallax>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        dialog:false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: true,
        right: null
      }
    },
    methods:{
       mm: function(){
          auth.signOut().then(() =>{
          console.log("logged out");
           });
          this.$router.push("/")
        },
    }
  }
</script>
