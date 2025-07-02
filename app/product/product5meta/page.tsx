import type { Metadata } from 'next';

import ProductPage5 from '@/app/Components/Product5';

export const metadata: Metadata = {
  title: 'Kaareen',
  description: 'Shop the Kaareen, engineered for performance and comfort.',
};

export default function Product2Meta() {
  return <ProductPage5 />;
}