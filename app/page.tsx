export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Welcome to My Moltbot
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            A Next.js application built with TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}