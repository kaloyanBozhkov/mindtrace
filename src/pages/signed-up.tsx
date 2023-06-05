import { getAuth } from '@clerk/nextjs/server'

import { type GetServerSideProps } from 'next'

import { trpcCaller } from '@/utils/trpc.helper'

/** This page is a special redirect for after Clerk sign up  */
const SignedUpPage = () => null

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { userId } = getAuth(req)

  if (userId) {
    const trpc = trpcCaller({ req, res })

    try {
      await trpc.user.create()
    } catch (trpcError) {
      console.warn(
        'Tried creating user but failed, maybe clerk is failing to provide us with newly created userId?'
      )
    }
  }

  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  }
}

export default SignedUpPage
