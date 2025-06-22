'use client'
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { PageLayout } from "@/components/layout/PageLayout"
import { UserInfo } from "@/components/user/UserInfo"

export default function Dashboard() {
  const { user, isLoading } = useAuth()

  if (isLoading) return <LoadingSpinner />

  return (
    <PageLayout title="📊 Dashboard">
      {user && <UserInfo user={user} />}

      <div className="space-y-4">
        <Link 
          href="/profile" 
          className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded transition-colors"
        >
          Profil Sayfasına Git
        </Link>
        
        <Link 
          href="/" 
          className="block bg-gray-500 hover:bg-gray-600 text-white text-center py-2 px-4 rounded transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </PageLayout>
  )
}