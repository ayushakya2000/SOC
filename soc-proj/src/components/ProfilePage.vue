<template>
  <v-parallax src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="100vh">
    <v-app style = "background: rgb(0,0,0,0)" fill-height>
      
    <v-toolbar  app color="rgb(0,0,0,0.7)" dark >
    <v-toolbar-title class="headline text-uppercase" dark>
     <v-layout row wrap>
     
        <v-flex pt-2 mt-1>
        <span class=" grey--text">get </span>
        <span class="font-weight-light white--text">college</span>
        </v-flex>
       
     </v-layout>
     
      </v-toolbar-title>
      
   <v-spacer></v-spacer>
   <v-btn @click="movec()" large flat>
          <v-icon left >fa fa-users</v-icon>
      <span >CONTRIBUTORS</span>
     
     
    </v-btn>
        <v-btn @click="move()" large flat>
          <v-icon left >fa fa-tasks</v-icon>
      <span >FORUM</span>
     
     
    </v-btn>
    <v-btn @mousedown="mm()" @mouseup="mn()" large flatzyy >
      <span >LOGOUT</span>
     <v-icon right large>perm_identity</v-icon>
     
    </v-btn>
    </v-toolbar>

    

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
                  class="ma-3"
                    id="img1"
                    :src=emage
                    height="350px"
                    contain

                  ></v-img>
                </v-flex>

                <v-flex xs12 md7 align-self-end>
                  <v-card-title primary-title>
                    <div>
                      <div class="display-3 font-weight-thin">{{name}}</div>
                      <div class="headline"><v-icon dark left>fas fa-user-shield</v-icon>{{role}}</div>
                      <div class="headline"><v-icon dark left> fa fa-university</v-icon> {{institute}}</div>
                      <div class="headline"><v-icon dark left>fa fa-graduation-cap</v-icon> {{branch}}</div>
                      <div class="headline"><v-icon dark left>fa fa-birthday-cake</v-icon> {{age}}</div>
                      <div class="headline"><v-icon dark left>fa fa-star</v-icon> {{rating}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                
              </v-layout>
              <v-divider light></v-divider>
              <v-flex>
                  <v-container fluid grid-list-xl>
                      <v-layout row justify-space-around>
                        <v-layout justify-end>
                        
                          <v-btn :href=fblink target="_blank" fab dark large color="#3b5998">
                          <center>
                          <v-icon dark>fab fa-facebook-f</v-icon>
                          </center>
                          </v-btn>
                           
                        </v-layout>
                        <v-layout justify-center>
                          <v-btn :href=gitlink target="_blank" fab dark large color="black">
                          <center>
                          <v-icon dark>fab fa-github</v-icon>
                          </center>
                          </v-btn>
                        </v-layout>
                        <v-layout>
                          <v-flex xs9>
                          <v-btn :href=glink target="_blank" fab dark large color="#CC3333">
                          <center>
                          <v-icon dark>fab fa-google</v-icon>
                          </center>
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
                                        <v-flex xs12>
                                          <v-text-field id="fb" label="Facebook ID link*" required v-model="fblink"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                          <v-text-field id="git" label="Github ID link*" required v-model="gitlink"> </v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                          <v-text-field id="gog" label="Google Account link*" required v-model="glink"></v-text-field>
                                        </v-flex>

                                        <v-flex xs12>
                                          <v-text-field id="pfp" label="Profile Picture link*"
                                          value=""
                                          required v-model="emage"></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm6>
                                           <v-text-field id="age" label="Age*" required v-model="age"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                          <v-select
                                          v-model="branch"
                                            :items="['Aerospace Engineering','Biological Sciences & Bio-Engineering','Chemical Engineering','Chemistry (BS)','Civil Engineering','Computer Science & Engineering', 'Earth Sciences (BS)', 'Electrical Engineering', 'Economics (BS)','Material Science & Engineering','Mathematics & Scientific Computing','Mechanical Engineering', 'Physics (BS)']"
                                            label="Branch*"
                                            value="Chemistry (BS)"
                                            id="branch"
                                            required
                                          ></v-select>
                                        </v-flex>
                                      </v-layout>
                                    </v-container>
                                    
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                                    <v-btn color="blue darken-1" flat @mouseup="uf()" @mousedown="func()" @click="dialog = false">Save</v-btn>
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
        emage:'',
        name:'',role:'',
        institute:'',
        rating:'',
        fblink:'',
        gitlink:'',
        glink:'',
        age:'',
        branch:'',
                docu: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: true,
        right: null
      }
    },
    mounted(){
      var user = firebase.auth().currentUser;var str;
      var vm=this;
      console.log(user.displayName);
      var docr=db.collection("users").doc(user.displayName);
      if(user.emailVerified){
        str="Contributor";
        docr.update({
        role: str,
        rating: 50
      })
      }
      else{
        str="Aspirant";
        docr.update({
        role: str,
        rating: 0
      })
      }
      vm.listener=docr.onSnapshot(function(doc){
        console.log(doc.data());
        vm.name=doc.id;
        vm.institute=doc.data().college;
        vm.role=doc.data().role;
        vm.rating=doc.data().rating;
        vm.emage=doc.data().pfp;
        vm.fblink=doc.data().fb;
        vm.gitlink=doc.data().git;
        vm.glink=doc.data().google;
        vm.age=doc.data().age;
        vm.branch=doc.data().branch;
        document.getElementById("img1").setAttribute("src",doc.data().pfp);
        
      })
    },
    beforeDestroy(){
      this.listener();
    },
    methods :{
       movec(){
        this.$router.push("/sprofile")
      },
      mn(){
        this.$router.push("/");
      },
       mm: function(){
          auth.signOut().then(() =>{
          console.log("logged out");
           });},
      move(){
        this.$router.push("/forum");
      },
      uf(){
        this.$router.push("/profile");
      },
      func(){
        var user = firebase.auth().currentUser;
        var vm=this;
        db.collection("users").doc(user.displayName).update({
          fb: vm.fblink,
          git: vm.gitlink,
          google: vm.glink,
          pfp: vm.emage,
          age: vm.age,
          branch: vm.branch
        })
      }
    }
  }
</script>