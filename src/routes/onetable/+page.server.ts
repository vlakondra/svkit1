import type { PageServerLoad } from './$types';
import type { simpleArtist } from "$lib/interfaces/artist";
import { db, artists } from '$lib/server/db';
import type { Question } from '$lib/server/schema';

export const load: PageServerLoad = (async () => {
  try {
    // Можно явно определять тип рез-та, но это не обязательно
    const result: Question[] = await db.select()
      .from(artists)
      .limit(5);

    return { result };
  } catch (error) {
    return { error }
  }
})
