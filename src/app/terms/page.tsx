'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, FileText, ShoppingCart, Shield, AlertCircle, CheckCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Syarat dan Ketentuan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Terms & Conditions
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Aturan main yang mengatur penggunaan website dan layanan CV PELOPOR JAYA BERSAMA
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
                  Selamat datang di website CV PELOPOR JAYA BERSAMA. Syarat dan Ketentuan ini ("Syarat") 
                  mengatur penggunaan website, produk, dan layanan yang kami sediakan. Dengan mengakses atau 
                  menggunakan website kami, Anda setuju untuk terikat oleh Syarat ini.
                </p>
              </div>

              {/* Definisi */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Definisi</h2>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>"Perusahaan"</strong> merujuk pada CV PELOPOR JAYA BERSAMA, entitas bisnis yang bergerak 
                      di bidang perdagangan eceran mesin kantor.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>"Website"</strong> merujuk pada situs web pelojorjaya.com dan semua subdomain serta 
                      konten terkait.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>"Produk"</strong> merujuk pada semua mesin kantor dan peralatan yang kami jual, 
                      termasuk namun tidak terbatas pada mesin fotocopy, printer, scanner, dan mesin jilid.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>"Pelanggan"</strong> merujuk pada individu atau entitas yang membeli atau menggunakan 
                      produk dan layanan kami.
                    </p>
                  </div>
                </div>
              </div>

              {/* Penggunaan Website */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Penggunaan Website</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Kewajiban Pengguna</h3>
                    <p className="text-gray-700 mb-3">Sebagai pengguna website, Anda setuju untuk:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Memberikan informasi yang akurat dan lengkap</li>
                      <li>Tidak menggunakan website untuk aktivitas ilegal atau tidak sah</li>
                      <li>Tidak mencoba merusak atau mengganggu sistem website</li>
                      <li>Menghormati hak kekayaan intelektual kami</li>
                      <li>Tidak menyebarkan malware atau virus melalui website</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Batasan Penggunaan</h3>
                    <p className="text-gray-700 mb-3">Anda dilarang untuk:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Meng-copy atau mendistribusikan konten tanpa izin</li>
                      <li>Menggunakan website untuk kepentingan komersial pihak ketiga</li>
                      <li>Melakukan scraping atau data mining tanpa izin</li>
                      <li>Mencoba mendapatkan akses tidak sah ke sistem kami</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Produk dan Layanan */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <ShoppingCart className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Produk dan Layanan</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Produk</h3>
                    <p className="text-gray-700 mb-3">
                      Kami berusaha menyajikan informasi produk yang akurat, namun:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Harga dan spesifikasi dapat berubah sewaktu-waktu</li>
                      <li>Ketersediaan produk tergantung stok yang ada</li>
                      <li>Warna produk mungkin sedikit berbeda karena faktor layar</li>
                      <li>Kami berhak membatasi jumlah pembelian per pelanggan</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Pemesanan dan Pembayaran</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Pemesanan dikonfirmasi setelah pembayaran diterima</li>
                      <li>Metode pembayaran yang tersedia: Transfer Bank, COD, Kartu Kredit</li>
                      <li>Pembayaran harus diselesaikan dalam waktu 2x24 jam</li>
                      <li>Harga belum termasuk biaya pengiriman dan instalasi</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Pengiriman dan Instalasi</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Pengiriman dilakukan ke seluruh Indonesia</li>
                      <li>Waktu pengiriman tergantung lokasi dan ketersediaan kurir</li>
                      <li>Instalasi tersedia untuk produk tertentu dengan biaya tambahan</li>
                      <li>Risiko pengiriman ditanggung oleh perusahaan asuransi</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Garansi dan Retur */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Garansi dan Kebijakan Retur</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Garansi Produk</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Semua produk dilengkapi garansi resmi dari produsen</li>
                      <li>Masa garansi bervariasi tergantung tipe produk</li>
                      <li>Garansi tidak berlaku untuk kerusakan akibat kesalahan penggunaan</li>
                      <li>Klaim garansi harus disertai dengan bukti pembelian</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Kebijakan Retur</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Produk dapat dikembalikan dalam 7 hari jika cacat pabrik</li>
                      <li>Produk harus dalam kondisi asli dan lengkap</li>
                      <li>Biaya pengiriman retur ditanggung oleh pembeli</li>
                      <li>Pengembalian dana diproses dalam 14 hari kerja</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hak Kekayaan Intelektual */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, logo, 
                  desain, dan software, dilindungi oleh hak cipta dan merek dagang.
                </p>
                
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>CV PELOPOR JAYA BERSAMA memiliki semua hak atas konten website</li>
                  <li>Penggunaan konten tanpa izin dilarang keras</li>
                  <li>Nama dan logo perusahaan adalah merek dagang terdaftar</li>
                  <li>Meta Ads campaign materials dilindungi hak cipta</li>
                </ul>
              </div>

              {/* Pembatasan Tanggung Jawab */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <AlertCircle className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Pembatasan Tanggung Jawab</h2>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 font-medium mb-3">Website kami disediakan "sebagaimana adanya" tanpa jaminan apapun.</p>
                  <p className="text-gray-700">
                    Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang 
                    timbul dari penggunaan website atau produk kami.
                  </p>
                </div>
                
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Kami tidak menjamin website akan beroperasi tanpa gangguan</li>
                  <li>Kami tidak bertanggung jawab atas kehilangan data atau profit</li>
                  <li>Keterlambatan pengiriman di luar kontrol kami tidak dapat dituntut</li>
                  <li>Batas tanggung jawab maksimal sebesar nilai pembelian produk</li>
                </ul>
              </div>

              {/* Privasi Data */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privasi Data</h2>
                
                <p className="text-gray-700 mb-4">
                  Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami. 
                  Dengan menggunakan website ini, Anda setuju dengan pengumpulan dan pengolahan data sesuai kebijakan tersebut.
                </p>
                
                <p className="text-gray-700">
                  Kami berkomitmen untuk melindungi privasi Anda dan tidak akan membagikan 
                  informasi pribadi kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.
                </p>
              </div>

              {/* Hukum yang Berlaku */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hukum yang Berlaku</h2>
                
                <p className="text-gray-700 mb-4">
                  Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. 
                  Setiap sengketa akan diselesaikan secara musyawarah atau melalui pengadilan di wilayah Sidikalang.
                </p>
                
                <p className="text-gray-700">
                  Jika ada bagian dari Syarat ini dinyatakan tidak sah atau tidak dapat dilaksanakan, 
                  bagian tersebut tidak mempengaruhi keabsahan bagian lainnya.
                </p>
              </div>

              {/* Perubahan Syarat */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Perubahan Syarat dan Ketentuan</h2>
                
                <p className="text-gray-700">
                  Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan 
                  berlaku efektif setelah diposting di website ini. Penggunaan website yang 
                  berkelanjutan setelah perubahan menunjukkan persetujuan Anda terhadap syarat yang diperbarui.
                </p>
              </div>

              {/* Kontak */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
                
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Email: legal@pelojorjaya.com</span>
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