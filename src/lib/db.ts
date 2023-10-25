import { writable } from 'svelte/store';

export function uuid() {
  return (Math.random() + 1).toString(36).substring(7);
}

const PRODUCT_AMOUNT = 10;

export type Product = {
  id: string;
  title: string;
  categories: Array<string>;
  price: string;
  review: {
    recent: number;
    all: number;
  };
};

interface Products {
  [key: string]: Product;
}

function generateProductsAndReviews(): Products {
  let products = {};
  let reviews = {};
  let ids = [];

  for (let i = 0; i < PRODUCT_AMOUNT; i++) {
    ids.push(uuid());
  }

  for (let id of ids) {
    // @ts-expect-error
    products[id] = {
      id,
      title: 'Stray Panda',
      categories: ['Adventure', 'Casual'],
      price: '$29.99',
      review: {
        recent: 23,
        all: 85,
      },
    };

    // @ts-expect-error
    reviews[id] = {
      id,
      title: 'Stray Panda',
    };
  }

  return products;
}

export const products: Products = generateProductsAndReviews();
export const categoryType = writable('');
