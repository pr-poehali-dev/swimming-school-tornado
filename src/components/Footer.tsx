import Icon from '@/components/ui/icon';

export function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Icon name="Waves" size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Торнадо</h3>
                <p className="text-xs text-gray-400">Школа плавания</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Профессиональное обучение плаванию с 2012 года
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#programs" className="hover:text-primary transition-colors">Программы</a></li>
              <li><a href="#schedule" className="hover:text-primary transition-colors">Расписание</a></li>
              <li><a href="#trainers" className="hover:text-primary transition-colors">Тренеры</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Галерея</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>г. Москва, ул. Спортивная, 15</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={16} className="mt-1 flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={16} className="mt-1 flex-shrink-0" />
                <span>info@tornado-swim.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Школа плавания «Торнадо». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
