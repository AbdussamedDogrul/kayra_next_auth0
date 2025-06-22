import { AuthUser } from "@/hooks/useAuth"

interface UserInfoProps {
  user: AuthUser
  showImage?: boolean
}

export function UserInfo({ user, showImage = false }: UserInfoProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Kullanıcı Bilgileri:</h2>
      <p className="text-gray-600"><strong>İsim:</strong> {user.name}</p>
      <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
      
      {showImage && user.image && (
        <div className="mt-2">
          <strong>Profil Fotoğrafı:</strong>
          {/* <img 
            src={user.image} 
            alt="Profile" 
            className="w-16 h-16 rounded-full mt-2"
          /> */}
        </div>
      )}
    </div>
  )
}