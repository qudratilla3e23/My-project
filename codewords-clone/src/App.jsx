import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import LogoBar from "./components/LogoBar.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import WhyCodeWords from "./components/WhyCodeWords.jsx";
import Integrations from "./components/Integrations.jsx";
import WhatsAppAgents from "./components/WhatsAppAgents.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div id="top">
          <Header />
          <main>
            <Hero />
            <LogoBar />
            <HowItWorks />
            <WhyCodeWords />
            <Integrations />
            <WhatsAppAgents />
            <Testimonials />
            <CTA />
            <FAQ />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
