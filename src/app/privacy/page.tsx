'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Shield, Eye, Lock, Database, UserCheck, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
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
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Beranda</Link>
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
                <Link href="/" className="text-gray-700">Beranda</Link>
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kebijakan Privasi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Komitmen kami untuk melindungi data pribadi Anda dengan transparansi dan keamanan terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  CV PELOPOR JAYA BERSAMA ("kami", "perusahaan") menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda 
                  menggunakan website dan layanan kami.
                </p>
              </div>

              {/* Informasi yang Kami Kumpulkan */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                    <p className="text-gray-700 mb-3">Kami dapat mengumpulkan informasi pribadi berikut:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Nama lengkap dan informasi kontak (email, telepon, alamat)</li>
                      <li>Informasi perusahaan dan jabatan</li>
                      <li>Informasi demografis (usia, jenis kelamin, lokasi)</li>
                      <li>Preferensi produk dan layanan</li>
                      <li>Riwayat pembelian dan interaksi dengan kami</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Teknis</h3>
                    <p className="text-gray-700 mb-3">Kami secara otomatis mengumpulkan informasi teknis:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Alamat IP dan informasi geolokasi</li>
                      <li>Jenis browser dan sistem operasi</li>
                      <li>Informasi perangkat yang digunakan</li>
                      <li>Data cookie dan tracking teknologi lainnya</li>
                      <li>Halaman yang dikunjungi dan waktu kunjungan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cara Kami Menggunakan Informasi */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Cara Kami Menggunakan Informasi</h2>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Layanan Pelanggan</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Merespons pertanyaan dan permintaan</li>
                      <li>• Memberikan dukungan teknis</li>
                      <li>• Memproses pesanan dan pengiriman</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Pemasaran</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Mengirim informasi produk terkini</li>
                      <li>• Personalisasi konten dan iklan</li>
                      <li>• Meta Ads campaign optimization</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Peningkatan Layanan</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Analisis perilaku pengguna</li>
                      <li>• Pengembangan produk baru</li>
                      <li>• Perbaikan pengalaman website</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Kepatuhan Hukum</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Memenuhi kewajiban legal</li>
                      <li>• Melindungi hak-hak perusahaan</li>
                      <li>• Mencegah aktivitas ilegal</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cookie dan Tracking */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Cookie dan Tracking Teknologi</h2>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Kami menggunakan cookie dan teknologi tracking untuk:
                </p>
                
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-6">
                  <li>Menyimpan preferensi pengguna</li>
                  <li>Menganalisis traffic website</li>
                  <li>Personalisasi pengalaman pengguna</li>
                  <li>Meta Ads tracking dan optimization</li>
                  <li>Google Analytics untuk analisis performa</li>
                </ul>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    <strong>Catatan:</strong> Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda. 
                    Namun, menonaktifkan cookie dapat mempengaruhi pengalaman pengguna di website kami.
                  </p>
                </div>
              </div>

              {/* Berbagi Informasi */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <UserCheck className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Berbagi Informasi</h2>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, 
                  kecuali dalam situasi berikut:
                </p>
                
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                  <li>Ke penyedia layanan (payment gateway, shipping, dll)</li>
                  <li>Untuk kepatuhan hukum atau permintaan resmi</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                  <li>Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
                </ul>
              </div>

              {/* Keamanan Data */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Kami menerapkan langkah-langkah keamanan berikut untuk melindungi data Anda:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Enkripsi data transmisi (SSL/TLS)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Akses terbatas ke data pribadi</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Regular security audits</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Backup data yang aman</span>
                  </div>
                </div>
              </div>

              {/* Hak Pengguna */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hak Anda sebagai Pengguna</h2>
                
                <p className="text-gray-700 mb-4">
                  Anda memiliki hak berikut terkait data pribadi Anda:
                </p>
                
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Koreksi:</strong> Memperbarui atau memperbaiki data yang tidak akurat</li>
                  <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Pembatasan:</strong> Membatasi pengolahan data pribadi Anda</li>
                  <li><strong>Portabilitas:</strong> Memindahkan data ke layanan lain</li>
                  <li><strong>Penolakan:</strong> Menolak pengolahan data untuk tujuan pemasaran</li>
                </ul>
              </div>

              {/* Kontak */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
                
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, 
                  silakan hubungi kami:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Email: privacy@pelojorjaya.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Telepon: 085285703497</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">
                        Alamat: Jl. Ahmad Yani No. 83, Batang Beruh, Sidikalang, Dairi, Sumatera Utara
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perubahan Kebijakan */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Perubahan Kebijakan Privasi</h2>
                
                <p className="text-gray-700">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan 
                  dalam praktik kami atau perubahan hukum yang berlaku. Perubahan akan diposting di halaman ini 
                  dengan tanggal "Terakhir diperbarui" yang baru.
                </p>
              </div>
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