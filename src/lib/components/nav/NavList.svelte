<script lang="ts">
  import type { Link } from '$lib/data/links';
  import NavItem from './NavItem.svelte';

  export let links: Link[];
</script>

{#each links as link}
  <NavItem {link} />
{/each}
