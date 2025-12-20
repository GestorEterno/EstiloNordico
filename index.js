// index.js - ESTILO NÓRDICO - CARRUSEL FINITO PERFECTO (NO INFINITO)

document.addEventListener('DOMContentLoaded', function() {
    // ===== ELEMENTOS PRINCIPALES =====
    const hamburger = document.querySelector('.hamburger');
    const headerBottom = document.querySelector('.header-bottom');
    const navLinks = document.querySelectorAll('.nav-link');
    const productModal = document.getElementById('productModal');
    const closeModalBtn = document.querySelector('.modal-close');
    const closeModalBtn2 = document.querySelector('.btn-close-modal');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    // ===== ELEMENTOS DEL HEADER REDISEÑADO =====
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const cartBtn = document.getElementById('cartBtn');
    const notificationBtn = document.getElementById('notificationBtn');
    const loginBtn = document.getElementById('loginBtn');
    const cartCount = document.querySelector('.cart-count');
    const notificationCount = document.querySelector('.notification-count');
    
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
            name: "Escritorio 1.20m",
            category: "Escritorios Nórdicos",
            price: "$120.000",
            description: "Escritorio de 1.20 metros fabricado con base de hierro y madera de eucalipto. Perfecto para espacios de trabajo compactos. Acabado nórdico que resalta la veta natural de la madera.",
            images: [
                "imagenes/escritorios/120/k1escritorio01.png",
                "imagenes/escritorios/120/k1escritorio02.png"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "120cm x 60cm x 75cm" },
                { name: "Color", value: "Natural nórdico" },
                { name: "Garantía", value: "1 año" },
                { name: "Estilo", value: "Nórdico minimalista" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.20m - Precio: $120.000"
        },
        2: {
            name: "Escritorio 1.30m",
            category: "Escritorios Nórdicos",
            price: "$150.000",
            description: "Escritorio de 1.30 metros fabricado con base de hierro y madera de eucalipto. Ideal para profesionales que necesitan un espacio de trabajo resistente y elegante.",
            images: [
                "imagenes/escritorios/130/k2escritorio01.png",
                "imagenes/escritorios/130/k2escritorio02.png"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "130cm x 65cm x 75cm" },
                { name: "Color", value: "Marrón natural" },
                { name: "Acabado", value: "Barniz mate" },
                { name: "Estilo", value: "Nórdico moderno" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.30m - Precio: $150.000"
        },
        3: {
            name: "Escritorio 1.60m",
            category: "Escritorios Nórdicos",
            price: "$200.000",
            description: "Elegante escritorio de 1.60 metros fabricado con base de hierro y madera de eucalipto. Perfecto para espacios de trabajo amplios y modernos.",
            images: [
                "imagenes/escritorios/160/k3escritorio01.jpg",
                "imagenes/escritorios/160/k3escritorio02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "160cm x 80cm x 75cm" },
                { name: "Color", value: "Eucalipto natural" },
                { name: "Garantía", value: "2 años" },
                { name: "Estilo", value: "Nórdico ejecutivo" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 1.60m - Precio: $200.000"
        },
        4: {
            name: "Escritorio 2.00m",
            category: "Escritorios Nórdicos",
            price: "$250.000",
            description: "Impresionante escritorio de 2 metros para espacios amplios. Fabricado con base de hierro y madera de eucalipto. Ideal para oficinas ejecutivas.",
            images: [
                "imagenes/escritorios/200/k4escritorio01.jpg",
                "imagenes/escritorios/200/k4escritorio02.jpg",
                "imagenes/escritorios/200/k4escritorio03.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "200cm x 100cm x 75cm" },
                { name: "Color", value: "Tono medio" },
                { name: "Estilo", value: "Nórdico ejecutivo premium" },
                { name: "Capacidad", value: "Espacio amplio" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio 2.00m - Precio: $250.000"
        },
        5: {
            name: "Mesa Modelo Trineo",
            category: "Mesas Nórdicas",
            price: "$200.000",
            description: "Mesa modelo trineo fabricada con base de hierro y madera de eucalipto. Perfecta para comedores con estilo nórdico.",
            images: [
                "imagenes/mesas/k1/k1mesa01.jpg",
                "imagenes/mesas/k1/k1mesa02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "180cm x 90cm x 75cm" },
                { name: "Capacidad", value: "6-8 personas" },
                { name: "Acabado", value: "Nórdico" },
                { name: "Estilo", value: "Trineo escandinavo" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo Trineo - Precio: $200.000"
        },
        6: {
            name: "Mesa Modelo U",
            category: "Mesas Nórdicas",
            price: "$220.000",
            description: "Mesa modelo U fabricada con base de hierro y madera de eucalipto. Estructura robusta para uso diario intensivo.",
            images: [
                "imagenes/mesas/k2/k2mesa01.jpg",
                "imagenes/mesas/k2/k2mesa02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "160cm x 85cm x 75cm" },
                { name: "Capacidad", value: "6 personas" },
                { name: "Diseño", value: "Modelo U" },
                { name: "Estilo", value: "Nórdico industrial" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo U - Precio: $220.000"
        },
        7: {
            name: "Mesa Modelo X",
            category: "Mesas Nórdicas",
            price: "$250.000",
            description: "Mesa modelo X fabricada con base de hierro y madera de eucalipto. Diseño único que combina lo moderno con lo nórdico.",
            images: [
                "imagenes/mesas/k3/k3mesa01.jpg",
                "imagenes/mesas/k3/k3mesa02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "200cm x 95cm x 75cm" },
                { name: "Capacidad", value: "8 personas" },
                { name: "Estilo", value: "Modelo X nórdico" },
                { name: "Diseño", value: "Exclusivo" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Modelo X - Precio: $250.000"
        },
        8: {
            name: "Rack TV Nórdico K1",
            category: "Racks TV",
            price: "$120.000",
            description: "Rack TV nórdico fabricado con base de hierro y madera de eucalipto. Estructura robusta con compartimentos para equipos.",
            images: [
                "imagenes/racks/k1/k1Rack01.jpg",
                "imagenes/racks/k1/k1Rack02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "120cm x 40cm x 50cm" },
                { name: "Capacidad TV", value: "Hasta 55 pulgadas" },
                { name: "Compartimentos", value: "3 estantes" },
                { name: "Estilo", value: "Nórdico moderno" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Nórdico K1 - Precio: $120.000"
        },
        9: {
            name: "Rack TV Nórdico K2",
            category: "Racks TV",
            price: "$150.000",
            description: "Rack TV nórdico fabricado con base de hierro y madera de eucalipto. Diseño moderno perfecto para salas de estar contemporáneas.",
            images: [
                "imagenes/racks/k2/k2Rack01.jpg",
                "imagenes/racks/k2/k2Rack02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "140cm x 45cm x 55cm" },
                { name: "Capacidad TV", value: "Hasta 65 pulgadas" },
                { name: "Estantes", value: "Ajustables" },
                { name: "Estilo", value: "Nórdico premium" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Nórdico K2 - Precio: $150.000"
        },
        10: {
            name: "Mesita Nórdica K1",
            category: "Mesitas Nórdicas",
            price: "$60.000",
            description: "Mesita nórdica fabricada con base de hierro y madera de eucalipto. Diseño funcional ideal para espacios reducidos.",
            images: [
                "imagenes/mesitas/k1/k1mesita01.jpg",
                "imagenes/mesitas/k1/k1mesita02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "50cm x 50cm x 45cm" },
                { name: "Forma", value: "Cuadrada" },
                { name: "Estante", value: "Inferior" },
                { name: "Estilo", value: "Nórdico básico" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K1 - Precio: $60.000"
        },
        11: {
            name: "Mesita Nórdica K2",
            category: "Mesitas Nórdicas",
            price: "$70.000",
            description: "Mesita nórdica fabricada con base de hierro y madera de eucalipto. Diseño con detalles en hierro forjado.",
            images: [
                "imagenes/mesitas/k2/k2mesita01.jpg",
                "imagenes/mesitas/k2/k2mesita02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "55cm x 55cm x 48cm" },
                { name: "Cajón", value: "Metálico" },
                { name: "Uso", value: "Living o dormitorio" },
                { name: "Estilo", value: "Nórdico con detalles" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K2 - Precio: $70.000"
        },
        12: {
            name: "Mesita Nórdica K3",
            category: "Mesitas Nórdicas",
            price: "$80.000",
            description: "Mesita nórdica redonda fabricada con base de hierro y madera de eucalipto. Diseño elegante que se adapta a cualquier decoración.",
            images: [
                "imagenes/mesitas/k3/k3mesita01.jpg",
                "imagenes/mesitas/k3/k3mesita02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "Ø60cm x 45cm" },
                { name: "Forma", value: "Redonda" },
                { name: "Base", value: "Trípode metálico" },
                { name: "Estilo", value: "Nórdico redondo" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Nórdica K3 - Precio: $80.000"
        },
        13: {
            name: "Estantería Nórdica K1",
            category: "Estanterías Nórdicas",
            price: "$250.000",
            description: "Estantería nórdica modular fabricada con base de hierro y madera de eucalipto. Ideal para libros y decoración.",
            images: [
                "imagenes/estanterias/k1/k1estanteria01.jpg",
                "imagenes/estanterias/k1/k1estanteria02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "160cm x 80cm x 30cm" },
                { name: "Niveles", value: "4 estantes" },
                { name: "Carga máx.", value: "20 kg por estante" },
                { name: "Estilo", value: "Nórdico modular" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K1 - Precio: $250.000"
        },
        14: {
            name: "Estantería Nórdica K2",
            category: "Estanterías Nórdicas",
            price: "$60.000",
            description: "Estantería nórdica fabricada con base de hierro y madera de eucalipto. Diseño nórdico auténtico para espacios modernos.",
            images: [
                "imagenes/estanterias/k2/k2estanteria01.jpg",
                "imagenes/estanterias/k2/k2estanteria02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "180cm x 90cm x 35cm" },
                { name: "Niveles", value: "5 estantes" },
                { name: "Estilo", value: "Nórdico puro" },
                { name: "Uso", value: "Libros y decoración" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K2 - Precio: $60.000"
        },
        15: {
            name: "Estantería Nórdica K3",
            category: "Estanterías Nórdicas",
            price: "$80.000",
            description: "Estantería nórdica en forma de escalera fabricada con base de hierro y madera de eucalipto. Diseño único y funcional.",
            images: [
                "imagenes/estanterias/k3/k3estanteria01.jpg",
                "imagenes/estanterias/k3/k3estanteria02.jpg"
            ],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" },
                { name: "Dimensiones", value: "170cm x 85cm x 40cm" },
                { name: "Compartimentos", value: "5 estantes" },
                { name: "Forma", value: "Escalera" },
                { name: "Estilo", value: "Nórdico escalonado" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Nórdica K3 - Precio: $80.000"
        }
    };

    // ===== FUNCIONALIDADES DEL HEADER REDISEÑADO =====
    
    // 1. BUSCADOR
    function handleSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) {
            alert('Por favor, ingresa un término de búsqueda.');
            return;
        }
        
        const results = [];
        Object.keys(products).forEach(key => {
            const product = products[key];
            if (product.name.toLowerCase().includes(searchTerm) || 
                product.category.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)) {
                results.push({ id: key, ...product });
            }
        });
        
        if (results.length > 0) {
            openProductModal(results[0].id);
            searchInput.value = '';
        } else {
            alert('No se encontraron productos con ese término de búsqueda.');
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
    
    // 2. CARRITO
    let cart = JSON.parse(localStorage.getItem('nordic_cart')) || [];
    
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        localStorage.setItem('nordic_cart', JSON.stringify(cart));
    }
    
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Tu carrito está vacío. Agrega productos para continuar.');
            } else {
                alert(`Carrito de compras:\n\n${cart.map(item => `• ${item.name} x${item.quantity}`).join('\n')}`);
            }
        });
    }
    
    // 3. NOTIFICACIONES
    let notifications = [
        { id: 1, text: '¡Nuevo producto disponible!', read: false },
        { id: 2, text: 'Oferta especial en escritorios', read: false },
        { id: 3, text: 'Envío gratis en compras superiores a $300.000', read: false }
    ];
    
    function updateNotificationCount() {
        const unread = notifications.filter(n => !n.read).length;
        notificationCount.textContent = unread;
        localStorage.setItem('nordic_notifications', JSON.stringify(notifications));
    }
    
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            if (notifications.length === 0) {
                alert('No hay notificaciones nuevas');
                return;
            }
            
            const unreadNotifications = notifications.filter(n => !n.read);
            if (unreadNotifications.length > 0) {
                alert('Notificaciones:\n\n' + unreadNotifications.map(n => `• ${n.text}`).join('\n'));
                notifications.forEach(n => n.read = true);
                updateNotificationCount();
            } else {
                alert('No hay notificaciones nuevas');
            }
        });
    }
    
    // 4. LOGIN
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Funcionalidad de login - Preparada para conectar con Firebase Authentication');
        });
    }
    
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

    // ===== CARRUSEL DE PRODUCTOS - VERSIÓN FINITA PERFECTA =====
    class ProductsCarousel {
        constructor(container) {
            this.container = container;
            this.track = container.querySelector('.products-carousel-track');
            this.cards = Array.from(container.querySelectorAll('.product-card'));
            this.prevBtn = container.querySelector('.prev-arrow');
            this.nextBtn = container.querySelector('.next-arrow');
            this.dots = container.querySelectorAll('.carousel-dot');
            
            // Configuración básica
            this.currentIndex = 0;
            this.totalCards = this.cards.length;
            this.isAnimating = false;
            this.animationDuration = 500;
            this.cardsPerView = 3; // Por defecto 3 en desktop
            
            // Solo continuar si hay tarjetas
            if (this.totalCards === 0) return;
            
            this.init();
            this.calculateDimensions();
            this.updateArrows();
            this.updateDots();
            
            // Posicionar en el inicio (lado izquierdo)
            this.updatePosition(true);
        }
        
        init() {
            // Event listeners para botones
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
            
            // Evento para detectar fin de transición
            this.track.addEventListener('transitionend', () => this.handleTransitionEnd());
            
            // Control táctil
            this.addTouchControls();
            
            // Manejo de resize
            window.addEventListener('resize', () => this.handleResize());
        }
        
        calculateDimensions() {
            if (this.cards.length === 0) return;
            
            const cardWidth = this.cards[0].offsetWidth;
            const trackWidth = this.track.offsetWidth;
            const gap = 30;
            
            if (cardWidth === 0) {
                setTimeout(() => this.calculateDimensions(), 100);
                return;
            }
            
            // Calcular cuántas tarjetas caben en la vista
            this.cardsPerView = Math.floor(trackWidth / (cardWidth + gap));
            this.cardsPerView = Math.max(1, this.cardsPerView);
            
            // Asegurar que el primer elemento esté visible al inicio
            if (this.currentIndex === 0) {
                this.track.style.transform = 'translateX(0px)';
            }
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
            if (this.isAnimating) return;
            
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
                this.updatePosition(true);
                this.updateArrows();
            }, 100);
        }
        
        updatePosition(instant = false) {
            if (this.cards.length === 0) return;
            
            const cardWidth = this.cards[0].offsetWidth;
            const gap = 30;
            
            if (cardWidth === 0) {
                setTimeout(() => this.updatePosition(instant), 100);
                return;
            }
            
            // Calcular offset basado en el índice actual
            const offset = -this.currentIndex * (cardWidth + gap);
            
            if (instant) {
                this.track.style.transition = 'none';
            } else {
                this.track.style.transition = `transform ${this.animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
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
            if (!this.dots.length) return;
            
            this.dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }
        
        updateArrows() {
            if (this.prevBtn) {
                const isAtStart = this.currentIndex === 0;
                this.prevBtn.disabled = isAtStart;
                this.prevBtn.style.opacity = isAtStart ? '0.3' : '1';
                this.prevBtn.style.cursor = isAtStart ? 'not-allowed' : 'pointer';
            }
            
            if (this.nextBtn) {
                // Calcular el último índice posible basado en cardsPerView
                const maxIndex = Math.max(0, this.totalCards - this.cardsPerView);
                const isAtEnd = this.currentIndex >= maxIndex;
                
                this.nextBtn.disabled = isAtEnd;
                this.nextBtn.style.opacity = isAtEnd ? '0.3' : '1';
                this.nextBtn.style.cursor = isAtEnd ? 'not-allowed' : 'pointer';
            }
        }
        
        handleTransitionEnd() {
            this.isAnimating = false;
            this.updateArrows();
        }
        
        // ===== LÓGICA PERFECTA DE NAVEGACIÓN =====
        prev() {
            if (this.isAnimating || this.currentIndex === 0) return;
            
            this.isAnimating = true;
            this.updateArrows();
            
            this.currentIndex--;
            this.updatePosition();
        }
        
        next() {
            if (this.isAnimating) return;
            
            // Calcular el último índice posible
            const maxIndex = Math.max(0, this.totalCards - this.cardsPerView);
            
            // Si estamos en el último índice, volver al inicio
            if (this.currentIndex >= maxIndex) {
                this.currentIndex = 0;
                this.updatePosition();
            } else {
                this.currentIndex++;
                this.updatePosition();
            }
            
            this.isAnimating = true;
            this.updateArrows();
        }
        
        goTo(index) {
            if (this.isAnimating) return;
            
            const validIndex = Math.max(0, Math.min(index, this.totalCards - 1));
            this.currentIndex = validIndex;
            this.updatePosition();
            this.isAnimating = true;
            this.updateArrows();
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

        // Configurar WhatsApp
        const encodedMessage = encodeURIComponent(product.whatsappMessage);
        whatsappBtn.onclick = () => {
            window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
        };

        // Mostrar modal
        productModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Scroll al inicio
        setTimeout(() => {
            productModal.scrollTop = 0;
        }, 10);
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

    if (heroTrack) {
        heroTrack.addEventListener('touchstart', handleHeroTouchStart, { passive: true });
        heroTrack.addEventListener('touchend', handleHeroTouchEnd, { passive: true });
    }

    // ===== EVENT LISTENERS MODAL =====
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-view') || e.target.closest('.btn-view')) {
            e.stopPropagation();
            const btn = e.target.classList.contains('btn-view') ? e.target : e.target.closest('.btn-view');
            const productId = btn.getAttribute('data-id');
            openProductModal(productId);
        }
    });

    closeModalBtn.addEventListener('click', closeProductModal);
    closeModalBtn2.addEventListener('click', closeProductModal);
    
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
                    top: targetElement.offsetTop - 90,
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
        
        // Esperar carga de imágenes
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
            setTimeout(() => {
                carousel.handleResize();
            }, 100);
        }
    });
    
    // ===== MANEJO DE RESIZE GLOBAL =====
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            carousels.forEach(carousel => {
                if (carousel && typeof carousel.handleResize === 'function') {
                    carousel.handleResize();
                }
            });
        }, 250);
    });

    // ===== INICIALIZACIÓN GENERAL =====
    startHeroAutoSlide();
    
    if (heroTrack) {
        heroTrack.addEventListener('mouseenter', () => clearInterval(heroAutoSlide));
        heroTrack.addEventListener('mouseleave', startHeroAutoSlide);
    }

    // Inicializar contadores
    updateCartCount();
    updateNotificationCount();

    // Cargar notificaciones desde localStorage
    const savedNotifications = localStorage.getItem('nordic_notifications');
    if (savedNotifications) {
        notifications = JSON.parse(savedNotifications);
        updateNotificationCount();
    }

    console.log('✅ Estilo Nórdico - CARRUSEL FINITO PERFECTO INICIALIZADO');
});
