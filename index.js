// script.js - ESTILO NÓRDICO - PRODUCTOS REALES

document.addEventListener('DOMContentLoaded', function() {
    // ===== ELEMENTOS PRINCIPALES =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const productModal = document.getElementById('productModal');
    const closeModalBtn = document.querySelector('.modal-close');
    const closeModalBtn2 = document.querySelector('.btn-close-modal');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    // ===== CARRUSEL HERO =====
    const heroTrack = document.querySelector('.carousel-track');
    const heroSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.hero .prev');
    const nextBtn = document.querySelector('.hero .next');
    const heroDots = document.querySelectorAll('.hero .dot');
    
    let heroCurrentSlide = 0;
    const heroTotalSlides = heroSlides.length;
    let heroAutoSlide;
    
    // ===== BASE DE DATOS DE PRODUCTOS REALES =====
    const products = {
        1: {
            name: "Escritorio Industrial 1.20m",
            category: "Escritorios Industriales",
            price: "Consultar Precio",
            description: "Escritorio industrial de 1.20 metros fabricado en madera maciza con estructura metálica robusta. Perfecto para espacios de trabajo compactos. Acabado industrial que resalta la veta natural de la madera.",
            images: [
                "imagenes/escritorios/120/k1escritorio01.png",
                "imagenes/escritorios/120/k1escritorio02.png"
            ],
            specs: [
                { name: "Material", value: "Madera maciza y hierro" },
                { name: "Dimensiones", value: "120cm x 60cm x 75cm" },
                { name: "Peso", value: "25 kg" },
                { name: "Color", value: "Natural industrial" },
                { name: "Garantía", value: "1 año" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Industrial 1.20m"
        },
        2: {
            name: "Escritorio Industrial 1.30m",
            category: "Escritorios Industriales",
            price: "Consultar Precio",
            description: "Escritorio de 1.30 metros con diseño robusto y patas metálicas reforzadas. Ideal para profesionales que necesitan un espacio de trabajo resistente y elegante.",
            images: [
                "imagenes/escritorios/130/k2escritorio01.png",
                "imagenes/escritorios/130/k2escritorio02.png"
            ],
            specs: [
                { name: "Material", value: "Madera maciza y acero" },
                { name: "Dimensiones", value: "130cm x 65cm x 75cm" },
                { name: "Peso", value: "28 kg" },
                { name: "Color", value: "Marrón natural" },
                { name: "Acabado", value: "Barniz mate" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Industrial 1.30m"
        },
        3: {
            name: "Escritorio Industrial 1.60m",
            category: "Escritorios Industriales",
            price: "Consultar Precio",
            description: "Elegante escritorio de 1.60 metros fabricado en madera de roble con acabado industrial. Perfecto para espacios de trabajo amplios y modernos.",
            images: [
                "imagenes/escritorios/160/k3escritorio01.jpg",
                "imagenes/escritorios/160/k3escritorio02.jpg"
            ],
            specs: [
                { name: "Material", value: "Roble macizo y hierro" },
                { name: "Dimensiones", value: "160cm x 80cm x 75cm" },
                { name: "Peso", value: "35 kg" },
                { name: "Color", value: "Roble natural" },
                { name: "Garantía", value: "2 años" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Industrial 1.60m"
        },
        4: {
            name: "Escritorio Industrial 2.00m",
            category: "Escritorios Industriales",
            price: "Consultar Precio",
            description: "Impresionante escritorio de 2 metros para espacios amplios. Diseño elegante con estructura metálica y tapa de madera maciza. Ideal para oficinas ejecutivas.",
            images: [
                "imagenes/escritorios/200/k4escritorio01.jpg",
                "imagenes/escritorios/200/k4escritorio02.jpg",
                "imagenes/escritorios/200/k4escritorio03.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera maciza y metal" },
                { name: "Dimensiones", value: "200cm x 100cm x 75cm" },
                { name: "Peso", value: "45 kg" },
                { name: "Color", value: "Tono medio" },
                { name: "Capacidad", value: "Espacio amplio" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Industrial 2.00m"
        },
        5: {
            name: "Mesa Industrial K1",
            category: "Mesas Industriales",
            price: "Consultar Precio",
            description: "Mesa industrial robusta con base metálica y tapa de madera maciza. Perfecta para comedores con estilo industrial.",
            images: [
                "imagenes/mesas/k1/k1mesa01.jpg",
                "imagenes/mesas/k1/k1mesa02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera maciza y hierro" },
                { name: "Dimensiones", value: "180cm x 90cm x 75cm" },
                { name: "Peso", value: "40 kg" },
                { name: "Capacidad", value: "6-8 personas" },
                { name: "Acabado", value: "Industrial" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Industrial K1"
        },
        6: {
            name: "Mesa Industrial K2",
            category: "Mesas Industriales",
            price: "Consultar Precio",
            description: "Mesa de diseño clásico con herrajes metálicos visibles. Estructura robusta para uso diario intensivo.",
            images: [
                "imagenes/mesas/k2/k2mesa01.jpg",
                "imagenes/mesas/k2/k2mesa02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "160cm x 85cm x 75cm" },
                { name: "Peso", value: "38 kg" },
                { name: "Capacidad", value: "6 personas" },
                { name: "Herrajes", value: "Visibles" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Industrial K2"
        },
        7: {
            name: "Mesa Industrial K3",
            category: "Mesas Industriales",
            price: "Consultar Precio",
            description: "Mesa con acabado rústico y patas cruzadas de hierro forjado. Diseño único que combina lo rústico con lo industrial.",
            images: [
                "imagenes/mesas/k3/k3mesa01.jpg",
                "imagenes/mesas/k3/k3mesa02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera reciclada y hierro" },
                { name: "Dimensiones", value: "200cm x 95cm x 75cm" },
                { name: "Peso", value: "42 kg" },
                { name: "Capacidad", value: "8 personas" },
                { name: "Estilo", value: "Rústico-industrial" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Industrial K3"
        },
        8: {
            name: "Rack TV Industrial K1",
            category: "Racks para Televisores",
            price: "Consultar Precio",
            description: "Rack TV industrial con compartimentos para equipos de sonido y videojuegos. Estructura robusta en metal y madera.",
            images: [
                "imagenes/racks/k1/k1Rack01.jpg",
                "imagenes/racks/k1/k1Rack02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "120cm x 40cm x 50cm" },
                { name: "Peso", value: "22 kg" },
                { name: "Capacidad TV", value: "Hasta 55 pulgadas" },
                { name: "Compartimentos", value: "3 estantes" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Industrial K1"
        },
        9: {
            name: "Rack TV Industrial K2",
            category: "Racks para Televisores",
            price: "Consultar Precio",
            description: "Rack TV modular con estantes ajustables. Diseño industrial moderno perfecto para salas de estar contemporáneas.",
            images: [
                "imagenes/racks/k2/k2Rack01.jpg",
                "imagenes/racks/k2/k2Rack02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera de pino y acero" },
                { name: "Dimensiones", value: "140cm x 45cm x 55cm" },
                { name: "Peso", value: "25 kg" },
                { name: "Capacidad TV", value: "Hasta 65 pulgadas" },
                { name: "Estantes", value: "Ajustables" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Industrial K2"
        },
        10: {
            name: "Mesita Industrial K1",
            category: "Mesitas Industriales",
            price: "Consultar Precio",
            description: "Mesita industrial compacta con estante inferior. Diseño funcional ideal para espacios reducidos.",
            images: [
                "imagenes/mesitas/k1/k1mesita01.jpg",
                "imagenes/mesitas/k1/k1mesita02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "50cm x 50cm x 45cm" },
                { name: "Peso", value: "10 kg" },
                { name: "Forma", value: "Cuadrada" },
                { name: "Estante", value: "Inferior" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Industrial K1"
        },
        11: {
            name: "Mesita Industrial K2",
            category: "Mesitas Industriales",
            price: "Consultar Precio",
            description: "Mesita cuadrada con cajón metálico. Diseño industrial con detalles en metal forjado.",
            images: [
                "imagenes/mesitas/k2/k2mesita01.jpg",
                "imagenes/mesitas/k2/k2mesita02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera de pino y hierro" },
                { name: "Dimensiones", value: "55cm x 55cm x 48cm" },
                { name: "Peso", value: "12 kg" },
                { name: "Cajón", value: "Metálico" },
                { name: "Uso", value: "Living o dormitorio" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Industrial K2"
        },
        12: {
            name: "Mesita Industrial K3",
            category: "Mesitas Industriales",
            price: "Consultar Precio",
            description: "Mesita redonda con base de trípode metálico. Diseño elegante que se adapta a cualquier decoración.",
            images: [
                "imagenes/mesitas/k3/k3mesita01.jpg",
                "imagenes/mesitas/k3/k3mesita02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "Ø60cm x 45cm" },
                { name: "Peso", value: "11 kg" },
                { name: "Forma", value: "Redonda" },
                { name: "Base", value: "Trípode metálico" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Industrial K3"
        },
        13: {
            name: "Estantería Industrial K1",
            category: "Estanterías Industriales",
            price: "Consultar Precio",
            description: "Estantería modular de 4 niveles con estructura metálica visible. Ideal para libros y decoración.",
            images: [
                "imagenes/estanterias/k1/k1estanteria01.jpg",
                "imagenes/estanterias/k1/k1estanteria02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera y hierro" },
                { name: "Dimensiones", value: "160cm x 80cm x 30cm" },
                { name: "Peso", value: "28 kg" },
                { name: "Niveles", value: "4 estantes" },
                { name: "Carga máx.", value: "20 kg por estante" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Industrial K1"
        },
        14: {
            name: "Estantería Industrial K2",
            category: "Estanterías Industriales",
            price: "Consultar Precio",
            description: "Estantería con estructura metálica completamente visible. Diseño industrial auténtico para espacios modernos.",
            images: [
                "imagenes/estanterias/k2/k2estanteria01.jpg",
                "imagenes/estanterias/k2/k2estanteria02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera de pino y acero" },
                { name: "Dimensiones", value: "180cm x 90cm x 35cm" },
                { name: "Peso", value: "32 kg" },
                { name: "Niveles", value: "5 estantes" },
                { name: "Estilo", value: "Industrial puro" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Industrial K2"
        },
        15: {
            name: "Estantería Industrial K3",
            category: "Estanterías Industriales",
            price: "Consultar Precio",
            description: "Estantería en forma de escalera con 5 estantes. Diseño único y funcional para cualquier ambiente.",
            images: [
                "imagenes/estanterias/k3/k3estanteria01.jpg",
                "imagenes/estanterias/k3/k3estanteria02.jpg"
            ],
            specs: [
                { name: "Material", value: "Madera maciza y metal" },
                { name: "Dimensiones", value: "170cm x 85cm x 40cm" },
                { name: "Peso", value: "30 kg" },
                { name: "Compartimentos", value: "5 estantes" },
                { name: "Forma", value: "Escalera" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Industrial K3"
        }
    };

    // ===== FUNCIONES DEL CARRUSEL HERO =====
    function updateHeroCarousel() {
        heroTrack.style.transform = `translateX(-${heroCurrentSlide * 100}%)`;
        
        heroDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === heroCurrentSlide);
        });
        
        heroSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === heroCurrentSlide);
        });
    }

    function heroNextSlide() {
        heroCurrentSlide = (heroCurrentSlide + 1) % heroTotalSlides;
        updateHeroCarousel();
    }

    function heroPrevSlide() {
        heroCurrentSlide = (heroCurrentSlide - 1 + heroTotalSlides) % heroTotalSlides;
        updateHeroCarousel();
    }

    function heroGoToSlide(index) {
        heroCurrentSlide = index;
        updateHeroCarousel();
        resetHeroAutoSlide();
    }

    function resetHeroAutoSlide() {
        clearInterval(heroAutoSlide);
        startHeroAutoSlide();
    }

    function startHeroAutoSlide() {
        heroAutoSlide = setInterval(heroNextSlide, 5000);
    }

    // ===== CONTROL TÁCTIL HERO =====
    let heroTouchStartX = 0;
    let heroTouchEndX = 0;

    function handleHeroTouchStart(e) {
        heroTouchStartX = e.changedTouches[0].screenX;
    }

    function handleHeroTouchEnd(e) {
        heroTouchEndX = e.changedTouches[0].screenX;
        handleHeroSwipe();
    }

    function handleHeroSwipe() {
        const swipeThreshold = 50;
        const difference = heroTouchStartX - heroTouchEndX;
        
        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                heroNextSlide();
            } else {
                heroPrevSlide();
            }
            resetHeroAutoSlide();
        }
    }

    // ===== CLASE CARRUSEL DE PRODUCTOS =====
    class ProductsCarousel {
        constructor(container) {
            this.container = container;
            this.track = container.querySelector('.products-carousel-track');
            this.cards = Array.from(container.querySelectorAll('.product-card'));
            this.prevBtn = container.querySelector('.prev-arrow');
            this.nextBtn = container.querySelector('.next-arrow');
            this.dots = container.querySelectorAll('.carousel-dot');
            
            // Calcular dimensiones
            this.currentIndex = 0;
            this.totalCards = this.cards.length;
            
            // Inicializar
            this.init();
            this.calculateDimensions();
        }
        
        init() {
            // Event listeners para flechas
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => this.prev());
            }
            
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => this.next());
            }
            
            // Event listeners para dots
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goTo(index));
            });
            
            // Control táctil
            this.addTouchControls();
            
            // Responsive
            window.addEventListener('resize', () => this.handleResize());
            
            // Actualizar visibilidad de flechas inicial
            this.updateArrows();
            this.updateDots();
        }
        
        calculateDimensions() {
            // Calcular cuántos productos caben en la pantalla
            if (this.cards.length === 0) return;
            
            const cardStyle = window.getComputedStyle(this.cards[0]);
            const trackStyle = window.getComputedStyle(this.track);
            
            const cardWidth = this.cards[0].offsetWidth;
            const trackWidth = this.track.offsetWidth;
            const gap = parseInt(trackStyle.gap) || 30;
            
            // Calcular cuántos productos caben
            this.cardsPerView = Math.floor(trackWidth / (cardWidth + gap));
            
            // Asegurar que cardsPerView sea al menos 1
            this.cardsPerView = Math.max(1, this.cardsPerView);
            
            // Actualizar posición
            this.updatePosition();
        }
        
        addTouchControls() {
            let touchStartX = 0;
            let touchEndX = 0;
            const threshold = 50;
            
            this.track.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            this.track.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe(touchStartX, touchEndX, threshold);
            }, { passive: true });
        }
        
        handleSwipe(startX, endX, threshold) {
            const difference = startX - endX;
            
            if (Math.abs(difference) > threshold) {
                if (difference > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        }
        
        handleResize() {
            setTimeout(() => {
                this.calculateDimensions();
            }, 100);
        }
        
        updatePosition() {
            if (this.cards.length === 0) return;
            
            const cardStyle = window.getComputedStyle(this.cards[0]);
            const trackStyle = window.getComputedStyle(this.track);
            const cardWidth = this.cards[0].offsetWidth;
            const gap = parseInt(trackStyle.gap) || 30;
            
            // Calcular desplazamiento
            const offset = -this.currentIndex * (cardWidth + gap);
            this.track.style.transform = `translateX(${offset}px)`;
            
            // Actualizar UI
            this.updateDots();
            this.updateArrows();
        }
        
        updateDots() {
            if (!this.dots.length) return;
            
            // Calcular número máximo de slides
            const maxSlides = Math.max(0, this.totalCards - this.cardsPerView + 1);
            
            this.dots.forEach((dot, index) => {
                const isActive = index === this.currentIndex;
                dot.classList.toggle('active', isActive);
                
                // Mostrar solo los dots necesarios
                if (index < maxSlides) {
                    dot.style.display = 'block';
                } else {
                    dot.style.display = 'none';
                }
            });
        }
        
        updateArrows() {
            if (this.prevBtn) {
                this.prevBtn.disabled = this.currentIndex === 0;
            }
            
            if (this.nextBtn) {
                const maxIndex = Math.max(0, this.totalCards - this.cardsPerView);
                this.nextBtn.disabled = this.currentIndex >= maxIndex;
            }
        }
        
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updatePosition();
            }
        }
        
        next() {
            const maxIndex = Math.max(0, this.totalCards - this.cardsPerView);
            if (this.currentIndex < maxIndex) {
                this.currentIndex++;
                this.updatePosition();
            }
        }
        
        goTo(index) {
            // Validar índice
            const maxIndex = Math.max(0, this.totalCards - this.cardsPerView);
            const validIndex = Math.max(0, Math.min(index, maxIndex));
            
            this.currentIndex = validIndex;
            this.updatePosition();
        }
    }

    // ===== FUNCIONES DEL MODAL =====
    function openProductModal(productId) {
        const product = products[productId];
        if (!product) {
            console.error(`Producto con ID ${productId} no encontrado`);
            return;
        }

        // Actualizar contenido
        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalCategory').textContent = product.category;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('modalDescription').textContent = product.description;

        // Actualizar imágenes
        const mainImg = document.getElementById('modalImage');
        const thumbs = document.querySelectorAll('.thumb');
        
        if (product.images[0]) {
            mainImg.src = product.images[0];
            mainImg.alt = product.name;
        }
        
        thumbs.forEach((thumb, index) => {
            if (product.images[index]) {
                thumb.src = product.images[index];
                thumb.style.display = 'block';
                thumb.alt = `${product.name} - Imagen ${index + 1}`;
                thumb.classList.toggle('active', index === 0);
                
                thumb.onclick = () => {
                    mainImg.src = product.images[index];
                    thumbs.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                };
            } else {
                thumb.style.display = 'none';
            }
        });

        // Actualizar especificaciones
        const specsList = document.getElementById('modalSpecs');
        specsList.innerHTML = '';
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${spec.name}</span><span>${spec.value}</span>`;
            specsList.appendChild(li);
        });

        // Configurar botón de WhatsApp
        const encodedMessage = encodeURIComponent(product.whatsappMessage);
        whatsappBtn.onclick = () => {
            window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
        };

        // Mostrar modal - Pantalla completa
        productModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Forzar scroll al inicio
        setTimeout(() => {
            productModal.scrollTop = 0;
            document.querySelector('.modal-container').scrollTop = 0;
        }, 10);
    }

    function closeProductModal() {
        productModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // ===== MENÚ HAMBURGUESA =====
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== EVENT LISTENERS HERO =====
    if (prevBtn) prevBtn.addEventListener('click', () => {
        heroPrevSlide();
        resetHeroAutoSlide();
    });
    
    if (nextBtn) nextBtn.addEventListener('click', () => {
        heroNextSlide();
        resetHeroAutoSlide();
    });
    
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            heroGoToSlide(index);
        });
    });

    // Control táctil hero
    heroTrack.addEventListener('touchstart', handleHeroTouchStart, { passive: true });
    heroTrack.addEventListener('touchend', handleHeroTouchEnd, { passive: true });

    // ===== EVENT LISTENERS MODAL =====
    // Botones Ver Producto (delegación de eventos para los nuevos carruseles)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-view') || e.target.closest('.btn-view')) {
            e.stopPropagation();
            const btn = e.target.classList.contains('btn-view') ? e.target : e.target.closest('.btn-view');
            const productId = btn.getAttribute('data-id');
            openProductModal(productId);
        }
    });

    // Cerrar modal
    closeModalBtn.addEventListener('click', closeProductModal);
    closeModalBtn2.addEventListener('click', closeProductModal);
    
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProductModal();
    });

    // ===== SCROLL SPY =====
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== INICIALIZACIÓN CARRUSELES DE PRODUCTOS =====
    const productContainers = document.querySelectorAll('.products-carousel-container');
    const carousels = [];
    
    productContainers.forEach(container => {
        const carousel = new ProductsCarousel(container);
        carousels.push(carousel);
        
        // Recalcular cuando se carguen las imágenes
        const images = container.querySelectorAll('img');
        let loadedImages = 0;
        
        images.forEach(img => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                    if (loadedImages === images.length) {
                        carousel.handleResize();
                    }
                });
            }
        });
        
        if (loadedImages === images.length) {
            setTimeout(() => carousel.handleResize(), 100);
        }
    });
    
    // Recalcular carruseles al redimensionar ventana
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            carousels.forEach(carousel => carousel.handleResize());
        }, 250);
    });

    // ===== INICIALIZACIÓN GENERAL =====
    // Iniciar carrusel hero automático
    startHeroAutoSlide();
    
    // Pausar hero al hacer hover
    heroTrack.addEventListener('mouseenter', () => clearInterval(heroAutoSlide));
    heroTrack.addEventListener('mouseleave', startHeroAutoSlide);

    console.log('✅ Estilo Nórdico - PRODUCTOS REALES CARGADOS');
    console.log('📦 TOTAL PRODUCTOS: 15 productos reales');
    console.log('🎯 ESCRITORIOS: 4 modelos');
    console.log('🎯 MESAS: 3 modelos');
    console.log('🎯 RACKS TV: 2 modelos');
    console.log('🎯 MESITAS INDUSTRIALES: 3 modelos');
    console.log('🎯 ESTANTERÍAS: 3 modelos');
});
