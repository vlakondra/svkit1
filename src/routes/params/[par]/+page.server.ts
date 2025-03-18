import type { PageServerLoad } from './$types';
import { db, albums } from '$lib/server/db';
import type { Album } from '$lib/server/schema';
import { eq, asc, desc } from 'drizzle-orm';

export const load: PageServerLoad = (async ({ params }) => {
    console.log('page.server.ts', params.par)
    //возврат альбомов по Id исполнителя
    try {
        const artalbums: Album[] = await db.select()
            .from(albums)
            .orderBy(asc(albums.title))
            .where(eq(albums.artistId, parseInt(params.par)))

        return { artalbums };
    } catch (error) {
        console.log(error)
    }

}) 
