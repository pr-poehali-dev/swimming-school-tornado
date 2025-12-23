import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const schedule = {
  weekdays: [
    { time: '08:00 - 09:00', group: 'Взрослые', level: 'Любой', pool: 'Большой бассейн' },
    { time: '15:00 - 15:45', group: 'Дошкольники 6-7 лет', level: 'Начальный', pool: 'Малый бассейн' },
    { time: '16:00 - 17:00', group: 'Младшая 8-10 лет', level: 'Базовый', pool: 'Большой бассейн' },
    { time: '17:00 - 17:30', group: 'Малыши 3-5 лет', level: 'Начальный', pool: 'Малый бассейн' },
    { time: '17:30 - 19:00', group: 'Средняя 11-13 лет', level: 'Продвинутый', pool: 'Большой бассейн' },
    { time: '19:00 - 21:00', group: 'Старшая 14-17 лет', level: 'Профессиональный', pool: 'Большой бассейн' }
  ],
  weekends: [
    { time: '09:00 - 09:30', group: 'Малыши 3-5 лет', level: 'Начальный', pool: 'Малый бассейн' },
    { time: '10:00 - 10:45', group: 'Дошкольники 6-7 лет', level: 'Начальный', pool: 'Малый бассейн' },
    { time: '11:00 - 12:00', group: 'Младшая 8-10 лет', level: 'Базовый', pool: 'Большой бассейн' },
    { time: '12:00 - 13:00', group: 'Взрослые', level: 'Любой', pool: 'Большой бассейн' },
    { time: '14:00 - 15:30', group: 'Средняя 11-13 лет', level: 'Продвинутый', pool: 'Большой бассейн' },
    { time: '16:00 - 18:00', group: 'Старшая 14-17 лет', level: 'Профессиональный', pool: 'Большой бассейн' }
  ]
};

export function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Расписание занятий</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Удобное время для всех
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Занятия проходят ежедневно в удобное для вас время
          </p>
        </div>

        <Tabs defaultValue="weekdays" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="weekdays" className="text-lg">Будние дни</TabsTrigger>
            <TabsTrigger value="weekends" className="text-lg">Выходные</TabsTrigger>
          </TabsList>

          <TabsContent value="weekdays" className="space-y-4">
            {schedule.weekdays.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg">
                      <span className="text-lg font-bold text-primary">{item.time}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark">{item.group}</h3>
                      <p className="text-sm text-gray-600">{item.pool}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {item.level}
                  </Badge>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="weekends" className="space-y-4">
            {schedule.weekends.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg">
                      <span className="text-lg font-bold text-primary">{item.time}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark">{item.group}</h3>
                      <p className="text-sm text-gray-600">{item.pool}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {item.level}
                  </Badge>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
