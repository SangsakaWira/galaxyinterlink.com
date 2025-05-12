import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Wifi,
  Phone,
  MapPin,
  Shield,
  Award,
  BarChart,
} from "lucide-react";
import CoverageMap from "./CoverageMap";
import AvailabilityChecker from "./AvailabilityChecker";
import PlanComparisonTable from "./PlanComparisonTable";
import ContactForm from "./ContactForm";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/galaxy-interlink-logo.png"
              alt="Galaxy Interlink Logo"
              className="h-10"
            />
            <span className="text-xl font-bold text-primary-dark">
              Galaxy Interlink
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#plans" className="text-sm font-medium hover:text-primary">
              Paket
            </a>
            <a
              href="#coverage"
              className="text-sm font-medium hover:text-primary"
            >
              Jangkauan
            </a>
            <a
              href="#technology"
              className="text-sm font-medium hover:text-primary"
            >
              Teknologi
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimoni
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Kontak
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Login Pelanggan
            </Button>
            <Button size="sm">Cek Ketersediaan</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted"
        >
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-3 py-1">
                <Wifi className="mr-1 h-3 w-3" />
                Internet Pedesaan Terpercaya
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Internet Kecepatan Tinggi untuk{" "}
                <span className="text-primary">Daerah Pedesaan</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Tetap terhubung dengan internet kecepatan tinggi yang andal,
                dirancang khusus untuk lokasi terpencil dan pedesaan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Cek Ketersediaan <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Lihat Paket
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden border shadow-xl">
              <CoverageMap />
            </div>
          </div>
        </section>

        {/* Availability Checker Section */}
        <section id="coverage" className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Cek Ketersediaan Layanan
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Masukkan alamat Anda untuk melihat apakah layanan kami tersedia
                di area Anda dan temukan paket apa yang dapat Anda akses.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <AvailabilityChecker />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-16">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Paket Layanan Internet
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih paket yang sempurna untuk kebutuhan konektivitas pedesaan
                Anda dengan berbagai pilihan kami yang dirancang untuk daerah
                terpencil.
              </p>
            </div>
            <Tabs defaultValue="residential" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="residential">Rumah Tangga</TabsTrigger>
                  <TabsTrigger value="business">Bisnis</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="residential">
                <PlanComparisonTable />
              </TabsContent>
              <TabsContent value="business">
                <PlanComparisonTable />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Teknologi Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pelajari tentang teknologi inovatif yang kami gunakan untuk
                memberikan layanan internet yang andal bahkan ke daerah
                terpencil sekalipun.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Wifi className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Fixed Wireless</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Teknologi fixed wireless kami menggunakan sinyal radio yang
                    ditransmisikan dari menara ke penerima yang dipasang di
                    properti Anda, memberikan konektivitas yang andal tanpa
                    memerlukan kabel tradisional.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Internet Satelit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Untuk lokasi terpencil, layanan internet satelit kami
                    menyediakan jangkauan hampir di mana saja, menggunakan
                    teknologi satelit canggih untuk memberikan kecepatan
                    broadband.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Solusi Hybrid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Solusi hybrid kami menggabungkan beberapa teknologi untuk
                    memastikan koneksi yang paling andal dan tercepat untuk
                    lokasi dan kebutuhan spesifik Anda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Testimoni Pelanggan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dengarkan dari penduduk pedesaan yang telah mengubah
                konektivitas mereka dengan layanan internet kami yang andal.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  location: "Gunung Kidul, DIY",
                  quote:
                    "Setelah bertahun-tahun berjuang dengan internet satelit yang tidak andal, Galaxy Interlink telah menjadi game-changer untuk pertanian keluarga kami. Kami akhirnya dapat menjalankan bisnis kami secara efisien dan anak-anak dapat mengikuti kelas online tanpa gangguan.",
                  plan: "Premium Pedesaan",
                },
                {
                  name: "Robert Miller",
                  location: "Lembah Cisadane, Bogor",
                  quote:
                    "Tinggal 50 kilometer dari kota terdekat, saya tidak pernah berpikir akan memiliki internet yang andal. Sekarang saya menjalankan seluruh bisnis konsultasi saya dari rumah dengan kecepatan yang menyaingi apa yang saya miliki di kota.",
                  plan: "Bisnis Pedesaan",
                },
                {
                  name: "Emily Thompson",
                  location: "Tepi Danau, Bali",
                  quote:
                    "Layanan pelanggan adalah yang membedakan Galaxy Interlink. Ketika kami mengalami masalah setelah badai, mereka mengirimkan teknisi di hari yang sama. Layanan seperti itu jarang di daerah pedesaan.",
                  plan: "Standar Pedesaan",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`}
                          alt={testimonial.name}
                          className="h-10 w-10 rounded-full"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {testimonial.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Badge variant="outline" className="gap-1">
                      <CheckCircle className="h-3 w-3" /> {testimonial.plan}{" "}
                      Plan
                    </Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Mengapa Memilih Galaxy Interlink
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami memahami tantangan unik konektivitas internet pedesaan dan
                telah membangun layanan kami untuk mengatasinya.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-primary" />,
                  title: "Jaminan Uptime 99.9%",
                  description:
                    "Jaringan kami yang kuat dirancang untuk bertahan dalam kondisi pedesaan dan memberikan layanan yang konsisten.",
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: "Tim Dukungan Lokal",
                  description:
                    "Teknisi kami tinggal di komunitas yang kami layani dan memahami tantangan konektivitas pedesaan.",
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-primary" />,
                  title: "Tanpa Biaya Tersembunyi",
                  description:
                    "Harga transparan tanpa biaya kejutan atau batas data tersembunyi pada sebagian besar paket.",
                },
                {
                  icon: <Phone className="h-8 w-8 text-primary" />,
                  title: "Dukungan Darurat 24/7",
                  description:
                    "Bantuan sepanjang waktu untuk masalah konektivitas kritis saat Anda paling membutuhkannya.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-none bg-transparent"
                >
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Punya pertanyaan atau butuh bantuan? Tim kami siap membantu
                dengan semua kebutuhan internet pedesaan Anda.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card>
                <CardHeader>
                  <CardTitle>Hubungi Kami</CardTitle>
                  <CardDescription>
                    Isi formulir dan kami akan menghubungi Anda sesegera
                    mungkin.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Informasi Kontak</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Dukungan Telepon</p>
                        <p className="text-muted-foreground">(021) 555-0123</p>
                        <p className="text-sm text-muted-foreground">
                          Senin-Jumat: 8am-8pm, Sabtu: 9am-5pm
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Kantor Utama</p>
                        <p className="text-muted-foreground">
                          Jl. Pedesaan No. 123, Kabupaten Bogor, Jawa Barat
                          16810
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Area Layanan</p>
                        <p className="text-muted-foreground">
                          Melayani komunitas pedesaan di seluruh Jawa, Sumatera,
                          dan wilayah Indonesia Timur
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Dukungan Darurat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Untuk pelanggan yang mengalami gangguan layanan kritis.
                    </p>
                    <Button className="w-full gap-2">
                      <Phone className="h-4 w-4" /> Saluran Dukungan Darurat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/galaxy-interlink-logo.png"
                  alt="Galaxy Interlink Logo"
                  className="h-8"
                />
                <span className="text-xl font-bold text-primary-dark">
                  Galaxy Interlink
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Menyediakan internet kecepatan tinggi yang andal untuk komunitas
                pedesaan sejak 2010.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3">Perusahaan</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Karir
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Berita
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Dampak Komunitas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Dukungan</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Pusat Bantuan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Panduan Instalasi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Dukungan Peralatan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Syarat Layanan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Penggunaan yang Diterima
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Perjanjian Layanan
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2023 Galaxy Interlink. Hak cipta dilindungi undang-undang.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
