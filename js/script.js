function toggleEdit(editable) {
    document.querySelectorAll("#form-container input").forEach(input => {
        input.disabled = !editable;
        if (!editable) {
            input.classList.add("saved");
        } else {
            input.classList.remove("saved");
        }
    });
    document.querySelectorAll(".input-group").forEach(group => {
        if (!editable) {
            group.style.display = "block";
        } else {
            group.style.display = "flex";
        }
    });
}

function addField() {
    let container = document.getElementById("form-container");
    let newGroup = document.createElement("div");
    newGroup.className = "input-group";
    newGroup.innerHTML = '<input type="text" placeholder="" class="name input-name-human" value="Башинський Сергій"> <button onclick="removeField(this)" class="button-all">Видалити</button>';
    container.appendChild(newGroup);
}

function removeField(button) {
    let container = document.getElementById("form-container");
    if (container.children.length >= 1) {
        button.parentElement.remove();
    }
}