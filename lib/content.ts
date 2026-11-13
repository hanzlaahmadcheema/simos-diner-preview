/**
 * Simos Diner — site content.
 *
 * VERIFIED = from the diner's public Facebook posts via houstondine and
 * local press (checked 2026-11-13). No email is published — call or
 * message on Facebook.
 * UNIVERSAL = standard content every diner website has, added at the
 * owner's request. The disclaimer banner on the site tells the business
 * owner to correct anything that is wrong.
 */

export const clinic = {
  name: "Simos Diner",
  shortName: "Simos Diner",
  tagline: "Family-owned diner since 1981 · Houston, Texas",
  phoneDisplay: "(713) 697-5553",
  phoneTel: "+17136975553",
  address: "5004 N Shepherd Dr, Houston, TX 77018",
  area: "Garden Oaks, Houston, TX",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Simos+Diner+5004+N+Shepherd+Dr+Houston+TX+77018",
  facebookText: "Simos Diner — find us on Facebook",
  facebookUrl: "https://www.facebook.com/116519248372464",
  instagramText: "",
  instagramUrl: "",
  owner: {
    name: "George",
    title: "Second-generation owner",
    bio: "Simos Diner was founded in 1981 by Greek immigrants Simo and Maria Karkalatos, who started with a grill on North Shepherd Drive. Today their son George runs the diner — and still knows the regulars' orders before they sit down. Mismatched mugs, bottomless coffee, and home cooking: that's Simos.",
  },
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  items: string[];
  price?: string;
  image?: string;
  imageAlt?: string;
  verified?: boolean;
};

/** Menu grouped the way top diner sites group it.
 *  VERIFIED groups are marked; prices shown are published prices. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Breakfast",
    blurb:
      "Breakfast is the main event at Simos — served from 6am every morning. The Simos Special is the plate the regulars swear by.",
    items: ["Simo's Special — $11.49", "Golden pancakes, drenched in syrup", "Three eggs, bacon, sausage & hash browns", "Bottomless coffee"],
    price: "From $11.49",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tall stack of pancakes with syrup being poured over banana and mint",
    verified: true,
  },
  {
    title: "Lunch",
    blurb:
      "American comfort food, made with fresh and real ingredients — the steam-table favorites and the plates Houston keeps coming back for.",
    items: ["Fried chicken", "Meatballs", "Chicken-and-dumplings", "$9.99 lunch special — 3 dishes, dine-in"],
    price: "$9.99 lunch special",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Burgers and fries shared around a table from above",
    verified: true,
  },
  {
    title: "Greek Specialties",
    blurb:
      "Simo and Maria brought their Greek heritage to Houston — and it shows in the kitchen. Classic diner fare with a Mediterranean twist.",
    items: ["Spinach lasagna", "Greek & American comfort food", "Vegan scrambled “eggs”"],
    price: "See the menu",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh colorful salad bowl with vegetables, eggs and greens",
    verified: true,
  },
  {
    title: "Homemade Desserts",
    blurb:
      "Fresh homemade cobbler — when we've got it, come get some. The sweet ending to a Simos breakfast or lunch.",
    items: ["Fresh homemade cobbler", "Made in-house", "Ask what's fresh today"],
    price: "Ask in the diner",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Slice of raspberry cake with fresh berries on a plate",
    verified: true,
  },
];

/** VERIFIED — from the diner's public posts and listings. */
export const faqs = [
  {
    q: "What are your hours?",
    a: "Monday to Friday, 6am to 3pm, and Saturday 6am to 2pm. We are closed on Sundays. On Thanksgiving, breakfast ends at 11am and lunch starts then — we close at 3pm. On the 4th of July we are open until 1pm.",
  },
  {
    q: "What is the Simos Special?",
    a: "Three eggs, bacon, sausage, hash browns, and your choice of pancakes, biscuits, or toast — for $11.49. It is the plate the regulars order, and the reason breakfast is the main event at Simos.",
  },
  {
    q: "Do I need a reservation?",
    a: "No — just come in. We are a no-frills diner: walk in, sit down, and order. For a big group, call us ahead at (713) 697-5553 and we will sort it out.",
  },
  {
    q: "Do you take cards?",
    a: "We still run the paper-check system, the way diners used to. Ask us when you visit — and bring cash if you can, it keeps things simple.",
  },
  {
    q: "Is there anything for vegetarians or vegans?",
    a: "Yes — the menu includes spinach lasagna and vegan scrambled “eggs”, alongside the classic diner fare. Ask the staff and they will point you to the right plate.",
  },
  {
    q: "Where are you?",
    a: "5004 N Shepherd Drive, Garden Oaks, Houston, TX 77018 — on the northern edge of Independence Heights. Call (713) 697-5553 if you need directions.",
  },
];

/** UNIVERSAL — the standard diner visit flow. */
export const orderSteps = [
  {
    title: "Walk in — no reservation needed",
    body: "Come on in any morning from 6am. Sit down, order at the table, and your food comes out hot. Regulars know: George probably knows your order already.",
  },
  {
    title: "Order breakfast or lunch",
    body: "Breakfast is the main event — the Simos Special, pancakes, eggs and bottomless coffee. Lunch brings fried chicken, meatballs, chicken-and-dumplings and the $9.99 special.",
  },
  {
    title: "Stay for the cobbler",
    body: "When we've got fresh homemade cobbler, come get some. And if it's a cold day, ask about the chicken and dumplings.",
  },
];
