'use server';

/**
 * @fileOverview An AI agent that provides personalized advice based on Proverbs 1.
 *
 * - getProverbsAdvice - A function that provides personalized advice based on Proverbs 1.
 * - ProverbsAdviceInput - The input type for the getProverbsAdvice function.
 * - ProverbsAdviceOutput - The return type for the getProverbsAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProverbsAdviceInputSchema = z.object({
  struggle: z.string().describe('A description of the personal struggle.'),
});
export type ProverbsAdviceInput = z.infer<typeof ProverbsAdviceInputSchema>;

const ProverbsAdviceOutputSchema = z.object({
  verse: z.string().describe('A relevant verse from Proverbs 1 (RVR60).'),
  explanation: z.string().describe('An AI-generated explanation of the verse.'),
});
export type ProverbsAdviceOutput = z.infer<typeof ProverbsAdviceOutputSchema>;

export async function getProverbsAdvice(input: ProverbsAdviceInput): Promise<ProverbsAdviceOutput> {
  return proverbsAdviceFlow(input);
}

const proverbsAdvicePrompt = ai.definePrompt({
  name: 'proverbsAdvicePrompt',
  input: {schema: ProverbsAdviceInputSchema},
  output: {schema: ProverbsAdviceOutputSchema},
  prompt: `You are a helpful AI assistant that provides guidance based on Proverbs 1 (RVR60 version).

  A user will describe a personal struggle, and you will respond with a relevant verse from Proverbs 1 that provides wisdom and guidance for their situation, along with a helpful explanation of the verse.

  User Struggle: {{{struggle}}}

  Proverbs 1 (RVR60):
  1 Los proverbios de Salomón, hijo de David, rey de Israel.
  2 Para conocer la sabiduría y la doctrina, para conocer las razones prudentes,
  3 para recibir el consejo de prudencia, justicia, juicio y equidad;
  4 para dar sagacidad a los simples, e inteligencia y cordura a los jóvenes.
  5 Oirá el sabio, y aumentará el saber; y el entendido adquirirá consejo,
  6 para entender proverbios y declaración, palabras de sabios, y sus dichos profundos.
  7 El principio de la sabiduría es el temor de Jehová; los insensatos desprecian la sabiduría y la enseñanza.
  8 Oye, hijo mío, la instrucción de tu padre, y no desprecies la dirección de tu madre;
  9 porque adorno de gracia serán a tu cabeza, y collares a tu cuello.
  10 Hijo mío, si los pecadores te quisieren engañar, no consientas.
  11 Si dijeren: Ven con nosotros; pongamos asechanzas para derramar sangre; acechemos sin motivo al inocente;
  12 los tragaremos vivos como el Seol, y enteros, como los que caen al abismo;
  13 hallaremos riquezas de toda clase; llenaremos nuestras casas de despojos;
  14 echa tu suerte entre nosotros; tengamos todos una bolsa.
  15 Hijo mío, no vayas en camino con ellos. Aparta tu pie de sus veredas,
  16 porque sus pies corren al mal, y se apresuran para derramar sangre.
  17 Porque en vano se tenderá la red ante los ojos de toda ave;
  18 pero ellos a su propia sangre ponen asechanzas, y a sus almas tienden lazo.
  19 Tales son las sendas de todo el que es dado a la codicia, la cual quita la vida de sus poseedores.
  20 La sabiduría clama en las calles, alza su voz en las plazas;
  21 clama en los principales lugares de reunión; en las entradas de las puertas de la ciudad dice sus razones.
  22 ¿Hasta cuándo, oh simples, amaréis la simpleza, y los burladores desearán el burlar, y los insensatos aborrecerán la ciencia?
  23 Volveos a mi reprensión; he aquí yo derramaré mi espíritu sobre vosotros, y os haré saber mis palabras.
  24 Por cuanto llamé, y no quisisteis oír, extendí mi mano, y no hubo quien atendiese,
  25 sino que desechaste todo consejo mío, y mi reprensión no quisiste,
  26 también yo me reiré en vuestra calamidad, y me burlaré cuando viniere vuestro temor;
  27 cuando viniere como una tempestad vuestro temor, y vuestra calamidad llegare como un torbellino; cuando sobre vosotros viniere tribulación y angustia.
  28 Entonces me llamarán, y no responderé; me buscarán de mañana, y no me hallarán.
  29 Por cuanto aborrecieron la sabiduría, y no escogieron el temor de Jehová,
  30 ni quisieron mi consejo, y menospreciaron toda reprensión mía,
  31 comerán del fruto de su camino, y serán hastiados de sus propios consejos.
  32 Porque el desvío de los ignorantes los matará, y la prosperidad de los necios los echará a perder.
  33 Mas el que me oyere, habitará confiadamente y vivirá tranquilo, sin temor del mal.

  Verse:
  `,
});

const proverbsAdviceFlow = ai.defineFlow(
  {
    name: 'proverbsAdviceFlow',
    inputSchema: ProverbsAdviceInputSchema,
    outputSchema: ProverbsAdviceOutputSchema,
  },
  async input => {
    const {output} = await proverbsAdvicePrompt(input);
    return output!;
  }
);
