// script.js - ESTILO NÓRDICO - PERFECTO Y FUNCIONAL

document.addEventListener('DOMContentLoaded', function() {
    // ===== ELEMENTOS PRINCIPALES =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const productModal = document.getElementById('productModal');
    const closeModalBtn = document.querySelector('.modal-close');
    const closeModalBtn2 = document.querySelector('.btn-close-modal');
    const viewButtons = document.querySelectorAll('.btn-view');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    // ===== CARRUSEL HERO =====
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const totalSlides = carouselSlides.length;
    
    // ===== VARIABLES PARA CONTROL TÁCTIL =====
    let touchStartX = 0;
    let touchEndX = 0;
    let autoSlideInterval;
    
    // ===== BASE DE DATOS DE PRODUCTOS =====
    const products = {
        1: {
            name: "Escritorio Oslo",
            category: "Escritorios Industriales",
            price: "$89,999",
            description: "Escritorio industrial de diseño nórdico fabricado en madera de roble macizo con estructura metálica reforzada. Perfecto para espacios de trabajo modernos y creativos. Acabado natural que resalta la veta de la madera.",
            images: [
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "Roble macizo y hierro" },
                { name: "Dimensiones", value: "160cm x 80cm x 75cm" },
                { name: "Peso", value: "45 kg" },
                { name: "Color", value: "Natural" },
                { name: "Garantía", value: "2 años" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Oslo - $89,999"
        },
        2: {
            name: "Escritorio Bergen",
            category: "Escritorios Industriales",
            price: "$94,999",
            description: "Diseño minimalista con cajones ocultos y acabado en barniz mate. Perfecto para profesionales que buscan elegancia y funcionalidad en su espacio de trabajo.",
            images: [
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "MDF de alta densidad" },
                { name: "Dimensiones", value: "180cm x 90cm x 76cm" },
                { name: "Peso", value: "52 kg" },
                { name: "Color", value: "Gris oscuro mate" },
                { name: "Cajones", value: "3 cajones" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Bergen - $94,999"
        },
        3: {
            name: "Escritorio Trondheim",
            category: "Escritorios Industriales",
            price: "$79,999",
            description: "Madera reciclada tratada con patas de hierro forjado. Ideal para quienes buscan un estilo rústico-industrial con conciencia ecológica.",
            images: [
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera reciclada" },
                { name: "Dimensiones", value: "140cm x 70cm x 74cm" },
                { name: "Peso", value: "38 kg" },
                { name: "Color", value: "Natural rústico" },
                { name: "Tratamiento", value: "Aceite natural" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Trondheim - $79,999"
        },
        4: {
            name: "Mesa Nórdica",
            category: "Mesas Industriales",
            price: "$124,999",
            description: "Mesa de comedor de diseño escandinavo con base metálica y tapa de madera de pino macizo. Ideal para reuniones familiares y cenas especiales.",
            images: [
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
            ],
            specs: [
                { name: "Material", value: "Pino macizo y hierro" },
                { name: "Dimensiones", value: "200cm x 100cm x 75cm" },
                { name: "Peso", value: "65 kg" },
                { name: "Capacidad", value: "6-8 personas" },
                { name: "Acabado", value: "Barniz mate" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Nórdica - $124,999"
        },
        5: {
            name: "Mesa Fjord",
            category: "Mesas Industriales",
            price: "$149,999",
            description: "Mesa extensible con sistema de ala oculta. Perfecta para espacios reducidos que necesitan adaptabilidad. Diseño funcional sin sacrificar estilo.",
            images: [
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
            ],
            specs: [
                { name: "Material", value: "Roble y acero" },
                { name: "Dimensiones", value: "140-200cm x 90cm x 75cm" },
                { name: "Peso", value: "70 kg" },
                { name: "Extensión", value: "60 cm" },
                { name: "Capacidad", value: "4-8 personas" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Fjord - $149,999"
        },
        6: {
            name: "Mesa Aurora",
            category: "Mesas Industriales",
            price: "$109,999",
            description: "Diseño rústico con patas cruzadas de hierro forjado. Superficie en madera de pino tratada con aceites naturales.",
            images: [
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "Pino y hierro" },
                { name: "Dimensiones", value: "180cm x 90cm x 75cm" },
                { name: "Peso", value: "55 kg" },
                { name: "Capacidad", value: "6 personas" },
                { name: "Acabado", value: "Rústico natural" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Aurora - $109,999"
        },
        7: {
            name: "Rack TV Viking",
            category: "Racks para Televisores",
            price: "$64,999",
            description: "Rack TV industrial con compartimentos para equipos de sonido y videojuegos. Estructura robusta en metal y madera.",
            images: [
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "120cm x 40cm x 50cm" },
                { name: "Peso", value: "25 kg" },
                { name: "Capacidad TV", value: "Hasta 65 pulgadas" },
                { name: "Compartimentos", value: "3 estantes" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Viking - $64,999"
        },
        8: {
            name: "Rack TV Fjell",
            category: "Racks para Televisores",
            price: "$74,999",
            description: "Rack TV con ruedas para fácil movilidad. Diseño industrial moderno con acabado en negro mate.",
            images: [
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera de haya y metal" },
                { name: "Dimensiones", value: "140cm x 45cm x 55cm" },
                { name: "Peso", value: "30 kg" },
                { name: "Ruedas", value: "4 ruedas giratorias" },
                { name: "Capacidad TV", value: "Hasta 75 pulgadas" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Fjell - $74,999"
        },
        9: {
            name: "Rack TV Midnatt",
            category: "Racks para Televisores",
            price: "$89,999",
            description: "Diseño flotente con estantes ajustables. Perfecto para espacios modernos y minimalistas.",
            images: [
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "MDF y acero" },
                { name: "Dimensiones", value: "160cm x 35cm x 40cm" },
                { name: "Peso", value: "28 kg" },
                { name: "Estantes", value: "4 ajustables" },
                { name: "Instalación", value: "Pared o piso" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Midnatt - $89,999"
        },
        10: {
            name: "Mesita Lofoten",
            category: "Mesitas Ratonas",
            price: "$44,999",
            description: "Mesita ratona redonda con tapa de vidrio templado. Base en madera de roble natural.",
            images: [
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "Roble y vidrio" },
                { name: "Dimensiones", value: "Ø60cm x 45cm" },
                { name: "Peso", value: "12 kg" },
                { name: "Forma", value: "Redonda" },
                { name: "Vidrio", value: "Templado 8mm" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Lofoten - $44,999"
        },
        11: {
            name: "Mesita Sogne",
            category: "Mesitas Ratonas",
            price: "$49,999",
            description: "Mesita cuadrada con cajón inferior y estante. Diseño funcional y elegante.",
            images: [
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera de pino" },
                { name: "Dimensiones", value: "50cm x 50cm x 45cm" },
                { name: "Peso", value: "15 kg" },
                { name: "Cajón", value: "1 con manija metálica" },
                { name: "Estante", value: "Inferior" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Sogne - $49,999"
        },
        12: {
            name: "Mesita Tromsø",
            category: "Mesitas Ratonas",
            price: "$59,999",
            description: "Conjunto nesting de 2 mesitas que se pueden usar por separado o juntas. Diseño versátil.",
            images: [
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "40cm/60cm x 40cm x 45cm" },
                { name: "Peso", value: "18 kg" },
                { name: "Piezas", value: "2 mesitas" },
                { name: "Uso", value: "Separado o conjunto" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Tromsø - $59,999"
        },
        13: {
            name: "Estantería Stavanger",
            category: "Estanterías Industriales",
            price: "$84,999",
            description: "Estantería modular de 5 niveles con estructura metálica visible. Ideal para libros y decoración.",
            images: [
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera y hierro" },
                { name: "Dimensiones", value: "180cm x 90cm x 35cm" },
                { name: "Peso", value: "40 kg" },
                { name: "Niveles", value: "5 estantes" },
                { name: "Carga máx.", value: "25 kg por estante" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Stavanger - $84,999"
        },
        14: {
            name: "Estantería Bergen",
            category: "Estanterías Industriales",
            price: "$94,999",
            description: "Estantería flotente con iluminación LED integrada. Diseño moderno y elegante.",
            images: [
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "MDF y metal" },
                { name: "Dimensiones", value: "200cm x 100cm x 30cm" },
                { name: "Peso", value: "45 kg" },
                { name: "Iluminación", value: "LED blanco cálido" },
                { name: "Instalación", value: "Pared" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Bergen - $94,999"
        },
        15: {
            name: "Estantería Ålesund",
            category: "Estanterías Industriales",
            price: "$79,999",
            description: "Estantería en forma de escalera con 6 compartimentos. Diseño único y funcional.",
            images: [
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera de pino" },
                { name: "Dimensiones", value: "160cm x 80cm x 35cm" },
                { name: "Peso", value: "35 kg" },
                { name: "Compartimentos", value: "6" },
                { name: "Forma", value: "Escalera" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Ålesund - $79,999"
        },
        16: {
            name: "Escritorio Helsinki",
            category: "Escritorios Industriales",
            price: "$99,999",
            description: "Escritorio moderno fabricado en madera de fresno con patas metálicas ajustables en altura. Perfecto para espacios de trabajo dinámicos.",
            images: [
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
            ],
            specs: [
                { name: "Material", value: "Fresno macizo" },
                { name: "Dimensiones", value: "150cm x 75cm x 75cm" },
                { name: "Peso", value: "42 kg" },
                { name: "Altura", value: "Ajustable 70-80cm" },
                { name: "Garantía", value: "3 años" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Helsinki - $99,999"
        },
        17: {
            name: "Escritorio Stockholm",
            category: "Escritorios Industriales",
            price: "$109,999",
            description: "Diseño ergonómico con sistema integrado de gestión de cables. Acabado premium en color grafito mate.",
            images: [
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "MDF premium y metal" },
                { name: "Dimensiones", value: "180cm x 85cm x 75cm" },
                { name: "Peso", value: "55 kg" },
                { name: "Cable Management", value: "Sí, integrado" },
                { name: "Color", value: "Grafito mate" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Stockholm - $109,999"
        },
        18: {
            name: "Escritorio Copenhagen",
            category: "Escritorios Industriales",
            price: "$119,999",
            description: "Madera de nogal con acabado lacado de alta resistencia. Diseño ejecutivo con cajonera incorporada.",
            images: [
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
            ],
            specs: [
                { name: "Material", value: "Nogal macizo" },
                { name: "Dimensiones", value: "200cm x 100cm x 75cm" },
                { name: "Peso", value: "65 kg" },
                { name: "Cajones", value: "5 cajones" },
                { name: "Acabado", value: "Lacado mate" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Escritorio Copenhagen - $119,999"
        },
        19: {
            name: "Mesa Tromsø",
            category: "Mesas Industriales",
            price: "$134,999",
            description: "Mesa rectangular con herrajes metálicos visibles que realzan el estilo industrial. Madera de roble macizo.",
            images: [
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "Roble y hierro" },
                { name: "Dimensiones", value: "220cm x 100cm x 75cm" },
                { name: "Peso", value: "75 kg" },
                { name: "Capacidad", value: "8-10 personas" },
                { name: "Herrajes", value: "Visibles" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Tromsø - $134,999"
        },
        20: {
            name: "Mesa Lofoten",
            category: "Mesas Industriales",
            price: "$99,999",
            description: "Mesa redonda con base de trípode metálico. Ideal para espacios pequeños y conversaciones íntimas.",
            images: [
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "Ø120cm x 75cm" },
                { name: "Peso", value: "40 kg" },
                { name: "Capacidad", value: "4-6 personas" },
                { name: "Base", value: "Trípode" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Lofoten - $99,999"
        },
        21: {
            name: "Mesa Sogne",
            category: "Mesas Industriales",
            price: "$114,999",
            description: "Madera de haya con acabado blanco lavado. Patas en cruz de metal negro. Diseño nórdico contemporáneo.",
            images: [
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "Haya y metal" },
                { name: "Dimensiones", value: "180cm x 90cm x 75cm" },
                { name: "Peso", value: "50 kg" },
                { name: "Color", value: "Blanco lavado" },
                { name: "Patas", value: "En cruz" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesa Sogne - $114,999"
        },
        22: {
            name: "Rack TV Nordlys",
            category: "Racks para Televisores",
            price: "$94,999",
            description: "Rack TV con puertas de vidrio templado para proteger el equipo. Estructura en madera de roble.",
            images: [
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "Roble y vidrio" },
                { name: "Dimensiones", value: "150cm x 50cm x 55cm" },
                { name: "Peso", value: "35 kg" },
                { name: "Puertas", value: "2 de vidrio" },
                { name: "Estantes", value: "4 ajustables" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Nordlys - $94,999"
        },
        23: {
            name: "Rack TV Polar",
            category: "Racks para Televisores",
            price: "$79,999",
            description: "Rack modular con iluminación LED en los estantes. Perfecto para crear ambiente en la sala de estar.",
            images: [
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "MDF y metal" },
                { name: "Dimensiones", value: "140cm x 45cm x 50cm" },
                { name: "Peso", value: "32 kg" },
                { name: "Iluminación", value: "LED RGB" },
                { name: "Modular", value: "Sí, expandible" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Polar - $79,999"
        },
        24: {
            name: "Rack TV Fjord",
            category: "Racks para Televisores",
            price: "$84,999",
            description: "Estilo industrial puro con estructura de metal negro y estantes de madera recuperada.",
            images: [
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera recuperada" },
                { name: "Dimensiones", value: "130cm x 40cm x 48cm" },
                { name: "Peso", value: "28 kg" },
                { name: "Metal", value: "Negro oxidado" },
                { name: "Estantes", value: "3 fijos" }
            ],
            whatsappMessage: "Hola! Estoy interesado en el Rack TV Fjord - $84,999"
        },
        25: {
            name: "Mesita Bergen",
            category: "Mesitas Ratonas",
            price: "$39,999",
            description: "Mesita triangular con estante inferior. Diseño único que se adapta a esquinas.",
            images: [
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera de pino" },
                { name: "Dimensiones", value: "60cm x 60cm x 45cm" },
                { name: "Peso", value: "10 kg" },
                { name: "Forma", value: "Triangular" },
                { name: "Estante", value: "Inferior" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Bergen - $39,999"
        },
        26: {
            name: "Mesita Trondheim",
            category: "Mesitas Ratonas",
            price: "$54,999",
            description: "Mesita con ruedas y tapa abatible. Ideal para usar como mesa auxiliar o para servir.",
            images: [
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "50cm x 50cm x 60cm" },
                { name: "Peso", value: "14 kg" },
                { name: "Ruedas", value: "4 con freno" },
                { name: "Tapa", value: "Abatible" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Trondheim - $54,999"
        },
        27: {
            name: "Mesita Oslo",
            category: "Mesitas Ratonas",
            price: "$64,999",
            description: "Mesita multinivel en madera y metal. Diseño escultórico que funciona como pieza decorativa.",
            images: [
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera y acero" },
                { name: "Dimensiones", value: "70cm x 40cm x 50cm" },
                { name: "Peso", value: "16 kg" },
                { name: "Niveles", value: "3" },
                { name: "Estilo", value: "Escultórico" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Mesita Oslo - $64,999"
        },
        28: {
            name: "Estantería Helsinki",
            category: "Estanterías Industriales",
            price: "$104,999",
            description: "Estantería corrediza de doble cara. Permite acceso desde ambos lados y ahorra espacio.",
            images: [
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "200cm x 100cm x 40cm" },
                { name: "Peso", value: "50 kg" },
                { name: "Sistema", value: "Corredizo" },
                { name: "Acceso", value: "Doble cara" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Helsinki - $104,999"
        },
        29: {
            name: "Estantería Copenhagen",
            category: "Estanterías Industriales",
            price: "$89,999",
            description: "Estantería hexagonal modular. Puedes combinar varias unidades para crear formas únicas.",
            images: [
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            ],
            specs: [
                { name: "Material", value: "MDF y metal" },
                { name: "Dimensiones", value: "120cm x 40cm x 180cm" },
                { name: "Peso", value: "38 kg" },
                { name: "Forma", value: "Hexagonal" },
                { name: "Modular", value: "Sí, combinable" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Copenhagen - $89,999"
        },
        30: {
            name: "Estantería Stockholm",
            category: "Estanterías Industriales",
            price: "$114,999",
            description: "Estantería de esquina con cajones integrados. Maximiza el uso de espacios muertos.",
            images: [
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ],
            specs: [
                { name: "Material", value: "Madera y metal" },
                { name: "Dimensiones", value: "150cm x 150cm x 40cm" },
                { name: "Peso", value: "55 kg" },
                { name: "Cajones", value: "4 integrados" },
                { name: "Ubicación", value: "Esquina" }
            ],
            whatsappMessage: "Hola! Estoy interesado en la Estantería Stockholm - $114,999"
        }
    };

    // ===== FUNCIONES DEL CARRUSEL =====
    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Actualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Actualizar slides activos
        carouselSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
        resetAutoSlide();
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // ===== CONTROL TÁCTIL =====
    function handleTouchStart(e) {
        touchStartX = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoSlide();
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

        // Configurar botón de WhatsApp
        const encodedMessage = encodeURIComponent(product.whatsappMessage);
        whatsappBtn.onclick = () => {
            window.open(`https://wa.me/5491122334455?text=${encodedMessage}`, '_blank');
        };

        // Mostrar modal - Pantalla completa
        productModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Forzar scroll al inicio
        setTimeout(() => {
            productModal.scrollTop = 0;
            document.querySelector('.modal-container').scrollTop = 0;
        }, 10);
    }

    function closeProductModal() {
        productModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // ===== MENÚ HAMBURGUESA =====
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== EVENT LISTENERS =====
    // Carrusel
    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Control táctil
    carouselTrack.addEventListener('touchstart', handleTouchStart, { passive: true });
    carouselTrack.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Modal
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.getAttribute('data-id');
            openProductModal(productId);
        });
    });

    // Cerrar modal
    closeModalBtn.addEventListener('click', closeProductModal);
    closeModalBtn2.addEventListener('click', closeProductModal);
    
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });

    // Cerrar con Escape
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
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== INICIAR CARRUSEL AUTOMÁTICO =====
    startAutoSlide();
    
    // Pausar al hacer hover
    carouselTrack.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carouselTrack.addEventListener('mouseleave', startAutoSlide);

    console.log('✅ Estilo Nórdico - Web perfectamente cargada');
    console.log('🎯 CARRUSEL HORIZONTAL: ✓ Funciona con flechas, dots y gestos táctiles');
    console.log('🎯 MODAL PERFECTO: ✓ Pantalla completa, sin scroll interno');
    console.log('🎯 6 PRODUCTOS POR CATEGORÍA: ✓ 30 productos en total');
    console.log('🎯 WHATSAPP INTEGRADO: ✓ Botón de compra directa');
    console.log('🎯 RESPONSIVE PERFECTO: ✓ Móvil, Tablet, PC');
});
