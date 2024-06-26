import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRecoilValue, useSetRecoilState, RecoilRoot } from 'recoil';
import { isUserLoading, userState } from "store";
import axios from "axios";
import { useEffect } from 'react';
import Appbar from '@/components/Appbar';

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <App2 Component={Component} pageProps={pageProps} />
  </RecoilRoot>
}

function App2({Component, pageProps}) {
  const userLoading = useRecoilValue(isUserLoading);
  if (userLoading) {
    return <>
    Loading...
    <InitUser />
  </>
  }
  return <div> 
    <Appbar />
    <Component {...pageProps} /> 
  </div>
}