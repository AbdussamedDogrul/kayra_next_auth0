'use client'
import { useState } from 'react'
import { getAdminEmailsList } from '@/lib/adminEmails'

export function AdminEmailList() {
  const [showList, setShowList] = useState(false)
  const adminEmails = getAdminEmailsList()

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-blue-900 flex items-center">
          📧 Admin E-mail Listesi
        </h3>
        <button
          onClick={() => setShowList(!showList)}
          className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
        >
          {showList ? 'Gizle' : 'Hepsini Göster'}
        </button>
      </div>
      
      <div className="text-xs text-blue-700 mb-2">
        Admin yetkisi olan e-mail adresleri:
      </div>

      {showList ? (
        <div className="space-y-2">
          {adminEmails.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {adminEmails.map((email, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium"
                >
                  {email}
                </span>
              ))}
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded p-2">
              <p className="text-red-600 text-xs">
                ⚠️ Admin e-mail listesi boş! .env.local dosyasında ADMIN_EMAILS değişkenini kontrol edin.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-1">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">admin@kayra.com</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">manager@kayra.com</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">asamedgrl@gmail.com</span>
        </div>
      )}
    </div>
  )
}