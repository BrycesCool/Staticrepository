import type { Metadata } from 'next';

import ProductPage4 from '@/app/Components/Product4';

export const metadata: Metadata = {
  title: 'Kaareen',
  description: 'Shop the Kaareen, engineered for performance and comfort.',
};

export default function Product2Meta() {
  return <ProductPage4 />;
}