// pages/_app.tsx
import '../styles/globals.css';
import '../styles/styles.module.css'; // если нужен


export default function MyApp({ Component, pageProps }: AppProps) {
return <Component {...pageProps} />;
}
