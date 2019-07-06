<template>

<v-app  class="grey lighten-3">

<v-img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" height="900">
<v-layout class="pb-5">
<v-toolbar   app color="rgb(0,0,0,0.7)" dark>
 <v-toolbar-title class="headline text-uppercase" dark>
        <span class=" grey--text">get </span>
        <span class="font-weight-light white--text">college</span>
      </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-dialog width="600">
     <v-btn slot="activator" id="lmao" large flat >
      <span >SIGN UP</span>
     <v-icon right large>account_circle</v-icon>
    </v-btn>
    <v-card>
  
  <v-card-title >
    <h2 class="ma-5">Wanna Ask Question? <br> Sign In with Google</h2>

    <v-divider vertical color="primary"></v-divider>
    <h2 class="ma-5">Help Aspirants?!<br> Create Account</h2></v-card-title>
    
    <v-card-actions>
    <v-layout justify-center>
    <v-btn dark  color="red" to="/login" ><span>click to sign up</span></v-btn>
    </v-layout>
    </v-card-actions>
    
</v-card>
  </v-dialog>
    <v-btn id="lel" @click="mm()" large flatzyy >
      <span >LOGOUT</span>
     <v-icon right large>perm_identity</v-icon>
     
    </v-btn>
    <v-dialog>
       
     <v-btn id="lol" large flat slot="activator" >
      <span >LOGIN</span>
     <v-icon right large>perm_identity</v-icon>
     
    </v-btn>
     <v-layout align-center justify-center>
    <v-flex xs12 sm6 md5 lg4>
      <v-card color="rgb(0,0,0,0.85)">
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
    
<v-btn dark color="rgb(0,0,0,0.5)" @mousedown="m()" @mouseover="fnnnn()" slot="activator"><span>submit</span></v-btn>

  
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

</v-layout>
<br><br><br>
<v-layout justify-center class="mt-5 pt-5" column align-content-center>
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
   <v-btn outline color="orange" large @click="func()"><h1>FORUM</h1></v-btn>
   </div>
   </div>
        </v-img>
        </center>
      </div>
   
</v-layout>
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
         
            show2: true,
            show3: false,
            show4: false,
            password: 'Password'
          },
           show1: false,
        
    }},
    mounted(){
       var user= firebase.auth().currentUser;
      if(user){
        document.getElementById("lol").style.display="none";
        document.getElementById("lmao").style.display="none";
        document.getElementById("lel").style.display="block";
        console.log("lmao");
      }
      else{
        document.getElementById("lel").style.display="none";
      }
    },
    beforeMount() {
      
    },
    methods:{
        fnnnn:function(){
            const email=document.getElementById('email').value;
            const password=document.getElementById('pass').value;
            auth.signInWithEmailAndPassword(email, password).then(cred => {
                console.log(cred.user+"jkj")
            }).catch(function(error){
              alert("Wrong credentials. Re-enter.");

            })
            
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
        m: function(){
          var vm=this;
          this.$router.push("/profile");
        },
        func(){
          var vm=this;
          var user= firebase.auth().currentUser;
          if(user){
            vm.$router.push("/forum");
          }
          else{
            alert("Please login first.");
          }
        },
        mm: function(){
          auth.signOut().then(() =>{
          console.log("logged out");
           });
           document.getElementById("lol").style.display="block";
          document.getElementById("lmao").style.display="block";
          document.getElementById("lel").style.display="none";
        },
        f: function(){
             var user= firebase.auth().currentUser;
             console.log(user);
            
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