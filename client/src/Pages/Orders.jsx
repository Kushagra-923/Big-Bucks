import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../axiosCalls/axios.js'

function formatPrice(price) {
 return `₹${Number(price).toLocaleString('en-IN')}`
}

function formatDate(date) {
 return new Date(date).toLocaleDateString('en-IN', {
 day: 'numeric',
 month: 'short',
 year: 'numeric',
 })
}

function Orders() {
 const [orders, setOrders] = useState([])
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState('')

 const loadOrders = useCallback(async () => {
 try {
 setLoading(true)
 setError('')
 const response = await axiosInstance.get('/orders')
 setOrders(response.data.orders || [])
 } catch (requestError) {
 setError(requestError.response?.data?.message || 'Couldn’t load your orders. Try again in a sec.')
 } finally {
 setLoading(false)
 }
 }, [])

 useEffect(() => {
 loadOrders()
 }, [loadOrders])

 return (
 <main className="min-h-screen bg-[#151210] text-[#f7f3ef]">
 {/* Navigation */}
 <nav className="site-nav" aria-label="Orders navigation">
 <Link className="brand" to="/home" aria-label="Back to Big Bucks home">
 <span className="brand-mark">B</span>
 <span>Big Bucks</span>
 </Link>
 <div className="nav-actions">
 <Link className="nav-link" to="/products">Shop</Link>
 <Link className="nav-link" to="/cart">Cart</Link>
 <Link className="nav-link" to="/profile">Account</Link>
 </div>
 </nav>

 {/* Main Orders Content */}
 <section className="orders-content max-w-7xl mx-auto px-6 sm:px-8 py-10">
 <div className="home-heading mb-8">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-white/10 mb-4">
 <span className="w-2 h-2 rounded-full bg-[#ECC1FF] animate-pulse" />
 <span className="text-[#ECC1FF] text-xs font-semibold">
 Everything you’ve bought
 </span>
 </div>
 <h1>
 Your <span className="text-[#ECC1FF]">orders.</span>
 </h1>
 <p className="text-[#a79c92] text-base">
 Everything you’ve ordered, when you ordered it, and what it cost.
 </p>
 </div>

 {loading && (
 <div className="orders-state">
 <div className="w-8 h-8 border-2 border-[#ECC1FF] border-t-transparent rounded-full animate-spin" />
 <span>Digging up your orders...</span>
 </div>
 )}

 {!loading && error && (
 <div className="orders-state orders-state-error" role="alert">
 <p className="font-bold">{error}</p>
 <button className="button button-accent mt-2" type="button" onClick={loadOrders}>
 Try again
 </button>
 </div>
 )}

 {!loading && !error && orders.length === 0 && (
 <div className="orders-empty p-12 text-center rounded-2xl bg-[#141720] border border-white/10 max-w-2xl mx-auto">
 <span className="text-5xl text-[#ECC1FF] mb-4 block" aria-hidden="true">
 📦
 </span>
 <h2 className="font-display text-2xl font-bold text-white mb-2">
 No orders yet
 </h2>
 <p className="text-[#a79c92] text-sm mb-6 max-w-md mx-auto">
 Nothing here yet. Go find something you like.
 </p>
 <Link className="button button-accent" to="/products">
 Start Shopping <span aria-hidden="true">→</span>
 </Link>
 </div>
 )}

 {!loading && !error && orders.length > 0 && (
 <div className="orders-list">
 {orders.map((order) => {
 const statusClass =
 order.status === 'PAID'
 ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
 : order.status === 'PENDING_PAYMENT'
 ? 'border-amber-500/30 bg-amber-500/10 text-amber-400'
 : 'border-[#ECC1FF]/30 bg-[#ECC1FF]/10 text-[#ECC1FF]'

 return (
 <article className="order-card" key={order._id}>
 <div className="order-card-heading flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <div>
 <p className="eyebrow !text-xs !mb-1 text-[#a79c92]">
 Ordered {formatDate(order.createdAt)}
 </p>
 <h2 className=" text-lg font-bold text-white">
 Order #{order._id}
 </h2>
 </div>
 <span className={`order-status ${statusClass}`}>
 ● {order.status.replaceAll('_', ' ')}
 </span>
 </div>

 <div className="order-card-items">
 {order.items.map((item, index) => (
 <div className="flex items-center justify-between text-sm py-1" key={`${item.product}-${index}`}>
 <span className="text-white font-medium">{item.name}</span>
 <span className="text-[#a79c92] ">Qty: {item.quantity}</span>
 </div>
 ))}
 </div>

 <div className="order-card-footer flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
 <div className="flex items-center gap-6">
 <span>
 <span className="text-[10px] text-[#a79c92] block">Total</span>
 <strong className="text-[#ECC1FF] text-base ">{formatPrice(order.totalAmount)}</strong>
 </span>
 <span>
 <span className="text-[10px] text-[#a79c92] block">PAYMENT</span>
 <strong className="text-white text-sm ">{order.paymentStatus}</strong>
 </span>
 </div>

 <Link className="button button-dark !py-2.5 !px-5 !text-xs" to={`/orders/${order._id}`}>
 View Details <span aria-hidden="true">→</span>
 </Link>
 </div>
 </article>
 )
 })}
 </div>
 )}
 </section>
 </main>
 )
}

export default Orders
