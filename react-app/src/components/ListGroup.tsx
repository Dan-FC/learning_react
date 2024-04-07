function ListGroup() {
  //Array de items
  let items = ["Hemorillo", "Polo", "Golden", "Shark"];

  //Output de la funcion
  return (
    <>
      <h1>Lista chila</h1>
      {/*Se agrega codigo Ts en {} dentro de html //Si la comparacion inicial da
      True entones lo otro se ejecuta*/}
      {items.length === 0 && <p>Item no encontrado </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
