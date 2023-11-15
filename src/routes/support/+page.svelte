<script lang="ts">
  import { goto } from '$app/navigation';
  import Searchbox from '$lib/components/Searchbox.svelte';
  import { supportType } from '$lib/db';

  const popularGames = [
    {
      title: 'Counter Strike 2',
      src: 'https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Dota 2',
      src: 'https://images.unsplash.com/photo-1614465000772-1b302f406c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'PUBG',
      src: 'https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Apex Legends',
      src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const issueTypes = [
    'Games, Software, etc.',
    'Purchases',
    'My Account',
    'Trading, Gifting, Market and Steam Points',
    'Steam Client',
    'Steam Community',
    'Steam Hardware',
  ];
</script>

<main class="flex flex-col gap-4 px-5 text-white">
  <h1 class="text-5xl font-bold">Support</h1>
  <p>
    <a class="underline text-blue-500" href="/">Sign in</a> to get personalized
    help. If you can't sign in, click
    <a class="underline text-blue-500" href="/">here</a>
  </p>
  <Searchbox _for={'issues, features and games'} />
  <div
    class="grid grid-rows-2 grid-cols-2 gap-2 items-center justify-center py-4"
  >
    {#each popularGames as { title, src }}
      <button
        on:click={() => {
          $supportType = title;
          goto('/support/type');
        }}
        class="w-full flex flex-col items-center justify-center h-36"
      >
        <div class="flex flex-col items-center absolute z-10 text-white">
          <span class=" text-white font-bold text-lg">
            {title}
          </span>
        </div>
        <img
          class="object-cover w-full h-36 overflow-hidden brightness-50 hover:brightness-100 duration-150 ease-out"
          {src}
          alt=""
        />
      </button>
    {/each}
  </div>
  <div class="flex flex-col gap-2">
    {#each issueTypes as issue}
      <button
        on:click={() => {
          $supportType = issue;
          goto('/support/type');
        }}
        class="p-2 rounded bg-slate-600">{issue}</button
      >
    {/each}
  </div>
</main>
