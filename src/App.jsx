import style from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);

  function addItem() {
    setAmount(amount + 1);
  }

  function subItem() {
    setAmount(amount - 1);
  }

  return (
    <>
      <header className={style.headerContainer}>
        <FontAwesomeIcon icon={faChevronDown} size="xs" className={style.arrowDown} />
        <h2 className={style.screenName}>Sacola</h2>
        <a href="#" className={style.linkStd}>Limpar</a>
      </header>
      <main>
        <section className={style.containerRestaurant}>
          <img
            src="src/assets/14852523_5528439 (1).jpg"
            alt="logo do Restaurante"
            className={style.logoRestaurant}
          />
          <div>
            <h1 className={style.restaurantName}>Pizza Sinistra</h1>
            <a href="#" className={style.linkStd}>Adicionar mais itens</a>
          </div>
        </section>
          <h3 className={style.listTitle}>Itens Adicionados</h3>
        <ul className={style.listContainer}>
          <li className={style.listItem}>
            <img src="src/assets/pizza-g-2s.jpg" alt="Foto de uma pizza de 2 sabores" className={style.foodImage} />
            <section>
              <div className={style.listName}>
                <h4 className={style.itemName}>Pizza Grande 2 Sabores - Muzzarela e Calabresa</h4>
                <p>Pizza Grande meia Muzzarela meia Calabresa </p>
              </div>
                <p>R$ 40,00</p>
            </section>
            <div className={style.amountProduct}>
              <button onClick={subItem}>-</button>
              <p>{amount}</p>
              <button onClick={addItem}>+</button>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
