
import { Calendar, Code, Users, Zap, Trophy, Coffee, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import TimelineConnector from '@/components/TimelineConnector';
import FloatingElement from '@/components/FloatingElement';
import { useEffect, useRef, useState } from 'react';
import BG from '../images/BG.png';
import DBL from '../images/Digital Bayanihan Logo.png';
import DBLogo from '../images/Digital Bayanihan Logo only.png';
import DBWordmark from '../images/Digital Bayanihan Wordmark only.png';
import BagongPilipinas from '../images/BagongPilipinas Logo.png';
import CICC from '../images/CICC Logo.png';
import DICT from '../images/DICT Logo.png';
import NTC from '../images/NTC Logo.png';
import Something from '../images/Something Logo.png';
import eventsData from '../data/events.json';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Responsive Header state variables
  const [headerClass, setHeaderClass] = useState('');
  const [showAltHeaderContent, setShowAltHeaderContent] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const heroTop = heroRef.current?.offsetTop || 0;

      if (scrollY === 0) {
        setHeaderClass(''); // No Glass and border default view
      } else if (scrollY > 0 && scrollY < heroTop + heroHeight - headerHeight) {
        setHeaderClass('glass backdrop-blur-lg border-b border-white/10'); // Light Glass effect on Hero view
      } else {
        setHeaderClass('glass-dark backdrop-blur-lg border-b border-white/10'); // Dark Glass effect on other views
      }

      // Change content when scrolled down
      const contentChangeThreshold = heroTop + (heroHeight / 4) - headerHeight;
      if (scrollY > contentChangeThreshold) {
        setShowAltHeaderContent(false);
      } else {
        setShowAltHeaderContent(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const AgencyLogos = [
    { logo: BagongPilipinas, name: "Bagong Pilipinas" },
    { logo: CICC, name: "CICC" },
    { logo: DICT, name: "DICT" },
    { logo: NTC, name: "NTC" },
    { logo: Something, name: "Something" }
  ]
  
  const events = eventsData;

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "#events" },
    { name: "Speakers", href: "#speakers" },
    { name: "Register", href: "#register" },
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
        <div className="container mx-auto px-6 py-4">
          {showAltHeaderContent ? (
            <div className="mx-auto gap-y-4">
              <div className="flex items-center justify-center mx-auto pt-1.5 gap-x-24">
                {AgencyLogos.map((logo, index) => (
                  <img src={logo.logo} alt={logo.name} className="w-20 h-auto object-contain" key={index} />
                ))}
              </div>
              <h2 className="mx-auto text-2xl font-bold text-center text-[#224590]">
                Presents
              </h2>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <img src={DBLogo} alt="Digital Bayanihan Logo" className="w-20 h-auto object-contain" />
                  <img src={DBWordmark} alt="Digital Bayanihan Wordmark" className="w-36 h-auto object-contain" />
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
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                    Register Now
                  </Button>
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
            </>
          )}
        </div>
      </header>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative z-10 py-32 pt-40"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}  
        ref={heroRef}
      >
        <div className="container mx-auto pt-2 px-6 text-center">
          <FloatingElement>
            <img src={DBL} alt="Digital Bayanihan Logo" className="w-1/3 h-1/3 mx-auto" />
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
          
          {/* <FloatingElement delay="0.4s">
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Join the most anticipated technology conference of the year.
              Connect with industry leaders, explore cutting-edge innovations,
              and shape the future of technology together.
            </p>
          </FloatingElement> */}
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <InfoCard icon={<Calendar size={32}/>} title="March 15-17" subtitle="2025"  iconColor="text-purple-400" />
            <InfoCard icon={<Users size={32}/>} title="500+ Attendees" subtitle="Industry Leaders" iconColor="text-blue-400" />
            <InfoCard icon={<Zap size={32}/>} title="20+ Sessions" subtitle="Tech Topics" iconColor="text-green-400"/>
            <InfoCard icon={<Trophy size={32}/>} title="Awards Night" subtitle="Recognition" iconColor="text-orange-400"/>
          </div>
        </div> */}
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

      {/* RECENT EVENTS */}

      {/* Call to Action */}
      <section id="register" className="relative z-10 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-dark p-12 rounded-3xl max-w-4xl mx-auto">
            <Coffee className="h-16 w-16 text-purple-400 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl font-bold mb-6 text-gradient-purple">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">

              Don't miss out on this incredible opportunity to connect, learn, and innovate.
              Early bird pricing available until February 28th.

              Don't miss out on this incredible opportunity to connect, learn,
              and innovate. Early bird pricing available until February 28th.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-3"
              >
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 transition duration-300 ease-in-out">
                View Schedule
              </Button>
            </div>
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
