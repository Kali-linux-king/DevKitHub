import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [daysLeft, setDaysLeft] = useState(Math.floor(Math.random() * 14) + 3) // Random 3-16 days

  // Simulate progress animation
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setProgress(65), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      // Here you would typically call an API to subscribe the email
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="relative inline-block mb-4">
          <Icons.construction className="mx-auto h-12 w-12 text-blue-500" />
          <span className="absolute -top-2 -right-2">
            <span className="relative flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-500 text-white text-xs items-center justify-center">
                {daysLeft}
              </span>
            </span>
          </span>
        </div>

        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          Tool Coming Soon!
        </h2>
        <p className="text-muted-foreground mb-6">
          We're working hard to launch this tool in {daysLeft} days. Get early access!
        </p>
        
        {/* Progress with tooltip */}
        <div className="mb-6 group relative">
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <span>Development Progress</span>
            <span>{progress}%</span>
          </div>
          <div 
            className="w-full bg-gray-200 rounded-full h-2.5"
            title={`${progress}% complete`}
          >
            <div 
              className={cn(
                "bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out",
                progress === 0 ? 'w-0' : `w-[${progress}%]`
              )}
            ></div>
          </div>
          <span className="absolute -bottom-6 right-0 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            Estimated launch: {new Date(Date.now() + daysLeft * 24 * 60 * 60 * 1000).toLocaleDateString()}
          </span>
        </div>

        {isSubscribed ? (
          <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-300 p-3 rounded-lg mb-4">
            <div className="flex items-center justify-center gap-2">
              <Icons.check className="h-5 w-5" />
              <span>You're on the list! We'll notify you when this tool launches.</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <Button type="submit" className="whitespace-nowrap">
                <Icons.bell className="mr-2 h-4 w-4" />
                Notify Me
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Join {Math.floor(Math.random() * 500) + 100}+ others waiting for this tool
            </p>
          </form>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Button variant="outline" asChild>
            <a href="/tools" className="flex items-center justify-center gap-2">
              <Icons.arrowLeft className="h-4 w-4" />
              Browse Available Tools
            </a>
          </Button>
        </div>
      </div>

      {/* Social proof section */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Icons.user className="h-4 w-4" />  // Changed to singular 'user'
          <span>500+ developers waiting</span>
        </div>
        <div className="flex items-center gap-2">
          <Icons.clock className="h-4 w-4" />
          <span>Launching in {daysLeft} days</span>
        </div>
      </div>
    </div>
  )
}