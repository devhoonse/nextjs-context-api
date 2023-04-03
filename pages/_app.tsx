import {useState} from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import CartContext, {CartContextValue} from "@/contexts/CartContext";
import NavBar from "@/components/NavBar";
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  /**
   * 어플리케이션 상태
   * * App 어플리케이션에 정의되었으므로 전역 상태입니다.
   * * CartContext.Provider 를 적용했으므로 어플리케이션 내 모든 컴포넌트에서 이용 가능합니다.
   */
  const [items, setItems] = useState<CartContextValue['cartItems']>({});

  // 어플리케이션 공통 구조
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"/>
      </Head>
      {/* 어플리케이션 내 모든 컴포넌트에서 장바구니 컨텍스트를 이용 가능합니다. */}
      <CartContext.Provider value={{ cartItems: items, setItems }}>
        <NavBar />
        <div className={['w-9/12', 'm-auto', 'pt-10'].join(' ')}>
          <Component {...pageProps} />
        </div>
      </CartContext.Provider>
    </>
  );
}
