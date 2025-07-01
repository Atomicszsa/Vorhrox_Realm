// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Глобальные стили
import '../styles/styles.module.css'; // Локальные стили (если используешь CSS-модули)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
