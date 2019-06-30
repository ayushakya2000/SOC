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
    <div class="mt-5"> 
<v-img src="https://www.pixelstalk.net/wp-content/uploads/2016/11/Education-Wallpapers-HD-Free-Download.jpg">
  
  
 <div class="text-xs-center ma-5">
    <v-chip  label outline  class="display-1 ma-5" color="black" >
     <span class="ma-5">Indian Institute of Technology, Bombay
</span>
      </v-chip><br>
<div class="text-lg-left mx-2 px-2 border">
      <v-icon left large>assessment</v-icon> <h1 id="name1"></h1>
   </div>
  </div>

  <v-layout class="mx-5">
    <v-flex xs12 sm6>
      <v-hover>
      <v-card slot-scope="{ hover }"
      :class="`elevation-${hover ? 20 : 2}`">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0 " id="name">
</h3>
        
          </div>
        </v-card-title>
        <v-card-text>
            <div><b>YEAR OF ESTABLISHMENT</b><br><div id="yoa"></div></div>
            <v-divider></v-divider>
            <div><b>RANKINGS</b><br>
                <ul>
                    <li id="1.1"></li>
                    <li id="1.2"></li>
                    <li id="1.3"></li>
                    <li id="1.4"></li>
                </ul>
            </div>
            <v-divider></v-divider>
            <div><b>CORSES OFFERED</b><br>
                <ul>
                    <li id="2.1"></li>
                    <li id="2.2"></li>
                    <li id="2.3"></li>
                    <li id="2.4"></li>
                </ul>
            </div>
            <v-divider></v-divider>
            <div><b>MODE OF ADMISSION</b><br>
                <ul>
                    <li id="3.1"></li>
                    <li id="3.2"></li>
                    <li id="3.3"></li>
                    <li id="3.4"></li>
                </ul>
            </div>
            <v-divider></v-divider>
            <div><b>FEE WAIVERS</b><br>
                <ul>
                    <li id="4.1"></li>
                    <li id="4.2"></li>
                    <li id="4.3"></li>
                    <li id="4.4"></li> 
                </ul>
            </div>
            <v-divider></v-divider>
            <div ><b >PACKAGE</b><br>
                <ul>
                    <li id="5.1"></li>
                    <li id="5.2"></li>
                    <li id="5.3"></li>
                    <li id="5.4"></li>
                </ul>
            </div>  
        </v-card-text>

        <v-card-actions>
          <v-dialog max-width="600">
          <v-btn flat color="orange" slot="activator">   <v-chip label outline color="red">RANK</v-chip> 
            V/S
            <v-chip label outline color="red">CUTOFF</v-chip> 
             </v-btn>
             <v-card>
               <v-card-title>
                 <h2>RANK vs CUTOFF</h2>
               </v-card-title>
               </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
  
  </v-img>
  </div>
<v-footer
    dark
    height="auto"
    
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
        
        var poo; var g=[];var i,j;
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
  border-left: 4px solid cyan;
}


</style>