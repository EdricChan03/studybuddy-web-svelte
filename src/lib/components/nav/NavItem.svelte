<script lang="ts">
  import { page } from '$app/stores';

  import type { Link } from '$lib/data/links';

  export let link: Link;

  let activeClasses = '';
  let url = '';

  $: {
    if (!('separator' in link) && link.url !== undefined) {
      url = `/${link.url}`;
      activeClasses =
        $page.url.pathname === url
          ? 'focus:ring-orange-500 text-orange-700 bg-orange-200/50 hover:bg-orange-300/50 active:bg-orange-400/50'
          : 'focus:ring-slate-400 hover:bg-slate-200 active:bg-slate-300';
    }
  }
</script>

{#if !('separator' in link)}
  <a
    href={url}
    class="flex items-center transition-all focus:outline-none focus:ring gap-3 {activeClasses} rounded-[28px] h-14 p-4"
  >
    <svelte:component this={link.icon} aria-hidden="true" />
    <span>{link.name}</span>
  </a>
{:else}
  <hr class="my-4 mx-7" />
{/if}
