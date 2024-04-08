import ConsentBanner from "@modules/layout/components/consent-banner"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Metadata } from "next"

import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"
const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
        <ConsentBanner />
      </body>
      {ANALYTICS_ID ? <GoogleAnalytics gaId={ANALYTICS_ID} /> : undefined}
    </html>
  )
}
