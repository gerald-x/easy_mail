document.addEventListener("DOMContentLoaded", ()=> {
    console.log("loaded succesfully")
    var switch_btn = document.querySelector(".mobile--bun")
    
    switch_btn.addEventListener("click", ()=> {
        document.querySelector(".mobile--view").classList.toggle("slideIn")
    })
})