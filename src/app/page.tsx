import FeaturedCourses from '@/components/FeaturedCourses';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=' min-h-screen antialiased bg-black/[0.60] bg-grid-white/[0.02]'>
      <h1 className='text-2xl text-center'>YA ALI MADAD</h1>
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}
