<script>
    import { base } from "$app/paths";

    let c = $state(0)
  </script>

  <div>
    <button onclick={()=>c++}>Клики {c}</button>
  </div>

  <a href="{base}/about">About</a>


<h1>Welcome to SvelteKit!!</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
