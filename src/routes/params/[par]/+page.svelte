<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
</script>

<div style='padding:10px'>
    {#if data && data.result}
        {#each data.result as album}
            <div>{album.title}</div>
        {/each}
    {/if}
</div>
