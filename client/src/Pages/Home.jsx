import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import WishlistNavLink from '../components/WishlistNavLink.jsx'
import CartNavLink from '../components/CartNavLink.jsx'

function Home() {
 const navigate = useNavigate()
 const { user, logout } = useAuth()

 const handleLogout = async () => {
 await logout()
 navigate('/login', { replace: true })
 }

 const userInitial = user?.fullName?.charAt(0)?.toUpperCase() || 'B'
 const firstName = user?.fullName?.split(' ')[0] || 'Shopper'

 return (
 <main className="home-page min-h-screen bg-[#151210] text-[#f7f3ef]">
 {/* Navigation */}
 <nav className="site-nav" aria-label="Account navigation">
 <Link className="brand" to="/home" aria-label="Big Bucks dashboard">
 <span className="brand-mark">B</span>
 <span>Big Bucks</span>
 </Link>
 
 <div className="market-search" role="search">
 <span aria-hidden="true">⌕</span>
 <span>What are you after?</span>
 </div>

 <div className="nav-actions">
 <Link className="nav-link" to="/products">Shop</Link>
 <WishlistNavLink />
 <CartNavLink />
 <Link className="nav-link" to="/orders">Orders</Link>
 <Link className="nav-link" to="/profile">Account</Link>
 <button className="nav-link logout-button text-[#ff4d6d] hover:text-[#ff3366]" type="button" onClick={handleLogout}>
 Log out
 </button>
 </div>
 </nav>

 {/* Main Customer Dashboard Content */}
 <section className="home-content">
 {/* Welcome Header */}
 <div className="home-heading">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-white/10 mb-4">
 <span className="w-2 h-2 rounded-full bg-[#ECC1FF] animate-pulse" />
 <span className="text-[#ECC1FF] text-xs font-semibold">
 You’re all set
 </span>
 </div>
 <h1>
 Welcome back, <span className="text-[#ECC1FF]">{firstName}.</span>
 </h1>
 <p className="text-[#a79c92] text-base">
 Everything’s in one place — your orders, the stuff you’ve saved, and where it all’s going.
 </p>
 </div>

 {/* Discovery Marquee Banner */}
 <div className="shop-discovery-banner mt-10">
 <div className="relative z-10 max-w-xl">
 <p className="eyebrow flex items-center gap-2">
 <span className="w-1.5 h-1.5 rounded-full bg-[#ECC1FF]" />
 New in
 </p>
 <h2>Have a proper look around.</h2>
 <p className="text-[#a79c92] mt-2">
 Tech, clothes, home bits, you name it. Filter by whatever you fancy.
 </p>
 <div className="mt-6 flex items-center gap-4">
 <Link className="button button-accent !text-sm !py-3 !px-6" to="/products">
 Browse everything <span aria-hidden="true">→</span>
 </Link>
 <Link className="button button-dark !text-sm !py-3 !px-5" to="/orders">
 My orders
 </Link>
 </div>
 </div>
 <div className="hidden lg:flex flex-col gap-3 p-5 bg-[#141720]/80 rounded-2xl border border-white/10 min-w-[280px]">
 <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10">
 <span className="text-[#a79c92]">Popular</span>
 <span className="text-[#ECC1FF]">In stock</span>
 </div>
 <Link to="/products" className="flex items-center gap-3 p-2 rounded-lg bg-[#1a1e28] hover:bg-[#222836] transition-colors">
 <img 
 src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=200&q=80" 
 alt="Mechanical Keyboard" 
 className="w-10 h-10 rounded-md object-cover" 
 />
 <div>
 <p className="text-xs font-bold text-white">Mechanical Keyboard</p>
 <p className="text-[10px] text-[#ECC1FF]">₹3,499</p>
 </div>
 </Link>
 <Link to="/products" className="flex items-center gap-3 p-2 rounded-lg bg-[#1a1e28] hover:bg-[#222836] transition-colors">
 <img 
 src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80" 
 alt="Fitness Watch" 
 className="w-10 h-10 rounded-md object-cover" 
 />
 <div>
 <p className="text-xs font-bold text-white">Smart Fitness Watch</p>
 <p className="text-[10px] text-[#ECC1FF]">₹4,299</p>
 </div>
 </Link>
 </div>
 </div>

 {/* Account stuff Cards */}
 <div className="account-grid shop-account-grid mt-10">
 <article className="account-card bg-[#141720] border border-white/10 hover:border-white/20 transition-all">
 <div className="card-label flex items-center justify-between">
 <span><span className="card-number text-[#ECC1FF]">01 //</span> Your details</span>
 <span className="text-[10px] text-[#a79c92]">Saved</span>
 </div>
 
 <Link className="profile-row group" to="/profile">
 <span className="profile-avatar group-hover:scale-105 transition-transform">
 {userInitial}
 </span>
 <div>
 <h2 className="group-hover:text-[#ECC1FF] transition-colors">{user?.fullName || 'Big Bucks Customer'}</h2>
 <p className="text-[#a79c92] text-xs">{user?.email || 'No email provided'}</p>
 </div>
 </Link>

 <div className="card-detail">
 <span>Registered Phone</span>
 <strong className="text-white">{user?.phone || 'Not provided'}</strong>
 </div>
 </article>

 <article className="account-card account-card-secondary bg-[#141720] border border-white/10 hover:border-white/20 transition-all">
 <div className="card-label flex items-center justify-between">
 <span><span className="card-number text-[#ECC1FF]">02 //</span> Your orders</span>
 <span className="text-[10px] text-[#ECC1FF]">We read these</span>
 </div>
 
 <div className="status-icon" aria-hidden="true">
 ↗
 </div>
 <h2>Where’s my stuff?</h2>
 <p className="text-[#a79c92]">
 See what you’ve ordered and where it got to. Changed your mind? Send it back, no hard feelings.
 </p>
 
 <Link className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ECC1FF] hover:underline mt-6" to="/orders">
 See my orders <span aria-hidden="true">→</span>
 </Link>
 </article>
 </div>
 </section>
 </main>
 )
}

export default Home
