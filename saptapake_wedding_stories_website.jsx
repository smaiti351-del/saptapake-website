import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Phone, Mail, Lock } from "lucide-react";
import logo from "./logo.png";

export default function WeddingWebsite() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const whatsappNumber = "918391898635";
  const instagramUsername = "satpake.weedingstories";
  const contactEmail = "smaiti351@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <motion.img
          src={logo}
          alt="Loading Logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="h-40 drop-shadow-[0_0_25px_gold]"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Sticky Premium Navbar */}
      <nav className="fixed w-full bg-black/60 backdrop-blur-xl z-50 border-b border-yellow-600/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.img
            src={logo}
            alt="Saptapake Wedding Stories"
            whileHover={{ scale: 1.05 }}
            className="h-14 w-auto drop-shadow-[0_0_10px_gold]"
          />
          <div className="space-x-6 hidden md:flex font-medium">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
            <a href="#client">Client Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.img
          src={logo}
          alt="Main Logo"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="h-32 md:h-44 mb-6 drop-shadow-[0_0_30px_gold]"
        />
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Capturing Forever Moments</h2>
        <Button className="rounded-2xl px-8 py-6 text-lg">Check Availability</Button>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-10">About Us</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Premium cinematic wedding photography crafted with emotion, elegance, and storytelling excellence.
        </p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 bg-gray-900">
        <h3 className="text-4xl font-bold mb-12 text-center">Portfolio</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1,2,3,4,5,6].map((item) => (
            <motion.img
              key={item}
              src={`https://source.unsplash.com/600x600/?indian-wedding,${item}`}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl shadow-xl h-80 w-full object-cover"
              alt="Wedding"
            />
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 px-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">Our Packages</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {["Silver", "Gold", "Platinum"].map((pkg) => (
            <Card key={pkg} className="rounded-2xl bg-gray-900 border-yellow-600/20">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4 text-yellow-500">{pkg} Package</h4>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>Full Day Coverage</li>
                  <li>Cinematic Film</li>
                  <li>Premium Album</li>
                  <li>Drone Coverage</li>
                </ul>
                <Button className="w-full rounded-xl">Enquire Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Login */}
      <section id="client" className="py-24 px-6 bg-gray-900 text-center">
        <h3 className="text-4xl font-bold mb-10">Client Gallery Login</h3>
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto space-y-4">
            <Input placeholder="Client ID" className="rounded-xl" />
            <Input placeholder="Password" type="password" className="rounded-xl" />
            <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
              <Lock className="mr-2" /> Login
            </Button>
          </div>
        ) : (
          <p>Welcome to your private gallery.</p>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-black text-center">
        <h3 className="text-4xl font-bold mb-12">Contact Us</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a href={`https://instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"><Phone /></a>
          <a href={`mailto:${contactEmail}`}><Mail /></a>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        <Phone className="text-white" />
      </a>
    </div>
  );
}
