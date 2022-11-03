import expresso from '@assets/products/expresso.png'
import americano from '@assets/products/americano.png'
import cremoso from '@assets/products/cremoso.png'
import gelado from '@assets/products/gelado.png'
import latte from '@assets/products/latte.png'
import comLeite from '@assets/products/com_leite.png'
import capuccino from '@assets/products/capuccino.png'
import macchiato from '@assets/products/macchiato.png'
import mocaccino from '@assets/products/mocaccino.png'
import chocolateQuente from '@assets/products/chocolate_quente.png'
import cubano from '@assets/products/cubano.png'
import havaiano from '@assets/products/havaiano.png'
import arabe from '@assets/products/arabe.png'
import irlandes from '@assets/products/irlandes.png'

export const productsData = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 8,
    tags: ['tradicional'],
    image: expresso,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9,
    tags: ['tradicional'],
    image: americano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 10,
    tags: ['tradicional'],
    image: cremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 11,
    tags: ['tradicional', 'gelado'],
    image: gelado,
  },
  {
    id: 5,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.5,
    tags: ['tradicional', 'com leite'],
    image: latte,
  },
  {
    id: 6,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: comLeite,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: capuccino,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: macchiato,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: mocaccino,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['especial', 'com leite'],
    image: chocolateQuente,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
    image: cubano,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['especial'],
    image: havaiano,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 10.9,
    tags: ['especial'],
    image: arabe,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
    image: irlandes,
  },
]
