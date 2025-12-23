import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const trainers = [
  {
    name: 'Александр Морозов',
    title: 'Главный тренер',
    experience: '18 лет опыта',
    achievements: 'Мастер спорта международного класса, Чемпион России 2008',
    specialization: 'Подготовка спортсменов высокого уровня'
  },
  {
    name: 'Елена Волкова',
    title: 'Старший тренер',
    experience: '12 лет опыта',
    achievements: 'Мастер спорта, Призер чемпионата России',
    specialization: 'Работа с детьми 8-14 лет'
  },
  {
    name: 'Дмитрий Соколов',
    title: 'Тренер',
    experience: '10 лет опыта',
    achievements: 'Кандидат в мастера спорта',
    specialization: 'Начальное обучение, дошкольники'
  },
  {
    name: 'Анна Лебедева',
    title: 'Тренер',
    experience: '8 лет опыта',
    achievements: 'Мастер спорта, Педагог-психолог',
    specialization: 'Малыши 3-7 лет, игровые методики'
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Наша команда</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Профессиональные тренеры
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждый тренер имеет спортивное и педагогическое образование
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" size={40} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-dark text-center mb-1">
                {trainer.name}
              </h3>
              <p className="text-primary font-medium text-center mb-4">{trainer.title}</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Award" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{trainer.experience}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Medal" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{trainer.achievements}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Target" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{trainer.specialization}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
