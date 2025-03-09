<script lang="ts">
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";

    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<h4>Layout.svelte</h4>
{JSON.stringify(data)}
{#if data.rootData.val}
    <h4>{data.rootData.val}</h4>
{/if}
<div>{@render children()}</div>
