<script>
  import { links } from '$lib/data/links';
  import NavList from '$lib/components/nav/NavList.svelte';
  import '../app.css';
</script>

<div class="grid [grid-template:auto_1fr_auto/auto_1fr_auto] gap-2">
  <header class="col-span-full bg-orange-400 p-3">
    <h1 class="text-2xl font-bold">StudyBuddy</h1>
  </header>
  <aside class="w-[360px]">
    <nav class="mx-3">
      <NavList {links} />
    </nav>
  </aside>
  <main class="col-span-2">
    <slot />
  </main>
</div>
