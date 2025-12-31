'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronRight, Star, Shield, Truck, Headphones, Package, TrendingUp, Users, Target } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              <Link href="/" className="text-blue-600 font-medium hover:text-blue-700 transition">Beranda</Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition">Produk</Link>
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
                <Link href="/" className="text-blue-600 font-medium">Beranda</Link>
                <Link href="/products" className="text-gray-700">Produk</Link>
                <Link href="/services" className="text-gray-700">Layanan</Link>
                <Link href="/about" className="text-gray-700">Tentang</Link>
                <Link href="/contact" className="text-gray-700">Kontak</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Trusted Office Solutions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Solusi Mesin Kantor 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Terlengkap & Terpercaya
                </span>
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                CV PELOPOR JAYA BERSAMA menyediakan berbagai macam mesin kantor berkualitas tinggi dengan harga terjangkau. Dapatkan solusi terbaik untuk kebutuhan kantor Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
                  Lihat Katalog Produk
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                  Konsultasi Gratis
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-blue-100">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-blue-100">Tipe Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-blue-100">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">Meta Ads Integration</h3>
                  <p className="text-center text-blue-100">Promosikan bisnis Anda dengan solusi digital marketing terintegrasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CV PELOPOR JAYA BERSAMA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan produk berkualitas dan layanan terbaik untuk kesuksesan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Bergaransi Resmi</h3>
              <p className="text-gray-600">Semua produk yang kami jual dilengkapi garansi resmi dari produsen</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pengiriman produk ke seluruh Indonesia dengan aman dan tepat waktu</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Support 24/7</h3>
              <p className="text-gray-600">Tim support kami siap membantu Anda kapan saja dibutuhkan</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Harga Kompetitif</h3>
              <p className="text-gray-600">Dapatkan produk berkualitas dengan harga terbaik di pasaran</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Produk Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai macam mesin kantor untuk meningkatkan produktivitas bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Mesin Fotocopy', desc: 'Berbagai tipe mesin fotocopy digital untuk kebutuhan perkantoran', icon: '📠', color: 'from-blue-500 to-blue-600' },
              { name: 'Mesin Cetak', desc: 'Printer dan mesin printing berkualitas tinggi', icon: '🖨️', color: 'from-purple-500 to-purple-600' },
              { name: 'Mesin Jilid', desc: 'Solusi lengkap untuk kebutuhan binding dan finishing', icon: '📚', color: 'from-green-500 to-green-600' },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center text-6xl group-hover:scale-110 transition`}>
                  {product.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center group">
                    Lihat Detail <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                Lihat Semua Produk
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Meningkatkan Efisiensi Kantor Anda?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Konsultasikan kebutuhan mesin kantor Anda dengan tim ahli kami dan dapatkan solusi terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
                Hubungi Kami Sekarang
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Pelajari Layanan Kami
              </button>
            </Link>
          </div>
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