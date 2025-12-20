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

    // ===== MODALES ADICIONALES =====
    const notificationModal = document.getElementById('notificationModal');
    const loginModal = document.getElementById('loginModal');
    const cartModal = document.getElementById('cartModal');
    const notificationBtn = document.getElementById('notificationBtn');
    const loginBtn = document.getElementById('loginBtn');
    const cartBtn = document.getElementById('cartBtn');
    const notificationCloseBtn = document.querySelector('.notification-close');
    const loginCloseBtn = document.querySelector('.login-close');
    const cartCloseBtn = document.querySelector('.cart-close');
    const markAllBtn = document.getElementById('markAllReadBtn');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    const loginForm = document.getElementById('loginFormContent');
    const registerForm = document.getElementById('registerFormContent');
    const notificationsList = document.getElementById('notificationsList');
    const noNotifications = document.getElementById('noNotifications');
    const clearCartBtn = document.getElementById('clearCartBtn');
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');

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
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "120cm x 60cm x 75cm" }] },
        2: { name: "Escritorio 1.30m", category: "Escritorios Nórdicos", price: "$150.000",
            description: "Escritorio de 1.30 metros fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/escritorios/130/k2escritorio01.png", "imagenes/escritorios/130/k2escritorio02.png"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "130cm x 65cm x 75cm" }] },
        3: { name: "Escritorio 1.60m", category: "Escritorios Nórdicos", price: "$200.000",
            description: "Elegante escritorio de 1.60 metros fabricado con base de hierro y madera de eucalipto.", images: ["imagenes/escritorios/160/k3escritorio01.jpg", "imagenes/escritorios/160/k3escritorio02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "160cm x 80cm x 75cm" }] },
        4: { name: "Escritorio 2.00m", category: "Escritorios Nórdicos", price: "$250.000",
            description: "Impresionante escritorio de 2 metros para espacios amplios.", images: ["imagenes/escritorios/200/k4escritorio01.jpg", "imagenes/escritorios/200/k4escritorio02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "200cm x 100cm x 75cm" }] },
        5: { name: "Mesa Modelo Trineo", category: "Mesas Nórdicas", price: "$200.000",
            description: "Mesa de diseño nórdico con base en forma de trineo.", images: ["imagenes/mesas/k1/k1mesa01.jpg", "imagenes/mesas/k1/k1mesa02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "150cm x 90cm x 75cm" }] },
        6: { name: "Mesa Modelo U", category: "Mesas Nórdicas", price: "$220.000",
            description: "Mesa con base en forma de U, diseño industrial nórdico.", images: ["imagenes/mesas/k2/k2mesa01.jpg", "imagenes/mesas/k2/k2mesa02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "160cm x 90cm x 75cm" }] },
        7: { name: "Mesa Modelo X", category: "Mesas Nórdicas", price: "$250.000",
            description: "Mesa con base en forma de X, elegante y robusta.", images: ["imagenes/mesas/k3/k3mesa01.jpg", "imagenes/mesas/k3/k3mesa02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "180cm x 90cm x 75cm" }] },
        8: { name: "Rack TV Nórdico K1", category: "Racks TV Nórdicos", price: "$120.000",
            description: "Rack TV con diseño minimalista nórdico.", images: ["imagenes/racks/k1/k1Rack01.jpg", "imagenes/racks/k1/k1Rack02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "120cm x 40cm x 50cm" }] },
        9: { name: "Rack TV Nórdico K2", category: "Racks TV Nórdicos", price: "$150.000",
            description: "Rack TV con diseño moderno y funcional.", images: ["imagenes/racks/k2/k2Rack01.jpg", "imagenes/racks/k2/k2Rack02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "140cm x 45cm x 55cm" }] },
        10: { name: "Mesita Nórdica K1", category: "Mesitas Nórdicas", price: "$60.000",
            description: "Mesita de centro con diseño nórdico minimalista.", images: ["imagenes/mesitas/k1/k1mesita01.jpg", "imagenes/mesitas/k1/k1mesita02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "80cm x 40cm x 45cm" }] },
        11: { name: "Mesita Nórdica K2", category: "Mesitas Nórdicas", price: "$70.000",
            description: "Mesita de centro con diseño moderno.", images: ["imagenes/mesitas/k2/k2mesita01.jpg", "imagenes/mesitas/k2/k2mesita02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "90cm x 45cm x 45cm" }] },
        12: { name: "Mesita Nórdica K3", category: "Mesitas Nórdicas", price: "$80.000",
            description: "Mesita de centro con diseño elegante y funcional.", images: ["imagenes/mesitas/k3/k3mesita01.jpg", "imagenes/mesitas/k3/k3mesita02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "100cm x 50cm x 45cm" }] },
        13: { name: "Estantería Nórdica K1", category: "Estanterías Nórdicas", price: "$250.000",
            description: "Estantería de pared con diseño nórdico.", images: ["imagenes/estanterias/k1/k1estanteria01.jpg", "imagenes/estanterias/k1/k1estanteria02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "180cm x 120cm x 30cm" }] },
        14: { name: "Estantería Nórdica K2", category: "Estanterías Nórdicas", price: "$60.000",
            description: "Estantería pequeña con diseño minimalista.", images: ["imagenes/estanterias/k2/k2estanteria01.jpg", "imagenes/estanterias/k2/k2estanteria02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "100cm x 60cm x 25cm" }] },
        15: { name: "Estantería Nórdica K3", category: "Estanterías Nórdicas", price: "$80.000",
            description: "Estantería modular con diseño moderno.", images: ["imagenes/estanterias/k3/k3estanteria01.jpg", "imagenes/estanterias/k3/k3estanteria02.jpg"],
            specs: [{ name: "Material", value: "Base de hierro y madera de eucalipto" }, { name: "Dimensiones", value: "120cm x 80cm x 30cm" }] }
    };

    // ===== SISTEMA DE CARRITO =====
    class ShoppingCart {
        constructor() {
            this.cart = [];
            this.loadCart();
            this.updateCartCount();
        }
        
        loadCart() {
            const savedCart = localStorage.getItem('nordic_cart');
            if (savedCart) {
                try {
                    this.cart = JSON.parse(savedCart);
                } catch (e) {
                    this.cart = [];
                    this.saveCart();
                }
            }
        }
        
        saveCart() {
            localStorage.setItem('nordic_cart', JSON.stringify(this.cart));
        }
        
        addItem(productId, quantity = 1) {
            const product = products[productId];
            if (!product) return false;
            
            const existingIndex = this.cart.findIndex(item => item.id === productId);
            
            if (existingIndex >= 0) {
                this.cart[existingIndex].quantity += quantity;
            } else {
                this.cart.push({
                    id: productId,
                    name: product.name,
                    price: this.parsePrice(product.price),
                    quantity: quantity,
                    image: product.images[0],
                    category: product.category
                });
            }
            
            this.saveCart();
            this.updateCartCount();
            return true;
        }
        
        removeItem(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCart();
            this.updateCartCount();
        }
        
        updateQuantity(productId, quantity) {
            const itemIndex = this.cart.findIndex(item => item.id === productId);
            if (itemIndex >= 0) {
                if (quantity <= 0) {
                    this.removeItem(productId);
                } else {
                    this.cart[itemIndex].quantity = quantity;
                    this.saveCart();
                }
            }
            this.updateCartCount();
        }
        
        clearCart() {
            this.cart = [];
            this.saveCart();
            this.updateCartCount();
        }
        
        parsePrice(priceString) {
            return parseInt(priceString.replace(/[^0-9]/g, ''), 10);
        }
        
        getItemCount() {
            return this.cart.reduce((total, item) => total + item.quantity, 0);
        }
        
        getSubtotal() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
        
        formatPrice(amount) {
            return `$${amount.toLocaleString('es-AR')}`;
        }
        
        updateCartCount() {
            const count = this.getItemCount();
            const cartCountElement = document.querySelector('.cart-count');
            if (cartCountElement) {
                cartCountElement.textContent = count;
                cartCountElement.style.display = count > 0 ? 'flex' : 'none';
            }
        }
        
        renderCart() {
            const cartItemsElement = document.getElementById('cartItems');
            const cartEmptyElement = document.getElementById('cartEmpty');
            const cartSubtotalElement = document.getElementById('cartSubtotal');
            const cartTotalElement = document.getElementById('cartTotal');
            const checkoutBtn = document.getElementById('checkoutBtn');
            
            if (!cartItemsElement || !cartEmptyElement) return;
            
            if (this.cart.length === 0) {
                cartItemsElement.innerHTML = '';
                cartEmptyElement.style.display = 'block';
                cartItemsElement.style.display = 'none';
                if (checkoutBtn) checkoutBtn.disabled = true;
            } else {
                cartEmptyElement.style.display = 'none';
                cartItemsElement.style.display = 'block';
                if (checkoutBtn) checkoutBtn.disabled = false;
                
                cartItemsElement.innerHTML = '';
                
                this.cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.setAttribute('data-id', item.id);
                    
                    cartItem.innerHTML = `
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <div class="cart-item-price">${this.formatPrice(item.price)} c/u</div>
                            <div class="cart-item-actions">
                                <div class="cart-item-quantity">
                                    <button class="quantity-btn minus">-</button>
                                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10">
                                    <button class="quantity-btn plus">+</button>
                                </div>
                                <button class="btn-remove-item" title="Eliminar">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <div class="cart-item-total">${this.formatPrice(itemTotal)}</div>
                    `;
                    
                    cartItemsElement.appendChild(cartItem);
                    
                    const minusBtn = cartItem.querySelector('.minus');
                    const plusBtn = cartItem.querySelector('.plus');
                    const quantityInput = cartItem.querySelector('.quantity-input');
                    const removeBtn = cartItem.querySelector('.btn-remove-item');
                    
                    minusBtn.addEventListener('click', () => {
                        const newQuantity = parseInt(quantityInput.value) - 1;
                        if (newQuantity >= 1) {
                            quantityInput.value = newQuantity;
                            this.updateQuantity(item.id, newQuantity);
                            this.renderCart();
                        }
                    });
                    
                    plusBtn.addEventListener('click', () => {
                        const newQuantity = parseInt(quantityInput.value) + 1;
                        if (newQuantity <= 10) {
                            quantityInput.value = newQuantity;
                            this.updateQuantity(item.id, newQuantity);
                            this.renderCart();
                        }
                    });
                    
                    quantityInput.addEventListener('change', (e) => {
                        let newQuantity = parseInt(e.target.value);
                        if (isNaN(newQuantity) || newQuantity < 1) newQuantity = 1;
                        if (newQuantity > 10) newQuantity = 10;
                        e.target.value = newQuantity;
                        this.updateQuantity(item.id, newQuantity);
                        this.renderCart();
                    });
                    
                    removeBtn.addEventListener('click', () => {
                        this.removeItem(item.id);
                        this.renderCart();
                    });
                });
            }
            
            const subtotal = this.getSubtotal();
            if (cartSubtotalElement) {
                cartSubtotalElement.textContent = this.formatPrice(subtotal);
            }
            if (cartTotalElement) {
                cartTotalElement.textContent = this.formatPrice(subtotal);
            }
        }
    }

    // ===== INICIALIZAR CARRITO =====
    let shoppingCart = new ShoppingCart();

    // ===== NOTIFICACIONES =====
    let notifications = [];

    function loadNotifications() {
        notifications = [];
        updateNotificationsUI();
        updateNotificationCount();
    }

    function updateNotificationsUI() {
        if (!notificationsList || !noNotifications) return;
        
        notificationsList.innerHTML = '';
        
        if (notifications.length === 0) {
            noNotifications.style.display = 'block';
            notificationsList.style.display = 'none';
        } else {
            noNotifications.style.display = 'none';
            notificationsList.style.display = 'block';
            
            notifications.forEach(notification => {
                const notificationItem = document.createElement('div');
                notificationItem.className = `notification-item ${notification.read ? '' : 'unread'}`;
                notificationItem.setAttribute('data-id', notification.id);
                
                notificationItem.innerHTML = `
                    <div class="notification-icon">
                        <i class="${notification.icon}"></i>
                    </div>
                    <div class="notification-content">
                        <h4>${notification.title}</h4>
                        <p>${notification.message}</p>
                        <span class="notification-time">${notification.time}</span>
                    </div>
                `;
                
                notificationItem.addEventListener('click', () => {
                    markAsRead(notification.id);
                });
                
                notificationsList.appendChild(notificationItem);
            });
        }
    }

    function updateNotificationCount() {
        const notificationCount = document.querySelector('.notification-count');
        if (notificationCount) {
            const unreadCount = notifications.filter(n => !n.read).length;
            notificationCount.textContent = unreadCount;
            notificationCount.style.display = unreadCount > 0 ? 'flex' : 'none';
        }
    }

    function markAsRead(notificationId) {
        const notification = notifications.find(n => n.id === notificationId);
        if (notification && !notification.read) {
            notification.read = true;
            updateNotificationsUI();
            updateNotificationCount();
        }
    }

    function markAllAsRead() {
        notifications.forEach(notification => {
            notification.read = true;
        });
        updateNotificationsUI();
        updateNotificationCount();
    }

    // ===== FUNCIONALIDAD DE NOTIFICACIONES =====
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            openModal(notificationModal);
            loadNotifications();
        });
    }

    if (notificationCloseBtn) {
        notificationCloseBtn.addEventListener('click', () => {
            closeModal(notificationModal);
        });
    }

    if (markAllBtn) {
        markAllBtn.addEventListener('click', () => {
            markAllAsRead();
        });
    }

    // ===== FUNCIONALIDAD DE LOGIN/REGISTRO =====
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            openModal(loginModal);
            switchAuthTab('login');
        });
    }

    if (loginCloseBtn) {
        loginCloseBtn.addEventListener('click', () => {
            closeModal(loginModal);
        });
    }

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchAuthTab(tabId);
        });
    });

    function switchAuthTab(tabId) {
        authTabs.forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId);
        });
        
        authForms.forEach(form => {
            form.classList.toggle('active', form.id === `${tabId}Form`);
        });
    }

    document.querySelectorAll('.toggle-password').forEach(button => {
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

    // ===== MANEJO DE FORMULARIOS =====
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (!email || !password) {
                showFormError('Por favor, completa todos los campos');
                return;
            }
            
            console.log('Login attempt:', { email, password });
            
            simulateLogin({ email, name: email.split('@')[0] });
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            const acceptTerms = document.getElementById('acceptTerms').checked;
            
            if (!name || !email || !password || !confirmPassword) {
                showFormError('Por favor, completa todos los campos');
                return;
            }
            
            if (password !== confirmPassword) {
                showFormError('Las contraseñas no coinciden');
                return;
            }
            
            if (!acceptTerms) {
                showFormError('Debes aceptar los términos y condiciones');
                return;
            }
            
            if (password.length < 6) {
                showFormError('La contraseña debe tener al menos 6 caracteres');
                return;
            }
            
            console.log('Register attempt:', { name, email, password });
            
            simulateRegistration({ name, email });
        });
    }

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
            
            const trackWidth = this.track.scrollWidth;
            const containerWidth = this.track.parentElement.offsetWidth;
            const maxPossibleIndex = Math.max(0, this.totalCards - Math.floor(containerWidth / this.cardWidth));
            
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
            const trackWidth = this.track.scrollWidth;
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / this.cardWidth);
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            if (maxIndex === 0) {
                if (this.prevBtn) this.prevBtn.style.opacity = '0.5';
                if (this.nextBtn) this.nextBtn.style.opacity = '0.5';
            } else {
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
                return;
            }
            
            let animationSpeed = CONFIG.carouselSpeed;
            
            if (this.currentIndex < maxIndex) {
                this.currentIndex++;
            } else {
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
            const trackWidth = this.track.scrollWidth;
            const containerWidth = this.track.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / this.cardWidth);
            const maxIndex = Math.max(0, this.totalCards - cardsPerView);
            
            if (maxIndex === 0) return;
            
            let animationSpeed = CONFIG.carouselSpeed;
            
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
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

    // ===== MODAL DE PRODUCTO =====
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

        const price = shoppingCart.parsePrice(product.price);
        const quantityInput = document.querySelector('.product-quantity-modal .quantity-input');
        const totalPriceElement = document.getElementById('modalTotalPrice');
        
        function updateModalTotal() {
            const quantity = parseInt(quantityInput.value);
            const total = price * quantity;
            totalPriceElement.textContent = shoppingCart.formatPrice(total);
        }
        
        if (quantityInput) {
            quantityInput.value = 1;
            quantityInput.addEventListener('input', updateModalTotal);
            
            const minusBtn = document.querySelector('.product-quantity-modal .minus');
            const plusBtn = document.querySelector('.product-quantity-modal .plus');
            
            if (minusBtn) {
                minusBtn.onclick = () => {
                    let value = parseInt(quantityInput.value);
                    if (value > 1) {
                        quantityInput.value = value - 1;
                        updateModalTotal();
                    }
                };
            }
            
            if (plusBtn) {
                plusBtn.onclick = () => {
                    let value = parseInt(quantityInput.value);
                    if (value < 10) {
                        quantityInput.value = value + 1;
                        updateModalTotal();
                    }
                };
            }
            
            updateModalTotal();
        }

        const addCartBtn = document.getElementById('modalAddCartBtn');
        const buyBtn = document.getElementById('modalBuyBtn');
        
        if (addCartBtn) {
            addCartBtn.onclick = () => {
                const quantity = parseInt(quantityInput.value);
                if (shoppingCart.addItem(productId, quantity)) {
                    showNotification('Producto agregado al carrito', 'success');
                    quantityInput.value = 1;
                    updateModalTotal();
                }
            };
        }
        
        if (buyBtn) {
            buyBtn.onclick = () => {
                const quantity = parseInt(quantityInput.value);
                if (shoppingCart.addItem(productId, quantity)) {
                    closeProductModal();
                    openModal(cartModal);
                    shoppingCart.renderCart();
                    showNotification('Producto agregado al carrito', 'success');
                }
            };
        }

        productModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        productModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // ===== FUNCIONES AUXILIARES =====
    function openModal(modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function showFormError(message) {
        let errorDiv = document.querySelector('.form-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            errorDiv.style.cssText = `
                background: #ffebee;
                color: #c62828;
                padding: 12px;
                border-radius: var(--border-radius);
                margin-bottom: 20px;
                font-size: 0.9rem;
                text-align: center;
            `;
            const activeForm = document.querySelector('.auth-form.active form');
            activeForm.prepend(errorDiv);
        }
        errorDiv.textContent = message;
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }

    function simulateLogin(userData) {
        const loginBtn = document.querySelector('.btn-login');
        const originalText = loginBtn.textContent;
        
        loginBtn.textContent = 'Iniciando sesión...';
        loginBtn.disabled = true;
        
        setTimeout(() => {
            loginBtn.textContent = '¡Inicio exitoso!';
            loginBtn.style.background = '#4CAF50';
            
            const loginIcon = document.getElementById('loginBtn');
            if (loginIcon) {
                loginIcon.innerHTML = '<i class="fas fa-user-check"></i>';
                loginIcon.title = `Bienvenido, ${userData.name}`;
            }
            
            setTimeout(() => {
                closeModal(loginModal);
                loginBtn.textContent = originalText;
                loginBtn.disabled = false;
                loginBtn.style.background = '';
            }, 1500);
        }, 1500);
    }

    function simulateRegistration(userData) {
        const registerBtn = document.querySelector('.btn-register');
        const originalText = registerBtn.textContent;
        
        registerBtn.textContent = 'Creando cuenta...';
        registerBtn.disabled = true;
        
        setTimeout(() => {
            registerBtn.textContent = '¡Cuenta creada!';
            registerBtn.style.background = '#4CAF50';
            
            setTimeout(() => {
                simulateLogin(userData);
            }, 1500);
        }, 1500);
    }

    // ===== SISTEMA DEL CARRITO =====
    function initializeCartSystem() {
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                openModal(cartModal);
                shoppingCart.renderCart();
            });
        }
        
        if (cartCloseBtn) {
            cartCloseBtn.addEventListener('click', () => {
                closeModal(cartModal);
            });
        }
        
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', () => {
                if (shoppingCart.cart.length > 0) {
                    if (confirm('¿Estás seguro de vaciar el carrito?')) {
                        shoppingCart.clearCart();
                        shoppingCart.renderCart();
                    }
                }
            });
        }
        
        if (continueShoppingBtn) {
            continueShoppingBtn.addEventListener('click', () => {
                closeModal(cartModal);
            });
        }
        
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                alert('Funcionalidad de checkout en desarrollo. ¡Gracias por tu interés!');
            });
        }
        
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-add-cart') || 
                e.target.closest('.btn-add-cart')) {
                const button = e.target.classList.contains('btn-add-cart') ? 
                    e.target : e.target.closest('.btn-add-cart');
                const productId = button.getAttribute('data-id');
                const productCard = button.closest('.product-card');
                
                if (productCard) {
                    const quantityInput = productCard.querySelector('.quantity-input');
                    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
                    
                    if (shoppingCart.addItem(productId, quantity)) {
                        showNotification('Producto agregado al carrito', 'success');
                        if (quantityInput) quantityInput.value = 1;
                    }
                }
            }
            
            if (e.target.classList.contains('btn-buy') || 
                e.target.closest('.btn-buy')) {
                const button = e.target.classList.contains('btn-buy') ? 
                    e.target : e.target.closest('.btn-buy');
                const productId = button.getAttribute('data-id');
                const productCard = button.closest('.product-card');
                
                if (productCard) {
                    const quantityInput = productCard.querySelector('.quantity-input');
                    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
                    
                    if (shoppingCart.addItem(productId, quantity)) {
                        openModal(cartModal);
                        shoppingCart.renderCart();
                        showNotification('Producto agregado al carrito', 'success');
                        if (quantityInput) quantityInput.value = 1;
                    }
                }
            }
        });
    }

    // ===== FUNCIÓN PARA MOSTRAR NOTIFICACIONES =====
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification-toast notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#2ecc71' : '#3498db'};
            color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            z-index: 3000;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 300px;
        `;
        
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(120%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
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
    }

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

    notificationModal.addEventListener('click', (e) => {
        if (e.target === notificationModal) closeModal(notificationModal);
    });

    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) closeModal(loginModal);
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) closeModal(cartModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (productModal.style.display === 'flex') closeProductModal();
            if (notificationModal.style.display === 'flex') closeModal(notificationModal);
            if (loginModal.style.display === 'flex') closeModal(loginModal);
            if (cartModal.style.display === 'flex') closeModal(cartModal);
        }
    });

    // ===== INICIALIZACIÓN =====
    function initializeCarousels() {
        const productContainers = document.querySelectorAll('.products-carousel-container');
        
        productContainers.forEach((container) => {
            new SimpleCarousel(container);
        });
    }

    function initializeQuantitySelectors() {
        document.querySelectorAll('.product-card').forEach(card => {
            const productId = card.getAttribute('data-id');
            const product = products[productId];
            
            const quantityInput = card.querySelector('.quantity-input');
            const minusBtn = card.querySelector('.quantity-btn.minus');
            const plusBtn = card.querySelector('.quantity-btn.plus');
            
            if (quantityInput && minusBtn && plusBtn) {
                minusBtn.addEventListener('click', () => {
                    let value = parseInt(quantityInput.value);
                    if (value > 1) {
                        quantityInput.value = value - 1;
                    }
                });
                
                plusBtn.addEventListener('click', () => {
                    let value = parseInt(quantityInput.value);
                    if (value < 10) {
                        quantityInput.value = value + 1;
                    }
                });
                
                quantityInput.addEventListener('change', (e) => {
                    let value = parseInt(e.target.value);
                    if (isNaN(value) || value < 1) value = 1;
                    if (value > 10) value = 10;
                    e.target.value = value;
                });
            }
        });
    }

    function initializeAuthSystem() {
        loadNotifications();
        console.log('✅ Sistema de autenticación y notificaciones inicializado');
    }

    function initializeApp() {
        initializeCarousels();
        
        startHeroAutoSlide();
        
        if (heroTrack) {
            heroTrack.addEventListener('mouseenter', () => clearInterval(heroAutoSlide));
            heroTrack.addEventListener('mouseleave', startHeroAutoSlide);
        }
        
        initializeAuthSystem();
        initializeCartSystem();
        
        setTimeout(() => {
            initializeQuantitySelectors();
        }, 500);
        
        console.log('✅ Sistema inicializado correctamente');
    }

    initializeApp();
});
