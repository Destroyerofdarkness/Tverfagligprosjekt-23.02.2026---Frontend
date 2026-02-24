const getData = require("../handlers/getDataHandler");

const render_review_publish = (req, res) => {
  try {
    res.render("publish", { title: "Publiser" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error:", err);
  }
};

const render_review_page = async(req,res, next)=>{
const reviewId = req.params.id
try {
  const {review,err} = await getData(`/review/${reviewId}`)
  if(err){
    throw Error(err)
  }
  console.log("Rendered review:", review);
  res.render("review",{title:"Vurdering", review})
} catch (err) {
  console.log(err)
  res.status(404).send(err)
  next()
}
}

module.exports = {
  render_review_publish,
  render_review_page
};
