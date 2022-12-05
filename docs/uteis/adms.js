const toCreateAdm = (model) => {
    return `INSERT INTO adms VALUES (DEFAULT, '${model.nome_adm}','${model.senha_adm}')`;
}

const toReadAllAdms = () => {
    return "SELECT * FROM adms";
}

const toReadIdAdm = (model) => {
    return `SELECT * FROM adms  WHERE id_adm =  '${model.id_adm}'`;
}


const toDeleteAdm = (model) => {
    return `DELETE FROM adms WHERE id_adm = ${model.id_adm}`;
}

module.exports = {
    toCreateAdm,
    toReadAllAdms,
    toReadIdAdm,   
    toDeleteAdm
}