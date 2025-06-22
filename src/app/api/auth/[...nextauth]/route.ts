import NextAuth, { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Auth0Provider from 'next-auth/providers/auth0'
import { getUserRole } from '@/lib/adminEmails'

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }: { token: JWT; account: any; profile?: any }): Promise<JWT> {
      if (account && profile) {
        token.accessToken = account.access_token
        
        const userEmail = profile.email || token.email || ''
        const roles = getUserRole(userEmail)
        
        token.roles = roles
        token.isAdmin = roles.includes('admin')
        
        console.log(`🔍 Kullanıcı: ${userEmail}`)
        console.log(`📋 Atanan roller: ${roles.join(', ')}`)
      }
      return token
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (session.user) {
        (session.user as any).roles = token.roles as string[]
        (session.user as any).isAdmin = token.isAdmin as boolean
        
        console.log(`✅ Session oluşturuldu: ${session.user.email}`)
        console.log(`🎭 Roller: ${(session.user as any).roles.join(', ')}`)
      }
      return session
    },
  },
  events: {
    async signIn({ user }: { user: User }) {
      const userEmail = user.email || ''
      const roles = getUserRole(userEmail)
      console.log(`🚪 Giriş yapıldı: ${userEmail}`)
      console.log(`📧 Admin mi?: ${roles.includes('admin')}`)
    }
  }
})

export { handler as GET, handler as POST }