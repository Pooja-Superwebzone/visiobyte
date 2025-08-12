import {
  Header,
  Hero,
  Features,
  Solutions,
  About,
  Pricing,
  Footer
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
       <Hero />
      <Features />
      <Solutions />
      <About />
      <Pricing />
       <Footer /> 
    </main>
  );
}
