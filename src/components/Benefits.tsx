import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'GraduationCap',
    title: 'Профессиональные тренеры',
    description: 'Мастера спорта и кандидаты в мастера с педагогическим образованием'
  },
  {
    icon: 'Waves',
    title: 'Олимпийский бассейн',
    description: '50-метровый бассейн с 8 дорожками и современной системой очистки воды'
  },
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Спасатели на дежурстве, медицинский контроль, страхование участников'
  },
  {
    icon: 'Target',
    title: 'Индивидуальный подход',
    description: 'Программа занятий адаптируется под уровень и цели каждого ученика'
  },
  {
    icon: 'Trophy',
    title: 'Участие в соревнованиях',
    description: 'Регулярные турниры городского, регионального и всероссийского уровня'
  },
  {
    icon: 'Heart',
    title: 'Здоровье и развитие',
    description: 'Укрепление иммунитета, развитие дыхательной системы и координации'
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Более 12 лет мы помогаем детям и взрослым научиться плавать и достигать спортивных результатов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name={benefit.icon as any} size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
