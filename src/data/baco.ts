/**
 * Conteudo do PUB BACO.
 * Programacao e precos vindos dos posts do proprio @pub_baco no Instagram
 * (Semana Mistica, 26 a 29/08, e o post do Submundo de sexta).
 */

export const contato = {
  nome: 'PUB BACO',
  cidade: 'Aracaju • SE',
  bio: 'Sabores artesanais e drinks especiais • Karaokê livre',
  endereco: 'R. Simão Dias, 525 — Aracaju/SE',
  enderecoBusca: 'Pub Baco, Rua Simão Dias, Aracaju, Sergipe',
  telefone: '+55 79 98143-8993',
  whatsapp: 'https://wa.me/5579981438993',
  grupoWhatsapp: 'https://chat.whatsapp.com/CYKETzauY4TFFH88yo1PZ6?s=cl&p=i&mlu=4',
} as const

/** Embed do Google Maps — funciona sem chave de API. */
export const mapaEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  contato.enderecoBusca,
)}&output=embed`

export const mapaLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  contato.enderecoBusca,
)}`

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
  { dia: 'Quarta a Sábado', hora: 'Casa abre às 19h' },
  { dia: 'Cozinha', hora: 'Até 1h' },
  { dia: 'Karaokê', hora: 'Até 2h, entrada free' },
  { dia: 'Fim da noite', hora: 'O pub fecha às 3h' },
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
  /** Arquivo em /public/ambiente. Sem foto, o card cai no padrao de grega. */
  foto?: string
}

export const espacos: Espaco[] = [
  {
    classe: 'tile-a',
    titulo: 'O salão principal',
    texto:
      'Lustre, luz rosa, parede coberta de achados e o telão no fundo. É onde a noite acontece, de quarta a sábado.',
    foto: 'salao.jpg',
  },
  {
    classe: 'tile-b',
    titulo: 'O karaokê',
    texto:
      'Microfone livre a partir das 19h e vai até as 2h. Sem inscrição, sem taxa — e a plateia devolve o refrão.',
    foto: 'karaoke.jpg',
  },
  {
    classe: 'tile-c',
    titulo: 'A sala de drinks',
    texto: 'Lá no fundo: DJ nas sextas, luz colorida e a carta autoral do bar.',
    foto: 'sala-de-drinks.jpg',
  },
  {
    classe: 'tile-d',
    titulo: 'A decoração',
    texto: 'Cada parede é um achado diferente. Exótica de um jeito que foto nenhuma explica.',
    foto: 'decoracao.jpg',
  },
  {
    classe: 'tile-e',
    titulo: 'O mural',
    texto: 'Molduras coloridas e recados deixados por quem passou pela casa.',
    foto: 'mural.jpg',
  },
]

export type Noite = {
  dia: string
  data?: string
  titulo: string
  descricao: string
  tag: string
}

/** Semana Mistica — programacao publicada pelo @pub_baco (26 a 29/08). */
export const noites: Noite[] = [
  {
    dia: 'Quarta',
    data: '26/08',
    titulo: 'Oráculo da Canela',
    descricao:
      'Caipirinha de Canela por R$ 9,90 e, junto dela, um conselho do destino: na compra você retira um papel do Oráculo da Canela.',
    tag: 'Caipirinha R$ 9,90',
  },
  {
    dia: 'Quinta',
    data: '27/08',
    titulo: 'Pedidos da Lua',
    descricao:
      'Escreva algo que quer atrair ou deixar ir e coloque no Caldeirão da Sacerdotisa. Ganhe um Shot da Lua — uma participação por pessoa.',
    tag: 'Shot da Lua',
  },
  {
    dia: 'Sexta',
    data: '28/08',
    titulo: 'Lua Cheia em Peixes',
    descricao:
      'Drinks dos Signos em promoção até as 22h e todos eles em dobro até meia-noite. Lá no fundo, o DJ assume a sala de drinks.',
    tag: 'Drinks em dobro',
  },
  {
    dia: 'Sábado',
    data: '29/08',
    titulo: 'Sabá do Baco',
    descricao:
      'Incensos, música e magia. Venha de verde e preto ou cante uma música de tema místico e participe do Drink Mágico.',
    tag: 'Drink Mágico',
  },
]

/**
 * O lado alternativo da casa: a sala de drinks, onde o preto e branco
 * da fachada da lugar ao neon. Cada item ganha sua propria cor.
 */
export type Neon = {
  titulo: string
  texto: string
  cor: string
  cor2: string
}

export const salaDrinks: Neon[] = [
  {
    titulo: 'Submundo',
    texto: 'Funk eletrônico, pop e nacionais. O DJ assume o som a partir das 20h e a noite fica mais densa.',
    cor: '#ff2e88',
    cor2: '#7b2dff',
  },
  {
    titulo: 'Divas do Pop',
    texto: 'No salão principal, às 19h, o karaokê vira culto às vozes que criaram os hinos.',
    cor: '#00e5ff',
    cor2: '#2d6bff',
  },
  {
    titulo: 'Drinks dos Signos',
    texto: 'Doze drinks, um pra cada signo. Em promoção até 22h e em dobro até meia-noite.',
    cor: '#ffb300',
    cor2: '#ff4d00',
  },
  {
    titulo: 'Dois ambientes',
    texto: 'Na frente o karaokê pega fogo, lá no fundo a sala de drinks fica íntima. Uma noite só.',
    cor: '#22e07a',
    cor2: '#00b3a4',
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
    secao: 'Drinks da casa',
    nota: 'A partir das 19h — promoções até as 22h',
    itens: [
      { nome: 'Caipirinha', descricao: 'A clássica da casa', preco: 'R$ 12,00' },
      { nome: 'Caipiroska', descricao: 'Com a fruta da vez', preco: 'R$ 14,00' },
      {
        nome: 'Drinks dos Signos',
        descricao: '12 sabores, um pra cada signo — compre 1 e ganhe outro',
        preco: 'R$ 18,90',
      },
      {
        nome: 'Caipirinha de Canela',
        descricao: 'Da Semana Mística: sai com o conselho do Oráculo',
        preco: 'R$ 9,90',
      },
    ],
  },
  {
    secao: 'Cozinha',
    nota: 'A brasa fica acesa até 1h',
    itens: [
      {
        nome: 'Espetinhos na brasa',
        descricao: 'Com vinagrete e farofa',
        preco: 'a partir de R$ 14,90',
      },
      { nome: 'Batata frita', descricao: 'A porção que acompanha a rodada', preco: 'R$ 19,90' },
      { nome: 'Cervejas geladas', descricao: 'Long neck e chope na pressão', preco: 'consulte' },
      { nome: 'Shot da Lua', descricao: 'Quinta: um por pessoa, no Caldeirão da Sacerdotisa', preco: 'brinde' },
    ],
  },
]

export const numeros = [
  { valor: '19h', rotulo: 'Casa aberta' },
  { valor: 'Até 2h', rotulo: 'Karaokê rolando' },
  { valor: '3h', rotulo: 'O pub fecha' },
  { valor: 'Free', rotulo: 'Entrada' },
  { valor: '4 noites', rotulo: 'Qua a sáb' },
] as const

export const aviso =
  'Não cobramos entrada e ninguém paga pra cantar. Não é permitida a entrada com comida ou bebida.'

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
  { texto: 'Dois ambientes, dois climas, uma noite só.', autor: '@pub_baco' },
  {
    texto:
      'O Pub Baco é feito de gente. Vocês chegam como clientes, mas deixam momentos, memórias e vida no nosso espaço.',
    autor: '@pub_baco',
  },
]
