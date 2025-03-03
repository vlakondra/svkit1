<svelte:options runes={true} />
<script lang='ts'>
    //import type {PageProps} from "./$types";
    //let { data }: PageProps = $props();

//PageProps vs PageData --> DeepSeek

    import type { PageData } from "./$types";
    //The syntax { data }: { data: PageData } is 
    // a type annotation for the data variable. 
    // It indicates that data is an object with 
    // a single property data of type PageData.
     // OK! let { data}:{data:PageData}= $props(); // OK!
     //но это тоже работает
     let { data}= $props();

</script>

{JSON.stringify(data)}
<h3>
    {#if data && data.result} 
        {#each data.result as item}
            <div>{item.artistId}--{item.name}</div>
        {/each}
    {:else}
        <div>Данных нет</div>
    {/if}
</h3>
