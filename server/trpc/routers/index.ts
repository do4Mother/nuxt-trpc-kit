import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { names } from "~/server/db/schema";

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }))
    .query(({ input }) => {
      return { greeting: `hello ${input?.text ?? "world"}` };
    }),
  addNames: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { db } = ctx;

      const result = await db.insert(names).values({ name: input.name });

      return { id: result.lastInsertRowid };
    }),
  getNames: publicProcedure.input(z.object({})).query(async ({ ctx }) => {
    const { db } = ctx;

    const result = await db.select().from(names);

    return { names: result };
  }),
});

// export type definition of API export type AppRouter = typeof appRouter
export type AppRouter = typeof appRouter;
