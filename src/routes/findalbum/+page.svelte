<script lang="ts">
    import type { PageProps } from "./$types";

    let { data, form }: PageProps = $props();
</script>

<div>{data.something}</div>

<h4>Поиск альбома</h4>
<form method="POST">
    <label>
        Альбом
        <input name="album" type="text" />
    </label>

    <button>Найти</button>
</form>

{#if form?.notfinded}
    <p>Ничего не нашлось</p>
{/if}

<h3>{form?.finded?.title}</h3>

{#if form?.finded}
    {#each form.finded.tracks as item}
        <div>{item.name}</div>
    {/each}
{/if}
