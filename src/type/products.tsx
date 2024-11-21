interface Product {
  name: string
  link: string
}

interface Products {
  'Oil Cleanser (1 time a day PM only)': Product | null
  'Cleanser (2 times a day)': Product | null
  'Toner (2 times a day)': Product | null
  'Essence (1~2 time a day)': Product | null
  'Toner Pads (2~3 times a week)': Product | null
  'Treatments (2~3 times a week)': Product | null
  'Sheet Masks (2~3 times a week)': Product | null
  'Serum-First (2 times a day)': Product | null
  'Serum-Second (2 times a day)': Product | null
  'Eye cream (2 times a day)': Product | null
  'Moisturizer (2 times a day)': Product | null
  'Sunscreen (1 time a day AM only)': Product | null
}

export default Products

/*
export const sensitiveAll: Products = {
  'Oil Cleanser (1 time a day PM only)': { name: "Example Oil Cleanser", link: "https://example.com/oilcleanser" },
  'Cleanser (2 times a day)': { name: "Example Cleanser", link: "https://example.com/cleanser" },
  'Toner (2 times a day)': { name: "Example Toner", link: "https://example.com/toner" },
  'Essence (1~2 time a day)': { name: "Example Essence", link: "https://example.com/Essence" },
  'Toner Pads (2~3 times a week)': { name: "Example Toner Pads", link: "https://example.com/tonerpads" },
  'Treatments (2~3 times a week)': { name: "Example Treatments", link: "https://example.com/treatments" },
  'Sheet Masks (2~3 times a week)': { name: "Example Sheet Masks", link: "https://example.com/sheetmasks" },
  'Serum-First (2 times a day)': { name: "Example Serum 1", link: "https://example.com/serum1" },
  'Serum-Second (2 times a day)': { name: "Example Serum 2", link: "https://example.com/serum2" },
  'Eye cream (2 times a day)': { name: "Example Eye Cream", link: "https://example.com/eyecream" },
  'Moisturizer (2 times a day)': { name: "Example Moisturizer", link: "https://example.com/moisturizer" },
  'Sunscreen (1 time a day AM only)': { name: "Example Sunscreen", link: "https://example.com/sunscreen" },
};
*/
