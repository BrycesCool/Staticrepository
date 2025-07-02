import type { Metadata } from 'next';

import ProductPage3 from '@/app/Components/Product3';

export const metadata: Metadata = {
  title: 'Kaareen',
  description: 'Shop the Kaareen, engineered for performance and comfort.',
};

export default function Product3Meta() {
  return <ProductPage3 />;
}