"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LogOut, User, Shield, Database } from "lucide-react"
import { DeveloperStats } from "@/components/developer-stats"

interface UserData {
  username: string
  email: string
  createdAt: string
}

export default function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (!token) {
      router.push("/")
      return
    }

    // Simulate fetching user data
    setTimeout(() => {
      setUserData({
        username: "anurag_kumar",
        email: "sharmaanurag46741@gmail.com",
        createdAt: new Date().toISOString(),
      })
      setIsLoading(false)
    }, 1000)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 mx-auto"></div>
          <p className="mt-2 text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-slate-900">Anurag's Developer Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile</CardTitle>
              <User className="h-4 w-4 ml-auto text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>{userData?.username.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{userData?.username}</p>
                  <p className="text-xs text-slate-600">{userData?.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security</CardTitle>
              <Shield className="h-4 w-4 ml-auto text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Secure</div>
              <p className="text-xs text-slate-600">Password encrypted with bcrypt</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Database</CardTitle>
              <Database className="h-4 w-4 ml-auto text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">DynamoDB</div>
              <p className="text-xs text-slate-600">AWS NoSQL database integration</p>
            </CardContent>
          </Card>
        </div>

        <DeveloperStats />

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Welcome Back, Anurag Kumar!</CardTitle>
            <CardDescription>Your personal developer authentication system is working perfectly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-800">✅ Anurag's Auth System Active</h3>
                <p className="text-sm text-green-700 mt-1">
                  Your custom-built authentication system is running smoothly, Anurag!
                </p>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800">🔒 Developer-Grade Security</h3>
                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                  <li>• Military-grade password encryption</li>
                  <li>• JWT tokens with custom expiration</li>
                  <li>• RESTful API architecture</li>
                  <li>• Built with love by Anurag Kumar</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="font-semibold text-purple-800">⚡ Anurag's AWS Stack</h3>
                <ul className="text-sm text-purple-700 mt-1 space-y-1">
                  <li>• Custom API Gateway configuration</li>
                  <li>• Serverless Lambda functions</li>
                  <li>• DynamoDB with optimized queries</li>
                  <li>• Production-ready architecture</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
