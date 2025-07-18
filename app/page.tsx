import ResponsiveNavbar from './components/ResponsiveNavbar';
import Hero from './components/Hero';
import Experience from './components/Experience';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Firefly Background */}
      <div className="fireflies">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="firefly" />
        ))}
      </div>
      
      <ResponsiveNavbar />
      <Hero />
      <Experience />
    </div>
  );
}
