import { getAuth } from '@clerk/nextjs/server'

import { type NextApiRequest, type NextApiResponse } from 'next'

import { trpcCaller } from 'utils/trpc.helper'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = getAuth(req)

  if (userId) {
    const trpc = trpcCaller({ req, res })

    try {
      await trpc.user.create()
    } catch (trpcError) {
      console.warn(
        'Tried creating user but failed, maybe clerk is failing to provide us with the newly created userId?'
      )
    }
  }

  res.redirect('/')
}

export default handler
