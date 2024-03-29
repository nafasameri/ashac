import {
  createRouter,
  createWebHashHistory, 
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import( /* webpackChunkName: "home" */ "@/views/MainPage.vue")
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import( /* webpackChunkName: "AboutUs" */ "@/views/AboutUs.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import( /* webpackChunkName: "ContactUs" */ "@/views/ContactUs.vue")
  },
  {
    path: "/knowledge-based-conditions",
    name: "KnowledgeBasedConditions",
    component: () => import( /* webpackChunkName: "KnowledgeBasedConditions" */ "@/views/KnowledgeBasedConditions.vue")
  },
  {
    path: "/process-obtaining-license-producing-medical",
    name: "ProcessObtainingLicenseAndProducingMedicalProduct",
    component: () => import( /* webpackChunkName: "ProcessObtainingLicenseAndProducingMedicalProduct" */ "@/views/ProcessObtainingLicenseAndProducingMedicalProduct.vue")
  },
  {
    path: "/download",
    name: "download",
    component: () => import( /* webpackChunkName: "download" */ "@/views/DownLoadPage.vue")
  },
  {
    path: "/services",
    name: "services",
    component: () => import( /* webpackChunkName: "services" */ "@/views/ServiceVisulize.vue")
  },
  {
    path: "/service/:name",
    name: "service",
    component: () => import( /* webpackChunkName: "service" */ "@/views/ServicePage.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import( /* webpackChunkName: "404" */ '@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "sidebar__nav-item--active",
});

export default router;