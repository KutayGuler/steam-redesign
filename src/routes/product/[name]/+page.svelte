<script lang="ts">
  import { page } from "$app/stores";
  export let data;
  console.log(data);

  let title = $page.params.name.replaceAll("-", " ");
</script>

<main class="text-white">
  <h1>{title}</h1>
</main>
