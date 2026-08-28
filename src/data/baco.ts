/**
 * Conteudo do PUB BACO.
 * Fontes publicas: instagram.com/pub_baco, threads.com/@pub_baco,
 * facebook.com/Pub-Baco-Aracaju, restaurantguru.com/Pub-baco-Aracaju e Tripadvisor.
 * Precos e endereco coletados da web — confirmar com a casa antes de publicar.
 */

export const contato = {
  nome: 'PUB BACO',
  cidade: 'Aracaju • SE',
  bio: 'Sabores artesanais e drinks especiais • Karaokê livre',
  endereco: 'Av. Desembargador Maynard, 290 — Aracaju/SE',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Pub+Baco+Aracaju',
  telefone: '+55 79 98143-8993',
  whatsapp: 'https://wa.me/5579981438993',
  grupoWhatsapp: 'https://chat.whatsapp.com/CYKETzauY4TFFH88yo1PZ6?s=cl&p=i&mlu=4',
} as const

export type Rede = {
  nome: string
  handle: string
  url: string
}

export const redes: Rede[] = [
  { nome: 'Instagram', handle: '@pub_baco', url: 'https://www.instagram.com/pub_baco/' },
  { nome: 'Threads', handle: '@pub_baco', url: 'https://www.threads.com/@pub_baco' },
  {
    nome: 'Facebook',
    handle: 'Pub Baco Aracaju',
    url: 'https://www.facebook.com/p/Pub-Baco-Aracaju-100065585165587/',
  },
  {
    nome: 'Grupo do Baco',
    handle: 'A galera no WhatsApp',
    url: 'https://chat.whatsapp.com/CYKETzauY4TFFH88yo1PZ6?s=cl&p=i&mlu=4',
  },
  { nome: 'WhatsApp da casa', handle: '(79) 98143-8993', url: 'https://wa.me/5579981438993' },
]

export const horarios = [
  { dia: 'Quarta a Sexta', hora: '19h — 02h30' },
  { dia: 'Sábado', hora: '19h — 03h30' },
  { dia: 'Domingo a Terça', hora: 'Fechado' },
] as const

export const manifesto = [
  'Exclusivo',
  'Saboroso',
  'Divertido',
  'Karaokê livre',
  'Entrada free',
  'Qua • Qui • Sex • Sáb',
]

export type Espaco = {
  classe: string
  titulo: string
  texto: string
  gradiente: string
}

/**
 * Cada tile representa um canto da casa. `gradiente` e o fundo provisorio:
 * troque por uma foto colocando o arquivo em /public/ambiente e apontando
 * `gradiente` para `url('/ambiente/nome-do-arquivo.jpg')`.
 */
export const espacos: Espaco[] = [
  {
    classe: 'tile-a',
    titulo: 'O salão do karaokê',
    texto:
      'Luz baixa, letreiro aceso e o microfone no meio da casa. Aqui todo mundo canta — afinado ou não, a plateia devolve o refrão.',
    gradiente:
      'radial-gradient(120% 100% at 20% 10%, rgba(255,255,255,.14), transparent 58%), linear-gradient(150deg, #1c1f21, #0a0b0c)',
  },
  {
    classe: 'tile-b',
    titulo: 'Pegada tropical',
    texto:
      'Folhagem por toda parte, madeira e um clima de pub americano perdido no trópico. Cada canto é uma foto pronta.',
    gradiente:
      'radial-gradient(100% 100% at 80% 20%, rgba(255,255,255,.11), transparent 60%), linear-gradient(200deg, #0d0f10, #1a1d1f)',
  },
  {
    classe: 'tile-c',
    titulo: 'A brasa',
    texto: 'Espetinhos saindo quentes a noite inteira, com vinagrete e farofa.',
    gradiente:
      'radial-gradient(100% 100% at 30% 80%, rgba(255,255,255,.12), transparent 62%), linear-gradient(160deg, #16181a, #08090a)',
  },
  {
    classe: 'tile-d',
    titulo: 'Lounge dos drinks',
    texto: 'Caipirinhas, caipiroskas de fruta e criações autorais do bar.',
    gradiente:
      'radial-gradient(100% 100% at 70% 20%, rgba(255,255,255,.09), transparent 60%), linear-gradient(200deg, #0b0c0d, #17191b)',
  },
  {
    classe: 'tile-e',
    titulo: 'Área externa',
    texto: 'Ar livre, música variada e mesa pra conversar sem gritar.',
    gradiente:
      'radial-gradient(100% 100% at 50% 0%, rgba(255,255,255,.13), transparent 60%), linear-gradient(180deg, #1b1e20, #08090a)',
  },
]

export type Noite = {
  dia: string
  titulo: string
  descricao: string
  tag: string
}

export const noites: Noite[] = [
  {
    dia: 'Quarta',
    titulo: 'Karaokê Livre',
    descricao:
      'O microfone é seu. Sem inscrição, sem julgamento e sem taxa de entrada — só a sua voz e a plateia mais barulhenta de Aracaju.',
    tag: 'Entrada free',
  },
  {
    dia: 'Quinta',
    titulo: 'Divas do Pop',
    descricao:
      'Uma noite inteira dedicada às vozes que criaram os hinos. Playlist temática, luz cênica e refrão em coro do começo ao fim.',
    tag: 'Temática',
  },
  {
    dia: 'Sexta',
    titulo: 'Submundo • DJ Set',
    descricao:
      'Eletrônico, funk e pop nacional na pista enquanto o karaokê segue rolando no salão. Drinks especiais no lounge.',
    tag: 'Pista + Karaokê',
  },
  {
    dia: 'Sábado',
    titulo: 'Semana Mística',
    descricao:
      'A noite mais longa da casa, até as 3h30. Decoração exótica, espetinhos na brasa e o karaokê que não termina.',
    tag: 'Até 03h30',
  },
]

export type ItemMenu = {
  nome: string
  descricao: string
  preco: string
}

export type SecaoMenu = {
  secao: string
  nota?: string
  itens: ItemMenu[]
}

export const cardapio: SecaoMenu[] = [
  {
    secao: 'Espetinhos na brasa',
    nota: 'Todos acompanham vinagrete e farofa',
    itens: [
      { nome: 'Frango', descricao: 'Marinado na casa, grelhado na hora', preco: 'R$ 14,90' },
      { nome: 'Carne de boi', descricao: 'Corte macio, sal grosso e brasa alta', preco: 'R$ 14,90' },
      { nome: 'Coração', descricao: 'O clássico do espeto, no ponto certo', preco: 'R$ 14,90' },
      { nome: 'Linguiça', descricao: 'Artesanal, servida bem dourada', preco: 'R$ 14,90' },
      { nome: 'Língua', descricao: 'Selada devagar até desmanchar', preco: 'a partir de R$ 14,90' },
      { nome: 'Costela', descricao: 'Assada lentamente, suculenta por dentro', preco: 'a partir de R$ 14,90' },
    ],
  },
  {
    secao: 'Drinks da casa',
    nota: 'A partir das 19h, de quarta a sábado',
    itens: [
      { nome: 'Caipirinha', descricao: 'Limão, cachaça e muito gelo', preco: 'R$ 12,00' },
      {
        nome: 'Caipiroska de frutas',
        descricao: 'Morango, maracujá, kiwi ou abacaxi',
        preco: 'R$ 14,90',
      },
      { nome: 'Drinks autorais', descricao: 'Criações do bar, mudam toda semana', preco: 'consulte' },
      { nome: 'Cervejas geladas', descricao: 'Long neck e chope na pressão', preco: 'consulte' },
    ],
  },
]

export const numeros = [
  { valor: '4,7', rotulo: 'Nota no Google' },
  { valor: 'R$ 0', rotulo: 'Entrada no karaokê' },
  { valor: '4 noites', rotulo: 'De quarta a sábado' },
  { valor: 'R$ 20–40', rotulo: 'Consumo médio' },
] as const

export type Depoimento = {
  texto: string
  autor: string
}

export const depoimentos: Depoimento[] = [
  {
    texto:
      'Uma decoração instagramável super exótica, parece um bar americano tipo um pub numa pegada tropical, diferente de tudo.',
    autor: 'Avaliação no Tripadvisor',
  },
  {
    texto: 'Comida muito boa e o lugar é super exótico. Ambiente acolhedor do começo ao fim.',
    autor: 'Avaliação no Google',
  },
  {
    texto: 'Karaokê a noite inteira, sem cobrar entrada. Cada noite vira uma festa.',
    autor: 'Cliente da casa',
  },
]
