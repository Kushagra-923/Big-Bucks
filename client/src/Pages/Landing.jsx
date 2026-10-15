import { Link } from 'react-router-dom'

function Landing() {
 return (
 <main className="landing-page min-h-screen bg-[#151210] text-[#f7f3ef] overflow-hidden">
 {/* Top Ambient Glow */}
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_at_top,_rgba(236,193,255,0.08)_0%,_rgba(99,102,241,0.04)_40%,_transparent_70%)] pointer-events-none" />

 {/* Navigation */}
 <nav className="site-nav" aria-label="Main navigation">
 <Link className="brand" to="/" aria-label="Big Bucks home">
 <span className="brand-mark">B</span>
 <span className="tracking-tight">Big Bucks</span>
 </Link>

 <div className="market-search" role="search">
 <span aria-hidden="true">⌕</span>
 <span>What are you after?</span>
 </div>

 <div className="nav-actions">
 <Link className="nav-link cart-link" to="/login">
 <span aria-hidden="true" className="text-sm">▱</span> Cart
 </Link>
 <Link className="nav-link" to="/login">Log in</Link>
 <Link className="button button-accent !py-2.5 !px-5" to="/signup">
 Let’s go <span aria-hidden="true">→</span>
 </Link>
 </div>
 </nav>

 {/* Category Ticker Bar */}
 <div className="category-bar" aria-label="Shop categories">
 <span>⚡ ALL CATEGORIES</span>
 <span>ELECTRONICS</span>
 <span>FASHION & APPAREL</span>
 <span>BOOKS & CULTURE</span>
 <span>HOME & LIVING</span>
 <span>BEAUTY & WELLNESS</span>
 <span>GROCERY & PANTRY</span>
 <span>✦ TODAY'S DROPS</span>
 </div>

 {/* Main High-Impact Editorial Hero */}
 <section className="landing-hero relative z-10">
 <div className="hero-copy">
 <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#161922] border border-white/10 mb-6">
 <span className="inline-block w-2 h-2 rounded-full bg-[#ECC1FF] animate-pulse" />
 <span className="text-[#ECC1FF] text-xs font-semibold ">
 Fresh stuff, just landed
 </span>
 </div>

 <h1 className="text-white">
 Nice things, <span className="text-[#ECC1FF]">fair prices</span>.
 </h1>

 <p className="hero-description text-[#a79c92] text-lg">
 Shopping online without the headache. Find something you like, pay for it, done — no weird dance required.
 </p>

 <div className="hero-actions flex-wrap gap-4 pt-2">
 <Link className="button button-accent !text-sm !py-3.5 !px-7 font-bold" to="/signup">
 Let’s shop <span aria-hidden="true">→</span>
 </Link>
 <Link className="button button-dark !text-sm !py-3.5 !px-6" to="/login">
 Where are my orders?
 </Link>
 </div>

 {/* Quick Metrics Ticker */}
 <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10 max-w-lg">
 <div>
 <p className="font-display text-2xl font-bold text-white">100%</p>
 <p className="text-[11px] text-[#a79c92] mt-1">Real stuff</p>
 </div>
 <div>
 <p className="font-display text-2xl font-bold text-[#ECC1FF]">24H</p>
 <p className="text-[11px] text-[#a79c92] mt-1">Out the door fast</p>
 </div>
 <div>
 <p className="font-display text-2xl font-bold text-white">4.9★</p>
 <p className="text-[11px] text-[#a79c92] mt-1">Happy shoppers</p>
 </div>
 </div>
 </div>

 {/* Visual Showcase Stage */}
 <div className="hero-panel" aria-label="Featured shopping deal">
 <div className="panel-topline">
 <span className="text-white/60 text-[11px] ">Staff pick</span>
 <span className="live-dot text-xs font-bold bg-[#ECC1FF]/10 border border-[#ECC1FF]/30 px-2.5 py-0.5 rounded-full">
 ● In stock
 </span>
 </div>

 <div className="product-art product-art-large relative overflow-hidden group">
 <img 
 src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" 
 alt="Flagship Headphone Drop" 
 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#151210] via-[#151210]/40 to-transparent z-10" />
 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#ECC1FF]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ECC1FF]/25 transition-all" />
 
 <div className="relative z-20 flex justify-between w-full items-end p-2">
 <div>
 <span className="text-xs text-[#ECC1FF]">Audio</span>
 <p className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">ANC Wireless Series</p>
 </div>
 <strong className="text-white/30 text-4xl sm:text-5xl font-bold tracking-tighter">
 NX-01
 </strong>
 </div>
 </div>

 <div className="product-hero-info items-center">
 <div>
 <p className="text-white font-display text-lg sm:text-xl font-bold">Noise Cancelling Wireless Headphones</p>
 <strong className="text-[#ECC1FF] text-base font-semibold">₹6,999 · 22 Units In Stock</strong>
 </div>
 <Link to="/signup" className="round-arrow" aria-label="Shop featured item">
 ↗
 </Link>
 </div>

 <div className="panel-stat-row">
 <div>
 <strong>Ships</strong>
 <span>Dispatch</span>
 </div>
 <div>
 <strong>Razorpay</strong>
 <span>Secure Pay</span>
 </div>
 <div>
 <strong>30 Days</strong>
 <span>Easy Returns</span>
 </div>
 </div>
 </div>
 </section>

 {/* Editorial Category Strip */}
 <section className="max-w-7xl mx-auto px-8 py-14">
 <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
 <div>
 <p className="eyebrow">Browse</p>
 <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">Popular right now</h2>
 </div>
 <Link to="/signup" className="text-xs font-bold text-[#ECC1FF] hover:underline flex items-center gap-1">
 See everything <span>→</span>
 </Link>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { title: 'Electronics', count: 'Latest Tech', tag: '01', accent: 'border-l-2 border-[#ECC1FF]' },
 { title: 'Fashion', count: 'Street & Formal', tag: '02', accent: 'border-l-2 border-[#6366f1]' },
 { title: 'Home & Living', count: 'Modern Spaces', tag: '03', accent: 'border-l-2 border-[#00d2ff]' },
 { title: 'Beauty & Care', count: 'Daily Essentials', tag: '04', accent: 'border-l-2 border-[#ff3366]' },
 ].map((cat) => (
 <Link 
 key={cat.tag} 
 to="/signup" 
 className={`p-5 rounded-xl bg-[#14171f] border border-white/10 hover:border-white/20 hover:bg-[#1a1e28] transition-all group ${cat.accent}`}
 >
 <span className="text-[10px] text-[#a79c92] group-hover:text-[#ECC1FF] transition-colors">
 {cat.tag}
 </span>
 <h3 className="font-display text-lg font-bold text-white mt-1 group-hover:translate-x-0.5 transition-transform">
 {cat.title}
 </h3>
 <p className="text-xs text-[#a79c92] mt-1 ">{cat.count}</p>
 </Link>
 ))}
 </div>
 </section>

 {/* Feature Value Props / Guarantees */}
 <section className="landing-footnote shop-feature-row">
 <div>
 <span>01</span>
 <div>
 <p className="text-white font-bold text-sm">Fast delivery, no drama</p>
 <p className="text-[#a79c92] text-xs font-normal mt-0.5">Packed properly and sent out quick.</p>
 </div>
 </div>
 <div>
 <span>02</span>
 <div>
 <p className="text-white font-bold text-sm">Pay however you like</p>
 <p className="text-[#a79c92] text-xs font-normal mt-0.5">Cards, UPI, netbanking — all spot on.</p>
 </div>
 </div>
 <div>
 <span>03</span>
 <div>
 <p className="text-white font-bold text-sm">30 days to change your mind</p>
 <p className="text-[#a79c92] text-xs font-normal mt-0.5">Send it back, no awkward questions.</p>
 </div>
 </div>
 </section>

 {/* Footer Branding */}
 <footer className="max-w-7xl mx-auto px-8 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a79c92]">
 <div className="flex items-center gap-3">
 <span className="text-white font-bold font-display text-sm">Big Bucks</span>
 <span>© 2026. All rights reserved.</span>
 </div>
 <div className="flex items-center gap-6">
 <Link to="/login" className="hover:text-white transition-colors">Sign In</Link>
 <Link to="/signup" className="hover:text-[#ECC1FF] transition-colors">Create Account</Link>
 <span className="text-[#ECC1FF]">● We’re open</span>
 </div>
 </footer>
 </main>
 )
}

export default Landing
