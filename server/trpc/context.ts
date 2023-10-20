import { inferAsyncReturnType } from "@trpc/server";
import { H3Event } from "h3";
import { db } from "../db/db";

export async function createContext(event: H3Event) {
  return {
    db,
  };
}
export type Context = inferAsyncReturnType<typeof createContext>;
