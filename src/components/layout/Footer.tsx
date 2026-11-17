import { MapPin, Phone, Clock } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t border-coffee/10 bg-ink px-6 py-12 text-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-semibold">{siteConfig.name}</h3>
            <p className="mt-2 font-sans text-sm text-cream/60">{siteConfig.slogan}</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-cream/80">
              <MapPin className="h-4 w-4 text-terracotta" />
              <span>{siteConfig.contact.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-cream/80">
              <Phone className="h-4 w-4 text-terracotta" />
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-cream/80">
              <Clock className="h-4 w-4 text-terracotta" />
              <span>{siteConfig.contact.hours}</span>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-cream/40">
              © {new Date().getFullYear()} {siteConfig.name}. Built with care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
