// src/app/page.tsx - E-mail bilgileri ile güncellenmiş
'use client'
import { signIn, signOut } from "next-auth/react"
import { useAuth } from "@/hooks/useAuth"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { AuthButton } from "@/components/ui/AuthButton"
import { NavigationCard } from "@/components/ui/NavigationCard"
import { PageLayout } from "@/components/layout/PageLayout"
import { UserInfo } from "@/components/user/UserInfo"
import { AdminEmailList } from "@/components/admin/AdminEmailList"
import { useEffect, useState } from "react"

export default function Home() {
  const { user, isLoading, isAuthenticated, isAdmin } = useAuth()
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
          
          {/* Rol bilgisini vurgulayarak göster */}
          <div className={`mt-4 p-3 rounded-lg ${isAdmin ? 'bg-purple-100 border border-purple-300' : 'bg-blue-100 border border-blue-300'}`}>
            <p className={`text-sm font-semibold ${isAdmin ? 'text-purple-700' : 'text-blue-700'}`}>
              {isAdmin ? '👑 Admin Kullanıcı' : '👤 Normal Kullanıcı'}
            </p>
            <p className={`text-xs ${isAdmin ? 'text-purple-600' : 'text-blue-600'}`}>
              Roller: {user.roles?.join(', ') || 'user'}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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

          {/* Admin linkini sadece admin e-mail'lere göster */}
          {isAdmin && (
            <NavigationCard
              href="/admin"
              icon="⚙️"
              title="Admin Panel"
              description="Sistem yönetimi ve ayarlar"
              color="purple"
            />
          )}
        </div>

        {/* Admin kullanıcılar için admin listesi */}
        {isAdmin && (
          <div className="mb-6">
            <AdminEmailList />
          </div>
        )}

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
        <p className="text-gray-600 mb-4 text-center">
          Güvenli giriş sistemi ile devam edin
        </p>
        
        {/* Giriş yapmadan önce admin listesini göster */}
        <div className="mb-6">
          <AdminEmailList />
        </div>
        
        <AuthButton 
          onClick={() => signIn('auth0')}
          className="w-full py-3"
        >
          🚀 Auth0 ile Giriş Yap
        </AuthButton>
        
        <p className="text-xs text-gray-500 mt-3 text-center">
          💡 Admin e-mail'lerinden biriyle giriş yapın veya normal kullanıcı olarak devam edin
        </p>
      </div>
    </div>
  )
}