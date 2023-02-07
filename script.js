const navigation = document.querySelector("[data-navigation]")
const col_2 = document.querySelectorAll("[data-col-2]")
const icons = document.querySelectorAll("[data-icons]")
navigation.addEventListener("mouseover", (e) => {
   if (e.target != navigation)  return;
   e.target.style.setProperty("width", "300px");
   col_2.forEach(col => {
      col.style.setProperty("width", "300px");
   })
}, false)

navigation.addEventListener("mouseleave", (e) => {
   col_2.forEach(col => {
      console.log(col)
      col.style.setProperty("width", "0px");

   })
   e.target.style.setProperty("width", "auto");
})