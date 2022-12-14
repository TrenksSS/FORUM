const toCreateComent = (model) => {
    return `INSERT INTO comentarios VALUES (DEFAULT, '${model.id_post}','${model.id_user}', CURTIME(),'${model.comentario}', curDate())`;
}

const toReadAll = () => {
    return "SELECT * FROM vw_coment";
}

const toReadIdComent = (model) => {
    return `SELECT * FROM vw_coment  WHERE  id_post =  '${model.id_post}'`;
}


const toDeleteComent = (model) => {
    return `DELETE FROM comentarios WHERE id = ${model.id}`;
}

const toUpdateComent = (model)=>{
    return `UPDATE comentarios SET   comentario = '${model.comentario}' WHERE id = ${model.id}`;
    }

module.exports = {
    toCreateComent,
    toReadAll,
    toReadIdComent,   
    toDeleteComent,
    toUpdateComent
}