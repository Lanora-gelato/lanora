(function () {
  "use strict";

  /* ---------- Content: edit this block only ---------- */
  var SITE = {
    links: {
      instagram: "https://www.instagram.com/lanora.gelateria",
      whatsapp: "https://wa.me/0665716500",
      map: "https://maps.google.com/?cid=3734480779555110653&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=fr&gl=MA&source=embed",
    },
    intro: {
      en: "From coffee and matcha to gelato, desserts, and signature creations, the LANORA menu is made for every kind of craving. Explore your favorites, discover something new, and make every visit part of a Sweet Memory.",
      fr: "Du café et du matcha au gelato, aux desserts et aux créations signature, le menu LANORA est pensé pour chaque envie. Découvrez vos favoris, laissez-vous surprendre et faites de chaque visite un Sweet Memory.",
    },
    signatures: [
      {
        name: "Fondant du Chef (Pkhaline Argan)",
        price: 100,
        img: "images/fchefs.jpg",
      },
      {
        name: "Cake London Lanora",
        price: 60,
        img: "images/cakelondonlanora.png",
      },
      /*{ name: "Coupe Lanora", price: 22, img: "" },*/
      {
        name: "Fondant Kunafa Pistache Ice Cream Pistache",
        price: 77,
        img: "images/FondanticecReam.png",
      },
    ],
    faq: {
      en: [
        [
          "What is Lanora ?",
          "LANORA is a gelateria and coffee space built around simple pleasures, good gelato, carefully made coffee, matcha, and desserts, and moments worth remembering.",
        ],
        [
          "What makes Lanora different?",
          "We care as much about the experience as the product. From the space to the presentation, every detail is designed to make an ordinary pause feel a little more special",
        ],
        [
          "What does “Sweet Memories” mean?",
          "It’s the idea behind LANORA: the best moments are often the simplest ones — a coffee with someone, a gelato after a long day, or a place you naturally want to come back to.",
        ],
      ],
      fr: [
        [
          "Qu’est-ce que Lanora ?",
          "LANORA est un espace de café et de glacier pensé autour des plaisirs simples : bon gelato, café soigné, matcha et desserts, dans un cadre fait pour créer de beaux souvenirs.",
        ],
        [
          "Qu’est-ce qui rend Lanora spécial ?",
          "Nous prenons autant soin de l’expérience que du produit. De l’espace à la présentation, chaque détail est pensé pour transformer une pause ordinaire en un instant plus précieux.",
        ],
        [
          "Que signifie “Sweet Memories” ?",
          "C’est l’idée derrière LANORA : les meilleurs moments sont souvent les plus simples — un café avec quelqu’un, un gelato après une longue journée, ou un endroit où l’on a envie de revenir.",
        ],
      ],
    },
    text: {
      en: {
        homeTitle: "Welcome to Lanora",
        homeIntro:
          "Come for the gelato, stay for the moment. From coffee and matcha to desserts and signature creations, every visit is designed to feel a little special. Sweet Memories, made here.",
        exploreMenu: "Explore Menu",
        signaturesTitle: "Signatures of the house",
        faqTitle: "FAQ",
        menuTitle: "Our Menu",
        home: "Home",
        viewAllCategories: "View All Categories",
        coffee: "Coffee",
        english: "English",
        french: "Français",
      },
      fr: {
        homeTitle: "Bienvenue à Lanora",
        homeIntro:
          "Venez pour le gelato et restez pour l’instant. Du café au matcha, en passant par les desserts et les créations signature, chaque visite est pensée pour se sentir un peu spéciale. Sweet Memories, créés ici.",
        exploreMenu: "Découvrir le menu",
        signaturesTitle: "Les signatures de la maison",
        faqTitle: "FAQ",
        menuTitle: "Notre menu",
        home: "Accueil",
        viewAllCategories: "Voir toutes les catégories",
        coffee: "Café",
        english: "English",
        french: "Français",
      },
    },
  };

  function makeItems(list, price) {
    return list.map(function (item) {
      if (typeof item === "string") {
        return { title: item, price: price || 0, img: "" };
      }

      return {
        title: item.title || item.name || "",
        price: typeof item.price !== "undefined" ? item.price : price || 0,
        img: item.img || item.image || "",
      };
    });
  }

  function currentLang() {
    return document.body.getAttribute("data-lang") || "fr";
  }

  var UI_TEXT_TRANSLATIONS = {
    homeTitle: "Bienvenue \u00e0 Lanora",
    homeIntro:
      "Venez pour le gelato et restez pour l\u2019instant. Du caf\u00e9 au matcha, en passant par les desserts et les cr\u00e9ations signature, chaque visite est pens\u00e9e pour \u00eatre un moment sp\u00e9cial. De doux souvenirs, cr\u00e9\u00e9s ici.",
    exploreMenu: "D\u00e9couvrir le menu",
    signaturesTitle: "Les signatures de la maison",
    faqTitle: "Questions fr\u00e9quentes",
    menuTitle: "Notre menu",
    home: "Accueil",
    viewAllCategories: "Voir toutes les cat\u00e9gories",
    coffee: "Caf\u00e9",
    addToCart: "Ajouter au panier",
    addedToCart:
      "L\u2019article a \u00e9t\u00e9 ajout\u00e9 \u00e0 votre panier",
  };
  var UI_TEXT_ENGLISH = {
    addToCart: "Add to cart",
    addedToCart: "The item was added to your cart",
  };

  function t(key) {
    var lang = currentLang();
    if (lang === "fr" && UI_TEXT_TRANSLATIONS[key]) {
      return UI_TEXT_TRANSLATIONS[key];
    }
    if (UI_TEXT_ENGLISH[key]) return UI_TEXT_ENGLISH[key];
    return (SITE.text && SITE.text[lang] && SITE.text[lang][key]) || key;
  }

  var LABEL_TRANSLATIONS = {
    Coffee: "Caf\u00e9",
    "Matcha & Tea": "Matcha et th\u00e9",
    Tea: "Th\u00e9",
    Cookies: "Cookies",
    Waffles: "Gaufres",
    Fondant: "Fondant",
    Fondants: "Fondants",
    "Fondants Chocolat": "Fondants au chocolat",
    "Fondant Ice cream": "Fondant avec glace",
    "Fondant Ice Cream": "Fondants avec glace",
    "Fondants avec Gelato": "Fondants avec gelato",
    Gelato: "Gelato",
    Desserts: "Desserts",
    "Drinks & Mocktails": "Boissons et mocktails",
    "More categories": "Autres cat\u00e9gories",
    "Jump to category": "Acc\u00e9der \u00e0 une cat\u00e9gorie",
  };

  function localizedLabel(label) {
    if (currentLang() !== "fr") return label;
    return LABEL_TRANSLATIONS[label] || label;
  }

  var CATEGORIES = [
    {
      slug: "coffee",
      label: "Coffee",
      navLabel: "Coffee",
      dark: false,
      sections: [
        {
          title: "Coffee",
          items: makeItems([
            { title: "Espresso", price: 22, img: "images/espresso.jfif" },
            { title: "Americano", price: 22, img: "images/americano.jpg" },
            { title: "Iced Coffee", price: 25, img: "images/icedcoffe.jpg" },
            { title: "Latte", price: 30, img: "images/latte.jpg" },
            //  { title: "Spanish Latte", price: 32, img: "" },//
            { title: "Speculoos Latte", price: 35, img: "images/latte.jpg" },
            //  { title: "Cortado", price: 30, img: "" },//
            { title: "Cappuccino", price: 30, img: "images/cappuccino.jpg" },

            //  { title: "Flat White", price: 30, img: "" },//
            // { title: "Hot Chocolate", price: 35, img: "" },//
            // { title: "Iced Chocolate", price: 35, img: "" },//
            // { title: "Frappuccino", price: 35, img: "" },//
            //{ title: "Mocha", price: 35, img: "" },//
            // { title: "Caramel Macchiato", price: 35, img: "" },//

            { title: "Iced Latte", price: 35, img: "images/icedlatte.jpg" },
            {
              title: "Iced Spanish Latte",
              price: 38,
              img: "Images/icedSpanishLatte.jpg",
            },
            { title: "Affogato", price: 50, img: "images/affogato.jpg" },
            { title: "Kids Water", price: 5, img: "" },
            { title: "Water", price: 9, img: "" },
          ]),
        },
      ],
    },
    {
      slug: "matcha-tea",
      label: "Matcha & Tea",
      navLabel: "Matcha & Tea",
      sections: [
        {
          title: "Matcha & Tea",
          items: makeItems([
            {
              title: "Iced Mango Matcha",
              price: 55,
              img: "images/icedmangomatcha.jpg",
            },
            {
              title: "Iced Strawberry Matcha",
              price: 55,
              img: "images/icedstrawberrymatcha.png",
            },
            { title: "Matcha Latte", price: 42, img: "images/matchalatte.jpg" },
            {
              title: "iced Matcha Latte",
              price: 42,
              img: "images/icedmatchalatte.jpg",
            },
            /* { title: "Speculoos Matcha Latte", price: 22, img: "" },
            { title: "Vanilla Matcha Latte", price: 22, img: "" },
            { title: "Pistachio Matcha Latte", price: 22, img: "" },*/
          ]),
        },
        {
          title: "Tea",
          items: makeItems([
            {
              title: "Peach Iced Tea",
              price: 38,
              img: "images/peachicedtea.jpg",
            },
            /*{ title: "Blueberry Iced Tea", price: 22, img: "" },
            { title: "Raspberry Iced Tea", price: 22, img: "" },*/
            {
              title: "Passion Fruit Iced Tea",
              price: 38,
              img: "images/peachicedtea.jpg",
            },
            {
              title: "Mango Iced Tea",
              price: 38,
              img: "images/peachicedtea.jpg",
            },
          ]),
        },
      ],
    },
    {
      slug: "cookies",
      label: "Cookies",
      navLabel: "Cookies",
      sections: [
        {
          title: "Cookies",
          items: makeItems([
            {
              title: "Chocolate Chip",
              price: 30,
              img: "images/cookieschocolat.jfif",
            },
            {
              title: "Noisette",
              price: 30,
              img: "images/cookiesnoisette.jfif",
            },
            {
              title: "Pistachio",
              price: 40,
              img: "images/cookiespistache.jfif",
            },
            { title: "Caramel", price: 22, img: "images/cookiescaramel.jfif" },
            {
              title: "Red Velvet",
              price: 30,
              img: "images/cookiesredvelvet.jfif",
            },
            /* { title: "Oat & Raisin", price: 22, img: "" },
            { title: "Salted Caramel", price: 22, img: "" },
            { title: "White Chocolate", price: 22, img: "" },*/
          ]),
        },
      ],
    },
    //{
    //slug: "waffles",
    //label: "Waffles",
    //navLabel: "Waffles",
    //sections: [
    // {
    //   title: "Waffles",
    //   items: makeItems([
    //     { title: "Classic Waffle", price: 22, img: "" },
    //   { title: "Chocolate Waffle", price: 22, img: "" },
    // { title: "Pistachio Waffle", price: 22, img: "" },
    // { title: "Speculoos Waffle", price: 22, img: "" },
    //  { title: "Strawberry Waffle", price: 22, img: "" },
    // { title: "Banana Waffle", price: 22, img: "" },
    // { title: "Caramel Waffle", price: 22, img: "" },
    // { title: "Lanora Waffle", price: 22, img: "" },
    // ]),
    // },
    // ],
    // },--
    {
      slug: "Fondant",
      label: "Fondant",
      navLabel: "Fondants Chocolat",
      sections: [
        {
          title: "Fondants",
          items: makeItems([
            {
              title: "Fondant Chocolat",
              price: 35,
              img: "Images/fondantchocolat.jpg",
            },
            {
              title: "Fondant Choco Caramel",
              price: 35,
              img: "Images/fondantcaramel.jpg",
            },
            {
              title: "Fondant Choco Noisette",
              price: 45,
              img: "Images/fondantnoisette.jpg",
            },
            {
              title: "Fondant Choco Framboise",
              price: 45,
              img: "Images/fondantframboise.jpg",
            },
            {
              title: "Fondant Choco Mangue",
              price: 45,
              img: "images/fondantmague.jpg",
            },
            {
              title: "Fondant Choco Kunafa Pistache",
              price: 50,
              img: "Images/fondantpistache.jpg",
            },
            {
              title: "Fondant Choco Matcha",
              price: 50,
              img: "Images/fondantmatcha.jpg",
            },
            {
              title: "Red Velvet",
              price: 45,
              img: "images/fondantredvelvet.jpg",
            },
          ]),
        },
      ],
    },
    {
      slug: "fondant-ice-cream",
      label: "Fondant Ice cream",
      navLabel: "Fondants avec Gelato",
      sections: [
        {
          title: "Fondant Ice Cream",
          items: makeItems([
            {
              title: "Fondant Chocolat Gelato",
              price: 50,
              img: "Images/fcchocolat.jpg",
            },
            {
              title: "Fondant Caramel Gelato",
              price: 50,
              img: "Images/fccaramel.jpg",
            },
            {
              title: "Fondant Noisette Gelato",
              price: 60,
              img: "Images/fcnoisette.jpg",
            },
            {
              title: "Fondant Framboise Gelato",
              price: 60,
              img: "Images/fcframboise.jpg",
            },
            {
              title: "Fondant Mangue Gelato",
              price: 60,
              img: "images/fcmango.jpg",
            },
            {
              title: "Fondant Kunafa Pistache Gelato",
              price: 65,
              img: "Images/fcpistache.jpg",
            },
            {
              title: "Fondant Matcha Gelato",
              price: 65,
              img: "Images/fcmatcha.jpg",
            },
            {
              title: "Red Velvet Gelato",
              price: 60,
              img: "images/fcredvelvet.jpg",
            },
            {
              title: "Fondant Chef Gelato",
              price: 100,
              img: "images/fchefs.jpg",
            },
          ]),
        },
      ],
    },
    /*{
      slug: "gelato",
      label: "Gelato",
      navLabel: "Gelato / Ice Cream",
      sections: [
        {
          title: "Gelato",
          items: makeItems([
            { title: "Vanilla", price: 22, img: "" },
            { title: "Pistachio", price: 22, img: "" },
            { title: "Chocolate", price: 22, img: "" },
            { title: "Strawberry", price: 22, img: "" },
            { title: "Mango", price: 22, img: "" },
            { title: "Hazelnut", price: 22, img: "" },
            { title: "Salted Caramel", price: 22, img: "" },
            { title: "Lemon Sorbet", price: 22, img: "" },
          ]),
        },
      ],
    },*/
    {
      slug: "desserts",
      label: "Desserts",
      navLabel: "Desserts",
      sections: [
        {
          title: "Desserts",
          items: makeItems([
            {
              title: "Flan Parisien noisette",
              price: 45,
              img: "images/flanparisiennoisette.jpg",
            },
            {
              title: "Flan Parisien vanille",
              price: 35,
              img: "images/flanparisienvanille.jpg",
            },
            {
              title: "Flan Parisien Pistache",
              price: 50,
              img: "images/flanparisienpistache.jpg",
            },
            {
              title: "San Sebatian Chocolat",
              price: 50,
              img: "images/sschocolat.jpg",
            },
            {
              title: "San Sebatian Lotus",
              price: 50,
              img: "Images/sslotus.jpg",
            },
            {
              title: "San Sebatian Pistache",
              price: 60,
              img: "Images/sspistache.jpg",
            },
          ]),
        },
      ],
    },
    {
      slug: "drinks-mocktails",
      label: "Drinks & Mocktails",
      navLabel: "Drinks & Mocktails",
      sections: [
        {
          title: "Drinks & Mocktails",
          items: makeItems([
            { title: "Mojito", price: 40, img: "images/mojito.jpg" },
            { title: "Pina Colada", price: 50, img: "Images/pinacolada.jpg" },
            /*{ title: "Blue Lagoon", price: 22, img: "" },
            { title: "Passion Fruit Cooler", price: 22, img: "" },
            { title: "Mango Smoothie", price: 22, img: "" },
            { title: "Berry Smoothie", price: 22, img: "" },
            { title: "Fresh Orange Juice", price: 22, img: "" },
            { title: "Sparkling Water", price: 22, img: "" },*/
          ]),
        },
      ],
    },
  ];

  /* ---------- Helpers ---------- */
  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      var map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };
      return map[character];
    });
  }

  function icon(id) {
    return '<svg aria-hidden="true"><use href="#' + id + '"/></svg>';
  }

  function socialsHTML() {
    return (
      '<a href="' +
      SITE.links.instagram +
      '" target="_blank" rel="noopener" aria-label="Instagram">' +
      icon("i-instagram") +
      "</a>" +
      '<a href="' +
      SITE.links.whatsapp +
      '" target="_blank" rel="noopener" aria-label="WhatsApp">' +
      icon("i-whatsapp") +
      "</a>" +
      '<a href="' +
      SITE.links.map +
      '" target="_blank" rel="noopener" aria-label="Location">' +
      icon("i-pin") +
      "</a>"
    );
  }

  function overlaySocialsHTML() {
    return (
      '<a href="' +
      SITE.links.instagram +
      '" target="_blank" rel="noopener" aria-label="Instagram">' +
      icon("i-instagram") +
      "</a>" +
      '<a href="' +
      SITE.links.whatsapp +
      '" target="_blank" rel="noopener" aria-label="WhatsApp">' +
      icon("i-whatsapp") +
      "</a>"
    );
  }

  var PRODUCT_TRANSLATIONS = {
    "Hot Chocolate": "Chocolat chaud",
    "Iced Chocolate": "Chocolat glac\u00e9",
    "Iced Coffee": "Caf\u00e9 glac\u00e9",
    "Iced Latte": "Latte glac\u00e9",
    "Kids Water": "Eau pour enfants",
    Water: "Eau",
    "Iced Mango Matcha": "Matcha glac\u00e9 \u00e0 la mangue",
    "Iced Strawberry Matcha": "Matcha glac\u00e9 \u00e0 la fraise",
    "Tiramisu Matcha Latte": "Matcha latte au tiramisu",
    "Speculoos Matcha Latte": "Matcha latte au sp\u00e9culoos",
    "Vanilla Matcha Latte": "Matcha latte \u00e0 la vanille",
    "Pistachio Matcha Latte": "Matcha latte \u00e0 la pistache",
    "Peach Iced Tea": "Th\u00e9 glac\u00e9 \u00e0 la p\u00eache",
    "Blueberry Iced Tea": "Th\u00e9 glac\u00e9 aux myrtilles",
    "Raspberry Iced Tea": "Th\u00e9 glac\u00e9 \u00e0 la framboise",
    "Passion Fruit Iced Tea": "Th\u00e9 glac\u00e9 au fruit de la passion",
    "Mango Iced Tea": "Th\u00e9 glac\u00e9 \u00e0 la mangue",
    "Chocolate Chip": "P\u00e9pites de chocolat",
    "Double Chocolate": "Double chocolat",
    Pistachio: "Pistache",
    "Red Velvet": "G\u00e2teau red velvet",
    "Oat & Raisin": "Avoine et raisins secs",
    "Salted Caramel": "Caramel au beurre sal\u00e9",
    "White Chocolate": "Chocolat blanc",
    "Classic Waffle": "Gaufre classique",
    "Chocolate Waffle": "Gaufre au chocolat",
    "Pistachio Waffle": "Gaufre \u00e0 la pistache",
    "Speculoos Waffle": "Gaufre au sp\u00e9culoos",
    "Strawberry Waffle": "Gaufre aux fraises",
    "Banana Waffle": "Gaufre \u00e0 la banane",
    "Caramel Waffle": "Gaufre au caramel",
    "Lanora Waffle": "Gaufre Lanora",
    "Classic Pancakes": "Pancakes classiques",
    "Chocolate Pancakes": "Pancakes au chocolat",
    "Pistachio Pancakes": "Pancakes \u00e0 la pistache",
    "Speculoos Pancakes": "Pancakes au sp\u00e9culoos",
    "Strawberry Pancakes": "Pancakes aux fraises",
    "Banana Pancakes": "Pancakes \u00e0 la banane",
    "Caramel Pancakes": "Pancakes au caramel",
    "Lanora Pancakes": "Pancakes Lanora",
    Vanilla: "Vanille",
    Chocolate: "Chocolat",
    Strawberry: "Fraise",
    Mango: "Mangue",
    Hazelnut: "Noisette",
    "Lemon Sorbet": "Sorbet au citron",
    Tiramisu: "Tiramisu",
    "Cr\u00e8me Br\u00fbl\u00e9e": "Cr\u00e8me br\u00fbl\u00e9e",
    Cheesecake: "G\u00e2teau au fromage",
    Brownie: "Brownie",
    Fondant: "Fondant au chocolat",
    "Virgin Mojito": "Mojito sans alcool",
    "Strawberry Lemonade": "Citronnade \u00e0 la fraise",
    "Blue Lagoon": "Lagon bleu",
    "Passion Fruit Cooler": "Boisson fra\u00eeche au fruit de la passion",
    "Mango Smoothie": "Smoothie \u00e0 la mangue",
    "Berry Smoothie": "Smoothie aux fruits rouges",
    "Fresh Orange Juice": "Jus d\u2019orange frais",
    "Sparkling Water": "Eau gazeuse",
    "Coupe du Chef": "Coupe du Chef",
    "Flan Parisien Lanora": "Flan parisien Lanora",
    "Coupe Lanora": "Coupe Lanora",
    "Cake London": "G\u00e2teau London",
    Espresso: "Espresso",
    Americano: "Americano",
    Latte: "Latte",
    Cappuccino: "Cappuccino",
    Affogato: "Affogato",
    "Iced Spanish Latte": "Latte espagnol glac\u00e9",
    "Speculoos Latte": "Latte au sp\u00e9culoos",
    "Iced Matcha Latte": "Matcha latte glac\u00e9",
    "iced Matcha Latte": "Matcha latte glac\u00e9",
    "Matcha Latte": "Latte au matcha",
    Noisette: "Noisette",
    Caramel: "Caramel",
    "Fondant Chocolat": "Fondant au chocolat",
    "Fondant Caramel": "Fondant au caramel",
    "Fondant Noisette": "Fondant \u00e0 la noisette",
    "Fondant Framboise": "Fondant \u00e0 la framboise",
    "Fondant Mangue": "Fondant \u00e0 la mangue",
    "Fondant Kunafa Pistache": "Fondant kunafa \u00e0 la pistache",
    "Fondant Matcha": "Fondant au matcha",
    "Fondant Chef": "Fondant du chef",
    "Flan Parisien noisette": "Flan parisien \u00e0 la noisette",
    "Flan Parisien vanille": "Flan parisien \u00e0 la vanille",
    "Flan Parisien Pistache": "Flan parisien \u00e0 la pistache",
    "San Sebatian Chocolat": "San Sebastian au chocolat",
    "San Sebatian Lotus": "San Sebastian au Lotus",
    "San Sebatian Pistache": "San Sebastian \u00e0 la pistache",
    Mojito: "Mojito",
    "Pina Colada": "Pi\u00f1a colada",
    "Fondant du Chef (Pkhaline Argan)":
      "Fondant du chef (pralin\u00e9 \u00e0 l\u2019argan)",
    "Cake London Lanora": "G\u00e2teau London Lanora",
    "Fondant Kunafa Pistache Ice Cream Pistache":
      "Fondant kunafa \u00e0 la pistache avec glace pistache",
    "Fondant Choco Caramel": "Fondant au chocolat et au caramel",
    "Fondant Choco Noisette": "Fondant au chocolat et \u00e0 la noisette",
    "Fondant Choco Framboise": "Fondant au chocolat et \u00e0 la framboise",
    "Fondant Choco Mangue": "Fondant au chocolat et \u00e0 la mangue",
    "Fondant Choco Kunafa Pistache": "Fondant au chocolat, kunafa et pistache",
    "Fondant Choco Matcha": "Fondant au chocolat et au matcha",
    "Fondant Chocolat Gelato": "Fondant au chocolat avec gelato",
    "Fondant Caramel Gelato": "Fondant au caramel avec gelato",
    "Fondant Noisette Gelato": "Fondant \u00e0 la noisette avec gelato",
    "Fondant Framboise Gelato": "Fondant \u00e0 la framboise avec gelato",
    "Fondant Mangue Gelato": "Fondant \u00e0 la mangue avec gelato",
    "Fondant Kunafa Pistache Gelato":
      "Fondant kunafa \u00e0 la pistache avec gelato",
    "Fondant Matcha Gelato": "Fondant au matcha avec gelato",
    "Red Velvet Gelato": "G\u00e2teau red velvet avec gelato",
    "Fondant Chef Gelato": "Fondant du chef avec gelato",
  };

  function localizedProductTitle(title) {
    if (currentLang() !== "fr") return title;
    return PRODUCT_TRANSLATIONS[title] || title;
  }

  function normalizeProduct(item) {
    return {
      title: item.title || item.name || "",
      price: typeof item.price !== "undefined" ? item.price : 0,
      img: item.img || item.image || "",
    };
  }

  function cardHTML(item) {
    var product = normalizeProduct(item);
    var productTitle = localizedProductTitle(product.title);
    var textOnly = product.title === "Kids Water" || product.title === "Water";
    var imageSrc = product.img;
    var imageAlt = productTitle
      ? (currentLang() === "fr" ? "Image de " : "Image of ") + productTitle
      : "Product image";
    var image = imageSrc
      ? '<img src="' +
        esc(imageSrc) +
        '" alt="' +
        esc(imageAlt) +
        '" loading="lazy">'
      : "";
    var wrapperAttrs = imageSrc
      ? ""
      : ' role="img" aria-label="' + esc(imageAlt) + '"';

    return (
      '<li class="card' +
      (textOnly ? " text-only" : "") +
      '">' +
      (textOnly
        ? ""
        : '<div class="ph"' + wrapperAttrs + " >" + image + "</div>") +
      '<div class="card-meta">' +
      '<span class="card-name">' +
      esc(productTitle) +
      "</span>" +
      '<span class="card-price">' +
      esc(product.price) +
      "DH</span>" +
      "</div>" +
      '<button class="add-to-cart" type="button" aria-live="polite" data-cart-add data-cart-title="' +
      esc(product.title) +
      '" data-cart-price="' +
      esc(product.price) +
      '" aria-label="' +
      (currentLang() === "fr" ? "Ajouter " : "Add ") +
      esc(productTitle) +
      (currentLang() === "fr" ? " au panier" : " to cart") +
      '">' +
      t("addToCart") +
      "</button>" +
      "</li>"
    );
  }

  function gridHTML(items) {
    return '<ul class="grid">' + items.map(cardHTML).join("") + "</ul>";
  }

  function renderSections(category) {
    return category.sections
      .map(function (section, index) {
        var headingId = "h-" + category.slug + "-" + index;
        return (
          '<section class="menu-section" aria-labelledby="' +
          headingId +
          '">' +
          '<h2 id="' +
          headingId +
          '"' +
          (index > 0 ? ' class="sub"' : "") +
          ">" +
          esc(localizedLabel(section.title)) +
          "</h2>" +
          gridHTML(section.items) +
          "</section>"
        );
      })
      .join("");
  }

  function pagerHTML(index) {
    var prev = CATEGORIES[index - 1];
    var next = CATEGORIES[index + 1];
    var links = "";

    if (prev) {
      links +=
        '<a class="btn square" href="#/menu/' +
        prev.slug +
        '" aria-label="' +
        (currentLang() === "fr" ? "Pr\u00e9c\u00e9dent : " : "Previous: ") +
        esc(localizedLabel(prev.label)) +
        '">' +
        icon("i-arrow-l") +
        "</a>";
    }

    if (next) {
      links +=
        '<a class="btn next" href="#/menu/' +
        next.slug +
        '"><span>' +
        esc(localizedLabel(next.label)) +
        "</span>" +
        icon("i-arrow-r") +
        "</a>";
    }

    return links
      ? '<nav class="pager" aria-label="' +
          localizedLabel("More categories") +
          '">' +
          links +
          "</nav>"
      : "";
  }

  /* ---------- Views ---------- */
  function homeView() {
    var faqItems = (SITE.faq && SITE.faq[currentLang()]) || SITE.faq.en;

    return (
      "" +
      '<section class="hero" aria-labelledby="hero-h"><video class="hero-video" autoplay muted loop playsinline><source src="Images/hero-video.MOV"></video><div class="hero-inner">' +
      '<h1 id="hero-h">' +
      esc(t("homeTitle")) +
      "</h1>" +
      "<p>" +
      esc(t("homeIntro")) +
      "</p>" +
      '<button class="btn ghost" id="exploreMenuBtn" type="button" aria-haspopup="dialog" aria-controls="overlay">' +
      esc(t("exploreMenu")) +
      "</button>" +
      "</div></section>" +
      '<section class="signatures" aria-labelledby="sig-h"><div class="wrap">' +
      '<h2 class="section-title" id="sig-h">' +
      esc(t("signaturesTitle")) +
      "</h2>" +
      gridHTML(SITE.signatures) +
      "</div></section>" +
      '<section class="faq" aria-labelledby="faq-h"><div class="wrap">' +
      '<h2 class="big" id="faq-h">' +
      esc(t("faqTitle")) +
      '</h2><div class="faq-list">' +
      faqItems
        .map(function (item) {
          return (
            "<div><h3>" +
            esc(item[0]) +
            "</h3><p>" +
            esc(item[1]) +
            "</p></div>"
          );
        })
        .join("") +
      "</div></div></section>"
    );
  }

  function allMenuView() {
    var introText =
      SITE.intro && SITE.intro[currentLang()]
        ? SITE.intro[currentLang()]
        : SITE.intro.en;

    return (
      '<div class="wrap"><header class="menu-head"><h1>' +
      esc(t("menuTitle")) +
      "</h1><p>" +
      esc(introText) +
      "</p></header>" +
      CATEGORIES.map(renderSections).join("") +
      '</div><nav class="pager" aria-label="' +
      localizedLabel("Jump to category") +
      '">' +
      '<a class="btn next" href="#/menu/coffee"><span>' +
      esc(t("coffee")) +
      "</span>" +
      icon("i-arrow-r") +
      "</a></nav>"
    );
  }

  function categoryView(index) {
    var category = CATEGORIES[index];
    var introText =
      SITE.intro && SITE.intro[currentLang()]
        ? SITE.intro[currentLang()]
        : SITE.intro.en;

    return (
      '<div class="wrap"><header class="menu-head"><h1>' +
      esc(t("menuTitle")) +
      "</h1><p>" +
      esc(introText) +
      "</p></header>" +
      renderSections(category) +
      "</div>" +
      pagerHTML(index)
    );
  }

  /* ---------- Cart ---------- */
  var CART_STORAGE_KEY = "lanora-cart";
  var cart = [];
  var cartDialog = document.getElementById("cartDialog");
  var cartItemsElement = document.getElementById("cartItems");
  var cartCountElement = document.getElementById("cartCount");
  var openCartButton = document.getElementById("openCart");

  try {
    var savedCart = JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY));
    if (Array.isArray(savedCart)) {
      cart = savedCart
        .filter(function (item) {
          return (
            item &&
            typeof item.title === "string" &&
            isFinite(Number(item.price)) &&
            Number(item.quantity) > 0
          );
        })
        .map(function (item) {
          return {
            title: item.title,
            price: Number(item.price),
            quantity: Math.floor(Number(item.quantity)),
          };
        });
    }
  } catch (error) {
    cart = [];
  }

  function saveCart() {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      // The cart still works for the current page if storage is unavailable.
    }
  }

  function renderCart() {
    var isFrench = currentLang() === "fr";
    var itemCount = cart.reduce(function (total, item) {
      return total + item.quantity;
    }, 0);
    cartCountElement.textContent = itemCount;
    openCartButton.setAttribute(
      "aria-label",
      isFrench
        ? "Ouvrir le panier, " + itemCount + " articles"
        : "Open cart, " + itemCount + " items",
    );
    document.getElementById("cartTitle").textContent = isFrench
      ? "Votre commande"
      : "Your order";
    document.getElementById("cartNote").textContent = isFrench
      ? "Montrez cette liste au serveur."
      : "Show this list to your waiter.";
    document
      .getElementById("closeCart")
      .setAttribute("aria-label", isFrench ? "Fermer le panier" : "Close cart");
    document.getElementById("clearCart").textContent = isFrench
      ? "Vider la commande"
      : "Clear order";
    document.getElementById("clearCart").disabled = itemCount === 0;

    if (!cart.length) {
      cartItemsElement.innerHTML =
        '<p class="cart-empty">' +
        (isFrench ? "Votre panier est vide." : "Your cart is empty.") +
        "</p>";
      return;
    }

    cartItemsElement.innerHTML = cart
      .map(function (item, index) {
        var title = localizedProductTitle(item.title);
        return (
          '<div class="cart-row"><div class="cart-row-info">' +
          '<span class="cart-row-title">' +
          esc(title) +
          "</span>" +
          "</div>" +
          '<div class="cart-row-actions">' +
          '<button type="button" data-cart-action="decrease" data-cart-index="' +
          index +
          '" aria-label="' +
          (isFrench ? "Diminuer " : "Decrease ") +
          esc(title) +
          '">&#8722;</button>' +
          "<span>" +
          item.quantity +
          "</span>" +
          '<button type="button" data-cart-action="increase" data-cart-index="' +
          index +
          '" aria-label="' +
          (isFrench ? "Augmenter " : "Increase ") +
          esc(title) +
          '">+</button>' +
          '<button class="cart-remove" type="button" data-cart-action="remove" data-cart-index="' +
          index +
          '">' +
          (isFrench ? "Supprimer" : "Remove") +
          "</button></div></div>"
        );
      })
      .join("");
  }

  function addToCart(title, price, button) {
    var item = cart.find(function (entry) {
      return entry.title === title && entry.price === price;
    });
    if (item) {
      item.quantity += 1;
    } else {
      cart.push({ title: title, price: price, quantity: 1 });
    }
    saveCart();
    renderCart();

    if (button) {
      window.clearTimeout(button.cartFeedbackTimer);
      button.classList.add("is-added");
      button.textContent = t("addedToCart");
      button.setAttribute("aria-label", t("addedToCart"));
      button.cartFeedbackTimer = window.setTimeout(function () {
        var productTitle = localizedProductTitle(button.dataset.cartTitle);
        button.classList.remove("is-added");
        button.textContent = t("addToCart");
        button.setAttribute(
          "aria-label",
          (currentLang() === "fr" ? "Ajouter " : "Add ") +
            productTitle +
            (currentLang() === "fr" ? " au panier" : " to cart"),
        );
      }, 2000);
    }
  }

  /* ---------- Router ---------- */
  var main = document.getElementById("main");
  var body = document.body;
  var root = document.documentElement;

  function route() {
    var hash = location.hash.replace(/^#/, "") || "/";
    var parts = hash.split("/").filter(Boolean);
    var current = "home";
    var html;
    var title = "Lanora – Sweet Memories";
    var dark = false;

    if (parts[0] === "menu" && parts[1]) {
      var index = CATEGORIES.findIndex(function (category) {
        return category.slug === parts[1];
      });

      if (index > -1) {
        html = categoryView(index);
        current = parts[1];
        dark = !!CATEGORIES[index].dark;
        title = localizedLabel(CATEGORIES[index].label) + " – Lanora";
      }
    }

    if (!html && parts[0] === "menu") {
      html = allMenuView();
      current = "all";
      title = t("menuTitle") + " – Lanora";
    }

    if (!html) {
      html = homeView();
    }

    main.innerHTML = html;
    document.title = title;
    body.setAttribute("data-page", dark ? "dark" : "light");
    body.setAttribute("data-lang", currentLang());

    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else if (root.getAttribute("data-theme") === "dark") {
      root.removeAttribute("data-theme");
    }

    buildNav(current);
    renderCart();
    window.scrollTo(0, 0);
    closeOverlay(true);
  }

  function buildNav(current) {
    var isFrench = currentLang() === "fr";
    document
      .getElementById("overlay")
      .setAttribute("aria-label", isFrench ? "Menu du site" : "Site menu");
    document
      .getElementById("closeMenu")
      .setAttribute("aria-label", isFrench ? "Fermer le menu" : "Close menu");
    document
      .getElementById("openMenu")
      .setAttribute("aria-label", isFrench ? "Ouvrir le menu" : "Open menu");
    document
      .getElementById("overlayNav")
      .setAttribute(
        "aria-label",
        isFrench ? "Rubriques du menu" : "Menu sections",
      );
    document
      .querySelector(".lang-toggle")
      .setAttribute(
        "aria-label",
        isFrench ? "S\u00e9lecteur de langue" : "Language selector",
      );
    var footerLinks = document.querySelectorAll("#footerSocials a");
    if (footerLinks[2])
      footerLinks[2].setAttribute(
        "aria-label",
        isFrench ? "Localisation" : "Location",
      );
    var links = [
      { href: "#/", label: t("home"), key: "home" },
      { href: "#/menu", label: t("viewAllCategories"), key: "all" },
    ].concat(
      CATEGORIES.map(function (category) {
        return {
          href: "#/menu/" + category.slug,
          label: localizedLabel(category.navLabel),
          key: category.slug,
        };
      }),
    );

    document.getElementById("overlayNav").innerHTML = links
      .map(function (link) {
        return (
          '<a href="' +
          link.href +
          '"' +
          (link.key === current ? ' aria-current="page"' : "") +
          ">" +
          esc(link.label) +
          "</a>"
        );
      })
      .join("");
  }

  function setLanguage(lang) {
    var buttons = document.querySelectorAll(".lang-btn");
    var activeLang = lang === "en" ? "en" : "fr";

    buttons.forEach(function (button) {
      var isActive = button.dataset.lang === activeLang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    document.documentElement.lang = activeLang;
    document.body.setAttribute("data-lang", activeLang);
    route();
  }

  /* ---------- Overlay ---------- */
  var overlay = document.getElementById("overlay");
  var openBtn = document.getElementById("openMenu");
  var closeBtn = document.getElementById("closeMenu");

  function openOverlay() {
    overlay.classList.add("open");
    body.style.overflow = "hidden";
    openBtn.setAttribute("aria-expanded", "true");
    closeBtn.focus();
  }

  function closeOverlay(silent) {
    if (!overlay.classList.contains("open")) return;
    overlay.classList.remove("open");
    body.style.overflow = "";
    openBtn.setAttribute("aria-expanded", "false");
    if (!silent) openBtn.focus();
  }

  document.querySelectorAll(".lang-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.dataset.lang);
    });
  });

  openBtn.addEventListener("click", openOverlay);
  main.addEventListener("click", function (event) {
    var addButton = event.target.closest("[data-cart-add]");
    if (addButton) {
      addToCart(
        addButton.dataset.cartTitle,
        Number(addButton.dataset.cartPrice),
        addButton,
      );
      return;
    }
    if (event.target.closest("#exploreMenuBtn")) openOverlay();
  });
  openCartButton.addEventListener("click", function () {
    renderCart();
    cartDialog.showModal();
  });
  document.getElementById("closeCart").addEventListener("click", function () {
    cartDialog.close();
  });
  document.getElementById("clearCart").addEventListener("click", function () {
    cart = [];
    saveCart();
    renderCart();
  });
  cartItemsElement.addEventListener("click", function (event) {
    var actionButton = event.target.closest("[data-cart-action]");
    if (!actionButton) return;
    var index = Number(actionButton.dataset.cartIndex);
    var item = cart[index];
    if (!item) return;

    if (actionButton.dataset.cartAction === "increase") item.quantity += 1;
    if (actionButton.dataset.cartAction === "decrease") item.quantity -= 1;
    if (actionButton.dataset.cartAction === "remove" || item.quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    renderCart();
  });
  cartDialog.addEventListener("click", function (event) {
    if (event.target === cartDialog) cartDialog.close();
  });
  closeBtn.addEventListener("click", function () {
    closeOverlay();
  });

  document.addEventListener("keydown", function (event) {
    if (!overlay.classList.contains("open")) return;

    if (event.key === "Escape") {
      closeOverlay();
      return;
    }

    if (event.key === "Tab") {
      var focusable = overlay.querySelectorAll("a[href], button");
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  overlay.addEventListener("click", function (event) {
    var link = event.target.closest("a[href^='#']");
    if (link)
      setTimeout(function () {
        closeOverlay(true);
      }, 0);
  });

  document.getElementById("overlaySocials").innerHTML = overlaySocialsHTML();
  document.getElementById("footerSocials").innerHTML = socialsHTML();

  window.addEventListener("hashchange", route);
  route();
})();
