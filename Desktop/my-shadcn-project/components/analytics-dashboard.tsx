"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, ShoppingCart, Eye, Mail, ArrowUpRight } from "lucide-react"

// Mock analytics data based on our seeded data
const analyticsData = {
  overview: {
    totalViews: 8,
    totalCartAdds: 5,
    totalCheckouts: 3,
    completedOrders: 2,
    conversionRate: 25.0,
    averageOrderValue: 24.99,
    newsletterSignups: 5,
  },
  productViews: [{ name: "Hair Oil", views: 8, percentage: 100 }],
  dailyActivity: [
    { date: "7 days ago", views: 1, carts: 1, orders: 1 },
    { date: "6 days ago", views: 1, carts: 1, orders: 1 },
    { date: "5 days ago", views: 1, carts: 1, orders: 0 },
    { date: "4 days ago", views: 1, carts: 2, orders: 1 },
    { date: "3 days ago", views: 1, carts: 1, orders: 0 },
    { date: "2 days ago", views: 1, carts: 0, orders: 0 },
    { date: "1 day ago", views: 1, carts: 0, orders: 0 },
    { date: "Today", views: 1, carts: 0, orders: 0 },
  ],
  checkoutFunnel: [
    { stage: "Product Views", count: 8, percentage: 100 },
    { stage: "Cart Adds", count: 5, percentage: 62.5 },
    { stage: "Checkout Started", count: 3, percentage: 37.5 },
    { stage: "Orders Completed", count: 2, percentage: 25 },
  ],
  newsletterSources: [
    { source: "Homepage", count: 3, color: "#10b981" },
    { source: "Checkout", count: 1, color: "#3b82f6" },
    { source: "Popup", count: 1, color: "#f59e0b" },
  ],
}

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.totalViews}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              Last 7 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cart Adds</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.totalCartAdds}</div>
            <p className="text-xs text-muted-foreground">
              {((analyticsData.overview.totalCartAdds / analyticsData.overview.totalViews) * 100).toFixed(1)}% of views
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.conversionRate}%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              Above industry avg
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${analyticsData.overview.averageOrderValue}</div>
            <p className="text-xs text-muted-foreground">Per transaction</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="funnel">Conversion Funnel</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Daily Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analyticsData.dailyActivity.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="text-sm font-medium">{day.date}</span>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-green-600">{day.views} views</span>
                        <span className="text-blue-600">{day.carts} carts</span>
                        <span className="text-orange-600">{day.orders} orders</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Wild Growth Hair Oil</p>
                      <p className="text-sm text-gray-600">Premium hair care</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{analyticsData.productViews[0].views} views</p>
                      <Badge className="bg-green-100 text-green-800">100%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="funnel" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.checkoutFunnel.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{stage.stage}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{stage.count}</span>
                        <Badge variant="secondary">{stage.percentage}%</Badge>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${stage.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Total Revenue</span>
                    <span className="font-semibold">$49.98</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Average Order Value</span>
                    <span className="font-semibold">${analyticsData.overview.averageOrderValue}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Conversion Rate</span>
                    <Badge className="bg-green-100 text-green-800">{analyticsData.overview.conversionRate}%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Direct</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Social Media</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Search</span>
                    <span className="font-semibold">25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
