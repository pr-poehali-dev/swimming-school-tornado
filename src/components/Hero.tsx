import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-blue-500 to-accent overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-t-[100%]"></div>
        <div className="absolute bottom-8 left-0 right-0 h-32 bg-white rounded-t-[100%]"></div>
        <div className="absolute bottom-16 left-0 right-0 h-32 bg-white rounded-t-[100%]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Award" size={20} />
            <span className="text-sm font-medium">Олимпийский резерв России</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Школа плавания<br />«Торнадо»
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Профессиональное обучение плаванию для детей и взрослых.<br />
            От первого занятия до олимпийских медалей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на пробное занятие
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Выбрать программу
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
              <div className="text-sm md:text-base text-white/80">лет опыта</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2500+</div>
              <div className="text-sm md:text-base text-white/80">выпускников</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <div className="text-sm md:text-base text-white/80">тренеров</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
