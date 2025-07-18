"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

interface AnalyticsEvent {
  event_type: string
  product_id?: string
  product_name?: string
  quantity?: number
  price?: number
  user_session: string
  page_path?: string
}

// Generate a simple session ID
function getSessionId(): string {
  if (typeof window === "undefined") return "server"

  let sessionId = sessionStorage.getItem("analytics_session")
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem("analytics_session", sessionId)
  }
  return sessionId
}

// Track analytics events
async function trackEvent(event: AnalyticsEvent) {
  try {
    // In a real app, this would send to your analytics API
    console.log("Analytics Event:", event)
  } catch (error) {
    console.error("Analytics tracking error:", error)
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      // Track page views
      trackEvent({
        event_type: "page_view",
        user_session: getSessionId(),
        page_path: pathname,
      })
    }
  }, [pathname])

  return null // This component doesn't render anything
}

// Hook for tracking custom events
export function useAnalytics() {
  const trackProductView = (productId: string, productName: string) => {
    trackEvent({
      event_type: "product_view",
      product_id: productId,
      product_name: productName,
      user_session: getSessionId(),
    })
  }

  const trackCartAdd = (productId: string, productName: string, quantity: number, price: number) => {
    trackEvent({
      event_type: "cart_add",
      product_id: productId,
      product_name: productName,
      quantity,
      price,
      user_session: getSessionId(),
    })
  }

  const trackCheckoutStart = (totalAmount: number, itemsCount: number) => {
    trackEvent({
      event_type: "checkout_start",
      price: totalAmount,
      quantity: itemsCount,
      user_session: getSessionId(),
    })
  }

  const trackNewsletterSignup = (source: string) => {
    trackEvent({
      event_type: "newsletter_signup",
      product_name: source, // Using product_name field for source
      user_session: getSessionId(),
    })
  }

  return {
    trackProductView,
    trackCartAdd,
    trackCheckoutStart,
    trackNewsletterSignup,
  }
}
