<script lang="ts">
  import { page } from '$app/stores';
  import Review from '$lib/components/Review.svelte';
  import { products } from '$lib/db.js';
  import { getScoreColor } from '$lib/utils';
  const { title, review } = products[$page.params.id];

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

<main class="text-white p-4 flex flex-col gap-2">
  <div class="flex flex-row gap-1 items-end justify-between">
    <h1 class="text-4xl font-bold">{title}</h1>
    <p class="text-slate-400 text-sm">{new Date().toDateString()}</p>
  </div>
  <img src="https://placehold.co/160x90" alt="game" class="w-full" />
  <div class="flex flex-row gap-2 overflow-x-auto pb-2 h-20">
    {#each { length: 12 } as item}
      <img src="https://placehold.co/160x90" alt="game" />
    {/each}
  </div>
  <div class="flex flex-col gap-4 text-sm h-24 w-full rounded">
    <div class="inline-flex gap-2">
      <a
        href="#reviews"
        class="w-full text-center border {getScoreColor(
          review.recent,
          'border'
        )} rounded py-2 {getScoreColor(review.recent, 'text')}"
      >
        RECENT REVIEWS {review.recent}%
      </a>
      <a
        href="#reviews"
        class="w-full text-center border {getScoreColor(
          review.all,
          'border'
        )} rounded py-2 {getScoreColor(review.all, 'text')}"
      >
        ALL REVIEWS {review.all}%
      </a>
    </div>

    <p>
      Grand Theft Auto V for PC offers players the option to explore the
      award-winning world of Los Santos and Blaine County in resolutions of up
      to 4k and beyond, as well as the chance to experience the game running at
      60 frames per second.
    </p>

    <div>
      <p class="text-xl text-slate-400">DEVELOPER</p>
      <a class="text-blue-500" href="/">Rockstar North</a>
    </div>

    <div>
      <p class="text-xl text-slate-400">PUBLISHER</p>
      <a class="text-blue-500" href="/">Rockstar Games</a>
    </div>

    <div>
      <h3 class="text-slate-400 text-xl pb-1">TAGS</h3>
      <div class="flex flex-wrap gap-1.5">
        {#each ['xd', 'xd', 'xd', 'xd'] as category}
          <span class="border border-blue-500 rounded px-2">{category}</span>
          <!-- content here -->
        {/each}
      </div>
    </div>
    <!-- 
    <div>
      <h3 class="text-slate-400 text-xl">REVIEWS</h3>
      <p>
        Recent <span class={getScoreColor(review.recent, 'text')}
          >{review.recent}%</span
        >
      </p>
      <p>
        All <span class={getScoreColor(review.all, 'text')}>{review.all}%</span>
      </p>
    </div> -->

    <div class="inline-flex gap-2 items-center self-end">
      <span class="text-lg"> 99.99 zl </span>
      <button
        class="bg-green-500 inline-flex gap-2 p-2 rounded font-bold text-center"
        >Add to Cart <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
    </div>

    <div id="reviews">
      <h2 class="self-center text-xl pb-2">REVIEWS</h2>
      <div class="flex flex-col gap-2">
        {#each reviews as review}
          <Review {review} showGameTitle={false} />
        {/each}
      </div>
    </div>
  </div>
</main>

<!-- TODO -->
