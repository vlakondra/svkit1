<!-- +page.svelte -->
<script lang="ts">
    import { onMount } from "svelte";

    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();

    import textContent from "/static/testfile.txt?raw";
    import textContent2 from "$lib/testfile.txt?raw";

    let res = $state([]);
    onMount(async () => {
        const response = await fetch("/testfile.txt");
        const content = await response.text();
        let spl = content.split("\n");

        for (let n of spl) {
            if (n) {
                res?.push(n.trim());
            }
        }
        console.log(res);
    });
</script>

<div>Загрузка через fetch</div>
{JSON.stringify(res)}

<div>Загрузка через импорт файла</div>
<pre style="font-size:1.2em">{textContent}</pre>
<pre style="font-size:1.5em">{textContent2}</pre>

<div>Загрузка с сервера</div>
{JSON.stringify(data)}

{#each data.res as r}
    <div>{r.question}</div>
    {#each r.answers as a}
        <div>{a}</div>
    {/each}
{/each}
