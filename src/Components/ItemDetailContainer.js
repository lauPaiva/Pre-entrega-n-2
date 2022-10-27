
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";


function ItemDetailContainer() {
    const {netbookID} = useParams();
    const [cartas, setCartas] = useState(<Spinner/>);
  const [loading, isLoading] = useState(true)

  //SIMULACION API
  const getItem = () => {
    let items = require("../Api/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(false)
        }, 1000);
    })
  }


  useEffect(() => {
    async function fetchedItems(){
      const items = await getItem(); 
      setCartas(items)
    }

    fetchedItems()
  }, []);


return(

        <div className="md:flex justify-start ml-10 h-[100vh] ">   
        {loading ? cartas : cartas
          .filter((netbook) => netbook.id.includes(netbookID))
          .map((el)=>(

            <ItemDetail 
            key={el.id}
            nombre={el.nombre}
            calificacion={el.calificacion}
            modelo={el.modelo}
            img = {el.img}
            categoria = {el.categoria}
            reseña = {el.reseña}
            id={el.id}
            valor = {el.valor}
            stock= {el.stock}

            />
          ))}
        </div>
    );
}

export default ItemDetailContainer;