import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import EmployeeRegistration from './components/EmployeeRegistration';
import ProductRegistration from './components/ProductRegistration';
import ProtectedRoute from './components/ProtectedRoute';
import RetailTransactionForm from './components/transactions/RetailTransactionForm';
import EventTransactionForm from './components/transactions/EventTransactionForm';
import InventoryManagement from './components/inventory/InventoryManagement';
import './Main.css';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<div>Welcome to Admin Dashboard</div>} />
          <Route path="employee-registration" element={<EmployeeRegistration />} />
          <Route path="product-registration" element={<ProductRegistration />} />
          
          {/* Transaction Routes */}
          <Route path="transaction-retail" element={<RetailTransactionForm />} />
          <Route path="transaction-events" element={<EventTransactionForm />} />
          
          {/* Other Admin Routes */}
          <Route path="inventory" element={<InventoryManagement />} />
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="maintenance" element={<div>Maintenance</div>} />
          <Route path="profile" element={<div>Admin Profile</div>} />
          <Route path="help" element={<div>Help</div>} />
          <Route path="about" element={<div>About</div>} />
        </Route>

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
