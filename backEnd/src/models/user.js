const toCreateUsers = (model) => {
    return `INSERT INTO users VALUES (DEFAULT, '${model.nome_user}','${model.nickname}','${model.data_nasci}','${model.senha}','${model.role_stats}','${model.avatar}')`;
}

const toReadAllUsers = () => {
    return "SELECT * FROM users";
}

const toReadNickname = (model) => {
    return `SELECT * FROM users  WHERE nickname =  '${model.nickname}'`;
}

const login = (model) => {
    return `SELECT * FROM vw_status WHERE nickname =  '${model.nickname}'`;
}

const toDeleteUsers = (model) => {
    return `DELETE FROM users WHERE id = ${model.id}`;
}

const toUpdateUsers = (model)=>{
    return `UPDATE users SET nome_user = '${model.nome_user}', nickname = '${model.nickname}', data_nasci = '${model.data_nasci}',senha = '${model.senha}', avatar = '${model.avatar}' WHERE id = ${model.id}`;
    }

    const blobToAscii = (dados) => {
        dados.forEach(e => {
            if (e.avatar != null) e.avatar = e.avatar.toString('ascii');
        });
        return dados;
    }
    

module.exports = {
    toCreateUsers,
    toReadAllUsers,
    toReadNickname,   
    toDeleteUsers,
    toUpdateUsers,
    blobToAscii,
    login
}