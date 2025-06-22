'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p className="text-center mt-10">Yükleniyor...</p>

  if (session) {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              🏠 Kayra Auth Sistemi - Ana Sayfa
            </h1>
            
            <div className="mb-6 text-center">
              <p className="text-lg text-gray-600 mb-2">Hoş Geldin!</p>
              <p className="text-gray-600"><strong>Kullanıcı:</strong> {session.user?.name}</p>
              <p className="text-gray-600"><strong>Email:</strong> {session.user?.email}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Link 
                href="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white text-center py-4 px-6 rounded-lg transition-colors"
              >
                <div className="text-2xl mb-2">📊</div>
                <div className="font-semibold">Dashboard</div>
                <div className="text-sm opacity-90">Genel bakış ve istatistikler</div>
              </Link>
              
              <Link 
                href="/profile"
                className="bg-green-500 hover:bg-green-600 text-white text-center py-4 px-6 rounded-lg transition-colors"
              >
                <div className="text-2xl mb-2">👤</div>
                <div className="font-semibold">Profil</div>
                <div className="text-sm opacity-90">Kişisel bilgiler ve ayarlar</div>
              </Link>
            </div>

            <div className="text-center">
              <button 
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
              >
                🚪 Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </div>
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
        <button 
          onClick={() => signIn('auth0')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          🚀 Auth0 ile Giriş Yap
        </button>
      </div>
    </div>
  )
}