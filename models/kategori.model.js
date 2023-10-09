module.exports = (sequelize, Sequelize) => {
    const Kategori = sequelize.define('kategori' , {
    name: {
        type: Sequelize.STRING
    }    
    })
    return Kategori;
}
