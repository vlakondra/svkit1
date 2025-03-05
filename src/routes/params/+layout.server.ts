import type { LayoutServerData } from './[par]/$types';
import { db, artists } from '$lib/server/db';
import type { Question } from '$lib/server/schema';


interface Num {
    val: string | undefined;
}

export const load = (async () => {
    try {
        const result: Question[] = await db.select()
            .from(artists)
            .limit(25);

        return { result };
    } catch (error) {
        console.log(error)
    }
});