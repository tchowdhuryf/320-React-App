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
  const [cartItems, setCartItems] = useState<any[]>([]);

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
              "X-RapidAPI-Key":
                "2f0c8c114dmsh885c7a2d34dbb8bp1cb53fjsn5d29879e6bb4",
              "X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com",
            },
          }
        );

        const data = await response.json();
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

  const addToCart = (product: any) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

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
      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <ProductGrid
        products={products}
        rows={16}
        columns={4}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
