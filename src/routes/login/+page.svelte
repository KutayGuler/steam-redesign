<script lang="ts">
  let qr = false;
</script>

<main class="flex flex-col items-center w-full text-white">
  <h1 class="text-2xl font-bold text-center pb-16">Sign in</h1>
  <div class="w-1/2 flex flex-col gap-2">
    {#if qr}
      <span class="text-center">Scan QR code to sign in</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-48 h-48 self-center"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
        />
      </svg>
      <span class="self-center">or</span>
      <button
        class="inline-flex justify-center gap-1 border-blue-700 border w-full text-white rounded p-2 font-bold"
        on:click={() => (qr = false)}><span>Sign in with password</span></button
      >
    {:else}
      <div>
        <label for=""> Account name </label>
        <input
          class="w-full p-2 rounded border border-slate-600 bg-slate-800"
          type="text"
        />
      </div>
      <div>
        <label for=""> Password </label>
        <input
          class="w-full p-2 rounded border border-slate-600 bg-slate-800"
          type="text"
        />
      </div>
      <div class="inline-flex gap-1">
        <input class="rounded border" type="checkbox" />
        <label for="">Remember me</label>
      </div>
      <button
        class="bg-gradient-to-r from-blue-500 to-blue-700 w-full text-white rounded p-2 font-bold"
        >Sign in</button
      >
      <span class="self-center">or</span>
      <button
        class="inline-flex justify-center gap-1 mt-1 border-blue-700 border w-full text-white rounded p-2 font-bold"
        on:click={() => (qr = true)}
        ><span>Sign in with QR</span>
        <svg
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
            d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
          />
        </svg></button
      >
    {/if}
    <a href="/support" class="underline pt-8">I can't sign in</a>

    <div class="flex flex-row items-center gap-2">
      <span>New to steam?</span>
      <button class="p-1 bg-green-600 rounded text-sm flex-grow"
        >Create an account</button
      >
    </div>
  </div>
</main>
