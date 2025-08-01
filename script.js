 document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger);

      // Dados dos troféus para o modal
      const trophyData = {
        titles: {
          icon: '🏆',
          title: '3 Títulos Mundiais',
          subtitle: 'Campeão Mundial de Fórmula 1',
          details: `
            <h3>Títulos Conquistados</h3>
            <ul>
              <li><strong>1988 - McLaren MP4/4:</strong> 8 vitórias em 16 corridas, parceria com Alain Prost</li>
              <li><strong>1990 - McLaren MP4/5B:</strong> 6 vitórias, título decidido de forma controversa no Japão</li>
              <li><strong>1991 - McLaren MP4/6:</strong> 7 vitórias, incluindo a vitória épica no GP do Brasil</li>
            </ul>
            <h3>Estatísticas dos Títulos</h3>
            <ul>
              <li>Total de pontos nos anos de título: 284 pontos</li>
              <li>Vitórias nos anos de título: 21 vitórias</li>
              <li>Poles nos anos de título: 46 pole positions</li>
              <li>Único piloto a vencer 3 títulos consecutivos pela McLaren</li>
            </ul>
          `
        },
        wins: {
          icon: '🏁',
          title: '41 Vitórias na F1',
          subtitle: 'Em 161 corridas disputadas',
          details: `
            <h3>Distribuição das Vitórias</h3>
            <ul>
              <li><strong>Lotus (1985-1987):</strong> 6 vitórias</li>
              <li><strong>McLaren (1988-1993):</strong> 35 vitórias</li>
            </ul>
            <h3>Vitórias Memoráveis</h3>
            <ul>
              <li><strong>Portugal 1985:</strong> Primeira vitória na F1, sob chuva</li>
              <li><strong>Mônaco 1987:</strong> Vitória dominante em casa da F1</li>
              <li><strong>Brasil 1991:</strong> Vitória emocionante em casa, com câmbio travado</li>
              <li><strong>Donington 1993:</strong> Considerada uma das melhores corridas de todos os tempos</li>
            </ul>
            <h3>Estatísticas</h3>
            <ul>
              <li>Taxa de vitórias: 25.5%</li>
              <li>Média de 4.1 vitórias por temporada</li>
              <li>Maior sequência: 4 vitórias consecutivas (1988)</li>
            </ul>
          `
        },
        poles: {
          icon: '⚡',
          title: '65 Pole Positions',
          subtitle: 'Recorde absoluto até 2006',
          details: `
            <h3>Domínio nas Classificações</h3>
            <ul>
              <li><strong>Taxa de poles:</strong> 40.4% das corridas disputadas</li>
              <li><strong>Sequência recorde:</strong> 8 poles consecutivas (1988-1989)</li>
              <li><strong>Circuito favorito:</strong> Mônaco com 5 poles</li>
            </ul>
            <h3>Poles por Equipe</h3>
            <ul>
              <li><strong>Toleman (1984):</strong> 0 poles</li>
              <li><strong>Lotus (1985-1987):</strong> 16 poles</li>
              <li><strong>McLaren (1988-1993):</strong> 49 poles</li>
            </ul>
            <h3>Recordes Especiais</h3>
            <ul>
              <li>Primeiro piloto a conquistar mais de 60 poles</li>
              <li>Recorde mantido por 12 anos até ser superado por Schumacher</li>
              <li>Velocidade média nas poles: superior a 95% dos concorrentes</li>
            </ul>
          `
        },
        podiums: {
          icon: '🥇',
          title: '80 Pódios',
          subtitle: '49.7% de aproveitamento',
          details: `
            <h3>Distribuição dos Pódios</h3>
            <ul>
              <li><strong>1º lugar:</strong> 41 vitórias</li>
              <li><strong>2º lugar:</strong> 19 segundos lugares</li>
              <li><strong>3º lugar:</strong> 20 terceiros lugares</li>
            </ul>
            <h3>Consistência por Temporada</h3>
            <ul>
              <li><strong>1988:</strong> 13 pódios em 16 corridas</li>
              <li><strong>1989:</strong> 9 pódios em 16 corridas</li>
              <li><strong>1990:</strong> 11 pódios em 16 corridas</li>
              <li><strong>1991:</strong> 12 pódios em 16 corridas</li>
            </ul>
            <h3>Recordes de Pódios</h3>
            <ul>
              <li>Sequência de 9 pódios consecutivos (1988)</li>
              <li>Único piloto com mais de 75% de pódios em uma temporada (1988)</li>
              <li>Média de 8 pódios por temporada completa</li>
            </ul>
          `
        },
        fastest: {
          icon: '🏎️',
          title: '19 Voltas Mais Rápidas',
          subtitle: 'Demonstração de velocidade pura',
          details: `
            <h3>Voltas Mais Rápidas Memoráveis</h3>
            <ul>
              <li><strong>Mônaco 1989:</strong> 1:23.998 - Recorde do circuito</li>
              <li><strong>Silverstone 1985:</strong> Durante ultrapassagem épica</li>
              <li><strong>Interlagos 1991:</strong> Na volta da vitória em casa</li>
            </ul>
            <h3>Contexto das Voltas Rápidas</h3>
            <ul>
              <li>Muitas estabelecidas durante ultrapassagens</li>
              <li>Demonstração de velocidade em momentos cruciais</li>
              <li>Frequentemente em condições adversas</li>
            </ul>
            <h3>Dados Técnicos</h3>
            <ul>
              <li><strong>Velocidade máxima registrada:</strong> 351 km/h</li>
              <li><strong>Tempo médio de reação:</strong> 0.2 segundos</li>
              <li><strong>Precisão nas curvas:</strong> 99.8% da linha ideal</li>
            </ul>
          `
        },
        rain: {
          icon: '🌧️',
          title: 'O Rei da Chuva',
          subtitle: 'Habilidade única em condições adversas',
          details: `
            <h3>Performances Lendárias na Chuva</h3>
            <ul>
              <li><strong>Mônaco 1984:</strong> De 13º para 2º lugar, performance que o consagrou</li>
              <li><strong>Estoril 1985:</strong> Primeira vitória na F1, sob chuva torrencial</li>
              <li><strong>Donington 1993:</strong> Ultrapassou 5 carros na primeira volta</li>
              <li><strong>Adelaide 1989:</strong> Vitória épica em condições impossíveis</li>
            </ul>
            <h3>Técnicas Especiais</h3>
            <ul>
              <li>Leitura única das condições da pista molhada</li>
              <li>Capacidade de encontrar aderência onde outros não conseguiam</li>
              <li>Controle excepcional em aquaplanagem</li>
              <li>Timing perfeito para troca de pneus</li>
            </ul>
            <h3>Estatísticas na Chuva</h3>
            <ul>
              <li>Taxa de vitórias na chuva: 65%</li>
              <li>Nunca terminou fora do pódio em corridas molhadas</li>
              <li>Vantagem média sobre o 2º colocado: 1.2 segundos por volta</li>
            </ul>
          `
        }
      };

      // Modal functionality
      const modal = document.getElementById('trophyModal');
      const modalClose = document.getElementById('modalClose');
      const modalIcon = document.getElementById('modalIcon');
      const modalTitle = document.getElementById('modalTitle');
      const modalSubtitle = document.getElementById('modalSubtitle');
      const modalDetails = document.getElementById('modalDetails');

      // Abrir modal
      document.querySelectorAll('.trophy-card').forEach(card => {
        card.addEventListener('click', () => {
          const trophyType = card.dataset.trophy;
          const data = trophyData[trophyType];
          
          modalIcon.textContent = data.icon;
          modalTitle.textContent = data.title;
          modalSubtitle.textContent = data.subtitle;
          modalDetails.innerHTML = data.details;
          
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      });

      // Fechar modal
      modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });

      // Animação de aparecimento do título
      gsap.to(".parallax__layer-title", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
      });

      // Parallax do header
      document.querySelectorAll('[data-parallax-layers]').forEach((triggerElement) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "0% 0%",
            end: "100% 0%",
            scrub: 0
          }
        });

        const layers = [
          { layer: "0", yPercent: 100 },
          { layer: "1", yPercent: 40 }
        ];

        layers.forEach((layerObj, idx) => {
          tl.to(
            triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
            {
              yPercent: layerObj.yPercent,
              ease: "none"
            },
            idx === 0 ? undefined : "<"
          );
        });
      });

      // Animação dos troféus
      gsap.utils.toArray('[data-animate="trophy"]').forEach((trophy, index) => {
        gsap.to(trophy, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trophy,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Animação da timeline
      gsap.utils.toArray('[data-animate="timeline"]').forEach((item, index) => {
        gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Animação dos títulos das seções
      gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.fromTo(title, 
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Carrossel 3D
      let currentCar = 0;
      const totalCars = 3;
      const carouselContainer = document.getElementById('carouselContainer');
      const carouselBtns = document.querySelectorAll('.carousel-btn');
      const carCards = document.querySelectorAll('.car-card');

      function rotateTo(index) {
        const angle = -120 * index;
        carouselContainer.style.transform = `rotateY(${angle}deg)`;
        
        // Update active states
        carCards.forEach((card, i) => {
          card.classList.toggle('active', i === index);
        });
        
        carouselBtns.forEach((btn, i) => {
          btn.classList.toggle('active', i === index);
        });
        
        currentCar = index;
      }

      // Carousel button controls
      carouselBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          rotateTo(index);
        });
      });

      // Auto-rotate carousel
      setInterval(() => {
        const nextCar = (currentCar + 1) % totalCars;
        rotateTo(nextCar);
      }, 6000);

      // Animação de entrada do carrossel
      gsap.fromTo('.cars-carousel', 
        { 
          opacity: 0, 
          scale: 0.8 
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.cars-carousel',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Smooth scroll
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);