// index.js - ESTILO NÓRDICO - VERSIÓN 4 PRODUCTOS POR CARRUSEL
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Estilo Nórdico - Sistema 4 productos inicializado');

    // ===== CONFIGURACIÓN =====
    const CONFIG = {
        carouselSpeed: 300,
        heroAutoSlideInterval: 5000,
        cardsPerView: 4, // Cambiado de 3 a 4
        notifications: [
            {
                id: 1,
                icon: 'fas fa-truck',
                title: '¡Envío confirmado!',
                message: 'Tu pedido #12345 ha sido enviado',
                time: 'Hace 2 horas',
                read: false
            },
            {
                id: 2,
                icon: 'fas fa-tag',
                title: 'Oferta especial',
                message: '20% de descuento en escritorios nórdicos',
                time: 'Hace 1 día',
                read: false
            },
            {
                id: 3,
                icon: 'fas fa-gift',
                title: '¡Nuevo producto!',
                message: 'Ya disponible nuestra nueva colección de estanterías',
                time: 'Hace 3 días',
                read: true
            }
        ]
    };

    // ===== ELEMENTOS DEL DOM =====
    const hamburger = document.querySelector('.hamburger');
    const headerBottom = document.querySelector('.header-bottom');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Modales
    const productModal = document.getElementById('productModal');
    const notificationModal = document.getElementById('notificationModal');
    const loginModal = document.getElementById('loginModal');
    const cartModal = document.getElementById('cartModal');
    
    // Botones del header
    const cartBtn = document.getElementById('cartBtn');
    const notificationBtn = document.getElementById('notificationBtn');
    const loginBtn = document.getElementById('loginBtn');
    
    // Botones de cierre de modales
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    
    // Elementos del carrito
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSubtotalEl = document.getElementById('cartSubtotal');
    const cartTotalEl = document.getElementById('cartTotal');
    const clearCartBtn = document.getElementById('clearCartBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const continueShoppingBtn = document.querySelector('.btn-continue-shopping');
    const emptyCartEl = document.getElementById('emptyCart');
    
    // Botones del modal de producto
    const buyBtn = document.getElementById('buyBtn');
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    // Elementos de notificaciones
    const notificationsList = document.getElementById('notificationsList');
    const noNotifications = document.getElementById('noNotifications');
    const markAllReadBtn = document.getElementById('markAllReadBtn');
    
    // Elementos de login/registro
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    const loginForm = document.getElementById('loginFormContent');
    const registerForm = document.getElementById('registerFormContent');
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    
    // CARRUSEL HERO
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
        1: { 
            id: 1,
            name: "Escritorio 1.20m", 
            category: "Escritorios Nórdicos", 
            price: 120000,
            formattedPrice: "$120.000",
            description: "Escritorio de 1.20 metros fabricado con base de hierro y madera de eucalipto.", 
            images: ["imagenes/escritorios/120/k1escritorio01.png", "imagenes/escritorios/120/k1escritorio02.png"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "120cm x 60cm x 75cm" }
            ]
        },
        2: { 
            id: 2,
            name: "Escritorio 1.30m", 
            category: "Escritorios Nórdicos", 
            price: 150000,
            formattedPrice: "$150.000",
            description: "Escritorio de 1.30 metros fabricado con base de hierro y madera de eucalipto.", 
            images: ["imagenes/escritorios/130/k2escritorio01.png", "imagenes/escritorios/130/k2escritorio02.png"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "130cm x 65cm x 75cm" }
            ]
        },
        3: { 
            id: 3,
            name: "Escritorio 1.60m", 
            category: "Escritorios Nórdicos", 
            price: 200000,
            formattedPrice: "$200.000",
            description: "Elegante escritorio de 1.60 metros fabricado con base de hierro y madera de eucalipto.", 
            images: ["imagenes/escritorios/160/k3escritorio01.jpg", "imagenes/escritorios/160/k3escritorio02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "160cm x 80cm x 75cm" }
            ]
        },
        4: { 
            id: 4,
            name: "Escritorio 2.00m", 
            category: "Escritorios Nórdicos", 
            price: 250000,
            formattedPrice: "$250.000",
            description: "Impresionante escritorio de 2 metros para espacios amplios.", 
            images: ["imagenes/escritorios/200/k4escritorio01.jpg", "imagenes/escritorios/200/k4escritorio02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "200cm x 100cm x 75cm" }
            ]
        },
        5: { 
            id: 5,
            name: "Mesa Modelo Trineo", 
            category: "Mesas Nórdicas", 
            price: 200000,
            formattedPrice: "$200.000",
            description: "Mesa de diseño nórdico con base en forma de trineo.", 
            images: ["imagenes/mesas/k1/k1mesa01.jpg", "imagenes/mesas/k1/k1mesa02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "150cm x 90cm x 75cm" }
            ]
        },
        6: { 
            id: 6,
            name: "Mesa Modelo U", 
            category: "Mesas Nórdicas", 
            price: 220000,
            formattedPrice: "$220.000",
            description: "Mesa con base en forma de U, diseño industrial nórdico.", 
            images: ["imagenes/mesas/k2/k2mesa01.jpg", "imagenes/mesas/k2/k2mesa02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "160cm x 90cm x 75cm" }
            ]
        },
        7: { 
            id: 7,
            name: "Mesa Modelo X", 
            category: "Mesas Nórdicas", 
            price: 250000,
            formattedPrice: "$250.000",
            description: "Mesa con base en forma de X, elegante y robusta.", 
            images: ["imagenes/mesas/k3/k3mesa01.jpg", "imagenes/mesas/k3/k3mesa02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "180cm x 90cm x 75cm" }
            ]
        },
        8: { 
            id: 8,
            name: "Rack TV Nórdico K1", 
            category: "Racks TV Nórdicos", 
            price: 120000,
            formattedPrice: "$120.000",
            description: "Rack TV con diseño minimalista nórdico.", 
            images: ["imagenes/racks/k1/k1Rack01.jpg", "imagenes/racks/k1/k1Rack02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "120cm x 40cm x 50cm" }
            ]
        },
        9: { 
            id: 9,
            name: "Rack TV Nórdico K2", 
            category: "Racks TV Nórdicos", 
            price: 150000,
            formattedPrice: "$150.000",
            description: "Rack TV con diseño moderno y funcional.", 
            images: ["imagenes/racks/k2/k2Rack01.jpg", "imagenes/racks/k2/k2Rack02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "140cm x 45cm x 55cm" }
            ]
        },
        10: { 
            id: 10,
            name: "Mesita Nórdica K1", 
            category: "Mesitas Nórdicas", 
            price: 60000,
            formattedPrice: "$60.000",
            description: "Mesita de centro con diseño nórdico minimalista.", 
            images: ["imagenes/mesitas/k1/k1mesita01.jpg", "imagenes/mesitas/k1/k1mesita02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "80cm x 40cm x 45cm" }
            ]
        },
        11: { 
            id: 11,
            name: "Mesita Nórdica K2", 
            category: "Mesitas Nórdicas", 
            price: 70000,
            formattedPrice: "$70.000",
            description: "Mesita de centro con diseño moderno.", 
            images: ["imagenes/mesitas/k2/k2mesita01.jpg", "imagenes/mesitas/k2/k2mesita02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "90cm x 45cm x 45cm" }
            ]
        },
        12: { 
            id: 12,
            name: "Mesita Nórdica K3", 
            category: "Mesitas Nórdicas", 
            price: 80000,
            formattedPrice: "$80.000",
            description: "Mesita de centro con diseño elegante y funcional.", 
            images: ["imagenes/mesitas/k3/k3mesita01.jpg", "imagenes/mesitas/k3/k3mesita02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "100cm x 50cm x 45cm" }
            ]
        },
        13: { 
            id: 13,
            name: "Estantería Nórdica K1", 
            category: "Estanterías Nórdicas", 
            price: 250000,
            formattedPrice: "$250.000",
            description: "Estantería de pared con diseño nórdico.", 
            images: ["imagenes/estanterias/k1/k1estanteria01.jpg", "imagenes/estanterias/k1/k1estanteria02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "180cm x 120cm x 30cm" }
            ]
        },
        14: { 
            id: 14,
            name: "Estantería Nórdica K2", 
            category: "Estanterías Nórdicas", 
            price: 60000,
            formattedPrice: "$60.000",
            description: "Estantería pequeña con diseño minimalista.", 
            images: ["imagenes/estanterias/k2/k2estanteria01.jpg", "imagenes/estanterias/k2/k2estanteria02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "100cm x 60cm x 25cm" }
            ]
        },
        15: { 
            id: 15,
            name: "Estantería Nórdica K3", 
            category: "Estanterías Nórdicas", 
            price: 80000,
            formattedPrice: "$80.000",
            description: "Estantería modular con diseño moderno.", 
            images: ["imagenes/estanterias/k3/k3estanteria01.jpg", "imagenes/estanterias/k3/k3estanteria02.jpg"],
            specs: [
                { name: "Material", value: "Base de hierro y madera de eucalipto" }, 
                { name: "Dimensiones", value: "120cm x 80cm x 30cm" }
            ]
        }
    };

    // ===== SISTEMA DEL CARRITO =====
    let cart = JSON.parse(localStorage.getItem('nordic_cart')) || [];
    let currentProductId = null;

    // Inicializar carrito
    function initCart() {
        updateCartCount();
        updateCartUI();
    }

    // Agregar producto al carrito
    function addToCart(productId, quantity = 1) {
        const product = products[productId];
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price,
                formattedPrice: product.formattedPrice,
                image: product.images[0],
                quantity: quantity
            });
        }
        
        // Guardar en localStorage
        localStorage.setItem('nordic_cart', JSON.stringify(cart));
        
        // Actualizar UI
        updateCartCount();
        updateCartUI();
        
        // Animación de confirmación
        const cartCount = document.querySelector('.cart-count');
        cartCount.classList.add('updated');
        setTimeout(() => cartCount.classList.remove('updated'), 500);
        
        // Feedback visual en botón
        if (addToCartBtn) {
            addToCartBtn.innerHTML = '<i class="fas fa-check"></i> ¡Agregado!';
            addToCartBtn.classList.add('added');
            
            setTimeout(() => {
                addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Agregar al Carrito';
                addToCartBtn.classList.remove('added');
            }, 2000);
        }
        
        console.log('Producto agregado al carrito:', product.name);
    }

    // Remover producto del carrito
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('nordic_cart', JSON.stringify(cart));
        updateCartCount();
        updateCartUI();
    }

    // Actualizar cantidad de producto en carrito
    function updateQuantity(productId, newQuantity) {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }
        
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            localStorage.setItem('nordic_cart', JSON.stringify(cart));
            updateCartUI();
        }
    }

    // Vaciar carrito
    function clearCart() {
        if (cart.length === 0) return;
        
        if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
            cart = [];
            localStorage.removeItem('nordic_cart');
            updateCartCount();
            updateCartUI();
        }
    }

    // Actualizar contador del carrito en header
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCount = document.querySelector('.cart-count');
        
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    // Actualizar UI del carrito
    function updateCartUI() {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Formatear precio
        const formatPrice = (price) => {
            return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        };
        
        // Actualizar totales
        if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(subtotal);
        if (cartTotalEl) cartTotalEl.textContent = formatPrice(subtotal);
        
        // Mostrar/ocultar carrito vacío
        if (emptyCartEl) {
            if (cart.length === 0) {
                emptyCartEl.style.display = 'block';
                if (cartItemsContainer) cartItemsContainer.style.display = 'none';
            } else {
                emptyCartEl.style.display = 'none';
                if (cartItemsContainer) cartItemsContainer.style.display = 'block';
            }
        }
        
        // Renderizar items del carrito
        if (cartItemsContainer && cart.length > 0) {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-category">${item.category}</div>
                        <div class="cart-item-price">${item.formattedPrice}</div>
                        
                        <div class="cart-item-controls">
                            <div class="quantity-controls">
                                <button class="quantity-btn decrease" data-id="${item.id}">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn increase" data-id="${item.id}">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button class="btn-remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i> Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Agregar event listeners a los controles
            document.querySelectorAll('.decrease').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.closest('.decrease').dataset.id);
                    const item = cart.find(item => item.id === id);
                    if (item) updateQuantity(id, item.quantity - 1);
                });
            });
            
            document.querySelectorAll('.increase').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.closest('.increase').dataset.id);
                    const item = cart.find(item => item.id === id);
                    if (item) updateQuantity(id, item.quantity + 1);
                });
            });
            
            document.querySelectorAll('.btn-remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.closest('.btn-remove-item').dataset.id);
                    removeFromCart(id);
                });
            });
        }
    }

    // ===== SISTEMA DE NOTIFICACIONES =====
    let notifications = JSON.parse(localStorage.getItem('nordic_notifications')) || CONFIG.notifications;

    // Guardar notificaciones en localStorage
    function saveNotifications() {
        localStorage.setItem('nordic_notifications', JSON.stringify(notifications));
    }

    // Actualizar UI de notificaciones
    function updateNotificationsUI() {
        const unreadCount = notifications.filter(n => !n.read).length;
        const notificationCountEl = document.querySelector('.notification-count');
        
        // Actualizar contador
        if (notificationCountEl) {
            notificationCountEl.textContent = unreadCount;
            notificationCountEl.style.display = unreadCount > 0 ? 'flex' : 'none';
        }
        
        // Si no hay notificaciones
        if (notifications.length === 0) {
            if (notificationsList) notificationsList.style.display = 'none';
            if (noNotifications) noNotifications.style.display = 'block';
            return;
        }
        
        // Renderizar notificaciones
        if (notificationsList && noNotifications) {
            notificationsList.innerHTML = notifications.map(notif => `
                <div class="notification-item ${notif.read ? '' : 'unread'}" data-id="${notif.id}">
                    <div class="notification-icon">
                        <i class="${notif.icon}"></i>
                    </div>
                    <div class="notification-content">
                        <h4>${notif.title}</h4>
                        <p>${notif.message}</p>
                        <div class="notification-time">${notif.time}</div>
                    </div>
                </div>
            `).join('');
            
            notificationsList.style.display = 'block';
            noNotifications.style.display = 'none';
        }
    }

    // Marcar todas las notificaciones como leídas
    function markAllAsRead() {
        notifications.forEach(notif => notif.read = true);
        saveNotifications();
        updateNotificationsUI();
    }

    // ===== MODALES =====
    function openModal(modal) {
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Si es el modal de notificaciones, actualizar UI
            if (modal === notificationModal) {
                updateNotificationsUI();
            }
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // ===== MODAL DE PRODUCTO =====
    function openProductModal(productId) {
        const product = products[productId];
        if (!product) return;
        
        currentProductId = productId;
        
        // Actualizar contenido del modal
        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalCategory').textContent = product.category;
        document.getElementById('modalPrice').textContent = product.formattedPrice;
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

        // Configurar botones
        if (buyBtn) {
            buyBtn.onclick = () => {
                alert('Función de compra directa en desarrollo. Por ahora, agrega al carrito.');
            };
        }
        
        if (addToCartBtn) {
            addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Agregar al Carrito';
            addToCartBtn.classList.remove('added');
            addToCartBtn.onclick = () => {
                addToCart(productId);
            };
        }

        // Mostrar modal
        openModal(productModal);
    }

    function closeProductModal() {
        closeModal(productModal);
        currentProductId = null;
    }

    // ===== CARRUSEL HERO =====
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

    // ===== CARRUSEL DE PRODUCTOS - CLASE MEJORADA PARA 4 PRODUCTOS =====
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
            this.gap = 20; // Reducido para 4 productos
            
            this.init();
        }
        
        init() {
            setTimeout(() => {
                this.calculateDimensions();
                this.setupEvents();
                this.setupResizeListener();
                this.updatePosition(true);
                this.updateDots();
                this.updateArrows();
            }, 100);
        }
        
        calculateDimensions() {
            if (this.cards.length === 0 || !this.cards[0]) return;
            
            const firstCard = this.cards[0];
            this.cardWidth = firstCard.offsetWidth;
            
            // Calcular cuántas tarjetas caben en la pantalla
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / (this.cardWidth + this.gap)) || 1;
            const maxPossibleIndex = Math.max(0, this.totalCards - cardsPerView);
            
            if (this.currentIndex > maxPossibleIndex) {
                this.currentIndex = maxPossibleIndex;
            }
            
            console.log(`Carrusel: ${cardsPerView} tarjetas por vista, índice máximo: ${maxPossibleIndex}`);
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
        
        setupResizeListener() {
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    this.calculateDimensions();
                    this.updatePosition(true);
                    this.updateArrows();
                }, 250);
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
                // Forzar reflow
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
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / (this.cardWidth + this.gap)) || 1;
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            // Mostrar/ocultar flechas según sea necesario
            if (this.prevBtn) {
                this.prevBtn.disabled = this.currentIndex === 0;
                this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
            }
            
            if (this.nextBtn) {
                this.nextBtn.disabled = this.currentIndex >= maxIndex;
                this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
            }
        }
        
        next() {
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / (this.cardWidth + this.gap)) || 1;
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            if (maxIndex === 0) return;
            
            let animationSpeed = CONFIG.carouselSpeed;
            
            if (this.currentIndex < maxIndex) {
                this.currentIndex++;
            } else {
                // Si estamos al final, volver al inicio con animación especial
                this.currentIndex = 0;
                animationSpeed = 800;
                this.track.style.transition = `transform ${animationSpeed}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
            }
            
            const offset = -this.currentIndex * (this.cardWidth + this.gap);
            this.track.style.transform = `translateX(${offset}px)`;
            
            setTimeout(() => {
                this.track.style.transition = `transform ${CONFIG.carouselSpeed}ms ease`;
            }, animationSpeed + 50);
            
            this.updateDots();
            this.updateArrows();
        }
        
        prev() {
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / (this.cardWidth + this.gap)) || 1;
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            if (maxIndex === 0) return;
            
            let animationSpeed = CONFIG.carouselSpeed;
            
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                // Si estamos al inicio, ir al final con animación especial
                this.currentIndex = maxIndex;
                animationSpeed = 800;
                this.track.style.transition = `transform ${animationSpeed}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
            }
            
            const offset = -this.currentIndex * (this.cardWidth + this.gap);
            this.track.style.transform = `translateX(${offset}px)`;
            
            setTimeout(() => {
                this.track.style.transition = `transform ${CONFIG.carouselSpeed}ms ease`;
            }, animationSpeed + 50);
            
            this.updateDots();
            this.updateArrows();
        }
        
        goTo(index) {
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / (this.cardWidth + this.gap)) || 1;
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            if (index >= 0 && index <= maxIndex) {
                this.currentIndex = index;
                this.updatePosition();
            }
        }
    }

    // ===== FUNCIONALIDAD DE LOGIN/REGISTRO =====
    function setupAuthTabs() {
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                
                // Remover clase active de todas las pestañas
                authTabs.forEach(t => t.classList.remove('active'));
                // Agregar clase active a la pestaña clickeada
                tab.classList.add('active');
                
                // Ocultar todos los formularios
                authForms.forEach(form => {
                    form.classList.remove('active');
                });
                
                // Mostrar el formulario correspondiente
                document.getElementById(`${tabName}Form`).classList.add('active');
            });
        });
    }

    function setupTogglePassword() {
        togglePasswordBtns.forEach(button => {
            button.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const input = document.getElementById(targetId);
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        });
    }

    function setupAuthForms() {
        // Login form
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                // Validación simple
                if (!email || !password) {
                    alert('Por favor completa todos los campos');
                    return;
                }
                
                // Simulación de login exitoso
                alert(`¡Bienvenido de nuevo! Iniciando sesión con: ${email}`);
                closeModal(loginModal);
                loginForm.reset();
            });
        }
        
        // Register form
        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('registerName').value;
                const email = document.getElementById('registerEmail').value;
                const password = document.getElementById('registerPassword').value;
                const confirmPassword = document.getElementById('registerConfirmPassword').value;
                const acceptTerms = document.getElementById('acceptTerms').checked;
                
                // Validaciones
                if (!name || !email || !password || !confirmPassword) {
                    alert('Por favor completa todos los campos');
                    return;
                }
                
                if (password !== confirmPassword) {
                    alert('Las contraseñas no coinciden');
                    return;
                }
                
                if (!acceptTerms) {
                    alert('Debes aceptar los términos y condiciones');
                    return;
                }
                
                // Simulación de registro exitoso
                alert(`¡Cuenta creada exitosamente! Bienvenido/a ${name}`);
                closeModal(loginModal);
                registerForm.reset();
            });
        }
    }

    // ===== EVENT LISTENERS =====
    function setupEventListeners() {
        // Menú hamburguesa
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

        // Botones del header para abrir modales
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                updateCartUI();
                openModal(cartModal);
            });
        }

        if (notificationBtn) {
            notificationBtn.addEventListener('click', () => {
                updateNotificationsUI();
                openModal(notificationModal);
            });
        }

        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                openModal(loginModal);
            });
        }

        // Botones de cierre de modales
        modalCloseBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const modal = this.closest('.modal-overlay');
                if (modal) closeModal(modal);
            });
        });

        // Funcionalidad del carrito
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', clearCart);
        }

        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                if (cart.length === 0) {
                    alert('El carrito está vacío');
                    return;
                }
                alert('Función de checkout en desarrollo. Próximamente disponible.');
            });
        }

        if (continueShoppingBtn) {
            continueShoppingBtn.addEventListener('click', () => {
                closeModal(cartModal);
            });
        }

        // Cerrar modales al hacer clic fuera
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) closeProductModal();
        });

        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) closeModal(cartModal);
        });

        notificationModal.addEventListener('click', (e) => {
            if (e.target === notificationModal) closeModal(notificationModal);
        });

        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) closeModal(loginModal);
        });

        // Cerrar modales con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (productModal.style.display === 'flex') closeProductModal();
                if (cartModal.style.display === 'flex') closeModal(cartModal);
                if (notificationModal.style.display === 'flex') closeModal(notificationModal);
                if (loginModal.style.display === 'flex') closeModal(loginModal);
            }
        });

        // Botones "Ver Producto" en las tarjetas
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-view')) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                openProductModal(productId);
            }
        });

        // Botón "Marcar todas como leídas" en notificaciones
        if (markAllReadBtn) {
            markAllReadBtn.addEventListener('click', markAllAsRead);
        }

        // CARRUSEL HERO
        if (heroPrevBtn) heroPrevBtn.addEventListener('click', heroPrevSlide);
        if (heroNextBtn) heroNextBtn.addEventListener('click', heroNextSlide);
        heroDots.forEach((dot, index) => dot.addEventListener('click', () => heroGoToSlide(index)));
    }

    // ===== INICIALIZACIÓN =====
    function initializeCarousels() {
        const productContainers = document.querySelectorAll('.products-carousel-container');
        productContainers.forEach((container) => {
            new SimpleCarousel(container);
        });
    }

    function initializeApp() {
        // Inicializar carruseles
        initializeCarousels();
        
        // Inicializar sistemas
        initCart();
        updateNotificationsUI();
        
        // Configurar funcionalidades de autenticación
        setupAuthTabs();
        setupTogglePassword();
        setupAuthForms();
        
        // Configurar event listeners
        setupEventListeners();
        
        // Iniciar carrusel hero
        startHeroAutoSlide();
        
        if (heroTrack) {
            heroTrack.addEventListener('mouseenter', () => clearInterval(heroAutoSlide));
            heroTrack.addEventListener('mouseleave', startHeroAutoSlide);
        }
        
        console.log('✅ Sistema 4 productos inicializado correctamente');
        console.log('🛒 Carrito:', cart);
        console.log('🔔 Notificaciones:', notifications);
        console.log('📱 Cards por vista configurado en:', CONFIG.cardsPerView);
    }

    // Iniciar la aplicación
    initializeApp();
});
