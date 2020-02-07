<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a
              rel="tooltip"
              title="Follow us on Twitter"
              data-placement="bottom"
              href
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              rel="tooltip"
              title="Like us on Facebook"
              data-placement="bottom"
              href
              target="_blank"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a
              rel="tooltip"
              title="Follow us on Instagram"
              data-placement="bottom"
              href
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"
              target="_blank"
              class="dropdown-item"
            >Documentation</a>
          </li>
        </ul>
      </nav>
      <div class="copyright">&copy; {{ year }}</div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
