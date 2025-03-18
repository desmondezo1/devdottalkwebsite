// app/page.tsx
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import UpcomingEvents from './components/UpcomingEvents';
import PastEvents from './components/PastEvents';
import Support from './components/Support';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <UpcomingEvents />
      <PastEvents />
      <Support />
    </main>
  );
}
