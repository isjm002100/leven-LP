import type { Metadata } from 'next';
import { M_PLUS_Rounded_1c, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const sans = Noto_Sans_JP({
  variable: '--font-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const rounded = M_PLUS_Rounded_1c({
  variable: '--font-rounded-jp',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leven-shibuya-training.isjm002100.chatgpt.site'),
  title: '渋谷のパーソナル・少人数サーキット｜FITNESS GYM Leven',
  description:
    '整体×パーソナルトレーニングと最大4名の少人数サーキット。渋谷駅徒歩3分。LINEから体験をご相談いただけます。',
  openGraph: {
    title: 'ひとりでは続かなかった私に、変われる場所ができた。',
    description: 'FITNESS GYM Leven｜渋谷駅徒歩3分',
    url: '/',
    siteName: 'FITNESS GYM Leven',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-v2.png',
        width: 1730,
        height: 909,
        alt: 'FITNESS GYM Leven｜渋谷駅徒歩3分',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ひとりでは続かなかった私に、変われる場所ができた。',
    description: 'FITNESS GYM Leven｜渋谷駅徒歩3分',
    images: ['/og-v2.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${sans.variable} ${rounded.variable}`}>{children}</body>
    </html>
  );
}
