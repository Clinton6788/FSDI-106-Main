

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

    //Display the task (get)
}

function init(){
    console.log("init");
    
    $("#btnSave").click(saveTask);
}

window.onload = init;