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
<div v-show="showl">
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<v-layout justify-center class="mt-5 pt-5" >
  
                              
                               <center>
                        
                               <v-progress-circular
                               class="ma-5 pa-5"
                               :size=50
                               v-show="showp"
                               color="amber"
                               indeterminate>
                               </v-progress-circular>
                               </center>
                              
                             
 </v-layout>
</div>
  <v-layout row wrap class="mt-5" justify-space-between v-show="showc">
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
  <v-layout class="mt-5 pt-5" justify-center v-show="showc">
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
                    <li id="1..1"></li>
                    <li id="1..2"></li>
                    <li id="1..3"></li>
                    <li id="1..4"></li>
                </ul>
            </div>
            <v-divider color="orange" ></v-divider>
            <div class="mt-2"><b>COURSES OFFERED</b><br>
                <ul class="my-2">
                    <li id="2..1"></li>
                    <li id="2..2"></li>
                    <li id="2..3"></li>
                    <li id="2..4"></li>
                </ul>
            </div>
            <v-divider color="orange"></v-divider>
            <div class="mt-2"><b>MODE OF ADMISSION</b><br>
                <ul class="my-2">
                    <li id="3..1"></li>
                    <li id="3..2"></li>
                    <li id="3..3"></li>
                    <li id="3..4"></li>
                </ul>
            </div>
            <v-divider color="orange"></v-divider>
            <div class="mt-2"><b>FEE WAIVERS</b><br>
                <ul class="my-2">
                    <li id="4..1"></li>
                    <li id="4..2"></li>
                    <li id="4..3"></li>
                    <li id="4..4"></li> 
                </ul>
            </div>
            <v-divider color="orange"></v-divider>
            <div class="mt-2" ><b >PACKAGE</b><br>
                <ul class="my-2">
                    <li id="5..1"></li>
                    <li id="5..2"></li>
                    <li id="5..3"></li>
                    <li id="5..4"></li>
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
               <v-card-text>
                 <div ><b id="b0"></b><br>
                <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="0.0"></td>
    <td id="0.1"></td>
    <td id="0.2"></td>
  </tr>
  <tr>
    <td id="0.3"></td>
    <td id="0.4"></td>
    <td id="0.5"></td>
  </tr>
  <tr>
    <td id="0.6"></td>
    <td id="0.7"></td>
    <td id="0.8"></td>
  </tr>
  <tr>
    <td id="0.9"></td>
    <td id="0.10"></td>
    <td id="0.11"></td>
  </tr>
  <tr>
    <td id="0.12"></td>
    <td id="0.13"></td>
    <td id="0.14"></td>
  </tr>
  <tr>
    <td id="0.15"></td>
    <td id="0.16"></td>
    <td id="0.17"></td>
  </tr>
  <tr>
    <td id="0.18"></td>
    <td id="0.19"></td>
    <td id="0.20"></td>
  </tr>
    <tr>
    <td id="0.21"></td>
    <td id="0.22"></td>
    <td id="0.23"></td>
  </tr>
  <tr>
    <td id="0.24"></td>
    <td id="0.25"></td>
    <td id="0.26"></td>
  </tr>
  <tr>
    <td id="0.27"></td>
    <td id="0.28"></td>
    <td id="0.29"></td>
  </tr>
  <tr>
    <td id="0.30"></td>
    <td id="0.31"></td>
    <td id="0.32"></td>
  </tr>
  <tr>
    <td id="0.33"></td>
    <td id="0.34"></td>
    <td id="0.35"></td>
  </tr>
  <tr>
    <td id="0.36"></td>
    <td id="0.37"></td>
    <td id="0.38"></td>
  </tr>
  <tr>
    <td id="0.39"></td>
    <td id="0.40"></td>
    <td id="0.41"></td>
  </tr>
  <tr>
    <td id="0.42"></td>
    <td id="0.43"></td>
    <td id="0.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
            <div ><b id="b1"></b><br>
                <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="1.0"></td>
    <td id="1.1"></td>
    <td id="1.2"></td>
  </tr>
  <tr>
    <td id="1.3"></td>
    <td id="1.4"></td>
    <td id="1.5"></td>
  </tr>
  <tr>
    <td id="1.6"></td>
    <td id="1.7"></td>
    <td id="1.8"></td>
  </tr>
  <tr>
    <td id="1.9"></td>
    <td id="1.10"></td>
    <td id="1.11"></td>
  </tr>
  <tr>
    <td id="1.12"></td>
    <td id="1.13"></td>
    <td id="1.14"></td>
  </tr>
  <tr>
    <td id="1.15"></td>
    <td id="1.16"></td>
    <td id="1.17"></td>
  </tr>
  <tr>
    <td id="1.18"></td>
    <td id="1.19"></td>
    <td id="1.20"></td>
  </tr>
    <tr>
    <td id="1.21"></td>
    <td id="1.22"></td>
    <td id="1.23"></td>
  </tr>
  <tr>
    <td id="1.24"></td>
    <td id="1.25"></td>
    <td id="1.26"></td>
  </tr>
  <tr>
    <td id="1.27"></td>
    <td id="1.28"></td>
    <td id="1.29"></td>
  </tr>
  <tr>
    <td id="1.30"></td>
    <td id="1.31"></td>
    <td id="1.32"></td>
  </tr>
  <tr>
    <td id="1.33"></td>
    <td id="1.34"></td>
    <td id="1.35"></td>
  </tr>
  <tr>
    <td id="1.36"></td>
    <td id="1.37"></td>
    <td id="1.38"></td>
  </tr>
  <tr>
    <td id="1.39"></td>
    <td id="1.40"></td>
    <td id="1.41"></td>
  </tr>
  <tr>
    <td id="1.42"></td>
    <td id="1.43"></td>
    <td id="1.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
            <div ><b id="b2"></b><br>
                <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="2.0"></td>
    <td id="2.1"></td>
    <td id="2.2"></td>
  </tr>
  <tr>
    <td id="2.3"></td>
    <td id="2.4"></td>
    <td id="2.5"></td>
  </tr>
  <tr>
    <td id="2.6"></td>
    <td id="2.7"></td>
    <td id="2.8"></td>
  </tr>
  <tr>
    <td id="2.9"></td>
    <td id="2.10"></td>
    <td id="2.11"></td>
  </tr>
  <tr>
    <td id="2.12"></td>
    <td id="2.13"></td>
    <td id="2.14"></td>
  </tr>
  <tr>
    <td id="2.15"></td>
    <td id="2.16"></td>
    <td id="2.17"></td>
  </tr>
  <tr>
    <td id="2.18"></td>
    <td id="2.19"></td>
    <td id="2.20"></td>
  </tr>
    <tr>
    <td id="2.21"></td>
    <td id="2.22"></td>
    <td id="2.23"></td>
  </tr>
  <tr>
    <td id="2.24"></td>
    <td id="2.25"></td>
    <td id="2.26"></td>
  </tr>
  <tr>
    <td id="2.27"></td>
    <td id="2.28"></td>
    <td id="2.29"></td>
  </tr>
  <tr>
    <td id="2.30"></td>
    <td id="2.31"></td>
    <td id="2.32"></td>
  </tr>
  <tr>
    <td id="2.33"></td>
    <td id="2.34"></td>
    <td id="2.35"></td>
  </tr>
  <tr>
    <td id="2.36"></td>
    <td id="2.37"></td>
    <td id="2.38"></td>
  </tr>
  <tr>
    <td id="2.39"></td>
    <td id="2.40"></td>
    <td id="2.41"></td>
  </tr>
  <tr>
    <td id="2.42"></td>
    <td id="2.43"></td>
    <td id="2.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
            <div ><b id="b3"></b><br>
                                <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="3.0"></td>
    <td id="3.1"></td>
    <td id="3.2"></td>
  </tr>
  <tr>
    <td id="3.3"></td>
    <td id="3.4"></td>
    <td id="3.5"></td>
  </tr>
  <tr>
    <td id="3.6"></td>
    <td id="3.7"></td>
    <td id="3.8"></td>
  </tr>
  <tr>
    <td id="3.9"></td>
    <td id="3.10"></td>
    <td id="3.11"></td>
  </tr>
  <tr>
    <td id="3.12"></td>
    <td id="3.13"></td>
    <td id="3.14"></td>
  </tr>
  <tr>
    <td id="3.15"></td>
    <td id="3.16"></td>
    <td id="3.17"></td>
  </tr>
  <tr>
    <td id="3.18"></td>
    <td id="3.19"></td>
    <td id="3.20"></td>
  </tr>
    <tr>
    <td id="3.21"></td>
    <td id="3.22"></td>
    <td id="3.23"></td>
  </tr>
  <tr>
    <td id="3.24"></td>
    <td id="3.25"></td>
    <td id="3.26"></td>
  </tr>
  <tr>
    <td id="3.27"></td>
    <td id="3.28"></td>
    <td id="3.29"></td>
  </tr>
  <tr>
    <td id="3.30"></td>
    <td id="3.31"></td>
    <td id="3.32"></td>
  </tr>
  <tr>
    <td id="3.33"></td>
    <td id="3.34"></td>
    <td id="3.35"></td>
  </tr>
  <tr>
    <td id="3.36"></td>
    <td id="3.37"></td>
    <td id="3.38"></td>
  </tr>
  <tr>
    <td id="3.39"></td>
    <td id="3.40"></td>
    <td id="3.41"></td>
  </tr>
  <tr>
    <td id="3.42"></td>
    <td id="3.43"></td>
    <td id="3.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
            <div ><b id="b4"></b><br>
                                <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="4.0"></td>
    <td id="4.1"></td>
    <td id="4.2"></td>
  </tr>
  <tr>
    <td id="4.3"></td>
    <td id="4.4"></td>
    <td id="4.5"></td>
  </tr>
  <tr>
    <td id="4.6"></td>
    <td id="4.7"></td>
    <td id="4.8"></td>
  </tr>
  <tr>
    <td id="4.9"></td>
    <td id="4.10"></td>
    <td id="4.11"></td>
  </tr>
  <tr>
    <td id="4.12"></td>
    <td id="4.13"></td>
    <td id="4.14"></td>
  </tr>
  <tr>
    <td id="4.15"></td>
    <td id="4.16"></td>
    <td id="4.17"></td>
  </tr>
  <tr>
    <td id="4.18"></td>
    <td id="4.19"></td>
    <td id="4.20"></td>
  </tr>
    <tr>
    <td id="4.21"></td>
    <td id="4.22"></td>
    <td id="4.23"></td>
  </tr>
  <tr>
    <td id="4.24"></td>
    <td id="4.25"></td>
    <td id="4.26"></td>
  </tr>
  <tr>
    <td id="4.27"></td>
    <td id="4.28"></td>
    <td id="4.29"></td>
  </tr>
  <tr>
    <td id="4.30"></td>
    <td id="4.31"></td>
    <td id="4.32"></td>
  </tr>
  <tr>
    <td id="4.33"></td>
    <td id="4.34"></td>
    <td id="4.35"></td>
  </tr>
  <tr>
    <td id="4.36"></td>
    <td id="4.37"></td>
    <td id="4.38"></td>
  </tr>
  <tr>
    <td id="4.39"></td>
    <td id="4.40"></td>
    <td id="4.41"></td>
  </tr>
  <tr>
    <td id="4.42"></td>
    <td id="4.43"></td>
    <td id="4.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
            <div ><b id="b5"></b><br>
                                <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="5.0"></td>
    <td id="5.1"></td>
    <td id="5.2"></td>
  </tr>
  <tr>
    <td id="5.3"></td>
    <td id="5.4"></td>
    <td id="5.5"></td>
  </tr>
  <tr>
    <td id="5.6"></td>
    <td id="5.7"></td>
    <td id="5.8"></td>
  </tr>
  <tr>
    <td id="5.9"></td>
    <td id="5.10"></td>
    <td id="5.11"></td>
  </tr>
  <tr>
    <td id="5.12"></td>
    <td id="5.13"></td>
    <td id="5.14"></td>
  </tr>
  <tr>
    <td id="5.15"></td>
    <td id="5.16"></td>
    <td id="5.17"></td>
  </tr>
  <tr>
    <td id="5.18"></td>
    <td id="5.19"></td>
    <td id="5.20"></td>
  </tr>
    <tr>
    <td id="5.21"></td>
    <td id="5.22"></td>
    <td id="5.23"></td>
  </tr>
  <tr>
    <td id="5.24"></td>
    <td id="5.25"></td>
    <td id="5.26"></td>
  </tr>
  <tr>
    <td id="5.27"></td>
    <td id="5.28"></td>
    <td id="5.29"></td>
  </tr>
  <tr>
    <td id="5.30"></td>
    <td id="5.31"></td>
    <td id="5.32"></td>
  </tr>
  <tr>
    <td id="5.33"></td>
    <td id="5.34"></td>
    <td id="5.35"></td>
  </tr>
  <tr>
    <td id="5.36"></td>
    <td id="5.37"></td>
    <td id="5.38"></td>
  </tr>
  <tr>
    <td id="5.39"></td>
    <td id="5.40"></td>
    <td id="5.41"></td>
  </tr>
  <tr>
    <td id="5.42"></td>
    <td id="5.43"></td>
    <td id="5.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
            <div ><b id="b6"></b><br>
                                <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="6.0"></td>
    <td id="6.1"></td>
    <td id="6.2"></td>
  </tr>
  <tr>
    <td id="6.3"></td>
    <td id="6.4"></td>
    <td id="6.5"></td>
  </tr>
  <tr>
    <td id="6.6"></td>
    <td id="6.7"></td>
    <td id="6.8"></td>
  </tr>
  <tr>
    <td id="6.9"></td>
    <td id="6.10"></td>
    <td id="6.11"></td>
  </tr>
  <tr>
    <td id="6.12"></td>
    <td id="6.13"></td>
    <td id="6.14"></td>
  </tr>
  <tr>
    <td id="6.15"></td>
    <td id="6.16"></td>
    <td id="6.17"></td>
  </tr>
  <tr>
    <td id="6.18"></td>
    <td id="6.19"></td>
    <td id="6.20"></td>
  </tr>
    <tr>
    <td id="6.21"></td>
    <td id="6.22"></td>
    <td id="6.23"></td>
  </tr>
  <tr>
    <td id="6.24"></td>
    <td id="6.25"></td>
    <td id="6.26"></td>
  </tr>
  <tr>
    <td id="6.27"></td>
    <td id="6.28"></td>
    <td id="6.29"></td>
  </tr>
  <tr>
    <td id="6.30"></td>
    <td id="6.31"></td>
    <td id="6.32"></td>
  </tr>
  <tr>
    <td id="6.33"></td>
    <td id="6.34"></td>
    <td id="6.35"></td>
  </tr>
  <tr>
    <td id="6.36"></td>
    <td id="6.37"></td>
    <td id="6.38"></td>
  </tr>
  <tr>
    <td id="6.39"></td>
    <td id="6.40"></td>
    <td id="6.41"></td>
  </tr>
  <tr>
    <td id="6.42"></td>
    <td id="6.43"></td>
    <td id="6.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
            <div ><b id="b7"></b><br>
                               <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="7.0"></td>
    <td id="7.1"></td>
    <td id="7.2"></td>
  </tr>
  <tr>
    <td id="7.3"></td>
    <td id="7.4"></td>
    <td id="7.5"></td>
  </tr>
  <tr>
    <td id="7.6"></td>
    <td id="7.7"></td>
    <td id="7.8"></td>
  </tr>
  <tr>
    <td id="7.9"></td>
    <td id="7.10"></td>
    <td id="7.11"></td>
  </tr>
  <tr>
    <td id="7.12"></td>
    <td id="7.13"></td>
    <td id="7.14"></td>
  </tr>
  <tr>
    <td id="7.15"></td>
    <td id="7.16"></td>
    <td id="7.17"></td>
  </tr>
  <tr>
    <td id="7.18"></td>
    <td id="7.19"></td>
    <td id="7.20"></td>
  </tr>
    <tr>
    <td id="7.21"></td>
    <td id="7.22"></td>
    <td id="7.23"></td>
  </tr>
  <tr>
    <td id="7.24"></td>
    <td id="7.25"></td>
    <td id="7.26"></td>
  </tr>
  <tr>
    <td id="7.27"></td>
    <td id="7.28"></td>
    <td id="7.29"></td>
  </tr>
  <tr>
    <td id="7.30"></td>
    <td id="7.31"></td>
    <td id="7.32"></td>
  </tr>
  <tr>
    <td id="7.33"></td>
    <td id="7.34"></td>
    <td id="7.35"></td>
  </tr>
  <tr>
    <td id="7.36"></td>
    <td id="7.37"></td>
    <td id="7.38"></td>
  </tr>
  <tr>
    <td id="7.39"></td>
    <td id="7.40"></td>
    <td id="7.41"></td>
  </tr>
  <tr>
    <td id="7.42"></td>
    <td id="7.43"></td>
    <td id="7.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
            <div ><b id="b8"></b><br>
                                <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="8.0"></td>
    <td id="8.1"></td>
    <td id="8.2"></td>
  </tr>
  <tr>
    <td id="8.3"></td>
    <td id="8.4"></td>
    <td id="8.5"></td>
  </tr>
  <tr>
    <td id="8.6"></td>
    <td id="8.7"></td>
    <td id="8.8"></td>
  </tr>
  <tr>
    <td id="8.9"></td>
    <td id="8.10"></td>
    <td id="8.11"></td>
  </tr>
  <tr>
    <td id="8.12"></td>
    <td id="8.13"></td>
    <td id="8.14"></td>
  </tr>
  <tr>
    <td id="8.15"></td>
    <td id="8.16"></td>
    <td id="8.17"></td>
  </tr>
  <tr>
    <td id="8.18"></td>
    <td id="8.19"></td>
    <td id="8.20"></td>
  </tr>
    <tr>
    <td id="8.21"></td>
    <td id="8.22"></td>
    <td id="8.23"></td>
  </tr>
  <tr>
    <td id="8.24"></td>
    <td id="8.25"></td>
    <td id="8.26"></td>
  </tr>
  <tr>
    <td id="8.27"></td>
    <td id="8.28"></td>
    <td id="8.29"></td>
  </tr>
  <tr>
    <td id="8.30"></td>
    <td id="8.31"></td>
    <td id="8.32"></td>
  </tr>
  <tr>
    <td id="8.33"></td>
    <td id="8.34"></td>
    <td id="8.35"></td>
  </tr>
  <tr>
    <td id="8.36"></td>
    <td id="8.37"></td>
    <td id="8.38"></td>
  </tr>
  <tr>
    <td id="8.39"></td>
    <td id="8.40"></td>
    <td id="8.41"></td>
  </tr>
  <tr>
    <td id="8.42"></td>
    <td id="8.43"></td>
    <td id="8.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
            <div ><b id="b9"></b><br>
 
            <table style="width:100%">
  <tr>
    <th text align = "left">Category</th>
    <th text align = "left">Opening Rank</th>
    <th text align = "left">Closing Rank</th>
  </tr>
  <tr>
    <td id="9.0"></td>
    <td id="9.1"></td>
    <td id="9.2"></td>
  </tr>
  <tr>
    <td id="9.3"></td>
    <td id="9.4"></td>
    <td id="9.5"></td>
  </tr>
  <tr>
    <td id="9.6"></td>
    <td id="9.7"></td>
    <td id="9.8"></td>
  </tr>
  <tr>
    <td id="9.9"></td>
    <td id="9.10"></td>
    <td id="9.11"></td>
  </tr>
  <tr>
    <td id="9.12"></td>
    <td id="9.13"></td>
    <td id="9.14"></td>
  </tr>
  <tr>
    <td id="9.15"></td>
    <td id="9.16"></td>
    <td id="9.17"></td>
  </tr>
  <tr>
    <td id="9.18"></td>
    <td id="9.19"></td>
    <td id="9.20"></td>
  </tr>
    <tr>
    <td id="9.21"></td>
    <td id="9.22"></td>
    <td id="9.23"></td>
  </tr>
  <tr>
    <td id="9.24"></td>
    <td id="9.25"></td>
    <td id="9.26"></td>
  </tr>
  <tr>
    <td id="9.27"></td>
    <td id="9.28"></td>
    <td id="9.29"></td>
  </tr>
  <tr>
    <td id="9.30"></td>
    <td id="9.31"></td>
    <td id="9.32"></td>
  </tr>
  <tr>
    <td id="9.33"></td>
    <td id="9.34"></td>
    <td id="9.35"></td>
  </tr>
  <tr>
    <td id="9.36"></td>
    <td id="9.37"></td>
    <td id="9.38"></td>
  </tr>
  <tr>
    <td id="9.39"></td>
    <td id="9.40"></td>
    <td id="9.41"></td>
  </tr>
  <tr>
    <td id="9.42"></td>
    <td id="9.43"></td>
    <td id="9.44"></td>
  </tr>
</table>
            </div>
            <v-divider></v-divider>
               </v-card-text>
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
     return {
       showl:true,
       showp:true,
       showc:false,
      }
    },
    created(){
        var vm=this;
        var poo; var g=[];var i,j=1;
        db.collection("colleges").doc("src").get().then(function(doc){
          document.getElementById("img").setAttribute("src", doc.data().src) ;
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
                            document.getElementById(i+".."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+".."+j).style.display = "none";
                        }
                    }
                    if(i==2){
                        out=doc.data().Courses;
                        for(j=1;j<=4;j++){
                            if(out[j-1])
                            document.getElementById(i+".."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+".."+j).style.display = "none";
                        }
                    }
                    if(i==3){
                        out=doc.data().moa;
                        for(j=1;j<=4;j++){
                            if(out[j-1])
                            document.getElementById(i+".."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+".."+j).style.display = "none";
                        }
                    }
                    if(i==4){
                        out=doc.data().Fees;
                        for(j=1;j<=4;j++){
                            if(out[j-1])
                            document.getElementById(i+".."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+".."+j).style.display = "none";
                        }
                    }
                    if(i==5){
                        out=doc.data().Packages;
                        for(j=1;j<=4;j++){
                            if(out[j-1])
                            document.getElementById(i+".."+j).innerHTML=out[j-1];
                            else
                            document.getElementById(i+".."+j).style.display = "none";
                        }
                    }
                }
                var k;
                vm.showc=true;
                vm.showl=false;
          var branch=doc.data().Branches;
            for(var i=0;i<=9;i++){
              if(branch[i]) 
               document.getElementById("b"+i).innerHTML = branch[i];
               else
                document.getElementById("b"+i).style.display = "none";
            }

                var b=doc.data().b0;
                for(i=0;i<=9;i++){
switch (i) {
  case 0:
    b=doc.data().b0;
    break;
  case 1:
    b=doc.data().b1;
    break;
  case 2:
     b=doc.data().b2;
    break;
  case 3:
    b=doc.data().b3;
    break;
  case 4:
    b=doc.data().b4;
    break;
  case 5:
    b=doc.data().b5;
    break;
  case 6:
    b=doc.data().b6;
  case 7:
    b=doc.data().b7;
  case 8:
    b=doc.data().b8;
  case 9:
    b=doc.data().b9;
}                  
                        for(j=0, k=0;j<=42,k<=14;j=j+3,k++){
                            if(b[k]){
                            var c = b[k].split(",");
                            document.getElementById(i+"."+j).innerHTML= c[0];
                            document.getElementById(i+"."+(j+1)).innerHTML= c[1];
                            document.getElementById(i+"."+(j+2)).innerHTML= c[2];
                            }
                            else{
                            document.getElementById(i+"."+j).style.display = "none";
                            document.getElementById(i+"."+(j+1)).style.display = "none";
                            document.getElementById(i+"."+(j+2)).style.display = "none";
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