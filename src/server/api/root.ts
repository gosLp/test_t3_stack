import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { videoRouter } from "./routers/video";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  video: videoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
