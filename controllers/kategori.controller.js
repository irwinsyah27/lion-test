const db = require('../models/bundle.model')

exports.create = async (req, res) => {
    const data = {
        name : req.body.name
    }

    db.kategori.create(data).then(result => {
        res.send({
            code: 200,
            message: 'Berhasil menyimpan data',
            data: result
        })
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Gagal menyimpan data'
        })
    })
}

exports.findAll = async (req, res) => {
    db.kategori.findAll().then(result => {
        if(result.length > 0){
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.send({
                code: 404,
                message: 'Tidak ada data'
            })
        }

    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Gagal retrive data'
        })
    })
}


exports.findOne = async (req, res) => {
    const id = req.params.id;
    db.kategori.findOne({where: {id: id}}).then(result => {
       res.send({
            code: 200,
            message: 'OK',
            data: result
       })

    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Gagal retrive data'
        })
    })
}


exports.update = async (req, res) =>{
    const id = req.params.id;

    const data = {
        name: req.body.name
    }

    db.kategori.update(data, {
        where: {id: id}
    }).then(result => {
        if(result[0]){
            res.send({
                code: 200,
                message: 'Sukses update data'
            })
        }else{
            res.status(422).send({
                code: 422,
                message: 'Gagal update data, field error'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Gagal update data'
        })
    })
}

exports.delete = async (req, res) => {
    const id = req.params.id;

    db.kategori.destroy({
        where: {id: id}
    }).then(result => {
        res.send({
            code: 200,
            message: 'Sukses update data'
        })
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Gagal update data'
        })
    })
}