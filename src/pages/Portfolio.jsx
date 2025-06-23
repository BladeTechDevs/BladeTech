
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Smartphone, 
  Settings, 
  BarChart3,
  Filter,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: Filter },
    { id: 'web', name: 'Desarrollo Web', icon: Code },
    { id: 'mobile', name: 'Apps Móviles', icon: Smartphone },
    { id: 'automation', name: 'Automatización', icon: Settings },
    { id: 'analytics', name: 'Análisis de Datos', icon: BarChart3 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Sistema ERP Empresarial',
      description: 'Plataforma completa de gestión empresarial con módulos de inventario, ventas, contabilidad y recursos humanos.',
      category: 'web',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'Dashboard de sistema ERP moderno con gráficos y métricas empresariales',
      featured: true
    },
    {
      id: 2,
      title: 'App de Delivery',
      description: 'Aplicación móvil para delivery de comida con geolocalización, pagos integrados y seguimiento en tiempo real.',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps'],
      image: 'Aplicación móvil de delivery con mapa y seguimiento de pedidos',
      featured: true
    },
    {
      id: 3,
      title: 'Automatización de Procesos',
      description: 'Sistema de automatización con n8n que conecta CRM, email marketing y facturación automática.',
      category: 'automation',
      technologies: ['n8n', 'Zapier', 'API Integration', 'Webhooks'],
      image: 'Flujo de automatización conectando diferentes aplicaciones empresariales',
      featured: false
    },
    {
      id: 4,
      title: 'E-commerce Fashion',
      description: 'Tienda online de moda con catálogo dinámico, carrito de compras y pasarela de pagos integrada.',
      category: 'web',
      technologies: ['Next.js', 'Shopify', 'Tailwind CSS', 'Stripe'],
      image: 'Tienda online de moda con diseño elegante y productos destacados',
      featured: false
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      description: 'Panel de control con visualización de datos en tiempo real y reportes automatizados para toma de decisiones.',
      category: 'analytics',
      technologies: ['D3.js', 'Python', 'PostgreSQL', 'Docker'],
      image: 'Dashboard con gráficos interactivos y métricas de negocio en tiempo real',
      featured: true
    },
    {
      id: 6,
      title: 'App Fitness Tracker',
      description: 'Aplicación para seguimiento de ejercicios con planes personalizados y sincronización con wearables.',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit'],
      image: 'Aplicación de fitness con seguimiento de ejercicios y estadísticas',
      featured: false
    },
    {
      id: 7,
      title: 'CRM Inmobiliario',
      description: 'Sistema de gestión de clientes para inmobiliaria con seguimiento de leads y automatización de marketing.',
      category: 'web',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      image: 'CRM inmobiliario con gestión de propiedades y clientes',
      featured: false
    },
    {
      id: 8,
      title: 'Workflow Automation',
      description: 'Automatización completa de procesos de aprobación y documentos con notificaciones inteligentes.',
      category: 'automation',
      technologies: ['n8n', 'Microsoft Graph', 'SharePoint', 'Teams'],
      image: 'Sistema de workflow con aprobaciones automáticas y notificaciones',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Portafolio - Blade Tech | Proyectos de Desarrollo de Software</title>
        <meta name="description" content="Explora nuestro portafolio de proyectos de desarrollo de software, aplicaciones móviles, automatización y análisis de datos." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nuestro <span className="text-gradient">Portafolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre los proyectos que hemos desarrollado para empresas de diferentes sectores, 
              transformando ideas en soluciones digitales exitosas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden hover-lift border border-gray-100 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destacado
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img  
                    alt={project.image}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={handleProjectClick}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      onClick={handleProjectClick}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={handleProjectClick}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm group/btn"
                  >
                    <span>Ver Proyecto</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No hay proyectos en esta categoría
              </h3>
              <p className="text-gray-600">
                Selecciona otra categoría para ver más proyectos
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados que Hablan por Sí Solos
            </h2>
            <p className="text-xl text-gray-600">
              Números que reflejan nuestro compromiso con la excelencia
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Proyectos Completados' },
              { number: '98%', label: 'Satisfacción del Cliente' },
              { number: '24/7', label: 'Soporte Técnico' },
              { number: '5★', label: 'Calificación Promedio' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ¿Tienes un proyecto en mente?
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Convierte tu idea en realidad. Contáctanos para discutir tu proyecto y crear algo increíble juntos
            </p>
            
            <Button 
              onClick={handleProjectClick}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg hover-lift"
            >
              Comenzar Proyecto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
