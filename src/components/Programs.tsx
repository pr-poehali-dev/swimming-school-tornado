import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const programs = [
  {
    title: 'Малыши',
    age: '3-5 лет',
    level: 'Начальный',
    description: 'Знакомство с водой в игровой форме. Преодоление страха воды, базовые навыки.',
    icon: 'Baby',
    color: 'bg-blue-100 text-blue-600',
    features: ['Группы до 6 человек', '30 минут занятие', 'Родители могут присутствовать']
  },
  {
    title: 'Дошкольники',
    age: '6-7 лет',
    level: 'Начальный',
    description: 'Обучение основным стилям плавания. Развитие координации и выносливости.',
    icon: 'Smile',
    color: 'bg-cyan-100 text-cyan-600',
    features: ['Группы до 8 человек', '45 минут занятие', 'Изучение кроля и брасса']
  },
  {
    title: 'Младшая группа',
    age: '8-10 лет',
    level: 'Базовый',
    description: 'Совершенствование техники всех стилей. Подготовка к соревнованиям.',
    icon: 'Users',
    color: 'bg-blue-100 text-blue-600',
    features: ['Группы до 10 человек', '60 минут занятие', 'Все 4 стиля плавания']
  },
  {
    title: 'Средняя группа',
    age: '11-13 лет',
    level: 'Продвинутый',
    description: 'Спортивное плавание, участие в соревнованиях, развитие скоростных качеств.',
    icon: 'Trophy',
    color: 'bg-primary/10 text-primary',
    features: ['Группы до 12 человек', '90 минут занятие', 'Участие в соревнованиях']
  },
  {
    title: 'Старшая группа',
    age: '14-17 лет',
    level: 'Профессиональный',
    description: 'Олимпийский резерв. Интенсивные тренировки, индивидуальный подход.',
    icon: 'Medal',
    color: 'bg-accent/10 text-accent',
    features: ['Группы до 10 человек', '120 минут занятие', 'Профессиональный спорт']
  },
  {
    title: 'Взрослые',
    age: '18+ лет',
    level: 'Любой',
    description: 'Обучение с нуля или совершенствование техники. Фитнес-плавание.',
    icon: 'Heart',
    color: 'bg-gray-100 text-gray-600',
    features: ['Группы до 8 человек', '60 минут занятие', 'Гибкое расписание']
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Программы обучения</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Программы для всех возрастов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Индивидуальный подход к каждому ученику с учетом возраста и уровня подготовки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-4`}>
                <Icon name={program.icon as any} size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-dark mb-2">{program.title}</h3>
              
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="font-medium">
                  {program.age}
                </Badge>
                <Badge variant="outline" className="font-medium">
                  {program.level}
                </Badge>
              </div>
              
              <p className="text-gray-600 mb-6">{program.description}</p>
              
              <div className="space-y-3 pt-4 border-t border-gray-200">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
