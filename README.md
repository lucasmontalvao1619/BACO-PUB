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
(meandro). A grega é o único ornamento do site e aparece em cinco lugares, todos
alimentados pela mesma variável `--grega` no `:root`:

| Onde | Tamanho | Opacidade |
| --- | --- | --- |
| marca de cada `.eyebrow` (dois módulos, fadeando) | 19px | 0.45 |
| borda inferior do nav grudado | 18px | 0.16 |
| `<Grega />`, o divisor entre seções | 22px | 0.22 |
| topo das fichas sem foto (cards do ambiente) | 20px | 0.16 |
| topo do rodapé, de ponta a ponta | 20px | 0.18 |

**Não usar a grega abaixo de ~18px.** O meandro tem quatro dobras dentro de um
módulo quadrado; menor que isso os traços se juntam e a faixa vira sujeira
cinza em vez de desenho. Foi testado a 10px e a 11px, e nos dois casos parecia
imagem quebrada.

Os divisores seguem uma regra só (comentada no `App.tsx`): toda troca de seção
ganha uma faixa, menos onde a seção já traz a própria borda de ponta a ponta —
a fita do manifesto e a sala de drinks. Ali a grega ficaria empilhada no fio.

A **única exceção** é a seção "A sala de drinks": o fundo continua preto, mas
ali entra o neon (magenta, ciano, âmbar, verde), como na sala de drinks real.

## Peso

O site foi mantido leve de propósito:

- sem `backdrop-filter`, sem `filter: blur()` de fundo e sem overlay de grão;
- nenhuma animação contínua além do marquee (que é só `transform`);
- a grega é um `url(data:image/svg+xml,…)` de 24x24 repetido, não um arquivo;
- fontes limitadas aos pesos usados;
- **o mapa só carrega quando alguém clica** (`Mapa.tsx`) — o embed do Google
  puxa alguns MB de script e trava a rolagem se vier junto com a página.

Cuidados ao mexer: `content-visibility: auto` nas seções foi testado e
**quebra** a rolagem suave em âncoras (loop de re-layout). Não reintroduzir.

## O marquee

A fita não para nunca — nem no hover. O `animation-play-state: paused` que
existia ali foi removido de propósito: a graça da faixa é ser contínua.

A emenda depende de duas coisas, as duas fáceis de quebrar sem querer:

- o vão entre as palavras vem do `padding-right` de `.marquee-grupo`, **não** de
  um `gap` no `.marquee-track`. Com `gap` no track falta meio vão exatamente na
  emenda, porque N itens têm N-1 vãos, e a fita dá um salto a cada volta;
- os dois grupos precisam ser idênticos, já que a animação desliza `-50%`.

Cada grupo repete o manifesto duas vezes para que uma volta cubra telas largas
sem abrir buraco. Se `manifesto` crescer muito em `baco.ts`, uma repetição por
grupo já basta — o que não pode é os grupos ficarem diferentes entre si.

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
- **Horário** — casa abre às 19h, cozinha até 1h, karaokê até as 2h, entrada
  free, qua a sáb. O fechamento às 3h veio da casa, não de post.
- **Regra da casa** — não é permitida a entrada com comida ou bebida.
- **Sexta (Submundo)** — DJ na sala de drinks a partir das 20h e Divas do Pop
  no salão principal às 19h.

A programação muda toda semana: quando o Baco anunciar a próxima, atualize
`noites` em `src/data/baco.ts`.

- **Preços** — Caipirinha R$ 12,00, Caipiroska R$ 14,00, Drinks dos Signos
  R$ 18,90 (compre 1 e ganhe outro), Caipirinha de Canela R$ 9,90 e batata
  frita R$ 19,90, todos de posts da casa. Só "espetinhos a partir de
  R$ 14,90" veio do Restaurant Guru e ainda não foi confirmado.

### A confirmar

- **Aniversários e eventos** — a linha no cartão de contato saiu dos destaques
  do perfil ("Aniversário" e "Eventos"), não de um post. A casa claramente
  recebe, mas não sabemos o que oferece (reserva? decoração? mínimo de gente?).
  Confirme antes de prometer qualquer coisa, ou tire a linha do `Visita.tsx`.

## Links

- Instagram [@pub_baco](https://www.instagram.com/pub_baco/)
- Threads [@pub_baco](https://www.threads.com/@pub_baco)
- [Facebook](https://www.facebook.com/p/Pub-Baco-Aracaju-100065585165587/)
- Grupo do Baco no WhatsApp (link em `src/data/baco.ts`)
