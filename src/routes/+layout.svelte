<script lang="ts">
  import "../app.css";
</script>

<main class="w-full h-full">
  <nav
    class="w-full flex flex-row items-center justify-center p-4 bg-slate-900 fixed z-10"
  >
    <img
      class="w-40"
      src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png"
      alt="Steam logo"
    />
  </nav>

  <slot><!-- optional fallback --></slot>
</main>
