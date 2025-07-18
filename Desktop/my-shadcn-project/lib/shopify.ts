const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

const STOREFRONT_API_URL = `https://${SHOPIFY_DOMAIN}/api/2023-10/graphql.json`

export async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string
  variables?: Record<string, any>
}): Promise<T> {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error(
      "Shopify configuration missing. Please set NEXT_PUBLIC_SHOPIFY_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN environment variables.",
    )
  }

  const response = await fetch(STOREFRONT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.statusText}`)
  }

  const data = await response.json()

  if (data.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
  }

  return data.data
}

// Get Wild Growth Hair Oil product
export const GET_PRODUCT_QUERY = `
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            availableForSale
            quantityAvailable
          }
        }
      }
      seo {
        title
        description
      }
    }
  }
`

// Create checkout for Wild Growth Hair Oil
export const CREATE_CHECKOUT_QUERY = `
  mutation CreateCheckout($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
        totalPrice {
          amount
          currencyCode
        }
        lineItems(first: 250) {
          edges {
            node {
              id
              title
              quantity
              variant {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      checkoutUserErrors {
        field
        message
      }
    }
  }
`

export interface ShopifyProduct {
  id: string
  title: string
  handle: string
  description: string
  images: Array<{
    url: string
    altText: string
  }>
  variants: Array<{
    id: string
    price: {
      amount: string
      currencyCode: string
    }
    compareAtPrice?: {
      amount: string
      currencyCode: string
    }
    availableForSale: boolean
    quantityAvailable?: number
  }>
  seo: {
    title: string
    description: string
  }
}

export async function getWildGrowthProduct(): Promise<ShopifyProduct | null> {
  try {
    const data = await shopifyFetch<{
      product: ShopifyProduct
    }>({
      query: GET_PRODUCT_QUERY,
      variables: { handle: "wild-growth-hair-oil" },
    })

    if (!data.product) {
      console.warn(
        "Wild Growth Hair Oil product not found in Shopify. Please ensure the product handle is 'wild-growth-hair-oil'",
      )
      return null
    }

    return {
      ...data.product,
      images: data.product.images.map((edge) => edge.node),
      variants: data.product.variants.map((edge) => edge.node),
    }
  } catch (error) {
    console.error("Error fetching Wild Growth Hair Oil from Shopify:", error)
    return null
  }
}

export async function createCheckout(
  lineItems: Array<{
    variantId: string
    quantity: number
  }>,
) {
  const data = await shopifyFetch<{
    checkoutCreate: {
      checkout: {
        id: string
        webUrl: string
        totalPrice: {
          amount: string
          currencyCode: string
        }
      }
      checkoutUserErrors: Array<{
        field: string[]
        message: string
      }>
    }
  }>({
    query: CREATE_CHECKOUT_QUERY,
    variables: {
      input: {
        lineItems: lineItems.map((item) => ({
          variantId: item.variantId,
          quantity: item.quantity,
        })),
      },
    },
  })

  if (data.checkoutCreate.checkoutUserErrors.length > 0) {
    throw new Error(data.checkoutCreate.checkoutUserErrors[0].message)
  }

  return data.checkoutCreate.checkout
}

// Test Shopify connection
export async function testShopifyConnection(): Promise<boolean> {
  try {
    const product = await getWildGrowthProduct()
    return product !== null
  } catch (error) {
    console.error("Shopify connection test failed:", error)
    return false
  }
}
