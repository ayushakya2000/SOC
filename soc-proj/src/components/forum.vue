<template>
<v-app class="grey lighten-3 mt-5 pt-3">
  <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWTX-W_by-2CUlywHfAfOFUjodwQwLytkL4V4XACeKg8pLawwog"
     gradient="to left top, #FFCCBC, #B2EBF2">
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
          <v-icon left >fa fa-user</v-icon>
      <span >PROFILE</span>
     
     
    </v-btn>
   
    </v-toolbar>
    
   

  <v-flex  app xs10 sm6 offset-sm3 offset-xs3>
  <v-card flat >
    <v-img src="https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
     gradient="to right top, #FFCCBC, #B2EBF2">
      <v-container
        fluid
        grid-list-lg
      >
      <br>
      <br>
      <br>

      <v-flex app class="ma-3" >
        <v-card  color="rgba(0,0,0,0.8)">
          <v-img height="150" src="https://images.pexels.com/photos/64057/pexels-photo-64057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
      <v-text-field
     
        dark
        v-model="searching"
        class="mx-3 pt-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
          </v-img>
        </v-card>
      </v-flex>

      <br>
      <v-flex app >

        <v-card-actions>
          <v-tabs color="transparent" fixed-tabs  slider-color="black">
<v-tab  @click="dispques(0)" flat>All Questions</v-tab>
<v-tab v-if="sid" @click="dispques(2)" flat>Your Questions</v-tab>
<v-tab v-if="rec" @click="dispques(1)" flat>Recommended</v-tab>
</v-tabs fixed-tabs>

          <!-- <v-overflow-btn
          :items="dropdown"
          label="All Questions"
          v-model="dispq"
          value="All Questions"
          target="#dropdown-example"
          @click="dispques(dispq)"
        ></v-overflow-btn> -->

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
                      :src=mage
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
          <v-btn flat @click="showq = !showq" @mouseup="dnes()" @mousedown="send()">
            Submit
            <v-icon right>send</v-icon>
          </v-btn>
        </v-card-actions>

        </v-flex>
      </v-card>
      </v-flex>

      <br>
      <v-flex app >
        <post 
        v-for="item in filter"
        v-bind:key="item.id"
        v-bind:item='item'
        :college="college"
        v-if="item.data().data.downvote.length<=3"
        >

        </post>
        
      </v-flex>

      </v-container>
    </v-img>
  </v-card>
   <!-- <v-img src="https://images.pexels.com/photos/1881333/pexels-photo-1881333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-img> -->

  </v-flex>
  </v-img>
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
import post from './post.vue';
  
  export default {
    components:{
      post
    },
    data () {
      return {
         snackbar: false,
         snackbar1:false,
         snackbar2:false,
         snackbar3:false,
         text2:'Not authorized to do this action.',
         text3:'Not authorized to do this action.',
         text1:'You are not authorized to answer any question.',
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,
        text: 'You are not authorized to answer this question.',
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        drawer: true,
        mini: true,
        right: null,
        mage:"",
        college: "",
        answer:"",
        sid:true,
        rec:false,
        rep:"",
        show: false,
        searchdoc: [],
        replies: [],
        num:0,
        post: [],
        comms: [],
        searching:'',
        select: [],
        dispq: "",
        showr:false,
        showq:false,
        showc:true,
        listener:null,
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
       filter: function(){
            return this.post.filter((item)=>{
                return item.data().data.query.toLowerCase().match(this.searching.toLowerCase())
            })
        }
      
    },
    mounted(){
      var vm=this,d,js;
      var user = firebase.auth().currentUser;
      var docr=db.collection("posts").where("count",">=",0).orderBy("count","desc");
      vm.listener=docr.onSnapshot(function(snapshot) {
        vm.post=snapshot.docs;
        console.log(vm.post);
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
          vm.sid=false;
          vm.rec=true;
          db.collection("users").doc(user.displayName).get().then(function(doc){
          vm.college=doc.data().college;
          //vm.mage=doc.data().pfp;
          console.log(vm.college);
          document.getElementById("ques").style.display ="none";
        })
      }
      else{
        db.collection("users").doc(user.displayName).get().then(function(doc){
          vm.mage=doc.data().pfp;
        })
      }
    },
    beforeDestroy(){
      var vm=this;
      vm.listener();
    },
    methods: {
      move(){
        this.$router.push("/profile")
      },
       movec(){
        this.$router.push("/sprofile")
      },
      dispques(q){
        var vm=this;
        var user=firebase.auth().currentUser;
        vm.listener();
        if(q==0){
        var docr=db.collection("posts").where("count",">=",0).orderBy("count","desc");
        vm.listener=docr.onSnapshot(function(snapshot) {
        vm.post=snapshot.docs;
        console.log(vm.post);
      });
        }
        if(q==1){
          console.log(vm.college);
        var docr=db.collection("posts").where("count",">=",0).where("data.tags","array-contains",vm.college).orderBy("count","desc");
        vm.listener=docr.onSnapshot(function(snapshot) {
        vm.post=snapshot.docs;
        console.log(vm.post);
      });
        }
        if(q==2){
          var docr=db.collection("posts").where("count",">=",0).where("data.author","==",user.displayName).orderBy("count","desc");
        vm.listener=docr.onSnapshot(function(snapshot) {
        vm.post=snapshot.docs;
        console.log(vm.post);
        });
        }
      },
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
            // alert("You are not authorized to answer this question.");
            this.snackbar=true;
          }
        }
        else{
          // alert("You are not authorized to answer any question.");
           this.snackbar1=true;
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
          // alert("Not authorized to do this action.");
          this.snackbar2=true;
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
          // alert("Not authorized to do this action.");
          this.snackbar3=true;
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
          count: 0,
          data: {
            author: user.displayName,
            downvote: [],
            disp: false,
            upvote: [],
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