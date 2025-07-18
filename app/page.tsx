import ResponsiveNavbar from './components/ResponsiveNavbar';
import Hero from './components/Hero';
import Experience from './components/Experience';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <Hero />
      <Experience />
    </div>
  );
}
