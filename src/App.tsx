import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Navigation, Clock, ShieldCheck, Heart, ArrowRight, Trophy, Star } from "lucide-react";
import Logo from "./components/Logo";
import PotatoPattern from "./components/PotatoPattern";
import HighlightBlock from "./components/HighlightBlock";
// import Carousel from "./components/Carousel";

// Structured signature stuffed potato dishes
interface PotatoDish {
  id: string;
  name: string;
  price: string;
  description: string;
  badge?: string;
  ingredients: string[];
}

const MENU_POTATOES: PotatoDish[] = [
  {
    id: "menu-1",
    name: "ESTROGONOFE DE FRANGO",
    price: "R$ 34,00",
    description: "Batata recheada de estrogonofe de frango, finalizada com muçarela, farofa de bacon, cheiro verde e requeijão cremoso Catupiry.",
    badge: "No pote",
    ingredients: ["Estrogonofe de Frango", "Muçarela", "Farofa de Bacon", "Cheiro Verde", "Requeijão Catupiry"],
  },
  {
    id: "menu-2",
    name: "ESTROGONOFE DE CARNE",
    price: "R$ 38,00",
    description: "Batata recheada de estrogonofe de carne, finalizada com muçarela, farofa de bacon, cheiro verde e requeijão cremoso Catupiry.",
    badge: "No pote",
    ingredients: ["Estrogonofe de Carne", "Muçarela", "Farofa de Bacon", "Cheiro Verde", "Requeijão Catupiry"],
  },
  {
    id: "menu-3",
    name: "FRANGO DESFIADO",
    price: "R$ 36,00",
    description: "Batata rosti recheada com frango desfiado, muçarela, cheiro verde e milho.",
    badge: "Rosti",
    ingredients: ["Frango Desfiado", "Muçarela", "Cheiro Verde", "Milho"],
  },
  {
    id: "menu-4",
    name: "CARNE DESFIADA",
    price: "R$ 39,00",
    description: "Batata rosti recheada com carne desfiada, muçarela, alho frito e tomate picado.",
    badge: "Rosti",
    ingredients: ["Carne Desfiada", "Muçarela", "Alho Frito", "Tomate Picado"],
  },
];

export default function App() {
  const [selectedDish, setSelectedDish] = useState<PotatoDish | null>(null);

  // Quick delivery details for Cassilândia
  const deliveryFeatures = [
    {
      icon: <Clock size={20} className="text-[#E1AD01]" />,
      title: "Entrega Rápida",
      desc: "De terça a domingo, 18h às 23h"
    },
    {
      icon: <Navigation size={20} className="text-[#E1AD01]" />,
      title: "Cassilândia Inteira",
      desc: "Entregamos quente em todos os bairros"
    },
    {
      icon: <ShieldCheck size={20} className="text-[#E1AD01]" />,
      title: "Garantia Térmica",
      desc: "Embalagem selada que segura o calor"
    }
  ];

  return (
    <div id="landing-page-root" className="min-h-screen flex flex-col font-sans relative text-[#4B3621] overflow-x-hidden">

      {/* Background Layer with Illustrated Potatoes on Off-White */}
      <PotatoPattern />

      {/* HEADER SECTION - Centered Logo */}
      <header id="landing-header" className="relative z-10 w-full pt-8 pb-6 md:pt-12 md:pb-8 px-4 flex items-center justify-center">
        <motion.div
          id="header-logo-wrapper"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Logo theme="light" size="md" />
        </motion.div>
      </header>

      {/* HERO SECTION */}
      <section id="hero-section" className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-4 pb-12 md:pt-6 max-w-4xl mx-auto">

        {/* Highlight Block: "Sabor que apaixona" in handwriting */}
        <div className="mb-6 flex justify-center">
          <HighlightBlock />
        </div>

        {/* HEADLINE: Elegant Serif Font, animation-ready, with custom brown-to-mustard-yellow gradient for CASSILÂNDIA */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#4B3621] tracking-tight leading-[1.1] mb-6 max-w-3xl"
        >
          As melhores batatas recheadas de{" "}
          <span className="block mt-2 sm:inline sm:mt-0 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#4B3621] via-[#E1AD01] to-[#E1AD01] drop-shadow-xs">
            CASSILÂNDIA
          </span>
        </motion.h1>

        {/* SUBHEADLINE: Single line, no line break constraint */}
        <motion.p
          id="hero-subheadline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide text-[#4B3621]/80 max-w-2xl px-2 whitespace-nowrap overflow-hidden text-ellipsis mb-10 border-y border-[#4B3621]/15 py-2.5 bg-[#4B3621]/5 rounded-sm"
        >
          Batata Mania: A mania boa de comer bem
        </motion.p>

        {/* CTA BUTTONS ROW */}
        <motion.div
          id="cta-buttons-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 mb-14"
        >
          {/* CTA 1: "Faça seu pedido" with E1AD01 gradient, hover pulse, external url */}
          <a
            id="cta-order-now"
            href="https://pedido.brendi.com.br/batata-mania-1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#E1AD01] to-[#C79801] text-[#4B3621] font-bold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-lg border border-[#4B3621]/10 transition-all cursor-pointer animate-pulse-cta"
          >
            Faça seu pedido
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </a>

          {/* CTA 2: "Entrar em contato" with whatsapp icon */}
          <a
            id="cta-contact-whatsapp"
            href="https://wa.me/message/MEJL67NV7IDWE1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#4B3621] hover:text-[#F2EBE3] text-[#4B3621] font-bold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-md border-2 border-[#4B3621]/30 transition-all cursor-pointer"
          >
            {/* WhatsApp SVG Icon */}
            <svg
              className="w-5 h-5 fill-current shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.458 3.477 1.341 5.011L2 22l5.127-1.311a9.924 9.924 0 004.885 1.282c5.506 0 10.003-4.498 10.003-9.986C22.015 6.482 17.518 2 12.012 2zm6.203 14.127c-.244.686-1.22 1.249-1.684 1.306-.442.054-.881.082-2.825-.68-2.483-.974-4.08-3.5-4.202-3.664-.122-.163-1.002-1.321-1.002-2.517s.609-1.78.852-2.025c.244-.244.532-.304.708-.304.177 0 .354.004.507.012.16.008.373-.061.583.454.214.522.736 1.785.801 1.916.065.131.109.283.022.457-.087.174-.131.283-.261.435-.131.152-.276.339-.395.454a10.871 10.871 0 00-.51.521c-.443.435-.11.834.122 1.043.687.62 1.45 1.139 2.27 1.543.82.404 1.205.511 1.408.403.203-.109.84-.978 1.062-1.311.222-.333.443-.163.783-.054.341.109 2.164 1.02 2.533 1.205s.614.283.704.442c.09.163.09.919-.154 1.605z" />
            </svg>
            Entrar em contato
          </a>
        </motion.div>

        {/* Feature quick flags row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full border-t border-[#4B3621]/15 pt-8 mb-10">
          {deliveryFeatures.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-3.5 text-left bg-white/30 backdrop-blur-md self-stretch p-4 rounded-2xl border border-white/40 shadow-sm"
            >
              <div className="p-2.5 rounded-xl bg-[#4B3621]/5 flex items-center justify-center shrink-0">
                {feat.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-[#4B3621]">{feat.title}</h4>
                <p className="text-xs text-[#4B3621]/70 leading-relaxed mt-0.5">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* UGC CAROUSEL SECTION - DESATIVADO TEMPORARIAMENTE
      <section id="ugc-carousel-landing" className="relative z-10 w-full bg-white/25 backdrop-blur-xs py-8 border-y border-[#4B3621]/10 my-8">
        <Carousel />
      </section>
      */}


      {/* COMBO DO HEXA SECTION */}
      <section id="combo-hexa" className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-[#F0FDF4] to-[#FEFCE8] border border-[#BBF7D0] rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(22,163,74,0.15)] flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group">
          {/* Decorative trophies/stars */}
          <div className="absolute -top-10 -right-10 text-green-700/5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
            <Trophy size={200} fill="currentColor" />
          </div>
          <div className="absolute -bottom-10 -left-10 text-yellow-500/5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">
            <Star size={150} fill="currentColor" />
          </div>

          <div className="w-full md:w-1/2 relative z-10">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group-hover:shadow-green-600/20 transition-all duration-500">
              <img
                src="/combo-hexa.webp"
                alt="Combo do Hexa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-green-700 text-white text-[10px] font-mono font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1.5">
                <Trophy size={12} className="text-yellow-400 fill-yellow-400" /> Especial Rumo ao Hexa 🇧🇷
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10 text-left">
            <div className="flex items-center gap-2 mb-3 text-green-700">
              <Trophy size={18} className="animate-bounce text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-bold tracking-widest uppercase bg-green-100 text-green-800 px-2 py-1 rounded-md">Oferta Limitada</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#4B3621] mb-3 leading-tight">
              Combo do Hexa
            </h2>

            <p className="text-sm md:text-base text-[#4B3621]/80 mb-6 font-medium leading-relaxed">
              Reúna a torcida com o melhor sabor! O combo campeão perfeito para vibrar e comemorar cada gol da nossa seleção.
            </p>

            <ul className="space-y-3 mb-8 bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white shadow-sm">
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1.5 rounded-lg text-green-700 shrink-0">
                  <Star size={16} className="text-yellow-600 fill-yellow-500" />
                </div>
                <span className="text-sm font-bold text-[#4B3621]">1 Batata recheada de estrogonofe de carne (500g)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1.5 rounded-lg text-green-700 shrink-0">
                  <Star size={16} className="text-yellow-600 fill-yellow-500" />
                </div>
                <span className="text-sm font-bold text-[#4B3621]">1 Batata recheada de estrogonofe de frango (500g)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1.5 rounded-lg text-green-700 shrink-0">
                  <span className="text-sm px-0.5 font-black">2L</span>
                </div>
                <span className="text-sm font-bold text-[#4B3621]">1 Coca-Cola 2L</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-8">
              <div className="flex flex-col bg-white/50 px-4 py-2 rounded-xl border border-white">
                <span className="text-xs text-green-700/70 line-through font-bold uppercase tracking-wider mb-0.5">De R$ 88,00</span>
                <div className="flex items-end gap-1.5">
                  <span className="text-sm font-black text-green-700 mb-1">por</span>
                  <span className="text-3xl md:text-4xl font-black text-green-700 leading-none">R$ 78,00</span>
                </div>
              </div>
            </div>

            <a
              href="https://pedido.brendi.com.br/batata-mania-1/produto/combo-do-hexa-2-batatas-recheadas-no-pote-1-de-estrogonofe-de-frango-e-1-de-estrogonofe-de-carne"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-lg shadow-green-600/30 transition-all cursor-pointer transform hover:-translate-y-1"
            >
              Pedir Combo do Hexa
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISH INTERACTIVE ROSTER */}
      <section id="menu-section" className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <span className="font-mono text-xs text-[#E1AD01] tracking-widest uppercase mb-1 inline-block">
            Cardápio Selecionado
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-[#4B3621]">
            Nossos Sucessos Recheados
          </h2>
          <p className="text-sm text-[#4B3621]/70 mt-1 max-w-xl mx-auto">
            Escolha sua combinação favorita e clique em fazer pedido para pedir pelo nosso delivery.
          </p>
        </div>

        {/* Dynamic Interactive Cards Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_POTATOES.map((dish) => (
            <div
              id={`menu-card-${dish.id}`}
              key={dish.id}
              className="bg-white/35 backdrop-blur-md rounded-2xl p-6 border border-white/45 flex flex-col justify-between hover:shadow-xl transition-all h-full transform hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  {dish.badge ? (
                    <span className="bg-[#E1AD01]/20 text-[#4B3621] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                      {dish.badge}
                    </span>
                  ) : (
                    <span className="w-1" />
                  )}
                  <span className="font-serif font-black text-[#E1AD01] text-base">
                    {dish.price}
                  </span>
                </div>

                <h3 className="font-sans font-black text-lg text-[#4B3621] mb-1.5 leading-tight">
                  {dish.name}
                </h3>

                <p className="text-xs text-[#4B3621]/75 leading-relaxed mb-4">
                  {dish.description}
                </p>
              </div>

              <div>
                {/* Visual Ingredients checklist array inside card wrapper */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {dish.ingredients.map((ing, i) => (
                    <span key={i} className="text-[9px] bg-[#4B3621]/5 text-[#4B3621]/70 px-1.5 py-0.5 rounded font-medium">
                      • {ing}
                    </span>
                  ))}
                </div>

                <a
                  id={`btn-order-dish-${dish.id}`}
                  href="https://pedido.brendi.com.br/batata-mania-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#4B3621]/5 hover:bg-[#E1AD01] hover:text-[#4B3621] text-[#4B3621] font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  Pedir esta batata
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informative banner about online menu */}
        <div className="text-center mt-12 bg-white/20 backdrop-blur-sm py-4 px-6 rounded-2xl border border-white/30 max-w-2xl mx-auto shadow-sm">
          <p className="text-sm md:text-base font-semibold text-[#4B3621]">
            Além dessas opções tem muitas outras no nosso cardápio digital.
          </p>
        </div>
      </section>


      {/* CASSILÂNDIA SOCIAL STATS AND PROMISE FLAGS SECTION */}
      <section id="banner-contact" className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8 mb-12">
        <div className="bg-gradient-to-r from-[#4B3621] to-[#3B2816] rounded-3xl text-[#F2EBE3] p-8 md:p-12 text-center md:text-left relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle background glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E1AD01] opacity-5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
              Pronto para saborear a sua batata?
            </h3>
            <p className="text-sm text-[#F2EBE3]/80 max-w-lg leading-relaxed">
              Nosso atendimento em Cassilândia está a postos. Clique no botão ao lado para abrir nosso cardápio digital completo de delivery e faça sua escolha!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0 relative z-10">
            <a
              id="cta-contact-footer-order"
              href="https://pedido.brendi.com.br/batata-mania-1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#E1AD01] hover:bg-[#F2EBE3] hover:text-[#4B3621] text-[#4B3621] font-bold text-sm tracking-wide shadow-md transition-all text-center cursor-pointer"
            >
              Pedir pelo Cardápio
            </a>

            <a
              id="cta-contact-footer-whatsapp"
              href="https://wa.me/message/MEJL67NV7IDWE1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-sm tracking-wide border border-white/40 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone size={15} />
              Suporte WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION: Brown background #4B3621, centered logo, and below is "Sabor que apaixona" in off-white handwriting font */}
      <footer id="landing-footer" className="relative z-10 bg-[#4B3621] text-[#F2EBE3] pt-14 pb-12 px-4 shadow-[0_-5px_25px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center text-center">

        {/* Centered Batata Mania Logo with Dark Theme mapping */}
        <div id="footer-logo-container" className="mb-6">
          <Logo theme="dark" size="md" />
        </div>

        {/* Horizontal divider */}
        <div className="w-16 h-[2px] bg-[#E1AD01] mb-6 rounded-full" />

        {/* Slogan in Handwriting (cursive) font */}
        <div id="footer-slogan" className="mb-8">
          <p
            className="text-3xl md:text-4xl font-bold tracking-wider text-[#F2EBE3] select-none"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Sabor que apaixona
          </p>
        </div>

        <div className="text-xs text-[#F2EBE3]/50 max-w-sm leading-relaxed font-sans space-y-1">
          <p>© 2026 Batata Mania - Cassilândia - MS. Todos os direitos reservados.</p>
          <p className="mt-2 text-[10px]">
            Delivery especializado em batatas recheadas artesanais.
          </p>
        </div>
      </footer>

    </div>
  );
}
