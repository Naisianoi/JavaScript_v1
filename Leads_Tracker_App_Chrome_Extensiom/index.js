let myLeads = []

//Changing myLeads from string to array. Get the myLeads from local storage
//Check if local storage has truthy values, has leads if so call render()
if (JSON.parse(localStorage.getItem("myLeads") ) ) {
    myLeads = JSON.parse(localStorage.getItem("myLeads") )
    render(myLeads)
}

//To run the myLeads array as list items
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //document.createElement("li").textContent = myLeads[i]
        //document.getElementById("ul-el").append(li)

        //Template string.
        //Makes the lead clickable and opens in a new tab.
        listItems += `
            <li> 
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a> 
            </li>
            `
    }
    document.getElementById("ul-el").innerHTML = listItems
}

//Delete all button. When double clicked clear local storage, myLeads and DOM
document.getElementById("delete-btn").addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

//addEventListener - "event", function()
document.getElementById("input-btn").addEventListener("click", function() {
    //Get value from input field
    myLeads.push(document.getElementById("input-el").value)
    
    //Clear out the input field
    document.getElementById("input-el").value = ""
    
    //Saving myLeads to local storage, Changing myLeads from array to string
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


