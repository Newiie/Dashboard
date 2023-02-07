const navigation = document.querySelector("[data-navigation]")
const col_2 = document.querySelectorAll("[data-col-2]")
const icons = document.querySelectorAll("[data-icons]")
navigation.addEventListener("mouseover", (e) => {
   if (e.target != navigation)  return;
   col_2.forEach(col => {
      col.style.setProperty("color", "white");
      col.addEventListener("hover", (e) => {
         if (col != e.target) return;
            if (col.classList.contains("hover")) {
               col.classList.remove("hover")
            } else {
               col.classList.add("hover");
            }
      })
   })
}, false)

navigation.addEventListener("mouseleave", (e) => {
   col_2.forEach(col => {
      col.style.setProperty("color", "#0E86D4");
   })
})