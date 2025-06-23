import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Code, 
  Smartphone, 
  Users, 
  Cloud, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Database,
  Shield,
  Workflow
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// Importar imágenes para cada servicio
import automationImg from '@/assets/services/n8n.png';
import softwareDevImg from '@/assets/services/software.png';
import webDesignImg from '@/assets/services/webdos.png';
import mobileAppsImg from '@/assets/services/app.jpg';
import devopsImg from '@/assets/services/aws.png';
import dataAnalysisImg from '@/assets/services/web.png';

const Services = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Settings,
      title: 'Automatización con n8n',
      description: 'Optimizamos tus procesos empresariales con flujos automatizados inteligentes que conectan todas tus herramientas.',
      features: [
        'Integración de sistemas existentes',
        'Flujos de trabajo personalizados',
        'Automatización de tareas repetitivas',
        'Monitoreo y alertas en tiempo real'
      ],
      color: 'from-blue-500 to-blue-600',
      image: automationImg
    },
    {
      icon: Code,
      title: 'Desarrollo de Software',
      description: 'Creamos soluciones de software a medida: ERP, CRM, SaaS y sistemas empresariales escalables.',
      features: [
        'Sistemas ERP personalizados',
        'Plataformas CRM avanzadas',
        'Aplicaciones SaaS escalables',
        'APIs y microservicios'
      ],
      color: 'from-purple-500 to-purple-600',
      image: softwareDevImg
    },
    {
      icon: Smartphone,
      title: 'Diseño Web & E-commerce',
      description: 'Sitios web modernos, tiendas online y landing pages optimizadas para conversión y experiencia de usuario.',
      features: [
        'Diseño responsive y moderno',
        'E-commerce con pasarelas de pago',
        'Landing pages optimizadas',
        'SEO y optimización de velocidad'
      ],
      color: 'from-green-500 to-green-600',
      image: webDesignImg
    },
    {
      icon: Smartphone,
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas para iOS y Android con experiencia excepcional y funcionalidades avanzadas.',
      features: [
        'Desarrollo nativo iOS/Android',
        'Aplicaciones híbridas',
        'Integración con APIs',
        'Publicación en stores'
      ],
      color: 'from-orange-500 to-orange-600',
      image: mobileAppsImg
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Infraestructura en la nube, CI/CD, Docker y soluciones AWS para escalabilidad y rendimiento.',
      features: [
        'Infraestructura AWS/Azure',
        'Contenedores Docker',
        'CI/CD automatizado',
        'Monitoreo y logging'
      ],
      color: 'from-cyan-500 to-cyan-600',
      image: devopsImg
    },
    {
      icon: BarChart3,
      title: 'Análisis de Datos',
      description: 'Dashboards interactivos, Business Intelligence y análisis predictivo para decisiones informadas.',
      features: [
        'Dashboards interactivos',
        'Business Intelligence',
        'Análisis predictivo',
        'Reportes automatizados'
      ],
      color: 'from-indigo-500 to-indigo-600',
      image: dataAnalysisImg
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Consulta Inicial',
      description: 'Analizamos tus necesidades y objetivos empresariales.'
    },
    {
      icon: Workflow,
      title: 'Planificación',
      description: 'Diseñamos la estrategia y arquitectura de la solución.'
    },
    {
      icon: Code,
      title: 'Desarrollo',
      description: 'Implementamos la solución con metodologías ágiles.'
    },
    {
      icon: Shield,
      title: 'Testing & Deploy',
      description: 'Probamos exhaustivamente y desplegamos la solución.'
    }
  ];

  const handleContactClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Servicios - Blade Tech | Desarrollo de Software y Automatización</title>
        <meta name="description" content="Servicios de desarrollo de software, automatización n8n, aplicaciones móviles, DevOps y análisis de datos. Soluciones tecnológicas profesionales." />
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
              Nuestros <span className="text-gradient">Servicios</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para transformar tu negocio y optimizar tus procesos empresariales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      onClick={handleContactClick}
                      className={`bg-gradient-to-r ${service.color} text-white hover:opacity-90 px-6 py-3 rounded-lg font-semibold hover-lift`}
                    >
                      Solicitar Información
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative">
                      <img  
                        alt={service.title}
                        className="w-full h-auto rounded-2xl shadow-xl hover-lift"
                        src={service.image}
                        loading="lazy"
                      />
                      <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${service.color} rounded-full opacity-20 blur-xl`}></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
<section className="py-20 relative">
  {/* Fondo con imagen y overlay */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1629905679177-4c4e2623654f?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Fondo abstracto de tecnología"
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Nuestro Proceso de Trabajo
      </h2>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto">
        Seguimos una metodología probada para garantizar el éxito de cada proyecto
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {processSteps.map((step, index) => {
        const IconComponent = step.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <IconComponent className="w-8 h-8 text-blue-600" />
              </div>
              
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-700">
                {step.description}
              </p>
            </div>

            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                <ArrowRight className="w-8 h-8 text-white/70" />
              </div>
            )}
          </motion.div>
        );
      })}
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
              ¿Necesitas una solución personalizada?
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contáctanos para discutir tu proyecto y descubrir cómo podemos ayudarte a alcanzar tus objetivos
            </p>
            
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg hover-lift"
            >
              Contactar Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;