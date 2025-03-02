import { drizzle } from 'drizzle-orm/libsql';
import { artists } from '$lib/server/schema';

const db = drizzle({
    connection: {
        url: 'file:src/lib/server/db/chinook.db'
    }
});

export { db, artists };
