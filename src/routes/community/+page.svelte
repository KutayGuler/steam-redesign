<script lang="ts">
  import Searchbox from "$lib/components/Searchbox.svelte";
  const searchTypes = ["friends", "hubs"];
  let searchType = searchTypes[0];
</script>

<main class="w-full h-full p-4">
  <h1 class="text-4xl text-white font-bold">Community</h1>
  <Searchbox />
  <div class="flex flex-row gap-1">
    {#each searchTypes as type}
      <button class="text-xs text-white rounded">{type}</button>
    {/each}
  </div>

  <div />
</main>
