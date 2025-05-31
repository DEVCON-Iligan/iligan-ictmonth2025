
import { Calendar, Code, Users, Zap, Trophy, Coffee, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import TimelineConnector from '@/components/TimelineConnector';
import FloatingElement from '@/components/FloatingElement';
import SpeakerCard from '@/components/SpeakerCard';
import { useState } from 'react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const events = [
    {
      title: "Opening Ceremony & Keynote",
      date: "March 15, 2025",
      time: "9:00 AM - 10:30 AM",
      location: "Main Auditorium",
      attendees: "500+ Expected",
      description: "Join us for the grand opening of DECVON ICT 2025. Featuring keynote speakers from leading tech companies and industry pioneers.",
      category: "Keynote",
      isUpcoming: true
    },
    {
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "Tech Lab A",
      attendees: "150 Participants",
      description: "Deep dive into artificial intelligence and machine learning applications. Hands-on workshop with real-world projects and case studies.",
      category: "Workshop",
      isUpcoming: true
    },
    {
      title: "Cybersecurity Panel Discussion",
      date: "March 16, 2025",
      time: "10:00 AM - 11:30 AM",
      location: "Conference Room B",
      attendees: "200+ Attendees",
      description: "Expert panel discussing the latest cybersecurity threats, solutions, and best practices for modern businesses.",
      category: "Panel"
    },
    {
      title: "Innovation Showcase",
      date: "March 16, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Exhibition Hall",
      attendees: "300+ Visitors",
      description: "Discover cutting-edge innovations from startups and established companies. Network with innovators and explore breakthrough technologies.",
      category: "Exhibition"
    },
    {
      title: "Networking Dinner",
      date: "March 16, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Grand Ballroom",
      attendees: "400+ Attendees",
      description: "Connect with industry leaders, fellow professionals, and potential collaborators in an elegant evening setting.",
      category: "Networking"
    },
    {
      title: "Closing Ceremony & Awards",
      date: "March 17, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Main Auditorium",
      attendees: "500+ Expected",
      description: "Celebration of achievements, award presentations, and closing remarks. Thank you reception to follow.",
      category: "Ceremony"
    }
  ];

  const speakers = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      company: "TechVision Global",
      bio: "Leading expert in AI and machine learning with over 15 years of experience in enterprise technology solutions.",
      expertise: ["Artificial Intelligence", "Machine Learning", "Enterprise Tech"]
    },
    {
      name: "Marcus Rodriguez",
      title: "Cybersecurity Director",
      company: "SecureNet Solutions",
      bio: "Renowned cybersecurity specialist focused on protecting digital infrastructure for Fortune 500 companies.",
      expertise: ["Cybersecurity", "Digital Infrastructure", "Risk Management"]
    },
    {
      name: "Prof. Emily Watson",
      title: "Innovation Research Lead",
      company: "Future Labs Institute",
      bio: "Academic researcher and industry consultant specializing in emerging technologies and digital transformation.",
      expertise: ["Innovation Strategy", "Digital Transformation", "Research"]
    },
    {
      name: "David Kim",
      title: "Startup Ecosystem Builder",
      company: "Innovation Hub",
      bio: "Serial entrepreneur and investor helping startups scale their technology solutions in competitive markets.",
      expertise: ["Entrepreneurship", "Venture Capital", "Scaling"]
    }
  ];

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "#events" },
    { name: "Speakers", href: "#speakers" },
    { name: "Register", href: "#register" }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-purple">DECVON ICT</h1>
                <p className="text-xs text-gray-400">Innovation Conference 2025</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
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
          <nav
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-white/10 ${isMenuOpen ? "border-t mt-4 pt-4 pb-4 h-[230px]" : "h-0 border-0 p-0"
              }`}
            style={{
              clipPath: isMenuOpen
                ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                : "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
          >
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

        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 py-32 pt-40">
        <div className="container mx-auto px-6 text-center">
          <FloatingElement>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-purple animate-fade-in-up">
              DECVON ICT
            </h1>
          </FloatingElement>
          <FloatingElement delay="0.2s">
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300 animate-fade-in-up">
              Innovation Conference 2025
            </h2>
          </FloatingElement>
          <FloatingElement delay="0.4s">
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Join the most anticipated technology conference of the year. Connect with industry leaders,
              explore cutting-edge innovations, and shape the future of technology together.
            </p>
          </FloatingElement>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="glass p-6 rounded-xl text-center hover:glass-dark transition-all duration-300 hover:scale-105">
              <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <p className="text-white font-semibold">March 15-17</p>
              <p className="text-gray-400 text-sm">2025</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:glass-dark transition-all duration-300 hover:scale-105">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <p className="text-white font-semibold">500+ Attendees</p>
              <p className="text-gray-400 text-sm">Industry Leaders</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:glass-dark transition-all duration-300 hover:scale-105">
              <Zap className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <p className="text-white font-semibold">20+ Sessions</p>
              <p className="text-gray-400 text-sm">Tech Topics</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:glass-dark transition-all duration-300 hover:scale-105">
              <Trophy className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <p className="text-white font-semibold">Awards Night</p>
              <p className="text-gray-400 text-sm">Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">
              Featured Speakers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Learn from industry leaders and visionaries who are shaping the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <SpeakerCard {...speaker} />
              </div>
            ))}
          </div>
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
              <div key={index} className="flex gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-3">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3">
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
              <span className="text-xl font-bold text-gradient-purple">DECVON ICT</span>
            </div>
            <p className="text-gray-400 mb-6">
              Shaping the future of technology, one innovation at a time.
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a>
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
