<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();

    const getArtName = (artId: number) => {
        //Возврат имени Исп-ля по Id
        if (artId) {
            let artName = data.artAlbCount?.find((a) => a.artistId === artId);
            return artName?.artistName;
        } else {
            return "Нет данных";
        }
    };
</script>

<div style="padding:10px">
    {#if data && data.artAlbums}
        <h4>
            {getArtName(data.artAlbums[0]?.artistId)}; Кол-во: {data.artAlbums.length}
        </h4>
        {#each data.artAlbums as album}
            <div>{album.title}</div>
        {/each}
    {/if}
</div>
