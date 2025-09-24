import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSearch, FiChevronRight, FiZap, FiShield, FiTruck } from 'react-icons/fi';
import Button from '../components/ui/Button';

const Landing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
// tim kiem dich vu
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      //nhay sang trang tim kiem neu co du lieu
      navigate(`/services?search=${encodeURIComponent(searchTerm)}`);
    }
  };
  // thông tin cong ty 
  const contactInfo = {
    phones: ['(084) 123-456-789', '(084) 987-654-321'],
    address: '123 Tòa Nhà Bitexco , Quận 1, TP.HCM',
    email: 'support@evservice.com',
    hours: 'T2-T7: 09:00-20:00, CN: 09:00-18:00'
  };
// logo,menu
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center"> 
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                  <FiZap className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold text-gray-900">EV Service</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors">
                Trang chủ
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors">
                Dịch vụ
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
                Về chúng tôi
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
                Liên hệ
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link 
                to="/login"
                className="text-gray-700 hover:text-teal-600 px-4 py-2 transition-colors"
              >
                Đăng nhập
              </Link>
              <Link 
                to="/register"
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">CHÀO MỪNG BẠN ĐẾN VỚI EV SERVICE</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Nắm Bắt Tương lai,<br />
                Làm Chủ Xe Máy Điện
              </h1>
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
                Dịch Vụ Chăm Sóc Xe Điện Toàn Diện - Bảo Dưỡng,Chăm Sóc 
                Sửa Chữa Với Đội Ngũ Kỹ Thuật Viên Chuyên Nghiệp
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
                <span className="inline-flex items-center text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Hệ Thống Hoạt Động 24/7
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => window.dispatchEvent(new Event('openBookingModal'))}
                  className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Đặt Lịch Ngay →
                </button>
                <button 
                  onClick={() => navigate('/services')}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/50"
                >
                  Khám Phá Dịch Vụ
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Đội ngũ kỹ thuật viên EV Service"
                  className="rounded-xl w-full object-cover"
                />
                <div className="absolute top-10 right-10 bg-white rounded-lg shadow-lg p-3">
                  <div className="flex items-center space-x-2">
                    <FiShield className="text-teal-600 text-xl" />
                    <div>
                      <p className="text-xs text-gray-600">Chứng nhận</p>
                      <p className="font-bold text-teal-700">ISO 9001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <div className="bg-white rounded-full shadow-xl p-2 flex items-center">
                <div className="flex-1 flex items-center px-4">
                  <FiSearch className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm dịch vụ, trạm sạc..."
                    className="flex-1 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors font-medium"
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPhone className="text-teal-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ĐƯỜNG DÂY NÓNG</h3>
              <p className="text-sm text-gray-600">{contactInfo.phones[0]}</p>
              <p className="text-sm text-gray-600">{contactInfo.phones[1]}</p>
            </div>
            <div className="bg-teal-600 text-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-white text-xl" />
              </div>
              <h3 className="font-semibold mb-2">ĐỊA CHỈ</h3>
              <p className="text-sm opacity-90">{contactInfo.address}</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-teal-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">EMAIL</h3>
              <p className="text-sm text-gray-600">{contactInfo.email}</p>
              <p className="text-sm text-gray-600">info@evservice.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-teal-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">GIỜ LÀM VIỆC</h3>
              <p className="text-sm text-gray-600">T2-T7: 09:00-20:00</p>
              <p className="text-sm text-gray-600">Chủ Nhật: 09:00-18:00</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dịch Vụ Nổi Bật 
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng Tôi Cung Cấp Giải Pháp Toàn Diện Cho Xe Máy Điện Của Bạn
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <FiZap className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sạc nhanh</h3>
              <p className="text-gray-600 mb-4">
                Hệ Thống Bảo Dưỡng Năng Suất, Chỉ 30 Phút Cho Kiểm Tra Toàn Diện
              </p>
              <Link to="/services" className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center">
                Tìm hiểu thêm <FiChevronRight className="ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <FiShield className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bảo Dưỡng Định Kỳ</h3>
              <p className="text-gray-600 mb-4">
                Kiểm Tra Và Bảo Dưỡng Toàn Diện Theo Tiêu Chuẩn Hãng
              </p>
              <Link to="/services" className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center">
                Tìm hiểu thêm <FiChevronRight className="ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <FiTruck className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cứu hộ 24/7</h3>
              <p className="text-gray-600 mb-4">
                Dịch Vụ Đặt Lịch Trực Tuyến, Đặt Lịch Mọi Lúc Mọi Nơi
              </p>
              <Link to="/services" className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center">
                Tìm hiểu thêm <FiChevronRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;