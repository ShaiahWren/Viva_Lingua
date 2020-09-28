const langSelectForm = document.querySelector('#selectLang');
langSelectForm.addEventListener("submit", function (e) {
    e.preventDefault;
    window.location.replace(`/uploads/languages/${e.target.value}`)
    alert("clicked");
})


console.log("hello")