'use client'
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export default function Profile() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            👤 Profil Sayfası
          </h1>
          
          <div className="mb-6 space-y-4">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">Kişisel Bilgiler</h2>
              <p className="text-gray-600"><strong>İsim:</strong> {session?.user?.name}</p>
              <p className="text-gray-600"><strong>Email:</strong> {session?.user?.email}</p>
              {session?.user?.image && (
                <div className="mt-2">
                  <strong>Profil Fotoğrafı:</strong>
                  <img 
                    src={session.user.image} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full mt-2"
                  />
                </div>
              )}
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">Hesap Durumu</h2>
              <p className="text-green-600">✅ Aktif</p>
              <p className="text-gray-600">Giriş Yöntemi: Auth0</p>
            </div>
          </div>

          <div className="space-y-3">
            <Link 
              href="/dashboard" 
              className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded"
            >
              Dashboard'a Git
            </Link>
            
            <Link 
              href="/" 
              className="block bg-gray-500 hover:bg-gray-600 text-white text-center py-2 px-4 rounded"
            >
              Ana Sayfaya Dön
            </Link>
            
            <button 
              onClick={() => signOut()}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}