
const render_sign_up = (req,res)=>{
    try{
        res.render("signUp",{title: "Registrer"})
    }catch(err){
        console.log(err)
        res.status(500).send("Error:",err)
    }
}

module.exports = {
    render_sign_up
}