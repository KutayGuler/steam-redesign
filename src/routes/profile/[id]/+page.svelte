<script lang="ts">
  import { page } from '$app/stores';
  const comments = [
    {
      user: 'user',
      comment: 'comment'
    },
    {
      user: 'user',
      comment: 'comment'
    },
    {
      user: 'user',
      comment: 'comment'
    },
    {
      user: 'user',
      comment: 'comment'
    },
    {
      user: 'user',
      comment: 'comment'
    }
  ];
</script>

{$page.params.id}

<main class="flex flex-col p-4 text-white">
  <div class="flex flex-row gap-2">
    <img src="https://placehold.co/120x120" alt="" />
    <div class="flex flex-col">
      <h1 class="text-4xl">user name</h1>
      <p>Country</p>
      <p>Description</p>
    </div>
  </div>
  <div>
    <h1>Comments</h1>
    <div class="flex flex-col gap-2">
      {#each comments as comment}
        <div class="flex flex-row gap-2">
          <img src="https://placehold.co/60x60" alt="" />
          <div class="flex flex-col gap-1">
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>
