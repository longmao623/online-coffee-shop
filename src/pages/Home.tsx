import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site"
import { products, featuredIds } from "@/data/products"
import { ProductCard } from "@/components/ui/ProductCard"
import { useState } from "react"
import { ProductDetail } from "@/components/ui/ProductDetail"
import type { Product } from "@/types"

export function Home() {
  const featuredProducts = products.filter((p) => featuredIds.includes(p.id))
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div>
      {/* Hero */}
      <section className="px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
                Since 2026
              </span>
              <h1 className="mt-4 font-display text-display-xl font-semibold text-ink">
                {siteConfig.name}
              </h1>
              <p className="mt-6 font-sans text-xl font-light leading-relaxed text-ink-light">
                {siteConfig.slogan}
              </p>
              <p className="mt-4 font-sans text-base text-ink-light/80">
                {siteConfig.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 rounded-lg bg-coffee px-6 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-coffee-light"
                >
                  浏览菜单
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/cart"
                  className="inline-flex items-center gap-2 rounded-lg border border-coffee px-6 py-3 font-sans text-sm font-medium text-coffee transition-colors hover:bg-coffee/5"
                >
                  查看购物车
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-coffee/20 via-coffee-light/20 to-terracotta/20 p-8">
                <div className="flex h-full flex-col items-center justify-center rounded-xl bg-paper/80 p-8 text-center shadow-sm">
                  <span className="font-display text-6xl text-coffee">☕</span>
                  <p className="mt-4 font-display text-2xl text-ink">今日推荐</p>
                  <p className="mt-2 font-mono text-sm text-ink-light">埃塞俄比亚 · 耶加雪菲</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="border-t border-coffee/10 bg-paper px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
                Featured
              </span>
              <h2 className="mt-2 font-display text-display-lg font-semibold text-ink">
                今日推荐
              </h2>
            </div>
            <Link
              to="/menu"
              className="hidden items-center gap-1 font-sans text-sm font-medium text-coffee hover:underline sm:flex"
            >
              查看全部
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}
