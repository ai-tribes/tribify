import { Metadata } from "next"
import { HeroSection } from './components/HeroSection'

export const metadata: Metadata = {
  title: "tribify.ai",
  description: "Building the future of AI tribes",
}

export default function Home() {
  return <HeroSection />
}
