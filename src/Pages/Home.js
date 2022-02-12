import Filters from "../Components/Filters";
import SingleProduct from "../Components/SingleProduct";
import { CartState } from "../context/Context";

const Home = () => {
  const {
    state: { products }
  } = CartState();

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
        ;
      </div>
    </div>
  );
};

export default Home;
