import items from "@/data/items";
import ProductCard from "@/components/ProductCard";

/**
 * 페이지 : /shopping
 * @constructor
 */
function ShoppingPage() {

  // 페이지 컴포넌트 구조
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}
export default ShoppingPage;
