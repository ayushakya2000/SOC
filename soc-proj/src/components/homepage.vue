<template>

<v-app  class="grey lighten-3">

<v-img src="https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
<v-toolbar   app color="rgb(0,0,0,0.7)" dark>
 <v-toolbar-title class="headline text-uppercase" dark>
        <span class=" grey--text">get </span>
        <span class="font-weight-light white--text">college</span>
      </v-toolbar-title>
  <v-spacer></v-spacer>
  
     <v-btn large flat @mouseover="f()" to="/login">
      <span id="lmao">SIGN UP</span>
     <v-icon right large>account_circle</v-icon>
    </v-btn>
    <v-dialog>
     <v-btn large flat slot="activator" >
      <span id="lol">LOGIN</span>
     <v-icon right large>perm_identity</v-icon>
     
    </v-btn>
     <v-layout align-center justify-center>
    <v-flex xs12 sm6 md5 lg4>
      <v-card color="rgb(0,0,0,0.5)">
        <br>
        <v-card-title>
          <v-layout row wrap align-center justify-center>
            <span class = "grey--text display-1 display-1 lighten-4">GET</span>
            <span class = "white--text display-1 font-weight-light">Connected</span>
          </v-layout>
        </v-card-title>
        
      
        <br>
          
        
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
    
<v-btn dark color="rgb(0,0,0,0.5)"  @click="fnnnn()" slot="activator"><span>submit</span></v-btn>

  
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
    </v-toolbar>
<v-parallax src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  height="1250">

    <CENTER class="mt-5">
<h1 class="display-4 "><span class=" black--text">GET </span>
        <span class="font-weight-light white--text">COLLEGE</span></h1>
  </CENTER>
 
  
  <div class="pa-5">
  <center class="ma-5">
     <v-img
src="http://realpinkaz.com/wp-content/uploads/web-design-background-montreal-web-design-montreal-web-design-web-web-design-background.jpg"
 height="250" width="800" >
     <div class="pa-5">
          <div class="text-xs-center ma-5">
  <v-btn outline color="orange" route to="/college"  large> <h1>COLLEGES</h1></v-btn>
   <v-btn outline color="orange" large route to="/forum"><h1>FORUM</h1></v-btn>
   </div>
   </div>
        </v-img>
        </center>
      </div>
   
  </v-parallax>
    <center class="mb-5">
<h1 class="display-2"><span class="  border white--text">OUR</span>
        <span class="font-weight-light grey--text">TEAM</span></h1>
  </center>
  
<v-layout  class="mt-5" row wrap  justify-space-around>
<v-flex xs2 justify-space-around>

  <v-card
    class="mx-auto"
    color="cyan"
    
    max-width="400"
    ripple
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Evan You</v-list-tile-title>
        </v-list-tile-content>

        
      </v-list-tile>
    </v-card-actions>
  </v-card>
</v-flex>

<v-flex xs2 justify-space-around>

  <v-card
    class="mx-auto"
    color="cyan"
    
    max-width="400"
    ripple
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Evan You</v-list-tile-title>
        </v-list-tile-content>

      
      </v-list-tile>
    </v-card-actions>
  </v-card>
</v-flex>

<v-flex xs2 justify-space-around>

  <v-card
    class="mx-auto"
    color="cyan"
    max-width="400"
    ripple
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Evan You</v-list-tile-title>
        </v-list-tile-content>

        
      </v-list-tile>
    </v-card-actions>
  </v-card>
</v-flex>

<v-flex xs2 justify-space-around>

  <v-card
    class="mx-auto"
    color="cyan"
    max-width="400"
    ripple
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>
 
    <v-card-text class="headline font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Evan You</v-list-tile-title>
        </v-list-tile-content>

        
      </v-list-tile>
    </v-card-actions>
  </v-card>
</v-flex>

<v-flex xs2 justify-space-around>

  <v-card
    class="mx-auto"
    color="cyan"
    max-width="400"
    ripple
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Evan You</v-list-tile-title>
        </v-list-tile-content>

        
      </v-list-tile>
    </v-card-actions>
  </v-card>
</v-flex>


</v-layout>

<v-footer
    dark
    height="auto"
    class="mt-5"
  >
    <v-card
      class="flex"
      flat
      tile
    >
    

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>Me&TheBoys</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</v-img>
</v-app>

</template>

<script>
export default {
  data () {
      return{
      cards: [
        
        { title: 'FORUM', src: 'https://www.unitec.ac.nz/sites/default/files/public/_resampled/group-study_2.jpg-821x405.jpg',flex:6},
        { title: 'COLLEGES', src: 'http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/23/College_campus.jpg', flex: 6}
      ],
      
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        title: '',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          min: v => v.length >= 8 || 'Min 8 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
          show1: false,
            show2: true,
            show3: false,
            show4: false,
            password: 'Password'
          }
        
    }},
    methods:{
        fnnnn:function(){
            const email=document.getElementById('email').value;
            const password=document.getElementById('pass').value;
            auth.signInWithEmailAndPassword(email, password).then(cred => {
                console.log(cred.user)
            })
            var user= firebase.auth().currentUser;
            console.log(user);
        },
        f: function(){
             var user= firebase.auth().currentUser;
             console.log(user);
            // var provider = new firebase.auth.GoogleAuthProvider();
            // firebase.auth().signInWithPopup(provider).then(function(result) {
            //   // This gives you a Google Access Token. You can use it to access the Google API.
            //   var token = result.credential.accessToken;
            //   // The signed-in user info.
            //   var user = result.user;
            //   console.log("boo");
            //   // ...
            // }).catch(function(error) {
            //   // Handle Errors here.
            //   var errorCode = error.code;
            //   var errorMessage = error.message;
            //   // The email of the user's account used.
            //   var email = error.email;
            //   // The firebase.auth.AuthCredential type that was used.
            //   var credential = error.credential;
            //   // ...
            // });
            if(user.emailVerified){
              //document.getElementById("lmao").style.display="none";
              //document.getElementById("lol").style.display="none";
              console.log("yep");
            }
            else{
              console.log("nope");
            }
        }
    }
}
</script>



<style>
.border{
  border-left: 6px solid orange;
  padding-left:6px;
}
</style>