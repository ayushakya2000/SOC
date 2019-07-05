<template>

<v-app >


<v-toolbar  app color="rgb(0,0,0,0.7)" dark >
 <v-toolbar-title class="headline text-uppercase" dark>
     <v-layout row wrap>
     <v-btn fab small route to="/college" flat>
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
    <div > 
<v-img src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="1500">
  
  <v-layout row wrap class="mt-5" justify-space-between>
    <v-flex xs 12>
 <div class="text-xs-center ma-5">
    
    
    
<div class="text-lg-left mx-2 px-2 mt-4 border1 white--text display-1">
      <v-icon class="mb-3"  dark  large>assessment</v-icon>
      <h1 id="name1"></h1>
   </div>
   <div  class="text-right">
   <v-avatar 
  
         size="300"
          color="grey lighten-4"
        >
          <img  class="border2" id="img" src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
   </div>
  </div>
  
    </v-flex>
  </v-layout>
  <v-layout class="mt-5 pt-5" justify-center>
    <v-flex xs12 sm6>
      <v-hover>
     
<v-card class="rounded-card" slot-scope="{ hover }"
      color="rgb(0,0,0,0.5)"
      dark
      :class="`elevation-${hover ? 20 : 2}`">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0 " id="name">
</h3>
        
          </div>
        </v-card-title>
        <v-card-text>
            <div><b>YEAR OF ESTABLISHMENT</b><br><div class="my-2" id="yoa"></div></div>
            <v-divider color="orange"></v-divider>
            <div class="mt-2"><b>RANKINGS</b><br>
                <ul class="my-2">
                    <li id="1.1"></li>
                    <li id="1.2"></li>
                    <li id="1.3"></li>
                    <li id="1.4"></li>
                </ul>
            </div>
            <v-divider color="orange" ></v-divider>
            <div class="mt-2"><b>COURSES OFFERED</b><br>
                <ul class="my-2">
                    <li id="2.1"></li>
                    <li id="2.2"></li>
                    <li id="2.3"></li>
                    <li id="2.4"></li>
                </ul>
            </div>
            <v-divider color="orange"></v-divider>
            <div class="mt-2"><b>MODE OF ADMISSION</b><br>
                <ul class="my-2">
                    <li id="3.1"></li>
                    <li id="3.2"></li>
                    <li id="3.3"></li>
                    <li id="3.4"></li>
                </ul>
            </div>
            <v-divider color="orange"></v-divider>
            <div class="mt-2"><b>FEE WAIVERS</b><br>
                <ul class="my-2">
                    <li id="4.1"></li>
                    <li id="4.2"></li>
                    <li id="4.3"></li>
                    <li id="4.4"></li> 
                </ul>
            </div>
            <v-divider color="orange"></v-divider>
            <div class="mt-2" ><b >PACKAGE</b><br>
                <ul class="my-2">
                    <li id="5.1"></li>
                    <li id="5.2"></li>
                    <li id="5.3"></li>
                    <li id="5.4"></li>
                </ul>
            </div>  
        </v-card-text>

        <v-card-actions >
          <v-layout justify-center class="mb-4">
          <v-dialog max-width="600">
          <v-btn flat color="orange" slot="activator">   <v-chip label outline color="red" >RANK</v-chip> 
            V/S
            <v-chip label outline color="red">CUTOFF</v-chip> 
             </v-btn>
             <v-card>
               <v-card-title>
                 <h2>RANK vs CUTOFF</h2>
               </v-card-title>
               </v-card>
          </v-dialog>
          </v-layout>
        </v-card-actions>
      </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
  
  </v-img>
  </div>


</v-app>

</template>

<script>

 //console.log(id);
export default {
    props:['identity'], 
  data() {
     return { }
    },
    created(){
        
        var poo; var g=[];var i,j=1;
        db.collection("colleges").doc("src").get().then(function(doc){
          document.getElementById("img").src = doc.data().src;
          console.log("done");
        })
        var newID=db.collection("colleges").doc("ID");
            newID.get().then(function(doc) {
                poo=doc.data().ID;
                //console.log("ID IN"+poo);
            var docr= db.collection("colleges").doc(poo);
            docr.get().then(function(doc) {
                var out;       
                document.getElementById("name1").innerHTML=doc.data().name;
                 
                document.getElementById("yoa").innerHTML=doc.data().YOA;
                for(i=1;i<=5;i++){
                    if(i==1){
                        out=doc.data().Rankings;
                        for(j=1;j<=4;j++){
                            if(out[j-1])
                            document.getElementById(i+"."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+"."+j).style.display = "none";
                        }
                    }
                    if(i==2){
                        out=doc.data().Courses;
                        for(j=1;j<=4;j++){
                            if(out[j-1])
                            document.getElementById(i+"."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+"."+j).style.display = "none";
                        }
                    }
                    if(i==3){
                        out=doc.data().moa;
                        for(j=1;j<=4;j++){
                            if(out[j-1])
                            document.getElementById(i+"."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+"."+j).style.display = "none";
                        }
                    }
                    if(i==4){
                        out=doc.data().Fees;
                        for(j=1;j<=4;j++){
                            if(out[j-1])
                            document.getElementById(i+"."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+"."+j).style.display = "none";
                        }
                    }
                    if(i==5){
                        out=doc.data().Packages;
                        for(j=1;j<=4;j++){
                            if(out[j-1])
                            document.getElementById(i+"."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+"."+j).style.display = "none";
                        }
                    }
                }
                
                
            })      
        })
    },
    methods:{ 

    }
}
</script>



<style>
.border{
  border: 3px solid rgb(226, 65, 92);
  padding: 5px;
  
}
.border1{
  border-left: 4px solid cyan;
}
.rounded-card{
    border-radius:30px;
}
.border2{
  border: 3px solid white;
}
</style>