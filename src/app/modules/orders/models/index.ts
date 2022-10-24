import { Product } from '../../products/models'

export type OrderItem = {
  id: number
  orderId?: string

  productId: string
  product: Product

  quantity: number
  price: number
}

export type OrderItemCreate = Omit<OrderItem, 'id' | 'orderId'>

export type Order = {
  id: string

  customerId: string
  customerAddress: string

  createdAt: Date

  subtotal: number
  total: number
  discount: number

  items: OrderItem[]
}

export type OrderCreate = Omit<Order, 'id' | 'createdAt' | 'items' | 'subtotal' | 'total' | 'discount'> & {
  items: OrderItemCreate[]
}
