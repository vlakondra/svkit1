import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { db, albums, tracks } from '$lib/server/db'
import type { Album, Tracks } from '$lib/server/schema';
import { eq, like } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';

export const load = (async (event) => {
    return { something: 3.14 };
}) satisfies PageServerLoad;


export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const albTitle = data.get('album');

        const albFinded: Album[] = await db.select()
            .from(albums)
            .where(like(albums.title, `%${albTitle}%`))
            .limit(1);

            if (albFinded.length==0) {
                return fail(400, { notfinded: true });
            }

            const albTracks: Tracks[] = await db.select()
                .from(tracks)
                .where(eq(tracks.albumId, albFinded[0].albumId))
        
        let finded = { ...albFinded[0], tracks: albTracks };

        return { finded, success: true };
    }
} satisfies Actions;

// !!!  import { sql } from "drizzle-orm";

// db.select()
//    .from(table)
//    .where(sql`your_db_specific_function(${table.column}, 'search_term')`)
