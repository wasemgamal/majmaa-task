<template>
  <div class="home_page">
    <navbar></navbar>
    <Banner></Banner>
    <Features></Features>
    <About></About>
    <Fields></Fields>
    <RecentCourses></RecentCourses>
    <ActiveCourses></ActiveCourses>
    <Activities></Activities>
    <Supporters></Supporters>
    <Footer></Footer> 
  </div> 
</template> 
<script>
import Banner from '@/components/pages/home/Banner.vue';
import Navbar from '@/components/layout/Navbar.vue';
import Features from '@/components/pages/home/Features.vue';
import About from '@/components/pages/home/About.vue';
import Fields from '@/components/pages/home/Fields.vue';
import RecentCourses from '@/components/pages/home/RecentCourses.vue';
import ActiveCourses from '@/components/pages/home/ActiveCourses.vue';
import Activities from '@/components/pages/home/Activities.vue';
import Supporters from '@/components/pages/home/Supporters.vue';
import Footer from '@/components/layout/Footer.vue';
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Banner,
    Features,
    About,
    Fields,
    RecentCourses,
    ActiveCourses,
    Activities,
    Supporters,
    Footer,
  } 
}
</script>
