import React, {useState, useEffect} from 'react'
import {obtenerCategorias} from "../services/categoriaService"
import {Link} from "react-router-dom"

function ListaCategoriaView() {

    const [categorias, setCategorias] = useState([])

    const getCategorias =async () => {
        try{
            let categoriasObtenidas = await obtenerCategorias()
            setCategorias([...categoriasObtenidas])
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() =>{
        getCategorias()
    },[])

    return (
        <div>
            <h1>Lista de Categorias</h1>
            <Link to='/crearcategoria' className="btn btn-primary btn-lg">
                Crear Categoria
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((cat, i) =>(
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{cat.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListaCategoriaView
