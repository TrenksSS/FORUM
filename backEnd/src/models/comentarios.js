const toCreateComent = (model) => {
    return `INSERT INTO comentarios VALUES (DEFAULT, '${model.id_user}','${model.comentario}', curDate(),'${model.tipo_categoria}')`;
}

const toReadAll = () => {
    return "SELECT * FROM vw_coment";
}

const toReadIdComent = (model) => {
    return `SELECT * FROM vw_coment  WHERE id_com =  '${model.id_com}'`;
}


const toDeleteComent = (model) => {
    return `DELETE FROM comentarios WHERE id_com = ${model.id_com}`;
}

const toUpdateComent = (model)=>{
    return `UPDATE comentarios SET id_user = '${model.id_user}', comentario = '${model.comentario}', data_coment = '${model.data_coment}',tipo_categoria = '${model.tipo_categoria}' WHERE id = ${model.id}`;
    }

module.exports = {
    toCreateComent,
    toReadAll,
    toReadIdComent,   
    toDeleteComent,
    toUpdateComent
}