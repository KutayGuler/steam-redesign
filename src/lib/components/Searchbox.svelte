<script lang="ts">
  export let _for = '';
</script>

<div class="relative">
  <input
    placeholder={_for ? `Search for ${_for}` : 'Search'}
    class="w-full p-2 rounded border border-slate-600 bg-slate-800"
    type="text"
  />
  <button class="absolute top-3 right-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      class="w-4 h-4 stroke-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  </button>
</div>
