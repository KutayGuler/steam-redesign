<script lang="ts">
  import Searchbox from "$lib/components/Searchbox.svelte";
  const searchTypes = ["friends", "hubs"];
  const discoverTypes = ["recent", "popular"];
  let searchType = searchTypes[0];
  let discoverType = discoverTypes[0];
  let expType: "search" | "discover" = "search";

  const icons = [
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
`,
    `              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
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
    },
    {
      recommended: true,
      funny: 250,
      helpful: 250,
      gifts: 250,
    },
    {
      recommended: false,
      funny: 250,
      helpful: 250,
      gifts: 250,
    },
    {
      recommended: false,
      funny: 250,
      helpful: 250,
      gifts: 250,
    },
    {
      recommended: true,
      funny: 250,
      helpful: 250,
      gifts: 250,
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
        on:click={() => (expType = "search")}
        class:border-b={expType == "search"}
        class:border-blue-500={expType == "search"}>SEARCH</button
      >
      <button
        on:click={() => (expType = "discover")}
        class:border-b={expType == "discover"}
        class:border-blue-500={expType == "discover"}>DISCOVER</button
      >
    </div>
  </div>
  {#if expType == "search"}
    <div class="text-white">
      <Searchbox _for={searchType} />
      <div class="flex flex-row gap-1 pt-1.5">
        {#each searchTypes as type}
          <button
            on:click={() => (searchType = type)}
            class="text-xs rounded border border-slate-800 px-2 py-1 {type ==
            searchType
              ? 'bg-white text-black'
              : 'bg-black text-white'}">{type}</button
          >
        {/each}
      </div>
    </div>
  {:else}
    <div>
      <select
        class="w-full p-2 pl-4 rounded border border-slate-600 bg-slate-800"
      >
        {#each ["", "asd", "asd"] as value}
          <option {value}>{value}</option>
        {/each}
      </select>
      <div class="flex flex-row gap-1 pt-1.5">
        {#each discoverTypes as type}
          <button
            on:click={() => (discoverType = type)}
            class="text-xs rounded border border-slate-800 px-2 py-1 {type ==
            discoverType
              ? 'bg-white text-black'
              : 'bg-black text-white'}">{type}</button
          >
        {/each}
      </div>
    </div>
    <div class="flex flex-col gap-2 pt-4">
      {#each reviews as review}
        <div
          class="w-full h-72 bg-slate-800 border border-slate-600 p-2 text-white rounded"
        >
          <div class="flex flex-row gap-2">
            <div
              class="border border-slate-700 p-2 rounded {review.recommended
                ? 'bg-green-400'
                : 'bg-red-500'}"
            >
              {#if review.recommended}
                <!-- content here -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-16 h-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              {:else}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-16 h-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                  />
                </svg>
              {/if}
            </div>
            <div class="flex flex-col items-start gap-1">
              <h3 class="text-2xl font-bold">
                {review.recommended ? "Recommended" : "Not Recommended"}
              </h3>
              <div class="flex flex-row gap-6 w-full text-xs">
                {#each icons as icon}
                  <span class="flex flex-row gap-1 justify-center">
                    {@html icon}
                    252
                  </span>
                {/each}
              </div>
              <span class="text-xs text-slate-400"
                >{new Date().toDateString()}</span
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</main>
