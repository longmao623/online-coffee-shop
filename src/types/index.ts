export interface Product {
  id: string
  name: string
  enName: string
  description: string
  price: number
  category: "coffee" | "dessert" | "beans"
  tags: string[]
  image?: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface Order {
  items: CartItem[]
  address: {
    name: string
    phone: string
    detail: string
  }
  note?: string
  total: number
}
