import { getAuth } from '@clerk/nextjs/server'
import { type inferAsyncReturnType } from '@trpc/server'
import { type CreateNextContextOptions } from '@trpc/server/adapters/next'

import { prisma } from '@/server/prisma'

/** Context creator for testing purposes */
const createInnerTRPCContext = ({ req }: CreateNextContextOptions) => {
  return {
    prisma,
    auth: getAuth(req),
  }
}

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = (opts: CreateNextContextOptions) => {
  return createInnerTRPCContext(opts)
}

export type TRPCContext = inferAsyncReturnType<typeof createTRPCContext>
