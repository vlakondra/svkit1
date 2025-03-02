import type { PageServerLoad } from './$types';
import type { Artist } from "$lib/interfaces/artist";
import { db, artists,albums} from '$lib/server/db'
import { eq, asc, desc, } from 'drizzle-orm';

import type { ArtWithAlbums, } from '$lib/server/schema';
//  ArtWithAlbums[]

export const load = (async (): Promise<{ artAlbums: ArtWithAlbums }> => {
    try {
        
        const result = await db.select({
            artName: artists.name,
            albumId: albums.albumId,
            albumTitle: albums.title
        })
            .from(artists)
            .innerJoin(albums, eq(artists.artistId, albums.artistId))
            .orderBy(asc(artists.name))
            .limit(3)

         // создаем структуру Исполнитель-Альбомы
        const artAlbums = result.reduce((acc, row) => {
            const { artName, albumId, albumTitle } = row;

            // Ищем запись в accumulator`e
            let artist = acc.find(a => a.artName === artName);
            if (!artist) {
                artist = { artName, albums: [] };
                console.log('art',artist)
                acc.push(artist);
            }
            // добавим альбомы к исполнителю
            artist.albums.push({ albumTitle, albumId });
            return acc;
        }, [] as ArtWithAlbums[] );
        return {artAlbums };

    } catch (error) {
        console.error(error);
        return { ArtWithAlbums }
    }

}) satisfies PageServerLoad;

