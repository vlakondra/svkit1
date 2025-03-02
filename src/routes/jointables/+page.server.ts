import type { PageServerLoad } from './$types';
import { db, artists, albums } from '$lib/server/db'
import { eq, asc, desc } from 'drizzle-orm';

export const load = (async () => {
    try {
        const result = await db.select({
            artName: artists.name,
            albumId: albums.albumId,
            albumTitle: albums.title
        })
            .from(artists)
            .innerJoin(albums, eq(artists.artistId, albums.artistId))
            .orderBy(asc(artists.name))
        console.log(result)
        return { result }
    } catch (error) {
        console.error(error);
        return { result: [] }
    }

    return {};
}) satisfies PageServerLoad;