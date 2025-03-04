<script lang="ts">
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<div>
+page.svelte:  {JSON.stringify(data)}
</div>
<div>
+page.svelte
</div>
<h3>
    {data.pp}
</h3>
<div>
    {data.data.data1.a}
</div>
<div>
    {data.data2.b}
</div>