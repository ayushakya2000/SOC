<template>


<v-app class="grey lighten-3"> 

<div>
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
<br>


  <v-flex xs12 class="mt-3 pt-4">
  <v-parallax src="https://wallpapercave.com/wp/wp2140467.jpg"
  height="920"
  >
  <v-flex sm12>

  <p class="blockquote display-3 borderr2 mt-4 ml-3" id="name1">COLLEGES</p>
  
  </v-flex>
  </v-parallax>
  </v-flex>




  <v-layout>
<v-flex xs12>
   <v-img
src="http://realpinkaz.com/wp-content/uploads/web-design-background-montreal-web-design-montreal-web-design-web-web-design-background.jpg"
gradient="to left bottom, #000000, #9E9E9E">
  <center>
<v-flex lg5 xs10  >
  <div class="my-5">
  
      <v-text-field
        dark
        v-model="search"
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
  </div>

  </v-flex>

</center>


      <v-layout row wrap justify-space-around class="my-5">
    <v-flex xs12 sm6 lg3  v-for="card in filter"
              :key="card.title"
            class="ma-5">
            <v-hover>
               
      <v-card
   
   
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 20 : 2}`"
      @click="fn(card.id,card.src)"
      ripple>
       
        <v-img
          :src="card.src"
          class="borderr"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title class="borderr1">
          <div>
             
            <div class="headline">{{card.title}}</div>
        
          </div>
        </v-card-title>


        
      </v-card>
                
      </v-hover>
    </v-flex>
  </v-layout>
</v-img>

</v-flex>
        
  </v-layout>   


   
</div>

</v-app>

</template>

<script>

export default {
    
  data: () => ({
          search:'',
          show:false,     
          ind:{id:''} ,
      cards: [
        
        { title: 'IIT Bombay', src: 'http://www.iitb.ac.in/sites/default/files/article/images/MB-knowledge-tree.jpg',id:'IIT Bombay' }, 
         { title: 'IIT Delhi', src: 'https://timesofindia.indiatimes.com/photo/58944050.cms',id:'IIT Delhi'},
         { title: 'IIT Guwahati ', src: 'http://www.iitg.ac.in/rtc/About_IIT_Guwahati_files/droppedImage.jpg',id:'IIT Guwahati'}, 
          { title: 'IIT Hyderabad ', src: 'https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2018/12/24/65914-iit-hyderabad-youtube.jpg?itok=s67YL-_j',id:'IIT Hyderabad'},
         { title: 'IIT Kanpur', src: 'https://img.collegepravesh.com/2013/06/IIT-Kanpur.jpg',id:'2', id:'IIT Kanpur'},
           { title: 'IIT Kharagpur ', src: 'https://img.collegepravesh.com/2018/08/IIT-Kharagpur.jpg',id:'IIT Kharagpur'}, 
            { title: 'IIT Madras', src: 'https://images.static-collegedunia.com/public/college_data/images/appImage/1509430807cover.jpg',id:'IIT Madras'},
            { title: 'IIT Roorkee ', src: 'http://www.indiaeducation.net/imagesvr_ce/8764/IIT-Rp1.jpg',id:'IIT Roorkee'}, 
             { title: 'IIT Varanasi', src: 'https://images.static-collegedunia.com/public/college_data/images/appImage/150936663225947IITBHUNew.jpg',id:'IIT Varanasi'},
             {title:'BITS Goa', src:'https://img.collegepravesh.com/2014/02/BITS-Goa.jpg',id:'BITS Pilani Goa Campus'},
             {title:'BITS Hyderabad', src:'https://img.collegepravesh.com/2014/02/BITS-Hyderabad.jpg',id:'BITS Pilani Hyderabad Campus'},
             {title:'BITS Pilani',src:'https://images.static-collegedunia.com/public/college_data/images/appImage/25800_BITS_App.jpg',id:'BITS Pilani Pilani Campus'}
      
      ]
    }),
    computed:{
        filter: function(){
            return this.cards.filter((card)=>{
                return card.title.toLowerCase().match(this.search.toLowerCase())
            })
        }
    },
    methods:{
        fn: function(data,img){
            var Id = db.collection("colleges").doc("ID");
            Id.update({
                ID: data
            })
            db.collection("colleges").doc("src").update({
              src: img
            })
            this.$router.push("/icollege")
            console.log("etry")
            
        }
    }
}
</script>

<style>
.borderr{
  border-left: 6px solid orange;
}
.borderr1{
  border-left: 6px solid #3cd1c2;
}
.borderr2{
  border-left: 4px solid #E91E63;
}
</style>

