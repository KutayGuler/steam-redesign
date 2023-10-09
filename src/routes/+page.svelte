<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Searchbox from '$lib/components/Searchbox.svelte';
  import { fly, scale } from 'svelte/transition';
  const categories = ['new', 'trending', 'top', 'upcoming'];
  const products = {
    new: [
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      }
    ],
    trending: [
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      }
    ],
    top: [
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      }
    ],
    upcoming: [
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 84
      }
    ]
  };
  let category = categories[0];
</script>

<main class="flex flex-col bg-slate-950 w-full h-full">
  <Hero />
  <Searchbox />
  <div class="grid grid-rows-2 gird-cols-2">
    <div>stuff</div>
    <div>stuff</div>
    <div>stuff</div>
    <div>stuff</div>
  </div>
  <div class="flex flex-row gap-2 px-2 pb-2">
    {#each categories as c}
      <button
        on:click={() => (category = c)}
        class="{category == c
          ? 'bg-white text-black'
          : 'bg-black text-white hover:bg-gray-900'} rounded-full px-4 py-2 text-xs font-bold border border-white/30"
        >{c.toUpperCase()}</button
      >
    {/each}
  </div>
  <div class="flex flex-col">
    {#each products[category] as { title, categories, price, score }, i}
      <a
        href="/product/{title.replace(' ', '-').toLowerCase()}"
        class="flex flex-row items-center gap-2 hover:bg-slate-600 p-2"
      >
        <img src="https://placehold.co/160x90" alt="" />
        <div class="flex flex-col gap-1">
          <h3 class="text-white">{title}</h3>
          <div class="flex flex-row gap-1 text-gray-300">
            {#each categories as category}
              <a class="text-xs" href="/category/{category.toLowerCase()}">{category}</a>
            {/each}
          </div>
          <div class="flex flex-row gap-1 text-xs">
            <span class="text-sky-500 font-bold">{price}</span>
            <span class="text-white">{score}%</span>
          </div>
        </div>
      </a>
    {/each}
  </div>
</main>
