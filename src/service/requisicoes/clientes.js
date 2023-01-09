import api from "../api";

export async function buscaUsuario(){
    try{
        const response = await api.get("/cliente")
        return response.data[0]  
    }
    catch(error){
        console.log(error)
        return {}
    }
}

export async function criarUsuario(data){
    try{
        await api.post("/cliente", data)
        return 'sucesso'  
    }
    catch(error){
        return  'erro'
    }
}

export async function deletarUsuario(id){
    try{
        await api.delete(`/cliente/${id}`)
        return 'sucesso'  
    }
    catch(error){
        return  'erro'
    }
}