<template>
  <div class="services_main dir-rtl">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="titlepage">
            <h2>خدمات آشا</h2>
          </div>
        </div>
        <div class="col-sm-9">
          <ul class="nav nav-tabs md-tabs border_none" id="myTabMD" role="tablist">
            <li class="nav-item lisertab" v-for="service in services" :key="service">
              <a class="nav-link servi_tab" :class="service.name == 'license' && 'active'" :id="service.id"
                data-toggle="tab" :href="'#' + service.controls" role="tab" :aria-controls="service.controls"
                :aria-selected="service.name == 'license'">{{ service.title }}</a>
            </li>
          </ul>
          <div class="tab-content card back_bg" id="myTabContentMD">
            <div v-for="service in services" :key="service" class="tab-pane fade"
              :class="service.name == 'license' && 'show active'" :id="service.controls" role="tabpanel"
              :aria-labelledby="service.id">
              <div class="row">
                <div class="col-md-4 col-sm-6" :class="item.style" v-for="(item, index) in service.items" :key="index">
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img :src="require(`../assets/img/${item.img}`)" :alt="item.title" />
                      </figure>
                      <div class="ho_dist">
                        <span>
                          {{ item.title }} {{ item.desc.substring(0, 70) }}
                          <router-link :to="{ name: 'service', params: { name: item.title } }">بیشتر...</router-link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-sm-6 margin_top40">
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["services"]),
  },
};
</script>

<style lang="css" scoped src="@/assets/css/bootstrap.v4.5.3.basco.min.css"></style>
<style lang="scss" scoped src="@/assets/scss/style.basco.scss"></style>
<style lang="scss" scoped src="@/assets/scss/responsive.basco.scss"></style>

<style>
@keyframes shadow {
  0% {
    transform: scaleX(1, 1);
  }

  100% {
    transform: scale(.3, .3);
  }
}

.services_img:hover {
  animation: shadow 0.7s alternate ease;
  animation-iteration-count: 1;
}

.ho_dist:hover {
  z-index: 99999;
  color: aliceblue;
}
</style>