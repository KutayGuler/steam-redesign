<script lang="ts">
  import Searchbox from "$lib/components/Searchbox.svelte";
</script>

<main class="flex flex-col gap-4 px-5 text-white">
  <h1 class="text-5xl font-bold">Support</h1>
  <p><a class="underline text-blue-500" href='/'>Sign in</a> to get personalized help. If you can't sign in, click <a class="underline text-blue-500" href='/'>here</a></p>
  <Searchbox _for={'issues, features and games'} />
  <!-- TODO: popular grid -->
  <!-- TODO: list of possible problems -->
</main>
