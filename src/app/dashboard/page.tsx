'use client'
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function Dashboard() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            📊 Dashboard
          </h1>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Kullanıcı Bilgileri:</h2>
            <p className="text-gray-600">İsim: {session?.user?.name}</p>
            <p className="text-gray-600">Email: {session?.user?.email}</p>
          </div>

          <div className="space-y-4">
            <Link 
              href="/profile" 
              className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded"
            >
              Profil Sayfasına Git
            </Link>
            
            <Link 
              href="/" 
              className="block bg-gray-500 hover:bg-gray-600 text-white text-center py-2 px-4 rounded"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}