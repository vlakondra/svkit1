<script lang="ts">
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";

    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>


<div style="display:flex">
    <div>
        {#if data && data.result}
            {#each data.result as artist}
                <div>
                    <a href={`/params/${artist.artistId}`}>
                        {artist.name}
                    </a>
                </div>
            {/each}
        {/if}

    </div>
    <div style="width:50%;margin-left:20px;background: #dedede;">
        {@render children()}
   </div>
</div>
