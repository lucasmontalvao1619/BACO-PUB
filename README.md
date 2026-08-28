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

## Telas largas

O layout inteiro e dimensionado em `rem`, e acima de 1600px a raiz cresce
junto com a tela (`html { font-size }` no `global.css`), travando em +10px
a partir de 3200px. Assim o site acompanha monitor grande e zoom aberto em
vez de virar uma coluna estreita perdida no preto: as proporcoes nao mudam,
so a escala. Abaixo de 1600px nada disso vale — a pagina e exatamente a de
antes, 1180px de shell e raiz de 16px.

Duas consequencias que e facil esquecer:

- **medida estrutural vai em `rem`, nao em `px`.** `--shell`, a altura minima
  do hero, o tamanho da logo e a altura dos tiles com foto ja foram
  convertidos. Um `px` cravado ali para de acompanhar a escala e encolhe
  sozinho na tela grande.
- **o `--shell` tem piso em `vw`**: `min(max(73.75rem, 62vw), 100% - 3rem)`.
  A 1440px quem ganha o `max` e o `73.75rem`, os mesmos 1180px de sempre.
  Acima de ~2600px quem manda e o `62vw`, e a coluna passa a ocupar sempre
  uns 62% da largura.

O marquee tem um teto proprio, descrito na secao abaixo: cada grupo repete o
manifesto duas vezes, o que da uma fita de ~4700px na escala maxima. Em
viewport mais larga que isso a volta abre buraco. Para cobrir, e uma terceira
repeticao por grupo — nos **dois** grupos — e a duracao sobe junto
(`slide 100s` vira `150s`), senao a fita acelera 1,5x.

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

## Seguranca

Site estatico na Vercel nao manda header de seguranca nenhum por padrao. Os
headers vivem no `vercel.json` da raiz e valem para todas as rotas.

O CSP e o unico que da trabalho, porque ele lista de onde a pagina pode
puxar coisa. Hoje sao tres origens externas, e so:

| Origem | Para que | Diretiva |
| --- | --- | --- |
| `fonts.googleapis.com` | o CSS das fontes | `style-src` |
| `fonts.gstatic.com` | os arquivos das fontes | `font-src` |
| `www.google.com` | o embed do mapa | `frame-src` |

**Mexeu em origem externa, mexe aqui.** Trocou de provedor de fonte, botou
pixel de analytics, embedou video do YouTube ou feed do Instagram? Sem
adicionar o dominio na diretiva certa o recurso e bloqueado, e o navegador
so reclama no console — a pagina nao quebra de um jeito obvio.

Dois detalhes que valem registro:

- `img-src` precisa do `data:` por causa da grega, que e um SVG inline em
  `--grega`. Tirar o `data:` apaga o ornamento do site inteiro.
- `style-src` tem `'unsafe-inline'` por precaucao, para o caso de aparecer
  um `style=` cravado no HTML. Testado com o browser, hoje ele nao e
  necessario: o React aplica estilo via CSSOM, que o CSP nao intercepta.
  Quem quiser apertar e so remover `'unsafe-inline'` da linha e conferir o
  console. O que importa de verdade ja esta apertado: `script-src 'self'`,
  sem `unsafe-inline` e sem `unsafe-eval`.

O resto e padrao: HSTS de dois anos, `nosniff`, `frame-ancestors 'none'` mais
`X-Frame-Options: DENY` contra clickjacking, `Referrer-Policy` de origem
apenas, e `Permissions-Policy` desligando camera, microfone, geolocalizacao e
companhia — a pagina nao usa nenhuma dessas APIs.

O `Strict-Transport-Security` vai sem `preload` de proposito. Botar `preload`
e um compromisso publico de HTTPS para o dominio inteiro, subdominios
inclusos, e sair da lista depois leva meses.

## Fotos do ambiente

Os cinco cards da seção "O ambiente" estão em `public/ambiente/` — ver
`LEIA-ME.txt` lá dentro para a origem e o tamanho de cada um. Se algum
arquivo sumir, o card cai no padrão de grega em vez de quebrar o layout.

Duas regras que valem lembrar antes de trocar qualquer foto:

- **cada arquivo já vem recortado na proporção do seu card**, no dobro do
  tamanho em CSS. Não existe mais `object-position` no CSS corrigindo
  enquadramento — se a foto nova tiver outra proporção, o `object-fit:
  cover` corta pelo centro e ninguém controla o que sai;
- **as fotos entram como clima, não como documentação.** O `.tile-bg`
  leva `saturate(0.68) contrast(1.06) brightness(0.95)`, que puxa a cor
  da casa na direção do preto e branco do resto do site; no hover a cor
  volta inteira. É o mesmo movimento da sala de drinks — o Baco acende
  quando você chega perto.

O conjunto anterior era print de reel: 1176x574, tremido, com a letra da
música cortada na borda e a marca d'água do Karafun no meio. O card da
sala de drinks era um close no rosto de uma pessoa, não a sala. Se
aparecer foto melhor, é só trocar o arquivo mantendo o nome.

## Origem do conteúdo

Vindo dos posts do próprio @pub_baco:

- **Semana Mística (26 a 29/08)** — as quatro noites, com Caipirinha de Canela
  a R$ 9,90, Shot da Lua, Drinks dos Signos e Drink Mágico.
- **Horário** — casa abre às 19h, cozinha até 1h, karaokê até as 2h, entrada
  free, qua a sáb. O fechamento às 3h veio da casa e bate com o card
  oficial de horários que ela publica (ver "A confirmar" abaixo).
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

- **Karaokê: 2h ou 2h30?** As legendas desta semana dizem "Karaokê até 2h",
  e é o que está no site. Mas o card de horários que a casa publica
  ("ABERTURA 19H · COZINHA ATÉ 1H · KARAOKÊ ATÉ 2H30 · CASA FECHA ÀS 3H")
  diz 2h30 — e esse mesmo card é o que confirma o fechamento às 3h. Ficou
  o valor das legendas por serem mais recentes; se a casa disser 2h30, são
  três lugares para mexer: `horarios` e `numeros` em `baco.ts`, e as ledes
  do `Hero.tsx` e do `Noites.tsx`.

- **Aniversários e eventos** — a linha no cartão de contato saiu dos destaques
  do perfil ("Aniversário" e "Eventos"), não de um post. A casa claramente
  recebe, mas não sabemos o que oferece (reserva? decoração? mínimo de gente?).
  Confirme antes de prometer qualquer coisa, ou tire a linha do `Visita.tsx`.

## Links

- Instagram [@pub_baco](https://www.instagram.com/pub_baco/)
- Threads [@pub_baco](https://www.threads.com/@pub_baco)
- [Facebook](https://www.facebook.com/p/Pub-Baco-Aracaju-100065585165587/)
- Grupo do Baco no WhatsApp (link em `src/data/baco.ts`)
