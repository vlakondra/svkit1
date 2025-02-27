<svelte:options runes={true} />

<script>
    let { data } = $props();
</script>

<!-- {JSON.stringify(data)} -->

<h3>
    {#each data.result2 as item}
        <div>{item.Name}</div>
    {/each}
</h3>
