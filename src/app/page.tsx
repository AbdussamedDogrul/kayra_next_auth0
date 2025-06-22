'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p className="text-center mt-10">Yükleniyor...</p>

  if (session) {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Hoş Geldin!</h1>
          <div className="mb-4">
            <p className="text-gray-600">Kullanıcı: {session.user?.name}</p>
            <p className="text-gray-600">Email: {session.user?.email}</p>
          </div>
          <button 
            onClick={() => signOut()}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Kayra Auth Sistemi
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Devam etmek için giriş yapın
        </p>
        <button 
          onClick={() => signIn('auth0')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Auth0 ile Giriş Yap
        </button>
      </div>
    </div>
  )
}