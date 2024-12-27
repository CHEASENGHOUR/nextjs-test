import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700']  // 400 for regular, 700 for bold
});