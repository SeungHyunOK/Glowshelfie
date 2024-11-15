interface Product {
  name: string
  link: string
}

interface Products {
  'Oil Cleanser (PM routine)': Product | null
  'Cleanser (2 times a day)': Product | null
  'Exfoliator (1-2 a week)': Product | null
  'Toner (2 times a day)': Product | null
  Essence: Product | null
  TonerPads: Product | null
  Treatments: Product | null
  SheetMasks: Product | null
  'Serum-First (2 times a day)': Product | null
  'Serum-Second (2 times a day)': Product | null
  'Eye cream (2 times a day)': Product | null
  'Moisturizer (2 times a day)': Product | null
  'Sunscreen (AM routine)': Product | null
}

export default Products

/*
export const sensitive: Products = {
  'Oil Cleanser (PM routine)': { name: "Example Oil Cleanser", link: "https://example.com/oilcleanser" },
  'Cleanser (2 times a day)': { name: "Example Cleanser", link: "https://example.com/cleanser" },
  'Exfoliator (1-2 a week)': { name: "Example Exfoliator", link: "https://example.com/exfoliator" },
  'Toner (2 times a day)': { name: "Example Toner", link: "https://example.com/toner" },
  Essence: { name: "Example Essence", link: "https://example.com/Essence" },
  TonerPads: { name: "Example Toner Pads", link: "https://example.com/tonerpads" },
  Treatments: { name: "Example Treatments", link: "https://example.com/treatments" },
  SheetMasks: { name: "Example Sheet Masks", link: "https://example.com/sheetmasks" },
  'Serum-First (2 times a day)': { name: "Example Serum 1", link: "https://example.com/serum1" },
  'Serum-Second (2 times a day)': { name: "Example Serum 2", link: "https://example.com/serum2" },
  'Eye cream (2 times a day)': { name: "Example Eye Cream", link: "https://example.com/eyecream" },
  'Moisturizer (2 times a day)': { name: "Example Moisturizer", link: "https://example.com/moisturizer" },
  'Sunscreen (AM routine)': { name: "Example Sunscreen", link: "https://example.com/sunscreen" },
};
*/
