const getData = require("../handlers/getDataHandler");

const render_homepage = async (req, res) => {
  try {
    const { reviews } = await getData("/review/sendOutReviews");
    console.log(reviews);
    res.render("index", { title: "Hjemmeside", reviews });
  } catch (err) {
    res.status(500).send("Error:", err);
  }
};

const render_404 = async (req, res) => {
  try {
    res.render("404", { title: "Siden Finnes Ikke!!" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const render_admin_page = async (req, res) => {
  try {
    const { reports } = await getData("/report/send_out");
    res.render("admin", { title: "Raporteringer", reports });
  } catch (err) {
    res.status(500).send(err);
  }
};

const render_FAQ = async (req, res) => {
  try {
    res.render("FAQ", { title: "FAQ" });
  } catch (err) {
    console.log(err);
    res.status(200).send(err);
  }
};

module.exports = {
  render_homepage,
  render_404,
  render_admin_page,
  render_FAQ,
};
