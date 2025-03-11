<!-- <script lang="ts">
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script> -->

<script lang="ts">
    import { superForm } from "sveltekit-superforms";

    //import type { PageData } from "./$types";

    //let { data }: { data: PageData } = $props();
    let { data } = $props();
    const { errors, constraints, message } = superForm(data.form);

    // Client API:
    const { form } = superForm(data.form);
</script>

<form method="POST">
    <label for="name">Name</label>
    <input type="text" required name="name" bind:value={$form.name} />

    <label for="email">E-mail</label>
    <input type="email" name="email" bind:value={$form.email} />

    <div><button>Submit</button></div>
 
    {#if $message}
        <h4>
            {$message}
        </h4>
    {/if}
</form>
