// index.js - ESTILO NÓRDICO - VERSIÓN CORREGIDA COMPLETA Y FUNCIONAL
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Estilo Nórdico - Sistema inicializado');

    // ===== CONFIGURACIÓN =====
    const CONFIG = {
        carouselSpeed: 300,
        heroAutoSlideInterval: 5000
    };

    // ===== ELEMENTOS =====
    const hamburger = document.querySelector('.hamburger');
    const headerBottom = document.querySelector('.header-bottom');
    const navLinks = document.querySelectorAll('.nav-link');
    const productModal = document.getElementById('productModal');
    const closeModalBtn = document.querySelector('.modal-close');
    const closeModalBtn2 = document.querySelector('.btn-close-modal');
    const whatsappBtn = document.getElementById('whatsappBtn');

    // ===== CARRUSEL HERO =====
    let heroCurrentSlide = 0;
    const heroSlides = document.querySelectorAll('.carousel-slide');
    const heroTrack = document.querySelector('.carousel-track');
    const heroPrevBtn = document.querySelector('.hero .prev');
    const heroNextBtn = document.querySelector('.hero .next');
    const heroDots = document.querySelectorAll('.hero .dot');
    const heroTotalSlides = heroSlides.length;
    let heroAutoSlide;

    // ===== PRODUCTOS =====
    const products = {
        1: { name: "Escritorio 1.20m", category: "Escritorios Nórdicos", price: "$120.000",
            description: "Escritorio de 1.20 metros fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/escritorios/120/k1escritorio01.png", "imagenes/escritorios/120/k1escritorio02.png"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "120cm x 60cm x 75cm" }],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.20m - Precio: $120.000" },
        2: { name: "Escritorio 1.30m", category: "Escritorios Nórdicos", price: "$150.000",
            description: "Escritorio de 1.30 metros fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/escritorios/130/k2escritorio01.png", "imagenes/escritorios/130/k2escritorio02.png"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "130cm x 65cm x 75cm" }],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.30m - Precio: $150.000" },
        3: { name: "Escritorio 1.60m", category: "Escritorios Nórdicos", price: "$200.000",
            description: "Elegante escritorio de 1.60 metros fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/escritorios/160/k3escritorio01.jpg", "imagenes/escritorios/160/k3escritorio02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "160cm x 80cm x 75cm" }],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.60m - Precio: $200.000" },
        4: { name: "Escritorio 2.00m", category: "Escritorios Nórdicos", price: "$250.000",
            description: "Impresionante escritorio de 2 metros para espacios amplios.", images: ["imagenes/escritorios/200/k4escritorio01.jpg", "imagenes/escritorios/200/k4escritorio02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "200cm x 100cm x 75cm" }],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 2.00m - Precio: $250.000" },
        5: { name: "Mesa Modelo Trineo", category: "Mesas Nórdicas", price: "$200.000",
            description: "Mesa de diseño nórdico con base en forma de trineo.", images: ["imagenes/mesas/k1/k1mesa01.jpg", "imagenes/mesas/k1/k1mesa02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "150cm x 90cm x 75cm" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo Trineo - Precio: $200.000" },
        6: { name: "Mesa Modelo U", category: "Mesas Nórdicas", price: "$220.000",
            description: "Mesa con base en forma de U, diseño industrial nórdico.", images: ["imagenes/mesas/k2/k2mesa01.jpg", "imagenes/mesas/k2/k2mesa02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "160cm x 90cm x 75cm" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo U - Precio: $220.000" },
        7: { name: "Mesa Modelo X", category: "Mesas Nórdicas", price: "$250.000",
            description: "Mesa con base en forma de X, elegante y robusta.", images: ["imagenes/mesas/k3/k3mesa01.jpg", "imagenes/mesas/k3/k3mesa02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "180cm x 90cm x 75cm" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo X - Precio: $250.000" },
        8: { name: "Rack TV Nórdico K1", category: "Racks TV Nórdicos", price: "$120.000",
            description: "Rack TV con diseño minimalista nórdico.", images: ["imagenes/racks/k1/k1Rack01.jpg", "imagenes/racks/k1/k1Rack02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "120cm x 40cm x 50cm" }],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Nórdico K1 - Precio: $120.000" },
        9: { name: "Rack TV Nórdico K2", category: "Racks TV Nórdicos", price: "$150.000",
            description: "Rack TV con diseño moderno y funcional.", images: ["imagenes/racks/k2/k2Rack01.jpg", "imagenes/racks/k2/k2Rack02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "140cm x 45cm x 55cm" }],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Nórdico K2 - Precio: $150.000" },
        10: { name: "Mesita Nórdica K1", category: "Mesitas Nórdicas", price: "$60.000",
            description: "Mesita de centro con diseño nórdico minimalista.", images: ["imagenes/mesitas/k1/k1mesita01.jpg", "imagenes/mesitas/k1/k1mesita02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "80cm x 40cm x 45cm" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K1 - Precio: $60.000" },
        11: { name: "Mesita Nórdica K2", category: "Mesitas Nórdicas", price: "$70.000",
            description: "Mesita de centro con diseño moderno.", images: ["imagenes/mesitas/k2/k2mesita01.jpg", "imagenes/mesitas/k2/k2mesita02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "90cm x 45cm x 45cm" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K2 - Precio: $70.000" },
        12: { name: "Mesita Nórdica K3", category: "Mesitas Nórdicas", price: "$80.000",
            description: "Mesita de centro con diseño elegante y funcional.", images: ["imagenes/mesitas/k3/k3mesita01.jpg", "imagenes/mesitas/k3/k3mesita02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "100cm x 50cm x 45cm" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K3 - Precio: $80.000" },
        13: { name: "Estantería Nórdica K1", category: "Estanterías Nórdicas", price: "$250.000",
            description: "Estantería de pared con diseño nórdico.", images: ["imagenes/estanterias/k1/k1estanteria01.jpg", "imagenes/estanterias/k1/k1estanteria02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "180cm x 120cm x 30cm" }],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K1 - Precio: $250.000" },
        14: { name: "Estantería Nórdica K2", category: "Estanterías Nórdicas", price: "$60.000",
            description: "Estantería pequeña con diseño minimalista.", images: ["imagenes/estanterias/k2/k2estanteria01.jpg", "imagenes/estanterias/k2/k2estanteria02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "100cm x 60cm x 25cm" }],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K2 - Precio: $60.000" },
        15: { name: "Estantería Nórdica K3", category: "Estanterías Nórdicas", price: "$80.000",
            description: "Estantería modular con diseño moderno.", images: ["imagenes/estanterias/k3/k3estanteria01.jpg", "imagenes/estanterias/k3/k3estanteria02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "120cm x 80cm x 30cm" }],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K3 - Precio: $80.000" }
    };

    // ===== CARRUSEL HERO FUNCIONAL =====
    function updateHeroCarousel() {
        heroTrack.style.transform = `translateX(-${heroCurrentSlide * 100}%)`;
        heroDots.forEach((dot, index) => dot.classList.toggle('active', index === heroCurrentSlide));
        heroSlides.forEach((slide, index) => slide.classList.toggle('active', index === heroCurrentSlide));
    }

    function heroNextSlide() {
        heroCurrentSlide = (heroCurrentSlide + 1) % heroTotalSlides;
        updateHeroCarousel();
        resetHeroAutoSlide();
    }

    function heroPrevSlide() {
        heroCurrentSlide = (heroCurrentSlide - 1 + heroTotalSlides) % heroTotalSlides;
        updateHeroCarousel();
        resetHeroAutoSlide();
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
        heroAutoSlide = setInterval(heroNextSlide, CONFIG.heroAutoSlideInterval);
    }

    // ===== CARRUSEL DE PRODUCTOS SIMPLE Y CORRECTO =====
    class SimpleCarousel {
        constructor(container) {
            this.container = container;
            this.track = container.querySelector('.products-carousel-track');
            this.cards = Array.from(container.querySelectorAll('.product-card'));
            this.prevBtn = container.querySelector('.prev-arrow');
            this.nextBtn = container.querySelector('.next-arrow');
            this.dots = Array.from(container.querySelectorAll('.carousel-dot'));
            
            this.currentIndex = 0;
            this.totalCards = this.cards.length;
            this.cardWidth = 0;
            this.gap = 30;
            
            this.init();
        }
        
        init() {
            // Esperar un momento para que las tarjetas tengan su tamaño
            setTimeout(() => {
                this.calculateDimensions();
                this.setupEvents();
                this.updatePosition(true);
                this.updateDots();
                this.updateArrows();
            }, 100);
        }
        
        calculateDimensions() {
            if (this.cards.length === 0 || !this.cards[0]) return;
            
            const firstCard = this.cards[0];
            const cardStyle = window.getComputedStyle(firstCard);
            this.cardWidth = firstCard.offsetWidth + parseInt(cardStyle.marginLeft || 0) + parseInt(cardStyle.marginRight || 0);
            
            // Forzar que el máximo índice sea el correcto
            const trackWidth = this.track.scrollWidth;
            const containerWidth = this.track.parentElement.offsetWidth;
            const maxPossibleIndex = Math.max(0, this.totalCards - Math.floor(containerWidth / this.cardWidth));
            
            // Ajustar el índice actual si es necesario
            if (this.currentIndex > maxPossibleIndex) {
                this.currentIndex = maxPossibleIndex;
            }
        }
        
        setupEvents() {
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => this.prev());
            }
            
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => this.next());
            }
            
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goTo(index));
            });
            
            // Agregar listener para resize
            window.addEventListener('resize', () => {
                this.calculateDimensions();
                this.updatePosition(true);
            });
        }
        
        updatePosition(instant = false) {
            const offset = -this.currentIndex * (this.cardWidth + this.gap);
            
            if (instant) {
                this.track.style.transition = 'none';
            } else {
                this.track.style.transition = `transform ${CONFIG.carouselSpeed}ms ease`;
            }
            
            this.track.style.transform = `translateX(${offset}px)`;
            
            if (instant) {
                this.track.offsetHeight; // Forzar reflow
            }
            
            this.updateDots();
            this.updateArrows();
        }
        
        updateDots() {
            if (this.dots.length === 0) return;
            
            this.dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }
        
        updateArrows() {
            // Calcular el máximo índice basado en el ancho real
            const trackWidth = this.track.scrollWidth;
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / this.cardWidth);
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            // NUNCA DESHABILITAR LOS BOTONES - Comportamiento circular siempre activo
            // Los botones siempre estarán activos para permitir el ciclo infinito
            
            // Actualizar indicadores visuales opcionales
            if (maxIndex === 0) {
                // Si no hay tarjetas para mover, los botones podrían verse más tenues
                if (this.prevBtn) this.prevBtn.style.opacity = '0.5';
                if (this.nextBtn) this.nextBtn.style.opacity = '0.5';
            } else {
                // Botones completamente visibles y funcionales
                if (this.prevBtn) this.prevBtn.style.opacity = '1';
                if (this.nextBtn) this.nextBtn.style.opacity = '1';
            }
        }
        
        next() {
            const trackWidth = this.track.scrollWidth;
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / this.cardWidth);
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            if (maxIndex === 0) {
                // Si no hay tarjetas para mover, no hacer nada
                return;
            }
            
            let animationSpeed = CONFIG.carouselSpeed;
            
            if (this.currentIndex < maxIndex) {
                this.currentIndex++;
            } else {
                // ¡VOLVER AL INICIO CON ANIMACIÓN RE FACHERA!
                this.currentIndex = 0;
                animationSpeed = 800; // Más lento para el efecto especial
                this.track.style.transition = `transform ${animationSpeed}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
            }
            
            const offset = -this.currentIndex * (this.cardWidth + this.gap);
            this.track.style.transform = `translateX(${offset}px)`;
            
            // Restaurar transición normal después de la animación especial
            setTimeout(() => {
                this.track.style.transition = `transform ${CONFIG.carouselSpeed}ms ease`;
            }, animationSpeed + 50);
            
            this.updateDots();
            this.updateArrows();
        }
        
        prev() {
            const trackWidth = this.track.scrollWidth;
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / this.cardWidth);
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            if (maxIndex === 0) return;
            
            let animationSpeed = CONFIG.carouselSpeed;
            
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                // ¡IR AL FINAL CON ANIMACIÓN RE FACHERA!
                this.currentIndex = maxIndex;
                animationSpeed = 800; // Más lento para el efecto especial
                this.track.style.transition = `transform ${animationSpeed}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
            }
            
            const offset = -this.currentIndex * (this.cardWidth + this.gap);
            this.track.style.transform = `translateX(${offset}px)`;
            
            // Restaurar transición normal después de la animación especial
            setTimeout(() => {
                this.track.style.transition = `transform ${CONFIG.carouselSpeed}ms ease`;
            }, animationSpeed + 50);
            
            this.updateDots();
            this.updateArrows();
        }
        
        goTo(index) {
            const trackWidth = this.track.scrollWidth;
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / this.cardWidth);
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            if (index >= 0 && index <= maxIndex) {
                this.currentIndex = index;
                this.updatePosition();
            }
        }
    }

    // ===== MODAL =====
    function openProductModal(productId) {
        const product = products[productId];
        if (!product) return;

        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalCategory').textContent = product.category;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('modalDescription').textContent = product.description;

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

        const specsList = document.getElementById('modalSpecs');
        specsList.innerHTML = '';
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${spec.name}</span><span>${spec.value}</span>`;
            specsList.appendChild(li);
        });

        const encodedMessage = encodeURIComponent(product.whatsappMessage);
        whatsappBtn.onclick = () => {
            window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
        };

        productModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        productModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // ===== MENÚ =====
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            headerBottom.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (headerBottom) headerBottom.classList.remove('active');
        });
    });

    // ===== EVENTOS =====
    if (heroPrevBtn) heroPrevBtn.addEventListener('click', heroPrevSlide);
    if (heroNextBtn) heroNextBtn.addEventListener('click', heroNextSlide);
    heroDots.forEach((dot, index) => dot.addEventListener('click', () => heroGoToSlide(index)));

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-view')) {
            const productId = e.target.getAttribute('data-id');
            openProductModal(productId);
        }
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProductModal);
    if (closeModalBtn2) closeModalBtn2.addEventListener('click', closeProductModal);
    
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProductModal();
    });

    // ===== INICIALIZACIÓN =====
    function initializeCarousels() {
        const productContainers = document.querySelectorAll('.products-carousel-container');
        
        productContainers.forEach((container) => {
            new SimpleCarousel(container);
        });
    }

    function initializeApp() {
        initializeCarousels();
        
        startHeroAutoSlide();
        
        if (heroTrack) {
            heroTrack.addEventListener('mouseenter', () => clearInterval(heroAutoSlide));
            heroTrack.addEventListener('mouseleave', startHeroAutoSlide);
        }
        
        console.log('✅ Sistema inicializado correctamente');
    }

    initializeApp();
});
