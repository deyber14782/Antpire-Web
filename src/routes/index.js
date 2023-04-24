const {Router}=require('express')
const {db}=require('../firebase')

const router=Router()

router.get('/Users', async(req, res) => {
    const querySnapshot=await db.collection('Prueba').get()

    console.log(querySnapshot.docs[0].data())
    res.send('Hello World')
})

router.post('/new-user', async (req, res) => {

    const{names, lastNames, email, age, salary, frequencySalary}=req.body

    await db.collection('Prueba').add({
        names,
        lastNames,
        email,
        age,
        salary,
        frequencySalary
    })

    res.send('Nuevo usuario creado')
})

module.exports=router