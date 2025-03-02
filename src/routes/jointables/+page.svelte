<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
</script>

<h3>
    {JSON.stringify(data)}
</h3>
