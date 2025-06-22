export function LoadingSpinner() {
  return (
    <div className="text-center mt-10">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <p className="mt-2 text-gray-600">Yükleniyor...</p>
    </div>
  )
}