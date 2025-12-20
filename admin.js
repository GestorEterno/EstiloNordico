// admin.js - PANEL DE GESTIÓN COMPLETO (FRONTEND)

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Panel de Gestión inicializado');
    
    // ===== CONFIGURACIÓN =====
    const ADMIN_CREDENTIALS = {
        username: 'gestor',
        password: '1234'
    };
    
    // ===== ESTADO DE LA APLICACIÓN =====
    let currentUser = null;
    let isAdmin = false;
    
    // Datos simulados para el panel de gestión
    const mockData = {
        dailyUsers: 145,
        totalSales: 124580,
        totalProducts: 15,
        pendingOrders: 7,
        salesData: [
            { day: 'Lun', amount: 2400 },
            { day: 'Mar', amount: 2900 },
            { day: 'Mié', amount: 2100 },
            { day: 'Jue', amount: 3400 },
            { day: 'Vie', amount: 2600 },
            { day: 'Sáb', amount: 3200 },
            { day: 'Dom', amount: 2800 }
        ],
        recentSales: [
            { id: 'V-001', customer: 'María González', products: 'Escritorio 1.60m', total: '$200.000', date: '15/01/2024', status: 'Completado' },
            { id: 'V-002', customer: 'Carlos Rodríguez', products: 'Mesa Modelo X', total: '$250.000', date: '14/01/2024', status: 'En proceso' },
            { id: 'V-003', customer: 'Ana López', products: '2x Mesita K2', total: '$140.000', date: '14/01/2024', status: 'Completado' },
            { id: 'V-004', customer: 'Pedro Sánchez', products: 'Rack TV K1', total: '$120.000', date: '13/01/2024', status: 'Pendiente' },
            { id: 'V-005', customer: 'Laura Martínez', products: 'Estantería K3', total: '$80.000', date: '12/01/2024', status: 'Completado' }
        ],
        users: [
            { id: 1, name: 'María González', email: 'maria@email.com', registration: '10/01/2024', orders: 3, role: 'Cliente' },
            { id: 2, name: 'Carlos Rodríguez', email: 'carlos@email.com', registration: '05/01/2024', orders: 1, role: 'Cliente' },
            { id: 3, name: 'Ana López', email: 'ana@email.com', registration: '15/12/2023', orders: 5, role: 'Cliente' },
            { id: 4, name: 'Pedro Sánchez', email: 'pedro@email.com', registration: '20/11/2023', orders: 2, role: 'Cliente' },
            { id: 5, name: 'Gestor Admin', email: 'gestor@estilonordico.com', registration: '01/01/2024', orders: 0, role: 'Administrador' }
        ],
        topProducts: [
            { name: 'Escritorio 1.60m', sales: 12, revenue: '$2,400,000' },
            { name: 'Mesa Modelo X', sales: 8, revenue: '$2,000,000' },
            { name: 'Rack TV K2', sales: 10, revenue: '$1,500,000' },
            { name: 'Mesita K2', sales: 15, revenue: '$1,050,000' },
            { name: 'Estantería K3', sales: 7, revenue: '$560,000' }
        ],
        categoryStats: [
            { category: 'Escritorios', percentage: 35, color: '#3498db' },
            { category: 'Mesas', percentage: 25, color: '#e74c3c' },
            { category: 'Racks TV', percentage: 20, color: '#2ecc71' },
            { category: 'Mesitas', percentage: 15, color: '#f39c12' },
            { category: 'Estanterías', percentage: 5, color: '#9b59b6' }
        ]
    };
    
    // ===== ELEMENTOS DEL DOM =====
    const adminOverlay = document.getElementById('adminOverlay');
    const closeAdminBtn = document.getElementById('closeAdminBtn');
    const logoutAdminBtn = document.getElementById('logoutAdminBtn');
    const adminNavItems = document.querySelectorAll('.admin-nav-item');
    const adminSections = document.querySelectorAll('.admin-section');
    
    // Elementos del Dashboard
    const dailyUsersEl = document.getElementById('dailyUsers');
    const totalSalesEl = document.getElementById('totalSales');
    const totalProductsEl = document.getElementById('totalProducts');
    const pendingOrdersEl = document.getElementById('pendingOrders');
    
    // Elementos de Productos
    const productsTable = document.getElementById('productsTable');
    const addProductBtn = document.getElementById('addProductBtn');
    
    // Elementos de Ventas
    const salesTable = document.getElementById('salesTable');
    
    // Elementos de Usuarios
    const usersTable = document.getElementById('usersTable');
    const searchUsersInput = document.getElementById('searchUsers');
    
    // Elementos de Estadísticas
    const topProductsList = document.getElementById('topProducts');
    const categoryStatsEl = document.getElementById('categoryStats');
    
    // ===== FUNCIONES DE GESTIÓN =====
    
    // Verificar estado de sesión
    function checkAuthStatus() {
        const userData = sessionStorage.getItem('userData');
        if (userData) {
            currentUser = JSON.parse(userData);
            isAdmin = currentUser.username === ADMIN_CREDENTIALS.username;
            
            // Actualizar UI según rol
            updateUserUI();
            
            // Si es admin, mostrar botón del panel
            if (isAdmin) {
                document.getElementById('adminPanelBtn').style.display = 'block';
            }
        }
    }
    
    // Actualizar UI de usuario
    function updateUserUI() {
        if (currentUser) {
            document.getElementById('userName').textContent = currentUser.name || currentUser.username;
            document.getElementById('userEmail').textContent = currentUser.email || currentUser.username;
            
            // Mostrar estado logueado
            document.getElementById('guestState').style.display = 'none';
            document.getElementById('loggedInState').style.display = 'block';
            
            // Actualizar botón de usuario en header
            const userBtn = document.getElementById('userBtn');
            if (userBtn) {
                userBtn.innerHTML = `<i class="fas fa-user-check"></i>`;
            }
        }
    }
    
    // Cerrar sesión
    function logoutUser() {
        sessionStorage.removeItem('userData');
        currentUser = null;
        isAdmin = false;
        
        // Restaurar UI
        document.getElementById('userName').textContent = 'Invitado';
        document.getElementById('userEmail').textContent = 'Inicia sesión para continuar';
        document.getElementById('guestState').style.display = 'block';
        document.getElementById('loggedInState').style.display = 'none';
        document.getElementById('adminPanelBtn').style.display = 'none';
        
        // Restaurar botón de usuario
        const userBtn = document.getElementById('userBtn');
        if (userBtn) {
            userBtn.innerHTML = `<i class="fas fa-user"></i>`;
        }
        
        // Cerrar paneles abiertos
        closeAdminPanel();
        
        // Mostrar mensaje
        showNotification('Sesión cerrada correctamente', 'info');
    }
    
    // ===== PANEL DE ADMINISTRACIÓN =====
    
    // Abrir panel de admin
    function openAdminPanel() {
        if (!isAdmin) {
            showNotification('Acceso denegado. Solo para gestores.', 'error');
            return;
        }
        
        adminOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Cargar datos iniciales
        loadDashboardData();
        loadProductsTable();
        loadSalesTable();
        loadUsersTable();
        loadStatistics();
    }
    
    // Cerrar panel de admin
    function closeAdminPanel() {
        adminOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    // Navegación entre secciones
    function switchAdminSection(sectionId) {
        // Ocultar todas las secciones
        adminSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar sección seleccionada
        const targetSection = document.getElementById(sectionId + 'Section');
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Actualizar navegación
        adminNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
            }
        });
    }
    
    // ===== CARGA DE DATOS =====
    
    // Cargar datos del dashboard
    function loadDashboardData() {
        if (dailyUsersEl) dailyUsersEl.textContent = mockData.dailyUsers;
        if (totalSalesEl) totalSalesEl.textContent = `$${mockData.totalSales.toLocaleString()}`;
        if (totalProductsEl) totalProductsEl.textContent = mockData.totalProducts;
        if (pendingOrdersEl) pendingOrdersEl.textContent = mockData.pendingOrders;
        
        // Actualizar gráfico
        updateSalesChart();
    }
    
    // Actualizar gráfico de ventas
    function updateSalesChart() {
        const chartBars = document.querySelectorAll('.chart-bar');
        if (chartBars.length === mockData.salesData.length) {
            chartBars.forEach((bar, index) => {
                const data = mockData.salesData[index];
                const maxAmount = Math.max(...mockData.salesData.map(d => d.amount));
                const height = (data.amount / maxAmount) * 100;
                
                bar.style.height = `${height}%`;
                bar.setAttribute('data-value', `$${data.amount.toLocaleString()}`);
            });
        }
    }
    
    // Cargar tabla de productos
    function loadProductsTable() {
        if (!productsTable) return;
        
        productsTable.innerHTML = '';
        
        // Usar los productos del archivo principal (index.js)
        if (typeof products !== 'undefined') {
            Object.keys(products).forEach(id => {
                const product = products[id];
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${id}</td>
                    <td class="product-image-cell">
                        <img src="${product.images[0]}" alt="${product.name}">
                    </td>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.price}</td>
                    <td>
                        <span class="status-badge status-active">Activo</span>
                    </td>
                    <td class="table-actions">
                        <button class="btn-table btn-edit" data-id="${id}">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="btn-table btn-delete" data-id="${id}">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    </td>
                `;
                
                productsTable.appendChild(row);
            });
            
            // Agregar eventos a los botones
            document.querySelectorAll('.btn-edit').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    editProduct(productId);
                });
            });
            
            document.querySelectorAll('.btn-delete').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    deleteProduct(productId);
                });
            });
        }
    }
    
    // Cargar tabla de ventas
    function loadSalesTable() {
        if (!salesTable) return;
        
        salesTable.innerHTML = '';
        
        mockData.recentSales.forEach(sale => {
            const row = document.createElement('tr');
            
            let statusClass = 'status-active';
            if (sale.status === 'Pendiente') statusClass = 'status-pending';
            if (sale.status === 'En proceso') statusClass = 'status-inactive';
            
            row.innerHTML = `
                <td>${sale.id}</td>
                <td>${sale.customer}</td>
                <td>${sale.products}</td>
                <td>${sale.total}</td>
                <td>${sale.date}</td>
                <td>
                    <span class="status-badge ${statusClass}">${sale.status}</span>
                </td>
            `;
            
            salesTable.appendChild(row);
        });
    }
    
    // Cargar tabla de usuarios
    function loadUsersTable() {
        if (!usersTable) return;
        
        usersTable.innerHTML = '';
        
        mockData.users.forEach(user => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.registration}</td>
                <td>${user.orders}</td>
                <td>${user.role}</td>
            `;
            
            usersTable.appendChild(row);
        });
    }
    
    // Cargar estadísticas
    function loadStatistics() {
        // Productos más vendidos
        if (topProductsList) {
            topProductsList.innerHTML = '';
            
            mockData.topProducts.forEach(product => {
                const li = document.createElement('li');
                li.className = 'top-product-item';
                li.innerHTML = `
                    <div class="top-product-info">
                        <strong>${product.name}</strong>
                        <span>${product.sales} ventas</span>
                    </div>
                    <div class="top-product-revenue">
                        ${product.revenue}
                    </div>
                `;
                topProductsList.appendChild(li);
            });
        }
        
        // Estadísticas por categoría
        if (categoryStatsEl) {
            categoryStatsEl.innerHTML = '';
            
            mockData.categoryStats.forEach(stat => {
                const statItem = document.createElement('div');
                statItem.className = 'category-stat-item';
                statItem.innerHTML = `
                    <div class="category-stat-header">
                        <span class="category-color" style="background: ${stat.color}"></span>
                        <span class="category-name">${stat.category}</span>
                        <span class="category-percentage">${stat.percentage}%</span>
                    </div>
                    <div class="category-stat-bar">
                        <div class="stat-bar-fill" style="width: ${stat.percentage}%; background: ${stat.color}"></div>
                    </div>
                `;
                categoryStatsEl.appendChild(statItem);
            });
        }
    }
    
    // ===== OPERACIONES CRUD =====
    
    // Editar producto
    function editProduct(productId) {
        showNotification(`Editando producto ID: ${productId}`, 'info');
        // En una implementación real, esto abriría un formulario de edición
    }
    
    // Eliminar producto
    function deleteProduct(productId) {
        if (confirm('¿Estás seguro de eliminar este producto?\nEsta acción no se puede deshacer.')) {
            // En una implementación real, esto enviaría una solicitud al servidor
            showNotification(`Producto ID: ${productId} eliminado (simulado)`, 'warning');
            
            // Recargar la tabla (simulado)
            setTimeout(() => {
                loadProductsTable();
            }, 500);
        }
    }
    
    // Agregar nuevo producto
    function addNewProduct() {
        showNotification('Funcionalidad de agregar producto (simulada)', 'info');
        // En una implementación real, esto abriría un formulario
    }
    
    // ===== FUNCIONES AUXILIARES =====
    
    // Mostrar notificación
    function showNotification(message, type = 'info') {
        console.log(`[${type.toUpperCase()}] ${message}`);
        
        // Podríamos implementar un sistema de notificaciones visuales aquí
        alert(`${type === 'error' ? '⚠️' : 'ℹ️'} ${message}`);
    }
    
    // Buscar usuarios
    function searchUsers(query) {
        console.log(`Buscando usuarios: ${query}`);
        // Implementar búsqueda real
    }
    
    // ===== EVENT LISTENERS =====
    
    // Navegación del panel admin
    adminNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            switchAdminSection(section);
        });
    });
    
    // Botón para agregar producto
    if (addProductBtn) {
        addProductBtn.addEventListener('click', addNewProduct);
    }
    
    // Buscador de usuarios
    if (searchUsersInput) {
        searchUsersInput.addEventListener('input', function(e) {
            searchUsers(e.target.value);
        });
    }
    
    // Cerrar panel admin
    if (closeAdminBtn) {
        closeAdminBtn.addEventListener('click', closeAdminPanel);
    }
    
    // Cerrar sesión admin
    if (logoutAdminBtn) {
        logoutAdminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logoutUser();
            closeAdminPanel();
        });
    }
    
    // Botón de panel admin en el menú de usuario
    const adminPanelBtn = document.getElementById('adminPanelBtn');
    if (adminPanelBtn) {
        adminPanelBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openAdminPanel();
        });
    }
    
    // Cerrar panel con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && adminOverlay.style.display === 'block') {
            closeAdminPanel();
        }
    });
    
    // ===== INICIALIZACIÓN =====
    
    // Verificar estado de autenticación al cargar
    checkAuthStatus();
    
    console.log('✅ Panel de Gestión listo');
});
