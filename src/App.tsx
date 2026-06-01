import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Navigation, Clock, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import Logo from "./components/Logo";
import PotatoPattern from "./components/PotatoPattern";
import HighlightBlock from "./components/HighlightBlock";
import Carousel from "./components/Carousel";

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
    name: "Batata Bacon Mania",
    price: "R$ 28,90",
    description: "Nossa queridinha! Batata inglesa gigante recheada com muito cheddar cremoso, pedaços generosos de bacon super crocante e cebolinha fresca.",
    badge: "Mais Vendida 🔥",
    ingredients: ["Batata Gigante", "Cheddar Artesanal", "Bacon Premium", "Cebolinha"],
  },
  {
    id: "menu-2",
    name: "Batata Strogonoff de Carne",
    price: "R$ 32,90",
    description: "Sabor supremo de strogonoff de carne bovina macia, creme de leite fresco e finalizado com uma montanha de batata palha artesanal crocante.",
    badge: "Gourmet ✨",
    ingredients: ["Batata Gigante", "Strogonoff de Carne", "Batata Palha", "Champignon"],
  },
  {
    id: "menu-3",
    name: "Batata Frango Catupiry",
    price: "R$ 29,90",
    description: "Peito de frango temperado desfiado com requeijão Catupiry legítimo, milho doce e queijo mussarela gratinado no forno para derreter de verdade.",
    ingredients: ["Batata Gigante", "Frango Desfiado", "Catupiry Original", "Mussarela"],
  },
  {
    id: "menu-4",
    name: "Batata Suprema Quatro Queijos",
    price: "R$ 31,90",
    description: "Para os apaixonados por queijo: combinação harmonizada de mussarela gratinada, provolone defumado, gorgonzola marcante e requeijão cremoso.",
    badge: "Irresistível 🧀",
    ingredients: ["Batata Gigante", "Mussarela", "Provolone", "Gorgonzola", "Requeijão"],
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
      <header id="landing-header" className="relative z-10 w-full pt-6 pb-2 px-4 flex items-center justify-center">
        <motion.div
          id="header-logo-wrapper"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="backdrop-blur-md bg-white/30 border border-white/40 py-2 px-6 rounded-full shadow-md"
        >
          <Logo theme="light" size="md" />
        </motion.div>
      </header>

      {/* HERO SECTION */}
      <section id="hero-section" className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-8 pb-12 max-w-4xl mx-auto">
        
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
            href="https://pedido.brendi.com.br/batata-mania"
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

      {/* UGC CAROUSEL SECTION */}
      <section id="ugc-carousel-landing" className="relative z-10 w-full bg-white/25 backdrop-blur-xs py-8 border-y border-[#4B3621]/10 my-8">
        <Carousel />
      </section>

      {/* DETAILED FEATURES / STORY SHOWCASE */}
      <section id="story-section" className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/30 backdrop-blur-lg rounded-3xl border border-white/45 p-8 md:p-12 shadow-xl">
          {/* Visual card of signature look */}
          <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-[#4B3621]/15 group">
            <img
              src="https://images.unsplash.com/photo-1603055251476-7521204f95b1?auto=format&fit=crop&q=80&w=800"
              alt="Batata Recheada Preparada e Quente"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Ambient heat ripple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4B3621]/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-left">
              <span className="bg-[#E1AD01] text-[#4B3621] text-[10px] font-mono tracking-widest uppercase font-black px-2.5 py-1 rounded-full mb-2.5 inline-block">
                O SEGREDO DA CREMOSIDADE
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#F2EBE3]">
                Batata inglesa gigante de verdade.
              </h3>
              <p className="text-xs md:text-sm text-stone-200 mt-1">
                Assadas lentamente e escavadas à mão para receber a quantidade perfeita de manteiga e recheio de ponta a ponta.
              </p>
            </div>
          </div>

          {/* Core pitch list info */}
          <div className="text-left flex flex-col justify-center">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E1AD01] uppercase mb-1">
              Como Fazemos Acontecer
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-[#4B3621] tracking-tight mb-6">
              A verdadeira arte de rechear batatas
            </h2>
            
            <p className="text-sm md:text-base text-[#4B3621]/85 leading-relaxed mb-6">
              Nossa missão em Cassilândia é entregar uma refeição completa, prática e extremamente satisfatória na porta da sua casa. Unimos ingredientes frescos de alta qualidade com um método de preparo artesanal.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-0.5">🥔</span>
                <div>
                  <h4 className="font-bold text-sm text-[#4B3621]">Tamanho Exagerado</h4>
                  <p className="text-xs text-[#4B3621]/70">Nossas batatas têm peso médio de 500g a 700g, garantindo uma refeição robusta.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-0.5">🥓</span>
                <div>
                  <h4 className="font-bold text-sm text-[#4B3621]">Ingredientes Originais</h4>
                  <p className="text-xs text-[#4B3621]/70">Cheddar cremoso e requeijão Catupiry original. Recuse imitações.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-0.5">🔥</span>
                <div>
                  <h4 className="font-bold text-sm text-[#4B3621]">Saiu do Forno, Chegou na Mesa</h4>
                  <p className="text-xs text-[#4B3621]/70">Sistema logístico exclusivo focado na rapidez do envio por toda a cidade.</p>
                </div>
              </div>
            </div>
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
                  href="https://pedido.brendi.com.br/batata-mania"
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
              href="https://pedido.brendi.com.br/batata-mania"
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
          <Logo theme="dark" size="lg" />
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
