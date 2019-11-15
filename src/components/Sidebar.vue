<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
            <li class="nav-link initialism">管理員</li>
            <li class="nav-item">
                <router-link to="/admin/products" class="nav-link" active-class="active">
                <span data-feather="home"></span>
                <i class="fas fa-window-restore"></i>
                產品列表 <span class="sr-only">(current)</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/orders" class="nav-link" active-class="active">
                <span data-feather="file"></span>
                <i class="fas fa-hamburger"></i>
                訂單列表
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/coupons" class="nav-link" active-class="active">
                <span data-feather="shopping-cart"></span>
                <i class="fas fa-money-check-alt"></i>
                優惠卷
                </router-link>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="users"></span>
                Customers
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="bar-chart-2"></span>
                Reports
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="layers"></span>
                Integrations
                </a>
            </li> -->
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>模擬功能</span>
            <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
            </a>
            </h6>
            <ul class="nav flex-column mb-2">
            <li class="nav-item">
                <router-link to="/customer_order" active-class="active" class="nav-link" href="#">
                <span data-feather="file-text"></span>
                模擬訂單
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/home" active-class="active" class="nav-link" href="#">
                <span data-feather="file-text"></span>
                回首頁
                </router-link>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Last quarter
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Social engagement
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Year-end sale
                </a>
            </li> -->
            </ul>
        </div>
    </nav>
</template>

