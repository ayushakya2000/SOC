<template>
  <v-parallax src="https://firebasestorage.googleapis.com/v0/b/new111-87012.appspot.com/o/berries-blueberries-close-up-1153655.jpg?alt=media&token=bacbbc06-0187-48f8-8e08-7443e80dc8b3" height="100%">
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

    <v-layout align-end justify-center>
    <v-flex>
    <v-card color="rgb(0,0,0,0)" flat>
      <v-container fluid grid-list-md>

        <v-layout align-center justify-center row wrap>

          <v-flex xs12 sm6 md5 lg4 ma-3 mt-5 >
          <v-hover>
            <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 18 : 2}`"
                class="mx-auto"
                ripple
              >
              <v-img
                class="white--text"
                height="50vh"
                src="https://firebasestorage.googleapis.com/v0/b/new111-87012.appspot.com/o/adult-business-people-businessmen-1059116.jpg?alt=media&token=3c850adb-7864-4b65-9f37-f1e3f673ac00"
              >
                <v-container fill-height fluid>
                  <v-layout align-end fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline black--text">Forums</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-hover>
          </v-flex>

          <v-flex xs12 sm6 md5 lg4 ma-3 mt-5>

          <v-hover>
            <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 18 : 2}`"
                class="mx-auto"
                ripple
              >
              <v-img
                class="white--text"
                height="50vh"
                src="https://firebasestorage.googleapis.com/v0/b/new111-87012.appspot.com/o/administration-architecture-building-256490.jpg?alt=media&token=b3f3978d-8acf-4bd0-9453-ca67a24c572f"
              >
                <v-container fill-height fluid>
                  <v-layout align-end fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Colleges</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-hover>
          </v-flex>
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
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false
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