import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default withAuth(
  function middleware(req: NextRequest & { nextauth: { token: any } }) {
    const token = req.nextauth.token
    const { pathname } = req.nextUrl
    
    console.log("Token:", token)
    console.log("Path:", pathname)
    console.log("User roles:", token?.roles)
    
    // Admin sayfalarına sadece admin rolü erişebilir
    if (pathname.startsWith('/admin')) {
      const roles = (token?.roles as string[]) || []
      if (!roles.includes('admin')) {
        // Unauthorized sayfasına yönlendir
        return NextResponse.redirect(new URL('/unauthorized', req.url))
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/admin/:path*'
  ]
}