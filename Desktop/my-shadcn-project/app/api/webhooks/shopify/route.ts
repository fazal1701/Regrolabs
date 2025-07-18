import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

const SHOPIFY_WEBHOOK_SECRET = process.env.SHOPIFY_WEBHOOK_SECRET

function verifyShopifyWebhook(body: string, signature: string): boolean {
  if (!SHOPIFY_WEBHOOK_SECRET) return false

  const hmac = crypto.createHmac("sha256", SHOPIFY_WEBHOOK_SECRET)
  hmac.update(body, "utf8")
  const hash = hmac.digest("base64")

  return hash === signature
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("x-shopify-hmac-sha256")

    if (!signature || !verifyShopifyWebhook(body, signature)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = JSON.parse(body)
    const topic = request.headers.get("x-shopify-topic")

    switch (topic) {
      case "orders/create":
        // Handle new order
        console.log("New order created:", data.id)
        // Add your order processing logic here
        break

      case "orders/updated":
        // Handle order updates
        console.log("Order updated:", data.id)
        break

      case "products/update":
        // Handle product updates
        console.log("Product updated:", data.id)
        break

      case "customers/create":
        // Handle new customer
        console.log("New customer:", data.id)
        break

      default:
        console.log("Unhandled webhook topic:", topic)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
