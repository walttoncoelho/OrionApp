import React from "react";

import {
    Navigate,
    Routes,
    Route,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { StatusOrderCustomer } from "./pages/StatusOrderCustomer";
import { CartShopp } from "./pages/CartShopp";
import { Checkout } from "./pages/Checkout";
import { ItensProducts } from "./pages/ItensProducts";
import { SendCustomerDemand } from "./pages/SendCustomerDemand";
import { ServiceList } from "./pages/ServiceList";

export function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/login' />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<CartShopp/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/itens-products' element={<ItensProducts />} />
            <Route path='/send-customer-demand' element={<SendCustomerDemand />} />
            <Route path='/status-order-customer' element={<StatusOrderCustomer/>} />
            <Route path='/servicelist' element={<ServiceList/>} />
        </Routes>
    );
}

