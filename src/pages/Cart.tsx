import { motion } from "framer-motion"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Coffee } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "@/context/CartContext"

export function Cart() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
        <div className="rounded-full bg-coffee/5 p-6">
          <ShoppingBag className="h-10 w-10 text-coffee" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
          购物车是空的
        </h2>
        <p className="mt-2 font-sans text-ink-light">
          去菜单挑一杯喜欢的咖啡吧。
        </p>
        <Link
          to="/menu"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-coffee px-6 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-coffee-light"
        >
          <Coffee className="h-4 w-4" />
          浏览菜单
        </Link>
      </div>
    )
  }

  return (
    <div className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
            03 / Cart
          </span>
          <h1 className="mt-2 font-display text-display-lg font-semibold text-ink">
            购物车
          </h1>
          <p className="mt-4 font-sans text-ink-light">
            已选商品 {items.reduce((sum, item) => sum + item.quantity, 0)} 件
          </p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-4 rounded-xl bg-paper p-4 shadow-sm"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-coffee/5 text-2xl">
                {item.category === "coffee" && "☕"}
                {item.category === "dessert" && "🍰"}
                {item.category === "beans" && "🫘"}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-semibold text-ink">
                  {item.name}
                </h3>
                <p className="font-mono text-xs text-ink-light">{item.enName}</p>
                <p className="mt-1 font-mono text-sm text-terracotta">
                  ¥{item.price}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-coffee/20 text-ink-light transition-colors hover:bg-coffee/5"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-4 text-center font-mono text-sm text-ink">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-coffee/20 text-ink-light transition-colors hover:bg-coffee/5"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="hidden min-w-[80px] text-right md:block">
                <p className="font-mono text-base font-medium text-ink">
                  ¥{item.price * item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-ink-light transition-colors hover:text-terracotta"
                aria-label="删除商品"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 rounded-xl bg-paper p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans text-sm text-ink-light">合计</p>
              <p className="font-display text-3xl font-semibold text-ink">
                ¥{totalPrice}
              </p>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="inline-flex items-center gap-2 rounded-lg bg-coffee px-8 py-4 font-sans text-base font-medium text-cream transition-colors hover:bg-coffee-light"
            >
              去结算
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
