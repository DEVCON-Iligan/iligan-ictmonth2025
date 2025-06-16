
import { Code, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import TimelineConnector from '@/components/TimelineConnector';
import FloatingElement from '@/components/FloatingElement';
import { useRef, useState } from 'react';
import eventsData from '../data/events.json';
import { useHeaderScroll } from '@/hooks/use-header-scroll';
import { useHeaderAnimation } from '@/hooks/use-header-animation';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Responsive Header state variables
  const headerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const altHeaderRef = useRef<HTMLDivElement>(null);
  const mainHeaderRef = useRef<HTMLDivElement>(null);

  // Header Scroll and Animation Hooks
  const { headerClass, showAltHeaderContent } = useHeaderScroll(headerRef, heroRef);
  useHeaderAnimation(showAltHeaderContent, mainHeaderRef, altHeaderRef);

  const AgencyLogos = [
    { logo: "https://res.cloudinary.com/df9iielq1/image/upload/v1749215905/bagong_pilipinas_logo_dbz6ul.webp", name: "Bagong Pilipinas Logo" },
    { logo: "https://res.cloudinary.com/df9iielq1/image/upload/v1749216232/cicc_logo_d8eigg.webp", name: "Cybercrime Investigation and Coordinating Center Logo" },
    { logo: "https://res.cloudinary.com/df9iielq1/image/upload/v1749216321/dict_logo_it1nuw.webp", name: "Department of Information Communication Technology Logo" },
    { logo: "https://res.cloudinary.com/df9iielq1/image/upload/v1749216000/ntc_logo_kw2inh.webp", name: "National Telecommunications Commission Logo" },
    { logo: "https://res.cloudinary.com/df9iielq1/image/upload/v1749216448/national_privacy_commission_logo_tkbgv6.webp", name: "National Privacy Commission" }
  ]

  const events = eventsData;

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "#events" },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
      {/* Fixed Header */}
      <header ref={headerRef} className={`${headerClass} fixed top-0 left-0 right-0 z-50`}>
        <div className="p-4 flex flex-row w-full h-full">
          <div ref={altHeaderRef} className="w-screen flex flex-row items-center justify-center">
            <div className='w-full h-full flex flex-row justify-center items-center'>
              {AgencyLogos.map((logo, index) => (
                <img src={logo.logo} alt={logo.name} className="w-10 h-10 sm:w-20 sm:h-20 object-contain mx-2" key={index} />
              ))}
            </div>
          </div>
          <div ref={mainHeaderRef} className='w-screen flex flex-col'>
            <div className="flex items-center justify-between pl-3 pr-6">
              <div className="flex items-center space-x-1.5">
                <img src="https://res.cloudinary.com/df9iielq1/image/upload/v1749215547/digital_bayanihan_logo_only_ie6y3f.webp" alt="Digital Bayanihan Logo" className={`w-20 h-auto object-contain ${headerClass.includes('glass-dark') ? 'drop-shadow-[0_0_4px_rgba(255,255,255,1)]' : ''}`} />
                <img src="https://res.cloudinary.com/df9iielq1/image/upload/v1749215751/digital_bayanihan_logo_word_dmdyr5.webp" alt="Digital Bayanihan Wordmark" className={`w-36 h-auto object-contain ${headerClass.includes('glass-dark') ? 'drop-shadow-[0_0_1.5px_rgba(255,255,255,1)]' : ''}`} />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${headerClass.includes('glass-dark') ? 'text-white hover:text-[#813AEA]' : 'text-[#5E31D2]/60 hover:text-[#5E31D2]'} transition-colors duration-200 font-medium`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            <div>
              {/* Mobile Navigation */}
              {isMenuOpen && (
                <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
                  <div className="flex flex-col space-y-3">
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 mt-3">
                      Register Now
                    </Button>
                  </div>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 py-32 pt-40"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/df9iielq1/image/upload/v1749214471/BG_j9ocod.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        ref={heroRef}
      >
        <div className="container mx-auto pt-2 px-6 text-center">
          <FloatingElement>
            <img src="https://res.cloudinary.com/df9iielq1/image/upload/v1749214905/digital_bayanihan_logo_ylrgvu.webp" alt="Digital Bayanihan Logo" className="w-1/3 h-1/3 mx-auto" />
          </FloatingElement>
          <FloatingElement delay="0.2s">
            <h2 className="text-2xl md:text-4xl mt-8 font-semibold text-black animate-fade-in-up">
              NATIONAL ICT MONTH 2025
            </h2>
          </FloatingElement>
          <FloatingElement delay="0.4s">
            <div className="border-2 border-[#3F4192] rounded-full w-fit h-fit mx-auto mt-8 py-2 px-8">
              <h2 className="text-xl md:text-3xl font-semibold text-[#3F4192] animate-fade-in-up">
                WALANG IWANAN SA DIGITAL BAYANIHAN
              </h2>
            </div>
            <h2 className="text-xl md:text-3xl font-semibold text-[#3F4192] animate-fade-in-up">
              JUNE 2025
            </h2>
          </FloatingElement>

        </div>
      </section>

      {/* Events Timeline */}
      <section id="events" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">
              Event Timeline
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three days of intensive learning, networking, and innovation.
              Here's what we have planned for you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex gap-8 mb-12 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 pt-6">
                  <TimelineConnector isLast={index === events.length - 1} />
                </div>
                <div className="flex-1">
                  <EventCard {...event} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-purple">
                DECVON ICT
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Shaping the future of technology, one innovation at a time.
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Contact Us
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © 2025 DECVON ICT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
