"use client"
import { LoginForm } from "@/components/login-form"
import { RegisterForm } from "@/components/register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeveloperBadge } from "@/components/developer-badge"
import { PersonalFooter } from "@/components/personal-footer"

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back, Anurag!</h1>
          <DeveloperBadge />
          <p className="text-slate-600 mt-2">Built by Anurag Kumar - Full Stack Developer</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Sign up for a new account to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <PersonalFooter />
      </div>
    </div>
  )
}
