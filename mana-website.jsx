import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';

// MANA Logo Component
const MANALogo = () => (
  <svg width="140" height="45" viewBox="0 0 645 221" style={{ maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20, 10)">
      <text x="0" y="35" fontFamily="Playfair Display, serif" fontSize="48" fontWeight="700" fill="#B4483C" letterSpacing="-1">MANA</text>
    </g>
  </svg>
);

export default function MANAWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Brand colors
  const colors = {
    primary: '#B4483C',      // Rust red - primary accent
    dark: '#333333',         // Charcoal - dark backgrounds
    white: '#ffffff',        // White - clean spaces
    gray: '#a6a6a6',        // Warm gray - secondary accent
    darkBg: '#1a1a1a',      // Slightly lighter than pure black
    lightGray: '#f5f5f5'    // Off-white for subtle contrast
  };

  const products = [
    {
      id: 'manasculpt',
      category: 'body',
      name: 'MANAsculpt',
      tagline: 'Synchronized RF + HIFEM',
      description: 'Electromagnetic muscle stimulation combined with radiofrequency for accelerated body contouring and muscle toning',
      hasLogo: true,
      specs: ['RF Technology', 'HIFEM', 'Body Contouring', 'Muscle Toning'],
      roi: 'ROI: 6-12 months'
    },
    {
      id: 'manasculpt-x1',
      category: 'body',
      name: 'MANAsculpt X1',
      tagline: 'Advanced Body Contouring',
      description: 'Next-generation synchronized technology for premium body sculpting and aesthetic transformation',
      hasLogo: true,
      specs: ['Advanced RF', 'Precision HIFEM', 'Premium Contouring', 'Enhanced Results'],
      roi: 'ROI: 6-12 months'
    },
    {
      id: 'manaintima',
      category: 'intimate',
      name: 'MANAintima',
      tagline: 'Intimate Wellness',
      description: 'Specialized system for intimate area rejuvenation and women\'s wellness treatments',
      hasLogo: true,
      specs: ['RF Technology', 'Intimate Care', 'Non-Invasive', 'Discretion'],
      roi: 'ROI: 8-14 months'
    },
    {
      id: 'airlux-md',
      category: 'skincare',
      name: 'MANA airlux MD',
      tagline: 'Pneumatic Delivery System',
      description: 'Advanced air pressure technology for superior product delivery and skin penetration in aesthetic treatments',
      image: 'linear-gradient(135deg, #2d1a2d 0%, #3d2040 100%)',
      specs: ['Air Pressure Technology', 'Deep Penetration', 'Product Synergy', 'Enhanced Results'],
      roi: 'ROI: 5-10 months'
    },
    {
      id: 'manascan',
      category: 'diagnostics',
      name: 'MANAscan',
      tagline: 'AI-Powered Skin Analysis',
      description: 'Advanced diagnostic tool for comprehensive skin analysis and personalized treatment planning',
      image: 'linear-gradient(135deg, #1a2d2d 0%, #203d3d 100%)',
      specs: ['AI Analysis', 'Skin Mapping', 'Treatment Planning', 'Patient Engagement'],
      roi: 'ROI: Clinical Tool'
    },
    {
      id: 'manalase',
      category: 'skincare',
      name: 'MANAlase',
      tagline: 'Laser Hair Removal & Skin',
      description: 'Multi-purpose laser system for hair removal, skin rejuvenation, and aesthetic correction',
      image: 'linear-gradient(135deg, #3d1a1a 0%, #4d2020 100%)',
      specs: ['Diode Laser', 'Hair Removal', 'Skin Rejuvenation', 'Multi-Purpose'],
      roi: 'ROI: 4-8 months'
    },
    {
      id: 'manaplex',
      category: 'plasma',
      name: 'MANAplex',
      tagline: 'Plasma Technology',
      description: 'Advanced plasma sublimation system for precision skin treatments and non-invasive rejuvenation',
      image: 'linear-gradient(135deg, #1a3d2d 0%, #203d3a 100%)',
      specs: ['Plasma Tech', 'Precision Ablation', 'Zero Downtime', 'Eyelid Lift'],
      roi: 'ROI: 4-8 months'
    },
    {
      id: 'acto-feel',
      category: 'consumables',
      name: 'ACT O\'FEEL',
      tagline: 'Bio-Regenerative Serum',
      description: 'Premium consumable for enhanced treatment outcomes and superior client retention across all modalities',
      image: 'linear-gradient(135deg, #2d2d1a 0%, #3d3d20 100%)',
      specs: ['Bio-Regenerative', 'Clinical Grade', 'Post-Treatment', 'High Margins'],
      roi: 'ROI: Ongoing Revenue'
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="text-white min-h-screen font-sans" style={{ fontFamily: '"Playfair Display", "Georgia", serif', backgroundColor: colors.darkBg }}>
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&display=swap');
        
        /* Avenir Next Thai - Using similar modern sans-serif from Google Fonts with Thai support */
        @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;600&family=Space+Grotesk:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Prompt', 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        h1, h2, h3, .display-font {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        body {
          background: ${colors.darkBg};
          font-family: 'Prompt', 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 400;
        }
        
        .font-thin {
          font-weight: 100;
          letter-spacing: 0.5px;
        }
        
        .font-extralight {
          font-weight: 200;
          letter-spacing: 0.3px;
        }
        
        .font-light {
          font-weight: 300;
          letter-spacing: 0.2px;
        }
        
        .font-regular {
          font-weight: 400;
        }
        
        .font-semibold {
          font-weight: 600;
          letter-spacing: -0.3px;
        }
        
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 200px;
        }
        
        .accent-line {
          position: relative;
        }
        
        .accent-line::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, ${colors.primary}, transparent);
        }
        
        .product-card {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .product-card:hover {
          transform: translateY(-8px);
        }
        
        .product-image {
          transition: all 0.8s ease;
        }
        
        .product-card:hover .product-image {
          scale: 1.02;
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: ${colors.primary};
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        
        button {
          transition: all 0.3s ease;
          font-family: 'Prompt', 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .cta-button {
          background: ${colors.primary};
          color: ${colors.white};
          font-weight: 600;
          letter-spacing: 0.5em;
        }
        
        .cta-button:hover {
          background: ${colors.dark};
          color: ${colors.white};
          transform: translateX(4px);
          border: 1px solid ${colors.primary};
        }
        
        .secondary-button {
          border: 1px solid ${colors.primary};
          color: ${colors.primary};
        }
        
        .secondary-button:hover {
          background: ${colors.primary};
          color: ${colors.white};
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b" style={{ backgroundColor: `${colors.darkBg}/90`, borderColor: `${colors.gray}20` }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold display-font tracking-tight" style={{ color: colors.primary }}>
            MANA
          </div>
          <p className="hidden sm:block text-xs text-gray-400 uppercase tracking-widest">Regenerative Biotech</p>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            <a href="#products" className="nav-link text-sm uppercase tracking-widest">Products</a>
            <a href="#solutions" className="nav-link text-sm uppercase tracking-widest">Solutions</a>
            <a href="#why" className="nav-link text-sm uppercase tracking-widest">Why MANA</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA */}
          <button className="hidden md:block px-8 py-2 rounded cta-button text-sm uppercase tracking-widest">
            Contact
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{ backgroundColor: colors.darkBg, borderColor: `${colors.gray}20` }}>
            <div className="p-6 space-y-4">
              <a href="#products" className="block text-sm uppercase tracking-widest py-3" style={{ borderBottom: `1px solid ${colors.gray}20` }}>Products</a>
              <a href="#solutions" className="block text-sm uppercase tracking-widest py-3" style={{ borderBottom: `1px solid ${colors.gray}20` }}>Solutions</a>
              <a href="#why" className="block text-sm uppercase tracking-widest py-3">Why MANA</a>
              <button className="w-full py-3 rounded cta-button text-sm uppercase tracking-widest mt-4">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 grain relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="fade-in stagger-1">
                <p style={{ color: colors.primary, fontWeight: 200 }} className="text-sm uppercase tracking-widest mb-4">
                  Medical Device Distribution & Regenerative Solutions
                </p>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight accent-line">
                  Regenerative Excellence
                </h1>
              </div>

              <div className="fade-in stagger-2">
                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  MANA's integrated ecosystem of regenerative biotech solutions—from body sculpting to intimate wellness, diagnostic tools to laser systems—designed for forward-thinking clinics and aesthetic practices.
                </p>
              </div>

              <div className="fade-in stagger-3 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded cta-button font-semibold uppercase tracking-widest inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                  Request Demo <ArrowUpRight size={18} />
                </button>
                <button className="px-8 py-4 rounded secondary-button font-semibold uppercase tracking-widest">
                  View Products
                </button>
              </div>

              {/* Stats */}
              <div className="fade-in stagger-3 grid grid-cols-3 gap-6 pt-8" style={{ borderTop: `1px solid ${colors.gray}20` }}>
                <div>
                  <p className="text-3xl font-bold" style={{ color: colors.primary }}>8</p>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">Device Lines</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: colors.primary }}>$7M</p>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">2026 Target</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: colors.primary }}>15+</p>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">Active Partners</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="fade-in stagger-3 relative h-96 lg:h-full rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 50%, ${colors.darkBg} 100%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-white/20 display-font">MANA</div>
                  <p style={{ color: `${colors.primary}80` }} className="text-lg">Regenerative Biotech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 grain" style={{ backgroundColor: `${colors.darkBg}`, backgroundImage: `linear-gradient(to bottom, ${colors.darkBg}, ${colors.dark}20)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p style={{ color: colors.primary }} className="text-sm uppercase tracking-widest font-medium mb-4">
              Device Portfolio
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold accent-line inline-block mb-8">
              Premium Solutions
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive MANA regenerative biotech solutions and medical devices tailored for aesthetic practices and clinics
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {['all', 'body', 'intimate', 'skincare', 'diagnostics', 'plasma', 'consumables'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded text-sm uppercase tracking-widest transition-all`}
                style={{
                  backgroundColor: activeTab === tab ? colors.primary : 'transparent',
                  color: activeTab === tab ? colors.white : colors.gray,
                  border: `1px solid ${activeTab === tab ? colors.primary : colors.gray}40`,
                  fontWeight: activeTab === tab ? 600 : 400
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id}
                className="product-card group cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Product Image */}
                <div
                  className="product-image h-48 rounded-lg mb-6 overflow-hidden border flex items-center justify-center"
                  style={{ background: product.image || `linear-gradient(135deg, ${colors.darkBg} 0%, ${colors.dark}20 100%)`, borderColor: `${colors.gray}40` }}
                >
                  {product.hasLogo ? (
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold display-font" style={{ color: colors.primary }}>{product.name}</p>
                        <p className="text-sm text-gray-400 mt-2">{product.tagline}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-white/10 display-font">{product.name}</div>
                      <p style={{ color: `${colors.primary}40` }} className="text-sm">{product.tagline}</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <p style={{ color: colors.primary, fontWeight: 300 }} className="text-xs uppercase tracking-widest mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-2xl font-bold display-font">{product.name}</h3>
                    <p className="text-gray-400 italic text-sm mt-1">{product.tagline}</p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="pt-4" style={{ borderTop: `1px solid ${colors.gray}20` }}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.map((spec, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded text-gray-400" style={{ backgroundColor: `${colors.gray}15`, border: `1px solid ${colors.gray}30` }}>
                          {spec}
                        </span>
                      ))}
                    </div>
                    <p style={{ color: colors.primary }} className="font-semibold text-sm">{product.roi}</p>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-6 px-4 py-3 border rounded group-hover:transition-colors text-sm uppercase tracking-widest font-medium flex items-center justify-center gap-2" style={{ borderColor: `${colors.primary}50`, color: colors.gray }}>
                    Learn More <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6 grain" style={{ backgroundColor: colors.darkBg }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div>
                <p style={{ color: colors.primary }} className="text-sm uppercase tracking-widest font-medium mb-4">
                  Integrated Approach
                </p>
                <h2 className="text-5xl font-bold accent-line inline-block mb-4">
                  Multilayer Regeneration Framework
                </h2>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Our 1D–4D device packaging strategy empowers practices to create complete aesthetic solutions while optimizing revenue potential and patient outcomes.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  { title: '1D Devices', desc: 'Single-technology entry-level solutions' },
                  { title: '2D Combinations', desc: 'Synergistic dual-technology packages' },
                  { title: '3D Integration', desc: 'Comprehensive three-modality systems' },
                  { title: '4D Premium', desc: 'Complete regenerative ecosystem with consumables' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: colors.primary }} />
                    <div className="flex-1 pb-4" style={{ borderBottom: `1px solid ${colors.gray}20` }}>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Silver', desc: 'Foundation', color: colors.gray },
                { label: 'Gold', desc: 'Advanced', color: colors.primary },
                { label: 'Platinum', desc: 'Elite', color: colors.dark }
              ].map((tier, i) => (
                <div
                  key={i}
                  className="p-8 rounded-lg opacity-20 hover:opacity-40 transition-opacity cursor-pointer h-40 flex items-end"
                  style={{ backgroundColor: tier.color }}
                >
                  <div>
                    <p className="font-bold text-white">{tier.label}</p>
                    <p className="text-sm text-white/70">{tier.desc}</p>
                  </div>
                </div>
              ))}
              <div className="col-span-2 p-8 rounded-lg" style={{ backgroundColor: `${colors.white}10`, border: `1px solid ${colors.primary}40` }}>
                <p className="text-sm text-gray-300">
                  <span style={{ color: colors.primary }} className="font-bold">Education + Coaching</span> included across all tiers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why" className="py-24 px-6 grain" style={{ backgroundColor: colors.darkBg, backgroundImage: `linear-gradient(to bottom, ${colors.dark}20, ${colors.darkBg})` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p style={{ color: colors.primary }} className="text-sm uppercase tracking-widest font-medium mb-4">
              Differentiation
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold accent-line inline-block mb-8">
              Why Partners Choose MANA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'ROI Focused', desc: 'Devices selected for fast payoff and margin optimization' },
              { icon: '🎓', title: 'Education First', desc: 'Age Reversal Academy training included with all packages' },
              { icon: '🔬', title: 'Clinical Credibility', desc: 'Physician testimonials and before/after case studies' },
              { icon: '🤝', title: 'White-Glove Support', desc: 'Dedicated account management and business coaching' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-lg transition-all group cursor-pointer" style={{ backgroundColor: `${colors.white}5`, border: `1px solid ${colors.gray}20` }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${colors.primary}50`; e.currentTarget.style.backgroundColor = `${colors.white}10`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${colors.gray}20`; e.currentTarget.style.backgroundColor = `${colors.white}5`; }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <p style={{ color: colors.primary }} className="text-sm uppercase tracking-widest font-medium mb-4">
              Ready to Transform
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold">
              Start Your Partnership with MANA
            </h2>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with our team to explore customized device packages and financing options for your practice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-12 py-4 rounded cta-button font-semibold uppercase tracking-widest">
              Schedule Consultation
            </button>
            <button className="px-12 py-4 rounded secondary-button font-semibold uppercase tracking-widest">
              Download Catalog
            </button>
          </div>

          <p className="text-xs text-gray-500 pt-8">
            MANA Regenerative Biotech • Glendale, CA • hello@manaregenerative.io
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6" style={{ borderColor: `${colors.gray}20` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: colors.primary }}>Products</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>MANAsculpt</a></li>
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>MANAlase</a></li>
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>MANAplex</a></li>
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>MANAscan</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: colors.primary }}>Solutions</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Package Plans</a></li>
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Financing</a></li>
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Training</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: colors.primary }}>Company</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>About</a></li>
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Contact</a></li>
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Careers</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: colors.primary }}>Connect</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>LinkedIn</a></li>
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Instagram</a></li>
                <li><a href="#" className="hover:transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500" style={{ borderColor: `${colors.gray}20` }}>
            <p>&copy; 2024 MANA Regenerative Biotech. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Privacy</a>
              <a href="#" className="transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Terms</a>
              <a href="#" className="transition" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = colors.primary} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
