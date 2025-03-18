import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/lib/server/schema.ts",
  out: "./drizzle",
  dbCredentials: { url: "src/lib/server/db/chinook.db" }
});


// export default {
//     schema: "./src/schema.ts", // Путь для сохранения схем
//     dialect:'sqlite',
//     out: "./drizzle",          // Директория для миграций
//     driver: "libsql",
//     dbCredentials: {
//       url: "url:src/lib/server/db/chinook.db", // Путь к вашей SQLite базе Chinook
//     },
//   } satisfies Config;
