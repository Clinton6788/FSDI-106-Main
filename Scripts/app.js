

function saveTask(){

    //Get values
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#startDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title,desc,color,date,status,budget);
    
    //Build Object
    let taskToSave = new Task(title,desc,color,date,status,budget);
    console.log(taskToSave);
    
    //Save to server (post)
    $.ajax({
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",// the url to send the request to
        type: "POST", // type of request (get, post, put, delete, patch)
        data: JSON.stringify(taskToSave),// convert object to JSON
        contentType: "application/json",
        success: function(response){
            console.log(response);
        },
        error: function(response){
            console.log(response);
        },
    });


    //Display the task (get)
    displayTask(taskToSave);
}

function displayTask(task){
    let syntax = `
        <div class = "task-container" style="border-color:${task.color}">
            <div class="task">
                <div class="info">
                    <h5>${task.title}</h5>
                    <p>${task.desc}</p>
                </div>
                <div class="status">
                    ${task.status}
                </div>
                <div class="date-budget">
                    <span>${task.date}</span>
                    <span>$${task.budget}</span>
                </div>
            </div>
        </div>
    `;

    $("#list").append(syntax);
}

function loadTask(){
    console.log("Load Task");
    $.ajax({
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",// the url to send the request to
        type: "GET", // type of request (get, post, put, delete, patch)
        success: function(response){
            let data = JSON.parse(response)
            console.log("Data: ", data);

            //Travel Array, get some elements from the array
            for(let i=0;i<data.length;i++){
                let task = data[i];

                if(task.name === "Clinton"){
                    displayTask(task);
                };
            }
        },


    });
    
}

$("#form").on('submit', function(event){
    event.preventDefault();
})



function init(){
    console.log("init");
    $("#btnSave").click(saveTask);
    loadTask();
}

window.onload = init;