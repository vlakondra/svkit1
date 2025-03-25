<script lang="ts">
    import "../app.css";
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";

    import Profile from "$lib/components/profile.svelte";

    let { data, children }: { data: LayoutData; children: Snippet } = $props();

    async function logout() {
        const response = await fetch("/logout", {
            method: "POST",
        });
        console.log("resp", response);
    }
</script>

<div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                    />
                </svg>
            </div>
            <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
            <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                <li><a href="/">Homepage</a></li>
                <li><a href="findalbum">Альбомы</a></li>
                <li><a>About</a></li>
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <!-- svelte-ignore a11y_missing_attribute -->
        <a class="btn btn-ghost text-xl">daisyUI</a>
        <!-- svelte-ignore a11y_missing_attribute -->
        <a class="btn btn-ghost text-xl">daisyUI-2</a>
    </div>
    <div class="navbar-end">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button class="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </button>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button class="btn btn-ghost btn-circle">
            <div class="indicator">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
                <span class="badge badge-xs badge-primary indicator-item"
                ></span>
            </div>
        </button>
    </div>
</div>

{#if data.user}
    <button style="cursor:pointer" onclick={logout}>LOGOUT</button>
{/if}
<div>
    <Profile user={data.user} />
</div>
<div class="@container px-4">
    <div class="flex flex-col @max-lg:flex-col">
        {@render children()}
    </div>
</div>
