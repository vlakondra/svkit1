<script lang="ts">
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";

    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div style="display:flex">
    <div style="width:70%;background: #dedede;">
        <h5>layout content</h5>
        {@render children()}
    </div>

    <div style='padding-left: 20px;'>
        <p>
            <a href="/params/5">link</a>
        </p>
        <p>
            <a href="/params/6">link</a>
        </p>
        <p>
            <a href="/onetable">onetable</a>
        </p>
        <p>
            <a href="/jointables">jointables</a>
        </p>
    </div>
</div>
