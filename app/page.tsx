// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Star,
  ArrowRight,
  Ship,
  Menu,
  X,
  ShieldCheck,
  Globe,
  Clock,
  Handshake,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen font-sans bg-slate-50 selection:bg-[#F5A623] selection:text-slate-900">
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#061124]/90 backdrop-blur-xl shadow-2xl py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-wide">
            <Menu
              className="w-8 h-8 text-[#26194e] md:hidden cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <Ship className="w-8 h-8 text-[#e7c00f] hidden md:block" />
            <span>RKT EXPORTS</span>
          </div>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex items-center space-x-8 ${isScrolled ? "text-gray-200" : "bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 text-white"}`}
          >
            <Link
              href="#home"
              className="hover:text-[#F5A623] transition font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-[#F5A623] transition font-medium"
            >
              About
            </Link>
            <Link
              href="#products"
              className="hover:text-[#F5A623] transition font-medium"
            >
              Products
            </Link>
            <Link
              href="#features"
              className="hover:text-[#F5A623] transition font-medium"
            >
              Why Us
            </Link>
          </div>

          <Link
            href="#contact"
            className="hidden md:block bg-gradient-to-r from-[#F5A623] to-[#FF8C00] text-slate-450 font-bold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(245,166,35,0.4)] hover:shadow-[0_0_25px_rgba(245,166,35,0.6)] transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0b172a] shadow-2xl border-t border-white/10">
            <div className="px-6 py-4 flex flex-col space-y-4 text-white">
              <Link href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#products" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </Link>
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)}>
                Why Choose Us
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#F5A623] font-bold"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ================= 1. HERO SECTION ================= */}
      <section
        id="home"
        className="relative z-0 min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 pt-20"
      >
        {/* Cargo Ship Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1670121180583-39ab653a071c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Cargo ship in deep ocean"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#061124] via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32 flex flex-col justify-center flex-grow w-full">
          <div className="max-w-2xl mt-12 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-10 ">
              Connecting
              <br />
              Quality Products to Global Markets
              <br />
             
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
              RKT Exports is a trusted provider of fast, reliable, and
              cost-effective export & sourcing services across international
              markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-[#F5A623] to-[#FF8C00] text-slate-450 font-bold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:-translate-y-1 transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="#products"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/20 transition-all"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Floating Glassmorphism Widget */}
          <div
            className="hidden lg:block absolute right-12 top-1/4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl max-w-[320px] animate-bounce"
            style={{ animationDuration: "5s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/100?img=11"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-[#0b172a] shadow-sm z-30"
                />
                <img
                  src="https://i.pravatar.cc/100?img=32"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-[#0b172a] shadow-sm z-20"
                />
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-[#0b172a] shadow-sm z-10"
                />
              </div>
            </div>
            <p className="text-sm text-gray-200 mb-4 font-medium">
              Trusted by businesses of all sizes. See why buyers trust our
              sourcing services.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-white">4.8</span>
              <div className="flex text-[#F5A623]">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

       
      </section>

      {/* ================= 2. ABOUT SECTION ================= */}
      <section id="about" className="py-24 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#F5A623]/10 rounded-3xl transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
                alt="Logistics Port"
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#0b172a] text-white p-8 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-4xl font-black text-[#F5A623] mb-1">10+</p>
                <p className="text-sm font-medium tracking-wide">
                  Years of Experience
                  <br />
                  in Global Trade
                </p>
              </div>
            </div>
            <div>
              <span className="text-[#F5A623] font-bold tracking-wider uppercase text-sm mb-3 block">
                About RKT Exports
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Delivering Excellence Across Borders
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                RKT Exports bridges the gap between quality manufacturers and
                international buyers. We are committed to connecting businesses
                across borders through quality-focused sourcing, reliable
                coordination, and professional export services.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Verified Quality Standards",
                  "Seamless Custom Clearance",
                  "End-to-end Logistics Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300 font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623]">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-[#0b172a] font-bold hover:text-[#F5A623] transition-colors group"
              >
                Discover Our Story{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. PRODUCTS SECTION ================= */}
      <section id="products" className="py-24 bg-[#0F172A] ">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-300 mb-6">
              Premium Export Commodities
            </h2>
            <p className="text-slate-400 text-lg">
              We source and export top-tier products customized to meet
              international market standards and buyer specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Agricultural Products",
                img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800",
              },
              {
                title: "Textiles & Garments",
                img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800",
              },
              {
                title: "Industrial Materials",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
              },
            ].map((prod, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] cursor-pointer"
              >
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061124] via-[#061124]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {prod.title}
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-300">
                    <p className="text-gray-300 text-sm">
                      High-quality sourcing guaranteed for global standards.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. WHY CHOOSE US (PREMIUM FLOATING BENTO GRID) ================= */}
      <section
        id="features"
        className="py-24 bg-[#0b172a] text-white relative overflow-hidden"
      >
        {/* Custom Keyframes for Premium Smooth Bouncing/Floating */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes float-premium {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .animate-float {
            animation: float-premium ease-in-out infinite;
          }
        `,
          }}
        />

        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F5A623]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Built on Trust.
              <br />
              Driven by Quality.
            </h2>
            <div className="w-20 h-1.5 bg-[#F5A623] mx-auto rounded-full shadow-[0_0_15px_rgba(245,166,35,0.5)]"></div>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Wide Card (Spans 2 columns) */}
            <div
              className="animate-float md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(245,166,35,0.15)] transition-all duration-500 group overflow-hidden relative"
              style={{ animationDuration: "6s", animationDelay: "0s" }}
            >
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-20 transition-opacity duration-700">
                <Globe className="w-72 h-72 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F5A623]/30 to-transparent border border-[#F5A623]/20 rounded-xl flex items-center justify-center mb-6 text-[#F5A623] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#F5A623] transition-colors duration-300">
                  Global Network
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-md group-hover:text-gray-300 transition-colors duration-300">
                  Seamless logistics across borders and continents. We ensure
                  your cargo reaches its destination efficiently through our
                  established international trade routes.
                </p>
              </div>
            </div>

            {/* Card 2: Square Card */}
            <div
              className="animate-float bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(245,166,35,0.15)] transition-all duration-500 group"
              style={{ animationDuration: "7s", animationDelay: "1s" }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#F5A623]/30 to-transparent border border-[#F5A623]/20 rounded-xl flex items-center justify-center mb-6 text-[#F5A623] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F5A623] transition-colors duration-300">
                Quality Sourcing
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Rigorous vetting processes to meet the highest international
                standards.
              </p>
            </div>

            {/* Card 3: Square Card */}
            <div
              className="animate-float bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(245,166,35,0.15)] transition-all duration-500 group flex flex-col justify-end"
              style={{ animationDuration: "5s", animationDelay: "2s" }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#F5A623]/30 to-transparent border border-[#F5A623]/20 rounded-xl flex items-center justify-center mb-6 text-[#F5A623] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F5A623] transition-colors duration-300">
                Timely Delivery
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Efficient supply chain management designed to save your time.
              </p>
            </div>

            {/* Card 4: Wide Card (Spans 2 columns) */}
            <div
              className="animate-float md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(245,166,35,0.15)] transition-all duration-500 group flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              style={{ animationDuration: "8s", animationDelay: "0.5s" }}
            >
              <div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#F5A623]/30 to-transparent border border-[#F5A623]/20 rounded-xl flex items-center justify-center mb-6 text-[#F5A623] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                  <Handshake className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-[#F5A623] transition-colors duration-300">
                  Trusted Partner
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-md group-hover:text-gray-300 transition-colors duration-300">
                  Long-term business relationships built on absolute
                  transparency, mutual growth, and proven reliability.
                </p>
              </div>

              <div className="flex -space-x-4 mt-4 md:mt-0 group-hover:scale-105 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full border-4 border-[#0b172a] bg-slate-800 flex items-center justify-center text-sm font-bold text-white shadow-xl z-20">
                  B2B
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-[#0b172a] bg-gradient-to-br from-[#F5A623] to-[#FF8C00] flex items-center justify-center text-slate-900 font-bold shadow-xl z-10">
                  100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. CONTACT & FOOTER ================= */}
      <section id="contact" className="relative py-24 bg-[#1f2636]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-[#061124] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="lg:w-2/5 p-12 bg-gradient-to-br from-[#0b172a] to-[#061124] text-white">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#F5A623] mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Head Office</p>
                    <p className="text-gray-400">Business Hub, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#F5A623] mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Email Us</p>
                    <p className="text-gray-400">contact@rktexports.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#F5A623] mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Call Us</p>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-3/5 p-12 bg-[#0B172A]">
              <h3 className="text-2xl font-bold text-slate- mb-6">
                Request a Quote
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#0B172A] border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#0B172A] border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Product Requirements"
                  className="w-full bg-[#0B172A] border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                />
                <textarea
                  rows={4}
                  placeholder="Additional Details (Destination, Quantity)"
                  className="w-full bg-[#0B172A] border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                ></textarea>
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#0b172a] to-[#061124] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all border border-[#e6e1da] hover:border-[#d2cec8] text-lg flex items-center justify-center gap-2"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#061124] border-t border-white/10 py-8 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} RKT Exports. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
