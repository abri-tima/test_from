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
    newGroup.innerHTML = `
    <div class="label-input">
    <label for="name">Імʼя, Прізвище</label>
    <div class="label-input-human">
    <input type="text" placeholder="" class="name input-name-human" id="name" value="Башинський Сергій">
    </div>
    </div>
    <div class="label-input"> <label for="gender">Стать</label>
    <select name="gneder" id="gender" class="gender-select">
    <option value="male">Чол</option>
    <option value="female">Жін</option>
    </select>
    </div>
    <button onclick="removeField(this)" class="button-all">Видалити</button>`;
    container.appendChild(newGroup);
}

function removeField(button) {
    let container = document.getElementById("form-container");
    if (container.children.length >= 1) {
        button.parentElement.remove();
    }
}