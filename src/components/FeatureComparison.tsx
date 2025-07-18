import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  premium: boolean | string;
  enterprise: boolean | string;
}

const features: Feature[] = [
  {
    name: "Perfiles determinados cargados",
    starter: true,
    professional: true,
    premium: true,
    enterprise: true
  },
  {
    name: "Selección de plantillas de retos",
    starter: false,
    professional: true,
    premium: true,
    enterprise: true
  },
  {
    name: "Informe básico de resultados",
    starter: false,
    professional: true,
    premium: true,
    enterprise: true
  },
  {
    name: "Soporte por email",
    starter: false,
    professional: true,
    premium: true,
    enterprise: true
  },
  {
    name: "Evaluaciones ilimitadas",
    starter: false,
    professional: false,
    premium: true,
    enterprise: true
  },
  {
    name: "Consultoría en diseño de retos",
    starter: false,
    professional: false,
    premium: true,
    enterprise: true
  },
  {
    name: "Comparativa de candidatos",
    starter: false,
    professional: false,
    premium: true,
    enterprise: true
  },
  {
    name: "Soporte chat",
    starter: false,
    professional: false,
    premium: true,
    enterprise: true
  },
  {
    name: "Editor de retos personalizado",
    starter: false,
    professional: false,
    premium: false,
    enterprise: true
  },
  {
    name: "Branding y dominio propio",
    starter: false,
    professional: false,
    premium: false,
    enterprise: true
  },
  {
    name: "API completa para integración",
    starter: false,
    professional: false,
    premium: false,
    enterprise: true
  },
  {
    name: "SLA 4h y soporte telefónico",
    starter: false,
    professional: false,
    premium: false,
    enterprise: true
  }
];

const FeatureCell = ({ value }: { value: boolean | string }) => {
  if (typeof value === 'string') {
    return <span className="text-sm text-muted-foreground">{value}</span>;
  }
  
  return value ? (
    <Check className="w-4 h-4 text-primary mx-auto" />
  ) : (
    <X className="w-4 h-4 text-muted-foreground mx-auto" />
  );
};

export const FeatureComparison = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Comparación Detallada de Características
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="text-left p-4 font-medium">Característica</th>
                <th className="text-center p-4 font-medium">Starter</th>
                <th className="text-center p-4 font-medium">Professional</th>
                <th className="text-center p-4 font-medium bg-premium/10">Premium</th>
                <th className="text-center p-4 font-medium bg-success/10">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">{feature.name}</td>
                  <td className="p-4 text-center">
                    <FeatureCell value={feature.starter} />
                  </td>
                  <td className="p-4 text-center">
                    <FeatureCell value={feature.professional} />
                  </td>
                  <td className="p-4 text-center bg-premium/5">
                    <FeatureCell value={feature.premium} />
                  </td>
                  <td className="p-4 text-center bg-success/5">
                    <FeatureCell value={feature.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};