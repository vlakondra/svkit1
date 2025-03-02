<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
</script>

<h3>
    {JSON.stringify(data)}
</h3>
<div>
    {#each data.artAlbums as item}
         <div>{item.artName}</div>
         {#each item.albums as album}
             <div style="margin-left:20px" >{album.albumTitle}</div>
         {/each}
    {/each}
</div>