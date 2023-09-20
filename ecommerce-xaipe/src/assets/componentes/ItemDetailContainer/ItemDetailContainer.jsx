import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../Mook/moockFetch"
import ItemDetail from "./ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [ product, setProduct ] = useState({})
    const {pid} = useParams()
    console.log(pid)

    useEffect(() => {
        mFetch(Number(pid))
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        //.finally(setLoading)
    },[])

    return (
    <div>
        <ItemDetail product={product}/>
    </div>
    )
}

export default ItemDetailContainer