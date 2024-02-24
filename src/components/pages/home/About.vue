<template>
    <div class="about_section py-5 overflow-hidden">
      <div class="container my-5">
        <div class="row">
          <aside class="col-md-7">
            <h2 class=" my-3 font_bold font_size__40 d-inline-block main_head"><span class="text-dark"> منصة </span> <span
              class="primary_color"> ارتقاء
            </span></h2>
            <p class="text-dark text-justify">
              يعد التدريب والتطوير المهني من أهم روافد صقل المهارات وتنمية المعارف وبناء اتجاهات الموظفين والعاملين في المؤسسات الحكومية والخاصة بل وجميع أفراد المجتمع.وفي ضوء ما تشهده الدولة بكافة مؤسساتها من اهتمام بالتدريب وربط تقييم أداء الموظفين بما يشاركون فيه من برامج تدريبية وورش عمل فقد ساهم ذلك في تعدد الجهات المسؤولة عن التدريب وتنوع الطرق والأساليب التدريبية مما أدى في بعض الحالات إلى تداخل الاختصاصات بين إدارات تلك الجهات فيما يتعلق بمسؤوليات التدريب. من هنا كان لزاما على الجهات العمل على آليات ووسائل توحد جهودها في مجال التدريب.
            </p>
            <div class="row">
              <aside v-for="item of statistics" class="col-md-5 mb-3">
                <div class="d-flex align-items-center bg-white p-3 shadow border_radius__20">
                  <base-image class="me-2" :path="`svg/${item.img}`"/>
                  <div class="font_bold">
                    <h6 class="text-dark font_size__35">{{ item.count }}</h6>
                    <h6 class="primary_color font_size__35">{{ item.title }}</h6>
                  </div>
                </div>
              </aside>
            </div>
          </aside>
          <aside class="col-md-5 text-end about_image mt-md-0 mt-5">
            <base-image class="img-fluid" path="about-section.png"/>
          </aside>
        </div>
      </div>
    </div>
</template>

<script>
import BaseImage from '@/components/shared/BaseImage.vue';


export default {
  name: 'AboutSection',
  components: {
    BaseImage,
  },
  data(){
    return{
      statistics:[
        {
          img:'plus.svg',
          count: '16096 +',
          title: 'المسجلين'
        },
        {
          img:'users.svg',
          count: '16096 +',
          title: 'المتدربين'
        },
        {
          img:'desktop.svg',
          count: '16096 +',
          title: 'الــــدورات'
        },
        {
          img:'user.svg',
          count: '16096 +',
          title: 'المدربين'
        },
      ]
    }
  }
}
</script>