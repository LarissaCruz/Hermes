import { db } from "../SQLite"

export function criarTabelaFornecedor() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS "+
            "fornecedor " + 
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, nomeFantasia TEXT, razaoSocial TEXT, tipo TEXT, cnpj TEXT, sulframa TEXT, IEstadual TEXT, email TEXT, telefone TEXT, bairro TEXT, cidade TEXT, complemento TEXT, endereco TEXT, numero TEXT, uf TEXT , info TEXT);")
    })
}
export async function adicionarFornecedor(data) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO fornecedor (nomeFantasia, razaoSocial, tipo, cnpj, sulframa, IEstadual, email, telefone, bairro, cidade, complemento, endereco, numero, uf, info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",[data.nomeFantasia, data.razaoSocial, data.tipo, data.cnpj, data.sulframa, data.IEstadual,
            data.email, data.telefone, data.bairro, data.cidade, data.complemento, data.endereco, data.numero, data.uf, data.info],() => {
                resolve("cliente adicionado com sucesso!")
            })
        })
    })
    
}

export async function buscarFornecedor(data) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM fornecedor;", [], (transaction, resultado)=> {
                resolve(resultado.rows._array)
            })
        })
    })
    
}


export function deletarFornecedor() {
    db.transaction((transaction) => {
        transaction.executeSql("DROP TABLE Fornecedor;")
    })
}