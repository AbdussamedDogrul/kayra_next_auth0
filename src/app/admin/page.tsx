'use client'
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { PageLayout } from "@/components/layout/PageLayout"
import { AdminEmailList } from "@/components/admin/AdminEmailList"

export default function AdminPage() {
  const { user, isLoading, isAdmin } = useAuth()

  if (isLoading) return <LoadingSpinner />

  if (!isAdmin) {
    return (
      <PageLayout title="⛔ Erişim Reddedildi">
        <div className="text-center space-y-4">
          <p className="text-red-600 text-lg">Bu sayfaya erişim yetkiniz yok.</p>
          <p className="text-gray-600">Sadece admin e-mail listesindeki kullanıcılar bu sayfayı görüntüleyebilir.</p>
          
          {/* Admin listesini göster */}
          <div className="max-w-md mx-auto">
            <AdminEmailList />
          </div>
          
          <Link 
            href="/" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout title="⚙️ Admin Paneli">
      <div className="space-y-6">
        <div className="bg-green-100 border border-green-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            ✅ Admin Erişimi Onaylandı
          </h2>
          <p className="text-green-700">
            E-mail adresiniz ({user?.email}) admin listesinde bulunuyor.
          </p>
        </div>
        
        <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-3">👤 Kullanıcı Bilgileri:</h3>
          <div className="space-y-1 text-blue-700">
            <p><strong>İsim:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Roller:</strong> {user?.roles?.join(', ')}</p>
          </div>
        </div>

        {/* Admin e-mail listesini göster */}
        <AdminEmailList />

        <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">🛠️ Admin İşlemleri</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors">
              Kullanıcı Yönetimi
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors">
              Sistem Ayarları
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors">
              Admin Listesi Güncelle
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors">
              Raporlar
            </button>
          </div>
        </div>

        <div className="flex space-x-3">
          <Link 
            href="/dashboard" 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
          >
            Dashboard
          </Link>
          
          <Link 
            href="/" 
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
          >
            Ana Sayfa
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}