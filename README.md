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
index.html              ← entrada do Vite (meta tags, fontes, favicon)
vite.config.ts
tsconfig.json           ← só aponta para os dois de config/
vercel.json             ← headers de segurança e cache (ver "Segurança")

config/
├── tsconfig.app.json   ← o app (src/)
└── tsconfig.node.json  ← o vite.config.ts

src/
├── data/baco.ts        ← todo o conteúdo do site (textos, cardápio, redes, horários)
├── styles/global.css   ← sistema visual (paleta, tipografia, responsivo)
├── hooks/useReveal.ts  ← scroll reveal via IntersectionObserver
└── components/
    ├── Nav.tsx         Hero.tsx       Marquee.tsx
    ├── Ambiente.tsx    Noites.tsx     SalaDrinks.tsx  Cardapio.tsx
    ├── Depoimentos.tsx Grupo.tsx      Visita.tsx      Mapa.tsx    Footer.tsx
    ├── Grega.tsx       ← faixa de meandro, o ornamento da logo
    ├── Reveal.tsx      SpotlightCard.tsx

public/
├── logo-pub-baco.jpg   ← a logo da casa (mesma foto de perfil do Instagram)
└── ambiente/           ← as cinco fotos dos cards (ver "Fotos do ambiente")
```

**Quase tudo que muda está em `src/data/baco.ts`.** Preços, horários, noites,
redes sociais e textos das seções ficam ali — não é preciso mexer em componente
para atualizar conteúdo.

### Por que os tsconfig ficam em `config/`

O `tsconfig.json` da raiz **tem que** ficar na raiz: é o que o `tsc -b`, o Vite
e o editor procuram por convenção. Mas ele só carrega uma lista de
`references`, então os dois arquivos de verdade moram em `config/` e a raiz
fica limpa.

Duas consequências de eles não estarem mais na raiz:

- os `include` são relativos ao arquivo, então viraram `../src` e
  `../vite.config.ts`. Se criar uma pasta nova no topo do projeto e ela
  precisar de typecheck, o caminho ali também sobe um nível;
- o `tsBuildInfoFile` aponta para `node_modules/.tmp/`. Sem isso o `tsc -b`
  cospe dois `.tsbuildinfo` do lado do config. Eles são cache, não fonte —
  em `node_modules/` somem junto num `npm ci` e nunca aparecem no `git status`.

## Identidade

Preto e branco, seguindo a logo: Baco de perfil dentro de um anel de grega
(meandro). A grega é o único ornamento do site e aparece em cinco lugares, todos
alimentados pela mesma variável `--grega` no `:root`:

| Onde | Tamanho | Opacidade |
| --- | --- | --- |
| marca de cada `.eyebrow` (dois módulos, fadeando) | 19px | 0.45 |
| borda inferior do nav grudado (`--grega-nav`) | 16px | 0.16 |
| `<Grega />`, o divisor entre seções | 22px | 0.22 |
| topo das fichas sem foto (cards do ambiente) | 20px | 0.16 |
| topo do rodapé, de ponta a ponta | 20px | 0.18 |

**Não usar a grega abaixo de ~16px.** O meandro tem quatro dobras dentro de um
módulo quadrado; menor que isso os traços se juntam e a faixa vira sujeira
cinza em vez de desenho. Foi testado a 10px e a 11px, e nos dois casos parecia
imagem quebrada.

Os divisores seguem uma regra só (comentada no `App.tsx`): toda troca de seção
ganha uma faixa, menos onde a seção já traz a própria borda de ponta a ponta —
a fita do manifesto e a sala de drinks. Ali a grega ficaria empilhada no fio.

A **única exceção** é a seção "A sala de drinks": o fundo continua preto, mas
ali entra o neon (magenta, ciano, âmbar, verde), como na sala de drinks real.

### Botões

Botões e chips são **retângulos** (`--radius-btn: 2px`), não pílulas. O canto
quase reto é o que conversa com a geometria da grega — um `border-radius: 999px`
no meio do meandro briga com o desenho.

## Responsivo

Os pontos de quebra estão em `em`, não em `px`. Media query em `em` segue a
fonte padrão do navegador, então quem aumenta o corpo do texto no sistema
recebe o layout folgado junto; com `px`, esse leitor ficava preso no layout
apertado. Todos estão num bloco só no fim do `global.css`, do maior para o
menor, e cada faixa só mexe no que a de cima ainda não resolveu.

| Largura | O que muda |
| --- | --- |
| 75em (1200px) | a barra do topo começa a apertar os vãos |
| 61.9375em (992px) | os links viram gaveta; aparece o botão de menu |
| 61.25em (980px) | o ambiente perde a terceira coluna larga |
| 58.75em (940px) | o hero vira coluna única, com a logo abrindo a página |
| 55em (880px) | horários e cartão de contato empilham |
| 47.5em (760px) | os tiles do ambiente descem para 2 colunas |
| 40em (640px) | telefone de pé: botões de largura inteira |
| 34em (544px) | telefone estreito: tipografia recomeça do tamanho da tela |
| 26em (416px) | a tarja "Aracaju" sai e o botão do grupo fica com o espaço |

Fora essas, três media queries por **capacidade** em vez de largura:
`(orientation: landscape)` para telefone deitado, `(pointer: coarse)` para
alvo de toque, e `(hover: hover)` / `(hover: none)`.

Cinco coisas que é fácil quebrar sem querer:

- **o header mede a si mesmo.** O `Nav.tsx` observa a própria altura com um
  `ResizeObserver` e escreve em `--nav-h`. Dela saem o `scroll-margin-top`
  das âncoras e o topo da gaveta. Não cravar um valor: a altura muda com o
  breakpoint, com o header encolhendo na rolagem e com a fonte do navegador.
- **a faixa de grega do nav precisa de espaço reservado.** Ela mora nos
  últimos `--grega-nav` pixels do header, colada na borda de baixo, então
  o `.nav.is-stuck` tem `padding-bottom` maior que o `padding-top`. Igualar
  os dois traz de volta o bug em que os botões caem por cima do meandro.
- **grade fluida vai com `min()`.** É `minmax(min(320px, 100%), 1fr)`, não
  `minmax(320px, 1fr)`. Sem o `min()` a coluna insiste nos 320px e estoura
  a tela num telefone de 320px de largura — e o `body { overflow-x: hidden }`
  esconde o estrago em vez de mostrar.
- **`<img>` com `width`/`height` no HTML precisa de `height: auto` no CSS.**
  Os atributos estão lá para reservar espaço e evitar salto de layout, mas
  o navegador os trata como `width: 420px; height: 420px`. Se o CSS
  sobrescreve só a largura, a altura fica cravada e a imagem estica: a logo
  do hero renderizava 178x420 num telefone de 360px. O `height: auto` está
  na regra global de `img`, e as imagens que têm altura própria
  (`.brand img`, `.footer-marca img`, `.tile-bg`) continuam ganhando por
  especificidade.
- **hover só dentro de `@media (hover: hover)`.** As fotos dos cards entram
  dessaturadas e a cor volta no hover; no toque não existe hover, então sem
  a media query elas ficariam apagadas para sempre. Há um bloco
  `@media (hover: none)` que já as entrega quase com a cor da casa.

### A gaveta do menu

Abaixo de 992px os cinco links saem da barra e vão para uma gaveta, junto com
os dois CTAs. Ela fecha no `Esc`, ao clicar num link e ao girar o aparelho
para o modo desktop; enquanto está aberta trava a rolagem do fundo e recebe
`inert`, para o leitor de tela e o `Tab` não passearem pelo que está atrás.

O fundo dela é opaco (`var(--ink)`), não translúcido: com transparência o hero
aparecia por trás dos links. Pelo mesmo motivo o header grudado é opaco — não
há `backdrop-filter` aqui (de propósito, por peso), então transparência só
deixa o texto da página vazando por baixo da barra.

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

O layout inteiro é dimensionado em `rem`, e acima de 1600px a raiz cresce
junto com a tela (`html { font-size }` no `global.css`), travando em +10px
a partir de 3200px. Assim o site acompanha monitor grande e zoom aberto em
vez de virar uma coluna estreita perdida no preto: as proporções não mudam,
só a escala. Abaixo de 1600px nada disso vale — a página é exatamente a de
antes, 1180px de shell e raiz de 16px.

Duas consequências que é fácil esquecer:

- **medida estrutural vai em `rem`, não em `px`.** `--shell`, a altura mínima
  do hero, o tamanho da logo e a altura dos tiles com foto já foram
  convertidos. Um `px` cravado ali para de acompanhar a escala e encolhe
  sozinho na tela grande.
- **o `--shell` tem piso em `vw`**:

  ```css
  --gutter: clamp(1.15rem, 4.5vw, 3rem);
  --shell: min(
    max(73.75rem, 62vw),
    100% - (var(--gutter) * 2) - env(safe-area-inset-left, 0px) -
      env(safe-area-inset-right, 0px)
  );
  ```

  A 1440px quem ganha o `max` é o `73.75rem`, os mesmos 1180px de sempre.
  Acima de ~2600px quem manda é o `62vw`, e a coluna passa a ocupar sempre
  uns 62% da largura. O respiro lateral encolhe junto com a tela via
  `--gutter`, e o `env(safe-area-inset-*)` desvia do entalhe do aparelho
  quando a página abre em paisagem.

O marquee tem um teto próprio, descrito na seção abaixo: cada grupo repete o
manifesto duas vezes, o que dá uma fita de ~4700px na escala máxima. Em
viewport mais larga que isso a volta abre buraco. Para cobrir, é uma terceira
repetição por grupo — nos **dois** grupos — e a duração sobe junto
(`slide 100s` vira `150s`), senão a fita acelera 1,5x.

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

O vão encolhe para `2.25rem` abaixo de 760px (`--marquee-vao`): com os
`3.5rem` do desktop sobrava preto demais entre uma palavra e outra numa tela
estreita.

## Segurança

Site estático na Vercel não manda header de segurança nenhum por padrão. Os
headers vivem no `vercel.json` da raiz e valem para todas as rotas.

O CSP é o único que dá trabalho, porque ele lista de onde a página pode
puxar coisa. Hoje são três origens externas, e só:

| Origem | Para que | Diretiva |
| --- | --- | --- |
| `fonts.googleapis.com` | o CSS das fontes | `style-src-elem` |
| `fonts.gstatic.com` | os arquivos das fontes | `font-src` |
| `www.google.com` | o embed do mapa | `frame-src` |

**Mexeu em origem externa, mexe aqui.** Trocou de provedor de fonte, botou
pixel de analytics, embedou vídeo do YouTube ou feed do Instagram? Sem
adicionar o domínio na diretiva certa o recurso é bloqueado, e o navegador
só reclama no console — a página não quebra de um jeito óbvio.

Detalhes que valem registro:

- `img-src` precisa do `data:` por causa da grega, que é um SVG inline em
  `--grega`. Tirar o `data:` apaga o ornamento do site inteiro.
- **estilo está dividido em três diretivas.** `style-src-elem` (de onde pode
  vir uma folha de estilo) **não** tem `'unsafe-inline'`, então um `<style>`
  injetado é barrado. `style-src-attr` tem, por precaução, para o caso de
  aparecer um `style=` cravado no HTML. E `style-src` continua ali como
  fallback, porque Safari antigo não entende as duas de cima e cairia no
  `default-src`, o que derrubaria as fontes.
- o React **não** precisa de `'unsafe-inline'`: ele aplica estilo via CSSOM
  (`element.style.setProperty`), que o CSP não intercepta. Vale para o
  `style={{…}}` do `Grupo.tsx` e para as coordenadas do `SpotlightCard`.
- `form-action` é `'none'`, não `'self'`: o site não tem um formulário
  sequer. `media-src`, `worker-src` e `manifest-src` são `'none'` pelo mesmo
  motivo.
- `script-src-attr 'none'` derruba handler inline (`onclick="…"`), que este
  projeto nunca usa.

O que foi conferido no navegador, com o CSP ativo e o `dist` de produção:

| Teste | Resultado |
| --- | --- |
| `<script>` de `cdn.jsdelivr.net` | bloqueado |
| `<style>` injetado por JS | bloqueado |
| estilo via CSSOM (o que o React faz) | funciona |
| fontes, CSS, grega e o embed do mapa | carregam, zero violação no console |

### Fora do CSP

- **o iframe do mapa vai com `sandbox`.** Ele recebe só `allow-scripts`,
  `allow-same-origin` e os dois de popup, que é o mínimo que o embed do
  Google precisa. O que fica de fora é o que importa: sem
  `allow-top-navigation`, o mapa não consegue redirecionar a página que o
  hospeda. O `referrerPolicy` dele é `no-referrer` — o Google não precisa
  saber de que página o embed foi aberto.
- **todo link externo leva `rel="noopener noreferrer"`.** O `noreferrer`
  sozinho já implica `noopener` em navegador moderno; o par explícito cobre
  os antigos, onde a aba aberta conseguiria mexer na `window.opener`.

O resto é padrão: HSTS de dois anos, `nosniff`, `frame-ancestors 'none'` mais
`X-Frame-Options: DENY` contra clickjacking, `Referrer-Policy` de origem
apenas, `Cross-Origin-Opener-Policy` e `Cross-Origin-Resource-Policy` em
`same-origin`, e `Permissions-Policy` desligando câmera, microfone,
geolocalização e companhia — a página não usa nenhuma dessas APIs.

O `Strict-Transport-Security` vai sem `preload` de propósito. Botar `preload`
é um compromisso público de HTTPS para o domínio inteiro, subdomínios
inclusos, e sair da lista depois leva meses.

`Cross-Origin-Embedder-Policy` **não** está ligado de propósito: ele exigiria
CORP do embed do Google, que o Google não manda, e o mapa pararia de abrir.

Duas coisas que ficariam mais seguras e não foram feitas, para registro: as
fontes poderiam ser servidas do próprio domínio, o que tiraria duas origens
do CSP e a requisição ao Google a cada visita; e não há SRI no CSS das
fontes porque o Google Fonts serve conteúdo variável por navegador, o que
torna o hash impraticável.

## Fotos do ambiente

Os cinco cards da seção "O ambiente" estão em `public/ambiente/`. Se algum
arquivo sumir, o card cai sozinho no padrão de grega em vez de quebrar o
layout (`Ambiente.tsx` trata o `onError`).

| Arquivo | Card | Tamanho | Origem |
| --- | --- | --- | --- |
| `salao.jpg` | O salão principal | 1364x760 | foto da casa (original 1216x605) |
| `karaoke.jpg` | O karaokê | 964x760 | capa de reel do @pub_baco (720x1280) |
| `sala-de-drinks.jpg` | A sala de drinks | 766x760 | foto dos drinks (original 399x831) |
| `decoracao.jpg` | A decoração | 766x760 | foto da casa (original 662x729) |
| `mural.jpg` | O mural | 766x760 | post do @pub_baco (1080x1080) |

`sala-de-drinks.jpg` é a de menor resolução do conjunto; se aparecer o arquivo
original da câmera, vale trocar.

Duas regras que valem lembrar antes de trocar qualquer foto:

- **cada arquivo já vem recortado na proporção do seu card**, no dobro do
  tamanho em CSS (para telas retina). Não existe mais `object-position` no
  CSS corrigindo enquadramento — se a foto nova tiver outra proporção, o
  `object-fit: cover` corta pelo centro e ninguém controla o que sai;
- **as fotos entram como clima, não como documentação.** O `.tile-bg`
  leva `saturate(0.68) contrast(1.06) brightness(0.95)`, que puxa a cor
  da casa na direção do preto e branco do resto do site; no hover a cor
  volta inteira. É o mesmo movimento da sala de drinks — o Baco acende
  quando você chega perto. Em tela de toque, onde não há hover, elas já
  entram quase com a cor cheia.

O conjunto anterior era print de reel: 1176x574, tremido, com a letra da
música cortada na borda e a marca d'água do Karafun no meio. O card da
sala de drinks era um close no rosto de uma pessoa, não a sala. Se
aparecer foto melhor, é só trocar o arquivo mantendo o nome.

> Havia um `LEIA-ME.txt` dentro de `public/ambiente/` com essas anotações.
> Ele foi removido porque tudo em `public/` é publicado: o arquivo ficava
> acessível em `/ambiente/LEIA-ME.txt` para qualquer visitante. Nota interna
> não mora em pasta pública — mora aqui.

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

---

Site feito por [Lucas Oliveira](https://www.instagram.com/lukk.oliv/) — a
assinatura fica na última linha do rodapé (`Footer.tsx`).
