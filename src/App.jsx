import style from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  let [amount, setAmount] = useState(1);

  function addItem() {
    setAmount(amount + 1);
  }

  function subItem() {
    if(amount == 1) {
      setAmount(amount = 0)
    } else {
      setAmount(amount - 1)
    }
  }

  function limparLista() {
    return setAmount(amount = 0)
  }

  let pizzas = [
    {
        key: 1,
        sabor: "Calabresa",
        descricao: "Molho de tomate, queijo, calabresa, cebola e azeitonas",
        preco: 30.00
    },
    {
        key: 2,
        sabor: "Margherita",
        descricao: "Molho de tomate, queijo, manjericão fresco e azeitonas",
        preco: 25.00
    },
    {
        key: 3,
        sabor: "Quatro Queijos",
        descricao: "Molho de tomate, queijo mussarela, queijo gorgonzola, queijo parmesão e queijo catupiry",
        preco: 35.00
    },
    {
        key: 4,
        sabor: "Frango com Catupiry",
        descricao: "Molho de tomate, queijo, frango desfiado e catupiry",
        preco: 32.00
    },
    {
        key: 5,
        sabor: "Portuguesa",
        descricao: "Molho de tomate, queijo, presunto, ovos, cebola, azeitonas e ervilha",
        preco: 28.00
    }
];

// let pedido = [pizzas[0], pizzas[1], pizzas[3]]

// let [qtdPedido, setQtdPedido] = useState([1, 1, 1]) 

// let [precoPedido, setPrecoPedido] = useState([])

function formatarMoedaParaReal(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

let taxaDeEntrega = null;
if (amount){
  taxaDeEntrega = amount * pizzas[1].preco >= 50 ? 'Entrega grátis' : 10}
  else {
    taxaDeEntrega = '-'
  }


let precoTotal = typeof(taxaDeEntrega) == 'number' ? formatarMoedaParaReal((amount * pizzas[1].preco) + taxaDeEntrega) : formatarMoedaParaReal(amount * pizzas[1].preco)

  return (
    <>
      <header className={style.headerContainer}>
        <FontAwesomeIcon icon={faChevronDown} size="xs" className={style.arrowDown} />
        <h2 className={style.screenName}>Sacola</h2>
        <a href="#" className={style.linkStd} onClick={limparLista}>Limpar</a>
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
        <section className={style.listContainer}>
          <h3 className={style.listTitle}>Itens Adicionados</h3>
          <ul >
          {amount != 0 && <li className={style.listItem}>            
              <div className={style.listItemName}>
                <img src="src/assets/pizza-g-2s.jpg" alt="Foto de uma pizza de 2 sabores" className={style.foodImage} />
                  <div className={style.listName}>
                    <h4 className={style.itemName}>{pizzas[1].sabor}</h4>
                    <p className={style.listDescription}>{pizzas[1].descricao}</p>
                    <p className={style.listPrice}>{formatarMoedaParaReal(pizzas[1].preco)}</p>
                  </div>
              </div>
              <div className={style.amountProduct}>
                <button onClick={subItem}>{amount == 1 ? <FontAwesomeIcon icon={faTrashCan} size="xs" /> : '-'}</button>
                <p>{amount}</p>
                <button onClick={addItem}>+</button>
              </div>
            </li>}
          </ul>
        </section>
        <hr />
        <section>
          <h3 className={style.listTitle}>Resumo de valores</h3>
          <ul>
            <li className={style.listPriceItem}>
              <p className={style.listPriceCategory}>Subtotal</p>
              <p className={style.listPriceCategory}>{formatarMoedaParaReal(amount * pizzas[1].preco)}</p>
            </li>
            <li className={style.listPriceItem}>
              <p className={style.listPriceCategory}>Taxa de entrega</p>
              <p className={style.listPriceCategory}>{typeof(taxaDeEntrega) == 'number' ? formatarMoedaParaReal(taxaDeEntrega) : taxaDeEntrega}</p>
            </li>
            <hr />
            <li className={style.listPriceItem}>
              <h3 className={style.listPriceTotal}>Total</h3>
              <p className={style.listPriceTotal}>{precoTotal}</p>
            </li>
            <hr />
          </ul>
        </section>
        <section className={style.finalOrder}>
            <div>
              <p className={style.listDescription}>{typeof(taxaDeEntrega) == 'number' ? 'Total com taxa de entrega' : 'Total com entrega grátis'}</p>
              <p>{precoTotal}</p>
            </div>
            <button type="submit">Continuar</button>
        </section>
      </main>
    </>
  );
}

export default App;
