import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file: File) => {
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      setVideoFile(url);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent to-secondary">
      <div className="container mx-auto px-4 py-12 md:py-20">
        
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            Для самой любимой мамы
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            С любовью и теплом 💝
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-16">
          
          <section className="animate-scale-in" style={{ animationDelay: '0.2s', opacity: 0, animation: 'scale-in 0.5s ease-out 0.2s forwards' }}>
            <Card className="overflow-hidden shadow-2xl border-primary/20 bg-white/95 backdrop-blur">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Video" size={32} className="text-primary" />
                  <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                    Видео-открытка
                  </h2>
                </div>
                
                {!videoFile ? (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`aspect-video rounded-2xl overflow-hidden bg-muted shadow-inner border-2 border-dashed transition-all ${
                      isDragging ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-primary/30'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <Icon name="Upload" size={64} className="text-primary mb-4 opacity-50" />
                      <p className="text-xl text-foreground mb-2">
                        Перетащите видео сюда
                      </p>
                      <p className="text-muted-foreground mb-6">
                        или выберите файл
                      </p>
                      <label className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer">
                        Выбрать видео
                        <input
                          type="file"
                          accept="video/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileChange(file);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="aspect-video rounded-2xl overflow-hidden bg-muted shadow-inner">
                      <video
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        src={videoFile}
                      >
                        Ваш браузер не поддерживает видео
                      </video>
                    </div>
                    <button
                      onClick={() => setVideoFile(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mx-auto"
                    >
                      <Icon name="RefreshCw" size={16} />
                      Загрузить другое видео
                    </button>
                  </div>
                )}
              </div>
            </Card>
          </section>

          <section className="animate-scale-in" style={{ animationDelay: '0.4s', opacity: 0, animation: 'scale-in 0.5s ease-out 0.4s forwards' }}>
            <Card className="shadow-2xl border-secondary/20 bg-white/95 backdrop-blur">
              <div className="p-6 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <Icon name="Heart" size={32} className="text-secondary" />
                  <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                    Пожелания
                  </h2>
                </div>
                
                <div className="space-y-8 text-foreground">
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl leading-relaxed font-light">
                      Дорогая мамочка, ты — самый важный человек в моей жизни. 
                      Твоя любовь, забота и поддержка всегда со мной, даже когда мы далеко друг от друга.
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed font-light">
                      Спасибо тебе за всё, что ты для меня делаешь. За теплые объятия, 
                      мудрые советы и веру в меня. Ты — мой главный человек! ✨
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 pt-8">
                    {[
                      { icon: 'Sparkles', text: 'Здоровья и радости' },
                      { icon: 'Sun', text: 'Счастья каждый день' },
                      { icon: 'Smile', text: 'Улыбок и тепла' }
                    ].map((wish, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center p-6 rounded-2xl bg-accent/50 hover:bg-accent transition-colors"
                      >
                        <Icon name={wish.icon} size={40} className="text-accent-foreground mb-3" />
                        <p className="text-lg font-medium text-accent-foreground">
                          {wish.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl text-center font-semibold text-primary-foreground pt-8">
                    Люблю тебя бесконечно! 💕
                  </p>
                </div>
              </div>
            </Card>
          </section>
        </div>

        <footer className="text-center mt-20 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0, animation: 'fade-in 0.6s ease-out 0.6s forwards' }}>
          <p className="text-muted-foreground text-lg">
            С любовью создано специально для тебя 🌸
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;