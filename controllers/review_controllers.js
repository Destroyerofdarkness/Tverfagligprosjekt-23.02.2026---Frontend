const render_review_publish = (req, res) => {
  try {
    res.render("publish", { title: "Publiser" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error:", err);
  }
};

module.exports = {
  render_review_publish,
};
