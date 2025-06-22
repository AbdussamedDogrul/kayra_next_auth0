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
    <div className="min-h-screen bg-gray-100 py-10">
      <div className={`${widthClasses[maxWidth]} mx-auto`}>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </div>
  )
}