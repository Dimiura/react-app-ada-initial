import { useState } from "react";
import styles from "./button.module.css";

function MeuContador() {
  let [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function zerar() {
    setContador((contador = 0));
  }

  return (
    <div className="container">
      <h1> Meu contador: {contador} </h1>
      {contador > 10 ? (
        <button className={styles.secondButton} onClick={zerar}>
          zerar
        </button>
      ) : null}
      <button className="buttonContador" onClick={aumentar}>
        {" "}
        aumentar{" "}
      </button>
    </div>
  );
}

export default MeuContador;
