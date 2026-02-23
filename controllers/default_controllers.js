
const render_homepage = (req,res)=>{
    try{
        res.render("index")
    }catch(err){
        res.status(500).send("Error:", err)
    }
}

module.exports = {
    render_homepage
}