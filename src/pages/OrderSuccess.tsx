import { motion } from "framer-motion"
import { CheckCircle, Coffee } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function OrderSuccess() {
  const location = useLocation()
  const orderId = (location.state as { orderId?: string })?.orderId || "SB00000000"

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-full bg-leaf/10 p-6"
      >
        <CheckCircle className="h-12 w-12 text-leaf" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 font-display text-3xl font-semibold text-ink"
      >
        下单成功
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3 font-sans text-ink-light"
      >
        订单号：<span className="font-mono text-coffee">{orderId}</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-2 max-w-sm font-sans text-sm text-ink-light/80"
      >
        我们会尽快为您准备咖啡，预计 30 分钟内送达。
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          to="/menu"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-coffee px-6 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-coffee-light"
        >
          <Coffee className="h-4 w-4" />
          继续购物
        </Link>
      </motion.div>
    </div>
  )
}
