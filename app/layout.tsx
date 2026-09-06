import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import './globals.css';

const sans = Noto_Sans_JP({
  variable: '--font-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const serif = Noto_Serif_JP({
  variable: '--font-serif-jp',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: '渋谷のパーソナル・少人数サーキット｜FITNESS GYM Leven',
  description:
    '整体×パーソナルトレーニングと最大4名の少人数サーキット。渋谷駅徒歩3分。LINEから体験をご相談いただけます。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
