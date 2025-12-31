'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Send, Clock, MessageSquare, User, Building, FileText, ChevronRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon',
      content: '085285703497',
      description: 'Senin - Sabtu, 08:00 - 17:00',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@pelojorjaya.com',
      description: 'Respon dalam 24 jam',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat',
      content: 'Jl. Ahmad Yani No. 83, Batang Beruh',
      description: 'Sidikalang, Dairi, Sumatera Utara',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 08:00 - 17:00',
      description: 'Sabtu: 08:00 - 14:00',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const faqs = [
    {
      question: 'Apakah produk yang dijual bergaransi?',
      answer: 'Ya, semua produk yang kami jual dilengkapi garansi resmi dari produsen.'
    },
    {
      question: 'Bagaimana cara pengirimannya?',
      answer: 'Kami melayani pengiriman ke seluruh Indonesia dengan packing yang aman dan asuransi.'
    },
    {
      question: 'Apakah ada layanan purnajual?',
      answer: 'Ya, kami menyediakan layanan purnajual termasuk instalasi dan maintenance.'
    },
    {
      question: 'Apakah melayani pembelian kredit?',
      answer: 'Ya, kami bekerja sama dengan beberapa leasing untuk pembelian kredit.'
    }
  ]

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
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition">Produk</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">Layanan</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">Tentang</Link>
              <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-700 transition">Kontak</Link>
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
                <Link href="/products" className="text-gray-700">Produk</Link>
                <Link href="/services" className="text-gray-700">Layanan</Link>
                <Link href="/about" className="text-gray-700">Tentang</Link>
                <Link href="/contact" className="text-blue-600 font-medium">Kontak</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Tim Siap Membantu Anda
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Ada pertanyaan tentang produk mesin kantor? Butuh konsultasi? 
              Tim profesional kami siap membantu Anda menemukan solusi terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Kirim Pesan kepada Kami
              </h2>
              
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telepon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="08123456789"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Perusahaan
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="PT. Example"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    >
                      <option value="">Pilih Subjek</option>
                      <option value="produk">Informasi Produk</option>
                      <option value="harga">Permintaan Harga</option>
                      <option value="konsultasi">Konsultasi Teknis</option>
                      <option value="layanan">Layanan Purnajual</option>
                      <option value="kerjasama">Kerjasama Bisnis</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tuliskan pesan Anda di sini..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Lokasi Kami
              </h2>
              
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center mb-8">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Peta Lokasi</p>
                  <p className="text-sm text-gray-600 mt-2">Sidikalang, Dairi, Sumatera Utara</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Informasi Penting</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Konsultasi Gratis</h4>
                      <p className="text-gray-600 text-sm">Dapatkan konsultasi gratis untuk pemilihan mesin kantor yang tepat</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Demo Produk</h4>
                      <p className="text-gray-600 text-sm">Ajukan demo produk untuk melihat performa mesin langsung</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Support 24/7</h4>
                      <p className="text-gray-600 text-sm">Tim support siap membantu kapan saja Anda membutuhkan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Butuh Bantuan Segera?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Hubungi tim customer service kami untuk respon cepat dan solusi terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:085285703497" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                085285703497
              </a>
              <a href="mailto:info@pelojorjaya.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                info@pelojorjaya.com
              </a>
            </div>
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