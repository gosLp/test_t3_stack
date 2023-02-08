import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  hellotest: publicProcedure
    .input(z.object({mehtod: z.string()}))
    .query(({input})=>{
      return{
        prat_test: `this is really cool ${input.mehtod}`,
      }
  }),

  mathroute: publicProcedure
    .input(z.object({ valuation: z.number()}))
    .query(({input})=>{
        return{
            company_value: `WOW the company is now worth ${input.valuation}`,

        }
    }),

});
