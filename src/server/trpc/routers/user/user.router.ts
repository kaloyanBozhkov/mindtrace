import { createTRPCRouter } from '@/server/trpc/trpc'

import { create } from './create'

export const userRouter = createTRPCRouter({
  create,
})
