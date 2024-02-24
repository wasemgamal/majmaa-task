<template>
    <nav class="navbar navbar-expand-lg border-bottom border-white bg-transparent position-absolute top-0 right-0 w-100" style="--bs-border-opacity: .3;" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <BaseImage path="svg/logo.svg" alt="logo"></BaseImage>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">عن ارتقاء</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> الإحصائيات </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> أحدث الدورات </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">  الدورات النشطة </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> الأنشطة  </a>
                    </li>
                </ul>
                <div class="d-flex">
                    <base-button class="btn_gradient__secondary border_radius__15 fw-bold me-2 border-0"> En </base-button>
                    <base-button class="btn_gradient__primary border_radius__15 fw-bold me-2 border-0"> دخول </base-button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script> 
import BaseImage from '@/components/shared/BaseImage.vue';
import BaseButton from '@/components/shared/BaseButton.vue';
export default {
    name: 'Navbar',
    components:{
        BaseImage,
        BaseButton,
    }
}
</script>

<style lang="scss" scoped>
</style>