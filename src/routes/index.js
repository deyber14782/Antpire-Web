const {Router}=require('express')
const {db}=require('../firebase')

const router=Router()

router.get('/', async(req, res) => {
    const querySnapshot=await db.collection('Users').doc('22m38pV2Z1e2c63aNtyG').collection('Private_Data').doc('IPJDrSo4BbuYAePLYI5d').get()

    console.log(querySnapshot.data())
    res.send('Hello World')
})

router.post('/new-user', (req, res) => {

    const{names, lastnames, email, age, salary, frequencySalary}=req.body
})

module.exports=router