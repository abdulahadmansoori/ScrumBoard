
let Dotasks = document.getElementById("DoTasks");
let DoingTasks = document.getElementById("DoingTasks");
let DoneTasks = document.getElementById("DoneTasks");
let inputHeading = document.getElementById("TName");
let inputDec = document.getElementById("TDescription");
let msg = document.getElementById("msg");


let addTask = () => {
    let TName = document.getElementById("TName").value;
    let TDescription = document.getElementById("TDescription").value;
    Dotasks.innerHTML += `
    <div class="task">
        <div class="details">
            <h4 id='heading'>${TName}</h4>
            <span class="options">
                <i class="fas fa-edit" onclick="editTask(this)"></i>
                <i class="fas fa-trash-alt" onclick="deleteTask(this)"></i>
            </span>
            <p id='description'>${TDescription}....</p>
        </div>
        <div class="opt">
            <h6 onclick="moveToDoing(this)">Doing <i class="fas fa-forward"></i></h6>
        </div>
    </div>
    `;
    console.log(TName);
    inputHeading.value = "";
    inputDec.value = "";
}
let moveToDoing = (e) => {
    let task = e.parentElement.previousElementSibling.innerHTML;
    DoingTasks.innerHTML += `
    <div class="task">
        <div class="details">${task}</div>
        <div class="opt">
            
            <h6 onclick="moveBackToDo(this)"><i class="fas fa-backward"></i> Do</h6>
            <h6 onclick="moveToDone(this)">Done <i class="fas fa-forward"></i></h6>
            
        </div>
    </div>
    `;
    e.parentElement.parentElement.remove();
    e.parentElement.previousElementSibling.remove();
    e.parentElement.remove();
}
let moveToDone = (e) => {
    let task = e.parentElement.previousElementSibling.innerHTML;
    DoneTasks.innerHTML += `
    <div class="task">
        <div class="details">${task}</div>
        <div class="opt">
            <h6 onclick="moveBackToDoing(this)"><i class="fas fa-backward"></i> Doing</h6>
            <h6 class="green">Completed <i class="fas fa-check"></i></h6>
        </div>
    </div>
    `;
    e.parentElement.parentElement.remove();
    e.parentElement.previousElementSibling.remove();
    e.parentElement.remove();
}
let moveBackToDoing = (e) => {
    let task = e.parentElement.previousElementSibling.innerHTML;
    DoingTasks.innerHTML += `
    <div class="task">
        <div class="details">${task}</div>
        <div class="opt">
            <h6 onclick="moveBackToDo(this)"><i class="fas fa-backward"></i> Do</h6>
            <h6 onclick="moveToDone(this)">Done <i class="fas fa-forward"></i></h6>
        </div>
    </div>
    `;
    e.parentElement.parentElement.remove();
    e.parentElement.previousElementSibling.remove();
    e.parentElement.remove();
}
let moveBackToDo = (e) => {
    let task = e.parentElement.previousElementSibling.innerHTML;
    DoTasks.innerHTML += `
    <div class="task">
        <div class="details">${task}</div>
        <div class="opt">
        <h6 onclick="moveToDoing(this)">Doing <i class="fas fa-forward"></i></h6>
        </div>
    </div>
    `;
    e.parentElement.parentElement.remove();
    e.parentElement.previousElementSibling.remove();
    e.parentElement.remove();
}
let editTask = (e) => {
    let heading = e.parentElement.previousElementSibling.innerHTML;
    let description = e.parentElement.nextElementSibling.innerHTML;
    inputHeading.value = heading;
    inputDec.value = description;

    e.parentElement.previousElementSibling.remove();
    e.parentElement.nextElementSibling.remove();
    e.parentElement.parentElement.nextElementSibling.remove();
    e.parentElement.parentElement.parentElement.remove();
    e.parentElement.remove();
}
let deleteTask = (e) => {
    e.parentElement.previousElementSibling.remove();
    e.parentElement.nextElementSibling.remove();
    e.parentElement.parentElement.nextElementSibling.remove();
    e.parentElement.parentElement.parentElement.remove();
    e.parentElement.remove();
}
let formValidation = () => {
    if (inputHeading.value === "") {
        msg.style.display = "block";
        console.log("failure");
    } else {
        console.log("successs");
        msg.style.display = "none";
        addTask();
    }
};