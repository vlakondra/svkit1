import type { PageServerLoad } from './$types';
import { db, albums } from '$lib/server/db';
import type { Album } from '$lib/server/schema';
import { eq, asc, desc } from 'drizzle-orm';

export const load:PageServerLoad = (async ({params}) => {
    console.log('page.server.ts',  params.par)
    //возврат альбомов по Id исполнителя
    try {
<<<<<<< Updated upstream
        const artAlbums: Album[] = await db.select()
=======
        const artalbums: Album[] = await db.select()
>>>>>>> Stashed changes
            .from(albums)
            .orderBy(asc(albums.title))
            .where(eq(albums.artistId, parseInt(params.par)))

<<<<<<< Updated upstream
        return { artAlbums };
    } catch (error) {
        console.log(error)
    }

}) 
=======
        return { artalbums };
    } catch (error) {
        console.log(error)
    }
}) satisfies PageServerLoad;
>>>>>>> Stashed changes
