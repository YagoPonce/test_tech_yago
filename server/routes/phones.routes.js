const router = require("express").Router()
const phones = require("../data/phones.json")

//GET  "/api/phones" -> Show all phones
router.get("/", async (req, res, next) => {
    
     res.status(200).json(phones)
   
})

// GET "/api/phones/:id" -> Show a phone details
router.get("/:id", async (req, res, next) => {
    const { id } = req.params
try {
        const phoneDetails = await phones.findById(id)
        res.status(200).json(phoneDetails)
} catch (error) {
        next(error)
}
})


module.exports = router;