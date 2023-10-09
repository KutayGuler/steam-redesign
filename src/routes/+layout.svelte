<script lang="ts">
  import '../app.css';

  import { fade, fly, slide } from 'svelte/transition';

  export function openHamburger() {
    open = true;
  }
  let open = false;
  const links = [];
</script>

<main class="w-full h-full {open ? 'overflow-hidden' : ''}">
  <nav
    class="w-full flex flex-row items-center justify-between p-4 pl-0 bg-gradient-to-b from-black to-transparent fixed z-10"
  >
    <img
      class="w-40"
      src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png"
      alt="Steam logo"
    />
    <button on:click={openHamburger}>
      <img
        class="w-8 h-8"
        src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_menu_hamburger.png"
        alt=""
      />
    </button>
  </nav>
  {#if open}
    <div class="fixed z-20 w-2/3 h-full bg-slate-950 right-0" transition:fly={{ x: 100 }}>
      {#each links as link}
        <a href="/">{link}</a>
      {/each}
    </div>
    <div
      class="fixed z-10 bg-black opacity-80 w-full h-full"
      transition:fade
      on:click|self={() => {
        console.log('clicked');
        open = false;
      }}
    />
  {/if}

  <slot><!-- optional fallback --></slot>
</main>
