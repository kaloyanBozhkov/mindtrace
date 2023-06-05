import { getAuth, withClerkMiddleware } from '@clerk/nextjs/server'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Set the paths that don't require the user to be signed in
const publicPaths = ['/sign-in*', '/sign-up*', '/landing'],
  isPublic = (path: string) =>
    publicPaths.find((x) => path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))),
  authedEndpoints = ['/api/trpc*'],
  isAuthedEndpoint = (path: string) =>
    authedEndpoints.find((x) => path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))))

export default withClerkMiddleware((request: NextRequest) => {
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next()
  }
  // if the user is not signed in redirect them to the sign in page.
  const { userId } = getAuth(request)

  // prevent trpc calls if user not authed
  if (isAuthedEndpoint(request.nextUrl.pathname) && !userId) {
    return NextResponse.json(
      {
        message: 'UNAUTHORIZED',
      },
      { status: 400 }
    )
  }

  if (!userId) {
    // redirect the users to sign in
    const signInUrl = new URL('/sign-in', request.url)
    signInUrl.searchParams.set('redirect_url', request.url)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
})

// Stop Middleware running on static files and public folder
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     * - trpc and api endpoints
     */
    '/((?!static|.*\\..*|_next|favicon.ico).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
}
