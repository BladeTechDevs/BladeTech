import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Settings,
  Code,
  Smartphone,
  Users,
  CheckCircle,
  Star,
  Zap,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import blade from "@/img/blade.jpg"; // Assuming you have a blade image in your assets
const Home = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Settings,
      title: "Automatización n8n",
      description:
        "Optimizamos tus procesos empresariales con flujos automatizados inteligentes.",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Sitios web modernos, e-commerce y aplicaciones web escalables.",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description:
        "Aplicaciones nativas para iOS y Android con experiencia excepcional.",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Users,
      title: "Consultoría Tech",
      description:
        "Asesoramiento estratégico para la transformación digital de tu empresa.",
      color: "from-blue-600 to-blue-800",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Desarrollo Ágil",
      description: "Metodologías modernas para entregas rápidas y eficientes.",
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description:
        "Implementamos las mejores prácticas de seguridad en cada proyecto.",
    },
    {
      icon: BarChart3,
      title: "Escalabilidad",
      description: "Soluciones que crecen junto con tu negocio.",
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description:
        "Asistencia técnica continua para mantener todo funcionando.",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      company: "TechCorp",
      text: "Blade Tech transformó completamente nuestros procesos. La automatización nos ahorró 40% del tiempo.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      company: "InnovateLab",
      text: "El equipo de desarrollo es excepcional. Entregaron nuestra app móvil antes del plazo.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      company: "DataFlow",
      text: "Su consultoría tecnológica nos ayudó a escalar nuestro negocio de manera inteligente.",
      rating: 5,
    },
  ];

  const handleCTAClick = (action) => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description:
        "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blade Tech - Soluciones Tecnológicas a Medida</title>
        <meta
          name="description"
          content="Automatizamos tus procesos y desarrollamos software escalable para tu empresa. Especialistas en n8n, desarrollo web, apps móviles y consultoría tecnológica."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-300 via-white to-purple-200">
        <div className="absolute inset-0 tech-pattern"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Innovación Tecnológica
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Soluciones
                  <span className="text-gradient block pb-2">Tecnológicas</span>
                  a Medida
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Automatizamos tus procesos y desarrollamos software escalable
                  para tu empresa. Transformamos ideas en soluciones digitales
                  que impulsan el crecimiento.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover-lift pulse-glow"
                  >
                    Contactar Ahora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <Link to="/servicios">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg hover-lift"
                  >
                    Ver Servicios
                  </Button>
                </Link>
              </div>

              {/* <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Soporte</div>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  alt="Equipo de desarrollo trabajando en soluciones tecnológicas"
                  className="w-full h-auto rounded-2xl shadow-2xl floating-animation"
                  src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Fondo con imagen y overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629905679177-4c4e2623654f?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fondo tecnológico abstracto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        </div>

        {/* Contenido */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para impulsar tu
              negocio hacia el futuro digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/95 rounded-2xl p-8 shadow-xl hover-lift border border-gray-100 backdrop-blur-[1px] hover:backdrop-blur-[2px] transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                alt="Tecnología y automatización empresarial"
                className="w-full h-auto rounded-2xl shadow-xl"
                src={blade}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  ¿Por qué elegir Blade Tech?
                </h2>
                <p className="text-xl text-gray-600">
                  Combinamos experiencia técnica con innovación para entregar
                  soluciones que realmente transforman tu negocio.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de empresas que han transformado su negocio con
              nosotros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-600 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat">
        {/* Fondo con imagen y overlay para mejor contraste */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630332457231-3f276a81a0a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fondo tecnológico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>

        {/* Contenido */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              ¿Listo para transformar tu negocio?
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-md">
              Contáctanos hoy y descubre cómo nuestras soluciones tecnológicas
              pueden llevar tu empresa al siguiente nivel
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg hover-lift shadow-lg"
                >
                  Comenzar Proyecto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleCTAClick("schedule")}
                className="border-2 border-white text-blue-600 hover:bg-white/10 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg hover-lift shadow-lg backdrop-blur-sm"
              >
                Agendar Consulta
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
