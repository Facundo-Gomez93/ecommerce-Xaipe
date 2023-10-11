import { useEffect, useState } from "react"
import {collection, getFirestore, query, where, getDocs} from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

  const [products, setProduct ] = useState([])
  const [loading, setLoading] = useState(true)
  const {cid} = useParams()


  useEffect( () => {
    if (cid) {
      const db = getFirestore()
      const queryCollection = collection (db, 'products')
      const queryFilter = query(queryCollection, where('category', '==', cid))
      getDocs(queryFilter)
      .then(resp=> setProduct(resp.docs.map(prod=> ( { id: prod.id, ...prod.data()}))))
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
    } else {
      const db = getFirestore()
      const queryCollection = collection (db, 'products')
      getDocs(queryCollection) 
      .then(resp=> setProduct(resp.docs.map(prod => ( { id: prod.id, ...prod.data()}))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))

    }
  }, [cid])

  return (
    <center>
    <div className="row">
    { loading ?
    <h2>Cargando ...</h2>
    : 
    <ItemList products={products}/>
    }
    </div>
</center>
  )
}

export default ItemListContainer