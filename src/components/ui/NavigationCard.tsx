import Link from "next/link"

interface NavigationCardProps {
  href: string
  icon: string
  title: string
  description: string
  color: 'blue' | 'green' | 'purple' | 'yellow'
}

export function NavigationCard({ 
  href, 
  icon, 
  title, 
  description, 
  color 
}: NavigationCardProps) {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600", 
    purple: "bg-purple-500 hover:bg-purple-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600"
  }

  return (
    <Link 
      href={href}
      className={`${colorClasses[color]} text-white text-center py-4 px-6 rounded-lg transition-colors block`}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm opacity-90">{description}</div>
    </Link>
  )
}