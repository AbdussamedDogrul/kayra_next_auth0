import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      roles?: string[]
      isAdmin?: boolean
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    roles?: string[]
    isAdmin?: boolean
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    roles?: string[]
    isAdmin?: boolean
  }
}