import { Badge } from '@/components/ui/badge';

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Галерея</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Наши достижения
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Тренировки, соревнования и победы наших учеников
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div 
              key={item}
              className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-4xl">🏊‍♂️</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
