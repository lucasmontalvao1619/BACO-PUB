# PUB BACO — landing page

Landing page do **PUB BACO**, karaokê alternativo em Aracaju/SE.
Feita em Vite + React + TypeScript, sem dependências de UI: as animações
(spotlight cards, marquee, scroll reveal) são CSS/JS próprios.

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
    ├── Ambiente.tsx    Noites.tsx     SalaDrinks.tsx  Cardapio.tsx
    ├── Depoimentos.tsx Grupo.tsx      Visita.tsx      Mapa.tsx    Footer.tsx
    ├── Grega.tsx       ← faixa de meandro, o ornamento da logo
    ├── Reveal.tsx      SpotlightCard.tsx

public/
├── logo-pub-baco.jpg   ← a logo da casa (mesma foto de perfil do Instagram)
└── ambiente/           ← fotos dos cards (ver LEIA-ME.txt lá dentro)
```

**Quase tudo que muda está em `src/data/baco.ts`.** Preços, horários, noites,
redes sociais e textos das seções ficam ali — não é preciso mexer em componente
para atualizar conteúdo.

## Identidade

Preto e branco, seguindo a logo: Baco de perfil dentro de um anel de grega
(meandro). A grega é o único ornamento do site — vira divisor entre seções e
textura de fundo dos cards sem foto.

A **única exceção** é a seção "A sala de drinks": o fundo continua preto, mas
ali entra o neon (magenta, ciano, âmbar, verde), como na sala de drinks real.

## Peso

O site foi mantido leve de propósito:

- sem `backdrop-filter`, sem `filter: blur()` de fundo e sem overlay de grão;
- nenhuma animação contínua além do marquee (que é só `transform`);
- fontes limitadas aos pesos usados;
- **o mapa só carrega quando alguém clica** (`Mapa.tsx`) — o embed do Google
  puxa alguns MB de script e trava a rolagem se vier junto com a página.

Cuidados ao mexer: `content-visibility: auto` nas seções foi testado e
**quebra** a rolagem suave em âncoras (loop de re-layout). Não reintroduzir.

## Fotos do ambiente

Os cinco cards da seção "O ambiente" usam fotos tiradas dos posts do
@pub_baco — salão principal, karaokê, sala de drinks, decoração e mural.
Os arquivos estão em `public/ambiente/` (ver `LEIA-ME.txt` lá dentro).

São capturas de tela dos posts, então a resolução é 1176x574. Se a casa
tiver os originais, vale substituir os arquivos mantendo os mesmos nomes —
o card troca sozinho, sem mexer no código. Se algum arquivo sumir, o card
cai no padrão de grega em vez de quebrar o layout.

## Origem do conteúdo

Vindo dos posts do próprio @pub_baco:

- **Semana Mística (26 a 29/08)** — as quatro noites, com Caipirinha de Canela
  a R$ 9,90, Shot da Lua, Drinks dos Signos e Drink Mágico.
- **Horário** — casa abre às 19h, karaokê até as 2h, entrada free, qua a sáb.
- **Regra da casa** — não é permitida a entrada com comida ou bebida.
- **Sexta (Submundo)** — DJ na sala de drinks a partir das 20h e Divas do Pop
  no salão principal às 19h.

A programação muda toda semana: quando o Baco anunciar a próxima, atualize
`noites` em `src/data/baco.ts`.

- **Preços** — Caipirinha R$ 12,00, Caipiroska R$ 14,00, Drinks dos Signos
  R$ 18,90 (compre 1 e ganhe outro), Caipirinha de Canela R$ 9,90 e batata
  frita R$ 19,90, todos de posts da casa. Só "espetinhos a partir de
  R$ 14,90" veio do Restaurant Guru e ainda não foi confirmado.

## Links

- Instagram [@pub_baco](https://www.instagram.com/pub_baco/)
- Threads [@pub_baco](https://www.threads.com/@pub_baco)
- [Facebook](https://www.facebook.com/p/Pub-Baco-Aracaju-100065585165587/)
- Grupo do Baco no WhatsApp (link em `src/data/baco.ts`)
