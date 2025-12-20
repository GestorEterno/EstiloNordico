```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estilo Nórdico - Muebles Nórdicos</title>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪑</text></svg>">
</head>
<body>
    <!-- Header Compacto Rediseñado -->
    <header class="header">
        <div class="container">
            <!-- Primera Fila: Logo + Utilidades -->
            <div class="header-top">
                <a href="#" class="logo">ESTILO NÓRDICO</a>
                <div class="header-utils">
                    <!-- Buscador -->
                    <div class="search-container">
                        <input type="text" class="search-input" placeholder="Buscar productos...">
                        <button class="search-btn">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    
                    <!-- Iconos de Utilidad -->
                    <div class="utility-icons">
                        <button class="icon-btn" id="cartBtn">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="cart-count">0</span>
                        </button>
                        <button class="icon-btn" id="notificationBtn">
                            <i class="fas fa-bell"></i>
                            <span class="notification-count">0</span>
                        </button>
                        <button class="icon-btn" id="loginBtn" title="Iniciar Sesión">
                            <i class="fas fa-user"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Hamburger para Móvil -->
                <button class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
            
            <!-- Segunda Fila: Menú de Navegación -->
            <nav class="header-bottom">
                <ul class="nav-menu">
                    <li><a href="#inicio" class="nav-link active">Inicio</a></li>
                    <li><a href="#escritorios" class="nav-link">Escritorios</a></li>
                    <li><a href="#mesas" class="nav-link">Mesas</a></li>
                    <li><a href="#racks" class="nav-link">Racks TV</a></li>
                    <li><a href="#mesitas" class="nav-link">Mesitas</a></li>
                    <li><a href="#estanterias" class="nav-link">Estanterías</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero con Carrusel Horizontal - Sin Espacios Innecesarios -->
    <section id="inicio" class="hero">
        <div class="carousel-container">
            <div class="carousel-track">
                <div class="carousel-slide active">
                    <div class="slide-content">
                        <h1>Muebles <span>Nórdicos</span></h1>
                        <p>Calidad artesanal en cada pieza</p>
                        <a href="#escritorios" class="btn">Ver Colección</a>
                    </div>
                    <div class="slide-image" style="background-image: url('imagenes/escritorios/160/k3escritorio01.jpg')"></div>
                </div>
                <div class="carousel-slide">
                    <div class="slide-content">
                        <h1>Diseño <span>Minimalista</span></h1>
                        <p>Elegancia y funcionalidad</p>
                        <a href="#mesas" class="btn">Ver Mesas</a>
                    </div>
                    <div class="slide-image" style="background-image: url('imagenes/mesas/k3/k3mesa01.jpg')"></div>
                </div>
                <div class="carousel-slide">
                    <div class="slide-content">
                        <h1>Artesanía en <span>Madera</span></h1>
                        <p>Materiales premium y durabilidad</p>
                        <a href="#racks" class="btn">Ver Racks</a>
                    </div>
                    <div class="slide-image" style="background-image: url('imagenes/racks/k2/k2Rack01.jpg')"></div>
                </div>
            </div>
            <button class="carousel-btn prev"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-btn next"><i class="fas fa-chevron-right"></i></button>
            <div class="carousel-dots">
                <span class="dot active" data-index="0"></span>
                <span class="dot" data-index="1"></span>
                <span class="dot" data-index="2"></span>
            </div>
        </div>
    </section>

    <!-- Sección Escritorios -->
    <section id="escritorios" class="products-section">
        <div class="container">
            <h2 class="section-title">Escritorios <span>Nórdicos</span></h2>
            <p class="section-subtitle">Base de hierro y madera de eucalipto</p>
            
            <div class="products-carousel-container">
                <button class="carousel-arrow prev-arrow">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <div class="products-carousel-wrapper">
                    <div class="products-carousel-track">
                        <!-- Escritorio 1.20m -->
                        <div class="product-card" data-id="1">
                            <div class="product-image">
                                <img src="imagenes/escritorios/120/k1escritorio01.png" alt="Escritorio 1.20m" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Escritorio 1.20m</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$120.000</div>
                                <button class="btn btn-view" data-id="1">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Escritorio 1.30m -->
                        <div class="product-card" data-id="2">
                            <div class="product-image">
                                <img src="imagenes/escritorios/130/k2escritorio01.png" alt="Escritorio 1.30m" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Escritorio 1.30m</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$150.000</div>
                                <button class="btn btn-view" data-id="2">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Escritorio 1.60m -->
                        <div class="product-card" data-id="3">
                            <div class="product-image">
                                <img src="imagenes/escritorios/160/k3escritorio01.jpg" alt="Escritorio 1.60m" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Escritorio 1.60m</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$200.000</div>
                                <button class="btn btn-view" data-id="3">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Escritorio 2.00m -->
                        <div class="product-card" data-id="4">
                            <div class="product-image">
                                <img src="imagenes/escritorios/200/k4escritorio01.jpg" alt="Escritorio 2.00m" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Escritorio 2.00m</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$250.000</div>
                                <button class="btn btn-view" data-id="4">Ver Producto</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="carousel-arrow next-arrow">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div class="carousel-dots-container">
                <span class="carousel-dot active" data-index="0"></span>
                <span class="carousel-dot" data-index="1"></span>
                <span class="carousel-dot" data-index="2"></span>
                <span class="carousel-dot" data-index="3"></span>
            </div>
        </div>
    </section>

    <!-- Sección Mesas -->
    <section id="mesas" class="products-section">
        <div class="container">
            <h2 class="section-title">Mesas <span>Nórdicas</span></h2>
            <p class="section-subtitle">Base de hierro y madera de eucalipto</p>
            
            <div class="products-carousel-container">
                <button class="carousel-arrow prev-arrow">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <div class="products-carousel-wrapper">
                    <div class="products-carousel-track">
                        <!-- Mesa Modelo Trineo -->
                        <div class="product-card" data-id="5">
                            <div class="product-image">
                                <img src="imagenes/mesas/k1/k1mesa01.jpg" alt="Mesa Modelo Trineo" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Mesa Modelo Trineo</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$200.000</div>
                                <button class="btn btn-view" data-id="5">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Mesa Modelo U -->
                        <div class="product-card" data-id="6">
                            <div class="product-image">
                                <img src="imagenes/mesas/k2/k2mesa01.jpg" alt="Mesa Modelo U" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Mesa Modelo U</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$220.000</div>
                                <button class="btn btn-view" data-id="6">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Mesa Modelo X -->
                        <div class="product-card" data-id="7">
                            <div class="product-image">
                                <img src="imagenes/mesas/k3/k3mesa01.jpg" alt="Mesa Modelo X" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Mesa Modelo X</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$250.000</div>
                                <button class="btn btn-view" data-id="7">Ver Producto</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="carousel-arrow next-arrow">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div class="carousel-dots-container">
                <span class="carousel-dot active" data-index="0"></span>
                <span class="carousel-dot" data-index="1"></span>
                <span class="carousel-dot" data-index="2"></span>
            </div>
        </div>
    </section>

    <!-- Sección Racks TV -->
    <section id="racks" class="products-section">
        <div class="container">
            <h2 class="section-title">Racks TV <span>Nórdicos</span></h2>
            <p class="section-subtitle">Base de hierro y madera de eucalipto</p>
            
            <div class="products-carousel-container">
                <button class="carousel-arrow prev-arrow">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <div class="products-carousel-wrapper">
                    <div class="products-carousel-track">
                        <!-- Rack K1 -->
                        <div class="product-card" data-id="8">
                            <div class="product-image">
                                <img src="imagenes/racks/k1/k1Rack01.jpg" alt="Rack TV Nórdico K1" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Rack TV Nórdico K1</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$120.000</div>
                                <button class="btn btn-view" data-id="8">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Rack K2 -->
                        <div class="product-card" data-id="9">
                            <div class="product-image">
                                <img src="imagenes/racks/k2/k2Rack01.jpg" alt="Rack TV Nórdico K2" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Rack TV Nórdico K2</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$150.000</div>
                                <button class="btn btn-view" data-id="9">Ver Producto</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="carousel-arrow next-arrow">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div class="carousel-dots-container">
                <span class="carousel-dot active" data-index="0"></span>
                <span class="carousel-dot" data-index="1"></span>
            </div>
        </div>
    </section>

    <!-- Sección Mesitas Industriales -->
    <section id="mesitas" class="products-section">
        <div class="container">
            <h2 class="section-title">Mesitas <span>Nórdicas</span></h2>
            <p class="section-subtitle">Base de hierro y madera de eucalipto</p>
            
            <div class="products-carousel-container">
                <button class="carousel-arrow prev-arrow">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <div class="products-carousel-wrapper">
                    <div class="products-carousel-track">
                        <!-- Mesita K1 -->
                        <div class="product-card" data-id="10">
                            <div class="product-image">
                                <img src="imagenes/mesitas/k1/k1mesita01.jpg" alt="Mesita Nórdica K1" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Mesita Nórdica K1</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$60.000</div>
                                <button class="btn btn-view" data-id="10">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Mesita K2 -->
                        <div class="product-card" data-id="11">
                            <div class="product-image">
                                <img src="imagenes/mesitas/k2/k2mesita01.jpg" alt="Mesita Nórdica K2" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Mesita Nórdica K2</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$70.000</div>
                                <button class="btn btn-view" data-id="11">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Mesita K3 -->
                        <div class="product-card" data-id="12">
                            <div class="product-image">
                                <img src="imagenes/mesitas/k3/k3mesita01.jpg" alt="Mesita Nórdica K3" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Mesita Nórdica K3</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$80.000</div>
                                <button class="btn btn-view" data-id="12">Ver Producto</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="carousel-arrow next-arrow">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div class="carousel-dots-container">
                <span class="carousel-dot active" data-index="0"></span>
                <span class="carousel-dot" data-index="1"></span>
                <span class="carousel-dot" data-index="2"></span>
            </div>
        </div>
    </section>

    <!-- Sección Estanterías -->
    <section id="estanterias" class="products-section">
        <div class="container">
            <h2 class="section-title">Estanterías <span>Nórdicas</span></h2>
            <p class="section-subtitle">Base de hierro y madera de eucalipto</p>
            
            <div class="products-carousel-container">
                <button class="carousel-arrow prev-arrow">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <div class="products-carousel-wrapper">
                    <div class="products-carousel-track">
                        <!-- Estantería K1 -->
                        <div class="product-card" data-id="13">
                            <div class="product-image">
                                <img src="imagenes/estanterias/k1/k1estanteria01.jpg" alt="Estantería Nórdica K1" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Estantería Nórdica K1</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$250.000</div>
                                <button class="btn btn-view" data-id="13">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Estantería K2 -->
                        <div class="product-card" data-id="14">
                            <div class="product-image">
                                <img src="imagenes/estanterias/k2/k2estanteria01.jpg" alt="Estantería Nórdica K2" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Estantería Nórdica K2</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$60.000</div>
                                <button class="btn btn-view" data-id="14">Ver Producto</button>
                            </div>
                        </div>
                        
                        <!-- Estantería K3 -->
                        <div class="product-card" data-id="15">
                            <div class="product-image">
                                <img src="imagenes/estanterias/k3/k3estanteria01.jpg" alt="Estantería Nórdica K3" loading="lazy">
                            </div>
                            <div class="product-info">
                                <h3>Estantería Nórdica K3</h3>
                                <p>Diseño nórdico minimalista</p>
                                <div class="price">$80.000</div>
                                <button class="btn btn-view" data-id="15">Ver Producto</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="carousel-arrow next-arrow">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div class="carousel-dots-container">
                <span class="carousel-dot active" data-index="0"></span>
                <span class="carousel-dot" data-index="1"></span>
                <span class="carousel-dot" data-index="2"></span>
            </div>
        </div>
    </section>

    <!-- Modal de Producto -->
    <div class="modal-overlay" id="productModal">
        <div class="modal-container">
            <button class="modal-close">&times;</button>
            <div class="modal-content">
                <div class="product-gallery">
                    <div class="main-image">
                        <img id="modalImage" src="" alt="">
                    </div>
                    <div class="image-thumbs">
                        <img class="thumb active" src="" alt="">
                        <img class="thumb" src="" alt="">
                        <img class="thumb" src="" alt="">
                    </div>
                </div>
                <div class="product-details">
                    <h2 id="modalTitle"></h2>
                    <div class="product-category" id="modalCategory"></div>
                    <div class="product-price" id="modalPrice"></div>
                    <div class="product-description" id="modalDescription"></div>
                    
                    <div class="product-specs">
                        <h4>Especificaciones</h4>
                        <ul id="modalSpecs"></ul>
                    </div>
                    
                    <button class="btn btn-whatsapp" id="whatsappBtn">
                        <i class="fab fa-whatsapp"></i> Consultar por WhatsApp
                    </button>
                    
                    <button class="btn btn-close-modal">Seguir Explorando</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>ESTILO NÓRDICO</h3>
                    <p>Muebles nórdicos de calidad</p>
                </div>
                <div class="footer-social">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Estilo Nórdico. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="index.js"></script>
</body>
</html>
```

```css
/* style.css - ESTILO NÓRDICO - VERSIÓN CON HEADER REDISEÑADO PERFECTO Y CARRUSEL CIRCULAR */
:root {
    --primary: #2c3e50;
    --primary-dark: #1a252f;
    --accent: #e67e22;
    --accent-dark: #d35400;
    --light: #f8f9fa;
    --dark: #2c3e50;
    --gray: #7f8c8d;
    --light-gray: #ecf0f1;
    --border-radius: 8px;
    --shadow: 0 5px 15px rgba(0,0,0,0.1);
    --transition: all 0.3s ease;
}

/* RESET Y BASE */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--dark);
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    font-size: 1rem;
    text-align: center;
}

.btn:hover {
    background: var(--accent-dark);
    transform: translateY(-2px);
}

.text-center {
    text-align: center;
}

/* ===== HEADER COMPACTO REDISEÑADO ===== */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 2px 15px rgba(0,0,0,0.08);
    z-index: 1000;
    padding: 8px 0 0 0;
}

/* Primera Fila: Logo + Utilidades */
.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--light-gray);
}

/* Logo 15% más pequeño */
.logo {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.275rem;
    color: var(--primary);
    text-decoration: none;
    flex-shrink: 0;
    transition: var(--transition);
}

.logo:hover {
    color: var(--accent);
}

/* Utilidades del Header */
.header-utils {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
    justify-content: flex-end;
    margin-left: 20px;
}

/* Buscador Compacto */
.search-container {
    display: flex;
    background: var(--light-gray);
    border-radius: 20px;
    overflow: hidden;
    padding: 0;
    flex: 1;
    max-width: 300px;
    transition: var(--transition);
    border: 1px solid transparent;
}

.search-container:focus-within {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(230, 126, 34, 0.1);
}

.search-input {
    flex: 1;
    padding: 8px 15px;
    border: none;
    background: transparent;
    font-size: 0.9rem;
    color: var(--dark);
    outline: none;
    font-family: 'Open Sans', sans-serif;
}

.search-input::placeholder {
    color: var(--gray);
    opacity: 0.7;
}

.search-btn {
    background: var(--accent);
    color: white;
    border: none;
    padding: 0 15px;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
}

.search-btn:hover {
    background: var(--accent-dark);
}

/* Iconos de Utilidad */
.utility-icons {
    display: flex;
    gap: 12px;
    align-items: center;
}

.icon-btn {
    position: relative;
    background: none;
    border: none;
    color: var(--primary);
    font-size: 1.1rem;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.icon-btn:hover {
    background: var(--light-gray);
    color: var(--accent);
    transform: translateY(-2px);
}

.cart-count, .notification-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background: var(--accent);
    color: white;
    font-size: 0.7rem;
    min-width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    pointer-events: none;
}

/* Hamburger Button */
.hamburger {
    display: none;
    cursor: pointer;
    background: none;
    border: none;
    padding: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.bar {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--dark);
    margin: 3px 0;
    transition: var(--transition);
}

/* Segunda Fila: Menú de Navegación */
.header-bottom {
    padding: 8px 0;
    transition: var(--transition);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 25px;
    justify-content: center;
    margin: 0;
    padding: 0;
}

.nav-link {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    position: relative;
    padding: 5px 0;
    font-size: 0.85rem;
    transition: var(--transition);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-link:hover,
.nav-link.active {
    color: var(--accent);
}

/* ===== HERO SIN ESPACIOS INNECESARIOS ===== */
.hero {
    height: calc(100vh - 90px);
    min-height: 500px;
    margin-top: 90px;
    position: relative;
    overflow: hidden;
}

.carousel-container {
    position: relative;
    height: 100%;
    width: 100%;
}

.carousel-track {
    display: flex;
    height: 100%;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
    min-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}

.slide-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: 1;
}

.slide-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
}

.slide-content {
    position: relative;
    z-index: 2;
    color: white;
    padding: 0 40px;
    max-width: 600px;
}

.slide-content h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    line-height: 1.2;
}

.slide-content h1 span {
    color: var(--accent);
}

.slide-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.9);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
    color: var(--primary);
    cursor: pointer;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.carousel-btn:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
}

.prev {
    left: 30px;
}

.next {
    right: 30px;
}

.carousel-dots {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 3;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    cursor: pointer;
    transition: var(--transition);
}

.dot.active {
    background: var(--accent);
    transform: scale(1.2);
}

/* ===== SECCIONES DE PRODUCTOS ===== */
.products-section {
    padding: 80px 0;
    background: var(--light);
}

.products-section:nth-child(even) {
    background: white;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.section-title span {
    color: var(--accent);
}

.section-subtitle {
    text-align: center;
    color: var(--gray);
    margin-bottom: 40px;
    font-size: 1.1rem;
}

/* ===== CARRUSEL DE PRODUCTOS - CIRCULAR INFINITO ===== */
.products-carousel-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0 auto 40px;
    max-width: 1200px;
}

.products-carousel-wrapper {
    overflow: hidden;
    width: 100%;
    border-radius: var(--border-radius);
    padding: 10px 5px;
    margin: 0 -5px;
}

.products-carousel-track {
    display: flex;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 30px;
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000px;
    transform-style: preserve-3d;
}

.carousel-arrow {
    background: white;
    border: 2px solid var(--light-gray);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    flex-shrink: 0;
    font-size: 1.2rem;
    color: var(--primary);
    box-shadow: var(--shadow);
    z-index: 10;
}

.carousel-arrow:hover:not(:disabled) {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
    transform: scale(1.1);
}

.carousel-arrow:disabled {
    opacity: 0.7;
    cursor: pointer;
    transform: none;
}

.carousel-arrow:disabled:hover {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
    transform: scale(1.1);
}

/* ===== TARJETAS DE PRODUCTO ===== */
.product-card {
    flex: 0 0 auto;
    min-width: calc(33.333% - 20px);
    background: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.product-image {
    height: 250px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.product-info {
    padding: 25px;
}

.product-info h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
    color: var(--primary);
}

.product-info p {
    color: var(--gray);
    margin-bottom: 5px;
    font-size: 0.95rem;
}

.price {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 15px;
}

.btn-view {
    width: 100%;
    background: var(--primary);
    color: white;
    border: none;
    cursor: pointer;
}

.btn-view:hover {
    background: var(--primary-dark);
}

.btn-load-more {
    margin-top: 20px;
    background: var(--primary);
}

.btn-load-more:hover {
    background: var(--primary-dark);
}

/* ===== PUNTOS INDICADORES DEL CARRUSEL ===== */
.carousel-dots-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    padding-bottom: 20px;
}

.carousel-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--light-gray);
    cursor: pointer;
    transition: var(--transition);
}

.carousel-dot.active {
    background: var(--accent);
    transform: scale(1.2);
}

.carousel-dot:hover {
    background: var(--accent);
    transform: scale(1.1);
}

/* ===== MODAL PERFECTO - PANTALLA COMPLETA ===== */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.95);
    z-index: 2000;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    animation: fadeIn 0.3s ease;
    overflow: hidden;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-container {
    background: white;
    border-radius: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow-y: auto;
    position: relative;
    animation: slideUp 0.4s ease;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-close {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255,255,255,0.9);
    border: none;
    font-size: 2rem;
    color: var(--primary);
    cursor: pointer;
    z-index: 2010;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.modal-close:hover {
    background: white;
    color: var(--accent);
    transform: rotate(90deg) scale(1.1);
}

.modal-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex: 1;
    min-height: 100vh;
    height: 100%;
}

.product-gallery {
    padding: 40px;
    background: var(--light-gray);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow-y: auto;
}

.main-image {
    width: 100%;
    height: 60vh;
    min-height: 400px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: var(--border-radius);
    overflow: hidden;
}

.main-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.image-thumbs {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
}

.thumb {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: var(--transition);
}

.thumb.active,
.thumb:hover {
    border-color: var(--accent);
    transform: scale(1.05);
}

.product-details {
    padding: 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
}

.product-details h2 {
    font-size: 2.2rem;
    margin-bottom: 10px;
    color: var(--primary);
}

.product-category {
    color: var(--accent);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
    font-size: 0.9rem;
}

.product-details .product-price {
    font-size: 1.8rem;
    margin-bottom: 25px;
    color: var(--accent);
    font-weight: 600;
}

.product-details .product-description {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 30px;
    color: var(--dark);
}

.product-specs {
    margin-bottom: 30px;
}

.product-specs h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: var(--primary);
}

.product-specs ul {
    list-style: none;
}

.product-specs li {
    padding: 10px 0;
    border-bottom: 1px solid var(--light-gray);
    display: flex;
    justify-content: space-between;
}

.product-specs li:last-child {
    border-bottom: none;
}

.product-specs li span:first-child {
    font-weight: 600;
    color: var(--primary);
}

.btn-whatsapp {
    background: #25D366;
    margin-bottom: 15px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.btn-whatsapp:hover {
    background: #128C7E;
}

.btn-close-modal {
    background: var(--primary);
    color: white;
    border: none;
    cursor: pointer;
}

.btn-close-modal:hover {
    background: var(--primary-dark);
}

/* ===== FOOTER ===== */
.footer {
    background: var(--primary-dark);
    color: white;
    padding: 40px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.footer-brand h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.footer-social {
    display: flex;
    gap: 15px;
}

.footer-social a {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    transition: var(--transition);
    text-decoration: none;
}

.footer-social a:hover {
    background: var(--accent);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1200px) {
    .product-card {
        min-width: calc(33.333% - 20px);
    }
}

@media (max-width: 992px) {
    .header-utils {
        gap: 15px;
    }
    
    .search-container {
        max-width: 250px;
    }
    
    .utility-icons {
        gap: 8px;
    }
    
    .icon-btn {
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
    
    /* Tooltip para botón de login en móvil */
    .icon-btn[title]:hover::after {
        content: attr(title);
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary);
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.75rem;
        white-space: nowrap;
        z-index: 1000;
    }
    
    .products-carousel-container {
        gap: 10px;
    }
    
    .carousel-arrow {
        width: 45px;
        height: 45px;
    }
    
    .product-card {
        min-width: calc(50% - 15px);
    }
    
    .modal-content {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
    
    .product-gallery {
        height: 50vh;
        padding: 20px;
    }
    
    .product-details {
        height: 50vh;
        padding: 20px;
    }
    
    .main-image {
        height: 40vh;
        min-height: 300px;
    }
}

@media (max-width: 768px) {
    .header {
        padding: 5px 0 0 0;
    }
    
    .header-top {
        padding-bottom: 5px;
    }
    
    .header-utils {
        display: none;
    }
    
    .hamburger {
        display: flex;
        order: 2;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    .logo {
        order: 1;
        font-size: 1.2rem;
    }
    
    .header-bottom {
        position: fixed;
        top: 65px;
        left: -100%;
        width: 100%;
        background: white;
        padding: 0;
        transition: var(--transition);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        z-index: 999;
    }
    
    .header-bottom.active {
        left: 0;
    }
    
    .nav-menu {
        flex-direction: column;
        gap: 0;
        padding: 20px;
    }
    
    .nav-link {
        padding: 12px 0;
        font-size: 0.9rem;
        border-bottom: 1px solid var(--light-gray);
    }
    
    .nav-link:last-child {
        border-bottom: none;
    }
    
    .nav-link::after {
        display: none;
    }
    
    /* Ajustar hero para móvil */
    .hero {
        height: calc(100vh - 65px);
        margin-top: 65px;
        min-height: 400px;
    }
    
    .slide-content h1 {
        font-size: 2.5rem;
    }
    
    .carousel-btn {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
    
    .prev {
        left: 15px;
    }
    
    .next {
        right: 15px;
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }
    
    .product-card {
        min-width: calc(100% - 10px);
    }
    
    .carousel-arrow {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
    
    .modal-container {
        max-height: 100vh;
    }
    
    .modal-content {
        grid-template-rows: auto 1fr;
    }
    
    .product-gallery {
        height: auto;
        max-height: 50vh;
    }
    
    .product-details {
        height: auto;
        max-height: 50vh;
    }
    
    .main-image {
        height: 35vh;
        min-height: 250px;
    }
}

@media (max-width: 480px) {
    .logo {
        font-size: 1.1rem;
    }
    
    .hero {
        min-height: 350px;
    }
    
    .slide-content h1 {
        font-size: 2rem;
    }
    
    .slide-content p {
        font-size: 1rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .modal-container {
        padding: 0;
    }
    
    .modal-content {
        max-height: 100vh;
    }
    
    .product-gallery,
    .product-details {
        padding: 15px;
    }
    
    .main-image {
        height: 30vh;
        min-height: 200px;
    }
    
    .thumb {
        width: 50px;
        height: 50px;
    }
    
    .modal-close {
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
    }
    
    .carousel-arrow {
        width: 35px;
        height: 35px;
        font-size: 0.9rem;
    }
}
```

```javascript
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
```
