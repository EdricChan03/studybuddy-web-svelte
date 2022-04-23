<script lang="ts">
  import { page } from '$app/stores';
  import type { Link } from '$lib/data/links';

  export let links: Link[];

  function getNavItemClasses(path: string): string {
    return $page.url.pathname === path
      ? 'text-orange-700 bg-orange-200/50 hover:bg-orange-300/50 active:bg-orange-400/50'
      : 'hover:bg-slate-200 active:bg-slate-300';
  }
</script>

{#each links as link}
  {@const url = !('separator' in link) ? `/${link.url}` : ''}
  {#if !('separator' in link)}
    <a href={url} class="flex items-center {getNavItemClasses(url)} rounded-[28px] h-14 p-4">
      <span class="material-icons-outlined mr-3" aria-hidden="true">{link.icon}</span>
      <span>{link.name}</span>
    </a>
  {:else}
    <hr class="my-4 mx-7" />
  {/if}
{/each}
