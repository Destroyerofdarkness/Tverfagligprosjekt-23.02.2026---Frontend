const form = document.querySelector("form");

const titleError=document.querySelector(".error.title")
const contentError=document.querySelector(".error.content")
const linkError=document.querySelector(".error.link")
const imgError=document.querySelector(".error.img")

form.addEventListener("submit", async (e) => {
  e.preventDefault();
    const title = form.title.value
    const content = form.content.value
    const link = form.link.value
    const user  = form.user.value
    const img = form.img.value
  const res = await fetch("http://10.12.14.239:6001/review/publish", {
    method: "POST",
    body: JSON.stringify({title,content,link,user, img }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  if(data.success){
    window.location.href = "/"
  }
  if(data.errors){
    titleError.innerHTML = data.errors.title
    contentError.innerHTML = data.errors.content
    linkError.innerHTML = data.errors.link
    imgError.innerHTML = data.errors.img
  }
});
