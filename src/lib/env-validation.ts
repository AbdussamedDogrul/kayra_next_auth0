export function validateRequiredEnvVars(): void {
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
  
  if (missing.length > 0) {
    console.error('❌ Gerekli ortam değişkenleri eksik:', missing)
    throw new Error(`Eksik ortam değişkenleri: ${missing.join(', ')}`)
  }
  
  console.log('✅ Gerekli tüm ortam değişkenleri ayarlandı')
}