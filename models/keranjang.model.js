module.exports = (sequelize, Sequelize) => {
    const Keranjang = sequelize.define('keranjang' , {
    qty: {
        type: Sequelize.INTEGER
    },
    session_id: {
        type: Sequelize.STRING
    }
    })
    return Keranjang;
}
