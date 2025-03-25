<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
</script>

<h2>Home page</h2>

<p>
    <a href="/onetable">Простая таблица</a>
</p>
<p>
    <a href="/jointables">Объединение таблиц</a>
</p>

<a href="/params">Исполнители и кол-во альбомов</a>
