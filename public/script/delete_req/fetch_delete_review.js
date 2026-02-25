const button = document.querySelector("#deleteReview");


button.addEventListener("click", async (e) => {
  e.preventDefault();   
    const reviewId = button.value
    
  const res = await fetch("http://10.12.14.239:6001/review/delete", {
    method: "DELETE",
    body: JSON.stringify({reviewId}),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  if(data.success){
    window.location.href = "/"
  }
});