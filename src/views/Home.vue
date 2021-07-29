<template>
  <div>
    <Body/>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Body from '../components/body/Body.vue'
import Footer from '../components/footer/Footer.vue'
  export default {
    data () {
      return {
        dialog: false,
        userid: '',
        num: ''
      }
    },
    components:{
      Body,
      Footer
    },
    methods:{
        
    },
    computed:{
      // count(){
        // return 
      // }
    },
    created(){
          let token = localStorage.access_token;
          let auth = JSON.parse(atob(token.split('.')[1]));
          console.log(auth);
         
    }
  }
</script>
