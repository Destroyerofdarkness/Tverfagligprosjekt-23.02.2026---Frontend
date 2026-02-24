const getData = require("../handlers/getDataHandler")

const render_homepage = async(req,res)=>{
    try{
        const {reviews} = await getData("/review/sendOutReviews")
        console.log(reviews)
        res.render("index", {title: "Hjemmeside", reviews})
    }catch(err){
        res.status(500).send("Error:", err)
    }
}



module.exports = {
    render_homepage
}