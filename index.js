// index.js - ESTILO NÓRDICO V5 PREMIUM
// Sistema completo con todas las funcionalidades mejoradas

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Estilo Nórdico Premium - Sistema inicializado');
    
    // ===== CONFIGURACIÓN GLOBAL =====
    const CONFIG = {
        siteName: 'Estilo Nórdico',
        version: '5.0.0',
        carouselSpeed: 400,
        heroAutoSlideInterval: 6000,
        currency: 'ARS',
        shipping: {
            freeThreshold: 200000,
            cost: 5000
        },
        notifications: [
            {
                id: 1,
                type: 'shipping',
                icon: 'fas fa-truck',
                title: '¡Envío confirmado!',
                message: 'Tu pedido #ORD-2024-001 ha sido enviado',
                time: 'Hace 2 horas',
                read: false,
                timestamp: Date.now() - 7200000
            },
            {
                id: 2,
                type: 'promo',
                icon: 'fas fa-tag',
                title: 'Oferta especial',
                message: '20% de descuento en escritorios nórdicos esta semana',
                time: 'Hace 1 día',
                read: false,
                timestamp: Date.now() - 86400000
            },
            {
                id: 3,
                type: 'new',
                icon: 'fas fa-gift',
                title: '¡Nueva colección!',
                message: 'Descubre nuestra nueva línea de estanterías modulares',
                time: 'Hace 3 días',
                read: true,
                timestamp: Date.now() - 259200000
            },
            {
                id: 4,
                type: 'review',
                icon: 'fas fa-star',
                title: 'Deja tu opinión',
                message: '¿Qué te pareció tu escritorio 1.60m? Comparte tu experiencia',
                time: 'Hace 5 días',
                read: true,
                timestamp: Date.now() - 432000000
            }
        ],
        testimonials: [
            {
                id: 1,
                name: 'Carlos Rodríguez',
                role: 'Diseñador UX/UI',
                rating: 5,
                text: 'El escritorio 1.60m superó todas mis expectativas. La calidad de la madera es excepcional y el diseño minimalista se integra perfectamente en mi home office.',
                avatar: 'https://i.pravatar.cc/150?img=1',
                product: 'Escritorio 1.60m',
                date: '2024-01-15'
            },
            {
                id: 2,
                name: 'Ana Martínez',
                role: 'Arquitecta',
                rating: 4.5,
                text: 'Compré la mesa modelo X para mi comedor y todos mis invitados preguntan dónde la conseguí. La combinación de madera e hierro es perfecta.',
                avatar: 'https://i.pravatar.cc/150?img=2',
                product: 'Mesa Modelo X',
                date: '2024-01-10'
            },
            {
                id: 3,
                name: 'Miguel Sánchez',
                role: 'Ingeniero',
                rating: 5,
                text: 'El servicio post-venta es increíble. Tuve una consulta sobre el ensamble y me atendieron al instante por WhatsApp. 100% recomendados.',
                avatar: 'https://i.pravatar.cc/150?img=3',
                product: 'Rack TV K2',
                date: '2024-01-05'
            },
            {
                id: 4,
                name: 'Laura Fernández',
                role: 'Desarrolladora Web',
                rating: 5,
                text: 'La estantería K1 transformó mi espacio de trabajo. Es funcional, bonita y muy bien construida. Ya estoy planeando mi próxima compra.',
                avatar: 'https://i.pravatar.cc/150?img=4',
                product: 'Estantería K1',
                date: '2024-01-02'
            }
        ],
        inspiration: [
            {
                id: 1,
                title: 'Home Office Minimalista',
                description: 'Carlos transformó su espacio de trabajo con nuestro escritorio 1.60m',
                tag: 'Oficina',
                image: 'https://images.unsplash.com/photo-1616594039964-ae9021b4006c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                products: [3, 15]
            },
            {
                id: 2,
                title: 'Sala de Estar Elegante',
                description: 'Ana combinó nuestro rack TV K2 con mesitas nórdicas',
                tag: 'Living',
                image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                products: [9, 11]
            },
            {
                id: 3,
                title: 'Comedor Familiar',
                description: 'La familia Rodríguez eligió nuestra mesa modelo X para su hogar',
                tag: 'Comedor',
                image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                products: [7]
            }
        ],
        products: {
            1: {
                id: 1,
                name: 'Escritorio 1.20m',
                category: 'Escritorios Nórdicos',
                subcategory: 'escritorio',
                price: 120000,
                oldPrice: 150000,
                formattedPrice: '$120.000',
                formattedOldPrice: '$150.000',
                description: 'Escritorio de 1.20 metros fabricado con base de hierro y madera de eucalipto. Diseño nórdico minimalista perfecto para espacios de trabajo modernos.',
                fullDescription: 'Este escritorio nórdico de 1.20 metros combina elegancia y funcionalidad. Fabricado con madera de eucalipto maciza de primera calidad y base de hierro industrial, ofrece durabilidad excepcional. Ideal para home office o estudios pequeños.',
                images: [
                    'imagenes/escritorios/120/k1escritorio01.png',
                    'imagenes/escritorios/120/k1escritorio02.png',
                    'imagenes/escritorios/120/k1escritorio03.png'
                ],
                specs: [
                    { name: 'Material', value: 'Base de hierro y madera de eucalipto' },
                    { name: 'Dimensiones', value: '120×60×75 cm' },
                    { name: 'Color', value: 'Natural de madera' },
                    { name: 'Peso máximo', value: '50 kg' },
                    { name: 'Peso del producto', value: '25 kg' },
                    { name: 'Acabado', value: 'Barniz mate protector' }
                ],
                features: ['Minimalista', 'Con almacenamiento', 'Gestión de cables'],
                tags: ['nuevo', 'artesanal', 'escritorio'],
                stock: 15,
                rating: 4.5,
                reviews: 24,
                delivery: 'Envío gratis en 3-5 días',
                installment: '12× $10.000'
            },
            2: {
                id: 2,
                name: 'Escritorio 1.30m',
                category: 'Escritorios Nórdicos',
                subcategory: 'escritorio',
                price: 150000,
                formattedPrice: '$150.000',
                description: 'Escritorio de 1.30 metros fabricado con base de hierro y madera de eucalipto. Ideal para espacios de trabajo amplios.',
                fullDescription: 'Con diseño nórdico minimalista y funcionalidades avanzadas. Incluye cajones ocultos y sistema de gestión de cables integrado. Perfecto para profesionales que necesitan organización y estilo.',
                images: [
                    'imagenes/escritorios/130/k2escritorio01.png',
                    'imagenes/escritorios/130/k2escritorio02.png'
                ],
                specs: [
                    { name: 'Material', value: 'Base de hierro y madera de eucalipto' },
                    { name: 'Dimensiones', value: '130×65×75 cm' },
                    { name: 'Color', value: 'Natural de madera' },
                    { name: 'Peso máximo', value: '60 kg' },
                    { name: 'Peso del producto', value: '30 kg' },
                    { name: 'Acabado', value: 'Barniz mate protector' }
                ],
                features: ['Con cajones', 'Gestión de cables', 'Diseño ergonómico'],
                tags: ['popular', 'escritorio'],
                stock: 8,
                rating: 4.0,
                reviews: 18,
                delivery: 'Envío gratis en 3-5 días',
                installment: '12× $12.500'
            },
            3: {
                id: 3,
                name: 'Escritorio 1.60m',
                category: 'Escritorios Nórdicos',
                subcategory: 'escritorio',
                price: 200000,
                formattedPrice: '$200.000',
                description: 'Elegante escritorio de 1.60 metros fabricado con base de hierro y madera de eucalipto. Perfecto para espacios ejecutivos.',
                fullDescription: 'Escritorio ejecutivo premium con capacidad para doble monitor y amplio espacio de trabajo. Acabados artesanales y materiales premium para un ambiente de trabajo inspirador.',
                images: [
                    'imagenes/escritorios/160/k3escritorio01.jpg',
                    'imagenes/escritorios/160/k3escritorio02.jpg',
                    'imagenes/escritorios/160/k3escritorio03.jpg'
                ],
                specs: [
                    { name: 'Material', value: 'Base de hierro y madera de eucalipto' },
                    { name: 'Dimensiones', value: '160×80×75 cm' },
                    { name: 'Color', value: 'Natural de madera' },
                    { name: 'Peso máximo', value: '80 kg' },
                    { name: 'Peso del producto', value: '45 kg' },
                    { name: 'Acabado', value: 'Barniz mate protector' }
                ],
                features: ['Premium', 'Artesanal', 'Espacioso'],
                tags: ['premium', 'artesanal', 'escritorio'],
                stock: 5,
                rating: 5.0,
                reviews: 32,
                delivery: 'Envío gratis en 3-5 días',
                installment: '12× $16.667'
            },
            4: {
                id: 4,
                name: 'Escritorio 2.00m',
                category: 'Escritorios Nórdicos',
                subcategory: 'escritorio',
                price: 250000,
                formattedPrice: '$250.000',
                description: 'Impresionante escritorio de 2 metros para espacios amplios. Máxima elegancia y funcionalidad.',
                fullDescription: 'Escritorio ejecutivo de lujo con capacidad para múltiples monitores y amplio espacio de trabajo. Diseño personalizable con opciones de acabados especiales.',
                images: [
                    'imagenes/escritorios/200/k4escritorio01.jpg',
                    'imagenes/escritorios/200/k4escritorio02.jpg'
                ],
                specs: [
                    { name: 'Material', value: 'Base de hierro y madera de eucalipto' },
                    { name: 'Dimensiones', value: '200×100×75 cm' },
                    { name: 'Color', value: 'Natural de madera' },
                    { name: 'Peso máximo', value: '100 kg' },
                    { name: 'Peso del producto', value: '60 kg' },
                    { name: 'Acabado', value: 'Barniz mate protector' }
                ],
                features: ['Personalizable', 'Ejecutivo', 'Lujo'],
                tags: ['nuevo', 'custom', 'escritorio'],
                stock: 3,
                rating: 4.5,
                reviews: 15,
                delivery: 'Envío gratis en 5-7 días',
                installment: '12× $20.833'
            }
            // ... otros productos similares para mesas, racks, etc.
        }
    };

    // ===== SISTEMA DE ESTADO GLOBAL =====
    const State = {
        cart: JSON.parse(localStorage.getItem('nordic_cart')) || [],
        wishlist: JSON.parse(localStorage.getItem('nordic_wishlist')) || [],
        compare: JSON.parse(localStorage.getItem('nordic_compare')) || [],
        notifications: JSON.parse(localStorage.getItem('nordic_notifications')) || CONFIG.notifications,
        viewedProducts: JSON.parse(localStorage.getItem('nordic_viewed')) || [],
        user: JSON.parse(localStorage.getItem('nordic_user')) || null,
        filters: {
            price: { min: 0, max: 500000 },
            category: 'all',
            tags: [],
            search: ''
        },
        hero: {
            currentSlide: 0,
            isAutoPlaying: true,
            interval: null
        },
        carousels: {},
        currentModal: null
    };

    // ===== ELEMENTOS DEL DOM =====
    const elements = {
        // Header
        header: document.getElementById('mainHeader'),
        hamburgerBtn: document.getElementById('hamburgerBtn'),
        navMenu: document.querySelector('.nav-menu'),
        searchInput: document.getElementById('searchInput'),
        searchBtn: document.getElementById('searchBtn'),
        searchSuggestions: document.getElementById('searchSuggestions'),
        
        // Carrito
        cartBtn: document.getElementById('cartBtn'),
        cartModal: document.getElementById('cartModal'),
        cartItems: document.getElementById('cartItems'),
        cartItemsCount: document.getElementById('cartItemsCount'),
        cartSubtotal: document.getElementById('cartSubtotal'),
        cartShipping: document.getElementById('cartShipping'),
        cartDiscount: document.getElementById('cartDiscount'),
        cartTotal: document.getElementById('cartTotal'),
        clearCartBtn: document.getElementById('clearCartBtn'),
        checkoutBtn: document.getElementById('checkoutBtn'),
        applyCoupon: document.getElementById('applyCoupon'),
        couponCode: document.getElementById('couponCode'),
        emptyCart: document.getElementById('emptyCart'),
        startShoppingBtn: document.getElementById('startShoppingBtn'),
        
        // Wishlist
        wishlistBtn: document.getElementById('wishlistBtn'),
        wishlistModal: document.getElementById('wishlistModal'),
        wishlistItems: document.getElementById('wishlistItems'),
        clearWishlist: document.getElementById('clearWishlist'),
        emptyWishlist: document.getElementById('emptyWishlist'),
        
        // Comparador
        compareBtn: document.getElementById('compareBtn'),
        compareModal: document.getElementById('compareModal'),
        compareContent: document.getElementById('compareContent'),
        clearCompare: document.getElementById('clearCompare'),
        printCompare: document.getElementById('printCompare'),
        compareToggle: document.getElementById('compareToggle'),
        
        // Notificaciones
        notificationBtn: document.getElementById('notificationBtn'),
        notificationModal: document.getElementById('notificationModal'),
        
        // Filtros
        filterToggle: document.getElementById('filterToggle'),
        advancedFilters: document.getElementById('advancedFilters'),
        priceRange: document.getElementById('priceRange'),
        minPrice: document.getElementById('minPrice'),
        maxPrice: document.getElementById('maxPrice'),
        
        // Hero
        heroTrack: document.querySelector('.carousel-track'),
        heroSlides: document.querySelectorAll('.carousel-slide'),
        heroPrevBtn: document.querySelector('.carousel-btn.prev'),
        heroNextBtn: document.querySelector('.carousel-btn.next'),
        heroIndicators: document.querySelectorAll('.carousel-indicator'),
        progressBar: document.querySelector('.progress-bar'),
        offerTimer: {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        },
        
        // Modales
        modals: {
            quickView: document.getElementById('quickViewModal'),
            cart: document.getElementById('cartModal'),
            wishlist: document.getElementById('wishlistModal'),
            compare: document.getElementById('compareModal'),
            notification: document.getElementById('notificationModal')
        },
        modalCloseBtns: document.querySelectorAll('.modal-close'),
        
        // Otros
        quickFilters: document.querySelectorAll('.filter-btn'),
        compareCheckboxes: document.querySelectorAll('.compare-select'),
        btnWishlist: document.querySelectorAll('.btn-wishlist'),
        btnQuickView: document.querySelectorAll('.btn-quick-view'),
        btnCart: document.querySelectorAll('.btn-cart'),
        btnView: document.querySelectorAll('.btn-view'),
        newsletterForm: document.getElementById('newsletterForm'),
        whatsappFloat: document.querySelector('.whatsapp-float')
    };

    // ===== FUNCIONES DE UTILIDAD =====
    const utils = {
        formatPrice: (price) => {
            return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        },

        formatNumber: (num) => {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        animateCSS: (element, animation, prefix = 'animate__') => {
            return new Promise((resolve) => {
                const animationName = `${prefix}${animation}`;
                const node = element;

                node.classList.add(`${prefix}animated`, animationName);

                function handleAnimationEnd(event) {
                    event.stopPropagation();
                    node.classList.remove(`${prefix}animated`, animationName);
                    resolve('Animation ended');
                }

                node.addEventListener('animationend', handleAnimationEnd, { once: true });
            });
        },

        showToast: (message, type = 'success') => {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.innerHTML = `
                <div class="toast-content">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                    <span>${message}</span>
                </div>
                <button class="toast-close">&times;</button>
            `;

            document.body.appendChild(toast);

            setTimeout(() => {
                toast.classList.add('show');
            }, 10);

            // Cerrar toast
            const closeBtn = toast.querySelector('.toast-close');
            closeBtn.addEventListener('click', () => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            });

            // Auto cerrar
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.classList.remove('show');
                    setTimeout(() => toast.remove(), 300);
                }
            }, 5000);
        },

        getProductById: (id) => {
            return CONFIG.products[id];
        },

        getStockStatus: (stock) => {
            if (stock > 10) return { text: 'En stock', class: 'in-stock' };
            if (stock > 0) return { text: `Últimas ${stock} unidades`, class: 'low-stock' };
            return { text: 'Agotado', class: 'out-of-stock' };
        },

        calculateInstallment: (price, installments = 12) => {
            const installment = price / installments;
            return utils.formatPrice(Math.ceil(installment));
        }
    };

    // ===== SISTEMA DEL CARRITO =====
    const CartSystem = {
        init() {
            this.updateCartCount();
            this.renderCart();
            this.setupEventListeners();
        },

        add(productId, quantity = 1) {
            const product = utils.getProductById(productId);
            if (!product) return;

            const existingItem = State.cart.find(item => item.id === productId);

            if (existingItem) {
                if (existingItem.quantity + quantity > product.stock) {
                    utils.showToast('No hay suficiente stock disponible', 'error');
                    return;
                }
                existingItem.quantity += quantity;
            } else {
                if (quantity > product.stock) {
                    utils.showToast('No hay suficiente stock disponible', 'error');
                    return;
                }
                State.cart.push({
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    formattedPrice: product.formattedPrice,
                    image: product.images[0],
                    quantity: quantity,
                    maxStock: product.stock
                });
            }

            this.save();
            this.updateCartCount();
            this.renderCart();
            this.animateCartButton();

            utils.showToast(`${product.name} agregado al carrito`, 'success');
        },

        remove(productId) {
            State.cart = State.cart.filter(item => item.id !== productId);
            this.save();
            this.updateCartCount();
            this.renderCart();
            utils.showToast('Producto eliminado del carrito', 'info');
        },

        updateQuantity(productId, newQuantity) {
            const item = State.cart.find(item => item.id === productId);
            if (!item) return;

            const product = utils.getProductById(productId);
            if (newQuantity > product.stock) {
                utils.showToast(`Solo quedan ${product.stock} unidades`, 'error');
                return;
            }

            if (newQuantity < 1) {
                this.remove(productId);
                return;
            }

            item.quantity = newQuantity;
            this.save();
            this.renderCart();
        },

        clear() {
            if (State.cart.length === 0) return;
            
            if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
                State.cart = [];
                this.save();
                this.updateCartCount();
                this.renderCart();
                utils.showToast('Carrito vaciado', 'info');
            }
        },

        save() {
            localStorage.setItem('nordic_cart', JSON.stringify(State.cart));
        },

        updateCartCount() {
            const totalItems = State.cart.reduce((sum, item) => sum + item.quantity, 0);
            const cartCount = document.querySelector('.cart-count');
            
            if (cartCount) {
                cartCount.textContent = totalItems;
                cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
            }

            if (elements.cartItemsCount) {
                elements.cartItemsCount.textContent = `${totalItems} producto${totalItems !== 1 ? 's' : ''}`;
            }
        },

        animateCartButton() {
            const cartBtn = elements.cartBtn;
            if (cartBtn) {
                cartBtn.classList.add('animate');
                setTimeout(() => cartBtn.classList.remove('animate'), 500);
            }
        },

        calculateTotals() {
            const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal >= CONFIG.shipping.freeThreshold ? 0 : CONFIG.shipping.cost;
            const discount = 0; // Por ahora
            const total = subtotal + shipping - discount;

            return {
                subtotal: utils.formatPrice(subtotal),
                shipping: shipping === 0 ? 'Gratis' : utils.formatPrice(shipping),
                discount: utils.formatPrice(discount),
                total: utils.formatPrice(total),
                raw: { subtotal, shipping, discount, total }
            };
        },

        renderCart() {
            if (!elements.cartItems) return;

            const totals = this.calculateTotals();

            // Actualizar totales
            if (elements.cartSubtotal) elements.cartSubtotal.textContent = totals.subtotal;
            if (elements.cartShipping) elements.cartShipping.textContent = totals.shipping;
            if (elements.cartDiscount) elements.cartDiscount.textContent = totals.discount;
            if (elements.cartTotal) elements.cartTotal.textContent = totals.total;

            // Mostrar/ocultar carrito vacío
            if (elements.emptyCart) {
                elements.emptyCart.style.display = State.cart.length === 0 ? 'block' : 'none';
                elements.cartItems.style.display = State.cart.length === 0 ? 'none' : 'block';
            }

            // Renderizar items
            if (State.cart.length > 0) {
                elements.cartItems.innerHTML = State.cart.map(item => {
                    const product = utils.getProductById(item.id);
                    const stockStatus = utils.getStockStatus(product.stock);
                    
                    return `
                        <div class="cart-item" data-id="${item.id}">
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${item.name}" loading="lazy">
                            </div>
                            <div class="cart-item-details">
                                <div class="cart-item-header">
                                    <h4 class="cart-item-title">${item.name}</h4>
                                    <span class="cart-item-category">${item.category}</span>
                                    <span class="stock-status ${stockStatus.class}">${stockStatus.text}</span>
                                </div>
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
                    `;
                }).join('');

                // Agregar event listeners a los controles
                elements.cartItems.querySelectorAll('.decrease').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const id = parseInt(e.target.closest('.decrease').dataset.id);
                        const item = State.cart.find(item => item.id === id);
                        if (item) this.updateQuantity(id, item.quantity - 1);
                    });
                });

                elements.cartItems.querySelectorAll('.increase').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const id = parseInt(e.target.closest('.increase').dataset.id);
                        const item = State.cart.find(item => item.id === id);
                        if (item) this.updateQuantity(id, item.quantity + 1);
                    });
                });

                elements.cartItems.querySelectorAll('.btn-remove-item').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const id = parseInt(e.target.closest('.btn-remove-item').dataset.id);
                        this.remove(id);
                    });
                });
            }
        },

        setupEventListeners() {
            // Botón agregar al carrito en tarjetas
            document.addEventListener('click', (e) => {
                if (e.target.closest('.btn-cart')) {
                    const btn = e.target.closest('.btn-cart');
                    const productId = parseInt(btn.dataset.id);
                    this.add(productId, 1);
                }
            });

            // Botones del modal del carrito
            if (elements.clearCartBtn) {
                elements.clearCartBtn.addEventListener('click', () => this.clear());
            }

            if (elements.checkoutBtn) {
                elements.checkoutBtn.addEventListener('click', () => {
                    if (State.cart.length === 0) {
                        utils.showToast('El carrito está vacío', 'error');
                        return;
                    }
                    utils.showToast('Función de checkout en desarrollo', 'info');
                });
            }

            if (elements.startShoppingBtn) {
                elements.startShoppingBtn.addEventListener('click', () => {
                    ModalSystem.close(elements.cartModal);
                    document.querySelector('[data-section="escritorios"]').click();
                });
            }
        }
    };

    // ===== SISTEMA DE WISHLIST =====
    const WishlistSystem = {
        init() {
            this.updateWishlistCount();
            this.renderWishlist();
            this.setupEventListeners();
        },

        add(productId) {
            if (State.wishlist.includes(productId)) {
                this.remove(productId);
                return;
            }

            if (State.wishlist.length >= 50) {
                utils.showToast('La lista de deseos está llena (máximo 50 productos)', 'error');
                return;
            }

            State.wishlist.push(productId);
            this.save();
            this.updateWishlistCount();
            this.renderWishlist();
            
            const product = utils.getProductById(productId);
            utils.showToast(`${product.name} agregado a favoritos`, 'success');
        },

        remove(productId) {
            State.wishlist = State.wishlist.filter(id => id !== productId);
            this.save();
            this.updateWishlistCount();
            this.renderWishlist();
        },

        clear() {
            if (State.wishlist.length === 0) return;
            
            if (confirm('¿Estás seguro de que quieres vaciar la lista de deseos?')) {
                State.wishlist = [];
                this.save();
                this.updateWishlistCount();
                this.renderWishlist();
                utils.showToast('Lista de deseos vaciada', 'info');
            }
        },

        save() {
            localStorage.setItem('nordic_wishlist', JSON.stringify(State.wishlist));
        },

        updateWishlistCount() {
            const count = State.wishlist.length;
            const wishlistCount = document.querySelector('.wishlist-count');
            
            if (wishlistCount) {
                wishlistCount.textContent = count;
                wishlistCount.style.display = count > 0 ? 'flex' : 'none';
            }
        },

        renderWishlist() {
            if (!elements.wishlistItems) return;

            if (State.wishlist.length === 0) {
                if (elements.emptyWishlist) elements.emptyWishlist.style.display = 'block';
                if (elements.wishlistItems) elements.wishlistItems.style.display = 'none';
                return;
            }

            if (elements.emptyWishlist) elements.emptyWishlist.style.display = 'none';
            if (elements.wishlistItems) elements.wishlistItems.style.display = 'block';

            elements.wishlistItems.innerHTML = State.wishlist.map(productId => {
                const product = utils.getProductById(productId);
                if (!product) return '';
                
                return `
                    <div class="wishlist-item" data-id="${productId}">
                        <div class="wishlist-item-image">
                            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                        </div>
                        <div class="wishlist-item-details">
                            <h4>${product.name}</h4>
                            <p>${product.category}</p>
                            <div class="wishlist-item-price">${product.formattedPrice}</div>
                        </div>
                        <div class="wishlist-item-actions">
                            <button class="btn btn-primary add-to-cart" data-id="${productId}">
                                <i class="fas fa-cart-plus"></i> Agregar
                            </button>
                            <button class="btn btn-secondary remove-wishlist" data-id="${productId}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('');

            // Event listeners
            elements.wishlistItems.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.closest('.add-to-cart').dataset.id);
                    CartSystem.add(productId, 1);
                });
            });

            elements.wishlistItems.querySelectorAll('.remove-wishlist').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.closest('.remove-wishlist').dataset.id);
                    this.remove(productId);
                });
            });
        },

        setupEventListeners() {
            // Botón wishlist en tarjetas
            document.addEventListener('click', (e) => {
                if (e.target.closest('.btn-wishlist')) {
                    const btn = e.target.closest('.btn-wishlist');
                    const productId = parseInt(btn.dataset.id);
                    this.add(productId);
                    
                    // Actualizar icono
                    const icon = btn.querySelector('i');
                    if (icon) {
                        if (State.wishlist.includes(productId)) {
                            icon.classList.remove('far', 'fa-heart');
                            icon.classList.add('fas', 'fa-heart');
                            btn.classList.add('active');
                        } else {
                            icon.classList.remove('fas', 'fa-heart');
                            icon.classList.add('far', 'fa-heart');
                            btn.classList.remove('active');
                        }
                    }
                }
            });

            if (elements.clearWishlist) {
                elements.clearWishlist.addEventListener('click', () => this.clear());
            }
        }
    };

    // ===== SISTEMA DE COMPARACIÓN =====
    const CompareSystem = {
        init() {
            this.updateCompareCount();
            this.setupEventListeners();
        },

        add(productId) {
            if (State.compare.includes(productId)) {
                this.remove(productId);
                return;
            }

            if (State.compare.length >= 4) {
                utils.showToast('Máximo 4 productos para comparar', 'error');
                return;
            }

            State.compare.push(productId);
            this.save();
            this.updateCompareCount();
            utils.showToast('Producto agregado para comparar', 'success');
        },

        remove(productId) {
            State.compare = State.compare.filter(id => id !== productId);
            this.save();
            this.updateCompareCount();
        },

        clear() {
            State.compare = [];
            this.save();
            this.updateCompareCount();
            this.renderCompare();
            utils.showToast('Comparación limpiada', 'info');
        },

        save() {
            localStorage.setItem('nordic_compare', JSON.stringify(State.compare));
        },

        updateCompareCount() {
            const count = State.compare.length;
            const compareCount = document.querySelector('.comparator-count');
            
            if (compareCount) {
                compareCount.textContent = count;
                compareCount.style.display = count > 0 ? 'flex' : 'none';
            }

            // Actualizar checkboxes
            document.querySelectorAll('.compare-select').forEach(checkbox => {
                const productId = parseInt(checkbox.dataset.id);
                checkbox.checked = State.compare.includes(productId);
            });
        },

        renderCompare() {
            if (!elements.compareContent) return;

            if (State.compare.length < 2) {
                elements.compareContent.innerHTML = `
                    <div class="compare-empty">
                        <i class="fas fa-balance-scale"></i>
                        <h3>Selecciona al menos 2 productos para comparar</h3>
                        <p>Usa los checkboxes "Comparar" en las tarjetas de producto</p>
                    </div>
                `;
                return;
            }

            const products = State.compare.map(id => utils.getProductById(id)).filter(Boolean);
            
            let html = `
                <div class="compare-table">
                    <div class="compare-header">
                        <div class="compare-cell header-cell">Característica</div>
                        ${products.map(product => `
                            <div class="compare-cell product-cell">
                                <div class="compare-product-image">
                                    <img src="${product.images[0]}" alt="${product.name}">
                                </div>
                                <h4>${product.name}</h4>
                                <div class="compare-price">${product.formattedPrice}</div>
                                <button class="btn btn-secondary remove-compare" data-id="${product.id}">
                                    <i class="fas fa-times"></i> Quitar
                                </button>
                            </div>
                        `).join('')}
                    </div>
            `;

            // Especificaciones
            const allSpecs = new Set();
            products.forEach(product => {
                product.specs?.forEach(spec => allSpecs.add(spec.name));
            });

            Array.from(allSpecs).forEach(specName => {
                html += `
                    <div class="compare-row">
                        <div class="compare-cell header-cell">${specName}</div>
                        ${products.map(product => {
                            const spec = product.specs?.find(s => s.name === specName);
                            return `
                                <div class="compare-cell">${spec ? spec.value : '-'}</div>
                            `;
                        }).join('')}
                    </div>
                `;
            });

            html += '</div>';
            elements.compareContent.innerHTML = html;

            // Event listeners para botones quitar
            elements.compareContent.querySelectorAll('.remove-compare').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.closest('.remove-compare').dataset.id);
                    this.remove(productId);
                    this.renderCompare();
                });
            });
        },

        setupEventListeners() {
            // Checkboxes en tarjetas
            document.addEventListener('change', (e) => {
                if (e.target.classList.contains('compare-select')) {
                    const productId = parseInt(e.target.dataset.id);
                    this.add(productId);
                }
            });

            // Botón comparar en header
            if (elements.compareBtn) {
                elements.compareBtn.addEventListener('click', () => {
                    this.renderCompare();
                    ModalSystem.open(elements.modals.compare);
                });
            }

            if (elements.compareToggle) {
                elements.compareToggle.addEventListener('click', () => {
                    this.renderCompare();
                    ModalSystem.open(elements.modals.compare);
                });
            }

            if (elements.clearCompare) {
                elements.clearCompare.addEventListener('click', () => this.clear());
            }

            if (elements.printCompare) {
                elements.printCompare.addEventListener('click', () => window.print());
            }
        }
    };

    // ===== SISTEMA DE CARRUSEL HERO =====
    const HeroSystem = {
        init() {
            if (!elements.heroTrack) return;
            
            this.totalSlides = elements.heroSlides.length;
            this.setupEventListeners();
            this.startAutoSlide();
            this.updateTimer();
        },

        goToSlide(index) {
            State.hero.currentSlide = (index + this.totalSlides) % this.totalSlides;
            this.updateCarousel();
            this.resetAutoSlide();
        },

        nextSlide() {
            this.goToSlide(State.hero.currentSlide + 1);
        },

        prevSlide() {
            this.goToSlide(State.hero.currentSlide - 1);
        },

        updateCarousel() {
            if (!elements.heroTrack) return;
            
            const offset = -State.hero.currentSlide * 100;
            elements.heroTrack.style.transform = `translateX(${offset}%)`;
            
            // Actualizar indicadores
            elements.heroIndicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === State.hero.currentSlide);
            });
            
            // Actualizar slides
            elements.heroSlides.forEach((slide, index) => {
                slide.classList.toggle('active', index === State.hero.currentSlide);
            });
            
            // Actualizar barra de progreso
            if (elements.progressBar) {
                const progress = ((State.hero.currentSlide + 1) / this.totalSlides) * 100;
                elements.progressBar.style.width = `${progress}%`;
            }
        },

        startAutoSlide() {
            if (!State.hero.isAutoPlaying) return;
            
            State.hero.interval = setInterval(() => {
                this.nextSlide();
            }, CONFIG.heroAutoSlideInterval);
        },

        stopAutoSlide() {
            if (State.hero.interval) {
                clearInterval(State.hero.interval);
                State.hero.interval = null;
            }
        },

        resetAutoSlide() {
            this.stopAutoSlide();
            this.startAutoSlide();
        },

        updateTimer() {
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 3); // 3 días desde ahora
            
            function update() {
                const now = new Date();
                const diff = endDate - now;
                
                if (diff <= 0) {
                    clearInterval(timerInterval);
                    return;
                }
                
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                if (elements.offerTimer.days) elements.offerTimer.days.textContent = days.toString().padStart(2, '0');
                if (elements.offerTimer.hours) elements.offerTimer.hours.textContent = hours.toString().padStart(2, '0');
                if (elements.offerTimer.minutes) elements.offerTimer.minutes.textContent = minutes.toString().padStart(2, '0');
                if (elements.offerTimer.seconds) elements.offerTimer.seconds.textContent = seconds.toString().padStart(2, '0');
            }
            
            const timerInterval = setInterval(update, 1000);
            update();
        },

        setupEventListeners() {
            if (elements.heroPrevBtn) {
                elements.heroPrevBtn.addEventListener('click', () => this.prevSlide());
            }
            
            if (elements.heroNextBtn) {
                elements.heroNextBtn.addEventListener('click', () => this.nextSlide());
            }
            
            elements.heroIndicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });
            
            // Pausar al hacer hover
            if (elements.heroTrack) {
                elements.heroTrack.addEventListener('mouseenter', () => this.stopAutoSlide());
                elements.heroTrack.addEventListener('mouseleave', () => this.startAutoSlide());
            }
        }
    };

    // ===== SISTEMA DE CARRUSEL DE PRODUCTOS =====
    const ProductCarouselSystem = {
        init(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            const track = container.querySelector('.products-carousel-track');
            const cards = Array.from(container.querySelectorAll('.product-card'));
            const prevBtn = container.querySelector('.prev-arrow');
            const nextBtn = container.querySelector('.next-arrow');
            const dotsContainer = container.querySelector('.carousel-dots-container');
            
            if (!track || cards.length === 0) return;
            
            const carouselId = containerId.replace('Track', '');
            State.carousels[carouselId] = {
                currentIndex: 0,
                totalCards: cards.length,
                cardWidth: 0,
                gap: 20,
                track,
                cards,
                prevBtn,
                nextBtn
            };
            
            this.calculateDimensions(carouselId);
            this.createDots(carouselId, dotsContainer);
            this.setupEventListeners(carouselId);
            this.updateCarousel(carouselId, true);
        },
        
        calculateDimensions(carouselId) {
            const carousel = State.carousels[carouselId];
            if (!carousel || carousel.cards.length === 0) return;
            
            const containerWidth = carousel.track.parentElement.offsetWidth;
            const cardsPerView = this.getCardsPerView();
            const gapTotal = (cardsPerView - 1) * carousel.gap;
            
            carousel.cardWidth = (containerWidth - gapTotal) / cardsPerView;
            
            carousel.cards.forEach(card => {
                card.style.width = `${carousel.cardWidth}px`;
            });
            
            const maxIndex = Math.max(0, carousel.totalCards - cardsPerView);
            if (carousel.currentIndex > maxIndex) {
                carousel.currentIndex = maxIndex;
            }
        },
        
        getCardsPerView() {
            const width = window.innerWidth;
            if (width >= 1200) return 4;
            if (width >= 992) return 3;
            if (width >= 768) return 2;
            return 1;
        },
        
        createDots(carouselId, container) {
            if (!container) return;
            
            const carousel = State.carousels[carouselId];
            const cardsPerView = this.getCardsPerView();
            const totalDots = Math.ceil(carousel.totalCards / cardsPerView);
            
            container.innerHTML = '';
            
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot';
                if (i === 0) dot.classList.add('active');
                dot.dataset.index = i;
                dot.setAttribute('aria-label', `Ir al grupo ${i + 1}`);
                container.appendChild(dot);
            }
        },
        
        updateCarousel(carouselId, instant = false) {
            const carousel = State.carousels[carouselId];
            if (!carousel) return;
            
            const cardsPerView = this.getCardsPerView();
            const offset = -carousel.currentIndex * (carousel.cardWidth + carousel.gap);
            
            if (instant) {
                carousel.track.style.transition = 'none';
            } else {
                carousel.track.style.transition = `transform ${CONFIG.carouselSpeed}ms cubic-bezier(0.4, 0, 0.2, 1)`;
            }
            
            carousel.track.style.transform = `translateX(${offset}px)`;
            
            if (instant) {
                carousel.track.offsetHeight; // Forzar reflow
            }
            
            this.updateDots(carouselId);
            this.updateArrows(carouselId);
        },
        
        updateDots(carouselId) {
            const carousel = State.carousels[carouselId];
            if (!carousel) return;
            
            const container = carousel.track.closest('.products-carousel-container');
            if (!container) return;
            
            const dots = container.querySelectorAll('.carousel-dot');
            const cardsPerView = this.getCardsPerView();
            const currentDot = Math.floor(carousel.currentIndex / cardsPerView);
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentDot);
            });
        },
        
        updateArrows(carouselId) {
            const carousel = State.carousels[carouselId];
            if (!carousel) return;
            
            const cardsPerView = this.getCardsPerView();
            const maxIndex = Math.max(0, carousel.totalCards - cardsPerView);
            
            if (carousel.prevBtn) {
                carousel.prevBtn.disabled = carousel.currentIndex === 0;
                carousel.prevBtn.style.opacity = carousel.currentIndex === 0 ? '0.5' : '1';
                carousel.prevBtn.style.cursor = carousel.currentIndex === 0 ? 'not-allowed' : 'pointer';
            }
            
            if (carousel.nextBtn) {
                carousel.nextBtn.disabled = carousel.currentIndex >= maxIndex;
                carousel.nextBtn.style.opacity = carousel.currentIndex >= maxIndex ? '0.5' : '1';
                carousel.nextBtn.style.cursor = carousel.currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
            }
        },
        
        next(carouselId) {
            const carousel = State.carousels[carouselId];
            if (!carousel) return;
            
            const cardsPerView = this.getCardsPerView();
            const maxIndex = Math.max(0, carousel.totalCards - cardsPerView);
            
            if (carousel.currentIndex < maxIndex) {
                carousel.currentIndex += cardsPerView;
                if (carousel.currentIndex > maxIndex) {
                    carousel.currentIndex = maxIndex;
                }
                this.updateCarousel(carouselId);
            }
        },
        
        prev(carouselId) {
            const carousel = State.carousels[carouselId];
            if (!carousel) return;
            
            const cardsPerView = this.getCardsPerView();
            
            if (carousel.currentIndex > 0) {
                carousel.currentIndex -= cardsPerView;
                if (carousel.currentIndex < 0) {
                    carousel.currentIndex = 0;
                }
                this.updateCarousel(carouselId);
            }
        },
        
        goToDot(carouselId, dotIndex) {
            const carousel = State.carousels[carouselId];
            if (!carousel) return;
            
            const cardsPerView = this.getCardsPerView();
            carousel.currentIndex = dotIndex * cardsPerView;
            this.updateCarousel(carouselId);
        },
        
        setupEventListeners(carouselId) {
            const carousel = State.carousels[carouselId];
            if (!carousel) return;
            
            if (carousel.prevBtn) {
                carousel.prevBtn.addEventListener('click', () => this.prev(carouselId));
            }
            
            if (carousel.nextBtn) {
                carousel.nextBtn.addEventListener('click', () => this.next(carouselId));
            }
            
            // Dots
            const container = carousel.track.closest('.products-carousel-container');
            if (container) {
                container.addEventListener('click', (e) => {
                    if (e.target.classList.contains('carousel-dot')) {
                        const dotIndex = parseInt(e.target.dataset.index);
                        this.goToDot(carouselId, dotIndex);
                    }
                });
            }
            
            // Resize
            window.addEventListener('resize', utils.debounce(() => {
                this.calculateDimensions(carouselId);
                this.createDots(carouselId, container?.querySelector('.carousel-dots-container'));
                this.updateCarousel(carouselId, true);
            }, 250));
        }
    };

    // ===== SISTEMA DE FILTROS =====
    const FilterSystem = {
        init() {
            this.setupEventListeners();
        },
        
        setupEventListeners() {
            // Toggle filtros avanzados
            if (elements.filterToggle) {
                elements.filterToggle.addEventListener('click', () => {
                    elements.advancedFilters.classList.toggle('active');
                    const icon = elements.filterToggle.querySelector('i');
                    if (icon) {
                        if (elements.advancedFilters.classList.contains('active')) {
                            icon.classList.remove('fa-filter');
                            icon.classList.add('fa-times');
                        } else {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-filter');
                        }
                    }
                });
            }
            
            // Filtros rápidos
            elements.quickFilters.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const filter = e.target.dataset.filter;
                    
                    // Actualizar botón activo
                    elements.quickFilters.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    
                    // Aplicar filtro
                    this.applyFilter(filter);
                });
            });
            
            // Rango de precio
            if (elements.priceRange) {
                elements.priceRange.addEventListener('input', (e) => {
                    const value = parseInt(e.target.value);
                    if (elements.maxPrice) {
                        elements.maxPrice.textContent = utils.formatPrice(value);
                    }
                    this.applyPriceFilter(0, value);
                });
            }
        },
        
        applyFilter(filter) {
            const cards = document.querySelectorAll('.product-card');
            
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                    return;
                }
                
                const tags = card.dataset.tags?.split(',') || [];
                const shouldShow = tags.includes(filter);
                card.style.display = shouldShow ? 'flex' : 'none';
            });
            
            // Actualizar contador
            this.updateProductCount();
        },
        
        applyPriceFilter(min, max) {
            const cards = document.querySelectorAll('.product-card');
            
            cards.forEach(card => {
                const price = parseInt(card.dataset.price || 0);
                const shouldShow = price >= min && price <= max;
                card.style.display = shouldShow ? 'flex' : 'none';
            });
            
            this.updateProductCount();
        },
        
        updateProductCount() {
            const container = document.querySelector('.products-carousel-container');
            if (!container) return;
            
            const visibleCards = container.querySelectorAll('.product-card[style*="flex"]').length;
            const totalCards = container.querySelectorAll('.product-card').length;
            
            const stats = container.querySelector('.carousel-stats');
            if (stats) {
                const countSpan = stats.querySelector('.products-count');
                if (countSpan) {
                    countSpan.textContent = `Mostrando ${visibleCards} de ${totalCards} productos`;
                }
            }
        }
    };

    // ===== SISTEMA DE MODALES =====
    const ModalSystem = {
        init() {
            this.setupEventListeners();
        },
        
        open(modal) {
            if (!modal || State.currentModal) return;
            
            State.currentModal = modal;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Animar entrada
            const container = modal.querySelector('.modal-container');
            if (container) {
                container.style.animation = 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        },
        
        close(modal) {
            if (!modal) return;
            
            const container = modal.querySelector('.modal-container');
            if (container) {
                container.style.animation = 'slideDown 0.3s ease';
                setTimeout(() => {
                    modal.style.display = 'none';
                    State.currentModal = null;
                    document.body.style.overflow = '';
                }, 250);
            } else {
                modal.style.display = 'none';
                State.currentModal = null;
                document.body.style.overflow = '';
            }
        },
        
        closeAll() {
            Object.values(elements.modals).forEach(modal => {
                if (modal) this.close(modal);
            });
        },
        
        setupEventListeners() {
            // Botones de cierre
            elements.modalCloseBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const modal = btn.closest('.modal-overlay');
                    if (modal) this.close(modal);
                });
            });
            
            // Cerrar al hacer clic fuera
            Object.values(elements.modals).forEach(modal => {
                if (modal) {
                    modal.addEventListener('click', (e) => {
                        if (e.target === modal) {
                            this.close(modal);
                        }
                    });
                }
            });
            
            // Cerrar con Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && State.currentModal) {
                    this.close(State.currentModal);
                }
            });
            
            // Botones para abrir modales
            if (elements.cartBtn) {
                elements.cartBtn.addEventListener('click', () => {
                    CartSystem.renderCart();
                    this.open(elements.modals.cart);
                });
            }
            
            if (elements.wishlistBtn) {
                elements.wishlistBtn.addEventListener('click', () => {
                    WishlistSystem.renderWishlist();
                    this.open(elements.modals.wishlist);
                });
            }
        }
    };

    // ===== SISTEMA DE VISTA RÁPIDA =====
    const QuickViewSystem = {
        init() {
            this.setupEventListeners();
        },
        
        open(productId) {
            const product = utils.getProductById(productId);
            if (!product) return;
            
            const modal = elements.modals.quickView;
            if (!modal) return;
            
            const stockStatus = utils.getStockStatus(product.stock);
            const installment = utils.calculateInstallment(product.price, 12);
            
            let html = `
                <div class="quickview-content">
                    <div class="quickview-gallery">
                        <div class="main-image">
                            <img src="${product.images[0]}" alt="${product.name}" id="quickViewMainImage">
                        </div>
                        <div class="image-thumbs">
                            ${product.images.map((img, index) => `
                                <img src="${img}" alt="${product.name} - Vista ${index + 1}" 
                                     class="thumb ${index === 0 ? 'active' : ''}"
                                     onclick="QuickViewSystem.changeImage('${img}', this)">
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="quickview-details">
                        <div class="product-badges">
                            ${product.tags.map(tag => `
                                <span class="badge badge-${tag}">${tag}</span>
                            `).join('')}
                        </div>
                        
                        <h2>${product.name}</h2>
                        <div class="product-category">${product.category}</div>
                        
                        <div class="product-rating">
                            <div class="stars">
                                ${Array(5).fill().map((_, i) => `
                                    <i class="fas fa-star${i < Math.floor(product.rating) ? '' : i < product.rating ? '-half-alt' : ''}"></i>
                                `).join('')}
                            </div>
                            <span class="rating-count">(${product.reviews} reseñas)</span>
                        </div>
                        
                        <div class="product-price">
                            <div class="price">${product.formattedPrice}</div>
                            ${product.oldPrice ? `
                                <div class="price-old">${product.formattedOldPrice}</div>
                                <div class="discount-badge">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</div>
                            ` : ''}
                        </div>
                        
                        <div class="product-description">
                            <p>${product.fullDescription || product.description}</p>
                        </div>
                        
                        <div class="product-stock ${stockStatus.class}">
                            <i class="fas fa-${stockStatus.class === 'in-stock' ? 'check' : 'exclamation'}"></i>
                            ${stockStatus.text}
                        </div>
                        
                        <div class="product-specs">
                            <h4>Especificaciones</h4>
                            <ul>
                                ${product.specs.slice(0, 3).map(spec => `
                                    <li><strong>${spec.name}:</strong> ${spec.value}</li>
                                `).join('')}
                            </ul>
                            <a href="#" class="view-all-specs">Ver todas las especificaciones</a>
                        </div>
                        
                        <div class="product-actions">
                            <div class="quantity-selector">
                                <button class="quantity-btn decrease" onclick="QuickViewSystem.changeQuantity(-1)">-</button>
                                <input type="number" id="quickViewQuantity" value="1" min="1" max="${product.stock}" readonly>
                                <button class="quantity-btn increase" onclick="QuickViewSystem.changeQuantity(1)">+</button>
                            </div>
                            
                            <div class="action-buttons">
                                <button class="btn btn-primary" onclick="CartSystem.add(${productId}, parseInt(document.getElementById('quickViewQuantity').value))">
                                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                                </button>
                                <button class="btn btn-secondary" onclick="WishlistSystem.add(${productId})">
                                    <i class="far fa-heart"></i> Favoritos
                                </button>
                                <button class="btn btn-outline" onclick="CompareSystem.add(${productId})">
                                    <i class="fas fa-balance-scale"></i> Comparar
                                </button>
                            </div>
                        </div>
                        
                        <div class="product-info">
                            <div class="info-item">
                                <i class="fas fa-shipping-fast"></i>
                                <div>
                                    <strong>Envío gratis</strong>
                                    <span>En compras mayores a $${utils.formatNumber(CONFIG.shipping.freeThreshold)}</span>
                                </div>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-credit-card"></i>
                                <div>
                                    <strong>Hasta 12 cuotas</strong>
                                    <span>${installment} sin interés</span>
                                </div>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-shield-alt"></i>
                                <div>
                                    <strong>Garantía 2 años</strong>
                                    <span>Cobertura completa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            modal.querySelector('.modal-content').innerHTML = html;
            ModalSystem.open(modal);
            
            // Guardar en productos vistos
            this.addToViewed(productId);
        },
        
        changeImage(src, element) {
            const mainImage = document.getElementById('quickViewMainImage');
            if (mainImage) {
                mainImage.src = src;
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.src = src;
                    mainImage.style.opacity = '1';
                }, 150);
            }
            
            // Actualizar thumbs
            document.querySelectorAll('.thumb').forEach(thumb => {
                thumb.classList.remove('active');
            });
            element.classList.add('active');
        },
        
        changeQuantity(change) {
            const input = document.getElementById('quickViewQuantity');
            if (!input) return;
            
            let value = parseInt(input.value) + change;
            const max = parseInt(input.max);
            const min = parseInt(input.min);
            
            if (value > max) value = max;
            if (value < min) value = min;
            
            input.value = value;
        },
        
        addToViewed(productId) {
            if (!State.viewedProducts.includes(productId)) {
                State.viewedProducts.unshift(productId);
                State.viewedProducts = State.viewedProducts.slice(0, 10); // Mantener solo los últimos 10
                localStorage.setItem('nordic_viewed', JSON.stringify(State.viewedProducts));
            }
        },
        
        setupEventListeners() {
            document.addEventListener('click', (e) => {
                if (e.target.closest('.btn-quick-view')) {
                    const btn = e.target.closest('.btn-quick-view');
                    const productId = parseInt(btn.dataset.id);
                    this.open(productId);
                }
                
                if (e.target.closest('.btn-view')) {
                    const btn = e.target.closest('.btn-view');
                    const productId = parseInt(btn.dataset.id);
                    this.open(productId);
                }
            });
        }
    };

    // ===== SISTEMA DE NAVEGACIÓN =====
    const NavigationSystem = {
        init() {
            this.setupEventListeners();
            this.updateActiveSection();
            this.setupScrollSpy();
        },
        
        setupEventListeners() {
            // Menú hamburguesa
            if (elements.hamburgerBtn) {
                elements.hamburgerBtn.addEventListener('click', () => {
                    elements.hamburgerBtn.classList.toggle('active');
                    elements.navMenu.classList.toggle('active');
                    elements.hamburgerBtn.setAttribute('aria-expanded', 
                        elements.hamburgerBtn.classList.contains('active')
                    );
                });
            }
            
            // Enlaces del menú
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const sectionId = link.getAttribute('href').substring(1);
                    
                    // Cerrar menú móvil
                    if (elements.hamburgerBtn) {
                        elements.hamburgerBtn.classList.remove('active');
                        elements.navMenu.classList.remove('active');
                    }
                    
                    // Desplazar a la sección
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const headerHeight = elements.header.offsetHeight;
                        const sectionTop = section.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: sectionTop,
                            behavior: 'smooth'
                        });
                        
                        // Actualizar enlace activo
                        this.setActiveLink(link);
                    }
                });
            });
        },
        
        setActiveLink(activeLink) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            activeLink.classList.add('active');
        },
        
        updateActiveSection() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, {
                rootMargin: '-20% 0px -70% 0px',
                threshold: 0.1
            });
            
            sections.forEach(section => observer.observe(section));
        },
        
        setupScrollSpy() {
            // Header scroll effect
            let lastScroll = 0;
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll <= 0) {
                    elements.header.classList.remove('scrolled');
                    return;
                }
                
                if (currentScroll > lastScroll) {
                    // Scrolling down
                    if (currentScroll > 100) {
                        elements.header.classList.add('hide');
                    }
                } else {
                    // Scrolling up
                    elements.header.classList.remove('hide');
                }
                
                if (currentScroll > 50) {
                    elements.header.classList.add('scrolled');
                } else {
                    elements.header.classList.remove('scrolled');
                }
                
                lastScroll = currentScroll;
            });
        }
    };

    // ===== SISTEMA DE BÚSQUEDA =====
    const SearchSystem = {
        init() {
            this.setupEventListeners();
        },
        
        setupEventListeners() {
            if (elements.searchInput) {
                elements.searchInput.addEventListener('input', utils.debounce((e) => {
                    this.showSuggestions(e.target.value);
                }, 300));
                
                elements.searchInput.addEventListener('focus', () => {
                    this.showSuggestions(elements.searchInput.value);
                });
                
                elements.searchInput.addEventListener('blur', () => {
                    setTimeout(() => {
                        if (elements.searchSuggestions) {
                            elements.searchSuggestions.style.opacity = '0';
                            elements.searchSuggestions.style.visibility = 'hidden';
                        }
                    }, 200);
                });
            }
            
            if (elements.searchBtn) {
                elements.searchBtn.addEventListener('click', () => {
                    this.performSearch(elements.searchInput.value);
                });
            }
            
            // Buscar con Enter
            if (elements.searchInput) {
                elements.searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.performSearch(e.target.value);
                    }
                });
            }
        },
        
        showSuggestions(query) {
            if (!elements.searchSuggestions || !query.trim()) {
                if (elements.searchSuggestions) {
                    elements.searchSuggestions.style.opacity = '0';
                    elements.searchSuggestions.style.visibility = 'hidden';
                }
                return;
            }
            
            const suggestions = this.getSuggestions(query);
            
            if (suggestions.length === 0) {
                elements.searchSuggestions.innerHTML = `
                    <div class="suggestion-item no-results">
                        <i class="fas fa-search"></i>
                        <span>No se encontraron productos</span>
                    </div>
                `;
            } else {
                elements.searchSuggestions.innerHTML = suggestions.map(item => `
                    <div class="suggestion-item" data-id="${item.id}">
                        <div class="suggestion-image">
                            <img src="${item.image}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="suggestion-details">
                            <h4>${item.name}</h4>
                            <span class="suggestion-category">${item.category}</span>
                            <div class="suggestion-price">${item.price}</div>
                        </div>
                    </div>
                `).join('');
                
                // Event listeners para sugerencias
                elements.searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
                    item.addEventListener('click', (e) => {
                        const productId = parseInt(e.currentTarget.dataset.id);
                        QuickViewSystem.open(productId);
                        elements.searchInput.value = '';
                        elements.searchSuggestions.style.opacity = '0';
                        elements.searchSuggestions.style.visibility = 'hidden';
                    });
                });
            }
            
            elements.searchSuggestions.style.opacity = '1';
            elements.searchSuggestions.style.visibility = 'visible';
        },
        
        getSuggestions(query) {
            const searchTerm = query.toLowerCase().trim();
            const results = [];
            
            Object.values(CONFIG.products).forEach(product => {
                const inName = product.name.toLowerCase().includes(searchTerm);
                const inCategory = product.category.toLowerCase().includes(searchTerm);
                const inDescription = product.description.toLowerCase().includes(searchTerm);
                
                if (inName || inCategory || inDescription) {
                    results.push({
                        id: product.id,
                        name: product.name,
                        category: product.category,
                        price: product.formattedPrice,
                        image: product.images[0]
                    });
                }
            });
            
            return results.slice(0, 5); // Máximo 5 sugerencias
        },
        
        performSearch(query) {
            if (!query.trim()) return;
            
            // Guardar en historial
            const searches = JSON.parse(localStorage.getItem('nordic_searches')) || [];
            searches.unshift({
                query: query,
                timestamp: Date.now()
            });
            localStorage.setItem('nordic_searches', JSON.stringify(searches.slice(0, 10)));
            
            // Mostrar resultados (simulado por ahora)
            utils.showToast(`Buscando: "${query}"`, 'info');
            elements.searchSuggestions.style.opacity = '0';
            elements.searchSuggestions.style.visibility = 'hidden';
            elements.searchInput.blur();
        }
    };

    // ===== SISTEMA DE NEWSLETTER =====
    const NewsletterSystem = {
        init() {
            this.setupEventListeners();
        },
        
        setupEventListeners() {
            if (elements.newsletterForm) {
                elements.newsletterForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const email = e.target.querySelector('input[type="email"]').value;
                    this.subscribe(email);
                });
            }
        },
        
        subscribe(email) {
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                utils.showToast('Por favor ingresa un email válido', 'error');
                return;
            }
            
            // Simular suscripción
            const subscriptions = JSON.parse(localStorage.getItem('nordic_newsletter')) || [];
            
            if (subscriptions.includes(email)) {
                utils.showToast('Ya estás suscrito a nuestro newsletter', 'info');
                return;
            }
            
            subscriptions.push(email);
            localStorage.setItem('nordic_newsletter', JSON.stringify(subscriptions));
            
            utils.showToast('¡Gracias por suscribirte! Te enviaremos nuestras mejores ofertas.', 'success');
            elements.newsletterForm.reset();
        }
    };

    // ===== INICIALIZACIÓN COMPLETA =====
    function initApp() {
        console.log('🚀 Inicializando Estilo Nórdico V5 Premium...');
        
        // Inicializar sistemas
        CartSystem.init();
        WishlistSystem.init();
        CompareSystem.init();
        HeroSystem.init();
        FilterSystem.init();
        ModalSystem.init();
        QuickViewSystem.init();
        NavigationSystem.init();
        SearchSystem.init();
        NewsletterSystem.init();
        
        // Inicializar carruseles de productos
        ProductCarouselSystem.init('escritoriosTrack');
        
        // Estilos para toast
        const style = document.createElement('style');
        style.textContent = `
            .toast {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: var(--white);
                color: var(--dark);
                padding: 1rem 1.5rem;
                border-radius: var(--radius-md);
                box-shadow: var(--shadow-xl);
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                z-index: var(--z-toast);
                transform: translateY(100px);
                opacity: 0;
                transition: transform 0.3s ease, opacity 0.3s ease;
                max-width: 400px;
            }
            
            .toast.show {
                transform: translateY(0);
                opacity: 1;
            }
            
            .toast-success {
                border-left: 4px solid var(--success);
            }
            
            .toast-error {
                border-left: 4px solid var(--danger);
            }
            
            .toast-info {
                border-left: 4px solid var(--info);
            }
            
            .toast-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            
            .toast i {
                font-size: 1.25rem;
            }
            
            .toast-success i {
                color: var(--success);
            }
            
            .toast-error i {
                color: var(--danger);
            }
            
            .toast-info i {
                color: var(--info);
            }
            
            .toast-close {
                background: none;
                border: none;
                font-size: 1.25rem;
                color: var(--gray);
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            
            .stock-status {
                display: inline-block;
                padding: 0.25rem 0.5rem;
                border-radius: var(--radius-sm);
                font-size: 0.8rem;
                font-weight: 600;
                margin-left: 0.5rem;
            }
            
            .in-stock {
                background: rgba(39, 174, 96, 0.1);
                color: var(--success);
            }
            
            .low-stock {
                background: rgba(241, 196, 15, 0.1);
                color: var(--warning);
            }
            
            .out-of-stock {
                background: rgba(231, 76, 60, 0.1);
                color: var(--danger);
            }
        `;
        document.head.appendChild(style);
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }
        });
        
        // Actualizar wishlist icons
        document.querySelectorAll('.btn-wishlist').forEach(btn => {
            const productId = parseInt(btn.dataset.id);
            if (State.wishlist.includes(productId)) {
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.classList.remove('far', 'fa-heart');
                    icon.classList.add('fas', 'fa-heart');
                }
                btn.classList.add('active');
            }
        });
        
        console.log('✅ Sistema inicializado correctamente');
        console.log('📊 Estado actual:', {
            carrito: State.cart.length,
            wishlist: State.wishlist.length,
            comparador: State.compare.length,
            productosVistos: State.viewedProducts.length
        });
    }

    // Iniciar la aplicación
    initApp();

    // Exportar funciones globales para uso en HTML
    window.CartSystem = CartSystem;
    window.WishlistSystem = WishlistSystem;
    window.CompareSystem = CompareSystem;
    window.QuickViewSystem = QuickViewSystem;
    window.ModalSystem = ModalSystem;
    window.utils = utils;
});
