import ResponsiveNavbar from './components/ResponsiveNavbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <Hero />
    </div>
  );
}
