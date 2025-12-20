// index.js - ESTILO NÓRDICO - VERSIÓN DEFINITIVA CON CARRUSEL PERFECTO
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
    let heroIsAnimating = false;

    // ===== PRODUCTOS =====
    const products = {
        1: { 
            name: "Escritorio 1.20m", 
            category: "Escritorios Nórdicos", 
            price: "$120.000",
            description: "Escritorio de 1.20 metros fabricado con base de hierro y madera de eucalipto.", 
            images: ["imagenes/escritorios/120/k1escritorio01.png", "imagenes/escritorios/120/k1escritorio02.png"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "120cm x 60cm x 75cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.20m - Precio: $120.000" 
        },
        2: { 
            name: "Escritorio 1.30m", 
            category: "Escritorios Nórdicos", 
            price: "$150.000",
            description: "Escritorio de 1.30 metros fabricado con base de hierro y madera de eucalipto.", 
            images: ["imagenes/escritorios/130/k2escritorio01.png", "imagenes/escritorios/130/k2escritorio02.png"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "130cm x 65cm x 75cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.30m - Precio: $150.000" 
        },
        3: { 
            name: "Escritorio 1.60m", 
            category: "Escritorios Nórdicos", 
            price: "$200.000",
            description: "Elegante escritorio de 1.60 metros fabricado con base de hierro y madera de eucalipto.", 
            images: ["imagenes/escritorios/160/k3escritorio01.jpg", "imagenes/escritorios/160/k3escritorio02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "160cm x 80cm x 75cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.60m - Precio: $200.000" 
        },
        4: { 
            name: "Escritorio 2.00m", 
            category: "Escritorios Nórdicos", 
            price: "$250.000",
            description: "Impresionante escritorio de 2 metros para espacios amplios.", 
            images: ["imagenes/escritorios/200/k4escritorio01.jpg", "imagenes/escritorios/200/k4escritorio02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "200cm x 100cm x 75cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 2.00m - Precio: $250.000" 
        },
        5: { 
            name: "Mesa Modelo Trineo", 
            category: "Mesas Nórdicas", 
            price: "$200.000",
            description: "Mesa de comedor con diseño de trineo nórdico.", 
            images: ["imagenes/mesas/k1/k1mesa01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "180cm x 90cm x 75cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo Trineo - Precio: $200.000" 
        },
        6: { 
            name: "Mesa Modelo U", 
            category: "Mesas Nórdicas", 
            price: "$220.000",
            description: "Mesa de comedor con patas en forma de U.", 
            images: ["imagenes/mesas/k2/k2mesa01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "180cm x 90cm x 75cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo U - Precio: $220.000" 
        },
        7: { 
            name: "Mesa Modelo X", 
            category: "Mesas Nórdicas", 
            price: "$250.000",
            description: "Mesa de comedor con patas en forma de X.", 
            images: ["imagenes/mesas/k3/k3mesa01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "200cm x 100cm x 75cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo X - Precio: $250.000" 
        },
        8: { 
            name: "Rack TV Nórdico K1", 
            category: "Racks TV Nórdicos", 
            price: "$120.000",
            description: "Rack para TV con diseño nórdico minimalista.", 
            images: ["imagenes/racks/k1/k1Rack01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "120cm x 40cm x 45cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Nórdico K1 - Precio: $120.000" 
        },
        9: { 
            name: "Rack TV Nórdico K2", 
            category: "Racks TV Nórdicos", 
            price: "$150.000",
            description: "Rack para TV con diseño moderno y funcional.", 
            images: ["imagenes/racks/k2/k2Rack01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "140cm x 45cm x 50cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Nórdico K2 - Precio: $150.000" 
        },
        10: { 
            name: "Mesita Nórdica K1", 
            category: "Mesitas Nórdicas", 
            price: "$60.000",
            description: "Mesita auxiliar con diseño nórdico.", 
            images: ["imagenes/mesitas/k1/k1mesita01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "50cm x 50cm x 45cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K1 - Precio: $60.000" 
        },
        11: { 
            name: "Mesita Nórdica K2", 
            category: "Mesitas Nórdicas", 
            price: "$70.000",
            description: "Mesita auxiliar con diseño moderno.", 
            images: ["imagenes/mesitas/k2/k2mesita01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "55cm x 55cm x 45cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K2 - Precio: $70.000" 
        },
        12: { 
            name: "Mesita Nórdica K3", 
            category: "Mesitas Nórdicas", 
            price: "$80.000",
            description: "Mesita auxiliar con diseño elegante.", 
            images: ["imagenes/mesitas/k3/k3mesita01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "60cm x 60cm x 45cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K3 - Precio: $80.000" 
        },
        13: { 
            name: "Estantería Nórdica K1", 
            category: "Estanterías Nórdicas", 
            price: "$250.000",
            description: "Estantería de pared con diseño nórdico.", 
            images: ["imagenes/estanterias/k1/k1estanteria01.jpg"],
            specs: [
                { name: "Material", value: "Madera de eucalipto" }, 
                { name: "Dimensiones", value: "180cm x 30cm x 200cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K1 - Precio: $250.000" 
        },
        14: { 
            name: "Estantería Nórdica K2", 
            category: "Estanterías Nórdicas", 
            price: "$60.000",
            description: "Estantería de suelo compacta.", 
            images: ["imagenes/estanterias/k2/k2estanteria01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "80cm x 30cm x 120cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K2 - Precio: $60.000" 
        },
        15: { 
            name: "Estantería Nórdica K3", 
            category: "Estanterías Nórdicas", 
            price: "$80.000",
            description: "Estantería de suelo con diseño modular.", 
            images: ["imagenes/estanterias/k3/k3estanteria01.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "100cm x 35cm x 140cm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K3 - Precio: $80.000" 
        }
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

    // ===== CARRUSEL DE PRODUCTOS PERFECTO =====
    class ProductCarousel {
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
            this.cardsPerView = 3;
            this.maxIndex = 0;
            
            this.init();
        }
        
        init() {
            this.calculateDimensions();
            this.setupEvents();
            this.updatePosition(true);
            this.updateDots();
            this.updateArrows();
            
            window.addEventListener('resize', () => {
                this.calculateDimensions();
                this.updatePosition(true);
                this.updateDots();
                this.updateArrows();
            });
        }
        
        calculateDimensions() {
            if (this.cards.length === 0) return;
            
            const firstCard = this.cards[0];
            if (firstCard && firstCard.offsetWidth > 0) {
                this.cardWidth = firstCard.offsetWidth;
                const containerWidth = this.track.parentElement.offsetWidth;
                
                this.cardsPerView = Math.floor(containerWidth / (this.cardWidth + this.gap));
                this.cardsPerView = Math.max(1, this.cardsPerView);
                
                this.maxIndex = Math.max(0, this.totalCards - this.cardsPerView);
                
                console.log(`Tarjetas: ${this.totalCards}, Por vista: ${this.cardsPerView}, Máx índice: ${this.maxIndex}`);
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
        }
        
        updatePosition(instant = false) {
            if (this.currentIndex > this.maxIndex) {
                this.currentIndex = this.maxIndex;
            }
            
            const offset = -this.currentIndex * (this.cardWidth + this.gap);
            
            if (instant) {
                this.track.style.transition = 'none';
            } else {
                this.track.style.transition = `transform ${CONFIG.carouselSpeed}ms ease`;
            }
            
            this.track.style.transform = `translateX(${offset}px)`;
            
            if (instant) {
                this.track.offsetHeight;
            }
            
            this.updateDots();
            this.updateArrows();
        }
        
        updateDots() {
            if (this.dots.length === 0) return;
            
            this.dots.forEach((dot, index) => {
                const isActive = index >= this.currentIndex && 
                               index < this.currentIndex + this.cardsPerView;
                dot.classList.toggle('active', isActive);
            });
        }
        
        updateArrows() {
            if (this.prevBtn) {
                this.prevBtn.disabled = this.currentIndex === 0;
            }
            
            if (this.nextBtn) {
                this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
            }
        }
        
        next() {
            if (this.currentIndex >= this.maxIndex) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
            this.updatePosition();
        }
        
        prev() {
            if (this.currentIndex <= 0) {
                this.currentIndex = this.maxIndex;
            } else {
                this.currentIndex--;
            }
            this.updatePosition();
        }
        
        goTo(index) {
            if (index >= 0 && index <= this.maxIndex) {
                this.currentIndex = index;
                this.updatePosition();
            }
        }
    }

    // ===== MODAL =====
    function openProductModal(productId) {
        const product = products[productId];
        if (!product) {
            console.error(`Producto con ID ${productId} no encontrado`);
            return;
        }

        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalCategory').textContent = product.category;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('modalDescription').textContent = product.description;

        const mainImg = document.getElementById('modalImage');
        const thumbs = document.querySelectorAll('.thumb');
        
        if (product.images && product.images[0]) {
            mainImg.src = product.images[0];
            mainImg.alt = product.name;
        } else {
            mainImg.src = '';
            mainImg.alt = 'Imagen no disponible';
        }
        
        thumbs.forEach((thumb, index) => {
            if (product.images && product.images[index]) {
                thumb.src = product.images[index];
                thumb.alt = `${product.name} - Vista ${index + 1}`;
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
        if (product.specs && product.specs.length > 0) {
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${spec.name}</span><span>${spec.value}</span>`;
                specsList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.innerHTML = '<span>Especificaciones</span><span>No disponibles</span>';
            specsList.appendChild(li);
        }

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
    // Hero events
    if (heroPrevBtn) heroPrevBtn.addEventListener('click', heroPrevSlide);
    if (heroNextBtn) heroNextBtn.addEventListener('click', heroNextSlide);
    heroDots.forEach((dot, index) => dot.addEventListener('click', () => heroGoToSlide(index)));

    // Modal events
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
            new ProductCarousel(container);
        });
    }

    function initializeApp() {
        // Inicializar carruseles de productos
        initializeCarousels();
        
        // Iniciar carrusel hero
        startHeroAutoSlide();
        
        // Pausar hero al hacer hover
        if (heroTrack) {
            heroTrack.addEventListener('mouseenter', () => clearInterval(heroAutoSlide));
            heroTrack.addEventListener('mouseleave', startHeroAutoSlide);
        }
        
        console.log('✅ Sistema inicializado correctamente');
    }

    // Inicializar
    initializeApp();
});
