document.addEventListener("DOMContentLoaded", ()=> {
    console.log("loaded todo.js succesfully")
 
    const pagination_size = document.querySelector("ul.pagination");
    
    update_pagination()

    resize_screen(pagination_size);
    //console.log(new Date("March 15 2023"));
    window.addEventListener("resize", ()=> {
        console.log("i am resizing")
        resize_screen(pagination_size);
    })

    document.querySelector(".previous-label").addEventListener("click", ()=> {
        var day_1 = document.querySelector(".date-1").textContent
        var month_1 = document.querySelector(".month-1").textContent
        var year_1 = document.querySelector(".year-1").textContent

        var day = `${month_1} ${day_1} ${year_1}`
        console.log(day)
        update_pagination(day=day, status="decrease")
    })

    document.querySelector(".next-label").addEventListener("click", ()=> {
        var day_4 = document.querySelector(".date-4").textContent
        var month_4 = document.querySelector(".month-4").textContent
        var year_4 = document.querySelector(".year-4").textContent

        var day = `${month_4} ${day_4} ${year_4}`
        console.log(day)
        update_pagination(day=day)
    })
    
})

function resize_screen(element){
    if( (window.innerWidth || document.documentElement.clientWidth) > 640) {
        element.classList.add("pagination-lg")
    }
    else {
        element.classList.remove("pagination-lg")
    }
}

function update_pagination(day="", status="") {
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    const date = day.trim() === "" ? new Date() : new Date(day.trim());

    var day_1 = document.querySelector(".date-1")
    var month_1 = document.querySelector(".month-1")
    var year_1 = document.querySelector(".year-1")

    var day_2 = document.querySelector(".date-2")
    var month_2 = document.querySelector(".month-2")
    var year_2 = document.querySelector(".year-2")

    var day_3 = document.querySelector(".date-3")
    var month_3 = document.querySelector(".month-3")
    var year_3 = document.querySelector(".year-3")

    var day_4 = document.querySelector(".date-4")
    var month_4 = document.querySelector(".month-4")
    var year_4 = document.querySelector(".year-4")

    if (status.trim() === "decrease"){
        var first_date = new Date(date.addDays(-4));
        day_1.innerHTML = first_date.getDate()
        month_1.innerHTML = first_date.toLocaleString("en-US", {month:"long"})
        year_1.innerHTML = first_date.getFullYear()

        var second_date = new Date(date.addDays(-3))
        day_2.textContent = second_date.getDate();
        month_2.textContent = second_date.toLocaleString("en-US", {month:"long"})
        year_2.textContent = second_date.getFullYear()

        var third_date = new Date(date.addDays(-2))
        day_3.textContent = third_date.getDate()
        month_3.textContent = third_date.toLocaleString("en-US", {month:"long"})
        year_3.textContent = third_date.getFullYear()

        var fourth_date =  new Date(date.addDays(-1))
        day_4.textContent = fourth_date.getDate()
        month_4.textContent = fourth_date.toLocaleString("en-US", {month:"long"})
        year_4.textContent = fourth_date.getFullYear()

    } else {
        var first_date = new Date(date.addDays(0));
        day_1.innerHTML = first_date.getDate()
        month_1.innerHTML = first_date.toLocaleString("en-US", {month:"long"})
        year_1.innerHTML = first_date.getFullYear()

        var second_date = new Date(date.addDays(1))
        day_2.textContent = second_date.getDate();
        month_2.textContent = second_date.toLocaleString("en-US", {month:"long"})
        year_2.textContent = second_date.getFullYear()

        var third_date = new Date(date.addDays(2))
        day_3.textContent = third_date.getDate()
        month_3.textContent = third_date.toLocaleString("en-US", {month:"long"})
        year_3.textContent = third_date.getFullYear()

        var fourth_date =  new Date(date.addDays(3))
        day_4.textContent = fourth_date.getDate()
        month_4.textContent = fourth_date.toLocaleString("en-US", {month:"long"})
        year_4.textContent = fourth_date.getFullYear()
    }

}