import type { NextConfig } from 'next'

// 12Faktör: III. Yapılandırma - Yapıda ortam doğrulaması
function validateEnvironment() {
  const required = [
    'AUTH0_SECRET',
    'AUTH0_BASE_URL', 
    'AUTH0_ISSUER_BASE_URL',
    'AUTH0_CLIENT_ID',
    'AUTH0_CLIENT_SECRET',
    'NEXTAUTH_URL',
    'NEXTAUTH_SECRET'
  ]

  const missing = required.filter(envVar => !process.env[envVar])
  
  if (missing.length > 0 && process.env.NODE_ENV !== 'development') {
    console.error('❌Gerekli ortam değişkenleri eksik:', missing)
    process.exit(1)
  }
}

// Yapım sırasında ortamı doğrula
validateEnvironment()

const nextConfig: NextConfig = {
  // 12Faktör: XII. Yönetici süreçleri - Derleme zamanı yapılandırması
  env: {
    APP_NAME: 'Kayra Auth Sistem',
    APP_VERSION: '1.0.0',
  },
  
   eslint: {
    ignoreDuringBuilds: false,
  },

  // 12Faktör: VI. İşlemler - Durumsuz işlem yapılandırması
  serverExternalPackages: [], 
  
  // 12Faktör: XI. Günlükler - Üretimde yapılandırılmış günlük kaydı
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development',
    },
  },
}

export default nextConfig