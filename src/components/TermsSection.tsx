import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const termsData = [
  {
    title: "Vigencia y Renovación",
    content: "La suscripción anual entra en vigor desde la fecha de contratación y se renueva automáticamente, salvo notificación de cancelación con al menos 30 días de antelación."
  },
  {
    title: "Pagos y Facturación",
    content: "El pago del plan se realiza por adelantado al inicio de cada período anual. En caso de no renovación, el acceso a la plataforma se suspenderá al final del período contratado."
  },
  {
    title: "Descuentos Early Adopter",
    content: "El precio Early Adopter aplica únicamente para nuevas contrataciones de Plan Premium antes de la fecha de lanzamiento oficial. No acumulable con otras promociones ni aplicable retroactivamente."
  },
  {
    title: "Uso de Evaluaciones",
    content: "Las evaluaciones no utilizadas durante el período contratado no son transferibles ni acumulables. Para planes con evaluaciones ilimitadas, el uso debe ajustarse a un patrón de consumo razonable; Skilt podrá solicitar revisión si se detecta uso abusivo."
  },
  {
    title: "Soporte y SLA",
    content: "Los tiempos de respuesta de soporte dependen del plan contratado: Starter (soporte por email, 48h hábiles), Professional (soporte chat, 24h hábiles), Premium (SLA de 4h y soporte telefónico), Enterprise (SLA personalizado según acuerdo)."
  },
  {
    title: "Modificaciones al Servicio",
    content: "Skilt puede actualizar características y precios anualmente. Cualquier cambio será notificado con 60 días de antelación."
  },
  {
    title: "Propiedad Intelectual",
    content: "Todo el contenido de la plataforma, incluidos retos, informes y herramientas, es propiedad de Skilt. El cliente recibe una licencia de uso no exclusiva y no transferible."
  },
  {
    title: "Servicios Adicionales",
    content: "Cualquier servicio o entregable fuera del alcance descrito (personalizaciones, consultorías extra, integración a medida) se cotizará y facturará por separado."
  },
  {
    title: "Confidencialidad",
    content: "Ambas partes acuerdan mantener la confidencialidad sobre la información técnica, comercial y de usuarios compartida durante la vigencia del contrato."
  },
  {
    title: "Jurisdicción",
    content: "Este contrato se regirá por las leyes de Ecuador. Cualquier disputa será resuelta ante los tribunales competentes de Quito."
  }
];

export const TermsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Términos y Condiciones
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-2">
          {termsData.map((term, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-medium">{term.title}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {term.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            Para más detalles o personalizaciones, contáctanos en{" "}
            <span className="font-medium text-primary">096-422-2040</span> o visita{" "}
            <span className="font-medium text-primary">skilt.io</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};