<script lang='ts'>
let {user} = $props()
// import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
// import type { Actions, PageServerLoad } from './$types';
</script>
<h1>Prof
{JSON.stringify(user)}

</h1>