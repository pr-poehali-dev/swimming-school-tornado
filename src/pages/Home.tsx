import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Programs } from '@/components/Programs';
import { Benefits } from '@/components/Benefits';
import { Schedule } from '@/components/Schedule';
import { Trainers } from '@/components/Trainers';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Programs />
      <Benefits />
      <Schedule />
      <Trainers />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
