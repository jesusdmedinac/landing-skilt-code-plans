import { Check, Star, Crown, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  evaluations: string;
  originalPrice?: string;
  price: string;
  earlyAdopterPrice?: string;
  features: string[];
  popular?: boolean;
  enterprise?: boolean;
  icon: React.ReactNode;
}

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  const isPopular = plan.popular;
  const isEnterprise = plan.enterprise;
  const hasEarlyAdopter = plan.earlyAdopterPrice;

  return (
    <Card className={`
      relative overflow-hidden transition-all duration-300 hover:scale-105
      ${isPopular ? 'border-premium shadow-strong bg-gradient-card' : 'shadow-soft hover:shadow-medium'}
      ${isEnterprise ? 'border-success' : ''}
    `}>
      {isPopular && (
        <div className="absolute -top-1 -right-1 bg-gradient-primary p-2 rounded-bl-lg">
          <Badge variant="secondary" className="bg-premium text-premium-foreground border-none">
            <Star className="w-3 h-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto p-3 rounded-xl bg-gradient-card w-fit">
          {plan.icon}
        </div>
        
        <div>
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            {plan.name}
            {isPopular && <Crown className="w-5 h-5 text-premium" />}
          </CardTitle>
          <CardDescription className="mt-2 text-base">
            {plan.description}
          </CardDescription>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
            <strong>{plan.evaluations}</strong> evaluaciones/año
          </div>
          
          <div className="space-y-1">
            {hasEarlyAdopter && (
              <div className="space-y-1">
                <div className="text-3xl font-bold text-premium">
                  ${plan.earlyAdopterPrice}
                </div>
                <div className="text-sm text-muted-foreground line-through">
                  Precio normal: ${plan.originalPrice}
                </div>
                <Badge variant="outline" className="border-premium text-premium">
                  Early Adopter
                </Badge>
              </div>
            )}
            
            {!hasEarlyAdopter && (
              <div className="text-3xl font-bold">
                {plan.price === 'A medida' ? plan.price : `$${plan.price}`}
              </div>
            )}
            
            {plan.price !== 'A medida' && (
              <div className="text-sm text-muted-foreground">
                /año
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <a href="https://wa.me/593964222040" target="_blank" rel="noopener noreferrer">
          <Button 
            className="w-full" 
            variant={isPopular ? "premium" : isEnterprise ? "enterprise" : "default"}
            size="lg"
          >
            {isEnterprise ? 'Contactar Ventas' : 'Comenzar Ahora'}
        </Button>
        </a>
        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
            Características incluidas
          </h4>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};