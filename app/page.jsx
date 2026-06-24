'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Star } from 'lucide-react';

export default function DanceAcademyLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const danceClasses = [
    {
      id: 1,
      name: 'Danza Nacionalista',
      level: 'Principiante',
      image: '/img-nacionalista.jpeg',
      description: 'Aprende la elegancia y técnica de la danza folclórica nacional',
      instructor: 'María González'
    },
    {
      id: 2,
      name: 'Danza Comercial',
      level: 'Intermedio',
      image: '/img-comercial.jpeg',
      description: 'Explora movimientos expresivos y coreografía moderna comercial',
      instructor: 'Carlos Rivera'
    },
    {
      id: 3,
      name: 'Danza Urbano',
      level: 'Todos los niveles',
      image: '/img-urbano.jpeg',
      description: 'Clases de alta energía con los últimos estilos urbanos',
      instructor: 'DJ Luna'
    },
    {
      id: 4,
      name: 'Gimnasia',
      level: 'Intermedio',
      image: 'img-nacionalista-2.jpeg',
      description: 'Desarrolla fuerza, flexibilidad y control del cuerpo',
      instructor: 'Ana Martínez'
    },
    {
      id: 5,
      name: 'Porrismo',
      level: 'Intermedio',
      image: '/img-patti.jpeg',
      description: 'Aprende acrobacias, porras y coreografías de porrismo',
      instructor: 'Sofia López'
    }
  ];

  const features = [
    {
      title: 'Instructores Expertos',
      description: 'Aprende de coreógrafos galardonados con más de 20 años de experiencia'
    },
    {
      title: 'Horarios Flexibles',
      description: 'Clases disponibles en mañana, tarde y noche para adaptarse a tu vida'
    },
    {
      title: 'Enfoque Comunitario',
      description: 'Únete a una familia acogedora que celebra el recorrido de cada estudiante'
    },
    {
      title: 'Listos para Actuar',
      description: 'Presentaciones y recitales regulares para compartir tu crecimiento con el mundo'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#1a1a2e] to-[#ff6b6b] bg-clip-text text-transparent">
              DIAMOND STUDIOS
            </div>
            
            <div className="hidden md:flex gap-8">
              {['Inicio', 'Clases', 'Acerca de', 'Contacto'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#ff6b6b] transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden sm:inline-block px-6 py-2 bg-[#ff6b6b] text-white rounded-full font-semibold hover:bg-[#ff5252] transition-colors">
                Únete Ahora
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pt-4 border-t border-gray-100 mt-4">
              {['Inicio', 'Clases', 'Acerca de', 'Contacto'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-[#ff6b6b] transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 py-2 bg-[#ff6b6b] text-white rounded-full font-semibold">
                Únete Ahora
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#ff6b6b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#d4a574] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="inline-block text-[#ff6b6b] font-semibold text-sm tracking-widest mb-4 uppercase">
              Descubre tu Movimiento
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Baila Hacia Tu Mejor Versión
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Únete a Diamond Studios y desbloquea el artista que llevas dentro. Desde danza folclórica hasta urbano, encuentra tu ritmo con nuestros instructores galardonados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#ff6b6b] text-white rounded-full font-semibold hover:bg-[#ff5252] transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Comienza tu Viaje
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-[#1a1a2e] text-[#1a1a2e] rounded-full font-semibold hover:bg-[#1a1a2e] hover:text-white transition-all">
                Ver Demo
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-[#ff6b6b]">2.5K+</div>
                <p className="text-gray-600">Estudiantes Activos</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#ff6b6b]">50+</div>
                <p className="text-gray-600">Clases Semanales</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#ff6b6b]">15</div>
                <p className="text-gray-600">Instructores Expertos</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 sm:h-[500px]">
            <img
              src="/img-hero.jpeg"
              alt="Bailarines en movimiento"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#1a1a2e]/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
              ¿Por Qué Elegir Diamond Studios?
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para crecer como bailarín e intérprete
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#ff6b6b] rounded-full mb-4 flex items-center justify-center">
                  <Star size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="clases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ff6b6b] font-semibold text-sm tracking-widest mb-4 uppercase">
              Nuestras Ofertas
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
              Clases para Todos los Estilos
            </h2>
            <p className="text-xl text-gray-600">
              Explora nuestra diversa gama de disciplinas de danza
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {danceClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-[#ff6b6b] transition-all"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-xs font-semibold bg-[#ff6b6b] text-white px-3 py-1 rounded-full">
                    {classItem.level}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                    {classItem.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {classItem.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 font-medium">
                      {classItem.instructor}
                    </span>
                    <ArrowRight size={16} className="text-[#ff6b6b] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e] text-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff6b6b] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ¿Listo para Comenzar tu Viaje de Danza?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete a cientos de estudiantes que han transformado sus vidas a través de la danza
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#ff6b6b] text-white rounded-full font-semibold hover:bg-[#ff5252] transition-all transform hover:scale-105">
              Comienza Hoy
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#1a1a2e] transition-all">
              Agendar Clase de Prueba
            </button>
          </div>

          <p className="text-gray-400 mt-8 text-sm">
            Primera clase gratis. No se requiere tarjeta de crédito.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca de" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/img-urbano.jpeg"
              alt="Acerca de Diamond Studios"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <span className="inline-block text-[#ff6b6b] font-semibold text-sm tracking-widest mb-4 uppercase">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Acerca de Diamond Studios
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Diamond Studios es una academia de danza comprometida con la excelencia artística y el desarrollo integral de nuestros estudiantes. Con más de una década de experiencia, hemos entrenado a cientos de bailarines que hoy se destacan en festivales, competencias y producciones profesionales.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nuestro enfoque combina técnica profesional con un ambiente inclusivo y motivador, donde cada estudiante puede expresar su creatividad y alcanzar sus metas artísticas.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#ff6b6b] rounded-full flex items-center justify-center flex-shrink-0">
                  <Star size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">Misión</h3>
                  <p className="text-gray-600">Desarrollar talento dancístico y formar artistas versátiles preparados para el mundo profesional.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#ff6b6b] rounded-full flex items-center justify-center flex-shrink-0">
                  <Star size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">Visión</h3>
                  <p className="text-gray-600">Ser la academia de danza líder en la región, reconocida por la calidad de sus instructores y éxito de sus estudiantes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ff6b6b] font-semibold text-sm tracking-widest mb-4 uppercase">
              Ponte en Contacto
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600">
              ¿Preguntas? Nos encantaría saber de ti
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-[#ff6b6b] rounded-full mb-4 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Ubicación</h3>
              <p className="text-gray-600">Calle Principal 123<br />Ciudad, País 00000</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-[#ff6b6b] rounded-full mb-4 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Correo</h3>
              <p className="text-gray-600">info@diamondstudios.com<br />contacto@diamondstudios.com</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-[#ff6b6b] rounded-full mb-4 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Teléfono</h3>
              <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b6b]"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b6b]"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Asunto</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b6b]"
                  placeholder="¿Sobre qué es tu mensaje?"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b6b]"
                  placeholder="Tu mensaje aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#ff6b6b] text-white rounded-full font-semibold hover:bg-[#ff5252] transition-all transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">DIAMOND STUDIOS</h3>
              <p className="text-gray-600">
                Donde la pasión se encuentra con la precisión en cada paso.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1a1a2e] mb-4">Clases</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Nacionalista</a></li>
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Comercial</a></li>
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Urbano</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1a1a2e] mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Acerca de</a></li>
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Equipo</a></li>
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1a1a2e] mb-4">Síguenos</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
            <p>&copy; 2024 Diamond Studios. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-[#ff6b6b] transition-colors">Privacidad</a>
              <a href="#" className="hover:text-[#ff6b6b] transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}