import axios from 'axios'

const URL = `${process.env.REACT_APP_URL_API}/tarea`

const obtenerTareaPorAlumno = async(alumnoId) => {
    try{
        let {data} = await axios.get(URL)
        console.log(data);
        return data
    }catch(error){
        console.log(error)
    }
 
}


export {
    obtenerTareaPorAlumno
}