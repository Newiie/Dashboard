const navigation = document.querySelector("[data-navigation]")
const col_2 = document.querySelectorAll("[data-col-2]")
const icons = document.querySelectorAll("[data-icons]")
navigation.addEventListener("mouseover", (e) => {
   if (e.target != navigation)  return;
   col_2.forEach(col => {
      col.style.setProperty("color", "white");
      col.addEventListener("mouseover", (e) => {
               col.classList.add("hover");
      })
      col.addEventListener("mouseleave", (e) => {
               col.classList.remove("hover")
      })
   })
}, false)
