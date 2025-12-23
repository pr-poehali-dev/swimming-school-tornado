import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Icon name="Waves" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark">Торнадо</h1>
              <p className="text-xs text-gray-600">Школа плавания</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('programs')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Программы
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Расписание
            </button>
            <button onClick={() => scrollToSection('trainers')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Тренеры
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
            Записаться
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Программы
            </button>
            <button onClick={() => scrollToSection('schedule')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Расписание
            </button>
            <button onClick={() => scrollToSection('trainers')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Тренеры
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full">
              Записаться
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
