import type { AppProps } from 'next/app'

import GlobalStyles from '../styles/global'

function MyApp({ 
  Component, 
  pageProps: {/*session,*/ ...pageProps},
}: AppProps) {
  return (
    <>
      {/* <SessionProvider session={session}> */}
        <Component {...pageProps} />
      {/* </SessionProvider> */}
      <GlobalStyles />
    </>
  )
}

export default MyApp
