const toCreateUsers = (model) => {
    return `INSERT INTO users VALUES (DEFAULT, '${model.nome_user}','${model.nickname}','${model.data_nasci}','${model.senha}')`;
}

const toReadAllUsers = () => {
    return "SELECT * FROM users";
}

const toReadNickname = (model) => {
    return `SELECT * FROM users  WHERE nickname =  '${model.nickname}'`;
}


const toDeleteUsers = (model) => {
    return `DELETE FROM users WHERE id_user = ${model.id_user}`;
}

module.exports = {
    toCreateUsers,
    toReadAllUsers,
    toReadNickname,   
    toDeleteUsers
}