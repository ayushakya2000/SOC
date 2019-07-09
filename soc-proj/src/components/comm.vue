<template>
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
                      <v-btn flat block color="green"><v-icon x-large>keyboard_arrow_up</v-icon>{{com.data().upvote.length-1}}</v-btn>
                      <v-btn flat block color="red"><v-icon x-large>keyboard_arrow_down</v-icon>{{com.data().downvote.length-1}}</v-btn>
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

                <v-btn :disabled="dispcup" @click="up(com,index)" flat color="green">
                  Upvote
                  <v-icon small right>thumb_up</v-icon>
                </v-btn>

                <v-btn :disabled="dispcdo" @click="down(com,index)" flat color="red">
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
</template>

<script>
export default {
    data : function(){
        return{
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
        college: "",
        answer:"",
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
        dispcup:false,
        dispcdo:false,
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
    }
    ,
    props: ['com','index'],



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
        this.dispcup=true; var a=[];
        var user=firebase.auth().currentUser;
        a=com.data().upvote;
        if(a.indexOf(user.displayName)==-1){
            a.push(user.displayName);
            console.log(a);
            db.collection("comments").doc(com.id).update({
            "upvote": a
            })
        }
        else{alert("Already upvoted once.")}
      },
      down(com,ind){
        console.log(ind);
        console.log(com.data());
        this.dispcdo=true; var a=[];
        var user=firebase.auth().currentUser;
        a=com.data().downvote;
        if(a.indexOf(user.displayName)==-1){
            a.push(user.displayName);
            console.log(a);
            db.collection("comments").doc(com.id).update({
            "downvote": a
            })
        }
        else{alert("Already downvoted once.")}
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
