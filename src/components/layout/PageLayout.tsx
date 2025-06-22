interface PageLayoutProps {
  children: React.ReactNode
  title: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

export function PageLayout({ 
  children, 
  title, 
  maxWidth = 'lg' 
}: PageLayoutProps) {
  const widthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl", 
    lg: "max-w-6xl",
    xl: "max-w-7xl"
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className={`${widthClasses[maxWidth]} mx-auto flex items-center justify-between`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Kayra Auth</h1>
              <p className="text-xs text-gray-500">Güvenli Kimlik Sistemi</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Ana Sayfa
            </a>
            <a href="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Dashboard
            </a>
            <a href="/profile" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Profil
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className={`${widthClasses[maxWidth]} mx-auto px-6 py-8`}>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </div>
  )
}