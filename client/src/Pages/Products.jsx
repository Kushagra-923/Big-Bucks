import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { fetchProducts } from '../axiosCalls/productApi.js'
import { fetchWishlist } from '../axiosCalls/wishlistApi.js'
import WishlistNavLink from '../components/WishlistNavLink.jsx'
import CartNavLink from '../components/CartNavLink.jsx'

function Products() {
 const [products, setProducts] = useState([])
 const [search, setSearch] = useState('')
 const [category, setCategory] = useState('All Categories')
 const [sort, setSort] = useState('')
 const [debouncedSearch, setDebouncedSearch] = useState('')
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState('')
 const [wishlistIds, setWishlistIds] = useState(() => new Set())

 useEffect(() => {
 let active = true
 fetchWishlist()
 .then(({ wishlist = [] }) => {
 if (active) setWishlistIds(new Set(wishlist.map((product) => product._id)))
 })
 .catch(() => {})

 return () => {
 active = false
 }
 }, [])

 const handleWishlistChange = (productId, saved) => {
 setWishlistIds((currentIds) => {
 const nextIds = new Set(currentIds)
 if (saved) nextIds.add(productId)
 else nextIds.delete(productId)
 return nextIds
 })
 }

 useEffect(() => {
 const timer = setTimeout(() => setDebouncedSearch(search), 350)
 return () => clearTimeout(timer)
 }, [search])

 const loadProducts = async () => {
 try {
 setLoading(true)
 setError('')
 const response = await fetchProducts({ search: debouncedSearch, category, sort })
 setProducts(response.products || [])
 } catch {
 setError('Couldn’t load the products. Give it another go.')
 } finally {
 setLoading(false)
 }
 }

 useEffect(() => {
 loadProducts()
 }, [debouncedSearch, category, sort])

 const resetFilters = () => {
 setSearch('')
 setCategory('All Categories')
 setSort('')
 }

 return (
 <main className="catalog-page min-h-screen bg-[#151210] text-[#f7f3ef]">
 {/* Navigation */}
 <nav className="site-nav" aria-label="Catalog navigation">
 <Link className="brand" to="/home" aria-label="Back to Big Bucks home">
 <span className="brand-mark">B</span>
 <span>Big Bucks</span>
 </Link>
 <div className="nav-actions">
 <Link className="nav-link !text-[#ECC1FF]" to="/products">Shop</Link>
 <WishlistNavLink />
 <CartNavLink />
 <Link className="nav-link" to="/orders">Orders</Link>
 <Link className="nav-link" to="/profile">Account</Link>
 </div>
 </nav>

 {/* Main Shop Section */}
 <section className="catalog-content">
 <div className="home-heading flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
 <div>
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-white/10 mb-4">
 <span className="w-2 h-2 rounded-full bg-[#ECC1FF] animate-pulse" />
 <span className="text-[#ECC1FF] text-xs font-semibold">
 Browse
 </span>
 </div>
 <h1>
 Everything <span className="text-[#ECC1FF]">in stock.</span>
 </h1>
 <p className="text-[#a79c92] text-base max-w-xl">
 All the gear, tech, and everyday bits — with honest prices and stock counts you can actually trust.
 </p>
 </div>

 {!loading && !error && (
 <div className=" text-xs text-[#a79c92] bg-[#141720] border border-white/10 px-4 py-2.5 rounded-xl self-start md:self-auto">
 Showing <strong className="text-[#ECC1FF]">{products.length}</strong> things
 </div>
 )}
 </div>

 {/* Command Search and Filter Bar */}
 <SearchBar
 search={search}
 setSearch={setSearch}
 category={category}
 setCategory={setCategory}
 sort={sort}
 setSort={setSort}
 onReset={resetFilters}
 />

 {/* Loading Skeletons */}
 {loading && (
 <div className="catalog-grid">
 {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
 <div key={index} className="catalog-product-card p-4 animate-pulse">
 <div className="h-56 bg-[#1a1e27] rounded-xl mb-4" />
 <div className="h-4 bg-[#1a1e27] rounded w-1/3 mb-2" />
 <div className="h-6 bg-[#1a1e27] rounded w-3/4 mb-3" />
 <div className="h-10 bg-[#1a1e27] rounded mb-4" />
 <div className="h-10 bg-[#1a1e27] rounded" />
 </div>
 ))}
 </div>
 )}

 {/* Error State */}
 {!loading && error && (
 <div className="catalog-state catalog-error">
 <span className="text-base font-bold">! {error}</span>
 <button type="button" className="catalog-retry mt-2" onClick={loadProducts}>
 Retry request
 </button>
 </div>
 )}

 {/* Empty State */}
 {!loading && !error && products.length === 0 && (
 <div className="catalog-state">
 <span className="text-4xl text-[#a79c92] mb-1">⌕</span>
 <span className="text-white font-display text-xl font-bold">Nothing matched that.</span>
 <p className="text-xs text-[#a79c92]">Try a shorter search, or drop a filter or two.</p>
 <button type="button" className="catalog-reset mt-2" onClick={resetFilters}>
 Clear the filters
 </button>
 </div>
 )}

 {/* Product Grid */}
 {!loading && !error && products.length > 0 && (
 <div className="catalog-grid">
 {products.map((product) => (
 <ProductCard
 key={product._id}
 product={product}
 isWishlisted={wishlistIds.has(product._id)}
 onWishlistChange={handleWishlistChange}
 />
 ))}
 </div>
 )}
 </section>
 </main>
 )
}

export default Products