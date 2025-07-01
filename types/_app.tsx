import type { AppProps } from 'next/app';
import '../global.css'; /* Ensure this line is present and correct */

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
