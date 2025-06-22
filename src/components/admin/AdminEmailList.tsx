// src/components/admin/AdminEmailList.tsx
'use client'
import { useState } from 'react'
import { getAdminEmailsList } from '@/lib/adminEmails'

export function AdminEmailList() {
  const [showList, setShowList] = useState(false)
  const adminEmails = getAdminEmailsList()

  return (
    <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">📧 Admin E-mail Listesi</h3>
        <button
          onClick={() => setShowList(!showList)}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          {showList ? 'Gizle' : 'Göster'}
        </button>
      </div>
      
      {showList && (
        <div className="space-y-1">
          <p className="text-sm text-gray-600 mb-2">
            Aşağıdaki e-mail adresleri ile giriş yapanlar admin rolüne sahip olur:
          </p>
          {adminEmails.length > 0 ? (
            <ul className="text-sm space-y-1">
              {adminEmails.map((email, index) => (
                <li key={index} className="bg-white px-2 py-1 text-[#155DFC] rounded border">
                   {email}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-600 text-sm">
              ⚠️ Admin e-mail listesi boş! .env.local dosyasında ADMIN_EMAILS değişkenini kontrol edin.
            </p>
          )}
        </div>
      )}
    </div>
  )
}