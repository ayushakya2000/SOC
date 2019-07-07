<template>
<v-app style = "background: rgb(0,0,0,0)">
    <v-toolbar  app color="rgb(0,0,0,0.7)" dark >
 <v-toolbar-title class="headline text-uppercase" dark>
     <v-layout row wrap>
     <v-btn fab small route to="/" flat>
        <span class="display-1"><</span>
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
          
        </v-sheet>
        <v-card-text>
          
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
          <v-btn flat id="ques" @mousedown="f()" @click="showq = !showq" v-show="showc">
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
                      <div class="headline" id="name">
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
          <v-btn flat @mouseup="dnes()" @mousedown="send()">
            Submit
            <v-icon right>send</v-icon>
          </v-btn>
        </v-card-actions>

        </v-flex>
      </v-card>
      </v-flex>

      <br>
      <v-flex app >
      <v-card v-for="item in post" v-if="item.data().data.downvote<=3">
        <v-container
          fluid
        >
          <v-layout row wrap>
            <v-flex sm10 >
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
                      <div  class="headline">{{item.data().data.author}}
                      </div>
                      
                      
                    </v-list-tile-title>
                  </v-list-tile-content>

                  
                </v-list-tile>
              </v-card-actions>
              </v-card>
              
            </v-flex>

            <v-flex sm2 fill-height>

              <v-card flat>
                <v-btn flat block color="green"><v-icon x-large>keyboard_arrow_up</v-icon>{{item.data().data.upvote}}</v-btn>
                <v-btn flat block color="red"><v-icon x-large>keyboard_arrow_down</v-icon>{{item.data().data.downvote}}</v-btn>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
        <v-flex px-3>
        <v-card-title primary-title>
          <div>
            <div class="display-1">{{item.data().data.query}}</div>
          </div>
        </v-card-title>
        </v-flex>
        <br>
        <v-flex xs12 px-3>
          <v-combobox
            v-model="item.data().data.tags"
            label="Tagged"
            chips
            multiple
            readonly
          ></v-combobox>
        </v-flex>

        <v-card-actions>

           <v-btn @click="upvote(item)" flat color="green">
            Upvote
            <v-icon small right>thumb_up</v-icon>
          </v-btn>

          <v-btn @click="downvote(item)" flat color="red">
            Downvote
            <v-icon small right>thumb_down</v-icon>
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn flat @mousedown="comment(item)" @mouseup="show = !show">
            Comments
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            <hr>
            <br>
            <v-card v-for="(com,index) in comms" v-if="com.data().downvote<=3" color="grey lighten-3">
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
                            <div class="headline">{{com.data().author}}
                            </div>
                          </v-list-tile-title>
                        </v-list-tile-content>

                        
                      </v-list-tile>
                    </v-card-actions>
                    </v-card>
                    
                  </v-flex>

                  <v-flex sm2 fill-height>
                    <v-card color="grey lighten-3" flat>
                      <v-btn flat block color="green"><v-icon x-large>keyboard_arrow_up</v-icon>{{com.data().upvote}}</v-btn>
                      <v-btn flat block color="red"><v-icon x-large>keyboard_arrow_down</v-icon>{{com.data().downvote}}</v-btn>
                    </v-card>

                  </v-flex>
                </v-layout>
              </v-container>
              <v-flex pa-3>
                <v-card flat color="grey lighten-4">
                  <v-flex pa-3>
                  <span class=" headline font-weight-light">{{com.data().cmt}}</span>
                  </v-flex>
                </v-card>
              </v-flex>

              <v-card-actions>

                <v-btn @click="up(com,index)" flat color="green">
                  Upvote
                  <v-icon small right>thumb_up</v-icon>
                </v-btn>

                <v-btn @click="down(com,index)" flat color="red">
                  Downvote
                  <v-icon small right>thumb_down</v-icon>
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn flat @mouseup="reply(com)" @click="showr = !showr">
                  Reply
                  <v-icon>{{ showr ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text v-show="showr">
                  <hr>
                  <br>
                  <v-card v-for="reply in replies" flat color="grey lighten-4">
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
                          <v-list-tile-title><span>{{reply.author}}</span></v-list-tile-title>
                        </v-list-tile-content>

                      </v-list-tile>
                    </v-card-actions>
                    <v-flex pa-3>
                      <v-card flat color="grey lighten-4">
                        <v-flex px-3>
                        <span class="subheading font-weight-light">{{reply.rep}}</span>
                        </v-flex>
                      </v-card>
                    </v-flex>
                  </v-card>
                  <br>
                  <v-card flat color="grey lighten-3">
                    <v-flex >
                      <v-text-field
                      v-model="rep"
                        label="Write a reply..."
                        solo
                        background-color="grey lighten-4"
                        clearable
                      >
                      </v-text-field>
                      <v-btn @click="preply(com)" depressed small>POST</v-btn>
                    </v-flex>

                  </v-card>

                </v-card-text>
              </v-slide-y-transition>

            </v-card>
            <br>
            <v-card color="grey lighten-3" v-show="show">
                <v-flex px-3 pt-4>
                  <v-text-field
                    v-model="answer"
                    label="Write an answer..."
                    solo
                    background-color="grey lighten-4"
                    clearable
                  >
                  </v-text-field>
                  <v-btn @click="pcomment(item)" depressed small>POST</v-btn>
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
        college: "",
        answer:"",
        rep:"",
        show: false,
        replies: [],
        num:0,
        post: [],
        comms: [],
        select: [],
        showr:false,
        showq:false,
        showc:true,
        str:"",
        itemscb: ["General"],
        dropdown: ['All Questions', 'Your Questions', 'Recommended'],
        model: [],
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
    mounted(){
      var vm=this,d,js;
      var user = firebase.auth().currentUser;
      var docr=db.collection("posts");
      docr.get().then(function(snapshot) {
        vm.post=snapshot.docs;
      });
      var cll = db.collection("colleges");
        cll.get().then(function(snapshot) {
          snapshot.docs.forEach(doc => {
            if(doc.id!="src"&& doc.id!="ID")
            vm.itemscb.push(doc.id);
          });
        });
        console.log(this.itemscb);
      if(user.emailVerified){
          db.collection("users").doc(user.displayName).get().then(function(doc){
          vm.college=doc.data().college;
          console.log(vm.college);
        })
      };
      var user = firebase.auth().currentUser;
      var q,w;
      if(user.emailVerified) 
        document.getElementById("ques").style.display ="none";
    },
    methods: {
      preply(com){
        var user = firebase.auth().currentUser;
        var vm=this;
        var arr=com.data().replies;
        console.log(arr);
        arr.push({
          author: user.displayName,
          rep: vm.rep
        });
        console.log(arr);
        var setWithMerge = db.collection("comments").doc(com.id).set({
                 replies:arr
            }, { merge: true });
      },
      pcomment(iden){
        var user = firebase.auth().currentUser;
        var vm=this;
        //console.log(iden.data().tags);
        if(user.emailVerified){
          if(iden.data().data.tags.indexOf(vm.college)>=0){
            var en=iden.id+iden.data().count;
            var c=iden.data().count+1;
            console.log(en,c);
            db.collection("comments").doc(en).set({
              author: user.displayName,
              cmt: vm.answer,
              id: iden.id,
              upvote: 0,
              downvote: 0,
              count: 0,
              replies: []
            }).then(() =>{
              db.collection("posts").doc(iden.id).update({
                count: c
              })
            })
          }
          else{
            alert("You are not authorized to answer this question.");
          }
        }
        else{
          alert("You are not authorized to answer any question.");
        };
      },
      reply(comment){
        console.log(comment);
        this.replies=comment.data().replies;
      },
      comment(iden){
        console.log(iden.id);
        var vm=this;
        var dr=db.collection("comments").where("id","==",iden.id);
        dr.get().then(function(snapshot) {
          vm.comms=snapshot.docs;
          console.log(vm.comms);
        })
      },
      up(com,ind){
        console.log(ind);
        console.log(com.data());
        var count=com.data().upvote+1;
        console.log(count);
        db.collection("comments").doc(com.id).update({
          "upvote": count
        })   
      },
      down(com,ind){
        console.log(ind);
        console.log(com.data());
        var count=com.data().downvote+1;
        console.log(count);
        db.collection("comments").doc(com.id).update({
          "downvote": count
        })   
      },
      upvote(doc){
        var user=firebase.auth().currentUser;
        if(user.emailVerified){
          console.log(doc.id);
          var count=doc.data().data.upvote+1;
          console.log(count);
          var ref = db.collection("posts").doc(doc.id);
          return ref.update({
              "data.upvote": count
          })
          .then(function() {
              console.log("Document successfully updated!");
          })
        }
        else{
          alert("Not authorized to do this action.");
        }

        // this.$forceUpdate();        
      },
      downvote(doc){
        var user=firebase.auth().currentUser;
        if(user.emailVerified){
          console.log(doc.id);
          var count=doc.data().data.downvote+1;
          console.log(count);
          var ref = db.collection("posts").doc(doc.id);
          return ref.update({
              "data.downvote": count
          })
          .then(function() {
              console.log("Document successfully updated!");
          })
        }
        else{
          alert("Not authorized to do this action.");
        }        
      },
      f(){
        var user = firebase.auth().currentUser;
        console.log(user.displayName);
        document.getElementById("name").innerHTML= user.displayName;
        },
      send(){
        var user = firebase.auth().currentUser;var i;
        console.log("KH");
          // Add a new document with a generated id.
          var vm=this;
            console.log(vm.model);
            vm.str=JSON.stringify(vm.model);
            console.log(vm.str);
        db.collection("posts").add({
          data: {
            author: user.displayName,
            count: 0,
            downvote: 0,
            disp: false,
            upvote: 0,
            query: document.getElementById("query").value,
            tags: vm.model
          }
        })
        .then(function(docRef) {
            i=docRef.id;
            console.log("Document written with ID: ", i);
        })
        
        // //route
      
      },
      dnes(){
        this.$router.push("/forum");
      }
    }
    
  }
</script>