import "./App.css";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import NavBar from "./components/NavBar/NavBar";
import Logo from "./components/Logo/Logo";
import CartButton from "./components/CartButton/CartButton";
import SearchBar from "./components/SearchBar/SearchBar";
import NavMenu from "./components/NavMenu/NavMenu";
import NavMenuItem from "./components/NavMenuItem/NavMenuItem";

function App() {
  const products = [
    {
      id: 1,
      image: "https://placehold.co/300",
      name: "Chocolate Cake",
      description:
        "Rich and moist chocolate cake with dark chocolate frosting.",
      price: 25.99,
      onAddToCart: () => handleAddToCart("Chocolate Cake"),
    },
    {
      id: 2,
      image: "https://placehold.co/300",
      name: "Vanilla Cupcake",
      description: "Fluffy vanilla cupcakes with cream cheese frosting.",
      price: 15.99,
      onAddToCart: () => handleAddToCart("Vanilla Cupcake"),
    },
    {
      id: 3,
      image: "https://placehold.co/300",
      name: "Blueberry Muffin",
      description: "Freshly baked blueberry muffins with a hint of lemon zest.",
      price: 12.99,
      onAddToCart: () => handleAddToCart("Blueberry Muffin"),
    },
    {
      id: 4,
      image: "https://placehold.co/300",
      name: "Chocolate Chip Cookies",
      description: "Classic chocolate chip cookies, crispy on the edges.",
      price: 8.99,
      onAddToCart: () => handleAddToCart("Chocolate Chip Cookies"),
    },

    {
      id: 5,
      image: "https://placehold.co/300",
      name: "Red Velvet Cake",
      description: "Moist red velvet cake with cream cheese frosting.",
      price: 29.99,
      onAddToCart: () => handleAddToCart("Red Velvet Cake"),
    },
    {
      id: 6,
      image: "https://placehold.co/300",
      name: "Lemon Tart",
      description: "Tangy lemon tart with a buttery crust.",
      price: 18.99,
      onAddToCart: () => handleAddToCart("Lemon Tart"),
    },
    {
      id: 7,
      image: "https://placehold.co/300",
      name: "Apple Pie",
      description: "Homemade apple pie with a flaky crust.",
      price: 22.99,
      onAddToCart: () => handleAddToCart("Apple Pie"),
    },
  ];

  const handleAddToCart = (productName: string) => {
    alert(`${productName} has been added to your cart!`);
  };

  return (
    <div>
      <NavBar
        logo={<Logo src="./src/assets/WillowsOasis.png" alt="logo" />}
        cartButton={<CartButton />}
        searchBar={<SearchBar onSearch={(query) => console.log(query)} />}
        navMenu={
          <NavMenu>
            <NavMenuItem href="#home" label="Home" />
            <NavMenuItem href="#products" label="Products" />
            <NavMenuItem href="#contact" label="Contact" />
          </NavMenu>
        }
      />

      <ProductGrid
        products={products}
        rows={3}
        columns={3}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
