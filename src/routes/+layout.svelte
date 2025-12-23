<script lang="ts">
  import favicon from "$lib/assets/cold.png";
  import "../style.css";

  let { children } = $props();
  
</script>

export const prerender = true;

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>coldseason</title>
</svelte:head>

{@render children()}
