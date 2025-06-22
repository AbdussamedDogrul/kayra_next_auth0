'use client'
import { signIn, signOut } from "next-auth/react"
import { useAuth } from "@/hooks/useAuth"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { AuthButton } from "@/components/ui/AuthButton"
import { NavigationCard } from "@/components/ui/NavigationCard"
import { PageLayout } from "@/components/layout/PageLayout"
import { UserInfo } from "@/components/user/UserInfo"
import { useEffect, useState } from "react"

export default function Home() {
  const { user, isLoading, isAuthenticated } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || isLoading) return <LoadingSpinner />

  if (isAuthenticated && user) {
    return (
      <PageLayout title="🏠 Kayra Auth Sistemi - Ana Sayfa" maxWidth="lg">
        <div className="text-center mb-6">
          <p className="text-lg text-gray-600 mb-4">Hoş Geldin!</p>
          <UserInfo user={user} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <NavigationCard
            href="/dashboard"
            icon="📊"
            title="Dashboard"
            description="Genel bakış ve istatistikler"
            color="blue"
          />
          
          <NavigationCard
            href="/profile"
            icon="👤"
            title="Profil"
            description="Kişisel bilgiler ve ayarlar"
            color="green"
          />
        </div>

        <div className="text-center">
          <AuthButton 
            onClick={() => signOut()}
            variant="danger"
            className="px-6"
          >
            🚪 Çıkış Yap
          </AuthButton>
        </div>
      </PageLayout>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          🔐 Kayra Auth Sistemi
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Güvenli giriş sistemi ile devam edin
        </p>
        <AuthButton 
          onClick={() => signIn('auth0')}
          className="w-full py-3"
        >
          🚀 Auth0 ile Giriş Yap
        </AuthButton>
      </div>
    </div>
  )
}