const form = document.querySelector("form");
const userError = document.querySelector(".error.user");
const passError = document.querySelector(".error.passwd");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = form.username.value;
  const passwd = form.passwd.value;

  userError.innerHTML = ""
  passError.innerHTML = ""

  const res = await fetch("http://10.12.14.239:6001/loggInn", {
    method: "POST",
    body: JSON.stringify({ user, passwd}),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (data.token) {
    window.location.href = `/createCookie/${data.token}`;
  }
  if (data.errors) {
    userError.innerHTML = data.errors.name
    passError.innerHTML = data.errors.passwd
  }
});
