import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ExperienceCards from '../components/home/ExperienceCards'
import GalleryGrid from '../components/home/GalleryGrid'
import TestimonialSlider from '../components/home/TestimonialSlider'
import CTABanner from '../components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceCards />
      <GalleryGrid />
      <TestimonialSlider />
      <CTABanner />
    </>
  )
}
