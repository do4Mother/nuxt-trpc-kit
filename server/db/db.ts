import Database from "better-sqlite3";
import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import { once } from "lodash-es";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database("sqlite.db");
export const db: BetterSQLite3Database = drizzle(sqlite);

/**
 * Migrate the database on startup. prevent call multiple times.
 */
once(() => {
  migrate(db, { migrationsFolder: "drizzle" });
})();
