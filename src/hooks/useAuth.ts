'use client'
import { useSession } from "next-auth/react"

export interface AuthUser {
  name?: string | null
  email?: string | null
  image?: string | null
}

export interface AuthReturn {
  user: AuthUser | null
  isLoading: boolean
  isAuthenticated: boolean
}

export function useAuth(): AuthReturn {
  const { data: session, status } = useSession()

  return {
    user: session?.user || null,
    isLoading: status === "loading",
    isAuthenticated: !!session,
  }
}