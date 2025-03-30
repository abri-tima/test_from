
// document.addEventListener("DOMContentLoaded", function () {
//     const addHumanButton = document.querySelector(".button-add-human");
//     const formContainer = document.querySelector("#form-container");
//     const buttonSaveContainer = document.querySelector(".button-save");
//     const saveButton = document.createElement("button");
//     saveButton.textContent = "Зберегти";
//     saveButton.classList.add("button-save-form");
//     buttonSaveContainer.appendChild(saveButton);

//     const infoBlock = document.createElement("div");
//     infoBlock.classList.add("info-block", "hidden");
//     document.body.appendChild(infoBlock);

//     addHumanButton.addEventListener("click", function () {
//         formContainer.classList.remove("hidden");
//     });

//     saveButton.addEventListener("click", function () {
//         const name = document.querySelector(".input-name-human").value;
//         const gender = document.querySelector("#gender").value;
//         const product = document.querySelector("#product-list").value;
//         const productName = document.querySelector(".product-list-article").value;
//         const color = document.querySelectorAll(".product-list")[1].value;
//         const quantity = document.querySelector("#quality").value;

//         if (!name || !gender || !product || !productName || !color || !quantity) {
//             alert("Будь ласка, заповніть всі поля!");
//             return;
//         }

//         infoBlock.innerHTML = `
//             <p>Ім'я: ${name}</p>
//             <p>Стать: ${gender}</p>
//             <p>Виріб: ${product}</p>
//             <p>Назва виробу: ${productName}</p>
//             <p>Колір: ${color}</p>
//             <p>Кількість: ${quantity}</p>
//             <button class="edit-button">Редагувати</button>
//             <button class="delete-button">Видалити</button>
//         `;

//         formContainer.classList.add("hidden");
//         infoBlock.classList.remove("hidden");

//         document.querySelector(".edit-button").addEventListener("click", function () {
//             formContainer.classList.remove("hidden");
//             infoBlock.classList.add("hidden");
//         });

//         document.querySelector(".delete-button").addEventListener("click", function () {
//             infoBlock.innerHTML = "";
//             infoBlock.classList.add("hidden");
//         });
//     });
//     document.querySelector(".edit-button").addEventListener("click", function () {
//         document.querySelector(".info-block").style.display = "none";
//         document.querySelector(".form-container").style.display = "block"; // Показываем форму
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const addHumanButton = document.querySelector(".button-add-human");
    const formContainer = document.querySelector("#form-container");
    const saveButton = document.querySelector(".button-save-form");

    // Добавляем скрытый блок с информацией
    const infoBlock = createInfoBlock();

    // Слушатель для кнопки "Додати людину"
    addHumanButton.addEventListener("click", function () {
        showForm(formContainer, infoBlock);
    });

    // Слушатель для кнопки "Зберегти"
    saveButton.addEventListener("click", function () {
        handleSave(formContainer, infoBlock);
    });
});

// Функция для создания скрытого блока с информацией
function createInfoBlock() {
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block", "hidden");
    document.body.appendChild(infoBlock);
    return infoBlock;
}

// Функция для отображения формы
function showForm(formContainer, infoBlock) {
    formContainer.classList.remove("hidden");
    infoBlock.classList.add("hidden");
}

// Функция для обработки сохранения данных
function handleSave(formContainer, infoBlock) {
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

    // Проверка на пустые поля
    if (!name || !gender || !product || !productName || !color || !quantityItems || !productSize || !chestSize || !qualityLogo || !qualityEmbroideries) {
        alert("Будь ласка, заповніть всі поля!");
        return;
    }

    // Отображаем информацию
    infoBlock.innerHTML = `
        <p>Ім'я: ${name}</p>
        <p>Стать: ${gender}</p>
        <p>Виріб: ${product}</p>
        <p>Назва виробу: ${productName}</p>
        <p>Колір: ${color}</p>
        <p>Кількість: ${quantityItems}</p>
        <p>Розмір: ${productSize}</p>
        <p>ОГ/ОС: ${chestSize}</p>
        <p>Кілкість лого: ${qualityLogo}</p>
        <p>Кількість вишивки: ${qualityEmbroideries}</p>

        <button class="edit-button">Редагувати</button>
        <button class="delete-button">Видалити</button>
    `;

    formContainer.classList.add("hidden");
    infoBlock.classList.remove("hidden");

    // Слушатели для кнопок редактирования и удаления
    setupEditAndDelete(infoBlock, formContainer);
}

// Функция для установки слушателей кнопок "Редагувати" и "Видалити"
function setupEditAndDelete(infoBlock, formContainer) {
    const editButton = infoBlock.querySelector(".edit-button");
    const deleteButton = infoBlock.querySelector(".delete-button");

    // Слушатель для кнопки "Редагувати"
    editButton.addEventListener("click", function () {
        formContainer.classList.remove("hidden");
        infoBlock.classList.add("hidden"); // Скрываем infoBlock
    });

    // Слушатель для кнопки "Видалити"
    deleteButton.addEventListener("click", function () {
        infoBlock.innerHTML = "";
        infoBlock.classList.add("hidden"); // Скрываем infoBlock
    // Скрываем форму и очищаем поля
        formContainer.classList.add("hidden");
        formContainer.querySelector(".input-name-human").value = "";
        formContainer.querySelector("#gender").value = "";
        formContainer.querySelector("#product-list").value = "";
        formContainer.querySelector("#product-list-article").value = "";
        formContainer.querySelector("#product-list-color").value = "";
        formContainer.querySelector("#quality-items").value = "";
        formContainer.querySelector("#product-list-size").value = "";
        formContainer.querySelector("#chest-size").value = "";
        formContainer.querySelector("#quality-logo").value = "";
        formContainer.querySelector("#quality-embroideries").value = "";
    });
}