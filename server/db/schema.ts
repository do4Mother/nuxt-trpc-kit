import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const names = sqliteTable("names", {
  id: integer("id").primaryKey(),
  name: text("name"),
});
