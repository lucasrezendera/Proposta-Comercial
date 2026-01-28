# Proposta Comercial Digital - Next.js

Projeto migrado de Vite para Next.js mantendo toda a estética, fontes e estilos originais.

## 🚀 Começando

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 📦 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **GSAP** - Animações avançadas
- **Recharts** - Gráficos
- **Lucide React** - Ícones

## 🎨 Fontes

As fontes são carregadas automaticamente via Next.js Font Optimization:
- **Inter** - Fonte principal
- **Space Grotesk** - Fonte display
- **JetBrains Mono** - Fonte monoespaçada

## 📝 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
GEMINI_API_KEY=sua_chave_aqui
```

## 🔄 Mudanças da Migração

- ✅ Vite → Next.js 14 (App Router)
- ✅ Todas as fontes mantidas (agora otimizadas pelo Next.js)
- ✅ Todos os estilos CSS preservados
- ✅ Tailwind configurado com as mesmas cores e animações
- ✅ Componentes convertidos para Client Components quando necessário
- ✅ html2pdf.js mantido para exportação PDF
