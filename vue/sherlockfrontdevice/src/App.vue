<template>
   <div id="app">
     <Header />
     <Logo />
     <Nav />
     <Main />
     <Footer />
   </div>
</template>

<script>

import Header from './components/Header.vue'
import Logo from './components/Logo.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'

export default {
  components: {
    Header,
    Logo,
    Nav,
    Main,
    Footer
  }
}
</script>

<style>
:root{
  --bg-shadow:0 0 10px 5px rgba(0,0,0,0.09), 0 0 10px 10px rgba(0,0,0,0.012);
}

#app{
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows:100px 1fr 50px;
  height:100vh;
  grid-template-areas: 
  "logo header"
  "nav main"
  "nav footer"
  ;
}
*{
  margin:0;
  padding:0;
}



</style>
