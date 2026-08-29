# PUB BACO — Landing Page

Landing page para o **PUB BACO**, um karaokê alternativo em Aracaju/SE. Um
projeto pessoal: site de página única para um bar da minha cidade, feito do
zero em React + TypeScript, sem bibliotecas de UI.

🔗 **Ao vivo:** https://pubbaco.vercel.app

## Stack

- **Vite + React + TypeScript**
- CSS puro — sistema visual próprio (paleta, tipografia, grid responsivo)
- Animações próprias em CSS/JS (spotlight cards, marquee, scroll reveal)
- Deploy na **Vercel**
- Zero dependências de UI

## Destaques

- **Conteúdo centralizado** — textos, cardápio, horários, noites e redes ficam
  todos em `src/data/baco.ts`. Dá pra atualizar o site inteiro sem tocar em
  nenhum componente.
- **Responsivo de verdade** — breakpoints em `em` (acompanham o zoom de fonte
  do navegador), do desktop ao celular estreito, mais media queries por
  capacidade (`hover`, `pointer`, `orientation`).
- **Acessibilidade** — menu-gaveta com trap de foco e `inert` no fundo, fecha
  no `Esc`; pensado para teclado e leitor de tela.
- **Performance** — sem blur ou filtros pesados; o mapa do Google só carrega ao
  clique; o ornamento (grega) é um SVG inline; fontes limitadas aos pesos usados.
- **Segurança** — headers completos no `vercel.json`: CSP restritivo, HSTS,
  proteção contra clickjacking, iframe do mapa em sandbox e links externos com
  `rel="noopener noreferrer"`.
- **Escala em telas grandes** — layout em `rem` que cresce junto com monitores
  acima de 1600px, em vez de virar uma coluna estreita perdida no preto.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o dist/
```

## Identidade visual

Preto e branco seguindo a logo da casa — o Baco de perfil dentro de um anel de
grega (meandro), que vira o único ornamento do site. A exceção é a seção "sala
de drinks", onde entra o neon (magenta, ciano, âmbar, verde), como no ambiente
real do bar.

---

Feito por [Lucas Oliveira](https://www.instagram.com/lukk.oliv/) para o
[@pub_baco](https://www.instagram.com/pub_baco/).
