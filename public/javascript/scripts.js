const langSelectForm = document.querySelector('#selectLang');
langSelectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const selectMenu = document.querySelector(`${e.target.name} select`);
  window.location.replace(`/uploads/languages/${selectMenu.value}`)
});