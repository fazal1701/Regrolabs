"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react"

interface ShopifyStatus {
  connected: boolean
  productFound: boolean
  apiHealth: boolean
  lastChecked: string
}

export function ShopifyStatus() {
  const [status, setStatus] = useState<ShopifyStatus>({
    connected: false,
    productFound: false,
    apiHealth: false,
    lastChecked: "Never",
  })
  const [isChecking, setIsChecking] = useState(false)

  const checkShopifyStatus = async () => {
    setIsChecking(true)
    try {
      // In a real app, this would call your API to test Shopify connection
      const response = await fetch("/api/shopify/status")
      const data = await response.json()

      setStatus({
        connected: data.connected || false,
        productFound: data.productFound || false,
        apiHealth: data.apiHealth || false,
        lastChecked: new Date().toLocaleTimeString(),
      })
    } catch (error) {
      console.error("Failed to check Shopify status:", error)
      setStatus((prev) => ({
        ...prev,
        connected: false,
        apiHealth: false,
        lastChecked: new Date().toLocaleTimeString(),
      }))
    } finally {
      setIsChecking(false)
    }
  }

  useEffect(() => {
    checkShopifyStatus()
  }, [])

  const getStatusIcon = (isHealthy: boolean) => {
    if (isHealthy) {
      return <CheckCircle className="h-5 w-5 text-green-600" />
    }
    return <XCircle className="h-5 w-5 text-red-600" />
  }

  const getStatusBadge = (isHealthy: boolean) => {
    if (isHealthy) {
      return <Badge className="bg-green-100 text-green-800">Connected</Badge>
    }
    return <Badge className="bg-red-100 text-red-800">Disconnected</Badge>
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center space-x-2">
          <span>Shopify Integration Status</span>
          {status.connected && status.apiHealth ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-yellow-600" />
          )}
        </CardTitle>
        <Button variant="outline" size="sm" onClick={checkShopifyStatus} disabled={isChecking}>
          {isChecking ? <RefreshCw className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
          Refresh
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">API Connection</p>
              <p className="text-sm text-gray-600">Storefront API</p>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(status.connected)}
              {getStatusBadge(status.connected)}
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Product Sync</p>
              <p className="text-sm text-gray-600">Wild Growth Hair Oil</p>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(status.productFound)}
              {getStatusBadge(status.productFound)}
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">API Health</p>
              <p className="text-sm text-gray-600">Response Time</p>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(status.apiHealth)}
              {getStatusBadge(status.apiHealth)}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Last checked: {status.lastChecked}</span>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Environment Variables:</span>
              <Badge variant={process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN ? "default" : "destructive"}>SHOPIFY_DOMAIN</Badge>
              <Badge variant={process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ? "default" : "destructive"}>
                ACCESS_TOKEN
              </Badge>
            </div>
          </div>
        </div>

        {!status.connected && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800">Configuration Required</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Please configure your Shopify environment variables to enable the integration.
                </p>
                <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                  <li>• NEXT_PUBLIC_SHOPIFY_DOMAIN</li>
                  <li>• NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN</li>
                  <li>• SHOPIFY_WEBHOOK_SECRET</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
