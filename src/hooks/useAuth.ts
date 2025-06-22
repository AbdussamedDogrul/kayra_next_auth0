'use client'
import { useSession } from "next-auth/react"

export interface AuthUser {
  name?: string | null
  email?: string | null
  image?: string | null
  roles?: string[]
}

export interface AuthReturn {
  user: AuthUser | null
  isLoading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
  hasRole: (role: string) => boolean
}

export function useAuth(): AuthReturn {
  const { data: session, status } = useSession()

  // Güvenli tip dönüşümü
  const user: AuthUser | null = session?.user ? {
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
    roles: (session.user as any).roles || []
  } : null

  const roles = user?.roles || []

  return {
    user,
    isLoading: status === "loading",
    isAuthenticated: !!session,
    isAdmin: roles.includes('admin'),
    hasRole: (role: string) => roles.includes(role),
  }
}