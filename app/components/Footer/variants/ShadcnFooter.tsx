'use client'

import Link from 'next/link'
import { Button } from '../../../../components/ui/button'

export const ShadcnFooter = () => {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-2">
            <Link href="/" className="text-xl font-bold">
              tribify.ai
            </Link>
            <p className="text-sm text-muted-foreground">
              Building the future of AI tribes
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/features">Features</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/pricing">Pricing</Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/contact">Contact</Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/privacy">Privacy</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/terms">Terms</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} tribify.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 