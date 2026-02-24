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

const render_404 = async(req,res)=>{
    try {
        res.render("404",{title: "Siden Finnes Ikke!!"})
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}


module.exports = {
    render_homepage,
    render_404
}