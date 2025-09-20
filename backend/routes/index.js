import express from 'express';
import departmentRoutes from '../routes/departmentRoutes/index.js'
import doctorRoutes from '../routes/docterRoutes/index.js'
import imageRoutes from './imageRoute/index.js'
import orderRoute from './orderRoute/index.js'
import medicineRoutes from './medicineRoutes/index.js'
import userRoutes from './userRoutes/index.js'
import slotRoutes from './slotRoutes/index.js'
import appointmentRoutes from './appointmentRoutes/index.js'
import prescriptionRoutes from'./prescriptionRoutes/index.js'


const router = express.Router()

router.use('/department', departmentRoutes)
router.use('/doctor', doctorRoutes)
router.use('/image', imageRoutes)
router.use('/order', orderRoute)
router.use('/medicine', medicineRoutes)
router.use('/user',userRoutes)
router.use('/slot',slotRoutes)
router.use('/appointment',appointmentRoutes)
router.use('./priscription',prescriptionRoutes)


export default router
