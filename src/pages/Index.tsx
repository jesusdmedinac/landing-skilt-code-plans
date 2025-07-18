import { Code2, Users, Building2, Zap, Shield, BarChart, Puzzle, Crown } from 'lucide-react';
import { PricingCard } from '@/components/PricingCard';
import { FeatureComparison } from '@/components/FeatureComparison';
import { TermsSection } from '@/components/TermsSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'PYMEs y equipos pequeños',
    evaluations: '120',
    price: '100',
    features: [
      'Features base',
      'Perfiles determinados cargados',
      'Acceso a la plataforma básica',
      'Documentación completa'
    ],
    icon: <Code2 className="w-6 h-6 text-primary" />
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Equipos de reclutamiento y RR.HH.',
    evaluations: '600',
    price: '299',
    features: [
      'Perfiles determinados cargados',
      'Selección de plantillas de retos',
      'Informe básico de resultados',
      'Soporte por email',
      'Dashboard de gestión'
    ],
    icon: <Users className="w-6 h-6 text-primary" />
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Agencias de selección y grandes equipos',
    evaluations: 'Ilimitadas',
    originalPrice: '1100',
    price: '1100',
    earlyAdopterPrice: '699',
    popular: true,
    features: [
      'Evaluaciones ilimitadas (por temporada)',
      'Perfiles determinados cargados',
      'Consultoría en diseño de retos',
      'Comparativa de candidatos',
      'Soporte chat prioritario',
      'Analytics avanzados'
    ],
    icon: <Crown className="w-6 h-6 text-premium" />
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Grandes empresas y multinacionales',
    evaluations: 'Ilimitadas',
    price: 'A medida',
    enterprise: true,
    features: [
      'Todo lo del premium',
      'Editor de retos personalizado',
      'Branding y dominio propio',
      'API completa para integración',
      'SLA 4h y soporte telefónico',
      'Consultoría dedicada',
      'Onboarding personalizado'
    ],
    icon: <Building2 className="w-6 h-6 text-success" />
  }
];

const benefits = [
  {
    icon: <Puzzle className="w-8 h-8 text-primary" />,
    title: "Editor de retos",
    description: "Crea desafíos a la medida de cada perfil técnico."
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Analítica y reportes",
    description: "Desde resultados básicos hasta dashboards comparativos con métricas avanzadas."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Integraciones",
    description: "Con tu ATS, Slack, Teams o mediante API para automatizar flujos de selección."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Soporte y SLA",
    description: "Respuesta garantizada según plan (email, chat, teléfono)."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-4 border-white/20 text-white">
            Coding Challenges Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skilt <span className="text-amber-300">Coding</span> Challenges
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Optimiza tu proceso de selección técnica con evaluaciones personalizadas 
            que identifican el talento real de tus candidatos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/593964222040" target="_blank" rel="noopener noreferrer">
              <Button variant="premium" size="xl">
                Solicitar Demo Gratuita
              </Button>
            </a>
            <a href="#pricing">
              <Button size="xl">
                Ver Planes
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planes y Precios</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu volumen anual de evaluaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Resumen de beneficios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-card rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="mb-16">
            <FeatureComparison />
          </div>

          {/* Terms Section */}
          <TermsSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para optimizar tu proceso de selección?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Empieza hoy mismo con Skilt Coding Challenges y descubre el verdadero potencial de tus candidatos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Comenzar Gratis
            </Button>
            <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10">
              Hablar con Ventas
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
