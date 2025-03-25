//import type { RequestHandler } from './$types';
import * as auth from '$lib/server/auth';
import { fail } from '@sveltejs/kit';
import { redirect, type RequestHandler,type RequestEvent } from '@sveltejs/kit';


export const POST: RequestHandler = async (event:RequestEvent) => {
 
    if (!event.locals.session)  {
        redirect(302,'/')
    }

    await auth.invalidateSession(event.locals.session.id);
    auth.deleteSessionTokenCookie(event);

    return redirect(302, '/demo/lucia/login');
}