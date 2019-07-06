<template>
  <v-parallax
    src="https://firebasestorage.googleapis.com/v0/b/new111-87012.appspot.com/o/camera-coffee-colorful-1391374.jpg?alt=media&token=e3a92fe8-3755-461b-b500-598f76f56317"
    height="100%"
  >
    <v-app style="background: rgb(0,0,0,0)">
      <v-toolbar app color="rgb(0,0,0,0.5)">
        <v-toolbar-title class="headline text-uppercase" dark>
          <v-layout row wrap>
            <v-btn fab small route to="/" flat>
              <span class="display-1 white--text"><</span>
            </v-btn>
            <v-flex pt-2 mt-1>
              <span class="grey--text">get</span>
              <span class="font-weight-light white--text">college</span>
            </v-flex>
          </v-layout>
        </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md5 lg4>
          <v-card color="rgb(0,0,0,0.5)">
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
                  <v-flex xs12 sm4>
                    <v-text-field
                      box
                      dark
                      :rules="[rules.required, rules.counter]"
                      label="First Name"
                      counter
                      maxlength="20"
                      clearable
                      id="fname"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm4>
                    <v-text-field
                      box
                      dark
                      :rules="[rules.required, rules.counter]"
                      label="Last Name"
                      counter
                      maxlength="20"
                      clearable
                      id="lname"
                    ></v-text-field>
                  </v-flex>

                  <v-flex sm12>
                    <v-layout row wrap justify-space-around>
                      <v-btn id="con" @click="con()" block color="primary" class="mx-2">CONTRIBUTOR</v-btn>
                      <v-divider vertical color="white"></v-divider>
                      <v-btn id="asp" @click="asp()" block color="primary" class="mx-2">ASPIRANT</v-btn><br>
                    </v-layout>
                  </v-flex>
                  
                  <v-btn id="gog" @click="google()" block color="primary" class="mx-2">GOOGLE SIGN IN</v-btn>
                  <v-container id="drop" grid-list-xl>
                    <v-flex xs12 id="coll">
                      <v-overflow-btn
                      dark
                      
                        class="red--text"
                        :items="dropdown"
                        label="Choose your College"
                        
                        id="col"
                      ></v-overflow-btn>
                    </v-flex>
                  </v-container>
                  
                    <v-flex xs12 id="lo">
                      <v-layout justify-space-around>
                  <div class="display-1">
                    <v-chip outline  color="orange" class="headline"><span class="ma-1">Institute Name</span></v-chip></div>
                    <v-chip label color="white" outline>
                  <select id="loc">
                    <option class="white black--text heading "   v-for="item in dropdown" :key="item">
                      {{item}}

                    </option>

                  </select>
                    </v-chip>
                      </v-layout>
                    </v-flex>
                  

                  <v-flex id="hid" sm8>
                    <v-text-field
                      box
                      dark
                      @click="fuc()"
                      v-model="email"
                      :rules="[rules.required, rules.email]"
                      label="E-mail"
                      clearable
                      :suffix="message"
                      id="email"
                    ></v-text-field>
                  </v-flex>

                  <v-flex id="hide" sm8>
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
                        <v-dialog max-width="600">
                          <v-btn id="hidden" dark color="red" @click="fnnn()" slot="activator">
                            <span>submit</span>
                          </v-btn>

                          <v-card>
                            <v-card-title>
                              <h2>Verify your mail</h2>
                            </v-card-title>
                            <v-card-actions>
                              <v-btn dark @mouseup="uf()" @mousedown="f()">
                                <span>submit to verify</span>
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-layout>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </v-parallax>
</template>


<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      dropdown: [],
      message:'',
      title: "",
      email: "",
      rules: {
        required: value => !!value || "Required.",
        counter: value => value.length <= 20 || "Max 20 characters",
        min: v => v.length >= 8 || "Min 8 characters",
        email:  value => (value || '').match() || 'Please enter a valid email',
        
        show2: true,
        show3: false,
        show4: false,
        password: "Password"
      },
      show1: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },
  mounted() {
    document.getElementById("hid").style.display = "none";
    document.getElementById("hide").style.display = "none";
    document.getElementById("hidden").style.display = "none";
    document.getElementById("coll").style.display = "none";
    document.getElementById("lo").style.display = "none";
    document.getElementById("gog").style.display = "none";
  },
  methods: {
    funct(data){
console.log(data+"KJ");
    },
    fuc(){
      var vm=this;
      console.log("poo");
      var p=document.getElementById("loc").value;
      console.log(p);
      db.collection("colleges").doc(p).get().then(function(doc){
        vm.message=doc.data().mail;
      })
    },
    fnnn() {
      const name =
        document.getElementById("fname").value +
        " " +
        document.getElementById("lname").value;
      const email = document.getElementById("email").value+this.message;
      const pass = document.getElementById("pass").value;
      auth.createUserWithEmailAndPassword(email, pass).then(cred => {
        console.log(cred);

        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then(function() {
            console.log(email, pass);
          });
      });
      //console.log(email,pass);
      //console.log("qwertyuiop"+user);
    },

    asp() {
      document.getElementById("hid").style.display = "none";
      document.getElementById("hide").style.display = "none";
      document.getElementById("hidden").style.display = "none";
      document.getElementById("coll").style.display = "none";
      document.getElementById("gog").style.display = "block";
      document.getElementById("lo").style.display = "none";
    },
    con() {
      var vm = this;
      document.getElementById("gog").style.display = "none";
      document.getElementById("hid").style.display = "block";
      document.getElementById("hide").style.display = "block";
      document.getElementById("hidden").style.display = "block";
      document.getElementById("coll").style.display = "block";
      document.getElementById("lo").style.display = "block";
      var cll = db.collection("colleges");
      cll.get().then(function(snapshot) {
        snapshot.docs.forEach(doc => {
          if(doc.id!="src"&& doc.id!="ID")
          vm.dropdown.push(doc.id);
        });
      });
      document.getElementById("drop").remove();
    },
    google(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    },
    uf(){
      var vm=this;
      
    },
    f() {
      var user = firebase.auth().currentUser;
      var vm=this;

      user.sendEmailVerification().then(function() {
        console.log("qwerty");
      auth.signOut().then(() =>{
          console.log("logged out");
          vm.$router.push("/");
           });
      });
    }
  }
};
</script>
