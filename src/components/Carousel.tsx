import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX, Heart, MessageCircle, Share2, Star, Check } from "lucide-react";

// Robust structures for UGC media card items
interface UGCItem {
  id: string;
  type: "image" | "video";
  mediaUrl: string;
  customerName: string;
  location: string;
  likes: string;
  rating: number;
  caption: string;
  avatarBg: string;
  simulatedVideoType?: "cheese-pull" | "unboxing";
}

const UGC_DATA: UGCItem[] = [
  {
    id: "ugc-1",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800",
    customerName: "@lucas.cassilandia",
    location: "Cassilândia - MS",
    likes: "242",
    rating: 5,
    caption: "A melhor de Cassilândia disparado! Esse recheio com cheddar artesanal e bacon crocante é outro nível, surreal de bom! 🧀🥓",
    avatarBg: "bg-amber-600",
  },
  {
    id: "ugc-2",
    type: "video",
    mediaUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b98c6?auto=format&fit=crop&q=80&w=800",
    customerName: "@amanda.melo",
    location: "Centro, Cassilândia",
    likes: "512",
    rating: 5,
    caption: "Gente, juro... assistam a cremosidade desse recheio de frango catupiry saindo quentinho da embalagem! Chega derrete na boca! 😍✨",
    avatarBg: "bg-red-500",
    simulatedVideoType: "cheese-pull",
  },
  {
    id: "ugc-3",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1621510456681-23a23ecb545b?auto=format&fit=crop&q=80&w=800",
    customerName: "@gourmet.cass",
    location: "Vila Izanópolis",
    likes: "189",
    rating: 5,
    caption: "Estrogonofe cremoso de carne na batata gigante + batata palha super crocante por cima. Uma verdadeira obra-prima! Delivery muito rápido.",
    avatarBg: "bg-yellow-600",
  },
  {
    id: "ugc-4",
    type: "video",
    mediaUrl: "https://images.unsplash.com/photo-1514355315815-2b64b0246b9a?auto=format&fit=crop&q=80&w=800",
    customerName: "@pedrinho_food",
    location: "Cassilândia",
    likes: "374",
    rating: 5,
    caption: "Fiz o unboxing completo! A embalagem térmica segura muito o calor, chega parecendo que acabou de sair do forno de lenha! 🔥🥔",
    avatarBg: "bg-emerald-600",
    simulatedVideoType: "unboxing",
  },
  {
    id: "ugc-5",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    customerName: "@familiasilva.ms",
    location: "Cassilândia",
    likes: "156",
    rating: 5,
    caption: "Domingão é dia oficial de Batata Mania na nossa casa! Pedimos 4 batatas diferentes e todas vieram perfeitas e super generosas. Nota 10!",
    avatarBg: "bg-blue-600",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<UGCItem | null>(null);
  const [videoLiked, setVideoLiked] = useState<{ [key: string]: boolean }>({});
  const [videoMuted, setVideoMuted] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items count configuration:
  // Mobile = 1 visual item, Tablet/Medium = 2 items, Desktop = 3 items visible simultaneously.
  const [visibleItemsCount, setVisibleItemsCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItemsCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItemsCount(2);
      } else {
        setVisibleItemsCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStartIndex = UGC_DATA.length - visibleItemsCount;

  // Handles moving to the next item
  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  // Handles moving to the previous item
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxStartIndex : prev - 1));
  };

  // Autoplay hook
  useEffect(() => {
    if (autoPlay) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNext();
      }, 4200);
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [autoPlay, visibleItemsCount, currentIndex]);

  // Handle manual interaction: pause autoplay temporarily
  const handleManualAction = (action: () => void) => {
    setAutoPlay(false);
    action();
    // Resume autoplay after 12 seconds of inactivity
    setTimeout(() => {
      setAutoPlay(true);
    }, 12000);
  };

  const toggleVideoLike = (id: string) => {
    setVideoLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div id="ugc-carousel-section" className="relative w-full max-w-7xl mx-auto px-4 py-8">
      
      {/* Title Header with descriptive accent details */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5 justify-center md:justify-start">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1AD01] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E1AD01]"></span>
            </span>
            <span className="font-mono text-xs text-[#4B3621]/70 tracking-widest uppercase">
              #AmigosDaBatataMania
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#4B3621] text-center md:text-left">
            Quem come, <span className="italic font-medium text-[#E1AD01]">apaixona</span>!
          </h3>
          <p className="text-[#4B3621]/70 text-sm mt-1 text-center md:text-left">
            Veja as fotos e vídeos compartilhados diretamente por nossos clientes em Cassilândia.
          </p>
        </div>

        {/* Carousel arrows */}
        <div className="flex items-center gap-3">
          <button
            id="carousel-btn-prev"
            onClick={() => handleManualAction(handlePrev)}
            className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#4B3621]/20 bg-white/60 hover:bg-[#4B3621] hover:border-[#4B3621] hover:text-[#F2EBE3] transition-all cursor-pointer shadow-sm text-[#4B3621]"
            aria-label="Voltar depoimento"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>
          
          <button
            id="carousel-btn-next"
            onClick={() => handleManualAction(handleNext)}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#E1AD01] hover:bg-[#4B3621] hover:text-[#F2EBE3] text-[#4B3621] transition-all cursor-pointer shadow-md"
            aria-label="Avançar depoimento"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Main Visible Window */}
      <div id="carousel-viewport" className="overflow-hidden p-2 rounded-2xl relative">
        <motion.div
          id="carousel-slider-track"
          className="flex gap-6"
          animate={{ x: -currentIndex * (100 / visibleItemsCount) + "%" }}
          style={{ width: `${(UGC_DATA.length / visibleItemsCount) * 100}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {UGC_DATA.map((item) => (
            <div
              id={`carousel-item-${item.id}`}
              key={item.id}
              className="px-1"
              style={{ width: `${100 / UGC_DATA.length}%` }}
            >
              {/* Card Container */}
              <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
                
                {/* Image or Video Cover Thumbnail section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 group">
                  <img
                    src={item.mediaUrl}
                    alt={`Feedback de batata de ${item.customerName}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  {/* Play Video CTA Button Overlay */}
                  {item.type === "video" ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        id={`play-btn-${item.id}`}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleManualAction(() => setSelectedVideo(item))}
                        className="bg-[#E1AD01] text-[#4B3621] p-3.5 rounded-full shadow-lg relative flex items-center justify-center cursor-pointer group-hover:bg-[#4B3621] group-hover:text-[#F2EBE3] transition-colors"
                      >
                        {/* Interactive pulsing rings */}
                        <span className="absolute inset-0 rounded-full bg-[#E1AD01] opacity-35 ping animate-ping" />
                        <Play fill="currentColor" size={20} className="translate-x-0.5" />
                      </motion.button>
                      
                      <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono text-white tracking-widest uppercase font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        UGC REEL
                      </div>
                    </div>
                  ) : (
                    <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono text-white tracking-widest uppercase font-bold">
                      FOTO
                    </div>
                  )}
                </div>

                {/* Profile header and feedback caption */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* User profile identifier header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white flex items-center justify-center font-bold text-sm uppercase shadow-inner`}>
                        {item.customerName[1]}
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-[#4B3621] leading-tight">
                          {item.customerName}
                        </h4>
                        <p className="text-xs text-[#4B3621]/60">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    {/* Feedback caption block */}
                    <p className="text-sm text-[#4B3621]/80 leading-relaxed italic line-clamp-3">
                      "{item.caption}"
                    </p>
                  </div>

                  {/* Footing interactions row (Likes, Checkmark of delivery) */}
                  <div className="border-t border-[#4B3621]/10 mt-4 pt-3.5 flex items-center justify-between text-xs text-[#4B3621]/60">
                    <button
                      id={`like-cnt-btn-${item.id}`}
                      onClick={() => toggleVideoLike(item.id)}
                      className="flex items-center gap-1.5 hover:text-[#4B3621] transition-colors cursor-pointer"
                    >
                      <Heart
                        size={15}
                        className={videoLiked[item.id] ? "text-red-500 fill-red-500" : "text-[#4B3621]/50"}
                      />
                      <span>{videoLiked[item.id] ? parseInt(item.likes) + 1 : item.likes} curtidas</span>
                    </button>
                    
                    <div className="flex items-center gap-1 text-emerald-600 font-medium">
                      <Check size={13} strokeWidth={3} />
                      <span>Cliente Verificado</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Carousel dot guides indicator block */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {[...Array(UGC_DATA.length - visibleItemsCount + 1)].map((_, index) => (
          <button
            id={`carousel-dot-${index}`}
            key={index}
            onClick={() => handleManualAction(() => setCurrentIndex(index))}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "w-6 bg-[#E1AD01]" : "w-1.5 bg-[#4B3621]/20 hover:bg-[#4B3621]/40"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Simulated Video UGC Reels Player Modal Overlay */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            id="video-player-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedVideo(null)}
          >
            {/* Modal Box */}
            <motion.div
              id="video-player-box"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm md:max-w-md bg-stone-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col aspect-[9/16]"
            >
              
              {/* Media simulator container screen */}
              <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center">
                {/* Cover Image backdrop */}
                <img
                  src={selectedVideo.mediaUrl}
                  alt="Video playing back indicator"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 blur-md select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Simulated Content Animation representation loops */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center text-white">
                  
                  {/* Cheese Pull Animated Simulated Loop */}
                  {selectedVideo.simulatedVideoType === "cheese-pull" ? (
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                      {/* Interactive CSS drawing of a boiling hot, steaming potato slice */}
                      <div className="relative w-44 h-28 bg-[#d09147] rounded-full flex items-center justify-center shadow-inner overflow-hidden border border-[#5a4128]">
                        {/* Rising Steam anim elements */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-3 opacity-80">
                          <motion.div
                            animate={{ y: [-10, -50], opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                            className="w-1 bg-white/40 h-10 blur-xs rounded-full"
                          />
                          <motion.div
                            animate={{ y: [-10, -55], opacity: [0, 0.8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8, delay: 0.5 }}
                            className="w-1.5 bg-yellow-100/30 h-12 blur-xs rounded-full"
                          />
                        </div>

                        {/* Stuffed core cheese pulling up */}
                        <motion.div
                          animate={{ scaleY: [1, 1.45, 1] }}
                          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                          className="origin-bottom w-12 bg-gradient-to-t from-yellow-300 to-yellow-100 rounded-b-lg absolute z-10"
                          style={{ height: "45px", bottom: "10px" }}
                        />
                        {/* Topping - crisps */}
                        <div className="absolute bottom-5 w-20 flex gap-1 justify-center z-20">
                          <span className="w-1.5 h-3 bg-red-600 rounded-xs rotate-12" />
                          <span className="w-1.5 h-3 bg-[#E1AD01] rounded-xs -rotate-12" />
                          <span className="w-1.5 h-3 bg-red-600 rounded-xs rotate-45" />
                        </div>
                      </div>
                      
                      <div className="h-6">
                        <span className="text-xs text-[#E1AD01] font-mono tracking-widest uppercase font-bold animate-pulse">
                          [ REPRODUZINDO VÍDEO COMPROMETEDOR... DO CHEESE PULL ]
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Delivery Unboxing Animated Simulated representation */
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="relative w-36 h-36 bg-[#4B3621] border-2 border-[#E1AD01] rounded-2xl flex flex-col items-center justify-center shadow-lg p-3"
                      >
                        {/* Thermal package illustration */}
                        <div className="text-[10px] font-sans text-center tracking-wider text-stone-200">
                          EMBALAGEM DE ALTA PROTEÇÃO
                        </div>
                        {/* Floating stars */}
                        <div className="absolute inset-0 p-2 flex justify-between pointer-events-none">
                          <span className="text-yellow-400 text-xs animate-bounce">⭐</span>
                          <span className="text-yellow-400 text-sm animate-pulse">⭐</span>
                        </div>
                        
                        <div className="w-20 h-2 mt-4 bg-red-500 rounded-full overflow-hidden">
                          <motion.div
                            animate={{ x: [-80, 80] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="w-12 h-full bg-white opacity-40 blur-xs"
                          />
                        </div>

                        <div className="text-[9px] font-mono mt-4 text-[#E1AD01] tracking-widest leading-none">
                          MUITO QUENTE! ♨️
                        </div>
                      </motion.div>

                      <div className="h-6">
                        <span className="text-xs text-[#E1AD01] font-mono tracking-widest uppercase font-bold animate-pulse">
                          [ REPRODUZINDO FEEDBACK: UNBOXING QUENTINHO ]
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Aesthetic Reels-style overlay controls layout */}
                  <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-20">
                    <button
                      id="modal-like-btn"
                      onClick={() => toggleVideoLike(selectedVideo.id)}
                      className="flex flex-col items-center gap-1 text-white hover:text-red-500 transition-colors"
                    >
                      <div className="p-3 rounded-full bg-black/40 backdrop-blur-md">
                        <Heart
                          size={20}
                          className={videoLiked[selectedVideo.id] ? "text-red-500 fill-red-500 animate-bounce" : "text-white"}
                        />
                      </div>
                      <span className="text-[10px] font-bold font-sans">
                        {videoLiked[selectedVideo.id] ? parseInt(selectedVideo.likes) + 1 : selectedVideo.likes}
                      </span>
                    </button>

                    <div className="flex flex-col items-center gap-1 text-white">
                      <div className="p-3 rounded-full bg-black/40 backdrop-blur-md">
                        <MessageCircle size={20} />
                      </div>
                      <span className="text-[10px] font-bold font-sans">27</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 text-white">
                      <div className="p-3 rounded-full bg-black/40 backdrop-blur-md">
                        <Share2 size={20} />
                      </div>
                      <span className="text-[10px] font-bold font-sans">Compartilhar</span>
                    </div>

                    <button
                      id="modal-mute-btn"
                      onClick={() => setVideoMuted(!videoMuted)}
                      className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60"
                    >
                      {videoMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-pulse" />}
                    </button>
                  </div>

                  {/* Caption info at bottom left */}
                  <div className="absolute left-4 right-20 bottom-4 text-left z-20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full ${selectedVideo.avatarBg} text-white flex items-center justify-center font-bold text-xs`}>
                        {selectedVideo.customerName[1]}
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-white">
                          {selectedVideo.customerName}
                        </h4>
                        <p className="text-[10px] text-white/70">
                          {selectedVideo.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-stone-200 line-clamp-2 md:line-clamp-none leading-relaxed">
                      {selectedVideo.caption}
                    </p>
                  </div>

                  {/* Simulated timeline scrubber progress */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-700">
                    <motion.div
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                      className="h-full bg-[#E1AD01]"
                    />
                  </div>

                  {/* Floating dismiss info */}
                  <div className="absolute top-4 right-4 z-30">
                    <button
                      id="close-reels-btn"
                      onClick={() => setSelectedVideo(null)}
                      className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-[#E1AD01] hover:bg-black/80 flex items-center justify-center text-lg font-bold"
                    >
                      ✕
                    </button>
                  </div>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
