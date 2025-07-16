import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Shield, 
  Zap, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ChevronDown,
  CheckCircle,
  Brain,
  Eye,
  Cpu,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'technology', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-light tracking-wide">Ammini Autos</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'technology', label: 'Technology' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-6 py-6 space-y-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'technology', label: 'Technology' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-lg font-light text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400 font-light">Autonomous Technology</span>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight leading-tight mb-8">
              The Future of
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Autonomous Mobility
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed">
              Pioneering next-generation autonomous vehicles with cutting-edge AI, 
              advanced safety systems, and revolutionary design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="group bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Technology</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-gray-700 text-white px-8 py-4 rounded-lg font-medium hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-gray-500 hover:text-gray-300 transition-colors"
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extralight mb-8">
                Redefining Transportation
              </h2>
              <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed">
                At Ammini Autos, we're not just building cars – we're crafting the future 
                of mobility through innovative autonomous vehicle technology that prioritizes 
                safety, efficiency, and human experience.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Safety First</h3>
                    <p className="text-gray-400 font-light">
                      99.9% collision avoidance accuracy with real-time hazard detection
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">AI-Powered</h3>
                    <p className="text-gray-400 font-light">
                      Proprietary machine learning algorithms that continuously improve
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-600/20 border border-green-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Human-Centric</h3>
                    <p className="text-gray-400 font-light">
                      Designed for comfort and accessibility for everyone
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-light text-white mb-8">Performance Metrics</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 font-light">Safety Rating</span>
                      <span className="text-white font-medium">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 font-light">Processing Speed</span>
                      <span className="text-white font-medium">2.1M ops/sec</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-1 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 font-light">Range</span>
                      <span className="text-white font-medium">450+ miles</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1">
                      <div className="bg-gradient-to-r from-green-500 to-blue-600 h-1 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-32 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6">
              Revolutionary Technology
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
              Breakthrough innovations setting new industry standards for performance, 
              safety, and reliability in autonomous transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">Neural Processing</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Advanced neural networks process millions of data points per second 
                for real-time decision making and route optimization.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">360° Vision System</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                LiDAR, cameras, and radar sensors provide complete environmental 
                awareness with object detection up to 300 meters.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-600/20 border border-green-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">Edge Computing</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                On-board supercomputers enable instantaneous processing without 
                relying on external connectivity for critical decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
              Autonomous vehicle solutions tailored for personal, commercial, 
              and enterprise applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/30 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center mb-6">
                <Car className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">Personal Vehicles</h3>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                Luxury autonomous cars for daily commuting and long-distance travel 
                with premium comfort features.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Level 5 autonomy</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>450+ mile range</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Premium interior</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900/30 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">Fleet Services</h3>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                Commercial autonomous vehicle fleets for ride-sharing, delivery, 
                and transportation services.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>24/7 operations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Fleet management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Predictive maintenance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900/30 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-600/20 border border-green-500/30 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">Enterprise Solutions</h3>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                Custom autonomous platforms for logistics, public transport, 
                and specialized applications.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Custom configurations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Integration support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Dedicated support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-6">
              Ready to Drive the Future?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
              Join us in revolutionizing transportation. Contact our team to learn 
              more about our autonomous vehicle solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Call Us</h3>
              <p className="text-gray-400 font-light">+1 (555) 123-4567</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Email Us</h3>
              <p className="text-gray-400 font-light">info@amminiautos.com</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-600/20 border border-green-500/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 font-light">
                1000 Innovation Drive<br />
                Silicon Valley, CA 94043
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="group bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
              <span>Schedule a Demo</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Car className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-light">Ammini Autos</span>
            </div>
            <p className="text-sm text-gray-500 font-light">
              © 2025 Ammini Autos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;