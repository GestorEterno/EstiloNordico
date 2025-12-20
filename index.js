// index.js - ESTILO NÓRDICO - VERSIÓN FINAL PERFECTA
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Estilo Nórdico - Inicializando sistema...');

    // ===== CONFIGURACIÓN GLOBAL =====
    const CONFIG = {
        carouselSpeed: 400,
        heroAutoSlideInterval: 5000,
        infiniteEffect: true,
        debugMode: false
    };

    // ===== ELEMENTOS PRINCIPALES =====
    const hamburger = document.querySelector('.hamburger');
    const headerBottom = document.querySelector('.header-bottom');
    const navLinks = document.querySelectorAll('.nav-link');
    const productModal = document.getElementById('productModal');
    const closeModalBtn = document.querySelector('.modal-close');
    const closeModalBtn2 = document.querySelector('.btn-close-modal');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    // ===== CARRUSEL HERO =====
    const heroTrack = document.querySelector('.carousel-track');
    const heroSlides = document.querySelectorAll('.carousel-slide');
    const heroPrevBtn = document.querySelector('.hero .prev');
    const heroNextBtn = document.querySelector('.hero .next');
    const heroDots = document.querySelectorAll('.hero .dot');
    
    let heroCurrentSlide = 0;
    const heroTotalSlides = heroSlides.length;
    let heroAutoSlide;
    let heroIsAnimating = false;

    // ===== BASE DE DATOS DE PRODUCTOS =====
    const products = {
        1: { name: "Escritorio 1.20m", category: "Escritorios Nórdicos", price: "$120.000",
            description: "Escritorio de 1.20 metros fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/escritorios/120/k1escritorio01.png", "imagenes/escritorios/120/k1escritorio02.png"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "120cm x 60cm x 75cm" }, { name: "Color", value: "Natural nórdico" }],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.20m - Precio: $120.000" },
        2: { name: "Escritorio 1.30m", category: "Escritorios Nórdicos", price: "$150.000",
            description: "Escritorio de 1.30 metros fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/escritorios/130/k2escritorio01.png", "imagenes/escritorios/130/k2escritorio02.png"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "130cm x 65cm x 75cm" }, { name: "Color", value: "Marrón natural" }],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.30m - Precio: $150.000" },
        3: { name: "Escritorio 1.60m", category: "Escritorios Nórdicos", price: "$200.000",
            description: "Elegante escritorio de 1.60 metros fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/escritorios/160/k3escritorio01.jpg", "imagenes/escritorios/160/k3escritorio02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "160cm x 80cm x 75cm" }, { name: "Color", value: "Eucalipto natural" }],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.60m - Precio: $200.000" },
        4: { name: "Escritorio 2.00m", category: "Escritorios Nórdicos", price: "$250.000",
            description: "Impresionante escritorio de 2 metros para espacios amplios.", images: ["imagenes/escritorios/200/k4escritorio01.jpg", "imagenes/escritorios/200/k4escritorio02.jpg", "imagenes/escritorios/200/k4escritorio03.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "200cm x 100cm x 75cm" }, { name: "Color", value: "Tono medio" }],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 2.00m - Precio: $250.000" },
        5: { name: "Mesa Modelo Trineo", category: "Mesas Nórdicas", price: "$200.000",
            description: "Mesa modelo trineo fabricada con base de hierro y madera de eucalipto.", images: ["imagenes/mesas/k1/k1mesa01.jpg", "imagenes/mesas/k1/k1mesa02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "180cm x 90cm x 75cm" }, { name: "Capacidad", value: "6-8 personas" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo Trineo - Precio: $200.000" },
        6: { name: "Mesa Modelo U", category: "Mesas Nórdicas", price: "$220.000",
            description: "Mesa modelo U fabricada con base de hierro y madera de eucalipto.", images: ["imagenes/mesas/k2/k2mesa01.jpg", "imagenes/mesas/k2/k2mesa02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "160cm x 85cm x 75cm" }, { name: "Diseño", value: "Modelo U" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo U - Precio: $220.000" },
        7: { name: "Mesa Modelo X", category: "Mesas Nórdicas", price: "$250.000",
            description: "Mesa modelo X fabricada con base de hierro y madera de eucalipto.", images: ["imagenes/mesas/k3/k3mesa01.jpg", "imagenes/mesas/k3/k3mesa02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "200cm x 95cm x 75cm" }, { name: "Estilo", value: "Modelo X nórdico" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo X - Precio: $250.000" },
        8: { name: "Rack TV Nórdico K1", category: "Racks TV", price: "$120.000",
            description: "Rack TV nórdico fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/racks/k1/k1Rack01.jpg", "imagenes/racks/k1/k1Rack02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "120cm x 40cm x 50cm" }, { name: "Capacidad TV", value: "Hasta 55 pulgadas" }],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Nórdico K1 - Precio: $120.000" },
        9: { name: "Rack TV Nórdico K2", category: "Racks TV", price: "$150.000",
            description: "Rack TV nórdico fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/racks/k2/k2Rack01.jpg", "imagenes/racks/k2/k2Rack02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "140cm x 45cm x 55cm" }, { name: "Capacidad TV", value: "Hasta 65 pulgadas" }],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Nórdico K2 - Precio: $150.000" },
        10: { name: "Mesita Nórdica K1", category: "Mesitas Nórdicas", price: "$60.000",
            description: "Mesita nórdica fabricada con base de hierro y madera de eucalipto.", images: ["imagenes/mesitas/k1/k1mesita01.jpg", "imagenes/mesitas/k1/k1mesita02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "50cm x 50cm x 45cm" }, { name: "Forma", value: "Cuadrada" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K1 - Precio: $60.000" },
        11: { name: "Mesita Nórdica K2", category: "Mesitas Nórdicas", price: "$70.000",
            description: "Mesita nórdica fabricada con base de hierro y madera de eucalipto.", images: ["imagenes/mesitas/k2/k2mesita01.jpg", "imagenes/mesitas/k2/k2mesita02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "55cm x 55cm x 48cm" }, { name: "Cajón", value: "Metálico" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K2 - Precio: $70.000" },
        12: { name: "Mesita Nórdica K3", category: "Mesitas Nórdicas", price: "$80.000",
            description: "Mesita nórdica redonda fabricada con base de hierro y madera de eucalipto.", images: ["imagenes/mesitas/k3/k3mesita01.jpg", "imagenes/mesitas/k3/k3mesita02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "Ø60cm x 45cm" }, { name: "Forma", value: "Redonda" }],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K3 - Precio: $80.000" },
        13: { name: "Estantería Nórdica K1", category: "Estanterías Nórdicas", price: "$250.000",
            description: "Estantería nórdica modular fabricada con base de hierro y madera de eucalipto.", images: ["imagenes/estanterias/k1/k1estanteria01.jpg", "imagenes/estanterias/k1/k1estanteria02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "160cm x 80cm x 30cm" }, { name: "Niveles", value: "4 estantes" }],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K1 - Precio: $250.000" },
        14: { name: "Estantería Nórdica K2", category: "Estanterías Nórdicas", price: "$60.000",
            description: "Estantería nórdica fabricada con base de hierro y madera de eucalipto.", images: ["imagenes/estanterias/k2/k2estanteria01.jpg", "imagenes/estanterias/k2/k2estanteria02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "180cm x 90cm x 35cm" }, { name: "Niveles", value: "5 estantes" }],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K2 - Precio: $60.000" },
        15: { name: "Estantería Nórdica K3", category: "Estanterías Nórdicas", price: "$80.000",
            description: "Estantería nórdica en forma de escalera fabricada con base de hierro y madera de eucalipto.", images: ["imagenes/estanterias/k3/k3estanteria01.jpg", "imagenes/estanterias/k3/k3estanteria02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "170cm x 85cm x 40cm" }, { name: "Compartimentos", value: "5 estantes" }],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K3 - Precio: $80.000" }
    };

    // ===== FUNCIONALIDADES DEL HEADER =====
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const cartBtn = document.getElementById('cartBtn');
    const cartCount = document.querySelector('.cart-count');
    
    // BUSCADOR
    function handleSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) {
            showNotification('Ingresa un término de búsqueda.', 'info');
            return;
        }
        
        const results = [];
        Object.keys(products).forEach(key => {
            const product = products[key];
            if (product.name.toLowerCase().includes(searchTerm) || 
                product.category.toLowerCase().includes(searchTerm)) {
                results.push({ id: key, ...product });
            }
        });
        
        if (results.length > 0) {
            openProductModal(results[0].id);
            searchInput.value = '';
        } else {
            showNotification('No se encontraron productos.', 'info');
        }
    }
    
    if (searchBtn) searchBtn.addEventListener('click', handleSearch);
    if (searchInput) searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });
    
    // CARRITO
    let cart = JSON.parse(localStorage.getItem('nordic_cart')) || [];
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    if (cartBtn) cartBtn.addEventListener('click', () => showNotification(cart.length === 0 ? 'Tu carrito está vacío.' : `Carrito: ${cart.length} productos`, 'info'));
    updateCartCount();

    // ===== CARRUSEL HERO SIMPLIFICADO =====
    function updateHeroCarousel() {
        if (heroIsAnimating) return;
        heroIsAnimating = true;
        
        heroTrack.style.transform = `translateX(-${heroCurrentSlide * 100}%)`;
        heroDots.forEach((dot, index) => dot.classList.toggle('active', index === heroCurrentSlide));
        heroSlides.forEach((slide, index) => slide.classList.toggle('active', index === heroCurrentSlide));
        
        setTimeout(() => { heroIsAnimating = false; }, CONFIG.carouselSpeed);
    }

    function heroNextSlide() {
        if (heroIsAnimating) return;
        heroCurrentSlide = (heroCurrentSlide + 1) % heroTotalSlides;
        updateHeroCarousel();
        resetHeroAutoSlide();
    }

    function heroPrevSlide() {
        if (heroIsAnimating) return;
        heroCurrentSlide = (heroCurrentSlide - 1 + heroTotalSlides) % heroTotalSlides;
        updateHeroCarousel();
        resetHeroAutoSlide();
    }

    function heroGoToSlide(index) {
        if (heroIsAnimating) return;
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

    // ===== CARRUSEL DE PRODUCTOS - VERSIÓN SIMPLIFICADA Y FUNCIONAL =====
    class ProductsCarousel {
        constructor(container) {
            this.container = container;
            this.track = container.querySelector('.products-carousel-track');
            this.cards = Array.from(container.querySelectorAll('.product-card'));
            this.prevBtn = container.querySelector('.prev-arrow');
            this.nextBtn = container.querySelector('.next-arrow');
            this.dots = Array.from(container.querySelectorAll('.carousel-dot'));
            
            this.currentIndex = 0;
            this.totalCards = this.cards.length;
            this.isAnimating = false;
            this.cardWidth = 0;
            this.gap = 30;
            this.slideTimeout = null;
            
            // Configuración inicial
            if (this.totalCards > 0) {
                this.init();
            }
        }
        
        init() {
            // Calcular dimensiones
            this.calculateDimensions();
            
            // Configurar eventos
            this.setupEvents();
            
            // Posicionar inicialmente
            this.updatePosition(true);
            this.updateDots();
            this.updateArrows();
            
            // Configurar clones para efecto infinito si hay más de 3 tarjetas
            if (CONFIG.infiniteEffect && this.totalCards > 3) {
                this.setupInfiniteEffect();
            }
        }
        
        calculateDimensions() {
            if (this.cards.length === 0) return;
            
            // Esperar a que el DOM esté listo
            setTimeout(() => {
                const firstCard = this.cards[0];
                if (firstCard && firstCard.offsetWidth > 0) {
                    this.cardWidth = firstCard.offsetWidth;
                } else {
                    // Valor por defecto si no se puede calcular
                    this.cardWidth = 300;
                }
            }, 100);
        }
        
        setupInfiniteEffect() {
            // Clonar tarjetas para efecto infinito
            const firstClone = this.cards[0].cloneNode(true);
            const lastClone = this.cards[this.totalCards - 1].cloneNode(true);
            
            firstClone.classList.add('clone');
            lastClone.classList.add('clone');
            
            this.track.appendChild(firstClone);
            this.track.insertBefore(lastClone, this.cards[0]);
            
            // Actualizar lista de tarjetas
            this.cards = Array.from(this.track.querySelectorAll('.product-card'));
            this.totalCards = this.cards.length;
            
            // Posicionar en la primera tarjeta real (no clon)
            this.currentIndex = 1;
            this.updatePosition(true);
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
            
            // Control táctil
            this.addTouchControls();
            
            // Resize
            window.addEventListener('resize', () => this.handleResize());
        }
        
        addTouchControls() {
            let touchStartX = 0;
            let touchEndX = 0;
            
            this.track.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            this.track.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                const threshold = 50;
                const difference = touchStartX - touchEndX;
                
                if (Math.abs(difference) > threshold) {
                    if (difference > 0) {
                        this.next();
                    } else {
                        this.prev();
                    }
                }
            }, { passive: true });
        }
        
        handleResize() {
            this.calculateDimensions();
            this.updatePosition(true);
        }
        
        updatePosition(instant = false) {
            if (this.isAnimating && !instant) return;
            
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
            
            // Actualizar controles
            this.updateDots();
            this.updateArrows();
            
            // Manejar efecto infinito
            if (!instant && CONFIG.infiniteEffect && this.totalCards > 3) {
                this.handleInfiniteEffect();
            }
        }
        
        handleInfiniteEffect() {
            // Limpiar timeout anterior
            if (this.slideTimeout) clearTimeout(this.slideTimeout);
            
            // Configurar timeout para verificar posición después de la transición
            this.slideTimeout = setTimeout(() => {
                // Si estamos en el primer clon (índice 0), saltar al último real
                if (this.currentIndex === 0) {
                    this.jumpToCard(this.totalCards - 2, true);
                }
                // Si estamos en el último clon (índice totalCards-1), saltar al primero real
                else if (this.currentIndex === this.totalCards - 1) {
                    this.jumpToCard(1, true);
                }
                
                this.isAnimating = false;
            }, CONFIG.carouselSpeed + 50);
        }
        
        jumpToCard(index, instant = false) {
            this.currentIndex = index;
            this.updatePosition(instant);
        }
        
        updateDots() {
            if (this.dots.length === 0) return;
            
            let realIndex = this.currentIndex;
            
            // Ajustar índice para dots en modo infinito
            if (CONFIG.infiniteEffect && this.totalCards > 3) {
                const realCards = this.totalCards - 2; // Excluir clones
                
                if (this.currentIndex === 0) {
                    realIndex = realCards - 1;
                } else if (this.currentIndex === this.totalCards - 1) {
                    realIndex = 0;
                } else {
                    realIndex = this.currentIndex - 1;
                }
            }
            
            this.dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === realIndex);
            });
        }
        
        updateArrows() {
            if (this.prevBtn) this.prevBtn.disabled = this.isAnimating;
            if (this.nextBtn) this.nextBtn.disabled = this.isAnimating;
        }
        
        next() {
            if (this.isAnimating) return;
            
            this.isAnimating = true;
            this.currentIndex++;
            this.updatePosition();
        }
        
        prev() {
            if (this.isAnimating) return;
            
            this.isAnimating = true;
            this.currentIndex--;
            this.updatePosition();
        }
        
        goTo(index) {
            if (this.isAnimating) return;
            
            let targetIndex = index;
            
            // Ajustar índice para modo infinito
            if (CONFIG.infiniteEffect && this.totalCards > 3) {
                targetIndex = index + 1; // +1 porque el índice 0 es un clon
            }
            
            this.isAnimating = true;
            this.currentIndex = targetIndex;
            this.updatePosition();
        }
    }

    // ===== MODAL DE PRODUCTO =====
    function openProductModal(productId) {
        const product = products[productId];
        if (!product) return;

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

        // Configurar WhatsApp
        const encodedMessage = encodeURIComponent(product.whatsappMessage);
        whatsappBtn.onclick = () => {
            window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
        };

        // Mostrar modal
        productModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        productModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // ===== MENÚ HAMBURGUESA =====
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            headerBottom.classList.toggle('active');
            document.body.style.overflow = headerBottom.classList.contains('active') ? 'hidden' : '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (headerBottom) headerBottom.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== EVENTOS HERO =====
    if (heroPrevBtn) heroPrevBtn.addEventListener('click', heroPrevSlide);
    if (heroNextBtn) heroNextBtn.addEventListener('click', heroNextSlide);
    
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => heroGoToSlide(index));
    });

    // Control táctil hero
    let heroTouchStartX = 0;
    if (heroTrack) {
        heroTrack.addEventListener('touchstart', (e) => {
            heroTouchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        heroTrack.addEventListener('touchend', (e) => {
            const heroTouchEndX = e.changedTouches[0].screenX;
            const threshold = 50;
            const difference = heroTouchStartX - heroTouchEndX;
            
            if (Math.abs(difference) > threshold) {
                if (difference > 0) heroNextSlide();
                else heroPrevSlide();
                resetHeroAutoSlide();
            }
        }, { passive: true });
    }

    // ===== EVENTOS MODAL =====
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-view') || e.target.closest('.btn-view')) {
            const btn = e.target.classList.contains('btn-view') ? e.target : e.target.closest('.btn-view');
            const productId = btn.getAttribute('data-id');
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

    // ===== INICIALIZACIÓN CARRUSELES =====
    function initializeCarousels() {
        const productContainers = document.querySelectorAll('.products-carousel-container');
        const carousels = [];
        
        productContainers.forEach((container) => {
            // Crear instancia del carrusel
            const carousel = new ProductsCarousel(container);
            carousels.push(carousel);
        });
        
        return carousels;
    }

    // ===== FUNCIONES UTILITARIAS =====
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'info' ? '#2c3e50' : '#e74c3c'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 9999;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) notification.parentNode.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // ===== INICIALIZACIÓN GENERAL =====
    function initializeApp() {
        // Inicializar carruseles
        initializeCarousels();
        
        // Inicializar hero carousel
        startHeroAutoSlide();
        
        // Pausar hero al hacer hover
        if (heroTrack) {
            heroTrack.addEventListener('mouseenter', () => clearInterval(heroAutoSlide));
            heroTrack.addEventListener('mouseleave', startHeroAutoSlide);
        }
        
        // Configurar scroll spy
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink();
        
        // Inyectar estilos para notificaciones
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        console.log('✅ Sistema completamente inicializado');
    }

    // Inicializar la aplicación
    initializeApp();
});
