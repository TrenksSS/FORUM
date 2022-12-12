const toCreatePost = (model) => {
    return `INSERT INTO post VALUES (DEFAULT, '${model.id_user}','${model.titulo_post}',curDate(),'${model.tipo_post}',0,'${model.img}')`;
}

const toReadAllPost = () => {
    return "SELECT * FROM vw_posts";
}

const toReadIdPost = (model) => {
    return `SELECT * FROM post  WHERE id =  '${model.id}'`;
}


const toDeletePost = (model) => {
    return `DELETE FROM post WHERE id = ${model.id}`;
}

const toUpdatePost = (model)=>{
    return `UPDATE post SET id_user = '${model.id_user}',titulo_post = '${model.titulo_post}', tipo_post = '${model.tipo_post}', img = '${model.img}' WHERE id = ${model.id}`;
    }

const blobToAscii = (dados) => {
    dados.forEach(e => {
        if (e.img != null) e.img = e.img.toString('ascii');
        if (e.avatar != null ) e.avatar = e.avatar.toString('ascii');
    });
    return dados;
}

module.exports = {
    toCreatePost,
    toReadAllPost,
    toReadIdPost,   
    toDeletePost,
    toUpdatePost,
    blobToAscii
}