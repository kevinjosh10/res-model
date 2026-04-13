import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Star, Leaf, Wine, Sofa, Phone, Mail, Clock, ArrowRight, Search, Instagram } from 'lucide-react';

const ASSETS = {
  hero: '/assets/lumina_hero_1776057768014.png',
  wagyu: '/assets/menu_wagyu_1776057785268.png',
  scallops: '/assets/menu_scallops_1776057804686.png',
  dessert: '/assets/menu_dessert_1776057821547.png',
  chef: '/assets/about_chef_1776057839847.png',
  interior: '/assets/gallery_interior_1776057868149.png',
  wine: '/assets/gallery_wine_1776057885635.png',
  plating: '/assets/gallery_plating_1776057902403.png'
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

/* --- COMPONENTS --- */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-dark/95 backdrop-blur-md border-b border-white/5 h-20' : 'bg-transparent h-24'}`}>
        <div className="max-w-[1600px] mx-auto px-6 h-full flex justify-between items-center">
          <a href="#" className="font-heading font-semibold text-3xl tracking-widest text-text-main">Lumina.</a>
          
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest text-text-main hover:text-accent transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#reservation" className="btn btn-outline">Reserve a Table</a>
          </div>

          <button className="md:hidden text-text-main" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-bg-dark z-[100] flex flex-col items-center justify-center transition-transform duration-500 ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button className="absolute top-8 right-6 text-text-main" onClick={() => setMobileOpen(false)}>
          <X size={36} />
        </button>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="font-heading text-3xl text-text-main hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#reservation" onClick={() => setMobileOpen(false)} className="btn btn-outline mt-8">Reserve a Table</a>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 250]);

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-[-2]">
        <div className="absolute inset-0 bg-[url('/assets/lumina_hero_1776057768014.png')] bg-cover bg-center bg-no-repeat scale-105" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/50 to-bg-dark/90 z-[-1]" />
      
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUpVariant}
        className="max-w-[900px] px-6 z-10"
      >
        <h1 className="text-5xl md:text-7xl leading-tight mb-6 drop-shadow-2xl">
          Tasting the Extraordinary,<br />Every Single Night.
        </h1>
        <p className="text-lg md:text-xl text-text-muted mb-12 max-w-[600px] mx-auto">
          Immerse yourself in a fine dining experience that elevates modern culinary arts to an unforgettable journey of flavors.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#reservation" className="btn btn-primary">Reserve a Table</a>
          <a href="#menu" className="btn btn-secondary">Order Now</a>
        </div>
      </motion.div>
    </section>
  );
};

const SocialProof = () => (
  <section className="bg-bg-surface py-16 border-b border-border">
    <div className="section-container flex flex-wrap justify-between items-center gap-12 text-center md:text-left">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="flex-1 min-w-[250px] text-center">
        <div className="text-accent flex justify-center gap-1 mb-4"><Star size={20}/><Star size={20}/><Star size={20}/><Star size={20}/><Star size={20}/></div>
        <p className="text-text-muted italic mb-2">"A masterclass in modern cuisine. Simply flawless."</p>
        <span className="text-accent text-sm tracking-widest uppercase">- The Culinary Chronicle</span>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="flex-1 min-w-[250px] text-center md:border-l md:border-r border-border md:px-8">
        <h3 className="text-3xl mb-2 text-text-main">Trusted by 10,000+ Guests</h3>
        <p className="text-text-muted">Awarded Michelin Excellence 2025</p>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="flex-1 min-w-[250px] text-center">
        <div className="text-accent flex justify-center gap-1 mb-4"><Star size={20}/><Star size={20}/><Star size={20}/><Star size={20}/><Star size={20}/></div>
        <p className="text-text-muted italic mb-2">"The best dining experience I've had this year."</p>
        <span className="text-accent text-sm tracking-widest uppercase">- Sarah Jenkins, Food Critic</span>
      </motion.div>
    </div>
  </section>
);

const MenuPreview = () => {
  const dishes = [
    { title: 'A5 Wagyu Tenderloin', desc: 'Charcoal seared Japanese Wagyu with black truffle velvet puree, charred asparagus.', price: '$85', img: ASSETS.wagyu },
    { title: 'Hokkaido Sea Scallops', desc: 'Pan-seared perfection resting on saffron infused carnaroli risotto with micro-herbs.', price: '$42', img: ASSETS.scallops },
    { title: 'Valrhona Lava Cake', desc: 'Rich 72% dark chocolate fondant center, adorned with 24k gold leaf and raspberry coulis.', price: '$24', img: ASSETS.dessert },
  ];

  return (
    <section id="menu" className="py-32 section-container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
        <span className="subheading">Culinary Masterpieces</span>
        <h2 className="text-4xl md:text-5xl">Our Signature Creations</h2>
        <div className="divider"></div>
      </motion.div>

      <motion.div 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10 mt-16"
      >
        {dishes.map((dish, i) => (
          <motion.div key={i} variants={fadeUpVariant} className="bg-bg-surface border border-[#333] hover:border-accent group cursor-pointer transition-colors duration-500">
            <div className="relative h-[350px] overflow-hidden">
              <img src={dish.img} alt={dish.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 right-6 bg-accent text-black font-heading font-semibold text-xl px-4 py-2">{dish.price}</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4">{dish.title}</h3>
              <p className="text-text-muted">{dish.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-16">
        <button className="btn btn-outline-dark">View Full Menu</button>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-32 bg-bg-surface">
    <div className="section-container grid md:grid-cols-2 gap-20 items-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
        <span className="subheading">The Lumina Story</span>
        <h2 className="text-4xl md:text-5xl leading-tight mb-6">A Passion for the Extraordinary.</h2>
        <div className="divider mx-0"></div>
        <p className="text-text-muted text-lg mb-6">Founded in 2018, Lumina was born out of a desire to create a dining experience that transcends the ordinary. We believe that fine dining should be an emotional journey, an interplay of textures, temperatures, and memories.</p>
        <p className="text-text-muted text-lg mb-10">Chef Alexander Thorne brings over two decades of experience from the world's most prestigious kitchens. His philosophy is simple: respect the ingredient, elevate the technique, and present it with uncompromising elegance.</p>
        <a href="#reservation" className="btn btn-primary">Experience Lumina</a>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="relative mt-16 md:mt-0">
        <div className="relative z-10 before:absolute before:-top-6 before:-right-6 before:w-full before:h-full before:border-2 before:border-accent before:z-[-1] hidden md:block"></div>
        <img src={ASSETS.chef} alt="Chef" className="relative z-10 shadow-2xl" />
        <div className="absolute -bottom-10 -left-10 bg-bg-dark p-8 flex items-center gap-4 z-20 border border-[#333]">
          <span className="font-heading text-5xl text-accent leading-none">20+</span>
          <span className="uppercase text-sm tracking-widest text-text-muted text-left">Years of<br/>Excellence</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Benefits = () => {
  const items = [
    { icon: <Leaf size={32}/>, title: 'Sustainably Sourced', desc: 'We partner directly with local farmers and artisans to bring you only the freshest, seasonal ingredients daily.' },
    { icon: <Wine size={32}/>, title: 'Curated Pairings', desc: 'Our Master Sommelier meticulously pairs our rotating menu with rare and exceptional vintages from around the globe.' },
    { icon: <Sofa size={32}/>, title: 'Intimate Ambience', desc: 'Designed for privacy and comfort, our dining room provides a luxurious atmosphere for your most important occasions.' },
  ];
  return (
    <section className="py-32 section-container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-center">
        <span className="subheading mx-auto">The Lumina Standard</span>
        <h2 className="text-4xl md:text-5xl">Why Dine With Us</h2>
        <div className="divider mx-auto"></div>
      </motion.div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-12 mt-16">
        {items.map((item, i) => (
          <motion.div key={i} variants={fadeUpVariant} className="bg-bg-light p-12 text-center border border-[#333] hover:border-accent transition-colors duration-300">
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
              {item.icon}
            </div>
            <h3 className="text-2xl mb-4">{item.title}</h3>
            <p className="text-text-muted">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const ReservationForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="reservation" className="py-32 bg-bg-surface">
      <div className="section-container">
        <div className="grid md:grid-cols-2 bg-bg-dark border border-[#333] overflow-hidden">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} 
            className="p-12 md:p-20 flex flex-col justify-center bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.85)), url(${ASSETS.interior})` }}>
            <h2 className="text-4xl md:text-5xl mb-4">Secure Your Table</h2>
            <p className="text-gray-300 mb-12">Reservations are highly recommended. For parties of 6 or more, please contact us directly via phone.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-6"><Phone className="text-accent" /> <span className="text-lg">+1 (555) 123-4567</span></div>
              <div className="flex items-center gap-6"><Mail className="text-accent" /> <span className="text-lg">reservations@luminadining.com</span></div>
              <div className="flex items-center gap-6"><Clock className="text-accent" /> <span className="text-lg">Tue - Sun: 5:00 PM - 11:00 PM</span></div>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-12 md:p-20 bg-bg-light">
            <h3 className="text-3xl mb-8">Make a Reservation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest text-text-muted mb-2">Date</label>
                  <input type="date" required className="w-full bg-bg-dark border border-[#333] p-4 focus:border-accent outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-text-muted mb-2">Time</label>
                  <select required className="w-full bg-bg-dark border border-[#333] p-4 focus:border-accent outline-none transition-colors">
                    <option value="">Select Time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-text-muted mb-2">Guests</label>
                <select required className="w-full bg-bg-dark border border-[#333] p-4 focus:border-accent outline-none transition-colors">
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                </select>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-text-muted mb-2">Full Name</label>
                <input type="text" required placeholder="John Doe" className="w-full bg-bg-dark border border-[#333] p-4 focus:border-accent outline-none transition-colors" />
              </div>
              <button type="submit" disabled={submitting} className="btn btn-primary w-full mt-4">
                {submitting ? 'Processing...' : 'Confirm Reservation'}
              </button>
              {success && <div className="bg-accent text-black font-medium p-4 text-center mt-4">Table requested! We will email you shortly.</div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [ASSETS.interior, ASSETS.wine, ASSETS.plating];
  return (
    <section id="gallery">
      <div className="flex flex-col md:flex-row w-full">
        {images.map((src, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="flex-1 relative h-[400px] md:h-[500px] overflow-hidden group cursor-pointer">
            <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Search className="text-white scale-50 group-hover:scale-100 transition-transform duration-300" size={48} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-[#050505] pt-24 border-t border-[#333]">
    <div className="section-container grid md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2">
        <a href="#" className="font-heading font-semibold text-3xl tracking-widest text-text-main block mb-6">Lumina.</a>
        <p className="text-text-muted max-w-sm mb-8">Elevating modern cuisine to an unforgettable journey of flavors.</p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 border border-[#333] flex items-center justify-center rounded-full hover:bg-accent hover:border-accent hover:text-black transition-colors"><Instagram size={18}/></a>
        </div>
      </div>
      <div>
        <h4 className="text-xl mb-6">Visit Us</h4>
        <p className="text-text-muted mb-4">123 Culinary Avenue<br/>New York, NY 10001</p>
        <p className="text-text-main font-medium">Hours:</p>
        <p className="text-text-muted">Tue - Sun: 5PM - 11PM<br/>Mon: Closed</p>
      </div>
      <div>
        <h4 className="text-xl mb-6">Newsletter</h4>
        <p className="text-text-muted mb-6">Subscribe for seasonal menu updates and exclusive event invitations.</p>
        <form className="flex border-b border-[#333] pb-2">
          <input type="email" placeholder="Your Email Address" className="bg-transparent text-text-main w-full outline-none" required />
          <button type="submit"><ArrowRight className="text-accent"/></button>
        </form>
      </div>
    </div>
    <div className="bg-black py-6 border-t border-[#333]">
      <div className="section-container flex flex-col md:flex-row justify-between items-center text-sm text-text-muted gap-4">
        <p>&copy; 2026 Lumina Dining. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <SocialProof />
      <MenuPreview />
      <AboutSection />
      <Benefits />
      <ReservationForm />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
