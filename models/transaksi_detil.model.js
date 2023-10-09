module.exports = (sequelize, Sequelize) => {
    const Transaksi_detil = sequelize.define('transaksi_detil' , {
    qty: {
        type: Sequelize.INTEGER
    }
    })
    return Transaksi_detil;
}
