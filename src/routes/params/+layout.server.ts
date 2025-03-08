import type { LayoutServerLoad } from './$types';
import { db, artists,albums } from '$lib/server/db';
import { eq, count } from 'drizzle-orm';

export const load:LayoutServerLoad = (async () => {
    try {
        console.log('+layout.server.ts')

        const artAlbCount = await db
          .select({
            artistName: artists.name,
            artistId: artists.artistId,
            albumCount: count(albums.albumId)
          })
          .from(artists)
          .leftJoin(albums, eq(artists.artistId, albums.artistId))
          .groupBy(artists.name);

        return { artAlbCount };
    } catch (error) {
        console.log(error)
    }
});