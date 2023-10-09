<script lang="ts">
  import Hamburger from "$lib/components/Hamburger.svelte";
  import "../app.css";
  let hamburger: any;
</script>

<main class="w-full h-full">
  <nav
    class="w-full flex flex-row items-center justify-center p-4 bg-slate-900 fixed z-10"
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      on:click={hamburger.openHamburger}
      class="w-40"
      src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png"
      alt="Steam logo"
    />
  </nav>
  <Hamburger bind:this={hamburger} />

  <slot><!-- optional fallback --></slot>
</main>
