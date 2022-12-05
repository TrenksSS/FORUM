const toCreatePost = (model) => {
    return `INSERT INTO post VALUES (DEFAULT, '${model.id_user}','${model.text_post}','${model.data_post}','${model.tipo_post}','${model.img}')`;
}

const toReadAllPost = () => {
    return "SELECT * FROM post";
}

const toReadIdPost = (model) => {
    return `SELECT * FROM post  WHERE id =  '${model.id}'`;
}


const toDeletePost = (model) => {
    return `DELETE FROM post WHERE id = ${model.id}`;
}

const toUpdatePost = (model)=>{
    return `UPDATE post SET id_user = '${model.id_user}',text_post = '${model.text_post}',data_post = '${model.data_post}', tipo_post = '${model.tipo_post}', img = '${model.img}' WHERE id = ${model.id}`;
    }

const blobToAscii = (dados) => {
    dados.forEach(e => {
        if (e.img != null) e.img = e.img.toString('ascii');
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