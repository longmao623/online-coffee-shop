import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { products, categoryLabels } from "@/data/products"
import { ProductCard } from "@/components/ui/ProductCard"
import { ProductDetail } from "@/components/ui/ProductDetail"
import type { Product } from "@/types"

type Category = "all" | "coffee" | "dessert" | "beans"

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory
      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.enName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
            02 / Menu
          </span>
          <h1 className="mt-2 font-display text-display-lg font-semibold text-ink">
            菜单
          </h1>
          <p className="mt-4 max-w-xl font-sans text-ink-light">
            精选咖啡、甜点与咖啡豆。所有商品均为示例数据，支持分类筛选和搜索。
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(categoryLabels) as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-coffee text-cream"
                    : "bg-paper text-ink-light hover:bg-coffee/10"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-light" />
            <input
              type="text"
              placeholder="搜索咖啡、甜点..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-coffee/20 bg-paper py-2 pl-10 pr-4 font-sans text-sm text-ink placeholder:text-ink-light/50 focus:border-coffee focus:outline-none md:w-72"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-20 text-center">
            <p className="font-display text-xl text-ink-light">没有找到匹配的商品</p>
            <p className="mt-2 font-sans text-sm text-ink-light/70">
              试试其他关键词或分类
            </p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}
