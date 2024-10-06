
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AddRoomPage from './component/admin/AddRoomPage';
import AdminPage from './component/admin/AdminPage';
import EditBookingPage from './component/admin/EditBookingPage';
import EditRoomPage from './component/admin/EditRoomPage';
import ManageBookingsPage from './component/admin/ManageBookingsPage';
import ManageRoomPage from './component/admin/ManageRoomPage';
import LoginPage from './component/auth/LoginPage';
import RegisterPage from './component/auth/RegisterPage';
import AllRoomsPage from './component/booking_rooms/AllRoomsPage';
import FindBookingPage from './component/booking_rooms/FindBookingPage';
import RoomDetailsBookingPage from './component/booking_rooms/RoomDetailsPage';
import FooterComponent from './component/common/Footer';
import Navbar from './component/common/Navbar';
import HomePage from './component/home/HomePage';
import EditProfilePage from './component/profile/EditProfilePage';
import ProfilePage from './component/profile/ProfilePage';
import { AdminRoute, ProtectedRoute } from './service/guard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/rooms" element={<AllRoomsPage />} />
            <Route path="/find-booking" element={<FindBookingPage />} />

            {/* Protected Routes */}
            <Route path="/room-details-book/:roomId"
              element={<ProtectedRoute element={<RoomDetailsBookingPage />} />}
            />
            <Route path="/profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />
            <Route path="/edit-profile"
              element={<ProtectedRoute element={<EditProfilePage />} />}
            />

            {/* Admin Routes */}
            <Route path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route path="/admin/manage-rooms"
              element={<AdminRoute element={<ManageRoomPage />} />}
            />
            <Route path="/admin/edit-room/:roomId"
              element={<AdminRoute element={<EditRoomPage />} />}
            />
            <Route path="/admin/add-room"
              element={<AdminRoute element={<AddRoomPage />} />}
            />
            <Route path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageBookingsPage />} />}
            />
            <Route path="/admin/edit-booking/:bookingCode"
              element={<AdminRoute element={<EditBookingPage />} />}
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;