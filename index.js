// index.js - ESTILO NÓRDICO V7 PERFECTO VISUAL
// Sistema simple, funcional y sin bugs

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Estilo Nórdico V7 - Sistema inicializado');
    
    // ===== CONFIGURACIÓN SIMPLE =====
    const CONFIG = {
        products: {
            1: {
                id: 1,
                name: "Escritorio 1.20m",
                category: "Escritorios Nórdicos",
                price: 120000,
                formattedPrice: "$120.000",
                oldPrice: "$150.000",
                description: "Escritorio de 1.20 metros fabricado con base de hierro y madera de eucalipto. Diseño nórdico minimalista perfecto para espacios de trabajo modernos. Ideal para home office, incluye gestión de cables integrada y superficie resistente a rayones.",
                images: [
                    "imagenes/escritorios/120/k1escritorio01.png",
                    "imagenes/escritorios/120/k1escritorio01.png",
                    "imagenes/escritorios/120/k1escritorio01.png",
                    "imagenes/escritorios/120/k1escritorio01.png"
                ],
                specs: [
                    { name: "Material", value: "Base de hierro y madera de eucalipto" },
                    { name: "Dimensiones", value: "120×60×75 cm" },
                    { name: "Color", value: "Natural de madera" },
                    { name: "Peso máximo", value: "80 kg" },
                    { name: "Montaje", value: "Incluido" }
                ],
                stock: 15,
                rating: 4.5,
                reviews: 24
            },
            2: {
                id: 2,
                name: "Escritorio 1.30m",
                category: "Escritorios Nórdicos",
                price: 150000,
                formattedPrice: "$150.000",
                description: "Escritorio de 1.30 metros fabricado con base de hierro y madera de eucalipto. Ideal para espacios de trabajo amplios. Incluye cajones ocultos con sistema suave y gestión profesional de cables.",
                images: [
                    "imagenes/escritorios/130/k2escritorio01.png",
                    "imagenes/escritorios/130/k2escritorio01.png",
                    "imagenes/escritorios/130/k2escritorio01.png",
                    "imagenes/escritorios/130/k2escritorio01.png"
                ],
                specs: [
                    { name: "Material", value: "Base de hierro y madera de eucalipto" },
                    { name: "Dimensiones", value: "130×65×75 cm" },
                    { name: "Color", value: "Natural de madera" },
                    { name: "Peso máximo", value: "100 kg" },
                    { name: "Cajones", value: "2 cajones ocultos" }
                ],
                stock: 8,
                rating: 4.0,
                reviews: 18
            },
            3: {
                id: 3,
                name: "Escritorio 1.60m",
                category: "Escritorios Nórdicos",
                price: 200000,
                formattedPrice: "$200.000",
                description: "Elegante escritorio de 1.60 metros fabricado con base de hierro y madera de eucalipto. Perfecto para espacios ejecutivos. Diseño minimalista que soporta doble monitor y organización profesional.",
                images: [
                    "imagenes/escritorios/160/k3escritorio01.jpg",
                    "imagenes/escritorios/160/k3escritorio01.jpg",
                    "imagenes/escritorios/160/k3escritorio01.jpg",
                    "imagenes/escritorios/160/k3escritorio01.jpg"
                ],
                specs: [
                    { name: "Material", value: "Base de hierro y madera de eucalipto" },
                    { name: "Dimensiones", value: "160×80×75 cm" },
                    { name: "Color", value: "Natural de madera" },
                    { name: "Peso máximo", value: "120 kg" },
                    { name: "Recomendado", value: "Doble monitor" }
                ],
                stock: 5,
                rating: 5.0,
                reviews: 32
            },
            4: {
                id: 4,
                name: "Escritorio 2.00m",
                category: "Escritorios Nórdicos",
                price: 250000,
                formattedPrice: "$250.000",
                description: "Impresionante escritorio de 2 metros para espacios amplios. Máxima elegancia y funcionalidad. Superficie extra resistente, ideal para ejecutivos y estudios profesionales.",
                images: [
                    "imagenes/escritorios/200/k4escritorio01.jpg",
                    "imagenes/escritorios/200/k4escritorio01.jpg",
                    "imagenes/escritorios/200/k4escritorio01.jpg",
                    "imagenes/escritorios/200/k4escritorio01.jpg"
                ],
                specs: [
                    { name: "Material", value: "Base de hierro y madera de eucalipto" },
                    { name: "Dimensiones", value: "200×100×75 cm" },
                    { name: "Color", value: "Natural de madera" },
                    { name: "Peso máximo", value: "150 kg" },
                    { name: "Espacio", value: "Amplio para múltiples dispositivos" }
                ],
                stock: 3,
                rating: 4.5,
                reviews: 15
            },
            5: {
                id: 5,
                name: "Mesa Modelo Trineo",
                category: "Mesas Nórdicas",
                price: 200000,
                formattedPrice: "$200.000",
                description: "Mesa de diseño nórdico con base en forma de trineo. Elegancia y estabilidad en un solo diseño. Perfecta para comedores modernos, cenas familiares y reuniones sociales.",
                images: [
                    "imagenes/mesas/k1/k1mesa01.jpg",
                    "imagenes/mesas/k1/k1mesa01.jpg",
                    "imagenes/mesas/k1/k1mesa01.jpg",
                    "imagenes/mesas/k1/k1mesa01.jpg"
                ],
                specs: [
                    { name: "Material", value: "Base de hierro y madera de eucalipto" },
                    { name: "Dimensiones", value: "150×90×75 cm" },
                    { name: "Color", value: "Natural de madera" },
                    { name: "Capacidad", value: "6-8 personas" },
                    { name: "Estilo", value: "Trineo nórdico" }
                ],
                stock: 10,
                rating: 4.5,
                reviews: 28
            },
            6: {
                id: 6,
                name: "Mesa Modelo U",
                category: "Mesas Nórdicas",
                price: 220000,
                formattedPrice: "$220.000",
                description: "Mesa con base en forma de U, diseño industrial nórdico. Robustez y estilo para tu comedor. Base metálica reforzada que garantiza estabilidad absoluta.",
                images: [
                    "imagenes/mesas/k2/k2mesa01.jpg",
                    "imagenes/mesas/k2/k2mesa01.jpg",
                    "imagenes/mesas/k2/k2mesa01.jpg",
                    "imagenes/mesas/k2/k2mesa01.jpg"
                ],
                specs: [
                    { name: "Material", value: "Base de hierro y madera de eucalipto" },
                    { name: "Dimensiones", value: "160×90×75 cm" },
                    { name: "Color", value: "Natural de madera" },
                    { name: "Capacidad", value: "8-10 personas" },
                    { name: "Base", value: "Forma U industrial" }
                ],
                stock: 7,
                rating: 4.0,
                reviews: 22
            },
            7: {
                id: 7,
                name: "Mesa Modelo X",
                category: "Mesas Nórdicas",
                price: 250000,
                formattedPrice: "$250.000",
                description: "Mesa con base en forma de X, elegante y robusta. Diseño que combina tradición y modernidad. Punto focal perfecto para cualquier comedor contemporáneo.",
                images: [
                    "imagenes/mesas/k3/k3mesa01.jpg",
                    "imagenes/mesas/k3/k3mesa01.jpg",
                    "imagenes/mesas/k3/k3mesa01.jpg",
                    "imagenes/mesas/k3/k3mesa01.jpg"
                ],
                specs: [
                    { name: "Material", value: "Base de hierro y madera de eucalipto" },
                    { name: "Dimensiones", value: "180×90×75 cm" },
                    { name: "Color", value: "Natural de madera" },
                    { name: "Capacidad", value: "10-12 personas" },
                    { name: "Base", value: "Forma X elegante" }
                ],
                stock: 4,
                rating: 5.0,
                reviews: 35
            },
            8: {
                id: 8,
                name: "Rack TV Nórdico K1",
                category: "Racks TV Nórdicos",
                price: 120000,
                formattedPrice: "$120.000",
                description: "Rack TV con diseño minimalista nórdico. Organización y estilo para tu sala de estar. Incluye espacios para TV, consolas, reproductores y organización de cables.",
                images: [
                    "imagenes/racks/k1/k1Rack01.jpg",
                    "imagenes/racks/k1/k1Rack01.jpg",
                    "imagenes/racks/k1/k1Rack01.jpg",
                    "imagenes/racks/k1/k1Rack01.jpg"
                ],
                specs: [
                    { name: "Material", value: "Base de hierro y madera de eucalipto" },
                    { name: "Dimensiones", value: "120×40×50 cm" },
                    { name: "Color", value: "Natural de madera" },
                    { name: "TV máxima", value: "55 pulgadas" },
                    { name: "Espacios", value: "3 estantes + 1 inferior" }
                ],
                stock: 12,
                rating: 4.0,
                reviews: 19
            },
            9: {
                id: 9,
                name: "Rack TV Nórdico K2",
                category: "Racks TV Nórdicos",
                price: 150000,
                formattedPrice: "$150.000",
                description: "Rack TV con diseño moderno y funcional. Espacios organizados para todos tus dispositivos. Incluye gestión profesional de cables y estantes ajustables.",
                images: [
                    "imagenes/racks/k2/k2Rack01.jpg",
                    "imagenes/racks/k2/k2Rack01.jpg",
                    "imagenes/racks/k2/k2Rack01.jpg",
                    "imagenes/racks/k2/k2Rack01.jpg"
                ],
                specs: [
                    { name: "Material", value: "Base de hierro y madera de eucalipto" },
                    { name: "Dimensiones", value: "140×45×55 cm" },
                    { name: "Color", value: "Natural de madera" },
                    { name: "TV máxima", value: "65 pulgadas" },
                    { name: "Estantes", value: "4 ajustables + 2 laterales" }
                ],
                stock: 9,
                rating: 4.5,
                reviews: 26
            }
        }
    };

    // ===== ESTADO GLOBAL SIMPLE =====
    const State = {
        cart: JSON.parse(localStorage.getItem('nordic_cart')) || [],
        wishlist: JSON.parse(localStorage.getItem('nordic_wishlist')) || [],
        currentProductId: null
    };

    // ===== ELEMENTOS DEL DOM =====
    const elements = {
        // Header
        hamburgerBtn: document.getElementById('hamburgerBtn'),
        navMenu: document.querySelector('.nav-menu'),
        searchInput: document.querySelector('.search-input'),
        searchBtn: document.querySelector('.search-btn'),
        
        // Carrito
        cartBtn: document.getElementById('cartBtn'),
        cartModal: document.getElementById('cartModal'),
        cartItems: document.getElementById('cartItems'),
        cartSubtotal: document.getElementById('cartSubtotal'),
        cartShipping: document.getElementById('cartShipping'),
        cartTotal: document.getElementById('cartTotal'),
        checkoutBtn: document.getElementById('checkoutBtn'),
        emptyCart: document.getElementById('emptyCart'),
        
        // Wishlist
        wishlistBtn: document.getElementById('wishlistBtn'),
        wishlistModal: document.getElementById('wishlistModal'),
        wishlistItems: document.getElementById('wishlistItems'),
        emptyWishlist: document.getElementById('emptyWishlist'),
        
        // Modales
        productModal: document.getElementById('productModal'),
        modalCloseBtns: document.querySelectorAll('.modal-close'),
        
        // Newsletter
        newsletterForm: document.getElementById('newsletterForm'),
        
        // Botones generales
        btnWishlist: document.querySelectorAll('.btn-wishlist'),
        btnCart: document.querySelectorAll('.btn-cart'),
        btnView: document.querySelectorAll('.btn-view'),
        
        // Botón de usuario (añadido)
        userBtn: document.getElementById('userBtn')
    };

    // ===== FUNCIONES DE UTILIDAD =====
    const utils = {
        formatPrice: (price) => {
            return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        showToast: (message, type = 'success') => {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.innerHTML = `
                <div class="toast-content">
                    <i class="fas fa-${type === 'success' ? 'check' : 'info'}"></i>
                    <span>${message}</span>
                </div>
            `;
            document.body.appendChild(toast);
            
            // Estilos del toast
            toast.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: ${type === 'success' ? '#27ae60' : '#3498db'};
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
            
            // Animación de entrada
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
            
            // Auto eliminar
            setTimeout(() => {
                toast.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        },

        getProductById: (id) => {
            return CONFIG.products[id];
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
                existingItem.quantity += quantity;
            } else {
                State.cart.push({
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    formattedPrice: product.formattedPrice,
                    image: product.images[0],
                    quantity: quantity
                });
            }
            
            this.save();
            this.updateCartCount();
            this.renderCart();
            this.animateCartButton();
            
            utils.showToast(`${product.name} agregado al carrito`);
        },

        remove(productId) {
            State.cart = State.cart.filter(item => item.id !== productId);
            this.save();
            this.updateCartCount();
            this.renderCart();
        },

        updateQuantity(productId, newQuantity) {
            if (newQuantity < 1) {
                this.remove(productId);
                return;
            }
            
            const item = State.cart.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
                this.save();
                this.renderCart();
            }
        },

        clear() {
            if (State.cart.length === 0) return;
            
            if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
                State.cart = [];
                this.save();
                this.updateCartCount();
                this.renderCart();
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
            const shipping = subtotal >= 200000 ? 0 : 5000;
            const total = subtotal + shipping;

            return {
                subtotal: utils.formatPrice(subtotal),
                shipping: shipping === 0 ? 'Gratis' : utils.formatPrice(shipping),
                total: utils.formatPrice(total)
            };
        },

        renderCart() {
            if (!elements.cartItems) return;

            const totals = this.calculateTotals();
            
            // Actualizar totales
            if (elements.cartSubtotal) elements.cartSubtotal.textContent = totals.subtotal;
            if (elements.cartShipping) elements.cartShipping.textContent = totals.shipping;
            if (elements.cartTotal) elements.cartTotal.textContent = totals.total;
            
            // Mostrar/ocultar carrito vacío
            if (elements.emptyCart) {
                elements.emptyCart.style.display = State.cart.length === 0 ? 'block' : 'none';
                elements.cartItems.style.display = State.cart.length === 0 ? 'none' : 'block';
            }
            
            // Renderizar items
            if (State.cart.length > 0) {
                elements.cartItems.innerHTML = State.cart.map(item => `
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
            
            // Botón del checkout
            if (elements.checkoutBtn) {
                elements.checkoutBtn.addEventListener('click', () => {
                    if (State.cart.length === 0) {
                        utils.showToast('El carrito está vacío', 'info');
                        return;
                    }
                    alert('Gracias por tu compra. En breve nos pondremos en contacto contigo.');
                    State.cart = [];
                    this.save();
                    this.updateCartCount();
                    this.renderCart();
                    ModalSystem.close(elements.cartModal);
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
            
            State.wishlist.push(productId);
            this.save();
            this.updateWishlistCount();
            this.renderWishlist();
            
            const product = utils.getProductById(productId);
            utils.showToast(`${product.name} agregado a favoritos`);
        },

        remove(productId) {
            State.wishlist = State.wishlist.filter(id => id !== productId);
            this.save();
            this.updateWishlistCount();
            this.renderWishlist();
        },

        clear() {
            if (State.wishlist.length === 0) return;
            
            if (confirm('¿Estás seguro de que quieres vaciar la lista de favoritos?')) {
                State.wishlist = [];
                this.save();
                this.updateWishlistCount();
                this.renderWishlist();
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
                                <i class="fas fa-cart-plus"></i>
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
        }
    };

    // ===== SISTEMA DE MODALES =====
    const ModalSystem = {
        init() {
            this.setupEventListeners();
        },
        
        open(modal) {
            if (!modal) return;
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        },
        
        close(modal) {
            if (!modal) return;
            
            modal.style.display = 'none';
            document.body.style.overflow = '';
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
            document.querySelectorAll('.modal-overlay').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        this.close(modal);
                    }
                });
            });
            
            // Cerrar con Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    document.querySelectorAll('.modal-overlay').forEach(modal => {
                        if (modal.style.display === 'flex') {
                            this.close(modal);
                        }
                    });
                }
            });
            
            // Botón del carrito
            if (elements.cartBtn) {
                elements.cartBtn.addEventListener('click', () => {
                    CartSystem.renderCart();
                    this.open(elements.cartModal);
                });
            }
            
            // Botón de wishlist
            if (elements.wishlistBtn) {
                elements.wishlistBtn.addEventListener('click', () => {
                    WishlistSystem.renderWishlist();
                    this.open(elements.wishlistModal);
                });
            }
            
            // Botón de usuario (añadido)
            if (elements.userBtn) {
                elements.userBtn.addEventListener('click', () => {
                    alert('Funcionalidad de cuenta en desarrollo. ¡Próximamente!');
                });
            }
        }
    };

    // ===== SISTEMA DE PRODUCTOS =====
    const ProductSystem = {
        init() {
            this.setupEventListeners();
        },
        
        openProductModal(productId) {
            const product = utils.getProductById(productId);
            if (!product || !elements.productModal) return;
            
            State.currentProductId = productId;
            
            let html = `
                <div class="modal-product">
                    <div class="modal-product-gallery">
                        <div class="modal-main-image">
                            <img src="${product.images[0]}" alt="${product.name}" id="modalMainImage">
                        </div>
                        <div class="modal-image-thumbnails">
                            ${product.images.map((img, index) => `
                                <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
                                    <img src="${img}" alt="${product.name} - Vista ${index + 1}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-product-info">
                        <div class="modal-product-header">
                            <span class="modal-product-category">${product.category}</span>
                            <h2>${product.name}</h2>
                            <div class="modal-product-rating">
                                <div class="stars">
                                    ${Array(5).fill().map((_, i) => `
                                        <i class="fas fa-star${i < Math.floor(product.rating) ? '' : i < product.rating ? '-half-alt' : ''}"></i>
                                    `).join('')}
                                </div>
                                <span class="rating-count">${product.reviews} reseñas</span>
                            </div>
                        </div>
                        
                        <div class="modal-product-price-section">
                            <div class="modal-price">${product.formattedPrice}</div>
                            ${product.oldPrice ? `<div class="modal-price-old">${product.oldPrice}</div>` : ''}
                            <div class="modal-price-installment">12× ${utils.formatPrice(Math.round(product.price / 12))}</div>
                        </div>
                        
                        <div class="modal-product-description">
                            <p>${product.description}</p>
                        </div>
                        
                        <div class="modal-product-specs">
                            <h4><i class="fas fa-ruler-combined"></i> Especificaciones Técnicas</h4>
                            <ul>
                                ${product.specs.map(spec => `
                                    <li>
                                        <strong>${spec.name}:</strong>
                                        <span>${spec.value}</span>
                                    </li>
                                `).join('')}
                                <li>
                                    <strong>Stock:</strong>
                                    <span class="${product.stock > 10 ? 'stock-available' : product.stock > 0 ? 'stock-low' : 'stock-out'}">
                                        ${product.stock > 10 ? 'Disponible' : product.stock > 0 ? 'Últimas unidades' : 'Agotado'}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="modal-product-benefits">
                            <h4><i class="fas fa-gift"></i> Beneficios Incluidos</h4>
                            <ul>
                                <li><i class="fas fa-check" style="color: var(--success);"></i> Envío gratis en compras mayores a $200.000</li>
                                <li><i class="fas fa-check" style="color: var(--success);"></i> Garantía de 2 años</li>
                                <li><i class="fas fa-check" style="color: var(--success);"></i> Armado profesional incluido</li>
                                <li><i class="fas fa-check" style="color: var(--success);"></i> Soporte premium 24/7</li>
                            </ul>
                        </div>
                        
                        <div class="modal-product-actions">
                            <button class="btn btn-primary" id="modalAddToCart">
                                <i class="fas fa-cart-plus"></i> Agregar al Carrito
                            </button>
                            <button class="btn btn-secondary" id="modalAddToWishlist">
                                <i class="${State.wishlist.includes(productId) ? 'fas' : 'far'} fa-heart"></i> 
                                ${State.wishlist.includes(productId) ? 'En Favoritos' : 'Agregar a Favoritos'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            elements.productModal.querySelector('.modal-content').innerHTML = html;
            ModalSystem.open(elements.productModal);
            
            // Event listeners para miniaturas
            elements.productModal.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.addEventListener('click', function() {
                    const imgSrc = this.dataset.image;
                    document.getElementById('modalMainImage').src = imgSrc;
                    
                    // Actualizar miniaturas activas
                    elements.productModal.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Event listeners para botones del modal
            const addToCartBtn = document.getElementById('modalAddToCart');
            const addToWishlistBtn = document.getElementById('modalAddToWishlist');
            
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', () => {
                    CartSystem.add(productId, 1);
                    addToCartBtn.innerHTML = '<i class="fas fa-check"></i> ¡Agregado!';
                    addToCartBtn.style.background = 'var(--success)';
                    setTimeout(() => {
                        addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Agregar al Carrito';
                        addToCartBtn.style.background = '';
                    }, 2000);
                });
            }
            
            if (addToWishlistBtn) {
                addToWishlistBtn.addEventListener('click', () => {
                    WishlistSystem.add(productId);
                    
                    // Actualizar icono y texto
                    const icon = addToWishlistBtn.querySelector('i');
                    if (State.wishlist.includes(productId)) {
                        icon.className = 'fas fa-heart';
                        addToWishlistBtn.innerHTML = '<i class="fas fa-heart"></i> En Favoritos';
                        addToWishlistBtn.style.background = 'var(--danger)';
                    } else {
                        icon.className = 'far fa-heart';
                        addToWishlistBtn.innerHTML = '<i class="far fa-heart"></i> Agregar a Favoritos';
                        addToWishlistBtn.style.background = '';
                    }
                });
            }
        },
        
        setupEventListeners() {
            // Botón ver detalles en tarjetas
            document.addEventListener('click', (e) => {
                if (e.target.closest('.btn-view')) {
                    const btn = e.target.closest('.btn-view');
                    const productId = parseInt(btn.dataset.id);
                    this.openProductModal(productId);
                }
            });
        }
    };

    // ===== SISTEMA DE NAVEGACIÓN =====
    const NavigationSystem = {
        init() {
            this.setupEventListeners();
            this.setupScrollSpy();
        },
        
        setupEventListeners() {
            // Menú hamburguesa
            if (elements.hamburgerBtn) {
                elements.hamburgerBtn.addEventListener('click', () => {
                    elements.navMenu.classList.toggle('active');
                    elements.hamburgerBtn.classList.toggle('active');
                });
            }
            
            // Cerrar menú al hacer clic en enlace
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    elements.navMenu.classList.remove('active');
                    elements.hamburgerBtn.classList.remove('active');
                });
            });
            
            // Buscador
            if (elements.searchBtn && elements.searchInput) {
                elements.searchBtn.addEventListener('click', () => {
                    const query = elements.searchInput.value.trim();
                    if (query) {
                        utils.showToast(`Buscando: ${query}`, 'info');
                        elements.searchInput.value = '';
                    }
                });
                
                elements.searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        const query = elements.searchInput.value.trim();
                        if (query) {
                            utils.showToast(`Buscando: ${query}`, 'info');
                            elements.searchInput.value = '';
                        }
                    }
                });
            }
        },
        
        setupScrollSpy() {
            // Header scroll effect
            const header = document.querySelector('.header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
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
                    
                    // Validar email
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        utils.showToast('Por favor ingresa un email válido', 'info');
                        return;
                    }
                    
                    // Simular suscripción
                    utils.showToast('¡Gracias por suscribirte!', 'success');
                    elements.newsletterForm.reset();
                });
            }
        }
    };

    // ===== INICIALIZACIÓN =====
    function initApp() {
        console.log('✅ Inicializando sistemas...');
        
        // Inicializar todos los sistemas
        CartSystem.init();
        WishlistSystem.init();
        ModalSystem.init();
        ProductSystem.init();
        NavigationSystem.init();
        NewsletterSystem.init();
        
        // Actualizar iconos de wishlist
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
        console.log('📊 Estado:', {
            carrito: State.cart.length,
            wishlist: State.wishlist.length
        });
    }

    // Iniciar la aplicación
    initApp();
});
