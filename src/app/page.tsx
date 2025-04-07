'use client'
import HeroSection from '@/components/hero-section'
import Features from '@/components/features-3'
import FeaturesSection from '@/components/features-9'
import StatsSection from '@/components/stats-3'
import TeamSection from '@/components/team'
import FooterSection from '@/components/footer'
import { useAnimations } from '@/hooks/useAnimations'

export default function Home() {
  useAnimations();

  return (
    <>
      <HeroSection />
      <div className="fade-in-section">
        <Features />
      </div>
      <div className="fade-in-section">
        <FeaturesSection />
      </div>
      <div className="fade-in-section">
        <StatsSection />
      </div>
      <div className="fade-in-section">
        <TeamSection />
      </div>
      <FooterSection />
    </>
  )
}
