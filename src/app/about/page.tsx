'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Users, Award, Target, Clock, CheckCircle, Building, Calendar, TrendingUp, Handshake, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const timeline = [
    {
      year: '2014',
      title: 'Didirikan',
      description: 'CV PELOPOR JAYA BERSAMA didirikan dengan fokus pada perdagangan mesin kantor'
    },
    {
      year: '2016',
      title: 'Ekspansi Produk',
      description: 'Menambah berbagai macam merek dan tipe mesin kantor berkualitas'
    },
    {
      year: '2018',
      title: 'Digital Transformation',
      description: 'Memulai integrasi teknologi digital dalam pemasaran dan penjualan'
    },
    {
      year: '2020',
      title: 'Meta Ads Integration',
      description: 'Menjadi pioneer dalam menggunakan Meta Ads untuk industri mesin kantor'
    },
    {
      year: '2024',
      title: 'Market Leader',
      description: 'Menjadi salah satu supplier mesin kantor terpercaya di Sumatera Utara'
    }
  ]

  const values = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Integritas',
      description: 'Kami berkomitmen untuk selalu jujur dan transparan dalam setiap transaksi bisnis',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Kualitas',
      description: 'Hanya menyediakan produk-produk berkualitas tinggi dari merek terpercaya',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Kepuasan Pelanggan',
      description: 'Kepuasan pelanggan adalah prioritas utama kami dalam setiap layanan',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Inovasi',
      description: 'Terus berinovasi dalam teknologi dan metode pemasaran digital',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const team = [
    {
      name: 'Direktur Utama',
      role: 'Leadership & Strategy',
      description: 'Memimpin visi perusahaan dengan pengalaman lebih dari 15 tahun di industri mesin kantor'
    },
    {
      name: 'Tim Sales',
      role: 'Customer Relations',
      description: 'Profesional yang berdedikasi untuk memberikan solusi terbaik bagi pelanggan'
    },
    {
      name: 'Tim Teknis',
      role: 'Technical Support',
      description: 'Ahli dalam instalasi, maintenance, dan troubleshooting mesin kantor'
    },
    {
      name: 'Tim Marketing',
      role: 'Digital Marketing',
      description: 'Spesialis Meta Ads dan digital marketing untuk meningkatkan reach penjualan'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Pelanggan Puas' },
    { number: '50+', label: 'Tipe Produk' },
    { number: '10+', label: 'Tahun Pengalaman' },
    { number: '95%', label: 'Tingkat Kepuasan' }
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
              <Link href="/about" className="text-blue-600 font-medium hover:text-blue-700 transition">Tentang</Link>
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
                <Link href="/services" className="text-gray-700">Layanan</Link>
                <Link href="/about" className="text-blue-600 font-medium">Tentang</Link>
                <Link href="/contact" className="text-gray-700">Kontak</Link>
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
              Tentang
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                CV PELOPOR JAYA BERSAMA
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Mitra terpercaya untuk kebutuhan mesin kantor berkualitas tinggi di Indonesia sejak 2014
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">{achievement.number}</div>
                  <div className="text-sm text-blue-100">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Perjalanan Kami
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Menjadi Pionir
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CV PELOPOR JAYA BERSAMA didirikan pada tahun 2014 dengan visi menjadi supplier mesin kantor terpercaya di Indonesia. 
                Berawal dari fokus pada perdagangan eceran, kami terus berkembang dan berinovasi untuk memenuhi kebutuhan pasar yang dinamis.
              </p>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dengan pengalaman lebih dari satu dekade, kami telah membangun reputasi kuat sebagai penyedia mesin kantor berkualitas 
                dengan layanan purnajual yang excellent. Kami juga menjadi pioneer dalam mengintegrasikan Meta Ads untuk pemasaran produk mesin kantor.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Produk Berkualitas</h4>
                    <p className="text-gray-600">Hanya menyediakan merek-merek terpercaya dengan garansi resmi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Layanan Prima</h4>
                    <p className="text-gray-600">Tim support siap membantu 24/7 untuk kebutuhan pelanggan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Inovasi Digital</h4>
                    <p className="text-gray-600">Menggunakan teknologi terkini untuk pemasaran dan penjualan</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <Building className="w-24 h-24 text-blue-600 mx-auto mb-6" />
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Visi & Misi</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Visi</h4>
                      <p className="text-gray-600 text-sm">Menjadi supplier mesin kantor terdepan di Indonesia dengan inovasi dan layanan terbaik</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Misi</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Menyediakan produk berkualitas dengan harga kompetitif</li>
                        <li>• Memberikan layanan pelanggan yang excellent</li>
                        <li>• Terus berinovasi dalam teknologi dan pemasaran</li>
                        <li>• Membangun partnership yang saling menguntungkan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestone penting dalam sejarah CV PELOPOR JAYA BERSAMA
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                  <div className="md:w-1/2">
                    <div className={`bg-white rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} md:max-w-md`}>
                      <div className="flex items-center mb-4">
                        <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-lg font-bold text-blue-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Orang-orang hebat di balik kesuksesan CV PELOPOR JAYA BERSAMA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Kunjungi Kami
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Alamat</h4>
                    <p className="text-gray-600">
                      Jalan Ahmad Yani Nomor 83<br />
                      Desa/Kelurahan Batang Beruh<br />
                      Kec. Sidikalang, Kab. Dairi<br />
                      Provinsi Sumatera Utara
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Telepon</h4>
                    <p className="text-gray-600">085285703497</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">info@pelojorjaya.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Jam Operasional</h4>
                    <p className="text-gray-600">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 08:00 - 14:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Peta Lokasi</p>
                <p className="text-sm text-gray-600 mt-2">Sidikalang, Dairi, Sumatera Utara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bergabung dengan Ratusan Pelanggan Puas
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Rasakan pengalaman berbelanja mesin kantor dengan layanan terbaik dari kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
                Hubungi Kami
              </button>
            </Link>
            <Link href="/products">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Lihat Produk
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