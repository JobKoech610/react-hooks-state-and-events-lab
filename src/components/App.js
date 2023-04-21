import React, { useState }  from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass =`App ${darkMode ? "dark" : "light"}`;
  // false ? "App dark" : "App light"
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
        
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
