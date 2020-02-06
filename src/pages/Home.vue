<template>
  <div>
    <div class="page-header clear-filter" filter-color="black">
      <video-bg
        class="page-header-image"
        :sources="['/assets/animated-background/beach.mp4']"
        img="/assets/animated-background/beach_image.jpg"
      ></video-bg>

      <div class="container">
        <div class="content-center brand">
          <h1 class="h1-seo">The default frontend Project.</h1>
          <h3>Um projeto para servir de inicio no desenvolvimento de todos os proximos SPA's.</h3>
        </div>
        <h6 class="category category-absolute">
          Made by
          <a href="https://br.linkedin.com/in/vhnp" target="_blank">Vitor</a>
        </h6>
      </div>
    </div>
    <div v-if="dev">
    <basic-elements></basic-elements>
    <navigation></navigation>
    <tabs-section></tabs-section>
    <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    <carousel-section></carousel-section>
    <nucleo-icons-section></nucleo-icons-section>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Completed with examples</h2>
            <h5 class="description">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              More importantly, looking at them will give you a picture of what
              you can built with this powerful Bootstrap 4 ui kit.
            </h5>
          </div>
        </div>
      </div>
    </div>
    <signup-form></signup-form>
    <examples-section></examples-section>
    <download-section></download-section>
    </div>
  </div>
</template>
<script>
import { Parallax } from "@/components";
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/Navigation";
import TabsSection from "./components/Tabs";
import ProgressPagination from "./components/ProgressPagination";
import Notifications from "./components/Notifications";
import Typography from "./components/Typography";
import JavascriptComponents from "./components/JavascriptComponents";
import CarouselSection from "./components/CarouselSection";
import NucleoIconsSection from "./components/NucleoIconsSection";
import SignupForm from "./components/SignupForm";
import ExamplesSection from "./components/ExamplesSection";
import DownloadSection from "./components/DownloadSection";

export default {
  name: "home",
  bodyClass: "home-page",
  components: {
    Parallax,
    BasicElements,
    Navigation,
    TabsSection,
    ProgressPagination,
    Notifications,
    Typography,
    JavascriptComponents,
    CarouselSection,
    NucleoIconsSection,
    SignupForm,
    ExamplesSection,
    DownloadSection
  },
  data: () => ({ dev: false })
};
</script>
<style></style>
