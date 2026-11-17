import { Link, useLocation } from "react-router-dom"
import { ShoppingBag, Coffee } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { siteConfig } from "@/config/site"

export function Navbar() {
  const location = useLocation()
  const { totalCount } = useCart()

  return (
    <nav className="sticky top-0 z-50 border-b border-coffee/10 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-coffee" />
          <span className="font-display text-xl font-semibold text-ink">
            {siteConfig.name}
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-wider text-ink-light sm:inline">
            {siteConfig.enName}
          </span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`link-underline hidden text-sm font-medium md:inline-block ${
                location.pathname === item.href ? "text-coffee" : "text-ink-light"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-6 w-6 text-ink-light transition-colors hover:text-coffee" />
            {totalCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 animate-bounce-soft items-center justify-center rounded-full bg-terracotta text-xs font-medium text-white">
                {totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
