import {useContext} from "react";
import {Item} from "@/data/items";
import CartContext from "@/contexts/CartContext";

/**
 * 쇼핑 페이지 내 전체 제품 목록에 표현될 개별 상품 카드 컴포넌트
 * @constructor
 */
function ProductCard({ id, name, picture, price }: Item) {

  // 장바구니 컨텍스트에서 items 상태를 읽어옵니다.
  const { cartItems, setItems } = useContext(CartContext);
  const productAmount = cartItems?.[id] ?? 0; // 장바구니에 현재 제품이 담긴 갯수

  /**
   * 장바구니에 담은 현재 아이템의 수량을 변화시킵니다.
   * @param action
   */
  const handleAmount = (action: 'increase' | 'decrease') => {
    switch (action) {
      case "increase":
        const newItemAmount = !(id in cartItems) ? 1 : cartItems[id] + 1;
        setItems(prevState => ({
          ...prevState,
          [id]: newItemAmount
        }));
        break;
      case "decrease":
        if (cartItems?.[id] > 0) {
          setItems(prevState => ({
            ...prevState,
            [id]: cartItems[id] - 1
          }));
        }
        break;
      default:
        break;
    }
  };

  // 카드 컴포넌트 구조
  return (
    <div className="bg-gray-200 p-6 rounded-md">
      <div className="relative 100% h-40 m-auto">
        <img className="object-cover" src={picture} alt={name}/>
      </div>
      <div className="flex justify-between mt-4">
        <div className="font-bold text-l">
          {name}
        </div>
        <div className="font-bold text-l text-gray-500">
          {price}/kg
        </div>
      </div>
      <div className="flex justify-between mt-4 w-2/4 m-auto">
        <button
          className="pl-2 pr-2 bg-red-400 text-white rounded-md"
          disabled={productAmount < 1} // todo: 비활성화 여부 제어 기능
          onClick={() => handleAmount('decrease')}
        >
          -
        </button>
        <div>{productAmount}</div>{/* todo: 구현할 부분 */}
        <button
          className="pl-2 pr-2 bg-green-400 text-white rounded-md"
          onClick={() => handleAmount('increase')}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
