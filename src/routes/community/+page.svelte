<script lang="ts">
  import Review from '$lib/components/Review.svelte';
  import Searchbox from '$lib/components/Searchbox.svelte';
  const searchTypes = ['friends', 'hubs'];
  const discoverSorts = ['recent', 'popular'];
  const discoverTypes = [
    'All',
    'Screenshots',
    'Artwork',
    'Broadcasts',
    'Videos',
    'Workshop',
    'News',
    'Guides',
    'Reviews',
  ];
  let searchType = searchTypes[0];
  let discoverSort = discoverSorts[0];
  let expType: 'search' | 'discover' = 'discover';

  const icons = [
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-green-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
`,
    `              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 stroke-yellow-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-purple-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>
`,
  ];

  const reviews = [
    {
      recommended: true,
      funny: 250,
      helpful: 250,
      gifts: 250,
      hours: 25,
    },
    {
      recommended: true,
      funny: 250,
      helpful: 250,
      gifts: 250,
      hours: 25,
    },
    {
      recommended: false,
      funny: 250,
      helpful: 250,
      gifts: 250,
      hours: 25,
    },
    {
      recommended: false,
      funny: 250,
      helpful: 250,
      gifts: 250,
      hours: 25,
    },
    {
      recommended: true,
      funny: 250,
      helpful: 250,
      gifts: 250,
      hours: 25,
    },
  ];
</script>

<main class="flex flex-col w-full h-full p-4">
  <div>
    <h1 class="text-5xl text-white font-bold pb-2">Community</h1>
    <p class="text-slate-300 text-sm">
      Community and official content for all games and software on Steam.
    </p>
    <div class="flex flex-row gap-2 text-white font-bold text-2xl pb-2 pt-8">
      <button
        on:click={() => (expType = 'search')}
        class:border-b={expType == 'search'}
        class:border-blue-500={expType == 'search'}>SEARCH</button
      >
      <button
        on:click={() => (expType = 'discover')}
        class:border-b={expType == 'discover'}
        class:border-blue-500={expType == 'discover'}>DISCOVER</button
      >
    </div>
  </div>
  {#if expType == 'search'}
    <div class="text-white">
      <Searchbox _for={searchType} />
      <div class="flex flex-row gap-1 pt-1.5">
        {#each searchTypes as type}
          <button
            on:click={() => (searchType = type)}
            class="text-xs rounded border border-slate-800 px-2 py-1 {type ==
            searchType
              ? 'bg-white text-black'
              : 'bg-black text-white'}">{type.toUpperCase()}</button
          >
        {/each}
      </div>
    </div>
  {:else}
    <div>
      <select
        class="w-full p-2 rounded border border-slate-600 bg-slate-800 text-white"
      >
        {#each discoverTypes as value}
          <option {value}>{value}</option>
        {/each}
      </select>
      <div class="flex flex-row gap-1 pt-1.5">
        {#each discoverSorts as type}
          <button
            on:click={() => (discoverSort = type)}
            class="text-xs rounded border border-slate-800 px-2 py-1 {type ==
            discoverSort
              ? 'bg-white text-black'
              : 'bg-black text-white'}">{type.toUpperCase()}</button
          >
        {/each}
      </div>
    </div>
    <div class="flex flex-col gap-4 pt-4">
      {#each reviews as review}
        <Review {review} />
      {/each}
    </div>
  {/if}
</main>
