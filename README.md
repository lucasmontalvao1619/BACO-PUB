# PUB BACO — landing page

Landing page do **PUB BACO**, karaokê alternativo em Aracaju/SE.
Feita em Vite + React + TypeScript, sem dependências de UI: as animações
(aurora de fundo, spotlight cards, marquee, scroll reveal) são CSS/JS próprios.

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o dist/
```

## Estrutura

```
src/
├── data/baco.ts        ← todo o conteúdo do site (textos, cardápio, redes, horários)
├── styles/global.css   ← sistema visual (paleta, tipografia, animações)
├── hooks/useReveal.ts  ← scroll reveal via IntersectionObserver
└── components/
    ├── Nav.tsx         Hero.tsx       Marquee.tsx
    ├── Ambiente.tsx    Noites.tsx     Cardapio.tsx
    ├── Depoimentos.tsx Grupo.tsx      Visita.tsx      Footer.tsx
    ├── Tridente.tsx    ← marca da casa em SVG (sempre P&B, nunca emoji)
    ├── Reveal.tsx      SpotlightCard.tsx
```

**Quase tudo que muda está em `src/data/baco.ts`.** Preços, horários, noites,
redes sociais e textos das seções ficam ali — não é preciso mexer em componente
para atualizar conteúdo.

## Identidade

Preto e branco, como a logo. Fundo quase preto, texto creme, acento branco.
As silhuetas de folhagem no fundo são uma referência discreta à decoração
tropical da casa. Movimento sempre lento — nada pisca.

## Fotos do ambiente

Os cinco blocos da seção "O ambiente" usam gradientes em escala de cinza como
placeholder. Para colocar fotos reais:

1. salve as imagens em `public/ambiente/`;
2. em `src/data/baco.ts`, troque o campo `gradiente` do bloco por
   `"url('/ambiente/nome-do-arquivo.jpg')"`.

## Dados a confirmar com a casa

Coletados de fontes públicas (Instagram, Threads, Facebook, Restaurant Guru,
Tripadvisor) e **não confirmados com o Baco**:

- **Endereço** — as fontes divergem entre *Av. Desembargador Maynard, 290* (em uso)
  e *R. Simão Dias, 525*.
- **Preços** — espetinhos a partir de R$ 14,90; caipirinha R$ 12,00;
  caipiroska de frutas R$ 14,90. Os itens individuais (língua, costela) estão
  marcados como "a partir de" porque só o valor inicial é público.
- **Noites temáticas** — nomes tirados dos destaques do Instagram
  (Divas do Pop, Submundo, Semana Mística); a distribuição por dia da semana é
  uma sugestão.

## Links

- Instagram [@pub_baco](https://www.instagram.com/pub_baco/)
- Threads [@pub_baco](https://www.threads.com/@pub_baco)
- [Facebook](https://www.facebook.com/p/Pub-Baco-Aracaju-100065585165587/)
- Grupo do Baco no WhatsApp (link em `src/data/baco.ts`)
