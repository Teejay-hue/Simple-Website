const PRODUCTS = [
  {
    id: "1",
    name: "Product 1 — Classic Suede Loafers",
    category: "Loafers",
    price: "₦38,000",
    image: "images/img-1.jpeg",
    description: "Hand-finished soft brown suede loafers with cushioned insole. Sizes 40–45.",
    seller: {
      name: "Kicks & Co. Lagos",
      phone: "+2348012345678",
      whatsapp: "2348012345678",
      location: "Ikeja, Lagos"
    }
  },
  {
    id: "2",
    name: "Product 2 — Chunky Retro Runners",
    category: "Sneakers",
    price: "₦45,500",
    image: "images/img-2.jpeg",
    description: "Breathable mesh and leather upper with high-grip rubber outsole. Sizes 39–46.",
    seller: {
      name: "SoleVault Store",
      phone: "+2348098765432",
      whatsapp: "2348098765432",
      location: "Lekki Phase 1, Lagos"
    }
  },
  {
    id: "3",
    name: "Product 3 — Minimalist White Court Sneakers",
    category: "Sneakers",
    price: "₦32,000",
    image: "images/img-3.jpeg",
    description: "Clean everyday low-top sneakers with stitched cup sole. Sizes 38–45.",
    seller: {
      name: "Urban Step",
      phone: "+2348123456789",
      whatsapp: "2348123456789",
      location: "Yaba, Lagos"
    }
  },
  {
    id: "4",
    name: "Product 4 — Chelsea Leather Boots",
    category: "Boots",
    price: "₦52,000",
    image: "images/img-4.jpeg",
    description: "Full-grain matte black leather Chelsea boots with elastic side panels. Sizes 40–46.",
    seller: {
      name: "Kicks & Co. Lagos",
      phone: "+2348012345678",
      whatsapp: "2348012345678",
      location: "Ikeja, Lagos"
    }
  },
  {
    id: "5",
    name: "Product 5 — High-Top Street Sneakers",
    category: "Sneakers",
    price: "₦48,000",
    image: "images/img-5.jpeg",
    description: "Padded collar high-top sneakers built for daily comfort and ankle support.",
    seller: {
      name: "Urban Step",
      phone: "+2348123456789",
      whatsapp: "2348123456789",
      location: "Yaba, Lagos"
    }
  },
  {
    id: "6",
    name: "Product 6 — Penny Leather Loafers",
    category: "Loafers",
    price: "₦41,000",
    image: "images/img-6.jpeg",
    description: "Polished slip-on penny loafers suitable for smart-casual and office wear.",
    seller: {
      name: "SoleVault Store",
      phone: "+2348098765432",
      whatsapp: "2348098765432",
      location: "Lekki Phase 1, Lagos"
    }
  },
  {
    id: "7",
    name: "Product 7 — Lace-Up Combat Boots",
    category: "Boots",
    price: "₦55,000",
    image: "images/img-7.jpeg",
    description: "Heavy-duty lug sole boots with side zipper for quick wear.",
    seller: {
      name: "Kicks & Co. Lagos",
      phone: "+2348012345678",
      whatsapp: "2348012345678",
      location: "Ikeja, Lagos"
    }
  },
  {
    id: "8",
    name: "Product 8 — Knit Slip-On Trainers",
    category: "Sneakers",
    price: "₦29,500",
    image: "images/img-8.jpeg",
    description: "Lightweight stretch-knit slip-ons with flexible foam sole.",
    seller: {
      name: "Urban Step",
      phone: "+2348123456789",
      whatsapp: "2348123456789",
      location: "Yaba, Lagos"
    }
  },
  {
    id: "9",
    name: "Product 9 — Tassel Velvet Loafers",
    category: "Loafers",
    price: "₦44,000",
    image: "images/img-9.jpeg",
    description: "Evening-ready tassel loafers with soft interior lining.",
    seller: {
      name: "SoleVault Store",
      phone: "+2348098765432",
      whatsapp: "2348098765432",
      location: "Lekki Phase 1, Lagos"
    }
  },
  {
    id: "10",
    name: "Product 10 — Canvas Low-Top Classics",
    category: "Sneakers",
    price: "₦24,000",
    image: "images/img-10.jpeg",
    description: "Durable washed canvas sneakers with vulcanized rubber toe cap.",
    seller: {
      name: "Urban Step",
      phone: "+2348123456789",
      whatsapp: "2348123456789",
      location: "Yaba, Lagos"
    }
  },
  {
    id: "11",
    name: "Product 11 — Suede Chukka Boots",
    category: "Boots",
    price: "₦49,000",
    image: "images/img-11.jpeg",
    description: "Ankle-high desert chukka boots in sand suede with crepe sole.",
    seller: {
      name: "Kicks & Co. Lagos",
      phone: "+2348012345678",
      whatsapp: "2348012345678",
      location: "Ikeja, Lagos"
    }
  },
  {
    id: "12",
    name: "Product 12 — Air-Cushioned Sport Runners",
    category: "Sneakers",
    price: "₦47,000",
    image: "images/img-12.jpeg",
    description: "Shock-absorbing heel unit designed for long walks and gym sessions.",
    seller: {
      name: "SoleVault Store",
      phone: "+2348098765432",
      whatsapp: "2348098765432",
      location: "Lekki Phase 1, Lagos"
    }
  },
  {
    id: "13",
    name: "Product 13 — Woven Leather Driving Loafers",
    category: "Loafers",
    price: "₦39,500",
    image: "images/img-13.jpeg",
    description: "Flexible pebble-grip driving moccasins in breathable woven leather.",
    seller: {
      name: "Kicks & Co. Lagos",
      phone: "+2348012345678",
      whatsapp: "2348012345678",
      location: "Ikeja, Lagos"
    }
  },
  {
    id: "14",
    name: "Product 14 — Monochrome Skate Sneakers",
    category: "Sneakers",
    price: "₦35,000",
    image: "images/img-14.jpeg",
    description: "Suede-reinforced toe box with thick padded tongue and flat laces.",
    seller: {
      name: "Urban Step",
      phone: "+2348123456789",
      whatsapp: "2348123456789",
      location: "Yaba, Lagos"
    }
  },
  {
    id: "15",
    name: "Product 15 — Zip-Side Ankle Boots",
    category: "Boots",
    price: "₦54,000",
    image: "images/img-15.jpeg",
    description: "Sleek tapered ankle boots with inner brass zipper and stacked heel.",
    seller: {
      name: "SoleVault Store",
      phone: "+2348098765432",
      whatsapp: "2348098765432",
      location: "Lekki Phase 1, Lagos"
    }
  }
];
    
