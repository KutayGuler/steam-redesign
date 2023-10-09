<script lang="ts">
  import { slide } from "svelte/transition";

  export function openHamburger() {
    open = true;
  }
  let open = false;
  const links = [];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if open}
  <div
    class="z-20 bg-black opacity-80 w-full"
    on:click|self={() => (open = false)}
  >
    <div class="w-1/2" in:slide>
      {#each links as link}
        <a href="/">{link}</a>
      {/each}
    </div>
  </div>
{/if}
