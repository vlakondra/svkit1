import type { PageServerLoad } from './$types'
import type { Artist } from "$lib/interfaces/artist";
import { db, artists } from '$lib/server/db';

export const load = (async (): Promise<{ result: Artist[] }> => {
  try {
    const result = await db.select()
      .from(artists)
      .limit(5)
    console.log(result)
    return { result };
  } catch (error) {
    console.error(error);
    return { result: [] };
  }

}) satisfies PageServerLoad;