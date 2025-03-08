<script lang="ts">
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";

    let { data, children }: { data: LayoutData; children: Snippet } = $props();

    let currentArt = $state("");
    const onArtClick = (artname: string | null) => {
        if (artname) currentArt = artname;
    };
</script>

<div>
    <a href='/'>Домой</a>
</div>

<div style="display:flex">
    <div>
        {#if data?.artAlbCount}
            {#each data.artAlbCount as artist}
                <div class:active={currentArt == artist.artistName}>
                    <a
                        onclick={() => onArtClick(artist.artistName)}
                        href={`/params/${artist.artistId}`}
                    >
                        {artist.artistName}
                    </a>
                </div>
            {/each}
        {/if}
        <a href="/params/">Params</a>
    </div>
    <div style="width:50%;margin-left:20px;background: #dedede;">
        {@render children()}
    </div>
</div>

<style>
    .active {
        font-size: 1.25em;
        font-weight: 600;
        padding: 3px 0;
    }
</style>
