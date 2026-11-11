// Base de dados de condimentação e montagem no formato Placa Vertical de Linha McDonald's Brasil:
// Em cada coluna vertical, o PÃO fica na base inferior e os ingredientes empilham de baixo para cima (1º logo acima do pão até a carne no topo).

const CONDIMENTS = {
  molhoBigMac: {
    id: "molhoBigMac",
    name: "Molho Especial Big Mac",
    image: "images/condiments/molho-big-mac.jpg",
    type: "sauce"
  },
  mostarda: {
    id: "mostarda",
    name: "Mostarda",
    image: "images/condiments/mostarda.jpg",
    type: "sauce"
  },
  ketchup: {
    id: "ketchup",
    name: "Ketchup",
    image: "images/condiments/ketchup.jpg",
    type: "sauce"
  },
  maionese: {
    id: "maionese",
    name: "Maionese Tradicional",
    image: "images/condiments/maionese.jpg",
    type: "sauce"
  },
  molhoCheddar: {
    id: "molhoCheddar",
    name: "Molho Cheddar Cremoso",
    image: "images/condiments/molho-cheddar.jpg",
    type: "sauce"
  },
  molhoBigTasty: {
    id: "molhoBigTasty",
    name: "Molho Big Tasty",
    image: "images/condiments/molho-cbo.jpg",
    type: "sauce"
  },
  molhoTartaro: {
    id: "molhoTartaro",
    name: "Molho Tártaro",
    image: "images/condiments/molho-tartaro.jpg",
    type: "sauce"
  },
  molhoCBO: {
    id: "molhoCBO",
    name: "Molho CBO",
    image: "images/condiments/molho-cbo.jpg",
    type: "sauce"
  },
  molhoMequinese: {
    id: "molhoMequinese",
    name: "Molho Méquinese Defumado",
    image: "images/condiments/molho-mequinese.jpg",
    type: "sauce"
  },
  molhoParmesao: {
    id: "molhoParmesao",
    name: "Molho Creamy Parmesão",
    image: "images/condiments/molho-parmesao.jpg",
    type: "sauce"
  },
  molhoMucarela: {
    id: "molhoMucarela",
    name: "Molho Cremoso Queijo Muçarela",
    image: "images/condiments/molho-mucarela.jpg",
    type: "cheese"
  },
  molhoRanch: {
    id: "molhoRanch",
    name: "Molho Ranch Cremoso",
    image: "images/condiments/molho-ranch.jpg",
    type: "sauce"
  },
  molhoHoneyFire: {
    id: "molhoHoneyFire",
    name: "Molho Honey & Fire",
    image: "images/condiments/molho-honey-fire.jpg",
    type: "sauce"
  },
  molhoSpicy: {
    id: "molhoSpicy",
    name: "Molho Pimenta Suave (Spicy)",
    image: "images/condiments/molho-spicy.jpg",
    type: "sauce"
  },
  manteigaClarificada: {
    id: "manteigaClarificada",
    name: "Manteiga Clarificada",
    image: "images/condiments/manteiga.jpg",
    type: "sauce"
  },
  geleiaSmokedJam: {
    id: "geleiaSmokedJam",
    name: "Geleia Smoked Jam (Defumada)",
    image: "images/condiments/geleia-smoked-jam.jpg",
    type: "sauce"
  },
  cebolaReidratada: {
    id: "cebolaReidratada",
    name: "Cebola Reidratada",
    image: "images/condiments/cebola-reidratada.jpg",
    type: "veggie"
  },
  cebolaFresca: {
    id: "cebolaFresca",
    name: "Cebola Fresca em Tiras",
    image: "images/condiments/cebola-fresca.jpg",
    type: "veggie"
  },
  cebolaShoyu: {
    id: "cebolaShoyu",
    name: "Cebola Marinada no Shoyu",
    image: "images/condiments/cebola-shoyu.jpg",
    type: "veggie"
  },
  cebolaCrispy: {
    id: "cebolaCrispy",
    name: "Cebola Crispy",
    image: "images/condiments/cebola-crispy.jpg",
    type: "veggie"
  },
  alface: {
    id: "alface",
    name: "Alface Crespa (Julienne)",
    image: "images/condiments/alface.jpg",
    type: "veggie"
  },
  picles: {
    id: "picles",
    name: "Picles em Fatias",
    image: "images/condiments/picles.jpg",
    type: "veggie"
  },
  tomate: {
    id: "tomate",
    name: "Tomate em Rodelas",
    image: "images/condiments/tomate.jpg",
    type: "veggie"
  },
  queijoCheddar: {
    id: "queijoCheddar",
    name: "Queijo Cheddar",
    image: "images/condiments/queijo-cheddar.jpg",
    type: "cheese"
  },
  queijoEmmental: {
    id: "queijoEmmental",
    name: "Queijo Emmental",
    image: "images/condiments/queijo-emmental-furos.jpg",
    type: "cheese"
  },
  bacon: {
    id: "bacon",
    name: "Bacon em Fatias",
    image: "images/condiments/bacon.jpg",
    type: "meat"
  },
  baconTriturado: {
    id: "baconTriturado",
    name: "Bacon Triturado (Crispy)",
    image: "images/condiments/bacon-triturado.jpg",
    type: "meat"
  },
  carne10_1: {
    id: "carne10_1",
    name: "Carne Bovina 10:1",
    image: "images/condiments/carne-10-1.jpg",
    type: "beef"
  },
  carne4_1: {
    id: "carne4_1",
    name: "Carne Bovina 4:1",
    image: "images/condiments/carne-4-1.jpg",
    type: "beef"
  },
  carne3_1: {
    id: "carne3_1",
    name: "Carne Bovina Tasty 3:1",
    image: "images/condiments/carne-4-1.jpg",
    type: "beef"
  },
  frangoMcChicken: {
    id: "frangoMcChicken",
    name: "Frango McChicken",
    image: "images/condiments/frango-mcchicken.jpg",
    type: "poultry"
  },
  frangoMcCrispy: {
    id: "frangoMcCrispy",
    name: "Peito de Frango McCrispy",
    image: "images/condiments/frango-mccrispy.jpg",
    type: "poultry"
  },
  peixeMcFish: {
    id: "peixeMcFish",
    name: "Filé de Peixe McFish",
    image: "images/condiments/peixe-mcfish.jpg",
    type: "fish"
  },
  paoCoroaBigMac: {
    id: "paoCoroaBigMac",
    name: "Pão Coroa + Clube",
    image: "images/condiments/pao-aberto-clube-duplo.jpg",
    type: "bun"
  }
};

const BURGERS = [
  {
    id: "big-mac",
    name: "Big Mac",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/big-mac.jpg",
    bun: "Pão Triplo com Gergelim (Coroa, Clube e Base) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Big Mac",
    sections: [
      {
        title: "COROA + CLUBE",
        subtitle: "Pão Clube sobre a Coroa (lado esquerdo da caixa)",
        bunImage: "images/condiments/pao-aberto-clube-duplo.jpg",
        steps: [
          { condiment: "molhoBigMac", amount: "1/3 oz", note: "1 tiro centralizado no Clube" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o molho no Clube" },
          { condiment: "alface", amount: "12 g", note: "Sobre a cebola no Clube" },
          { condiment: "picles", amount: "2 unid.", note: "Lado a lado sem sobrepor" },
          { condiment: "carne10_1", amount: "1 unid. (10:1)", note: "Pegador Vermelho" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior (lado direito da caixa)",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigMac", amount: "1/3 oz", note: "1 tiro centralizado na Base" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o molho na Base" },
          { condiment: "alface", amount: "12 g", note: "Sobre a cebola na Base" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1 fatia sobre a alface na Base" },
          { condiment: "carne10_1", amount: "1 unid. (10:1)", note: "Pegador Vermelho" }
        ]
      }
    ]
  },
  {
    id: "cheeseburger",
    name: "Cheeseburger",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/cheeseburger.jpg",
    bun: "Pão Regular (sem gergelim) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina de Papel (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Condimentação de baixo para cima sobre a Coroa",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola a 2,5 cm" },
          { condiment: "ketchup", amount: "1/3 oz", note: "1 tiro centralizado" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o ketchup" },
          { condiment: "picles", amount: "1 unid.", note: "1 fatia centralizada" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1 fatia de queijo Cheddar" },
          { condiment: "carne10_1", amount: "1 unid. (10:1)", note: "Pegador Vermelho" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "cheddar-mcmelt",
    name: "Cheddar McMelt",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/cheddar-mcmelt.jpg",
    bun: "Pão Escuro com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina Cheddar McMelt (Fechamento Bombom)",
    sections: [
      {
        title: "COROA ESCURA",
        subtitle: "Molho Cheddar em espiral + Cebola Shoyu + Carne 4:1",
        bunImage: "images/condiments/pao-aberto-escuro.jpg",
        steps: [
          { condiment: "molhoCheddar", amount: "1 oz", note: "1 tiro em espiral 🌀" },
          { condiment: "cebolaShoyu", amount: "7 g", note: "Cebola marinada no shoyu" },
          { condiment: "carne4_1", amount: "1 unid. (4:1)", note: "Pegador Vermelho" }
        ]
      },
      {
        title: "BASE ESCURA",
        subtitle: "Pão Escuro Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-escuro.jpg",
        steps: []
      }
    ]
  },
  {
    id: "quarterao",
    name: "Quarterão com Queijo",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/quarterao.jpg",
    bun: "Pão Quarterão com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Quarterão",
    sections: [
      {
        title: "COROA",
        subtitle: "Condimentação na Coroa com Gergelim",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/2 oz", note: "1 tiro simultâneo com mostarda" },
          { condiment: "cebolaFresca", amount: "7 g", note: "Cebola fresca em tiras" },
          { condiment: "picles", amount: "2 unid.", note: "2 fatias lado a lado" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1ª fatia na coroa" }
        ]
      },
      {
        title: "BASE",
        subtitle: "2º Queijo em estrela + Carne 4:1 na Base",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "queijoCheddar", amount: "1 unid. ⭐", note: "2ª fatia em estrela na base" },
          { condiment: "carne4_1", amount: "1 unid. (4:1)", note: "Pegador Vermelho" }
        ]
      }
    ]
  },
  {
    id: "hamburger",
    name: "Hamburger",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/hamburger.jpg",
    bun: "Pão Regular (sem gergelim) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina de Papel (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Mesma pilha do Cheeseburger, sem queijo",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/3 oz", note: "1 tiro centralizado" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o ketchup" },
          { condiment: "picles", amount: "1 unid.", note: "1 fatia centralizada" },
          { condiment: "carne10_1", amount: "1 unid. (10:1)", note: "Pegador Vermelho" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mcduplo",
    name: "McDuplo",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/mcduplo.jpg",
    bun: "Pão Regular (sem gergelim) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina 4 Sabores com Selo Amarelo (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "1 fatia de picles + 1 fatia de queijo + 2 carnes 10:1",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/3 oz", note: "1 tiro centralizado" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o ketchup" },
          { condiment: "picles", amount: "1 unid.", note: "1 fatia centralizada" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1 fatia de queijo Cheddar" },
          { condiment: "carne10_1", amount: "2 unid. (10:1)", note: "Pegador Vermelho • 2 discos 10:1" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "duplo-cheeseburger",
    name: "Duplo Burger com Queijo",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/mcduplo.jpg",
    bun: "Pão Regular (sem gergelim) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina de Papel (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Leva 2 fatias de picles e 1ª fatia de queijo na Coroa",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/3 oz", note: "1 tiro centralizado" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o ketchup" },
          { condiment: "picles", amount: "2 unid.", note: "2 fatias lado a lado" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1ª fatia sobre os picles" }
        ]
      },
      {
        title: "BASE",
        subtitle: "2ª fatia de queijo em estrela entre as 2 carnes 10:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "carne10_1", amount: "1 unid. (10:1)", note: "1ª carne na base" },
          { condiment: "queijoCheddar", amount: "1 unid. ⭐", note: "2ª fatia em estrela" },
          { condiment: "carne10_1", amount: "1 unid. (10:1)", note: "2ª carne no topo" }
        ]
      }
    ]
  },
  {
    id: "duplo-cheddar",
    name: "Duplo Cheddar McMelt",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/duplo-cheddar.jpg",
    bun: "Pão Escuro com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina Duplo Cheddar (Fechamento Bombom)",
    sections: [
      {
        title: "COROA ESCURA",
        subtitle: "Molho Cheddar em espiral + Cebola Shoyu + 2 Carnes 4:1",
        bunImage: "images/condiments/pao-aberto-escuro.jpg",
        steps: [
          { condiment: "molhoCheddar", amount: "1 oz", note: "1 tiro em espiral 🌀" },
          { condiment: "cebolaShoyu", amount: "7 g", note: "Cebola marinada no shoyu" },
          { condiment: "carne4_1", amount: "2 unid. (4:1)", note: "Pegador Vermelho • 2 carnes 4:1" }
        ]
      },
      {
        title: "BASE ESCURA",
        subtitle: "Pão Escuro Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-escuro.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mcnifico-bacon",
    name: "McNífico Bacon",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/mcnifico-bacon.jpg",
    bun: "Pão Quarterão com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina McNífico Bacon (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Condimentação completa na Coroa",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/2 oz", note: "1 tiro simultâneo com mostarda" },
          { condiment: "cebolaFresca", amount: "7 g", note: "Sobre o ketchup" },
          { condiment: "maionese", amount: "1/3 oz", note: "1 tiro a 2,5 cm" },
          { condiment: "alface", amount: "28 g", note: "Montinho centralizado" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas sobre a alface" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1 fatia sobre os tomates" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o queijo" },
          { condiment: "carne4_1", amount: "1 unid. (4:1)", note: "Pegador Vermelho" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "big-tasty",
    name: "Big Tasty (Tasty Turbo 1 Carne)",
    category: "tasty",
    categoryLabel: "Linha Tasty",
    image: "images/burgers/big-tasty.png",
    bun: "Pão Big Tasty com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Big Tasty",
    sections: [
      {
        title: "COROA",
        subtitle: "1º tiro de Molho Tasty + Vegetais + 1º Emmental",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro na Coroa" },
          { condiment: "cebolaFresca", amount: "10 g", note: "Cebola fresca sobre o molho" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas sobre a alface" },
          { condiment: "queijoEmmental", amount: "1 unid. ⭐", note: "1ª fatia em estrela" }
        ]
      },
      {
        title: "BASE",
        subtitle: "2º tiro de Molho Tasty + 2 fatias Emmental + Carne 3:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro direto na Base" },
          { condiment: "queijoEmmental", amount: "2 unid.", note: "2 fatias sobrepostas na Base" },
          { condiment: "carne3_1", amount: "1 unid. (3:1)", note: "Pegador Vermelho • Carne 3:1" }
        ]
      }
    ]
  },
  {
    id: "duplo-big-tasty",
    name: "Duplo Big Tasty (Tasty Turbo 2 Carnes)",
    category: "tasty",
    categoryLabel: "Linha Tasty",
    image: "images/burgers/duplo-big-tasty.jpg",
    bun: "Pão Big Tasty com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Big Tasty (Tag Duplo)",
    sections: [
      {
        title: "COROA",
        subtitle: "1º tiro de Molho Tasty + Vegetais + 1º Emmental",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro na Coroa" },
          { condiment: "cebolaFresca", amount: "10 g", note: "Cebola fresca sobre o molho" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas sobre a alface" },
          { condiment: "queijoEmmental", amount: "1 unid. ⭐", note: "1ª fatia em estrela" }
        ]
      },
      {
        title: "BASE",
        subtitle: "2º tiro de Molho Tasty + 2 fatias Emmental + 2 Carnes 3:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro direto na Base" },
          { condiment: "queijoEmmental", amount: "2 unid.", note: "2 fatias sobrepostas na Base" },
          { condiment: "carne3_1", amount: "2 unid. (3:1)", note: "Pegador Vermelho • 2 carnes 3:1" }
        ]
      }
    ]
  },
  {
    id: "triplo-big-tasty",
    name: "Triplo Big Tasty (Tasty Turbo 3 Carnes)",
    category: "tasty",
    categoryLabel: "Linha Tasty",
    image: "images/burgers/triplo-big-tasty.jpg",
    bun: "Pão Big Tasty com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Big Tasty (Tag Triplo)",
    sections: [
      {
        title: "COROA",
        subtitle: "1º tiro de Molho Tasty + Vegetais + 1º Emmental",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro na Coroa" },
          { condiment: "cebolaFresca", amount: "10 g", note: "Cebola fresca sobre o molho" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas sobre a alface" },
          { condiment: "queijoEmmental", amount: "1 unid. ⭐", note: "1ª fatia em estrela" }
        ]
      },
      {
        title: "BASE",
        subtitle: "2º tiro de Molho Tasty + 2 fatias Emmental + 3 Carnes 3:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro direto na Base" },
          { condiment: "queijoEmmental", amount: "2 unid.", note: "2 fatias sobrepostas na Base" },
          { condiment: "carne3_1", amount: "3 unid. (3:1)", note: "Pegador Vermelho • 3 carnes 3:1" }
        ]
      }
    ]
  },
  {
    id: "big-tasty-turbo-bacon",
    name: "Big Tasty Turbo Bacon (1 Carne)",
    category: "tasty",
    categoryLabel: "Linha Tasty",
    image: "images/burgers/big-tasty-turbo-bacon.jpg",
    bun: "Pão Big Tasty com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Big Tasty",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Tasty + Bacon Triturado + Vegetais + Emmental + Bacon Fatias",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro na Coroa" },
          { condiment: "baconTriturado", amount: "7 g", note: "Bacon triturado sobre o molho" },
          { condiment: "cebolaFresca", amount: "10 g", note: "Cebola fresca em tiras" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas sobre a alface" },
          { condiment: "queijoEmmental", amount: "1 unid. ⭐", note: "1ª fatia em estrela" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o queijo" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Molho Tasty + 2 fatias Emmental + 1 Carne 3:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro direto na Base" },
          { condiment: "queijoEmmental", amount: "2 unid.", note: "2 fatias sobrepostas" },
          { condiment: "carne3_1", amount: "1 unid. (3:1)", note: "Pegador Vermelho" }
        ]
      }
    ]
  },
  {
    id: "big-tasty-turbo-bacon-duplo",
    name: "Big Tasty Turbo Bacon Duplo (2 Carnes)",
    category: "tasty",
    categoryLabel: "Linha Tasty",
    image: "images/burgers/big-tasty-turbo-bacon.jpg",
    bun: "Pão Big Tasty com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Big Tasty (Tag Duplo Bacon)",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Tasty + Bacon Triturado + Vegetais + Emmental + Bacon Fatias",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro na Coroa" },
          { condiment: "baconTriturado", amount: "7 g", note: "Bacon triturado sobre o molho" },
          { condiment: "cebolaFresca", amount: "10 g", note: "Cebola fresca em tiras" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas sobre a alface" },
          { condiment: "queijoEmmental", amount: "1 unid. ⭐", note: "1ª fatia em estrela" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o queijo" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Molho Tasty + 2 fatias Emmental + 2 Carnes 3:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro direto na Base" },
          { condiment: "queijoEmmental", amount: "2 unid.", note: "2 fatias sobrepostas" },
          { condiment: "carne3_1", amount: "2 unid. (3:1)", note: "Pegador Vermelho • 2 carnes 3:1" }
        ]
      }
    ]
  },
  {
    id: "big-tasty-turbo-bacon-triplo",
    name: "Big Tasty Turbo Bacon Triplo (3 Carnes)",
    category: "tasty",
    categoryLabel: "Linha Tasty",
    image: "images/burgers/big-tasty-turbo-bacon.jpg",
    bun: "Pão Big Tasty com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Big Tasty (Tag Triplo Bacon)",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Tasty + Bacon Triturado + Vegetais + Emmental + Bacon Fatias",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro na Coroa" },
          { condiment: "baconTriturado", amount: "7 g", note: "Bacon triturado sobre o molho" },
          { condiment: "cebolaFresca", amount: "10 g", note: "Cebola fresca em tiras" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas sobre a alface" },
          { condiment: "queijoEmmental", amount: "1 unid. ⭐", note: "1ª fatia em estrela" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o queijo" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Molho Tasty + 2 fatias Emmental + 3 Carnes 3:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro direto na Base" },
          { condiment: "queijoEmmental", amount: "2 unid.", note: "2 fatias sobrepostas" },
          { condiment: "carne3_1", amount: "3 unid. (3:1)", note: "Pegador Vermelho • 3 carnes 3:1" }
        ]
      }
    ]
  },
  {
    id: "big-tasty-turbo-queijo",
    name: "Big Tasty Turbo Queijo",
    category: "tasty",
    categoryLabel: "Linha Tasty",
    image: "images/burgers/big-tasty-turbo-queijo.jpg",
    bun: "Pão Big Tasty com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Big Tasty",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Tasty + Molho Queijo Muçarela + Vegetais + Emmental + Cheddar",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro na Coroa" },
          { condiment: "molhoMucarela", amount: "1 oz", note: "Molho cremoso de Muçarela" },
          { condiment: "cebolaFresca", amount: "10 g", note: "Cebola fresca sobre o molho" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas sobre a alface" },
          { condiment: "queijoEmmental", amount: "1 unid. ⭐", note: "1ª fatia de Emmental em estrela" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1ª fatia de Cheddar sobre o Emmental" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Molho Tasty + Emmental + Cheddar + Carne 3:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro direto na Base" },
          { condiment: "queijoEmmental", amount: "1 unid.", note: "2ª fatia de Emmental na Base" },
          { condiment: "queijoCheddar", amount: "1 unid. ⭐", note: "2ª fatia de Cheddar em estrela" },
          { condiment: "carne3_1", amount: "1 ou 2 unid. (3:1)", note: "Pegador Vermelho • Carne 3:1" }
        ]
      }
    ]
  },
  {
    id: "big-tasty-chicken-bacon",
    name: "Big Tasty Chicken Bacon",
    category: "tasty",
    categoryLabel: "Linha Tasty",
    image: "images/burgers/mcchicken-bacon.jpg",
    bun: "Pão Big Tasty com Gergelim • Tostagem 22s a 293°C",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Rígida Big Tasty",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Tasty + Vegetais + 1º Emmental + Bacon em Fatias",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro na Coroa" },
          { condiment: "cebolaFresca", amount: "10 g", note: "Cebola fresca sobre o molho" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas sobre a alface" },
          { condiment: "queijoEmmental", amount: "1 unid. ⭐", note: "1ª fatia em estrela" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o queijo" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Molho Tasty + 2 fatias Emmental + Frango Empanado",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigTasty", amount: "1 oz", note: "1 tiro direto na Base" },
          { condiment: "queijoEmmental", amount: "2 unid.", note: "2 fatias sobrepostas na Base" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      }
    ]
  },
  {
    id: "duplo-quarterao",
    name: "Duplo Quarterão",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/quarterao.jpg",
    bun: "Pão Quarterão com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Duplo Quarterão",
    sections: [
      {
        title: "COROA",
        subtitle: "Condimentação na Coroa com Gergelim",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/2 oz", note: "1 tiro simultâneo com mostarda" },
          { condiment: "cebolaFresca", amount: "7 g", note: "Cebola fresca em tiras" },
          { condiment: "picles", amount: "2 unid.", note: "2 fatias lado a lado" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1ª fatia na coroa" }
        ]
      },
      {
        title: "BASE",
        subtitle: "2º Queijo em estrela + 2 Carnes 4:1 na Base",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "queijoCheddar", amount: "1 unid. ⭐", note: "2ª fatia em estrela na base" },
          { condiment: "carne4_1", amount: "2 unid. (4:1)", note: "Pegador Vermelho • 2 carnes 4:1" }
        ]
      }
    ]
  },
  {
    id: "duplo-big-mac",
    name: "Duplo Big Mac",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/big-mac.jpg",
    bun: "Pão Triplo com Gergelim (Coroa, Clube e Base) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Big Mac",
    sections: [
      {
        title: "COROA + CLUBE",
        subtitle: "Leva 2 carnes 10:1 no Clube",
        bunImage: "images/condiments/pao-aberto-clube-duplo.jpg",
        steps: [
          { condiment: "molhoBigMac", amount: "1/3 oz", note: "1 tiro no Clube" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o molho" },
          { condiment: "alface", amount: "12 g", note: "Sobre a cebola" },
          { condiment: "picles", amount: "2 unid.", note: "Lado a lado" },
          { condiment: "carne10_1", amount: "2 unid. (10:1)", note: "Pegador Vermelho • 2 carnes no Clube" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Leva 2 carnes 10:1 na Base",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoBigMac", amount: "1/3 oz", note: "1 tiro na Base" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o molho" },
          { condiment: "alface", amount: "12 g", note: "Sobre a cebola" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "Sobre a alface" },
          { condiment: "carne10_1", amount: "2 unid. (10:1)", note: "Pegador Vermelho • 2 carnes na Base" }
        ]
      }
    ]
  },
  {
    id: "triplo-cheeseburger",
    name: "Triplo Cheeseburger",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/mcduplo.jpg",
    bun: "Pão Regular (sem gergelim) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina Triplo (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Condimentação + 2 fatias de picles + 1º Queijo",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/3 oz", note: "1 tiro centralizado" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o ketchup" },
          { condiment: "picles", amount: "2 unid.", note: "2 fatias lado a lado" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1ª fatia na coroa" }
        ]
      },
      {
        title: "BASE",
        subtitle: "3 Carnes 10:1 intercaladas com 2ª fatia de Queijo",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "carne10_1", amount: "1 unid. (10:1)", note: "1ª carne na base" },
          { condiment: "queijoCheddar", amount: "1 unid. ⭐", note: "2ª fatia em estrela" },
          { condiment: "carne10_1", amount: "2 unid. (10:1)", note: "2ª e 3ª carnes sobrepostas" }
        ]
      }
    ]
  },
  {
    id: "triplo-burger-bacon",
    name: "Triplo Burger Bacon",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/mcduplo.jpg",
    bun: "Pão Regular (sem gergelim) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina Triplo (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Condimentação + Bacon + 1º Queijo",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/3 oz", note: "1 tiro centralizado" },
          { condiment: "cebolaReidratada", amount: "3,5 g", note: "Sobre o ketchup" },
          { condiment: "picles", amount: "2 unid.", note: "2 fatias lado a lado" },
          { condiment: "bacon", amount: "2 fatias", note: "Lado a lado" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1ª fatia na coroa" }
        ]
      },
      {
        title: "BASE",
        subtitle: "3 Carnes 10:1 + 2ª fatia de Queijo",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "carne10_1", amount: "1 unid. (10:1)", note: "1ª carne na base" },
          { condiment: "queijoCheddar", amount: "1 unid. ⭐", note: "2ª fatia em estrela" },
          { condiment: "carne10_1", amount: "2 unid. (10:1)", note: "2ª e 3ª carnes sobrepostas" }
        ]
      }
    ]
  },
  {
    id: "duplo-salada",
    name: "Duplo Salada",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/duplo-salada.jpg",
    bun: "Pão Regular (sem gergelim) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina 4 Sabores Sem Selo (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Condimentação completa + 2 carnes 10:1",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/3 oz", note: "1 tiro centralizado" },
          { condiment: "cebolaFresca", amount: "7 g", note: "Sobre o ketchup" },
          { condiment: "maionese", amount: "1/3 oz", note: "1 tiro a 2,5 cm" },
          { condiment: "alface", amount: "12 g", note: "Sobre a maionese" },
          { condiment: "tomate", amount: "1 unid.", note: "1 rodela sobre a alface" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1 fatia sobre o tomate" },
          { condiment: "carne10_1", amount: "2 unid. (10:1)", note: "Pegador Vermelho • 2 carnes 10:1" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mcfiesta",
    name: "McFiesta",
    category: "bovinos",
    categoryLabel: "Clássico Bovino",
    image: "images/burgers/mcfiesta.jpg",
    bun: "Pão Regular (sem gergelim) • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Lâmina 4 Sabores com Selo Cinza (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Maionese + Alface + Tomate + Carne 10:1",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "maionese", amount: "1/3 oz", note: "1 tiro na Coroa" },
          { condiment: "alface", amount: "12 g", note: "Sobre a maionese" },
          { condiment: "tomate", amount: "1 unid.", note: "1 rodela centralizada" },
          { condiment: "carne10_1", amount: "1 unid. (10:1)", note: "Pegador Vermelho" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mcchicken",
    name: "McChicken",
    category: "aves-peixe",
    categoryLabel: "Frango & Peixe",
    image: "images/burgers/mcchicken.jpg",
    bun: "Pão Quarterão com Gergelim • Tostagem 22s a 293°C",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Lâmina McChicken (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Maionese + Alface + Frango McChicken",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "maionese", amount: "2/3 oz", note: "1 tiro centralizado" },
          { condiment: "alface", amount: "22 g", note: "Cobrindo a superfície" },
          { condiment: "frangoMcChicken", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mcchicken-bacon",
    name: "McChicken Bacon",
    category: "aves-peixe",
    categoryLabel: "Frango & Peixe",
    image: "images/burgers/mcchicken-bacon.jpg",
    bun: "Pão Quarterão com Gergelim • Tostagem 22s a 293°C",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Lâmina McChicken Bacon (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Maionese + Alface + 2 fatias Bacon + Frango McChicken",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "maionese", amount: "2/3 oz", note: "1 tiro centralizado" },
          { condiment: "alface", amount: "22 g", note: "Cobrindo a superfície" },
          { condiment: "bacon", amount: "2 fatias", note: "Lado a lado sobre a alface" },
          { condiment: "frangoMcChicken", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mcjunior",
    name: "McJunior (Chicken Jr.)",
    category: "aves-peixe",
    categoryLabel: "Frango & Peixe",
    image: "images/burgers/mcjunior.jpg",
    bun: "Pão Regular (sem gergelim) • Tostagem 22s a 293°C",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Lâmina de Papel (Fechamento Bombom)",
    sections: [
      {
        title: "COROA",
        subtitle: "Maionese + Alface + Frango Junior",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "maionese", amount: "1/2 oz", note: "1 tiro centralizado" },
          { condiment: "alface", amount: "15 g", note: "Sobre a maionese" },
          { condiment: "frangoMcChicken", amount: "1 unid. (Jr)", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "cbo",
    name: "CBO (Chicken Bacon Onion)",
    category: "aves-peixe",
    categoryLabel: "Frango & Peixe",
    image: "images/burgers/cbo.jpg",
    bun: "Pão CBO com Gergelim e Bacon • Tostagem 22s a 293°C",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Rígida CBO",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho CBO → Cebola Crispy → Alface → Bacon → Queijo → Frango",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "molhoCBO", amount: "2/3 a 1 oz", note: "1 tiro em espiral 🌀" },
          { condiment: "cebolaCrispy", amount: "10 g", note: "Sobre o molho CBO" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola crispy" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado na diagonal" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "Sobre o bacon" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão Inferior na Caixa",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mcfish",
    name: "McFish",
    category: "aves-peixe",
    categoryLabel: "Frango & Peixe",
    image: "images/burgers/mcfish.jpg",
    bun: "Pão Regular (Ativado 3” a 5” na tostadeira vertical ou 12s no vaporizador)",
    tong: "green",
    tongLabel: "Pegador Bege (Peixe) / Verde • UHC",
    packaging: "Caixa Rígida McFish",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Tártaro + Filé de Peixe sobre a Coroa",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoTartaro", amount: "1 oz", note: "1 tiro centralizado na Coroa" },
          { condiment: "peixeMcFish", amount: "1 unid.", note: "Pegador Bege • Sobre o molho" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Queijo Cheddar na Base (fecha sobre o filé e desvira)",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "queijoCheddar", amount: "1 unid. (ou 1/2)", note: "Na Base do pão" }
        ]
      }
    ]
  },
  {
    id: "mcfish-duplo",
    name: "Duplo McFish",
    category: "aves-peixe",
    categoryLabel: "Frango & Peixe",
    image: "images/burgers/mcfish-duplo.jpg",
    bun: "Pão Regular (Ativado 3” a 5” na tostadeira vertical ou 12s no vaporizador)",
    tong: "green",
    tongLabel: "Pegador Bege (Peixe) / Verde • UHC",
    packaging: "Caixa Rígida McFish (Destacar TAG 2)",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Tártaro + 2 Filés de Peixe sobre a Coroa",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoTartaro", amount: "1 oz", note: "1 tiro centralizado na Coroa" },
          { condiment: "peixeMcFish", amount: "2 unid.", note: "Pegador Bege • 2 filés sobrepostos" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Queijo Cheddar na Base (fecha sobre os filés e desvira)",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "queijoCheddar", amount: "1 unid. (ou 1/2)", note: "Na Base do pão" }
        ]
      }
    ]
  },
  {
    id: "brabo-carne",
    name: "Brabo Brabíssimo Carne",
    category: "brabos",
    categoryLabel: "Brabos & Especiais",
    image: "images/burgers/brabo-carne.jpg",
    bun: "Pão Tipo Brioche (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Premium Linha Brabo (Tag 1 Selo Amarelo + Palito central)",
    sections: [
      {
        title: "COROA BRIOCHE",
        subtitle: "Molho CBO → Alface → Bacon → Queijo Cheddar",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoCBO", amount: "1 oz", note: "1 tiro centralizado na Coroa" },
          { condiment: "alface", amount: "28 g", note: "Sobre o molho CBO" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre a alface" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "Sobre o bacon na Coroa" }
        ]
      },
      {
        title: "BASE BRIOCHE",
        subtitle: "Méquinese → Cebola Crispy → Queijo Cheddar → 2 Carnes 4:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoMequinese", amount: "1 oz", note: "1 tiro sobre a Base" },
          { condiment: "cebolaCrispy", amount: "10 g", note: "Sobre o molho Méquinese" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "Sobre a cebola crispy" },
          { condiment: "carne4_1", amount: "2 unid. (4:1)", note: "Pegador Vermelho • 2 carnes 4:1" }
        ]
      }
    ]
  },
  {
    id: "brabo-frango",
    name: "Brabo Brabíssimo Frango",
    category: "brabos",
    categoryLabel: "Brabos & Especiais",
    image: "images/burgers/brabo-frango.jpg",
    bun: "Pão Tipo Brioche (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Premium Linha Brabo (Tag 3 Selo Amarelo + Palito central)",
    sections: [
      {
        title: "COROA BRIOCHE",
        subtitle: "Molho CBO → Alface → Bacon → Queijo Cheddar",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoCBO", amount: "1 oz", note: "1 tiro centralizado na Coroa" },
          { condiment: "alface", amount: "28 g", note: "Sobre o molho CBO" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre a alface" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "Sobre o bacon na Coroa" }
        ]
      },
      {
        title: "BASE BRIOCHE",
        subtitle: "Méquinese → Cebola Crispy → Queijo Cheddar → 2 McChicken",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoMequinese", amount: "1 oz", note: "1 tiro sobre a Base" },
          { condiment: "cebolaCrispy", amount: "10 g", note: "Sobre o molho Méquinese" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "Sobre a cebola crispy" },
          { condiment: "frangoMcChicken", amount: "2 unid.", note: "Pegador Verde • 2 McChicken" }
        ]
      }
    ]
  },
  {
    id: "brabo-melt-crispy",
    name: "Brabo Melt Crispy",
    category: "brabos",
    categoryLabel: "Brabos & Especiais",
    image: "images/burgers/brabo-carne.jpg",
    bun: "Pão Tipo Brioche (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Premium Linha Brabo",
    sections: [
      {
        title: "COROA BRIOCHE",
        subtitle: "Molho Cheddar em espiral + 3 fatias de Bacon",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoCheddar", amount: "1 oz", note: "1 tiro em espiral 🌀" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o cheddar" }
        ]
      },
      {
        title: "BASE BRIOCHE",
        subtitle: "Méquinese + Cebola Crispy + Queijo Cheddar + Carne 4:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoMequinese", amount: "1 oz", note: "1 tiro sobre a Base" },
          { condiment: "cebolaCrispy", amount: "10 g", note: "Sobre o molho Méquinese" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "Sobre a cebola crispy" },
          { condiment: "carne4_1", amount: "1 unid. (4:1)", note: "Pegador Vermelho" }
        ]
      }
    ]
  },
  {
    id: "brabo-smokehouse",
    name: "Brabo SmokeHouse (Brabo Smoke)",
    category: "brabos",
    categoryLabel: "Brabos & Especiais",
    image: "images/burgers/brabo-smokehouse.jpg",
    bun: "Pão Tipo Brioche (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Premium Linha Brabo (Palito central)",
    sections: [
      {
        title: "COROA BRIOCHE",
        subtitle: "Geleia Smoked Jam → Bacon Triturado → 3 fatias Bacon → Queijo Cheddar",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "geleiaSmokedJam", amount: "20 g (1 oz)", note: "Geleia Smoked Jam agridoce defumada" },
          { condiment: "baconTriturado", amount: "7 g", note: "Bacon triturado sobre a geleia" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado na Coroa" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1ª fatia de Cheddar na Coroa" }
        ]
      },
      {
        title: "BASE BRIOCHE",
        subtitle: "Méquinese → Cebola Crispy → Queijo Cheddar → 2 Carnes 4:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoMequinese", amount: "1 oz", note: "1 tiro Molho Méquinese na Base" },
          { condiment: "cebolaCrispy", amount: "10 g", note: "Sobre o molho Méquinese" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "2ª fatia sobre a cebola crispy" },
          { condiment: "carne4_1", amount: "2 unid. (4:1)", note: "Pegador Vermelho • 2 carnes 4:1" }
        ]
      }
    ]
  },
  {
    id: "brabo-bacon-salad",
    name: "Brabo Bacon Salad",
    category: "brabos",
    categoryLabel: "Brabos & Especiais",
    image: "images/burgers/brabo-bacon-salad.jpg",
    bun: "Pão Tipo Brioche (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Premium Linha Brabo",
    sections: [
      {
        title: "COROA BRIOCHE",
        subtitle: "Méquinese → Alface → 2 rodelas Tomate → 3 fatias Bacon",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoMequinese", amount: "1 oz", note: "1 tiro Molho Méquinese na Coroa" },
          { condiment: "alface", amount: "28 g", note: "Sobre o molho Méquinese" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas lado a lado" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o tomate" }
        ]
      },
      {
        title: "BASE BRIOCHE",
        subtitle: "Méquinese → Queijo Cheddar → Carne 4:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoMequinese", amount: "1 oz", note: "1 tiro sobre a Base" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "Sobre o molho Méquinese" },
          { condiment: "carne4_1", amount: "1 unid. (4:1)", note: "Pegador Vermelho" }
        ]
      }
    ]
  },
  {
    id: "brabo-clubhouse",
    name: "Brabo ClubHouse",
    category: "brabos",
    categoryLabel: "Brabos & Especiais",
    image: "images/burgers/brabo-clubhouse.jpg",
    bun: "Pão Tipo Brioche (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Premium Linha Brabo (Palito central)",
    sections: [
      {
        title: "COROA BRIOCHE",
        subtitle: "Molho Especial → Alface → Tomate → 3 fatias Bacon → Queijo Emmental",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoBigMac", amount: "1 oz", note: "Molho Especial na Coroa" },
          { condiment: "alface", amount: "28 g", note: "Sobre o molho" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas lado a lado" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o tomate" },
          { condiment: "queijoEmmental", amount: "1 unid.", note: "1ª fatia de Emmental na Coroa" }
        ]
      },
      {
        title: "BASE BRIOCHE",
        subtitle: "Méquinese → Cebola Shoyu → Queijo Emmental → 2 Carnes 4:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "molhoMequinese", amount: "1 oz", note: "1 tiro Molho Méquinese na Base" },
          { condiment: "cebolaShoyu", amount: "14 g", note: "Cebola caramelizada no shoyu" },
          { condiment: "queijoEmmental", amount: "1 unid.", note: "2ª fatia de Emmental na Base" },
          { condiment: "carne4_1", amount: "2 unid. (4:1)", note: "Pegador Vermelho • 2 carnes 4:1" }
        ]
      }
    ]
  },
  {
    id: "quarterao-melt-parmesao",
    name: "Quarterão Melt Parmesão",
    category: "brabos",
    categoryLabel: "Brabos & Especiais",
    image: "images/burgers/quarterao-melt-parmesao.jpg",
    bun: "Pão Quarterão com Gergelim • Tostagem 22s a 293°C",
    tong: "red",
    tongLabel: "Pegador Vermelho • UHC 85°C",
    packaging: "Caixa Rígida Especial Melt Parmesão",
    sections: [
      {
        title: "COROA",
        subtitle: "Mostarda + Ketchup → Parmesão → Cebola Crispy → Picles → Bacon → 1º Queijo",
        bunImage: "images/condiments/pao-aberto-gergelim.jpg",
        steps: [
          { condiment: "mostarda", amount: "1/40 oz", note: "1 tiro micro-pistola" },
          { condiment: "ketchup", amount: "1/2 oz", note: "1 tiro simultâneo com mostarda" },
          { condiment: "molhoParmesao", amount: "1 oz", note: "Molho Creamy Parmesão" },
          { condiment: "cebolaCrispy", amount: "10 g", note: "Sobre o molho Parmesão" },
          { condiment: "picles", amount: "2 unid.", note: "Lado a lado" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1ª fatia na Coroa" }
        ]
      },
      {
        title: "BASE",
        subtitle: "2º Queijo em estrela + Carne 4:1",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: [
          { condiment: "queijoCheddar", amount: "1 unid. ⭐", note: "2ª fatia em estrela" },
          { condiment: "carne4_1", amount: "1 unid. (4:1)", note: "Pegador Vermelho" }
        ]
      }
    ]
  },
  {
    id: "mccrispy-classic",
    name: "McCrispy Chicken Classic",
    category: "crispy",
    categoryLabel: "Linha Crispy",
    image: "images/burgers/mccrispy-classic.jpg",
    bun: "Pão Tipo Brioche com Batata (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Lâmina / Caixa McCrispy Classic",
    sections: [
      {
        title: "COROA",
        subtitle: "Manteiga Clarificada → 2 fatias de Picles → Peito de Frango McCrispy",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "manteigaClarificada", amount: "1 toque", note: "Camada fina na Coroa tostada" },
          { condiment: "picles", amount: "2 unid.", note: "2 fatias lado a lado" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão de Batata Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mccrispy-deluxe",
    name: "McCrispy Chicken Deluxe",
    category: "crispy",
    categoryLabel: "Linha Crispy",
    image: "images/burgers/mccrispy-deluxe.jpg",
    bun: "Pão Tipo Brioche com Batata (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Rígida McCrispy Deluxe",
    sections: [
      {
        title: "COROA",
        subtitle: "Maionese → Alface → 2 rodelas de Tomate → Peito de Frango McCrispy",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "maionese", amount: "2/3 oz", note: "1 tiro centralizado na Coroa" },
          { condiment: "alface", amount: "22 g", note: "Sobre a maionese" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas lado a lado" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão de Batata Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mccrispy-spicy-deluxe",
    name: "McCrispy Chicken Spicy Deluxe",
    category: "crispy",
    categoryLabel: "Linha Crispy",
    image: "images/burgers/mccrispy-spicy-deluxe.jpg",
    bun: "Pão Tipo Brioche com Batata (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Rígida McCrispy Spicy Deluxe",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Pimenta Suave → Alface → 2 rodelas de Tomate → Peito de Frango McCrispy",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoSpicy", amount: "2/3 oz", note: "Molho de pimenta suave na Coroa" },
          { condiment: "alface", amount: "22 g", note: "Sobre o molho Spicy" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas lado a lado" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão de Batata Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mccrispy-legend",
    name: "McCrispy Chicken Legend",
    category: "crispy",
    categoryLabel: "Linha Crispy",
    image: "images/burgers/mccrispy-legend.jpg",
    bun: "Pão Tipo Brioche com Batata (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Rígida McCrispy Legend",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho CBO → Cebola Crispy → Alface → 3 fatias Bacon → Queijo Cheddar → Frango McCrispy",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoCBO", amount: "1 oz", note: "1 tiro em espiral 🌀" },
          { condiment: "cebolaCrispy", amount: "10 g", note: "Sobre o molho CBO" },
          { condiment: "alface", amount: "28 g", note: "Sobre a cebola crispy" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre a alface" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1 fatia sobre o bacon" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão de Batata Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mccrispy-melt-bacon",
    name: "McCrispy Chicken Melt & Bacon",
    category: "crispy",
    categoryLabel: "Linha Crispy",
    image: "images/burgers/mccrispy-melt-bacon.jpg",
    bun: "Pão Tipo Brioche com Batata (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Rígida McCrispy Melt & Bacon",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Cheddar Cremoso em espiral → 3 fatias de Bacon → Frango McCrispy",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoCheddar", amount: "1 oz", note: "1 tiro em espiral 🌀 na Coroa" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o cheddar" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão de Batata Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mccrispy-elite",
    name: "McCrispy Chicken Elite",
    category: "crispy",
    categoryLabel: "Linha Crispy",
    image: "images/burgers/mccrispy-elite.jpg",
    bun: "Pão Tipo Brioche com Batata (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Rígida McCrispy Elite",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Honey & Fire → Alface → Tomate → 3 fatias Bacon → Queijo Cheddar → Frango McCrispy",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoHoneyFire", amount: "1 oz", note: "1 tiro Molho Honey & Fire" },
          { condiment: "alface", amount: "22 g", note: "Sobre o molho Honey & Fire" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas lado a lado" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o tomate" },
          { condiment: "queijoCheddar", amount: "1 unid.", note: "1 fatia sobre o bacon" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão de Batata Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mccrispy-bacon-ranch",
    name: "McCrispy Chicken Bacon Ranch",
    category: "crispy",
    categoryLabel: "Linha Crispy",
    image: "images/burgers/mccrispy-bacon-ranch.jpg",
    bun: "Pão Tipo Brioche com Batata (Ativar de 3” a 5” na tostadeira vertical)",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Rígida McCrispy Bacon Ranch",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Ranch → Alface → 2 rodelas Tomate → 3 fatias Bacon → Frango McCrispy",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoRanch", amount: "1 oz", note: "1 tiro Molho Ranch na Coroa" },
          { condiment: "alface", amount: "22 g", note: "Sobre o molho Ranch" },
          { condiment: "tomate", amount: "2 unid.", note: "2 rodelas lado a lado" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado sobre o tomate" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão de Batata Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  },
  {
    id: "mccrispy-melt-parmesao",
    name: "McCrispy Chicken Melt Parmesão",
    category: "crispy",
    categoryLabel: "Linha Crispy",
    image: "images/burgers/mccrispy-melt-parmesao.jpg",
    bun: "Pão Tipo Brioche com Batata • Tostagem 22s",
    tong: "green",
    tongLabel: "Pegador Verde • UHC 93°C",
    packaging: "Caixa Rígida McCrispy",
    sections: [
      {
        title: "COROA",
        subtitle: "Molho Parmesão → Cebola Crispy → Picles → Bacon → Queijo → McCrispy",
        bunImage: "images/condiments/pao-aberto-coroa.jpg",
        steps: [
          { condiment: "molhoParmesao", amount: "1 oz", note: "Molho Creamy Parmesão" },
          { condiment: "cebolaCrispy", amount: "10 g", note: "Sobre o molho Parmesão" },
          { condiment: "picles", amount: "2 unid.", note: "Lado a lado" },
          { condiment: "bacon", amount: "3 fatias", note: "Lado a lado" },
          { condiment: "queijoCheddar", amount: "2 unid.", note: "2 fatias de queijo Cheddar" },
          { condiment: "frangoMcCrispy", amount: "1 unid.", note: "Pegador Verde • UHC 93°C" }
        ]
      },
      {
        title: "BASE",
        subtitle: "Pão de Batata Inferior para fechamento",
        bunImage: "images/condiments/pao-aberto-base.jpg",
        steps: []
      }
    ]
  }
];
