import {Dispatch, SetStateAction, createContext} from "react";

/**
 * 장바구니 상태 컨텍스트 데이터 구조
 * * items : 현재 장바구니에 담긴 품목 구성 { "품목 ID" : 갯수  }
 * * setItems : 현재 장바구니에 담긴 품목 구성을 변경합니다.
 */
export type CartContextValue = {
  cartItems: Record<string, number>,
  setItems: Dispatch<SetStateAction<Record<string, number>>>
};

/**
 * 장바구니 상태 컨텍스트의 초기값
 */
const CartContextInitialValue: CartContextValue = {
  cartItems: {},
  setItems() {}
};

/**
 * 장바구니 상태 컨텍스트 객체
 */
const CartContext = createContext<CartContextValue>(CartContextInitialValue);
export default CartContext;
