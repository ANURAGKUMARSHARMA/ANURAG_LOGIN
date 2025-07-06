"use client"

import { Badge } from "@/components/ui/badge"
import { Code, Coffee, Zap } from "lucide-react"

export function DeveloperBadge() {
  return (
    <div className="flex items-center justify-center space-x-2 mb-6">
      <Badge variant="outline" className="px-3 py-1">
        <Code className="w-3 h-3 mr-1" />
        Built by Anurag
      </Badge>
      <Badge variant="outline" className="px-3 py-1">
        <Coffee className="w-3 h-3 mr-1" />
        Fueled by Coffee
      </Badge>
      <Badge variant="outline" className="px-3 py-1">
        <Zap className="w-3 h-3 mr-1" />
        AWS Powered
      </Badge>
    </div>
  )
}
