
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
                    id="image"
                    height="350px"
                    contain 
                  ></v-img>
                </v-flex>

                <v-flex xs12 md7 align-self-end>
                  <v-card-title primary-title>
                    <div>
                      <div class="display-3 font-weight-thin" id="name" ></div>
                      <v-icon dark left>fas fa-user-shield</v-icon><div class="headline" id="type"></div>
                      <div class="headline" id="college"></div>
                      <div class="headline" id="branch"></div>
                      <div class="title font-weight-thin" id="hashtag"></div>
                    </div>
                  </v-card-title>
                </v-flex>
            
              </v-layout>
              <v-divider light></v-divider>
              <v-flex>
                  <v-container fluid grid-list-xl>
                      <v-layout row justify-space-around>
                        <v-layout justify-end>
                          <v-btn fab dark large color="#3b5998" v-on:click.native='fb'>
                          <v-icon dark>fab fa-facebook-f</v-icon>
                          </v-btn>
                        </v-layout>
                        <v-layout justify-center>
                          <v-btn fab dark large color="black" v-on:click.native='github'>
                          <v-icon dark>fab fa-github</v-icon>
                          </v-btn>
                        </v-layout>
                        <v-layout>
                          <v-flex xs9>
                          <v-btn fab dark large color="#CC3333" v-on:click.native='gmail'>
                          <v-icon dark>fab fa-google</v-icon>
                          </v-btn>
                          </v-flex>
                         <v-btn @click="retrieve()">sign</v-btn> 
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
                                          <v-text-field label="First name*" id="fn" required value="Ayush"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field label="Middle name" id="mn" ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field
                                            label="Last name*" id="ln"
                                            value="Shakya"
                                            required
                                          ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                          <v-text-field label="Facebook ID link*" id="link1" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                          <v-text-field label="Github ID link*" id= "link2" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                          <v-text-field label="Google Account link*" id = "link3" required></v-text-field>
                                        </v-flex>

                                        <v-flex xs12>
                                          <v-text-field label="Profile Picture link*"
                                          value="link" id="link4"
                                          required></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm6>
                                          <v-select
                                            :items="['15','16','17', '18','19','20', '21', '22', '23', '25', '25+']"
                                            label="Age*" id="umar"
                                            value="19"
                                            required
                                          ></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                          <v-select
                                            :items="['Aerospace Engineering','Biological Sciences & Bio-Engineering','Chemical Engineering','Chemistry (BS)','Civil Engineering','Computer Science & Engineering', 'Earth Sciences (BS)', 'Electrical Engineering', 'Economics (BS)','Material Science & Engineering','Mathematics & Scientific Computing','Mechanical Engineering', 'Physics (BS)']"
                                            label="Branch" id="field"
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
                                    <v-btn color="blue darken-1" flat @click="update()">Save</v-btn>
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
         retrieve: function(){
          
        //var ID = document.getElementById("ID").value;
        var docRef = db.collection("users").doc("hello@gmail.com");

    docRef.get().then(function(doc) {
      if (doc.exists) {
        //   console.log("Document data:", doc.data().Name)
          document.getElementById("name").innerHTML= doc.data().first + " " + doc.data().middle + " " + doc.data().last;
          document.getElementById("college").innerHTML = doc.data().College;
          document.getElementById("branch").innerHTML = doc.data().Branch; 
          document.getElementById("hashtag").innerHTML = doc.data().hashtag;
          document.getElementById("type").innerHTML = doc.data().type;
          var img = document.getElementById("image");
          img.src = doc.data().profile;

        
    } else {
        // doc.data() will be undefined in this case
        alert("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

    },
     

    fb: function(event) {
      
    var docRef = db.collection("users").doc("hello@gmail.com");

    docRef.get().then(function(doc) {
      var fb = doc.data().facebook;
         
       if (doc.exists && fb) {
         window.open(fb);
       } else {
        // doc.data() will be undefined in this case
         alert("Not found!!");
    }
     }).catch(function(error) {
         console.log("Error getting document:", error);
            });       
    },

    gmail: function(event) {
      
    var docRef = db.collection("users").doc("hello@gmail.com");

    docRef.get().then(function(doc) {
      var gmail = doc.data().gmail;
         
       if (doc.exists && doc.data().gmail) {
         window.open(gmail);
       } else {
        // doc.data() will be undefined in this case
         alert("Not found!!");
    }
     }).catch(function(error) {
         console.log("Error getting document:", error);
            });       
    },


    github: function(event) {
      
    var docRef = db.collection("users").doc("hello@gmail.com");

    docRef.get().then(function(doc) {
      var github = doc.data().github;
         
       if (doc.exists && doc.data().github) {
         window.open(github);
       } else {
        // doc.data() will be undefined in this case
         alert("Not found!!");
    }
     }).catch(function(error) {
         console.log("Error getting document:", error);
            });       
    },

    update: function () {
      var fn = document.getElementById("fn").value;
      var mn = document.getElementById("mn").value;
      var ln = document.getElementById("ln").value;
      var link1 = document.getElementById("link1").value;
      var link2 = document.getElementById("link2").value;
      var link3 = document.getElementById("link3").value;
      var link4 = document.getElementById("link4").value;
      var umar = document.getElementById("umar").value;
      var field = document.getElementById("field").value;
   //if(fn && ln && link1 && link2 && link3 && link4 && umar && field){
      db.collection("users").doc("hello@gmail.com").update({
        first: fn,
        middle: mn,
        last: ln,
        facebook: link1,
        github: link2,
        gmail: link3,
        profile: link4,
        Age: umar,
        Branch: field 
      })
  // }
    // else
    //   alert("Fields are Required!!!" , fn, ln, link1, link2, link3, link4, umar, field);
      
    } 
 }

}


</script>