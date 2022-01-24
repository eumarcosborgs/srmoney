import { AppProps } from 'next/app';

import { Sidebar } from '../components/Sidebar';

import '../styles/global.scss';

import styles from './app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
