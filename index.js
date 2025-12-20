// index.js - ESTILO NÓRDICO - VERSIÓN DEFINITIVA FUNCIONAL
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
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 2.00m - Precio: $250.000" }
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

    // ===== CARRUSEL DE PRODUCTOS SIMPLE =====
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
            this.calculateDimensions();
            this.setupEvents();
            this.updatePosition(true);
            this.updateDots();
            this.updateArrows();
        }
        
        calculateDimensions() {
            if (this.cards.length === 0) return;
            
            // Esperar a que el layout se estabilice
            setTimeout(() => {
                const firstCard = this.cards[0];
                if (firstCard && firstCard.offsetWidth > 0) {
                    this.cardWidth = firstCard.offsetWidth;
                }
            }, 100);
        }
        
        setupEvents() {
            // Botones de navegación
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => this.prev());
            }
            
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => this.next());
            }
            
            // Dots
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goTo(index));
            });
        }
        
        updatePosition(instant = false) {
            // Calcular desplazamiento
            const offset = -this.currentIndex * (this.cardWidth + this.gap);
            
            // Aplicar transición
            if (instant) {
                this.track.style.transition = 'none';
            } else {
                this.track.style.transition = `transform ${CONFIG.carouselSpeed}ms ease`;
            }
            
            this.track.style.transform = `translateX(${offset}px)`;
            
            // Forzar reflow si es instantáneo
            if (instant) {
                this.track.offsetHeight;
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
            // No deshabilitar botones, dejar que siempre funcionen
            if (this.prevBtn) this.prevBtn.disabled = false;
            if (this.nextBtn) this.nextBtn.disabled = false;
        }
        
        next() {
            if (this.currentIndex < this.totalCards - 1) {
                this.currentIndex++;
                this.updatePosition();
            } else {
                // Si está al final, volver al inicio
                this.currentIndex = 0;
                this.updatePosition();
            }
        }
        
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updatePosition();
            } else {
                // Si está al inicio, ir al final
                this.currentIndex = this.totalCards - 1;
                this.updatePosition();
            }
        }
        
        goTo(index) {
            if (index >= 0 && index < this.totalCards) {
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
            new SimpleCarousel(container);
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
