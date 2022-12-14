const toCreateUsers = (model) => {
    return `INSERT INTO users VALUES (DEFAULT, '${model.nome_user}','${model.nickname}','${model.email}','${model.data_nasci}','${model.senha}','${model.role_stats}','${model.avatar}')`;
}

const toReadAllUsers = () => {
    return "SELECT * FROM users";
}

const toReadNickname = (model) => {
    return `SELECT * FROM users  WHERE nickname =  '${model.nickname}'`;
}

const loginVal = (model) => {
    return `SELECT * FROM vw_status where email='${model.email}' or nickname='${model.nickname}' and senha='${model.senha}'`;
}

const toDeleteUsers = (model) => {
    return `DELETE FROM users WHERE id = ${model.id}`;
}

const toUpdateUsers = (model)=>{
    return `UPDATE users SET nome_user = '${model.nome_user}', nickname = '${model.nickname}', email = '${model.email}', data_nasci = '${model.data_nasci}', avatar = '${model.avatar}' WHERE id = ${model.id}`;
    }

    

module.exports = {
    toCreateUsers,
    toReadAllUsers,
    toReadNickname,   
    toDeleteUsers,
    toUpdateUsers,
    loginVal
}