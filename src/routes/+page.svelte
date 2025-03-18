<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
</script>

<h2>Home page</h2>

<button
    class="sm:bg-blue-800 md:bg-green-800 lg:bg-red-800

 px-2 py-3 w-24 rounded-2xl
 tracking-wider "
>
    Пуск
</button>
<p>
    <a href="/findalbum">Поиск альбомов</a>
</p>

<p>
    <a href="/onetable">Простая таблица</a>
</p>
<p>
    <a href="/jointables">Объединение таблиц</a>
</p>

<a href="/params">Исполнители и кол-во альбомов</a>
