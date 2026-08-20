const express = require('express');
const router = express.Router();
const { rateLimit } = require('express-rate-limit');
const { leerServicios, vistaCrearServicio, nuevoServicio, vistaEditarServicio, editarServicio, eliminarServicio, leerUnServicio } = require('../controllers/serviciosController')

const vistaCrearServicioLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 60,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: {
        ok: false,
        msg: 'Demasiadas solicitudes. Inténtalo de nuevo más tarde.'
    }
})

//leer todos los servicios
router.get('/', leerServicios)



//vista formulario crear nuevo

router.get('/nuevo', vistaCrearServicioLimiter, vistaCrearServicio)

//crear nuevo
router.post('/nuevo', nuevoServicio)



//vista forlmiario editar
router.get('/editar/:id', vistaEditarServicio)

//editar servicio
router.post('/editar', editarServicio)
//eliminar servicio
router.get('/eliminar/:id', eliminarServicio)

//leer un servicio
router.get('/:id', leerUnServicio)






module.exports = router;
