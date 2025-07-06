"use client"

import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function PersonalFooter() {
  return (
    <footer className="mt-8 text-center text-sm text-slate-500">
      <div className="flex items-center justify-center space-x-1 mb-2">
        <span>Crafted with</span>
        <Heart className="w-4 h-4 text-red-500 fill-current" />
        <span>by Anurag Kumar</span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <a
          href="https://github.com/ANURAGKUMARSHARMA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-700 transition-colors"
          title="Anurag Kumar's GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/anurag-kumar-sharma/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-700 transition-colors"
          title="Anurag Kumar's LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:sharmaanurag46741@gmail.com"
          className="hover:text-slate-700 transition-colors"
          title="Email Anurag Kumar"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
      <p className="mt-2 text-xs">Full Stack Developer | AWS Enthusiast | Problem Solver</p>
      <p className="text-xs text-slate-400 mt-1">sharmaanurag46741@gmail.com</p>
    </footer>
  )
}
