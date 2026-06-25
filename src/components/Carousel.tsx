import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Definição do tipo para os depoimentos dos clientes (UGC)
interface UGCItem {
  id: string;
  videoUrl: string;
}

// Lista de depoimentos em formato de vídeo local na pasta "public/videos".
const UGC_DATA: UGCItem[] = [
  {
    id: "ugc-1",
    videoUrl: "/videos/08017422-B97A-4172-8726-286A4B189D7E.mp4",
  },
  {
    id: "ugc-2",
    videoUrl: "/videos/2A6146C9-8F85-4B96-A94C-FA5A8A606CF6.mp4",
  },
  {
    id: "ugc-3",
    videoUrl: "/videos/C65EE915-00D4-407A-B853-E5C87022C2AC.mp4",
  },
  {
    id: "ugc-4",
    videoUrl: "/videos/E50B6936-B63F-4287-BB9F-E87111F89AE2.mp4",
  },
  {
    id: "ugc-5",
    videoUrl: "/videos/E8051F15-8608-4DD0-9CF0-B3D1A6164A5B.mp4",
  },
];

// Componente de placeholder premium para lazy loading dos vídeos
function VideoPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#4B3621]/15 to-[#E1AD01]/10 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Efeito shimmer/brilho suave passando de forma contínua */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
      
      {/* Ícone de play estético com blur */}
      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white/50 shadow-inner scale-95 transition-transform duration-[350ms]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 fill-current">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      </div>
      <span className="text-[10px] uppercase font-bold tracking-wider text-[#4B3621]/30 mt-3 select-none">Batata Mania UGC</span>
    </div>
  );
}

// Componente auxiliar para reproduzir o vídeo de depoimento de forma inteligente e performática
interface CarouselVideoProps {
  src: string;
  isActive: boolean;
  preload: "auto" | "metadata" | "none";
  isPaused: boolean;
}

function CarouselVideo({ src, isActive, preload, isPaused }: CarouselVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive && !isPaused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay impedido ou pausado:", error);
        });
      }
    } else {
      video.pause();
      try {
        video.currentTime = 0.1;
      } catch (e) {
        // Ignora erros caso o elemento de mídia ainda não tenha carregado metadados
      }
    }
  }, [isActive, isPaused]);

  // Garante a liberação de recursos de mídia ao desmontar o componente
  useEffect(() => {
    const video = videoRef.current;
    return () => {
      if (video) {
        video.pause();
        video.removeAttribute("src");
        video.load();
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={`${src}#t=0.1`}
      muted
      loop
      playsInline
      preload={preload}
      className="w-full h-full object-cover"
    />
  );
}

// Componente de player de vídeo otimizado para o modal, liberando recursos ao desmontar
interface ModalVideoPlayerProps {
  src: string;
}

function ModalVideoPlayer({ src }: ModalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Autoplay do modal impedido:", error);
      });
    }

    return () => {
      if (video) {
        video.pause();
        video.removeAttribute("src");
        video.load();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      playsInline
      className="w-full h-full object-contain"
    />
  );
}

export default function Carousel() {
  const L = UGC_DATA.length;
  // Criamos uma lista estendida com 5 cópias dos depoimentos para suportar o loop infinito sem emendas
  const extendedData = [...UGC_DATA, ...UGC_DATA, ...UGC_DATA, ...UGC_DATA, ...UGC_DATA];

  // Iniciamos no primeiro item da cópia central (índice 2 * L = 8)
  const [activeIndex, setActiveIndex] = useState(2 * L);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<UGCItem | null>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Estado para adiar o carregamento de vídeos até que a página esteja montada (PageSpeed/Smooth transition)
  const [shouldLoadVideos, setShouldLoadVideos] = useState(false);

  useEffect(() => {
    // Pequeno atraso de 500ms para garantir que as animações de entrada iniciais do site tenham terminado
    const timer = setTimeout(() => {
      setShouldLoadVideos(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Configuração de largura e espaçamento responsivos dos cards
  const [cardWidth, setCardWidth] = useState(320);
  const [gap, setGap] = useState(24);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(250);
        setGap(12);
      } else if (window.innerWidth < 1024) {
        setCardWidth(290);
        setGap(18);
      } else {
        setCardWidth(330);
        setGap(24);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Avança para o próximo slide
  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  // Volta para o slide anterior
  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  // Temporizador do Autoplay (pausa se o modal estiver aberto)
  useEffect(() => {
    if (autoPlay && !selectedVideo) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNext();
      }, 4200);
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [autoPlay, activeIndex, selectedVideo]);

  // Restaura a transição de mola elástica no próximo frame após um salto instantâneo
  useEffect(() => {
    if (!transitionEnabled) {
      const raf = requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [transitionEnabled]);

  // Pausa temporariamente o autoplay após ação manual do usuário
  const handleManualAction = (action: () => void) => {
    setAutoPlay(false);
    action();
    // Retoma o autoplay após 12 segundos de inatividade
    setTimeout(() => {
      setAutoPlay(true);
    }, 12000);
  };

  // Deslocamento para centralizar exatamente o card ativo na tela
  const translateX = - (cardWidth / 2) - activeIndex * (cardWidth + gap);

  // Manipulador do fim da animação do carrossel para reposicionamento instantâneo
  const handleAnimationComplete = () => {
    // Se avançou além da cópia do meio, dá o salto imperceptível para trás
    if (activeIndex >= 3 * L) {
      setTransitionEnabled(false);
      setActiveIndex(activeIndex - L);
    }
    // Se retrocedeu aquém da cópia do meio, dá o salto imperceptível para frente
    else if (activeIndex < L) {
      setTransitionEnabled(false);
      setActiveIndex(activeIndex + L);
    }
  };

  // Gestos de arrastar para deslizar e encaixar (snap) nos cartões
  const handleDragEnd = (
    event: any,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipeThreshold = 50; // limite de pixels para mudar de card
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    let newIndex = activeIndex;
    if (offset < -swipeThreshold || velocity < -500) {
      newIndex = activeIndex + 1;
    } else if (offset > swipeThreshold || velocity > 500) {
      newIndex = activeIndex - 1;
    }

    // Mantém o índice dentro dos limites de segurança dos dados estendidos
    newIndex = Math.max(0, Math.min(extendedData.length - 1, newIndex));

    handleManualAction(() => {
      setActiveIndex(newIndex);
    });
  };

  return (
    <div id="ugc-carousel-section" className="relative w-full max-w-7xl mx-auto px-4 py-8">

      {/* Cabeçalho com Título e Setas de Navegação */}
      <div className="flex flex-col items-center justify-center mb-8 gap-4">
        <div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#4B3621] text-center">
            Quem come, <span className="italic font-medium text-[#E1AD01]">apaixona</span>!
          </h3>
        </div>

        {/* Setas de controle do Carrossel */}
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

      {/* Janela de Visualização Principal */}
      <div id="carousel-viewport" className="overflow-hidden py-10 px-2 rounded-2xl relative w-full">
        <motion.div
          id="carousel-slider-track"
          drag="x"
          dragConstraints={{ left: translateX, right: translateX }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
          onAnimationComplete={handleAnimationComplete}
          style={{
            position: "relative",
            left: "50%",
            width: "max-content",
            display: "flex",
            gap: `${gap}px`,
            touchAction: "pan-y",
          }}
          animate={{ x: translateX }}
          transition={transitionEnabled ? { type: "spring", stiffness: 100, damping: 22 } : { duration: 0 }}
        >
          {extendedData.map((item, index) => {
            const isActive = index === activeIndex;
            // Só renderiza o vídeo se estiver ativo ou se for um vizinho imediato (distância de até 1)
            const isNearActive = Math.abs(index - activeIndex) <= 1;

            return (
              <motion.div
                id={`carousel-item-${item.id}-${index}`}
                key={`${item.id}-${index}`}
                style={{ width: `${cardWidth}px`, flexShrink: 0 }}
                className="relative py-4 select-none"
                animate={{
                  scale: isActive ? 1.05 : 0.85,
                  opacity: isActive ? 1 : 0.45,
                  zIndex: isActive ? 20 : 10,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 22 }}
              >
                {/* Container do Card - Acessível e clicável para abrir o modal de reprodução com som */}
                <button
                  onClick={() => handleManualAction(() => setSelectedVideo(item))}
                  className={`w-full text-left rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E1AD01] select-none transition-all duration-500 ${isActive
                      ? "bg-transparent border border-transparent shadow-2xl shadow-[#4B3621]/20"
                      : "bg-white/30 border border-white/40 shadow-md"
                    }`}
                  aria-label={`Reproduzir depoimento ${index + 1}`}
                >
                  {/* Seção do Vídeo - Proporção exata de 9:16 */}
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#4B3621]/5 rounded-3xl">
                    {shouldLoadVideos && isNearActive ? (
                      <CarouselVideo
                        src={item.videoUrl}
                        isActive={isActive}
                        preload={isActive ? "auto" : "metadata"}
                        isPaused={selectedVideo !== null}
                      />
                    ) : (
                      <VideoPlaceholder />
                    )}

                    {/* Camada absoluta de degradê linear horizontal nas laterais do item ativo */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none z-10 rounded-3xl"
                      style={{
                        background: "linear-gradient(to right, rgba(242, 235, 227, 0.5) 0%, rgba(242, 235, 227, 0) 8%, rgba(242, 235, 227, 0) 92%, rgba(242, 235, 227, 0.5) 100%)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Indicadores de bolinhas do Carrossel (mapeados para os itens originais da lista) */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {UGC_DATA.map((_, index) => {
          const isDotActive = (activeIndex % L) === index;
          return (
            <button
              id={`carousel-dot-${index}`}
              key={index}
              onClick={() => handleManualAction(() => {
                // Posiciona na cópia central correspondente
                setActiveIndex(2 * L + index);
              })}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${isDotActive ? "w-6 bg-[#E1AD01]" : "w-1.5 bg-[#4B3621]/20 hover:bg-[#4B3621]/40"
                }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          );
        })}
      </div>

      {/* Modal de visualização ampliada do vídeo (Reels) */}
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
            {/* Box do Player de Vídeo */}
            <motion.div
              id="video-player-box"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm md:max-w-md bg-stone-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col aspect-[9/16]"
            >
              {/* Player de Vídeo com Controles e Áudio habilitado */}
              <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center">
                <ModalVideoPlayer src={selectedVideo.videoUrl} />

                {/* Botão flutuante para fechar */}
                <div className="absolute top-4 right-4 z-30">
                  <button
                    id="close-reels-btn"
                    onClick={() => setSelectedVideo(null)}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-[#E1AD01] hover:bg-black/80 flex items-center justify-center text-lg font-bold cursor-pointer transition-colors"
                    aria-label="Fechar vídeo"
                  >
                    ✕
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
