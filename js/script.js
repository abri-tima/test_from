document.addEventListener("DOMContentLoaded", function () {
    const addHumanButton = document.querySelector(".button-add-human");
    const formContainer = document.querySelector("#form-container");
    const saveButton = document.querySelector(".button-save-form");
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    document.body.appendChild(infoContainer);

    addHumanButton.addEventListener("click", function () {
        resetForm(formContainer);
        showForm(formContainer, infoContainer);
    });

    saveButton.addEventListener("click", function () {
        const success = handleSave(formContainer, infoContainer);
        if (success) {
            showInfoBlock(formContainer, infoContainer);
        }
    });
});



function showForm(formContainer, infoContainer) {
    formContainer.classList.remove("hidden");
    infoContainer.querySelectorAll(".info-block").forEach(infoBlock => infoBlock.classList.add("hidden"));

}

function showInfoBlock(formContainer, infoContainer) {
    formContainer.classList.add("hidden");
    infoContainer.querySelectorAll(".info-block").forEach(infoBlock => infoBlock.classList.remove("hidden"));
}

function handleSave(formContainer, infoContainer) {
    const name = document.querySelector(".input-name-human").value;
    const gender = document.querySelector("#gender").value;
    const product = document.querySelector("#product-list").value;
    const productName = document.querySelector("#product-list-article").value;
    const color = document.querySelector("#product-list-color").value;
    const quantityItems = document.querySelector("#quality-items").value;
    const productSize = document.querySelector("#product-list-size").value;
    const chestSize = document.querySelector("#chest-size").value;
    const qualityLogo = document.querySelector("#quality-logo").value;
    const qualityEmbroideries = document.querySelector("#quality-embroideries").value;

    if (!name || !gender || !product || !productName || !color || !quantityItems || !productSize || !chestSize || !qualityLogo || !qualityEmbroideries) {
        alert("Будь ласка, заповніть всі поля!");
        return false;
    }

    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block");
    infoBlock.innerHTML = `
            <div class="info-block-first">
                <p><span class="info-container-first">${name}_${gender}</span></p>
                </div>
                <div class="info-block-second">
                <p><span class="info-container-last">${product} ${productName} - ${color} - ${quantityItems} шт</span></p>
                <p class="hidden">Ім'я: <span class="info-name">${name}</span></p>
                <p class="hidden">Стать: <span class="info-gender">${gender}</span></p>
                <p class="hidden">Виріб: <span class="info-product">${product}</span></p>
                <p class="hidden">Назва виробу: <span class="info-productName">${productName}</span></p>
                <p class="hidden">Колір: <span class="info-color">${color}</span></p>
                <p class="hidden">Кількість: <span class="info-quantityItems">${quantityItems}</span></p>
                <p class="info-productSize-cont">Розмір: <span class="info-productSize">${productSize}</span></p>
                <p>ОГ/ОС: <span class="info-chestSize">${chestSize} см</span></p>
                <p>Вишивка лого - <span class="info-qualityLogo">${qualityLogo}</span></p>
                <p>Вишивка імені - <span class="info-qualityEmbroideries">${qualityEmbroideries}</span></p>
                <div class="button-container">
                <button class="edit-button info-block-button">Редагувати</button>
                <button class="delete-button info-block-button">Видалити</button>
                </div>
            </div>
            <div class="button-container" style="padding-top: 8px;">
                <button class="add-product info-block-button" style="font-size: 20px; font-weight: 800; padding: 3px 30px 4px 30px;">Додати виріб</button>
            </div>
    `;

    infoContainer.appendChild(infoBlock);
    formContainer.classList.add("hidden");
    resetForm(formContainer);
    setupEditAndDelete(infoBlock, formContainer);

    return true;
}

// function handleCancel() {
//     const formContainer = document.querySelector("#form-container");
//     formContainer.classList.add("hidden"); // Скрываем форму

//     // Показываем все скрытые infoBlock
//     document.querySelectorAll(".info-block").forEach(block => block.classList.remove("hidden"));
// }

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".button-cancel-form").addEventListener("click", handleCancel);
// });

function setupEditAndDelete(infoBlock, formContainer) {
    const editButton = infoBlock.querySelector(".edit-button");
    const deleteButton = infoBlock.querySelector(".delete-button");
    const addProductButton = infoBlock.querySelector(".add-product");

    editButton.addEventListener("click", function () {
        document.querySelectorAll(".info-block").forEach(block => block.classList.add("hidden"));

        formContainer.querySelector(".input-name-human").value = infoBlock.querySelector(".info-name").textContent;
        formContainer.querySelector("#gender").value = infoBlock.querySelector(".info-gender").textContent;
        formContainer.querySelector("#product-list").value = infoBlock.querySelector(".info-product").textContent;
        formContainer.querySelector("#product-list-article").value = infoBlock.querySelector(".info-productName").textContent;
        formContainer.querySelector("#product-list-color").value = infoBlock.querySelector(".info-color").textContent;
        formContainer.querySelector("#quality-items").value = infoBlock.querySelector(".info-quantityItems").textContent;
        formContainer.querySelector("#product-list-size").value = infoBlock.querySelector(".info-productSize").textContent;
        formContainer.querySelector("#chest-size").value = infoBlock.querySelector(".info-chestSize").textContent;
        formContainer.querySelector("#quality-logo").value = infoBlock.querySelector(".info-qualityLogo").textContent;
        formContainer.querySelector("#quality-embroideries").value = infoBlock.querySelector(".info-qualityEmbroideries").textContent;

        formContainer.classList.remove("hidden");
        infoBlock.remove();
    });

    deleteButton.addEventListener("click", function () {
        infoBlock.remove();
    });

    if (addProductButton) {
        addProductButton.addEventListener("click", function () {
            handleAddProduct(infoBlock, formContainer);
        });
    }
    
}



function handleAddProduct(parentInfoBlock, formContainer) {
    resetForm(formContainer);

    // Заполняем имя и пол из родителя
    const name = parentInfoBlock.querySelector(".info-name").textContent;
    const gender = parentInfoBlock.querySelector(".info-gender").textContent;

    formContainer.querySelector(".input-name-human").value = name;
    formContainer.querySelector("#gender").value = gender;

    // Скрываем текущий infoBlock
    parentInfoBlock.classList.add("hidden");

    formContainer.classList.remove("hidden");

    // Удаляем старый обработчик, если есть
    const oldSaveButton = formContainer.querySelector(".button-save-form");
    const newSaveButton = oldSaveButton.cloneNode(true);
    oldSaveButton.parentNode.replaceChild(newSaveButton, oldSaveButton);

    newSaveButton.addEventListener("click", function () {
        const name = document.querySelector(".input-name-human").value;
        const gender = document.querySelector("#gender").value;
        const product = document.querySelector("#product-list").value;
        const productName = document.querySelector("#product-list-article").value;
        const color = document.querySelector("#product-list-color").value;
        const quantityItems = document.querySelector("#quality-items").value;
        const productSize = document.querySelector("#product-list-size").value;
        const chestSize = document.querySelector("#chest-size").value;
        const qualityLogo = document.querySelector("#quality-logo").value;
        const qualityEmbroideries = document.querySelector("#quality-embroideries").value;

        if (!name || !gender || !product || !productName || !color || !quantityItems || !productSize || !chestSize || !qualityLogo || !qualityEmbroideries) {
            alert("Будь ласка, заповніть всі поля!");
            return false;
        }

        const newProductBlock = document.createElement("div");
        newProductBlock.classList.add("info-block-product");
        newProductBlock.innerHTML = `
            <div class="info-block-second">
                <p><span class="info-container-last">${product} ${productName} - ${color} - ${quantityItems} шт</span></p>
                <p class="hidden">Ім'я: <span class="info-name">${name}</span></p>
                <p class="hidden">Стать: <span class="info-gender">${gender}</span></p>
                <p class="hidden">Виріб: <span class="info-product">${product}</span></p>
                <p class="hidden">Назва виробу: <span class="info-productName">${productName}</span></p>
                <p class="hidden">Колір: <span class="info-color">${color}</span></p>
                <p class="hidden">Кількість: <span class="info-quantityItems">${quantityItems}</span></p>
                <p class="info-productSize-cont">Розмір: <span class="info-productSize">${productSize}</span></p>
                <p>ОГ/ОС: <span class="info-chestSize">${chestSize} см</span></p>
                <p>Вишивка лого - <span class="info-qualityLogo">${qualityLogo}</span></p>
                <p>Вишивка імені - <span class="info-qualityEmbroideries">${qualityEmbroideries}</span></p>
                <div class="button-container">
                    <button class="edit-button info-block-button">Редагувати</button>
                    <button class="delete-button info-block-button">Видалити</button>
                </div>
            </div>
        `;

        const buttonContainer = Array.from(parentInfoBlock.children).find(child => 
            child.classList.contains("button-container")
        );
        
        if (buttonContainer) {
            parentInfoBlock.insertBefore(newProductBlock, buttonContainer);
        } else {
            parentInfoBlock.appendChild(newProductBlock);
        }
        

        setupEditAndDelete(newProductBlock, formContainer);
        resetForm(formContainer);
        formContainer.classList.add("hidden");

        // Показываем родительский блок снова
        parentInfoBlock.classList.remove("hidden");
    });
}


function resetForm(formContainer) {
    if (!formContainer) return;
    formContainer.classList.add("hidden");
    const fields = [
        ".input-name-human", "#gender", "#product-list", "#product-list-article", 
        "#product-list-color", "#quality-items", "#product-list-size", 
        "#chest-size", "#quality-logo", "#quality-embroideries"
    ];
    fields.forEach(selector => {
        const field = formContainer.querySelector(selector);
        if (field) field.value = "";
    });
}
