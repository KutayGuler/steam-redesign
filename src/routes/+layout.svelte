<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import "../app.css";
  import { fade, fly } from "svelte/transition";
  function openHamburger() {
    open = true;
  }
  let open = false;
  const links = [
    { title: "Store", href: "/" },
    { title: "Community", href: "/community" },
    { title: "Support", href: "/support" },
  ];

  afterNavigate(() => (open = false));
</script>

<main class="w-full h-full {open ? 'overflow-hidden' : ''}">
  <nav
    class="{open
      ? 'z-10'
      : 'z-20'} w-full flex flex-row items-center justify-between p-4 pl-0 bg-gradient-to-b from-black via-black to-transparent fixed"
  >
    <a href="/">
      <img
        class="w-40"
        src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png"
        alt="Steam logo"
      />
    </a>
    <button on:click={openHamburger}>
      <img
        class="w-8 h-8"
        src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_menu_hamburger.png"
        alt=""
      />
    </button>
  </nav>
  {#if open}
    <div
      class="flex flex-col gap-2 p-4 fixed z-20 w-2/3 h-full bg-black right-0"
      transition:fly={{ x: 100 }}
    >
      {#each links as link}
        <a class="text-white text-4xl font-bold" href={link.href}
          >{link.title}</a
        >
      {/each}
      <div class="h-full" />
      <button
        class="bg-gradient-to-r from-blue-500 to-blue-700 w-full text-white rounded p-2 font-bold"
        >SIGN IN</button
      >
    </div>
    <div
      class="fixed z-[11] bg-black opacity-80 w-full h-full"
      transition:fade
      on:click|self={() => {
        console.log("clicked");
        open = false;
      }}
    />
  {/if}

  <div class="pb-16" />
  <slot><!-- optional fallback --></slot>
</main>
