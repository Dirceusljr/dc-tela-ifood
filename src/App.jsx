import style from './App.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


function App() {
  
  const [amount, setAmount] = useState(1)
  
  function addItem() {
    setAmount(amount + 1)
  }

  function subItem() {
    setAmount(amount - 1)
  }

  const logoIcon = <FontAwesomeIcon icon={faPizzaSlice} size='3x' style={{color: 'da1010'}} />
  return (
    <>
      <header className={style.headerContainer}>
        <h2 className={style.screenName}>Detalhes do Pedido</h2>
        <section className={style.containerRestaurant}>
          <img src='src/assets/14852523_5528439 (1).jpg' alt="logo do Restaurante" className={style.logoRestaurant}/>
          <h1 className={style.restaurantName}>Pizza Sinistra</h1>
        </section>
      </header>
      <main>
        <ul className={style.listContainer}>
          <h3 className={style.listTitle}>Itens Adicionados</h3>
          <li className={style.listItem}>
            {logoIcon}
            <div className={style.listName}>
              <h4 className={style.itemName}>Pizza Grande 2 Sabores</h4>
              <p>R$ 40,00</p>
            </div>
            <div className={style.amountProduct}>
              <button onClick={subItem}>-</button>
              <p>{amount}</p>
              <button onClick={addItem}>+</button>
            </div>
          </li>

        </ul>
        
      </main>
    </>
  )
}

export default App
