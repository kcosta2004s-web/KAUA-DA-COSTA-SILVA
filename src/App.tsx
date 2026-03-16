/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Download, 
  Printer, 
  Smartphone, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Heart, 
  Sparkles, 
  ShieldCheck,
  Gift,
  Users,
  BookOpen,
  Palette,
  Layout,
  Box,
  Baby,
  Flower2,
  Calendar,
  Briefcase,
  PartyPopper,
  Ghost,
  Hash,
  Type as TypeIcon,
  Cross
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { name: 'Bichinhos/Animais', icon: <Baby className="w-4 h-4" /> },
  { name: 'Flores', icon: <Flower2 className="w-4 h-4" /> },
  { name: 'Datas Comemorativas', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Profissões', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Lembrancinhas', icon: <PartyPopper className="w-4 h-4" /> },
  { name: 'Personagens', icon: <Ghost className="w-4 h-4" /> },
  { name: 'Números', icon: <Hash className="w-4 h-4" /> },
  { name: 'Letras', icon: <TypeIcon className="w-4 h-4" /> },
  { name: 'Temas Bíblicos', icon: <Cross className="w-4 h-4" /> },
];

const BENEFITS = [
  {
    title: "Pensado Especialmente para Artesãs",
    desc: "Moldes testados e aprovados, ideais para quem trabalha com EVA em casa ou na escola.",
    icon: <Heart className="text-pink-500" />
  },
  {
    title: "Pronto Para Aplicar em Poucos Minutos",
    desc: "Nada complicado, nada confuso. É só baixar, imprimir e começar a criar.",
    icon: <Clock className="text-blue-500" />
  },
  {
    title: "Criatividade Sem Limites",
    desc: "Ajuda a despertar a imaginação e criar peças incríveis que encantam a todos.",
    icon: <Sparkles className="text-yellow-500" />
  },
  {
    title: "Economia de Tempo e Material",
    desc: "Moldes otimizados para aproveitar ao máximo suas folhas de EVA.",
    icon: <Palette className="text-green-500" />
  }
];

const BONUSES = [
  { title: "KIT EVA EXCLUSIVO DO SITIO DO PICAPAU AMARELO", price: "R$ 27,00", img: "https://i.imgur.com/rM5TPXH.png", icon: <Palette className="w-16 h-16 text-slate-300" /> },
  { title: "KIT EVA EXCLUSIVO DE FESTA JUNINA", price: "R$ 37,00", img: "https://i.imgur.com/wuXGhnv.png", icon: <Layout className="w-16 h-16 text-slate-300" /> },
  { title: "KIT EVA EXCLUSIVO DO SAFARI", price: "R$ 29,00", img: "https://i.imgur.com/5dw7NdP.png", icon: <Box className="w-16 h-16 text-slate-300" /> },
];

const FAQS = [
  { q: "Como vou receber o material?", a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para baixar todos os moldes diretamente em formato PDF." },
  { q: "O material é físico ou digital?", a: "O material é 100% digital em formato PDF, pronto para imprimir. Você não receberá nada em sua casa pelos correios." },
  { q: "Os moldes são fáceis de usar?", a: "Sim! Todos os moldes estão em tamanho real e são muito simples de seguir, ideais tanto para iniciantes quanto para artesãs experientes." },
  { q: "Para qual idade o material é indicado?", a: "O material é versátil e pode ser usado para criar peças para decoração de quartos infantis, escolas, festas e muito mais." },
  { q: "Tenho garantia?", a: "Sim! Oferecemos uma garantia incondicional de 7 dias. Se você não gostar do material, devolvemos 100% do seu dinheiro." },
];

const TESTIMONIALS = [
  { name: "Maria Silva", city: "São Paulo", text: "Os moldes são maravilhosos! Facilitaram muito meu trabalho na escola. Super recomendo!", initial: "M", image: "https://i.imgur.com/oDBKvjg.png" },
  { name: "Ana Paula", city: "Rio de Janeiro", text: "Nunca vi um pack tão completo. Os bichinhos são a coisa mais linda do mundo!", initial: "A", image: "https://i.imgur.com/kwx2utm.png" },
  { name: "Cláudia Souza", city: "Belo Horizonte", text: "O suporte é excelente e o material chegou na hora. Vale cada centavo.", initial: "C", image: "https://i.imgur.com/ntF3ynC.png" },
];

function getCheckoutUrl() {
  const baseUrl = 'https://checkout.comprasfacil.com.br/VCCL1O8SCVC6';
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const utmParams = new URLSearchParams();
  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) utmParams.set(key, value);
  });
  const utmString = utmParams.toString();
  return utmString ? `${baseUrl}?${utmString}` : baseUrl;
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-red-100">
      {/* Announcement Bar */}
      <div className="bg-red-600 text-white text-center py-2 px-4 font-bold text-sm md:text-base uppercase tracking-wider">
        Oferta válida somente hoje ({new Date().toLocaleDateString('pt-BR')})
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-8 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-bold border border-red-100">
              <Heart className="w-4 h-4 fill-current" />
              <span>Material Exclusivo para Artesãs e Professoras</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
              +1000 Moldes de <span className="text-red-500 underline decoration-wavy underline-offset-8">EVA</span> para Transformar seu Trabalho
            </h1>
            <div className="w-full max-w-lg py-4">
              <img 
                src="https://i.imgur.com/zyxfjeE.png" 
                alt="Moldes de EVA" 
                className="w-full h-auto rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button 
                onClick={scrollToOffer}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-green-200 transition-all transform hover:scale-105 active:scale-95"
              >
                QUERO GARANTIR AGORA
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Image removed as requested due to being broken */}
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full -z-0 blur-2xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-400 rounded-full -z-0 blur-2xl opacity-30"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">O Que Você Vai Receber</h2>
            <div className="w-20 h-1.5 bg-red-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Material Completo em PDF", desc: "+1000 moldes prontos para imprimir, organizados por categorias.", icon: <Download className="w-8 h-8 text-blue-500" /> },
              { title: "Acesso Digital Imediato", desc: "Receba no seu e-mail logo após a compra. Acesse de qualquer lugar.", icon: <Smartphone className="w-8 h-8 text-yellow-500" /> },
              { title: "Pronto Para Imprimir", desc: "Arquivos em tamanho real, otimizados para folha A4 comum.", icon: <Printer className="w-8 h-8 text-green-500" /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white border-2 border-red-500 shadow-sm text-center space-y-4"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-inner flex items-center justify-center mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
            <BookOpen className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-slate-900">Categorias</h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {CATEGORIES.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-2 font-bold text-slate-700 hover:text-red-500 transition-colors cursor-default"
              >
                {cat.icon}
                {cat.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Benefícios Exclusivos</h2>
            <div className="w-20 h-1.5 bg-red-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-white text-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">Bônus Especial</span>
            <h2 className="text-4xl font-bold mb-4">Além de tudo isso, ainda estamos liberando</h2>
            <p className="text-xl text-red-500 font-bold">3 PRESENTES EXCLUSIVOS</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {BONUSES.map((bonus, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-4 text-slate-900 relative group border border-slate-100"
              >
                <div className="absolute top-2 right-2 bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm z-20">GRÁTIS</div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-100 flex items-center justify-center">
                  {bonus.img ? (
                    <img src={bonus.img} alt={bonus.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  ) : (
                    bonus.icon
                  )}
                </div>
                <h4 className="font-bold text-sm mb-1 leading-tight">{bonus.title}</h4>
                <p className="text-[10px] text-slate-400 line-through">De {bonus.price} por ZERO</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100 text-center">
            <p className="font-bold text-xl text-slate-900">
              <CheckCircle2 className="inline-block mr-2 w-6 h-6 text-red-500" />
              TOTAL EM BÔNUS: <span className="line-through text-slate-400">R$ 93,00</span> — <span className="text-red-500">TUDO GRÁTIS SÓ PARA VOCÊ</span>
            </p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[40px] p-8 md:p-16 border-4 border-red-500 shadow-2xl relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white px-8 py-2 rounded-full font-bold text-lg shadow-lg">
              🔥 Oferta Especial por Tempo Limitado
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">O Que Você Vai Receber Hoje:</h3>
                <ul className="space-y-3">
                  {[
                    "+1000 Moldes de EVA em PDF",
                    "Acesso Digital Imediato",
                    "Todos os 3 Bônus Exclusivos GRATUITOS",
                    "Atualizações Mensais & Acesso Vitalício",
                    "Garantia de 7 Dias & Suporte no WhatsApp"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-inner border border-slate-100 text-center space-y-4">
                <p className="text-slate-400 line-through font-bold">De R$ 211,90</p>
                <div className="space-y-1">
                  <p className="text-slate-500 font-bold">Por Apenas:</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-bold text-slate-900">R$</span>
                    <span className="text-6xl font-bold text-red-500">10,00</span>
                  </div>
                  <p className="text-slate-400 text-sm">Pagamento Único</p>
                </div>
                <motion.button 
                  onClick={() => window.location.href = getCheckoutUrl()}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-full py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-green-200 transition-all transform hover:scale-105 active:scale-95"
                >
                  QUERO GARANTIR AGORA
                </motion.button>
                <div className="flex items-center justify-center gap-4 pt-2">
                  <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6" />
                  <img src="https://img.icons8.com/color/48/000000/pix.png" alt="Pix" className="h-6" />
                </div>
                <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Pagamento 100% Seguro • Acesso Imediato
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
            </div>
            <h2 className="text-3xl font-bold text-red-500 mb-2">QUEM COMPROU AMOU ❤️</h2>
            <p className="text-slate-500 font-bold">4.9/5 — 412 avaliações</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
                <p className="text-slate-600 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold overflow-hidden">
                    {t.image ? (
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      t.initial
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-white border-2 border-slate-100">
            <img src="https://img.icons8.com/color/144/000000/guarantee.png" alt="Garantia" className="w-32 h-32" />
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900">Garantia de 7 Dias — Compra Sem Risco</h3>
              <p className="text-slate-600 leading-relaxed">
                Teste todo o material por 7 dias. Se você não gostar, por qualquer motivo, devolvemos 100% do seu dinheiro, sem perguntas e sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-white border border-slate-100 rounded-2xl mb-4">
              <Users className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left font-bold text-slate-800 hover:text-red-500 transition-colors"
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-slate-600 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white text-center px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <p className="font-bold text-lg">© 2026 Super Pack de Moldes. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <p className="text-[10px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Este é um site bastante seguro. Seus dados estão protegidos e sua compra é 100% garantida.
          </p>
        </div>
      </footer>
    </div>
  );
}
