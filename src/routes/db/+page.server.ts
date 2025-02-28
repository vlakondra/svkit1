import { arts } from '$lib/server/schema';
import { ne } from "drizzle-orm"
//import { Name } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { drizzle } from 'drizzle-orm/libsql';


const db = drizzle({
  connection: {
    url: 'file:src/lib/server/db/chinook.db'
  }
});

export const load = (async () => {
  try {
    
    const result = await db.all('select * from Artists');
    const result2 = await db.select()
      .from(arts)
      .where(ne(arts.Name, 'AC/DC'))
      .limit(3)

    console.log(result2)
    return { result2 };
  } catch (error) {
    console.error(error);
  }


}) satisfies PageServerLoad;