import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Coffee, MapPin, User, Phone, FileText } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "@/context/CartContext"

interface FormErrors {
  name?: string
  phone?: string
  address?: string
}

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
        <div className="rounded-full bg-coffee/5 p-6">
          <Coffee className="h-10 w-10 text-coffee" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
          购物车是空的
        </h2>
        <p className="mt-2 font-sans text-ink-light">
          请先选择商品，再来下单。
        </p>
        <Link
          to="/menu"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-coffee px-6 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-coffee-light"
        >
          浏览菜单
        </Link>
      </div>
    )
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = "请输入收货人姓名"
    if (!form.phone.trim()) {
      newErrors.phone = "请输入手机号"
    } else if (!/^1\d{10}$/.test(form.phone.trim())) {
      newErrors.phone = "请输入正确的 11 位手机号"
    }
    if (!form.address.trim()) newErrors.address = "请输入详细地址"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    clearCart()
    const orderId = "SB" + Date.now().toString().slice(-8)
    navigate("/order-success", { state: { orderId } })
  }

  return (
    <div className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
            04 / Checkout
          </span>
          <h1 className="mt-2 font-display text-display-lg font-semibold text-ink">
            下单
          </h1>
        </motion.div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-10 lg:grid-cols-5">
          {/* Address Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl bg-paper p-6 shadow-sm md:p-8">
              <h2 className="font-display text-xl font-semibold text-ink">
                收货信息
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="flex items-center gap-2 font-sans text-sm font-medium text-ink">
                    <User className="h-4 w-4 text-coffee" />
                    姓名
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="请输入收货人姓名"
                    className={`mt-2 w-full rounded-lg border bg-cream px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-light/50 focus:border-coffee focus:outline-none ${
                      errors.name ? "border-terracotta" : "border-coffee/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 font-sans text-xs text-terracotta">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2 font-sans text-sm font-medium text-ink">
                    <Phone className="h-4 w-4 text-coffee" />
                    手机号
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="请输入 11 位手机号"
                    className={`mt-2 w-full rounded-lg border bg-cream px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-light/50 focus:border-coffee focus:outline-none ${
                      errors.phone ? "border-terracotta" : "border-coffee/20"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 font-sans text-xs text-terracotta">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2 font-sans text-sm font-medium text-ink">
                    <MapPin className="h-4 w-4 text-coffee" />
                    详细地址
                  </label>
                  <textarea
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="请输入街道、门牌号等详细地址"
                    rows={3}
                    className={`mt-2 w-full rounded-lg border bg-cream px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-light/50 focus:border-coffee focus:outline-none ${
                      errors.address ? "border-terracotta" : "border-coffee/20"
                    }`}
                  />
                  {errors.address && (
                    <p className="mt-1 font-sans text-xs text-terracotta">{errors.address}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2 font-sans text-sm font-medium text-ink">
                    <FileText className="h-4 w-4 text-coffee" />
                    备注（选填）
                  </label>
                  <input
                    type="text"
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    placeholder="例如：少糖、打包带走"
                    className="mt-2 w-full rounded-lg border border-coffee/20 bg-cream px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-light/50 focus:border-coffee focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl bg-paper p-6 shadow-sm md:p-8">
              <h2 className="font-display text-xl font-semibold text-ink">
                订单摘要
              </h2>

              <div className="mt-6 space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-coffee/10 pb-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">
                        {item.category === "coffee" && "☕"}
                        {item.category === "dessert" && "🍰"}
                        {item.category === "beans" && "🫘"}
                      </span>
                      <div>
                        <p className="font-sans text-sm font-medium text-ink">
                          {item.name}
                        </p>
                        <p className="font-mono text-xs text-ink-light">
                          × {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-mono text-sm text-ink">
                      ¥{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-coffee/20 pt-4">
                <p className="font-sans text-base font-medium text-ink">合计</p>
                <p className="font-display text-3xl font-semibold text-terracotta">
                  ¥{totalPrice}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-coffee py-4 font-sans text-base font-medium text-cream transition-colors hover:bg-coffee-light disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>提交中...</span>
                ) : (
                  <>
                    提交订单
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  )
}
