import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";
//Не забыть проверить ->OK
import {index} from 'drizzle-orm/sqlite-core'
import {int,uniqueIndex,text} from 'drizzle-orm/sqlite-core'

export const arts = t.sqliteTable("artists", {
    ArtistId: t.int().primaryKey({ autoIncrement: true }),
    Name: t.text("Name"),
}, (t) => [
    index('ArtIdx').on(t.ArtistId)
]);