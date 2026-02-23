
const maxValidAge = 24*60*60

const render_sign_up = (req,res)=>{
    try{
        res.render("signUp",{title: "Registrer"})
    }catch(err){
        console.log(err)
        res.status(500).send("Error:",err)
    }
}

const render_sign_in = (req,res)=>{
    try{
        res.render("signIn", {title: "Logg Inn"})
    }catch(err){
        console.log(err)
        res.status(500).send("Error:", err)
    }
}

const create_cookie = (req,res)=>{
   const token = req.params.token
    try{
        res.cookie("jwt", token, {
            httpOnly:true, maxAge: maxValidAge *1000
        })
        res.redirect("/")
    }catch(err){
        console.log(err);
        res.status(500).send("Error:",err)
    }
}

module.exports = {
    render_sign_up,
    render_sign_in,
    create_cookie
}