import { motion } from 'framer-motion';
import { Baby, Heart, GraduationCap, Church, Users } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';

const paraquem = [
  { icon: Heart, titulo: 'Pais', descricao: 'Que querem criar filhos com fé, amor e valores sólidos desde cedo.' },
  { icon: Users, titulo: 'Avós', descricao: 'Que desejam deixar um legado espiritual eterno para os netos.' },
  { icon: GraduationCap, titulo: 'Professores', descricao: 'Que buscam materiais de qualidade para enriquecer suas aulas.' },
  { icon: Church, titulo: 'Escola Bíblica', descricao: 'Coordenadores que precisam de conteúdo relevante e envolvente.' },
  { icon: Baby, titulo: 'Ministério Infantil', descricao: 'Líderes que querem impactar crianças com histórias de fé.' },
];


export default function ParaQuem() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="para-quem-titulo">
      <Container>
        <SectionTitle
          badge="Para quem é"
          title="Este eBook Foi Feito Para Você"
          subtitle="Sementinha de Fé é o recurso ideal para quem quer plantar valores eternos no coração das crianças."
          id="para-quem-titulo"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {paraquem.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card className="flex items-start gap-4 h-full" padding={true}>
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-800" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-lora font-bold text-gray-900 mb-1">{item.titulo}</h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">{item.descricao}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>


      </Container>
    </section>
  );
}
