import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SelectedWork } from '@/components/selected-work'
import { AboutPreview } from '@/components/about-preview'
import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <AboutPreview />
        <Experience />
        <Footer />
      </main>
    </>
  )
}
