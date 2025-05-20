'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getProverbsAdvice, type ProverbsAdviceOutput } from '@/ai/flows/proverbs-advice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, MessageSquareHeart, Loader2 } from 'lucide-react';

const AdviceSchema = z.object({
  struggle: z.string().min(10, { message: 'Por favor, describe tu lucha con al menos 10 caracteres.' }).max(500, { message: 'La descripción no debe exceder los 500 caracteres.' }),
});

type AdviceFormValues = z.infer<typeof AdviceSchema>;

export function AiAdvice() {
  const [advice, setAdvice] = useState<ProverbsAdviceOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AdviceFormValues>({
    resolver: zodResolver(AdviceSchema),
    defaultValues: {
      struggle: '',
    },
  });

  const onSubmit: SubmitHandler<AdviceFormValues> = async (data) => {
    setIsLoading(true);
    setAdvice(null);
    try {
      const result = await getProverbsAdvice({ struggle: data.struggle });
      setAdvice(result);
      toast({
        title: "Consejo Generado",
        description: "Hemos encontrado un consejo para ti.",
      });
    } catch (error) {
      console.error("Error fetching advice:", error);
      toast({
        title: "Error",
        description: "No se pudo generar el consejo. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Sparkles className="mr-2 h-6 w-6 text-primary" />
          Consejo Personalizado de Proverbios 1
        </CardTitle>
        <CardDescription>
          Describe una lucha o situación personal y la IA encontrará un versículo relevante de Proverbios 1 con una explicación para ofrecerte guía y sabiduría.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="struggle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="struggle" className="text-md">Describe tu situación o lucha:</FormLabel>
                  <FormControl>
                    <Textarea
                      id="struggle"
                      placeholder="Ej: Tengo dificultades para tomar decisiones importantes..."
                      className="resize-none min-h-[100px]"
                      {...field}
                      aria-describedby="struggle-message"
                    />
                  </FormControl>
                  <FormMessage id="struggle-message" />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generando Consejo...
                </>
              ) : (
                <>
                  <MessageSquareHeart className="mr-2 h-4 w-4" />
                  Obtener Consejo
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>

      {advice && (
        <CardContent className="mt-6 border-t pt-6">
          <h3 className="text-lg font-semibold mb-2 text-primary">Consejo Inspirado:</h3>
          <div className="bg-primary/10 p-4 rounded-md shadow">
            <p className="font-semibold text-lg mb-2">"{advice.verse}"</p>
            <p className="text-md leading-relaxed">{advice.explanation}</p>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
