<template>
  <v-parallax src="https://firebasestorage.googleapis.com/v0/b/new111-87012.appspot.com/o/camera-coffee-colorful-1391374.jpg?alt=media&token=e3a92fe8-3755-461b-b500-598f76f56317" height="100%">
  <v-app style = "background: rgb(0,0,0,0)">
    <v-toolbar app color="rgb(0,0,0,0.5)">
      <v-toolbar-title class="headline text-uppercase" dark>
        <span class=" grey--text">get </span>
        <span class="font-weight-light white--text">college</span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-btn
        :loading="loading4"
        :disabled="loading4"
        color="rgb(0,0,0,0)"
        @click="loader = 'loading4'"
        dark
      >
        LOGIN
        <v-icon right dark>person</v-icon>
        <template v-slot:loader>
        <span class="custom-loader">
          <v-icon dark>cached</v-icon>
        </span>
      </template>
      </v-btn>
    </v-toolbar>
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
        
        <v-layout justify-center>
          <v-card-actions>
            <v-btn @click="signupGoogle" color="#3b5998" dark large><v-icon small left>fab fa-facebook-f</v-icon>Facebook</v-btn>
            
            <v-btn @click="signupFacebook" color="#db4a39" dark large><v-icon small left>fab fa-google</v-icon>Google</v-btn>
          </v-card-actions>
        </v-layout>
        <br>
          <v-layout row wrap align-center justify-center>
            <span text-decor class = "grey--text body-1 font-weight-light lighten-4"><v-divider></v-divider><i>OR</i><v-divider></v-divider></span>
          </v-layout>
        
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
                ></v-text-field>
              </v-flex>

              <v-flex sm8>
                <v-text-field
                  box
                  dark
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  label="E-mail"
                  clearable
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
              ></v-text-field>
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
    data () {
      return {
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
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }
</script>