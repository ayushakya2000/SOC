<template>
  <v-app class="grey lighten-3">
    <v-img
      src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      height="900"
    >
      <v-toolbar height="80" app color="rgb(0,0,0,0.7)" dark>
        <v-layout row wrap>
          <v-toolbar-title class="text-uppercase pt-2 text-xs-left" dark>
            <h2>
              <span class="grey--text">get</span>
              <span class="font-weight-light white--text">college</span>
            </h2>
          </v-toolbar-title>

          <v-layout justify-end>
            <v-dialog width="650">
              <v-btn large slot="activator" id="lmao" class="mt-1 pt-1 pr-2" flat>
                <span>
                  <h3>SIGN UP</h3>
                </span>
                <v-icon right large>account_circle</v-icon>
              </v-btn>
              <v-card>
                <v-card-title>
                  <h2 class="ma-5">
                    Wanna Ask Question?
                    <br />Sign Up as Aspirant
                  </h2>

                  <v-divider vertical color="primary"></v-divider>
                  <h2 class="ma-5">
                    Help Aspirants?!
                    <br />Sign Up as Contributor
                  </h2>
                </v-card-title>

                <v-card-actions>
                  <v-layout justify-center>
                    <v-btn dark color="red" to="/login">
                      <span>click to sign up</span>
                    </v-btn>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn id="lel" @click="mm()" class="mt-1 pt-1" large flat flatzyy>
              <span>LOGOUT</span>
              <v-icon right large>perm_identity</v-icon>
            </v-btn>
            <v-dialog max-width="600">
              <v-btn id="lol" class="mt-1 pt-1" flat large slot="activator">
                <span>
                  <h3>LOGIN</h3>
                </span>
                <v-icon right large>perm_identity</v-icon>
              </v-btn>
              <v-layout row wrap justify-center>
                <v-flex xs12>
                  <v-card color="rgb(0,0,0,0.85)">
                    <br />
                    <v-card-title>
                      <v-layout row wrap align-center justify-center>
                        <span class="grey--text display-1 display-1 lighten-4">GET</span>
                        <span class="white--text display-1 font-weight-light">Connected</span>
                      </v-layout>
                    </v-card-title>

                    <br />

                    <v-form>
                      <v-container>
                        <v-layout row wrap justify-center>
                          <v-flex sm8>
                            <v-text-field
                              box
                              dark
                              v-model="email"
                              :rules="[rules.required, rules.email]"
                              label="E-mail"
                              clearable
                              id="email"
                            ></v-text-field>
                          </v-flex>

                          <v-flex sm8>
                            <v-text-field
                              v-model="password"
                              :append-icon="show1 ? 'visibility' : 'visibility_off'"
                              :rules="[rules.required, rules.min]"
                              :type="show1 ? 'text' : 'password'"
                              box
                              dark
                              name="input-10-1"
                              label="Password"
                              hint="At least 8 characters"
                              counter
                              clearable
                              @click:append="show1 = !show1"
                              id="pass"
                            ></v-text-field>
                            <v-card-actions>
                              <v-layout justify-center>
                                <v-btn
                                  dark
                                  color="rgb(0,0,0,0.5)"
                                  @click="m()"
                                  @mousedown="fnnnn()"
                                  slot="activator"
                                >
                                  <span>submit</span>
                                </v-btn>

                                <v-snackbar
                                  v-model="snackbar1"
                                  color="red"
                                  :multi-line="mode === 'multi-line'"
                                  class="subheading"
                                  :timeout="timeout"
                                  :vertical="mode === 'vertical'"
                                >
                                  {{ text1 }}
                                  <v-btn color="black" @click="snackbar1 = false">Close</v-btn>
                                </v-snackbar>
                              </v-layout>
                            </v-card-actions>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-dialog>
          </v-layout>
        </v-layout>
      </v-toolbar>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



      <v-layout justify-center align-center class="mt-5 pt-5" row wrap>
        <v-flex xs12>
          <v-layout justify-center align-center class="pt-5 text-xs-center" row wrap>
            <v-flex xs5 >
              <h1 class=" pt-3 pr-1 mr-2" style="font-size:5.9vw;" id="check" >
                <span class="black--text "><strong>GET</strong></span>
                <span class="font-weight-light white--text pl-3">COLLEGE</span>
              </h1>
            </v-flex>
          </v-layout>
          <div class="py-5">
            <v-layout justify-center align-center  >
              <v-flex xs5 >
              <v-img
             
                src="http://realpinkaz.com/wp-content/uploads/web-design-background-montreal-web-design-montreal-web-design-web-web-design-background.jpg"
                height="250"
               
              >
                  <v-layout justify-center class="mt-5 pt-5" row wrap>
                 
                    <v-btn outline color="orange" route to="/college" large>
                      <h1>COLLEGES</h1>
                    </v-btn>
                    <v-btn outline color="orange" large @click="func()">
                      <h1>FORUM</h1>
                    </v-btn>
                    <v-snackbar
                      v-model="snackbar"
                      color="red"
                      :multi-line="mode === 'multi-line'"
                      class="subheading"
                      :timeout="timeout"
                      :vertical="mode === 'vertical'"
                    >
                      {{ text }}
                      <v-btn color="black" @click="snackbar = false">Close</v-btn>
                    </v-snackbar>
                  </v-layout>
                
              </v-img>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>






    </v-img>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbar1: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: "Please LogIn First!",
      text1: "Wrong credentials. Re-enter.",
      cards: [
        {
          title: "FORUM",
          src:
            "https://www.unitec.ac.nz/sites/default/files/public/_resampled/group-study_2.jpg-821x405.jpg",
          flex: 6
        },
        {
          title: "COLLEGES",
          src:
            "http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/23/College_campus.jpg",
          flex: 6
        }
      ],

      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      title: "",
      email: "",
      rules: {
        required: value => !!value || "Required.",
        counter: value => value.length <= 20 || "Max 20 characters",
        min: v => v.length >= 8 || "Min 8 characters",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },

        show2: true,
        show3: false,
        show4: false,
        password: "Password"
      },
      show1: false
    };
  },
  mounted() {
    var user = firebase.auth().currentUser;
    if (user) {
      document.getElementById("lol").style.display = "none";
      document.getElementById("lmao").style.display = "none";
      document.getElementById("lel").style.display = "block";
      console.log("lmao");
    } else {
      document.getElementById("lel").style.display = "none";
    }
  },
  beforeMount() {},
  methods: {
    fnnnn: function() {
      const email = document.getElementById("email").value;
      var vm = this;
      const password = document.getElementById("pass").value;
      auth
        .signInWithEmailAndPassword(email, password)
        .then(cred => {
          console.log(cred.user + "jkj");
          vm.$router.push("/profile");
        })
        .catch(function(error) {
          // alert("Wrong credentials. Re-enter.");
          vm.snackbar1 = true;
        });

      //var user= firebase.auth().currentUser;
      //console.log(user);

      // if(user.emailVerified){
      //   //document.getElementById("lmao").style.display="none";
      //   //document.getElementById("lol").style.display="none";
      //   console.log("yep");
      // }
      // else{
      //   console.log("nope");
      // }
    },
    m: function() {
      var vm = this;
      var user = firebase.auth().currentUser;
      //if(user)
    },
    func() {
      var vm = this;
      var user = firebase.auth().currentUser;
      if (user) {
        vm.$router.push("/forum");
      } else {
        // alert("Please login first.");
        this.snackbar = true;
      }
    },
    mm: function() {
      auth.signOut().then(() => {
        console.log("logged out");
      });
      document.getElementById("lol").style.display = "block";
      document.getElementById("lmao").style.display = "block";
      document.getElementById("lel").style.display = "none";
    },
    f: function() {
      var user = firebase.auth().currentUser;
      console.log(user);

      if (user.emailVerified) {
        //document.getElementById("lmao").style.display="none";
        //document.getElementById("lol").style.display="none";
        console.log("yep");
      } else {
        console.log("nope");
      }
    }
  }
};
</script>



<style>
.border {
  border-left: 6px solid orange;
  padding-left: 6px;
}



</style>