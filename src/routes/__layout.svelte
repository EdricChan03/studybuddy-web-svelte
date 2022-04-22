<script>
  import { links } from '$lib/data/links';
  import NavList from '$lib/components/nav/NavList.svelte';
  import '../app.css';
</script>

<div class="grid [grid-template:auto_1fr_auto/auto_1fr_auto] gap-2">
  <header class="col-span-full bg-orange-400 p-3">
    <h1 class="text-2xl font-bold">StudyBuddy</h1>
  </header>
  <aside class="mx-2 w-[256px]">
    <!-- Profile header -->
    <header>
      <h3 class="text-lg font-bold">John Doe</h3>
      <h4 class="text-sm font-extralight">johndoe@example.com</h4>
    </header>
    <nav>
      <NavList {links} />
    </nav>
  </aside>
  <main class="col-span-2">
    <slot />
  </main>
</div>
