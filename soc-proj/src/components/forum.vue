<template>
<v-app style = "background: rgb(0,0,0,0)">
    <v-toolbar  app color="rgb(0,0,0,0.7)" dark >
 <v-toolbar-title class="headline text-uppercase" dark>
     <v-layout row wrap>
     <v-btn fab small route to="/" flat>
        <span class="display-1"></span>
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
    </v-list>
  </v-navigation-drawer>

  <v-flex app xs10 sm6 offset-sm3 offset-xs3>
  <v-card flat >
      <v-container
        fluid
        grid-list-lg
      >
      <br>
      <br>
      <br>

      <v-flex app >
      <v-card
        class="ma-auto"
      >
        <v-sheet class="pa-3 primary lighten-2">
          <v-text-field
            v-model="search"
            label="Search Company Directory"
            dark
            flat
            solo-inverted
            hide-details
            clearable
            clear-i
                
          ></v-text-field>
          <v-checkbox
            v-model="caseSensitive"
            dark
            hide-details
            label="Case sensitive search"
          ></v-checkbox>
        </v-sheet>
        <v-card-text>
          <v-treeview
            :items="items"
            :search="search"
            :filter="filter"
            :open.sync="open"
          >
            <template v-slot:prepend="{ item }">
              <v-icon
                v-if="item.children"
                v-text="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`"
              ></v-icon>
            </template>
          </v-treeview>
        </v-card-text>
      </v-card>
      </v-flex>

      <br>
      <v-flex app >

        <v-card-actions>

          <v-overflow-btn
          :items="dropdown"
          label="All Questions"
          value="All Questions"
          target="#dropdown-example"
        ></v-overflow-btn>

          <v-spacer></v-spacer>
          <v-btn flat id="ques" @mousedown="f()" @click="showq = !showq">
            Add Question
            <v-icon right>add</v-icon>
          </v-btn>
        </v-card-actions>


      <v-card v-show="showq">
        <v-container
          fluid
        >
          <v-layout row wrap>
            <v-flex sm10>
              <v-card flat>
              <v-card-actions>
                
                <v-list-tile class="grow">
                  <v-list-tile-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://randomuser.me/api/portraits/men/66.jpg"
                    ></v-img>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>
                      <div class="headline"id="name">
                      </div>
                    </v-list-tile-title>
                  </v-list-tile-content>

                </v-list-tile>
              </v-card-actions>
              </v-card>
              
            </v-flex>
          </v-layout>
        </v-container>
        <v-flex px-3>
           <v-textarea
            label="Ask a question..."
            solo
            auto-grow
            flat
            background-color="grey lighten-4"
            clearable
            id="query"
          >
          </v-textarea>
          
        </v-flex>
        <br>
        <v-flex xs12 px-3>
          <v-combobox
            v-model="model"
            :items="itemscb"
            :search-input.sync="search"
            hide-selected
            hint="Maximum of 5 tags"
            label="Add some tags"
            multiple
            persistent-hint
            small-chips
          >
            <template v-slot:no-data>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-combobox>

          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="send()">
            Submit
            <v-icon right>send</v-icon>
          </v-btn>
        </v-card-actions>

        </v-flex>
      </v-card>
      </v-flex>

      <br>
      <v-flex app >
      <v-card>
        <v-container
          fluid
        >
          <v-layout row wrap>
            <v-flex sm10>
              <v-card flat>
              <v-card-actions>
                
                <v-list-tile class="grow">
                  <v-list-tile-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://randomuser.me/api/portraits/men/84.jpg"
                    ></v-img>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>
                      <div id="name1" class="headline">
                      Evan You
                      </div>
                    </v-list-tile-title>
                  </v-list-tile-content>

                  
                </v-list-tile>
              </v-card-actions>
              </v-card>
              
            </v-flex>

            <v-flex sm2 fill-height>

              <v-card flat>
                <v-btn flat block color="green"><v-icon x-large>keyboard_arrow_up</v-icon>68</v-btn>
                <v-btn flat block color="red"><v-icon x-large>keyboard_arrow_down</v-icon>24</v-btn>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
        <v-flex px-3>
        <v-card-title primary-title>
          <div>
            <div class="display-1">Which is the best IIT? I am really confused between IIT B or IIT K?</div>
            <span class="grey--text">P.S. Only tell me the ones among top 5</span>
          </div>
        </v-card-title>
        </v-flex>
        <br>
        <v-flex xs12 px-3>
          <v-combobox
            v-model="select"
            label="Tagged"
            chips
            multiple
            readonly
          ></v-combobox>
        </v-flex>

        <v-card-actions>

           <v-btn flat color="green">
            Upvote
            <v-icon small right>thumb_up</v-icon>
          </v-btn>

          <v-btn flat color="red">
            Downvote
            <v-icon small right>thumb_down</v-icon>
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn flat @click="show = !show">
            Comments
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            <hr>
            <br>
            <v-card color="grey lighten-3">
              <v-container
               fluid
              >
                <v-layout row wrap>
                  <v-flex sm10>
                    <v-card flat color="grey lighten-3">
                    <v-card-actions>
                      
                      <v-list-tile class="grow">
                        <v-list-tile-avatar color="grey darken-3">
                          <v-img
                            class="elevation-6"
                            src="https://randomuser.me/api/portraits/men/72.jpg"
                          ></v-img>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                          <v-list-tile-title>
                            <div class="headline">
                            Barrack Obama
                            </div>
                          </v-list-tile-title>
                        </v-list-tile-content>

                        
                      </v-list-tile>
                    </v-card-actions>
                    </v-card>
                    
                  </v-flex>

                  <v-flex sm2 fill-height>
                    <v-card color="grey lighten-3" flat>
                      <v-btn flat block color="green"><v-icon x-large>keyboard_arrow_up</v-icon>12</v-btn>
                      <v-btn flat block color="red"><v-icon x-large>keyboard_arrow_down</v-icon>3</v-btn>
                    </v-card>

                  </v-flex>
                </v-layout>
              </v-container>
              <v-flex pa-3>
                <v-card flat color="grey lighten-4">
                  <v-flex pa-3>
                  <span class=" headline font-weight-light">I think USA has best colleges. bcoz Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam voluptatum, dicta maiores quae eveniet accusamus, quibusdam provident, amet officia est? Minus, tempora? Cupiditate debitis repellendus ut laboriosam, a numquam!</span>
                  </v-flex>
                </v-card>
              </v-flex>

              <v-card-actions>

                <v-btn flat color="green">
                  Upvote
                  <v-icon small right>thumb_up</v-icon>
                </v-btn>

                <v-btn flat color="red">
                  Downvote
                  <v-icon small right>thumb_down</v-icon>
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn flat @click="showr = !showr">
                  Reply
                  <v-icon>{{ showr ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text v-show="showr">
                  <hr>
                  <br>
                  <v-card flat color="grey lighten-4">
                    <v-card-actions>
                      <v-list-tile class="grow">
                        <v-list-tile-avatar color="grey darken-3">
                          <v-img
                            class="elevation-6"
                            size="50%"
                            src="https://randomuser.me/api/portraits/men/64.jpg"
                          ></v-img>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                          <v-list-tile-title><span>Nobel Prize denewala</span></v-list-tile-title>
                        </v-list-tile-content>

                      </v-list-tile>
                    </v-card-actions>
                    <v-flex pa-3>
                      <v-card flat color="grey lighten-4">
                        <v-flex px-3>
                        <span class="subheading font-weight-light">Congo bhai. Isi baat pe nobel prize lelo.</span>
                        </v-flex>
                      </v-card>
                    </v-flex>

                  </v-card>

                  <br>
                  <v-card flat color="grey lighten-4">
                    <v-card-actions>
                      <v-list-tile class="grow">
                        <v-list-tile-avatar color="grey darken-3">
                          <v-img
                            class="elevation-6"
                            size="50%"
                            src="https://randomuser.me/api/portraits/men/74.jpg"
                          ></v-img>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                          <v-list-tile-title><span>Nobel Prize lenewala</span></v-list-tile-title>
                        </v-list-tile-content>

                      </v-list-tile>
                    </v-card-actions>

                    <v-flex pa-3>
                      <v-card flat color="grey lighten-4">
                        <v-flex px-3>
                        <span class="subheading font-weight-light">Congo bhai. Party do.</span>
                        </v-flex>
                      </v-card>
                    </v-flex>
                  </v-card>

                  <br>

                  <v-card flat color="grey lighten-3">
                    <v-flex >
                      <v-text-field
                        label="Write a reply..."
                        solo
                        background-color="grey lighten-4"
                        clearable
                      >
                      </v-text-field>
                    </v-flex>

                  </v-card>

                </v-card-text>
              </v-slide-y-transition>

            </v-card>
            <br>
            <v-card color="grey lighten-3" v-show="!showr">
                <v-flex px-3 pt-4>
                  <v-text-field
                    label="Write an answer..."
                    solo
                    background-color="grey lighten-4"
                    clearable
                  >
                  </v-text-field>
                </v-flex>

              </v-card>

          </v-card-text>
        </v-slide-y-transition>
      </v-card>

      </v-flex>

      </v-container>
  </v-card>
  
  </v-flex>

  </v-app>
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
import { constants } from 'crypto';
  
  export default {
    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        drawer: true,
        mini: true,
        right: null,
        show: false,
        select: ['IITB', 'IITK'],
        showr:false,
        showq:false,
        itemscb: ['IITB', 'IITK', 'IITD', 'IITKGP', 'IITM'],
        dropdown: ['All Questions', 'Your Questions', 'Recommended'],
        model: ['General'],
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        {
          id: 1,
          name: 'Vuetify Human Res',
          children: [
            {
              id: 2,
              name: 'Core team',
              children: [
                {
                  id: 201,
                  name: 'John'
                },
                {
                  id: 202,
                  name: 'Kael'
                },
                {
                  id: 203,
                  name: 'Nekosaur'
                },
                {
                  id: 204,
                  name: 'Jacek'
                },
                {
                  id: 205,
                  name: 'Andrew'
                }
              ]
            },
            {
              id: 3,
              name: 'Administrators',
              children: [
                {
                  id: 301,
                  name: 'Ranee'
                },
                {
                  id: 302,
                  name: 'Rachel'
                }
              ]
            },
            {
              id: 4,
              name: 'Contributors',
              children: [
                {
                  id: 401,
                  name: 'Phlow'
                },
                {
                  id: 402,
                  name: 'Brandon'
                },
                {
                  id: 403,
                  name: 'Sean'
                }
              ]
            }
          ]
        }
      ],
      open: [1, 2],
      search: null,
      caseSensitive: false
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      },
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      }
    },
    computed: {
      filter () {
        return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
      }
    },
    created(){

    },
    mounted(){
      var user = firebase.auth().currentUser;
      if(user.emailVerified){
        // this.dropdown[1]="Answered Questions";
        // console.log(this.dropdown);    
        document.getElementById("ques").style.display ="none"
        
       }
       else{
         this.dropdown.splice(2);
        console.log("poop");
       }
    },
    methods: {
      f(){
        var user = firebase.auth().currentUser;
        console.log(user.displayName);
        document.getElementById("name").innerHTML= user.displayName;
      },
      send(){
        var user = firebase.auth().currentUser;
          // Add a new document with a generated id.
        db.collection("posts").add({
            author: user.displayName,
            downvote: 0,
            upvote: 0,
            query: document.getElementById("query").value,

        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
      }
    }
    
  }
</script>