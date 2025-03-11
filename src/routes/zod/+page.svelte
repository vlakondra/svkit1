<script lang="ts">
    import type { PageProps } from "./$types";
    let { data, form }: PageProps = $props();
</script>

<form method="POST">
    <div>
        <input type="text" name="name" placeholder="Name" aria-label="Name" />
        {#if form?.errors?.name}
            <div class="error">{form.errors.name.join(", ")}</div>
        {/if}
    </div>
    <div>
        <select name="prof" aria-label="Prof" required>
            <option value="buhgalter">Бухгалтер</option>
            <option value="engineer">Инженер</option>
            <option value="manager">Менеджер</option>
            <option value="director">Директор</option>
        </select>
    </div>
    <div>
        <input type="email" name="email" placeholder="Email" />
        {#if form?.errors?.email}
            <div class="error">{form.errors.email.join(", ")}</div>
        {/if}
    </div>

    <button type="submit">Submit</button>
</form>

{#if form?.success}
    <div class="success">Данные успешно отправлены!</div>
{/if}