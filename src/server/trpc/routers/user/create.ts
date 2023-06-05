import { protectedProcedure } from '@/server/trpc/trpc'

export const create = protectedProcedure.mutation(async ({ ctx: { prisma, auth } }) => {
  const existing = await prisma.user.findUnique({
    where: {
      id: auth.userId,
    },
  })

  if (existing) return { status: 'already-exists' }

  await prisma.user.create({
    data: { id: auth.userId },
  })

  return { status: 'success' }
})
