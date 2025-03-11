import type { PageServerLoad } from './$types';

import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';

// Define outside the load function so the adapter can be cached
const schema = z.object({
    name: z.string().default('Это я'),
    email: z.string().default('qq@mail.qq')
});


export const load = async () => {
    const form = await superValidate(zod(schema));

    // Always return { form } in load functions
    return { form };
};


export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(schema));
        console.log('form', form);

        if (!form.valid) {
            // Return { form } and things will just work.
            return fail(400, { form });
        }

        console.log('email:  ', form.data.email)

        // Return the form with a status message
        let rm = message(form, 'Form posted successfully!');
        console.log(rm)
        return rm
    }
};








