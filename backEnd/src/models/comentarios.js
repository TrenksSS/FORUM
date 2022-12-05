const toCreateComent = (model) => {
    return `INSERT INTO comentarios VALUES (DEFAULT, '${model.id_post}','${model.id_user}','${model.comentario}', curDate(),'${model.tipo_categoria}')`;
}

const toReadAll = () => {
    return "SELECT * FROM vw_coment";
}

const toReadIdComent = (model) => {
    return `SELECT * FROM vw_coment  WHERE id_com =  '${model.id_com}'`;
}


const toDeleteComent = (model) => {
    return `DELETE FROM comentarios WHERE id = ${model.id}`;
}

const toUpdateComent = (model)=>{
    return `UPDATE comentarios SET   comentario = '${model.comentario}',tipo_categoria = '${model.tipo_categoria}' WHERE id = ${model.id}`;
    }

module.exports = {
    toCreateComent,
    toReadAll,
    toReadIdComent,   
    toDeleteComent,
    toUpdateComent
}