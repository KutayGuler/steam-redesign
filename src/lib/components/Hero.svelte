<script>
  import Carousel from 'svelte-carousel';
</script>

<Carousel autoplay autoplayDuration={5000} arrows={false}>
  {#each { length: 3 } as item}
    <div class="relative">
      <h3 class="absolute bottom-16 left-8 text-white text-2xl font-bold">
        Stray Panda
      </h3>
      <img
        class="w-full h-full pb-4"
        src="https://images.unsplash.com/photo-1635205411883-ae35d1169f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHx2aWRlbyUyMGdhbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </div>
  {/each}w
</Carousel>
<div class="pb-8" />

<!-- <img
  class="w-full h-full pb-4"
  src="https://images.unsplash.com/photo-1635205411883-ae35d1169f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHx2aWRlbyUyMGdhbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  alt=""
/> -->
