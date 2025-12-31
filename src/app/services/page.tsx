'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Target, TrendingUp, Users, BarChart3, Zap, Globe, Smartphone, Megaphone, Search, DollarSign, Eye, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Meta Ads Campaign",
      description: "Strategi iklan Facebook & Instagram yang terukur untuk meningkatkan penjualan produk mesin kantor",
      features: ["Target Audience Precision", "A/B Testing", "ROI Optimization", "Campaign Analytics"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Google Ads",
      description: "Optimasi mesin pencari dan iklan Google untuk mendapatkan calon pembeli berkualitas",
      features: ["Keyword Research", "On-Page SEO", "Google Ads Management", "Local SEO"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Pengelolaan konten social media untuk membangun brand awareness dan engagement",
      features: ["Content Creation", "Community Management", "Social Analytics", "Brand Monitoring"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "WhatsApp Business API",
      description: "Automasi customer service dan follow-up pelanggan melalui WhatsApp",
      features: ["Chatbot Integration", "Broadcast Messages", "Customer Support", "Lead Nurturing"],
      color: "from-teal-500 to-blue-600"
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeting Tepat Sasaran",
      description: "Fokus pada B2B dan kantor yang membutuhkan mesin kantor"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI Terukur",
      description: "Laporan detail performa iklan dan konversi penjualan"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Quality",
      description: "Mendapatkan calon pembeli yang serius dan berkualitas"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven Strategy",
      description: "Keputusan marketing berdasarkan data dan analisis"
    }
  ]

  const process = [
    { step: 1, title: "Audit & Research", description: "Analisis pasar dan kompetitor mesin kantor" },
    { step: 2, title: "Strategy Planning", description: "Perencanaan kampanye Meta Ads yang efektif" },
    { step: 3, title: "Campaign Setup", description: "Setup dan konfigurasi iklan profesional" },
    { step: 4, title: "Optimization", description: "Optimasi berkelanjutan untuk hasil maksimal" },
    { step: 5, title: "Reporting", description: "Laporan performa dan insight bisnis" }
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
              <Link href="/services" className="text-blue-600 font-medium hover:text-blue-700 transition">Layanan</Link>
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
                <Link href="/products" className="text-gray-700">Produk</Link>
                <Link href="/services" className="text-blue-600 font-medium">Layanan</Link>
                <Link href="/about" className="text-gray-700">Tentang</Link>
                <Link href="/contact" className="text-gray-700">Kontak</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Digital Marketing Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Meta Ads & Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Marketing Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Tingkatkan penjualan mesin kantor Anda dengan strategi digital marketing terintegrasi. 
              Kami spesialis dalam Meta Ads untuk industri mesin kantor di Indonesia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
                Konsultasi Gratis
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Lihat Portfolio
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">500%</div>
                <div className="text-sm text-blue-100">ROI Rata-rata</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-100">Klien Puas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-sm text-blue-100">Campaign Sukses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">5+</div>
                <div className="text-sm text-blue-100">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Layanan Digital Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Khusus Industri Mesin Kantor
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi komprehensif untuk meningkatkan visibilitas dan penjualan produk mesin kantor Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                    Pelajari Lebih Lanjut 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Mengapa Memilih Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat kami berbeda dalam membantu kesuksesan bisnis mesin kantor Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Proses Kerja Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Langkah sistematis untuk mencapai hasil maksimal dalam campaign Meta Ads Anda
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {process.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                  <div className="md:w-1/2">
                    <div className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} md:max-w-md`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-12 h-12 bg-white border-4 border-blue-600 rounded-full"></div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meta Ads Special Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meta Ads Specialist
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Untuk Mesin Kantor
                </span>
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Kami memahami karakteristik pasar mesin kantor di Indonesia. 
                Target audience yang tepat, copywriting yang efektif, dan optimasi campaign yang berkelanjutan.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Eye className="w-6 h-6 mr-3" />
                  <span>Brand Awareness hingga 300%</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 mr-3" />
                  <span>Cost per Lead yang efisien</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  <span>Quick Response & Support 24/7</span>
                </div>
              </div>
              
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
                  Mulai Campaign Sekarang
                </button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2.5M</div>
                      <div className="text-sm text-blue-100">Reach per Bulan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">85%</div>
                      <div className="text-sm text-blue-100">Engagement Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">450+</div>
                      <div className="text-sm text-blue-100">Leads per Bulan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">12%</div>
                      <div className="text-sm text-blue-100">Conversion Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Meningkatkan Penjualan Mesin Kantor Anda?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Konsultasikan kebutuhan digital marketing Anda dengan tim ahli Meta Ads kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                Jadwalkan Konsultasi
              </button>
            </Link>
            <Link href="/products">
              <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition">
                Lihat Produk Kami
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