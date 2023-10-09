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
        score: 63
      },
      {
        title: 'Stray Panda',
        categories: ['Adventure', 'Casual'],
        price: '$29.99',
        score: 25
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

  function getScoreColor(score: number) {
    if (score <= 33) {
      return 'text-red-400';
    } else if (score > 33 && score <= 66) {
      return 'text-yellow-500';
    } else if (score > 66) {
      return 'text-green-500';
    }
  }

  const mainCategories = [
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
</svg>
`,
      title: 'NEW',
      src: 'https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd" />
</svg>
`,
      title: 'TAGS',
      src: 'https://images.unsplash.com/photo-1614465000772-1b302f406c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm3.53 7.28a.75.75 0 00-1.06-1.06l-6 6a.75.75 0 101.06 1.06l6-6zM8.625 9a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm5.625 3.375a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
</svg>
`,
      title: 'SPECIALS',
      src: 'https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
</svg>
`,
      title: 'FREE',
      src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];
</script>

<main class="flex flex-col bg-slate-950 w-full h-full">
  <Hero />
  <Searchbox />
  <div class="grid grid-rows-2 grid-cols-2 gap-2 items-center justify-center p-2 py-4">
    {#each mainCategories as { svg, title, src }}
      <button class="w-full flex flex-col items-center justify-center h-36">
        <div class="flex flex-col items-center absolute z-10 text-white">
          {@html svg}
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
            <span class={getScoreColor(score)}>{score}%</span>
          </div>
        </div>
      </a>
    {/each}
  </div>
</main>
