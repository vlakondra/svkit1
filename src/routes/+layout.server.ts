import type { LayoutServerLoad } from './$types';
import * as auth from '$lib/server/auth';


///
export const load: LayoutServerLoad = async (event) => {
    // if (!event.locals.user) {
    //     return redirect(302, '/demo/lucia/login');
    // }
    return { user: event.locals.user };
};



