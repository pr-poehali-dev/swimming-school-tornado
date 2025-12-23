import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    name: 'Марина Петрова',
    role: 'Мама Кати, 7 лет',
    text: 'Дочь занимается в школе уже год. За это время научилась плавать кролем и брассом. Тренеры очень внимательные и терпеливые. Катя ждет каждого занятия с нетерпением!',
    rating: 5
  },
  {
    name: 'Сергей Иванов',
    role: 'Папа Максима, 12 лет',
    text: 'Сын пришел в школу с нулевым уровнем. Сейчас участвует в соревнованиях и занимает призовые места. Огромное спасибо тренерам за профессионализм и индивидуальный подход!',
    rating: 5
  },
  {
    name: 'Анна Смирнова',
    role: 'Взрослая группа',
    text: 'Всю жизнь боялась воды, но в 35 лет решилась научиться плавать. Тренер нашел подход, объяснил все спокойно. Теперь плаваю свободно и получаю удовольствие!',
    rating: 5
  },
  {
    name: 'Алексей Козлов',
    role: 'Папа Димы и Саши, 9 и 11 лет',
    text: 'Оба сына занимаются в школе. Старший уже в спортивной группе, младший догоняет. Отличные условия, современный бассейн, опытные тренеры. Рекомендую!',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Отзывы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Что говорят о нас
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мнения родителей и учеников о школе плавания «Торнадо»
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
