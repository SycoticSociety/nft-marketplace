import '../styles/globals.css'
import {ThirdwebProvider,ChainId} from '@thirdweb-dev/react'

function MyApp({ Component, pageProps }) {
  return <ThirdwebProvider ChainId={ChainId.Mumbai}>
    <Component {...pageProps} />
    </ThirdwebProvider>
    
}

export default MyApp
