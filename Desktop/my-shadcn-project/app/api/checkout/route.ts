import { type NextRequest, NextResponse } from "next/server"
import { createCheckout } from "@/lib/shopify"

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    // Convert cart items to Shopify line items
    const lineItems = items.map((item: any) => ({
      variantId: item.variantId || "gid://shopify/ProductVariant/default", // You'll need to map your product IDs to Shopify variant IDs
      quantity: item.quantity,
    }))

    const checkout = await createCheckout(lineItems)

    return NextResponse.json({ checkoutUrl: checkout.webUrl })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 })
  }
}
