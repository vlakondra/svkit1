<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";

	let { form }: { form: ActionData } = $props();

	function reg() {
		window.location.href = "/demo/lucia/register";
	}
</script>

<h1>Login/Register</h1>
<form method="post" action="?/login" use:enhance>
	<label>
		Username
		<input name="username" class=" rounded-full px-2 py-1" />
	</label>
	<label>
		Password
		<input type="password" name="password" />
	</label>
	<button>Login</button>
	<button formaction="?/register">Register</button>
	<!-- <a href="/demo/lucia/register">Register</a> -->
	<button type="button" onclick={reg}>REG</button>
</form>
<p style="color: red">{form?.message ?? ""}</p>
<!-- {#if form?.usererr}
<p style="color: red">{form?.usererr ?? ""}</p>
{/if} -->

<!--
  This example requires updating your template:
https://tailwindcss.com/plus/ui-blocks/application-ui/forms/sign-in-forms
  ```
  <html class="h-full bg-white">
  <body class="h-full">
  ```

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img
			class="mx-auto h-10 w-auto"
			src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>
		<h2
			class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
		>
			Войти в программу
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form method="post" action="?/login" use:enhance class="space-y-4">
			<div>
				<label
					for="email"
					class="block text-sm/6 font-medium text-gray-900"
					>Логин</label
				>
				<div class="mt-2">
					<input
						type="email"
						name="email"
						id="email"
						autocomplete="email"
						required
						class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label
						for="password"
						class="block text-sm/6 font-medium text-gray-900"
						>Пароль</label
					>
					<div class="text-sm">
						<a
							href="#"
							class="font-semibold text-indigo-600 hover:text-indigo-500"
							>Forgot password?</a
						>
					</div>
				</div>
				<div class="mt-2">
					<input
						type="password"
						name="password"
						id="password"
						autocomplete="current-password"
						required
						class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
					/>
				</div>
			</div>

			<div
				class="h-4.5 text-sm/4 font-medium text-red-700"
				style="border:1px solid gray"
			>
				произошла ошибка
			</div>

			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Войти</button
				>
			</div>
		</form>

		<p class="mt-10 text-center text-sm/6 text-gray-500">
			Вопросы?
			<span class="font-semibold text-indigo-600 hover:text-indigo-500"
				>Некий дополнительный текст</span
			>
		</p>
	</div>
</div>

-->

<style>
	.error {
	}
</style>
