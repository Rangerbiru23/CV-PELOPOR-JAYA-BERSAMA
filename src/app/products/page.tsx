'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Search, Filter, Star, ShoppingCart, Heart, ChevronRight, Package, Truck, Shield, Headphones } from 'lucide-react'
import Link from 'next/link'

export default function Products() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'fotocopy', name: 'Mesin Fotocopy' },
    { id: 'printer', name: 'Printer' },
    { id: 'jilid', name: 'Mesin Jilid' },
    { id: 'scanner', name: 'Scanner' },
    { id: 'lainnya', name: 'Lainnya' }
  ]

  const products = [
    {
      id: 1,
      name: 'Mesin Fotocopy Canon iR 2525',
      category: 'fotocopy',
      price: 'Rp 15.500.000',
      rating: 4.8,
      reviews: 124,
      image: '📠',
      description: 'Mesin fotocopy digital multifungsi dengan kecepatan 25 lembar/menit',
      features: ['Print, Copy, Scan', 'Network Ready', 'Duplex Printing']
    },
    {
      id: 2,
      name: 'Mesin Fotocopy Toshiba e-STUDIO 2303A',
      category: 'fotocopy',
      price: 'Rp 18.900.000',
      rating: 4.9,
      reviews: 89,
      image: '📠',
      description: 'Mesin fotocopy analog dengan kualitas cetak yang excellent',
      features: ['High Speed Copy', 'Energy Saving', 'Easy Maintenance']
    },
    {
      id: 3,
      name: 'Printer HP LaserJet Pro M404n',
      category: 'printer',
      price: 'Rp 4.250.000',
      rating: 4.7,
      reviews: 156,
      image: '🖨️',
      description: 'Printer laser monokrom dengan kecepatan tinggi untuk kantor',
      features: ['Fast Printing', 'Network Connectivity', 'Mobile Printing']
    },
    {
      id: 4,
      name: 'Printer Epson L3150',
      category: 'printer',
      price: 'Rp 2.850.000',
      rating: 4.6,
      reviews: 203,
      image: '🖨️',
      description: 'Printer inkjet tank system dengan efisiensi tinggi',
      features: ['Tank System', 'Wi-Fi connectivity', 'Mobile Print']
    },
    {
      id: 5,
      name: 'Mesin Jilid GEMET 21',
      category: 'jilid',
      price: 'Rp 3.200.000',
      rating: 4.5,
      reviews: 67,
      image: '📚',
      description: 'Mesin jilid spiral untuk kebutuhan kantor dan percetakan',
      features: ['Electric Punch', 'Adjustable Margin', 'High Capacity']
    },
    {
      id: 6,
      name: 'Mesin Jilid Cover 450',
      category: 'jilid',
      price: 'Rp 8.900.000',
      rating: 4.8,
      reviews: 45,
      image: '📚',
      description: 'Mesin jilid cover hard cover profesional',
      features: ['Hard Cover Binding', 'Temperature Control', 'Digital Display']
    },
    {
      id: 7,
      name: 'Scanner Canon CanoScan LiDE 400',
      category: 'scanner',
      price: 'Rp 1.450.000',
      rating: 4.4,
      reviews: 92,
      image: '📷',
      description: 'Scanner flatbed compact dengan kualitas scan tinggi',
      features: ['High Resolution', 'Auto Scan Mode', 'USB Powered']
    },
    {
      id: 8,
      name: 'Scanner Epson Perfection V39',
      category: 'scanner',
      price: 'Rp 1.750.000',
      rating: 4.6,
      reviews: 78,
      image: '📷',
      description: 'Scanner photo dan dokumen dengan hasil detail',
      features: ['Photo Restoration', 'One Touch Scanning', 'LED Light Source']
    },
    {
      id: 9,
      name: 'Mesin Penghancur Kertas Secure',
      category: 'lainnya',
      price: 'Rp 2.100.000',
      rating: 4.7,
      reviews: 134,
      image: '🗑️',
      description: 'Paper shredder untuk keamanan dokumen kantor',
      features: ['Cross Cut', 'Auto Start/Stop', 'Safety Lock']
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PJB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CV PELOPOR JAYA BERSAMA
                </h1>
                <p className="text-xs text-gray-600">Perdagangan Eceran Mesin Kantor</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Beranda</Link>
              <Link href="/products" className="text-blue-600 font-medium hover:text-blue-700 transition">Produk</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">Layanan</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">Tentang</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Kontak</Link>
            </nav>

            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t">
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-700">Beranda</Link>
                <Link href="/products" className="text-blue-600 font-medium">Produk</Link>
                <Link href="/services" className="text-gray-700">Layanan</Link>
                <Link href="/about" className="text-gray-700">Tentang</Link>
                <Link href="/contact" className="text-gray-700">Kontak</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Katalog Produk
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Mesin Kantor Terlengkap
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Temukan berbagai macam mesin kantor berkualitas tinggi untuk meningkatkan produktivitas bisnis Anda
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari produk yang Anda butuhkan..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                    {product.image}
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-50 transition">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} ulasan)
                    </span>
                  </div>

                  <div className="mb-4">
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Beli Sekarang
                    </button>
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Produk tidak ditemukan</h3>
              <p className="text-gray-600">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Mengapa Beli di <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CV PELOPOR JAYA BERSAMA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Garansi Resmi</h3>
              <p className="text-gray-600">Semua produk dilengkapi garansi resmi dari produsen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pengiriman Aman</h3>
              <p className="text-gray-600">Pengiriman ke seluruh Indonesia dengan packing yang aman</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Support Teknis</h3>
              <p className="text-gray-600">Tim teknisi siap membantu instalasi dan troubleshooting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Butuh Bantuan Memilih Produk?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Tim ahli kami siap membantu Anda menemukan mesin kantor yang tepat
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
              Konsultasi Gratis
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PJB</span>
                </div>
                <div>
                  <h3 className="font-bold">CV PELOPOR JAYA BERSAMA</h3>
                  <p className="text-xs text-gray-400">Perdagangan Eceran Mesin Kantor</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Solusi terpercaya untuk kebutuhan mesin kantor berkualitas tinggi.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition">Beranda</Link></li>
                <li><Link href="/products" className="hover:text-white transition">Produk</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Layanan</Link></li>
                <li><Link href="/about" className="hover:text-white transition">Tentang Kami</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  085285703497
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@pelojorjaya.com
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                  Jl. Ahmad Yani No. 83, Batang Beruh, Sidikalang, Dairi
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CV PELOPOR JAYA BERSAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}