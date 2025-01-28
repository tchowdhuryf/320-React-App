import "./App.css";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import NavBar from "./components/NavBar/NavBar";
import Logo from "./components/Logo/Logo";
import CartButton from "./components/CartButton/CartButton";
import Cart from "./components/Cart/Cart";
import SearchBar from "./components/SearchBar/SearchBar";
import NavMenu from "./components/NavMenu/NavMenu";
import NavMenuItem from "./components/NavMenuItem/NavMenuItem";
import { useState, useEffect } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://the-birthday-cake-db.p.rapidapi.com",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "89d9a2f0famshc686eebc811b505p178e5ajsn6e27b8864df1",
              "X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com",
            },
          }
        );

        const data = await response.json();
        console.log(data); //ABT: data is an array of objects

        const mappedProducts = data.map((item: any) => ({
          id: item.id,
          image: item.image || "https://placehold.co/300",
          name: item.title,
          price: 15,
          quantity: 1,
        }));
        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar
        logo={<Logo src="./src/assets/WillowsOasis.png" alt="logo" />}
        cartButton={<CartButton onClick={toggleCart} />}
        searchBar={<SearchBar onSearch={(query) => console.log(query)} />}
        navMenu={
          <NavMenu>
            <NavMenuItem href="#home" label="Home" />
            <NavMenuItem href="#products" label="Products" />
            <NavMenuItem href="#contact" label="Contact" />
          </NavMenu>
        }
      />
      <Cart items={products} isOpen={isCartOpen} toggleCart={toggleCart} />
      <ProductGrid products={products} rows={16} columns={4} />
    </div>
  );
}

export default App;
