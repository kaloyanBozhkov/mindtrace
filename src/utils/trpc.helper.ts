import { type CreateNextContextOptions } from '@trpc/server/adapters/next'
import { createTRPCContext } from 'server/trpc/context'
import { appRouter } from 'server/trpc/routers/root'

import { type GetServerSidePropsContext } from 'next'

/* used for SSG calls e.g. inside getServersideProps */
export const trpcCaller = (
  ctx: GetServerSidePropsContext | Pick<GetServerSidePropsContext, 'req' | 'res'>
) => {
  const context = createTRPCContext(ctx as CreateNextContextOptions)
  return appRouter.createCaller(context)
}
