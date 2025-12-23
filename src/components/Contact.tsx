import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Контакты</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Запишитесь на пробное занятие
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Первое занятие — бесплатно! Оставьте заявку и мы свяжемся с вами
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение (необязательно)
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Возраст ребенка, уровень подготовки, удобное время..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Спортивная, д. 15</p>
                  <p className="text-sm text-gray-500 mt-1">Спортивный комплекс "Олимп"</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-500 mt-1">Ежедневно с 8:00 до 21:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">Email</h3>
                  <p className="text-gray-600">info@tornado-swim.ru</p>
                  <p className="text-sm text-gray-500 mt-1">Ответим в течение 24 часов</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary to-accent text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Режим работы</h3>
                  <p className="text-white/90">Пн-Пт: 8:00 - 21:00</p>
                  <p className="text-white/90">Сб-Вс: 9:00 - 18:00</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
