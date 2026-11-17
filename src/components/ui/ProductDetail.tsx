import { X, Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import type { Product } from "@/types"

interface ProductDetailProps {
  product: Product
  onClose: () => void
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addItem } = useCart()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-paper shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-ink-light transition-colors hover:bg-cream"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="aspect-square bg-coffee/5 flex items-center justify-center">
            <span className="text-8xl">
              {product.category === "coffee" && "☕"}
              {product.category === "dessert" && "🍰"}
              {product.category === "beans" && "🫘"}
            </span>
          </div>
          <div className="p-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
              {product.category === "coffee" && "Coffee"}
              {product.category === "dessert" && "Dessert"}
              {product.category === "beans" && "Beans"}
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              {product.name}
            </h2>
            <p className="font-mono text-sm text-ink-light">{product.enName}</p>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-light/80">
              {product.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-light"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="font-mono text-2xl font-medium text-terracotta">
                ¥{product.price}
              </span>
              <button
                onClick={() => {
                  addItem(product)
                  onClose()
                }}
                className="flex items-center gap-2 rounded-lg bg-coffee px-6 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-coffee-light"
              >
                <Plus className="h-4 w-4" />
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
