'use client'
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { AuthButton } from "@/components/ui/AuthButton"
import { PageLayout } from "@/components/layout/PageLayout"

export default function Profile() {
  const { user, isLoading } = useAuth()

  if (isLoading) return <LoadingSpinner />

  return (
    <PageLayout title="👤 Profil Sayfası" maxWidth="md">
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-4">Kişisel Bilgiler</h2>
          <div className="space-y-2">
            <p className="text-gray-600"><strong>İsim:</strong> {user?.name}</p>
            <p className="text-gray-600"><strong>Email:</strong> {user?.email}</p>
            {user?.image && (
              <div className="mt-4">
            
                {/* <strong>Profil Fotoğrafı:</strong> */}
                {/* <img 
                  src={user.image} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full border-2 border-gray-200"
                /> */}
              </div>
            )}
          </div>
        </div>
        
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-4">Hesap Durumu</h2>
          <div className="space-y-1">
            <p className="text-green-600">✅ Aktif</p>
            <p className="text-gray-600">Giriş Yöntemi: Auth0</p>
          </div>
        </div>

        <div className="space-y-3">
          <Link 
            href="/dashboard" 
            className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded transition-colors"
          >
            Dashboarda Git
          </Link>
          
          <Link 
            href="/" 
            className="block bg-gray-500 hover:bg-gray-600 text-white text-center py-2 px-4 rounded transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          
          <AuthButton 
            onClick={() => signOut()}
            variant="danger"
            className="w-full"
          >
            Çıkış Yap
          </AuthButton>
        </div>
      </div>
    </PageLayout>
  )
}