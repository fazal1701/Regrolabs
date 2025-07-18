import { type NextRequest, NextResponse } from "next/server"

// In a real application, you would connect to your database here
// For now, we'll just log the events

interface AnalyticsEvent {
  event_type: string
  product_id?: string
  product_name?: string
  quantity?: number
  price?: number
  user_session: string
  page_path?: string
}

export async function POST(request: NextRequest) {
  try {
    const event: AnalyticsEvent = await request.json()

    // Validate the event data
    if (!event.event_type || !event.user_session) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Log the event (in production, save to database)
    console.log("Analytics Event Received:", {
      ...event,
      timestamp: new Date().toISOString(),
      ip_address: request.ip || "unknown",
      user_agent: request.headers.get("user-agent") || "unknown",
    })

    // Here you would typically save to your database:
    /*
    switch (event.event_type) {
      case 'product_view':
        await db.query(`
          INSERT INTO product_views (product_id, product_name, user_session, ip_address, user_agent, created_at)
          VALUES ($1, $2, $3, $4, $5, NOW())
        `, [event.product_id, event.product_name, event.user_session, request.ip, request.headers.get("user-agent")])
        break
        
      case 'cart_add':
        await db.query(`
          INSERT INTO cart_events (event_type, product_id, product_name, quantity, price, user_session, created_at)
          VALUES ('add', $1, $2, $3, $4, $5, NOW())
        `, [event.product_id, event.product_name, event.quantity, event.price, event.user_session])
        break
        
      case 'checkout_start':
        await db.query(`
          INSERT INTO checkout_events (checkout_id, event_type, total_amount, items_count, user_session, created_at)
          VALUES ($1, 'started', $2, $3, $4, NOW())
        `, [`checkout_${Date.now()}`, event.price, event.quantity, event.user_session])
        break
        
      case 'newsletter_signup':
        await db.query(`
          INSERT INTO newsletter_subscriptions (email, source, subscribed_at)
          VALUES ($1, $2, NOW())
          ON CONFLICT (email) DO NOTHING
        `, ['anonymous@example.com', event.product_name]) // You'd get real email from the form
        break
    }
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Analytics API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Return analytics summary (in production, query from database)
    const mockAnalytics = {
      total_views: 8,
      total_cart_adds: 5,
      total_checkouts: 3,
      conversion_rate: 25.0,
      top_products: [
        { product_id: "hair-oil", views: 5, cart_adds: 3 },
        { product_id: "light-oil", views: 3, cart_adds: 2 },
      ],
    }

    return NextResponse.json(mockAnalytics)
  } catch (error) {
    console.error("Analytics GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
