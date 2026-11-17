import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
  onClick?: () => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(product)
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl bg-paper shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] bg-coffee/5 flex items-center justify-center overflow-hidden">
        <span className="text-6xl transition-transform duration-500 group-hover:scale-110">
          {product.category === "coffee" && "☕"}
          {product.category === "dessert" && "🍰"}
          {product.category === "beans" && "🫘"}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">{product.name}</h3>
            <p className="font-mono text-xs text-ink-light">{product.enName}</p>
          </div>
          <span className="font-mono text-base font-medium text-terracotta">
            ¥{product.price}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 font-sans text-sm text-ink-light/80">
          {product.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-cream px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-light"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-coffee py-2.5 font-sans text-sm font-medium text-cream transition-colors hover:bg-coffee-light"
        >
          <Plus className="h-4 w-4" />
          加入购物车
        </button>
      </div>
    </motion.div>
  )
}
