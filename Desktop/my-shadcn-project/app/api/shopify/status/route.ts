import { NextResponse } from "next/server"
import { testShopifyConnection, getWildGrowthProduct } from "@/lib/shopify"

export async function GET() {
  try {
    const startTime = Date.now()

    // Test basic connection
    const connected = await testShopifyConnection()

    // Test product availability
    let productFound = false
    if (connected) {
      const product = await getWildGrowthProduct()
      productFound = product !== null
    }

    const responseTime = Date.now() - startTime
    const apiHealth = connected && responseTime < 5000 // Consider healthy if response < 5s

    return NextResponse.json({
      connected,
      productFound,
      apiHealth,
      responseTime,
      timestamp: new Date().toISOString(),
      environment: {
        domain: !!process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
        accessToken: !!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        webhookSecret: !!process.env.SHOPIFY_WEBHOOK_SECRET,
      },
    })
  } catch (error) {
    console.error("Shopify status check failed:", error)
    return NextResponse.json({
      connected: false,
      productFound: false,
      apiHealth: false,
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    })
  }
}
