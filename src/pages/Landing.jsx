import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSearch,
  FiChevronRight,
  FiZap,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import Button from "../components/ui/Button";

const Landing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
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
    phones: ["(084) 123-456-789", "(084) 987-654-321"],
    address: "123 Tòa Nhà Bitexco , Quận 1, TP.HCM",
    email: "support@evservice.com",
    hours: "T2-T7: 09:00-20:00, CN: 09:00-18:00",
  };
  // logo,menu
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/images/Logo.png"
                  alt="EV Service Logo"
                  className="h-16 w-auto"
                />
                <span className="text-xl font-bold text-gray-900">
                  EV Service
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-16">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Giới thiệu
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Đặt lịch
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Dịch vụ
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Liên hệ
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                to="/login"
                className="bg-[#027C9D] text-white px-4 py-2 rounded-lg hover:bg-[#02617A] transition-colors font-semibold"
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-tr from-[#B8ECFF] via-[#80D3EF] to-[#027C9D]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-white">
                  CHÀO MỪNG BẠN ĐẾN VỚI EV SERVICE
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Nắm Bắt Tương lai,
                <br />
                Làm Chủ Xe Máy Điện
              </h1>
              <p className="text-lg mb-8 text-black leading-relaxed">
                Dịch Vụ Chăm Sóc Xe Điện Toàn Diện - Bảo Dưỡng, Thay Thế Sửa
                Chữa Với Đội Ngũ Kỹ Thuật Viên Chuyên Nghiệp
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
                <span className="inline-flex items-center text-sm bg-[#1F3F5E]/60 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Hệ Thống Hoạt Động 24/7
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() =>
                    window.dispatchEvent(new Event("openBookingModal"))
                  }
                  className="bg-[#027C9D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#02617A] transition-all transform hover:scale-105 shadow-lg"
                >
                  Đặt Lịch Ngay →
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="bg-white/20 backdrop-blur-sm text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/50"
                >
                  Khám Phá Dịch Vụ
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/ky-thuat-xe-dien.png"
                alt="Đội ngũ kỹ thuật viên EV Service"
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <div className="bg-white rounded-full shadow-xl p-2 flex items-center">
                <div className="flex-1 flex items-center px-4">
                  <FiSearch className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm thông tin dịch vụ"
                    className="flex-1 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#02617A] text-white px-6 py-3 rounded-full hover:bg-[#027C9D] transition-colors font-medium"
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* ảnh khung thứ hai */}
      <section
        className="relative h-[700px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/gioi-thieu.png')" }}
      >
        {/* Overlay làm ảnh mờ */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* Nội dung đặt lên trên */}
        <div
          className="absolute top-[80px] right-[30px] text-white pr-6"
          style={{ width: `calc(66.6667% + 10px)` }}
        >
          <h1 className="text-5xl font-bold mb-6 text-blue-200">
            Tại sao bạn phải chọn chúng tôi?
          </h1>
          <p className="text-xl leading-relaxed mb-4">
            <span className="font-bold text-3xl">EV Service</span> khẳng định vị
            thế tiên phong trong lĩnh vực chăm sóc và nâng cấp xe điện tại Việt
            Nam. Sở hữu chuỗi hệ thống trung tâm quy mô lớn bậc nhất, trang bị
            công nghệ hiện đại và đội ngũ kỹ thuật viên đạt chuẩn quốc tế, chúng
            tôi không ngừng nâng tầm trải nghiệm khách hàng.
          </p>
          <p className="text-4xl font-bold mb-4 text-black">
            hơn 10.000++ khách hàng và đối tác lớn nhỏ
          </p>
          <p className="text-xl leading-relaxed">
            <span className="font-bold text-3xl">EV Service</span> không chỉ
            định hình tiêu chuẩn mới mà còn kiến tạo những giá trị bền vững cho
            cộng đồng đam mê xe điện.
          </p>
        </div>
        <div className="absolute bottom-[100px] right-[7px] text-right">
          <h1 className="text-3xl font-bold leading-tight">
            <span className="inline-block pr-[40px] text-[#F97316]">
              Electric Vehicle Service
            </span>
            <br />
            <span className="font-extrabold text-black">
              Nhận Chăm Sóc & Sửa chữa xe
            </span>
          </h1>
        </div>
        <button className="absolute bottom-5 left-5 bg-[#027C9D] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#02617A] transition-all transform hover:scale-105 shadow-lg">
          <span className="text-base ">Hotline </span>
          <span className="text-2xl font-bold">1900 3979</span>
        </button>
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
              <div className="w-14 h-14 bg-[#D1F3F9] rounded-lg flex items-center justify-center mb-4">
                <FiZap className="text-[#027C9D] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chăm Sóc</h3>
              <p className="text-gray-600 mb-4">
                Hệ Thống Bảo Dưỡng Năng Suất, Chỉ 30 Phút Cho Kiểm Tra Toàn Diện
              </p>
              <Link
                to="/services"
                className="text-[#02617A] font-medium hover:text-[#5DB9D4] inline-flex items-center "
              >
                Tìm hiểu thêm <FiChevronRight className="ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100">
              <div className="w-14 h-14 bg-[#D1F3F9] rounded-lg flex items-center justify-center mb-4">
                <FiShield className="text-[#027C9D] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bảo Dưỡng Định Kỳ</h3>
              <p className="text-gray-600 mb-4">
                Kiểm Tra Và Bảo Dưỡng Toàn Diện Theo Tiêu Chuẩn Hãng
              </p>
              <Link
                to="/services"
                className="text-[#02617A] font-medium hover:text-[#5DB9D4] inline-flex items-center"
              >
                Tìm hiểu thêm <FiChevronRight className="ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100">
              <div className="w-14 h-14 bg-[#D1F3F9] rounded-lg flex items-center justify-center mb-4">
                <FiTruck className="text-[#027C9D] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cứu hộ 24/7</h3>
              <p className="text-gray-600 mb-4">
                Dịch Vụ Đặt Lịch Trực Tuyến, Đặt Lịch Mọi Lúc Mọi Nơi
              </p>
              <Link
                to="/services"
                className="text-[#02617A] font-medium hover:text-[#5DB9D4] inline-flex items-center"
              >
                Tìm hiểu thêm <FiChevronRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#A0E0ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D1F3F9] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPhone className="text-[#027C9D] text-xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                ĐƯỜNG DÂY NÓNG
              </h3>
              <p className="text-sm text-gray-600">{contactInfo.phones[0]}</p>
              <p className="text-sm text-gray-600">{contactInfo.phones[1]}</p>
            </div>
            <div className="bg-[#027C9D] text-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-white text-xl" />
              </div>
              <h3 className="font-semibold mb-2">ĐỊA CHỈ</h3>
              <p className="text-sm opacity-90">{contactInfo.address}</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D1F3F9] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-[#027C9D] text-xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">EMAIL</h3>
              <p className="text-sm text-gray-600">{contactInfo.email}</p>
              <p className="text-sm text-gray-600">info@evservice.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D1F3F9] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-[#027C9D] text-xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">GIỜ LÀM VIỆC</h3>
              <p className="text-sm text-gray-600">T2-T7: 7:00-17:00</p>
              <p className="text-sm text-gray-600">Chủ Nhật: 09:00-18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Đánh giá từ khách hàng */}
      <section class="bg-white py-12 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Đánh giá từ khách hàng
          </h2>

          <div class="space-y-8">
            <div class="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex justify-center mb-2 text-yellow-400 text-xl">
                ★★★★☆
              </div>
              <p class="text-gray-700 italic">
                “ Nhân viên tư vấn rõ ràng, dịch vụ ổn định. Tôi sẽ quay lại bảo
                dưỡng vào lần tiếp theo. Cảm ơn các bạn vì đã cho tôi trải
                nghiệm tốt. ”
              </p>
              <p class="mt-4 text-sm text-gray-500">
                --- Nguyễn Văn Minh, TP.HCM ---
              </p>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex justify-center mb-2 text-yellow-400 text-xl">
                ★★★★★
              </div>

              <p class="text-gray-700 italic">
                “ Dịch vụ bảo dưỡng rất chuyên nghiệp, nhân viên cực kì nhiệt
                tình. Thật an tâm khi sử dụng trọn gói dịch vụ của trung tâm. ”
              </p>
              <p class="mt-4 text-sm text-gray-500">
                --- Trần Kim Yến, Thủ Đức ---
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
