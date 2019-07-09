<template>
<v-flex pa-3>
    <v-card>
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
                <v-btn flat block color="green"><v-icon x-large>keyboard_arrow_up</v-icon>{{item.data().data.upvote.length}}</v-btn>
                <v-btn flat block color="red"><v-icon x-large>keyboard_arrow_down</v-icon>{{item.data().data.downvote.length}}</v-btn>
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

           <v-btn :disabled="dispup" @click="upvote(item)" flat color="green">
            Upvote
            <v-icon small right>thumb_up</v-icon>
          </v-btn>
          <v-snackbar
    
      v-model="snackbar2"
     color="red"
      :multi-line="mode === 'multi-line'"
      class="subheading"
      :timeout="timeout"
   
      :vertical="mode === 'vertical'"
      
    >
      {{ text2 }}
      <v-btn
        color="black"
        
        @click="snackbar2 = false"
      >
        Close
      </v-btn>
    </v-snackbar>

          <v-btn :disabled="dispdo" @click="downvote(item)" flat color="red">
            Downvote
            <v-icon small right>thumb_down</v-icon>
          </v-btn>
          <v-snackbar
    
      v-model="snackbar3"
     color="red"
      :multi-line="mode === 'multi-line'"
      class="subheading"
      :timeout="timeout"
   
      :vertical="mode === 'vertical'"
      
    >
      {{ text3 }}
      <v-btn
        color="black"
        
        @click="snackbar3 = false"
      >
        Close
      </v-btn>
    </v-snackbar>

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
            <comm
            v-for="(com,index) in comms"
            v-bind:key=com.id
            v-bind:com='com'
            v-bind:index='index'
            v-if="com.data().downvote.length<=4">

            </comm>
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
                   <v-snackbar
    
                        v-model="snackbar1"
                        color="red"
                        :multi-line="mode === 'multi-line'"
                        class="subheading"
                        :timeout="timeout"
                    
                        :vertical="mode === 'vertical'"
                        
                        >
                        {{ text1}}
                        <v-btn
                            color="black"
                            
                            @click="snackbar1 = false"
                        >
                            Close
                        </v-btn>
                        </v-snackbar>
                                    <v-snackbar
                        
                        v-model="snackbar"
                        color="red"
                        :multi-line="mode === 'multi-line'"
                        class="subheading"
                        :timeout="timeout"
                    
                        :vertical="mode === 'vertical'"
                        
                        >
                        {{ text }}
                        <v-btn
                            color="black"
                            
                            @click="snackbar = false"
                        >
                            Close
                        </v-btn>
                     </v-snackbar>
                </v-flex>

              </v-card>

          </v-card-text>
        </v-slide-y-transition>
      </v-card>
</v-flex>
</template>

<script>
import comm from './comm.vue';

export default {
    components:{
        comm
    },
    data:function(){
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
        dispup: false,
        dispdo: false,
        drawer: true,
        mini: true,
        right: null,
        answer:"",
        rep:"",
        show: false,
        searchdoc: [],
        replies: [],
        num:0,
        post: [],
        comms: [],
        searching:'',
        listener2:null,
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
    
    props: ['item','college'],
    beforeDestroy(){
        this.listener2();
    },

    methods: {
      move(){
        this.$router.push("/profile")
      },
       movec(){
        this.$router.push("/sprofile")
      },
      dispques(qtype){
        console.log(qtype);
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
        console.log(vm.college);
        if(user.emailVerified){
          if(iden.data().data.tags.indexOf(vm.college)>=0){
            var en=iden.id+iden.data().count;
            var c=iden.data().count+1;
            console.log(en,c);
            db.collection("comments").doc(en).set({
              author: user.displayName,
              cmt: vm.answer,
              id: iden.id,
              upvote: [user.displayName],
              downvote: [user.displayName],
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
        vm.listener2=dr.onSnapshot(function(snapshot) {
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
          this.dispup=true; var a=[];
        var user=firebase.auth().currentUser;
        if(user.emailVerified){
          console.log(doc.id);
          //var count=doc.data().data.upvote.length+1;
          a=doc.data().data.upvote;
          if(a.indexOf(user.displayName)==-1){
            a.push(user.displayName);        
            console.log(a);
            var ref = db.collection("posts").doc(doc.id);
            return ref.update({
                "data.upvote": a
            })
            .then(function() {
                console.log("Document successfully updated!");
            })
          }
          else{alert("Already upvoted once.")}
        }
        else{
          // alert("Not authorized to do this action.");
          this.snackbar2=true;
        }

        // this.$forceUpdate();        
      },
      downvote(doc){
          this.dispdo=true; var a=[];
        var user=firebase.auth().currentUser;
        if(user.emailVerified){
          console.log(doc.id);
          //var count=doc.data().data.upvote.length+1;
          a=doc.data().data.downvote;
          if(a.indexOf(user.displayName)==-1){
            a.push(user.displayName);        
            console.log(a);
            var ref = db.collection("posts").doc(doc.id);
            return ref.update({
                "data.downvote": a
            })
            .then(function() {
                console.log("Document successfully updated!");
            })
          }
          else{alert("Already downvoted once.")}
        }
        else{
          // alert("Not authorized to do this action.");
          this.snackbar2=true;
        }

        // this.$forceUpdate();        
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
