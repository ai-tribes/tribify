import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | tribify.ai",
  description: "Get in touch with the tribify.ai team",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 