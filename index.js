// index.js - ESTILO NÓRDICO V6 PERFECTO VISUAL
// Sistema completo con Modal Full-Screen PERFECTO

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Estilo Nórdico V6 - Sistema inicializado con Modal Full-Screen');
    
    // ===== CONFIGURACIÓN SIMPLE PERO COMPLETA =====
    const CONFIG = {
        products: {
            1: {
                id: 1,
                name: "Escritorio 1.20m Nórdico Premium",
                category: "Escritorios Nórdicos",
                price: 120000,
                formattedPrice: "$120.000",
                oldPrice: "$150.000",
                description: "Escritorio de 1.20 metros fabricado con base de hierro negro mate y madera de eucalipto maciza. Diseño nórdico minimalista perfecto para espacios de trabajo modernos. Acabado natural que resalta la veta de la madera.",
                images: [
                    "imagenes/escritorios/120/k1escritorio01.png",
                    "imagenes/escritorios/120/k1escritorio02.jpg",
                    "imagenes/escritorios/120/k1escritorio03.jpg"
                ],
                specs: [
                    { name: "Material Principal", value: "Madera de Eucalipto Maciza" },
                    { name: "Base", value: "Hierro Negro Mate" },
                    { name: "Dimensiones", value: "120×60×75 cm" },
                    { name: "Peso Máximo Soportado", value: "80 kg" },
                    { name: "Color", value: "Natural de Madera" },
                    { name: "Acabado", value: "Barniz Mate Protector" }
                ],
                features: [
                    "Diseño nórdico minimalista",
                    "Base de hierro ultra resistente",
                    "Madera tratada contra humedad",
                    "Esquinas redondeadas para seguridad",
                    "Fácil ensamblaje con herramientas incluidas",
                    "Compatibilidad con sistemas de cableado"
                ],
                stock: 15,
                rating: 4.5,
                reviews: 24
            },
            2: {
                id: 2,
                name: "Escritorio 1.30m con Cajones",
                category: "Escritorios Nórdicos",
                price: 150000,
                formattedPrice: "$150.000",
                description: "Escritorio de 1.30 metros con cajones ocultos y gestión de cables integrada. Fabricado con base de hierro y madera de eucalipto de primera calidad. Ideal para espacios de trabajo amplios y organizados.",
                images: [
                    "imagenes/escritorios/130/k2escritorio01.png",
                    "imagenes/escritorios/130/k2escritorio02.jpg",
                    "imagenes/escritorios/130/k2escritorio03.jpg"
                ],
                specs: [
                    { name: "Material Principal", value: "Madera de Eucalipto Maciza" },
                    { name: "Base", value: "Hierro Negro Mate" },
                    { name: "Dimensiones", value: "130×65×75 cm" },
                    { name: "Cajones", value: "2 Cajones Ocultos" },
                    { name: "Peso Máximo Soportado", value: "100 kg" },
                    { name: "Acabado", value: "Barniz Semi-Mate" }
                ],
                features: [
                    "Diseño con cajones ocultos",
                    "Sistema de gestión de cables",
                    "Base reforzada para mayor estabilidad",
                    "Superficie resistente a rayones",
                    "Patas ajustables en altura",
                    "Perfecto para home office"
                ],
                stock: 8,
                rating: 4.0,
                reviews: 18
            },
            3: {
                id: 3,
                name: "Escritorio Ejecutivo 1.60m",
                category: "Escritorios Nórdicos",
                price: 200000,
                formattedPrice: "$200.000",
                description: "Elegante escritorio ejecutivo de 1.60 metros fabricado con base de hierro industrial y madera de eucalipto premium. Perfecto para espacios ejecutivos, estudios de diseño o arquitectura. Superficie extra amplia para doble monitor.",
                images: [
                    "imagenes/escritorios/160/k3escritorio01.jpg",
                    "imagenes/escritorios/160/k3escritorio02.jpg",
                    "imagenes/escritorios/160/k3escritorio03.jpg"
                ],
                specs: [
                    { name: "Material Principal", value: "Eucalipto Premium Macizo" },
                    { name: "Base", value: "Hierro Industrial" },
                    { name: "Dimensiones", value: "160×80×75 cm" },
                    { name: "Peso Máximo Soportado", value: "120 kg" },
                    { name: "Espesor de la Madera", value: "3.5 cm" },
                    { name: "Acabado", value: "Barniz de Alta Duración" }
                ],
                features: [
                    "Diseño ejecutivo premium",
                    "Superficie extra amplia",
                    "Base industrial ultra resistente",
                    "Ideal para doble monitor",
                    "Resistente a líquidos y calor",
                    "Garantía extendida de 3 años"
                ],
                stock: 5,
                rating: 5.0,
                reviews: 32
            },
            4: {
                id: 4,
                name: "Escritorio 2.00m de Lujo",
                category: "Escritorios Nórdicos",
                price: 250000,
                formattedPrice: "$250.000",
                description: "Impresionante escritorio de 2 metros para espacios amplios y sofisticados. Máxima elegancia y funcionalidad con base de hierro negro y madera de eucalipto seleccionada a mano. Pieza central para oficinas ejecutivas.",
                images: [
                    "imagenes/escritorios/200/k4escritorio01.jpg",
                    "imagenes/escritorios/200/k4escritorio02.jpg",
                    "imagenes/escritorios/200/k4escritorio03.jpg"
                ],
                specs: [
                    { name: "Material Principal", value: "Eucalipto Seleccionado a Mano" },
                    { name: "Base", value: "Hierro Negro de Alta Densidad" },
                    { name: "Dimensiones", value: "200×100×75 cm" },
                    { name: "Peso Máximo Soportado", value: "150 kg" },
                    { name: "Espesor de la Madera", value: "4 cm" },
                    { name: "Acabado", value: "Barniz de Lujo Protector" }
                ],
                features: [
                    "Diseño de lujo exclusivo",
                    "Madera seleccionada a mano",
                    "Base de alta densidad",
                    "Superficie monumental",
                    "Perfecto para reuniones ejecutivas",
                    "Incluye kit de mantenimiento premium"
                ],
                stock: 3,
                rating: 4.5,
                reviews: 15
            },
            5: {
                id: 5,
                name: "Mesa Modelo Trineo Nórdica",
                category: "Mesas Nórdicas",
                price: 200000,
                formattedPrice: "$200.000",
                description: "Mesa de diseño nórdico con base en forma de trineo, elegante y estable. Perfecta para comedores modernos. Fabricada con madera de eucalipto maciza y base de hierro negro. Capacidad para 6-8 personas.",
                images: [
                    "imagenes/mesas/k1/k1mesa01.jpg",
                    "imagenes/mesas/k1/k1mesa02.jpg",
                    "imagenes/mesas/k1/k1mesa03.jpg"
                ],
                specs: [
                    { name: "Material Principal", value: "Madera de Eucalipto Maciza" },
                    { name: "Base", value: "Hierro en Forma de Trineo" },
                    { name: "Dimensiones", value: "150×90×75 cm" },
                    { name: "Capacidad", value: "6-8 Personas" },
                    { name: "Peso Máximo Soportado", value: "200 kg" },
                    { name: "Acabado", value: "Barniz Mate Protector" }
                ],
                features: [
                    "Diseño trineo nórdico",
                    "Estabilidad excepcional",
                    "Base artesanal en hierro",
                    "Perfecta para reuniones familiares",
                    "Resistente a manchas y calor",
                    "Fácil limpieza y mantenimiento"
                ],
                stock: 10,
                rating: 4.5,
                reviews: 28
            },
            6: {
                id: 6,
                name: "Mesa Modelo U Industrial",
                category: "Mesas Nórdicas",
                price: 220000,
                formattedPrice: "$220.000",
                description: "Mesa con base en forma de U, diseño industrial nórdico. Robustez y estilo para tu comedor. Combinación perfecta entre diseño moderno y durabilidad industrial. Madera de eucalipto tratada y base de hierro negro.",
                images: [
                    "imagenes/mesas/k2/k2mesa01.jpg",
                    "imagenes/mesas/k2/k2mesa02.jpg",
                    "imagenes/mesas/k2/k2mesa03.jpg"
                ],
                specs: [
                    { name: "Material Principal", value: "Madera de Eucalipto Tratada" },
                    { name: "Base", value: "Hierro en Forma de U" },
                    { name: "Dimensiones", value: "160×90×75 cm" },
                    { name: "Capacidad", value: "8 Personas" },
                    { name: "Peso Máximo Soportado", value: "220 kg" },
                    { name: "Acabado", value: "Barniz Industrial" }
                ],
                features: [
                    "Diseño industrial nórdico",
                    "Base en U ultra estable",
                    "Estilo moderno y robusto",
                    "Perfecta para espacios amplios",
                    "Resistente al desgaste diario",
                    "Ideal para uso comercial"
                ],
                stock: 7,
                rating: 4.0,
                reviews: 22
            },
            7: {
                id: 7,
                name: "Mesa Modelo X Premium",
                category: "Mesas Nórdicas",
                price: 250000,
                formattedPrice: "$250.000",
                description: "Mesa con base en forma de X, elegante y robusta. Diseño que combina tradición nórdica y modernidad industrial. Madera de eucalipto premium con base de hierro negro mate. Pieza central para comedores de lujo.",
                images: [
                    "imagenes/mesas/k3/k3mesa01.jpg",
                    "imagenes/mesas/k3/k3mesa02.jpg",
                    "imagenes/mesas/k3/k3mesa03.jpg"
                ],
                specs: [
                    { name: "Material Principal", value: "Eucalipto Premium Macizo" },
                    { name: "Base", value: "Hierro en Forma de X" },
                    { name: "Dimensiones", value: "180×90×75 cm" },
                    { name: "Capacidad", value: "10 Personas" },
                    { name: "Peso Máximo Soportado", value: "250 kg" },
                    { name: "Acabado", value: "Barniz de Alta Gama" }
                ],
                features: [
                    "Diseño X premium exclusivo",
                    "Base artesanal en hierro",
                    "Madera premium seleccionada",
                    "Perfecta para cenas elegantes",
                    "Resistencia máxima garantizada",
                    "Incluye certificado de autenticidad"
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
                description: "Rack TV con diseño minimalista nórdico. Organización perfecta para tu sala de estar. Fabricado con madera de eucalipto y base de hierro. Espacios diseñados para todos tus dispositivos electrónicos.",
                images: [
                    "imagenes/racks/k1/k1Rack01.jpg",
                    "imagenes/racks/k1/k1Rack02.jpg",
                    "imagenes/racks/k1/k1Rack03.jpg"
                ],
                specs: [
                    { name: "Material Principal", value: "Madera de Eucalipto" },
                    { name: "Base", value: "Hierro Negro" },
                    { name: "Dimensiones", value: "120×40×50 cm" },
                    { name: "Capacidad TV", value: "Hasta 55 pulgadas" },
                    { name: "Estantes", value: "3 Estantes Ajustables" },
                    { name: "Acabado", value: "Barniz Mate" }
                ],
                features: [
                    "Diseño minimalista nórdico",
                    "Organización optimizada",
                    "Estantes ajustables",
                    "Gestión de cables oculta",
                    "Base estable anti-volcamiento",
                    "Fácil montaje"
                ],
                stock: 12,
                rating: 4.0,
                reviews: 19
            },
            9: {
                id: 9,
                name: "Rack TV Nórdico K2 Premium",
                category: "Racks TV Nórdicos",
                price: 150000,
                formattedPrice: "$150.000",
                description: "Rack TV con diseño moderno y funcional. Espacios organizados para todos tus dispositivos. Madera de eucalipto premium con base de hierro negro. Incluye sistema de cableado oculto y estantes extraíbles.",
                images: [
                    "imagenes/racks/k2/k2Rack01.jpg",
                    "imagenes/racks/k2/k2Rack02.jpg",
                    "imagenes/racks/k2/k2Rack03.jpg"
                ],
                specs: [
                    { name: "Material Principal", value: "Eucalipto Premium" },
                    { name: "Base", value: "Hierro Negro Mate" },
                    { name: "Dimensiones", value: "140×45×55 cm" },
                    { name: "Capacidad TV", value: "Hasta 65 pulgadas" },
                    { name: "Estantes", value: "4 Estantes + Compartimento" },
                    { name: "Acabado", value: "Barniz Semi-Mate" }
                ],
                features: [
                    "Diseño moderno premium",
                    "Sistema de cableado oculto",
                    "Estantes extraíbles",
                    "Base reforzada extra estable",
                    "Compartimento para consolas",
                    "Patas nivelables"
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
        btnView: document.querySelectorAll('.btn-view')
    };

    // ===== FUNCIONES DE UTILIDAD =====
    const utils = {
        formatPrice: (price) => {
            return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        showToast: (message, type = 'success') => {
            // Eliminar toasts existentes
            document.querySelectorAll('.toast').forEach(toast => toast.remove());
            
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.innerHTML = `
                <div class="toast-content">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                    <span>${message}</span>
                </div>
                <button class="toast-close">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            document.body.appendChild(toast);
            
            // Estilos del toast
            toast.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                z-index: 10000;
                animation: slideInRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                max-width: 400px;
                min-width: 300px;
            `;
            
            // Estilo del contenido
            toast.querySelector('.toast-content').style.cssText = `
                display: flex;
                align-items: center;
                gap: 12px;
                flex: 1;
            `;
            
            // Estilo del ícono
            toast.querySelector('.toast-content i').style.cssText = `
                font-size: 1.4rem;
            `;
            
            // Estilo del botón de cerrar
            toast.querySelector('.toast-close').style.cssText = `
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 5px;
                opacity: 0.8;
                transition: opacity 0.3s ease;
            `;
            
            toast.querySelector('.toast-close').addEventListener('mouseenter', function() {
                this.style.opacity = '1';
            });
            
            toast.querySelector('.toast-close').addEventListener('mouseleave', function() {
                this.style.opacity = '0.8';
            });
            
            toast.querySelector('.toast-close').addEventListener('click', function() {
                toast.style.animation = 'slideOutRight 0.3s ease forwards';
                setTimeout(() => toast.remove(), 300);
            });
            
            // Animación de entrada
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideInRight {
                    from { 
                        transform: translateX(100%); 
                        opacity: 0; 
                    }
                    to { 
                        transform: translateX(0); 
                        opacity: 1; 
                    }
                }
                @keyframes slideOutRight {
                    from { 
                        transform: translateX(0); 
                        opacity: 1; 
                    }
                    to { 
                        transform: translateX(100%); 
                        opacity: 0; 
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Auto eliminar
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.style.animation = 'slideOutRight 0.3s ease forwards';
                    setTimeout(() => {
                        if (toast.parentNode) toast.remove();
                    }, 300);
                }
            }, 5000);
        },

        getProductById: (id) => {
            return CONFIG.products[id];
        },
        
        getStarsHTML: (rating) => {
            let starsHTML = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 1; i <= 5; i++) {
                if (i <= fullStars) {
                    starsHTML += '<i class="fas fa-star"></i>';
                } else if (i === fullStars + 1 && hasHalfStar) {
                    starsHTML += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    starsHTML += '<i class="far fa-star"></i>';
                }
            }
            
            return starsHTML;
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
            
            const product = utils.getProductById(productId);
            if (product) {
                utils.showToast(`${product.name} eliminado del carrito`, 'error');
            }
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
            
            if (confirm('¿Estás seguro de que quieres vaciar el carrito? Esta acción no se puede deshacer.')) {
                State.cart = [];
                this.save();
                this.updateCartCount();
                this.renderCart();
                utils.showToast('Carrito vaciado', 'error');
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
                
                // Animación del badge
                if (totalItems > 0) {
                    cartCount.classList.add('pulse');
                    setTimeout(() => cartCount.classList.remove('pulse'), 300);
                }
            }
        },

        animateCartButton() {
            const cartBtn = elements.cartBtn;
            if (cartBtn) {
                cartBtn.classList.add('animate-pulse');
                setTimeout(() => cartBtn.classList.remove('animate-pulse'), 500);
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
                                    <button class="quantity-btn decrease" data-id="${item.id}" aria-label="Disminuir cantidad">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <span class="quantity">${item.quantity}</span>
                                    <button class="quantity-btn increase" data-id="${item.id}" aria-label="Aumentar cantidad">
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
                        utils.showToast('El carrito está vacío', 'error');
                        return;
                    }
                    
                    const totals = this.calculateTotals();
                    const orderDetails = State.cart.map(item => 
                        `${item.quantity}x ${item.name} - ${item.formattedPrice}`
                    ).join('\n');
                    
                    const message = `🚀 *NUEVO PEDIDO - ESTILO NÓRDICO*\n\n` +
                                  `📦 *Productos:*\n${orderDetails}\n\n` +
                                  `💰 *Total:* ${totals.total}\n` +
                                  `📞 *Contactar al cliente para confirmar envío y pago*`;
                    
                    // En un caso real, aquí enviarías esto a tu backend
                    alert(`¡Pedido confirmado!\n\nTotal: ${totals.total}\n\nEn breve nos pondremos en contacto contigo para coordinar el envío y pago.`);
                    
                    // Limpiar carrito
                    State.cart = [];
                    this.save();
                    this.updateCartCount();
                    this.renderCart();
                    ModalSystem.close(elements.cartModal);
                    
                    utils.showToast('¡Pedido confirmado! Te contactaremos pronto.', 'success');
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
            
            // Actualizar todos los botones de wishlist para este producto
            this.updateWishlistButtons(productId, true);
        },

        remove(productId) {
            State.wishlist = State.wishlist.filter(id => id !== productId);
            this.save();
            this.updateWishlistCount();
            this.renderWishlist();
            
            const product = utils.getProductById(productId);
            utils.showToast(`${product.name} eliminado de favoritos`, 'error');
            
            // Actualizar todos los botones de wishlist para este producto
            this.updateWishlistButtons(productId, false);
        },

        clear() {
            if (State.wishlist.length === 0) return;
            
            if (confirm('¿Estás seguro de que quieres vaciar la lista de favoritos?')) {
                // Guardar productos para mensaje
                const products = State.wishlist.map(id => utils.getProductById(id).name);
                
                State.wishlist = [];
                this.save();
                this.updateWishlistCount();
                this.renderWishlist();
                
                // Actualizar todos los botones
                document.querySelectorAll('.btn-wishlist').forEach(btn => {
                    const id = parseInt(btn.dataset.id);
                    this.updateWishlistButtons(id, false);
                });
                
                utils.showToast('Lista de favoritos vaciada', 'error');
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
                
                // Animación del badge
                if (count > 0) {
                    wishlistCount.classList.add('pulse');
                    setTimeout(() => wishlistCount.classList.remove('pulse'), 300);
                }
            }
        },

        updateWishlistButtons(productId, isInWishlist) {
            // Actualizar botones en tarjetas de productos
            document.querySelectorAll(`.btn-wishlist[data-id="${productId}"]`).forEach(btn => {
                const icon = btn.querySelector('i');
                if (icon) {
                    if (isInWishlist) {
                        icon.classList.remove('far', 'fa-heart');
                        icon.classList.add('fas', 'fa-heart');
                        btn.classList.add('active');
                    } else {
                        icon.classList.remove('fas', 'fa-heart');
                        icon.classList.add('far', 'fa-heart');
                        btn.classList.remove('active');
                    }
                }
            });
            
            // Actualizar botón en modal de producto si está abierto
            const modalWishlistBtn = document.getElementById('modalAddToWishlist');
            if (modalWishlistBtn && parseInt(modalWishlistBtn.dataset?.id) === productId) {
                const icon = modalWishlistBtn.querySelector('i');
                if (icon) {
                    if (isInWishlist) {
                        icon.classList.remove('far', 'fa-heart');
                        icon.classList.add('fas', 'fa-heart');
                        modalWishlistBtn.classList.remove('btn-outline');
                        modalWishlistBtn.classList.add('btn-primary');
                        modalWishlistBtn.innerHTML = '<i class="fas fa-heart"></i> En Favoritos';
                    } else {
                        icon.classList.remove('fas', 'fa-heart');
                        icon.classList.add('far', 'fa-heart');
                        modalWishlistBtn.classList.remove('btn-primary');
                        modalWishlistBtn.classList.add('btn-outline');
                        modalWishlistBtn.innerHTML = '<i class="far fa-heart"></i> Agregar a Favoritos';
                    }
                }
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
                            <button class="btn btn-primary add-to-cart" data-id="${productId}" aria-label="Agregar al carrito">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                            <button class="btn btn-secondary remove-wishlist" data-id="${productId}" aria-label="Eliminar de favoritos">
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
            
            // Animación especial para el modal de producto
            if (modal.id === 'productModal') {
                modal.classList.remove('closing');
                const container = modal.querySelector('.modal-container');
                if (container) {
                    container.style.animation = 'slideFromRight 0.5s ease';
                }
            }
        },
        
        close(modal) {
            if (!modal) return;
            
            // Si es el modal de producto, agregar animación de salida
            if (modal.id === 'productModal') {
                modal.classList.add('closing');
                const container = modal.querySelector('.modal-container');
                if (container) {
                    container.style.animation = 'slideOutRight 0.4s ease';
                }
                
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    modal.classList.remove('closing');
                }, 400);
            } else {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
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
                        if (modal.style.display === 'flex' || getComputedStyle(modal).display === 'flex') {
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
        }
    };

    // ===== SISTEMA DE PRODUCTOS (MODAL FULL-SCREEN) =====
    const ProductSystem = {
        init() {
            this.setupEventListeners();
        },
        
        openProductModal(productId) {
            const product = utils.getProductById(productId);
            if (!product || !elements.productModal) return;
            
            State.currentProductId = productId;
            
            // Generar thumbnails de la galería
            const thumbnails = product.images.map((img, index) => `
                <div class="gallery-thumb ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="${img}" alt="Vista ${index + 1} de ${product.name}">
                </div>
            `).join('');
            
            // Generar características
            const featuresHTML = product.features.map(feature => `
                <li>${feature}</li>
            `).join('');
            
            // Generar especificaciones
            const specsHTML = product.specs.map(spec => `
                <div class="spec-item">
                    <span class="spec-name">${spec.name}</span>
                    <span class="spec-value">${spec.value}</span>
                </div>
            `).join('');
            
            // Determinar estado del stock
            const stockStatus = product.stock > 10 ? 'Disponible' : 
                              product.stock > 5 ? 'Últimas unidades' : 
                              product.stock > 0 ? 'Stock limitado' : 'Agotado';
            const stockClass = product.stock > 10 ? 'has-text-success' : 
                              product.stock > 0 ? 'has-text-warning' : 'has-text-danger';
            
            let html = `
                <div class="modal-product-full">
                    <div class="modal-product-image-full">
                        <img src="${product.images[0]}" alt="${product.name}" id="mainProductImage" class="product-image-main">
                        <div class="modal-product-gallery">
                            ${thumbnails}
                        </div>
                    </div>
                    <div class="modal-product-info-full">
                        <h1>${product.name}</h1>
                        
                        <div class="modal-product-meta">
                            <span class="modal-product-category">${product.category}</span>
                            <div class="modal-product-rating">
                                <div class="stars">
                                    ${utils.getStarsHTML(product.rating)}
                                </div>
                                <span class="rating-count">${product.reviews} reseñas</span>
                            </div>
                        </div>
                        
                        <div class="modal-product-price-full">
                            ${product.formattedPrice}
                            ${product.oldPrice ? `<span class="modal-product-price-old">${product.oldPrice}</span>` : ''}
                        </div>
                        
                        <div class="modal-product-description-full">
                            <p>${product.description}</p>
                        </div>
                        
                        <div class="modal-product-description-full">
                            <h3><i class="fas fa-star"></i> Características Principales</h3>
                            <ul>
                                ${featuresHTML}
                            </ul>
                        </div>
                        
                        <div class="modal-product-specs-full">
                            <h3><i class="fas fa-ruler-combined"></i> Especificaciones Técnicas</h3>
                            <div class="specs-grid">
                                ${specsHTML}
                                <div class="spec-item">
                                    <span class="spec-name">Stock Disponible</span>
                                    <span class="spec-value ${stockClass}">
                                        ${product.stock} unidades (${stockStatus})
                                    </span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-name">Garantía</span>
                                    <span class="spec-value">24 meses</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="modal-product-actions-full">
                            <button class="btn btn-primary" id="modalAddToCart" data-id="${productId}">
                                <i class="fas fa-cart-plus"></i> Agregar al Carrito
                            </button>
                            <button class="btn ${State.wishlist.includes(productId) ? 'btn-primary' : 'btn-outline'}" 
                                    id="modalAddToWishlist" data-id="${productId}">
                                <i class="${State.wishlist.includes(productId) ? 'fas' : 'far'} fa-heart"></i> 
                                ${State.wishlist.includes(productId) ? 'En Favoritos' : 'Agregar a Favoritos'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            elements.productModal.querySelector('.modal-content').innerHTML = html;
            
            ModalSystem.open(elements.productModal);
            
            // Event listeners para la galería de imágenes
            this.setupGalleryEvents(product);
            
            // Event listeners para los botones del modal
            this.setupModalButtons(productId);
        },
        
        setupGalleryEvents(product) {
            const thumbnails = document.querySelectorAll('.gallery-thumb');
            const mainImage = document.getElementById('mainProductImage');
            
            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', (e) => {
                    const index = parseInt(e.currentTarget.dataset.index);
                    
                    // Actualizar imagen principal con efecto de transición
                    mainImage.style.opacity = '0';
                    setTimeout(() => {
                        mainImage.src = product.images[index];
                        mainImage.style.opacity = '1';
                    }, 200);
                    
                    // Actualizar thumbnails activos
                    thumbnails.forEach(t => t.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                });
            });
            
            // Efecto hover en la imagen principal
            if (mainImage) {
                mainImage.addEventListener('mouseenter', () => {
                    mainImage.style.transform = 'scale(1.05)';
                });
                
                mainImage.addEventListener('mouseleave', () => {
                    mainImage.style.transform = 'scale(1)';
                });
            }
        },
        
        setupModalButtons(productId) {
            const addToCartBtn = document.getElementById('modalAddToCart');
            const addToWishlistBtn = document.getElementById('modalAddToWishlist');
            const product = utils.getProductById(productId);
            
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', () => {
                    CartSystem.add(productId, 1);
                    
                    // Animación del botón
                    addToCartBtn.innerHTML = '<i class="fas fa-check"></i> Agregado';
                    addToCartBtn.style.background = 'var(--success)';
                    
                    setTimeout(() => {
                        addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Agregar al Carrito';
                        addToCartBtn.style.background = '';
                    }, 1500);
                });
            }
            
            if (addToWishlistBtn && product) {
                addToWishlistBtn.addEventListener('click', () => {
                    WishlistSystem.add(productId);
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
            this.setupActiveNav();
        },
        
        setupEventListeners() {
            // Menú hamburguesa
            if (elements.hamburgerBtn) {
                elements.hamburgerBtn.addEventListener('click', () => {
                    elements.navMenu.classList.toggle('active');
                    elements.hamburgerBtn.classList.toggle('active');
                    
                    // Animación de las barras
                    const bars = elements.hamburgerBtn.querySelectorAll('.bar');
                    if (elements.hamburgerBtn.classList.contains('active')) {
                        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                        bars[1].style.opacity = '0';
                        bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    } else {
                        bars[0].style.transform = 'none';
                        bars[1].style.opacity = '1';
                        bars[2].style.transform = 'none';
                    }
                });
            }
            
            // Cerrar menú al hacer clic en enlace
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    elements.navMenu.classList.remove('active');
                    elements.hamburgerBtn.classList.remove('active');
                    
                    // Restaurar barras
                    const bars = elements.hamburgerBtn.querySelectorAll('.bar');
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                });
            });
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
        },
        
        setupActiveNav() {
            // Actualizar enlace activo al hacer scroll
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            window.addEventListener('scroll', () => {
                let current = '';
                const scrollPosition = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
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
                    const emailInput = e.target.querySelector('input[type="email"]');
                    const email = emailInput.value.trim();
                    
                    // Validar email
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        utils.showToast('Por favor ingresa un email válido', 'error');
                        emailInput.focus();
                        return;
                    }
                    
                    // Simular suscripción
                    const submitBtn = e.target.querySelector('button[type="submit"]');
                    const originalText = submitBtn.innerHTML;
                    
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Suscribiendo...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        // En un caso real, aquí enviarías el email a tu servidor
                        utils.showToast('¡Gracias por suscribirte a Estilo Nórdico! Te hemos enviado un email de confirmación.', 'success');
                        elements.newsletterForm.reset();
                        
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 1500);
                });
            }
        }
    };

    // ===== SISTEMA DE BÚSQUEDA =====
    const SearchSystem = {
        init() {
            this.setupEventListeners();
        },
        
        setupEventListeners() {
            if (elements.searchBtn && elements.searchInput) {
                elements.searchBtn.addEventListener('click', () => this.performSearch());
                elements.searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.performSearch();
                    }
                });
            }
        },
        
        performSearch() {
            const searchTerm = elements.searchInput.value.trim().toLowerCase();
            
            if (!searchTerm) {
                utils.showToast('Por favor ingresa un término de búsqueda', 'error');
                elements.searchInput.focus();
                return;
            }
            
            // Buscar productos
            const results = [];
            for (const id in CONFIG.products) {
                const product = CONFIG.products[id];
                const searchFields = [
                    product.name,
                    product.category,
                    product.description,
                    ...product.features,
                    ...product.specs.map(spec => spec.value)
                ].join(' ').toLowerCase();
                
                if (searchFields.includes(searchTerm)) {
                    results.push(product);
                }
            }
            
            if (results.length === 0) {
                utils.showToast(`No se encontraron resultados para "${searchTerm}"`, 'error');
                return;
            }
            
            // Mostrar resultados
            utils.showToast(`Se encontraron ${results.length} productos`, 'success');
            
            // En un caso real, aquí redirigirías a una página de resultados o mostrarías un modal
            // Por ahora, simplemente hacemos scroll al primer resultado si está en la página
            if (results.length > 0) {
                const firstResult = results[0];
                const productCard = document.querySelector(`.product-card[data-id="${firstResult.id}"]`);
                
                if (productCard) {
                    productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Destacar temporalmente el producto
                    productCard.style.boxShadow = '0 0 0 3px var(--accent)';
                    setTimeout(() => {
                        productCard.style.boxShadow = '';
                    }, 2000);
                }
            }
            
            // Limpiar búsqueda
            elements.searchInput.value = '';
        }
    };

    // ===== INICIALIZACIÓN COMPLETA =====
    function initApp() {
        console.log('🚀 Inicializando Estilo Nórdico V6...');
        
        // Inicializar todos los sistemas
        CartSystem.init();
        WishlistSystem.init();
        ModalSystem.init();
        ProductSystem.init();
        NavigationSystem.init();
        NewsletterSystem.init();
        SearchSystem.init();
        
        // Actualizar iconos de wishlist en tarjetas
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
        
        // Agregar estilos para animaciones
        const style = document.createElement('style');
        style.textContent = `
            .pulse {
                animation: pulse 0.3s ease;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.3); }
                100% { transform: scale(1); }
            }
            
            .animate-pulse {
                animation: pulse 0.5s ease;
            }
            
            .product-image-main {
                transition: opacity 0.3s ease, transform 0.5s ease;
            }
            
            .has-text-success {
                color: var(--success) !important;
                font-weight: 700;
            }
            
            .has-text-warning {
                color: var(--warning) !important;
                font-weight: 700;
            }
            
            .has-text-danger {
                color: var(--danger) !important;
                font-weight: 700;
            }
        `;
        document.head.appendChild(style);
        
        console.log('✅ Sistema inicializado correctamente');
        console.log('📊 Estado inicial:', {
            carrito: State.cart.length + ' items',
            wishlist: State.wishlist.length + ' productos',
            productos: Object.keys(CONFIG.products).length
        });
    }

    // Iniciar la aplicación cuando el DOM esté listo
    initApp();
});
