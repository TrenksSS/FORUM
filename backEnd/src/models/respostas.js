const toCreateResp = (model) => {
    return `INSERT INTO respostas VALUES (DEFAULT, '${model.id_coment}','${model.id_users}', CURTIME() , '${model.comentario}',curDate())`;
}

const toReadAll = () => {
    return "SELECT * FROM respostas";
}

const toReadRespId = (model) => {
    return `SELECT * FROM respostas  WHERE id_resp =  '${model.id_resp}'`;
}


const toDeleteResp = (model) => {
    return `DELETE FROM respostas WHERE id_resp = ${model.id_resp}`;
}

const toUpdateResp = (model)=>{
    return `UPDATE respostas SET   comentario = '${model.comentario}' WHERE id_resp = ${model.id_resp}`;
    }

module.exports = {
    toCreateResp,
    toReadAll,
    toReadRespId,   
    toDeleteResp,
    toUpdateResp
}