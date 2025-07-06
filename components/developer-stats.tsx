"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Trophy, Target, Rocket, Star } from "lucide-react"

export function DeveloperStats() {
  const stats = [
    {
      title: "Projects Built",
      value: "47+",
      icon: Rocket,
      color: "text-blue-600",
    },
    {
      title: "Problems Solved",
      value: "1,247",
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "Coffee Consumed",
      value: "∞",
      icon: Trophy,
      color: "text-amber-600",
    },
    {
      title: "GitHub Stars",
      value: "156",
      icon: Star,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center">
          <CardHeader className="pb-2">
            <stat.icon className={`h-6 w-6 mx-auto ${stat.color}`} />
          </CardHeader>
          <CardContent className="pt-0">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <p className="text-xs text-slate-600">{stat.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
