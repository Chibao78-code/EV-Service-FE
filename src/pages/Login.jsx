import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FiMail, FiLock } from 'react-icons/fi';
import toast from 'react-hot-toast';
import useAuthStore from '../store/authStore';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuthStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  });
  
  const onSubmit = async (data) => {
    const result = await login(data);
    
    if (result.success) {
      toast.success('Đăng nhập thành công!');
      navigate('/app/dashboard');
    } else {
      toast.error(result.error || 'Đăng nhập thất bại');
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-xl mb-4">
            <span className="text-white font-bold text-2xl">EV</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Đăng nhập</h1>
          <p className="mt-2 text-gray-600">
            Chào mừng bạn đến với EV Service
          </p>
        </div>
        
        <Card className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Email"
              type="email"
              icon={<FiMail />}
              placeholder="your@email.com"
              error={errors.email?.message}
              {...register('email', {
                required: 'Vui lòng nhập email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email không hợp lệ'
                }
              })}
            />
            
            <Input
              label="Mật khẩu"
              type="password"
              icon={<FiLock />}
              placeholder="••••••••"
              error={errors.password?.message}
              {...register('password', {
                required: 'Vui lòng nhập mật khẩu',
                minLength: {
                  value: 6,
                  message: 'Mật khẩu phải có ít nhất 6 ký tự'
                }
              })}
            />
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  {...register('remember')}
                />
                <span className="ml-2 text-sm text-gray-700">
                  Ghi nhớ đăng nhập
                </span>
              </label>
              
              <Link
                to="/forgot-password"
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Quên mật khẩu?
              </Link>
            </div>
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              loading={isLoading}
            >
              Đăng nhập
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Hoặc
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Bạn chưa có tài khoản?{' '}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:text-primary-700"
                >
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;