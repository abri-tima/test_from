document.addEventListener("DOMContentLoaded", function () {
    const addHumanButton = document.querySelector(".button-add-human");
    const formContainer = document.querySelector("#form-container");
    const saveButton = document.querySelector(".button-save-form");
    const infoWrapper = document.createElement("div"); // общий контейнер
    infoWrapper.classList.add("info-container");
    document.body.appendChild(infoWrapper);

    let editTarget = null; // если редактируем — тут ссылка

    addHumanButton.addEventListener("click", function () {
        resetForm(formContainer);
        formContainer.classList.remove("hidden");
    
        // Сховати всі блоки
        document.querySelectorAll(".human-block").forEach(h => h.classList.add("hidden"));
        document.querySelectorAll(".add-product").forEach(btn => btn.classList.add("hidden"));
    
        editTarget = null;
    });

    saveButton.addEventListener("click", function () {
        const formData = getFormData();
        if (!formData) return;
    
        if (editTarget && editTarget instanceof Element) {
            // Редагування
            updateProductBlock(editTarget, formData);
        } else if (editTarget && editTarget.container) {
            // Додавання виробу
            const newProduct = createProductBlock(formData);
            editTarget.container.appendChild(newProduct);
        } else {
            // Додавання нової людини
            createHumanBlock(formData);
        }
    
        // Сховати форму
        formContainer.classList.add("hidden");
        resetForm(formContainer);
    
        // Показати всі блоки назад
        document.querySelectorAll(".human-block").forEach(h => h.classList.remove("hidden"));
        document.querySelectorAll(".add-product").forEach(btn => btn.classList.remove("hidden"));
    
        editTarget = null;
    });
    

    function getFormData() {
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
            return null;
        }

        return { name, gender, product, productName, color, quantityItems, productSize, chestSize, qualityLogo, qualityEmbroideries };
    }

    function createHumanBlock(data) {
        const humanBlock = document.createElement("div");
        humanBlock.classList.add("human-block");

        const nameBlock = document.createElement("div");
        nameBlock.classList.add("info-block-first");
        nameBlock.innerHTML = `<p><span class="info-container-first">${data.name}_${data.gender}</span></p>`;

        const productsContainer = document.createElement("div");
        productsContainer.classList.add("products-container");

        const productBlock = createProductBlock(data);

        const addProductBtn = document.createElement("button");
        addProductBtn.textContent = "Додати виріб";
        addProductBtn.classList.add("add-product", "info-block-button");
        addProductBtn.style = "font-size: 20px; font-weight: 800; padding: 3px 30px;";
        addProductBtn.addEventListener("click", () => {
            resetForm(formContainer);
            formContainer.classList.remove("hidden");
        
            // Скрываем все human-блоки и кнопки "додати виріб"
            document.querySelectorAll(".human-block").forEach(h => h.classList.add("hidden"));
            document.querySelectorAll(".add-product").forEach(btn => btn.classList.add("hidden"));
        
            // Заполняем имя и стать
            document.querySelector(".input-name-human").value = data.name;
            document.querySelector("#gender").value = data.gender;
        
            // Устанавливаем цель добавления
            editTarget = { container: productsContainer, name: data.name, gender: data.gender };
        });
        

        productsContainer.appendChild(productBlock);
        humanBlock.appendChild(nameBlock);
        humanBlock.appendChild(productsContainer);
        humanBlock.appendChild(addProductBtn);

        infoWrapper.appendChild(humanBlock);
    }

    function createProductBlock(data) {
        const block = document.createElement("div");
        block.classList.add("info-block-product");

        block.innerHTML = `
            <div class="info-block-second">
                <p><span class="info-container-last">${data.product} ${data.productName} - ${data.color} - ${data.quantityItems} шт</span></p>
                <p class="hidden">Ім'я: <span class="info-name">${data.name}</span></p>
                <p class="hidden">Стать: <span class="info-gender">${data.gender}</span></p>
                <p class="hidden">Виріб: <span class="info-product">${data.product}</span></p>
                <p class="hidden">Назва виробу: <span class="info-productName">${data.productName}</span></p>
                <p class="hidden">Колір: <span class="info-color">${data.color}</span></p>
                <p class="hidden">Кількість: <span class="info-quantityItems">${data.quantityItems}</span></p>
                <p class="info-productSize-cont">Розмір: <span class="info-productSize">${data.productSize}</span></p>
                <p>ОГ/ОС: <span class="info-chestSize">${data.chestSize} см</span></p>
                <p>Вишивка лого - <span class="info-qualityLogo">${data.qualityLogo}</span></p>
                <p>Вишивка імені - <span class="info-qualityEmbroideries">${data.qualityEmbroideries}</span></p>
                <div class="button-container">
                    <button class="edit-button info-block-button">Редагувати</button>
                    <button class="delete-button info-block-button">Видалити</button>
                </div>
            </div>
        `;

        const editButton = block.querySelector(".edit-button");
        const deleteButton = block.querySelector(".delete-button");

        editButton.addEventListener("click", () => {
            formContainer.classList.remove("hidden");
        
            // Скрываем всех людей и кнопки добавления виробів
            document.querySelectorAll(".human-block").forEach(h => h.classList.add("hidden"));
            document.querySelectorAll(".add-product").forEach(btn => btn.classList.add("hidden"));
        
            fillFormWithData(block);
            editTarget = block;
        });
        

        deleteButton.addEventListener("click", () => {
            const productsContainer = block.parentElement;
            const humanBlock = productsContainer.closest(".human-block");
        
            block.remove();
        
            // Проверяем: остались ли ещё вироби?
            const remainingProducts = productsContainer.querySelectorAll(".info-block-product");
            if (remainingProducts.length === 0) {
                humanBlock.remove();
            }
        });

        return block;
    }

    function updateProductBlock(block, data) {
        const newBlock = createProductBlock(data);
        block.replaceWith(newBlock); // ← теперь сработает, т.к. block — DOM-элемент
    }
    
    

    function fillFormWithData(block) {
        document.querySelector(".input-name-human").value = block.querySelector(".info-name").textContent;
        document.querySelector("#gender").value = block.querySelector(".info-gender").textContent;
        document.querySelector("#product-list").value = block.querySelector(".info-product").textContent;
        document.querySelector("#product-list-article").value = block.querySelector(".info-productName").textContent;
        document.querySelector("#product-list-color").value = block.querySelector(".info-color").textContent;
        document.querySelector("#quality-items").value = block.querySelector(".info-quantityItems").textContent;
        document.querySelector("#product-list-size").value = block.querySelector(".info-productSize").textContent;
        document.querySelector("#chest-size").value = block.querySelector(".info-chestSize").textContent.replace(" см", "");
        document.querySelector("#quality-logo").value = block.querySelector(".info-qualityLogo").textContent;
        document.querySelector("#quality-embroideries").value = block.querySelector(".info-qualityEmbroideries").textContent;
    }

    function resetForm(container) {
        container.querySelectorAll("input, select").forEach(el => el.value = "");
    }

    function showSuccessMessage(text) {
        const msg = document.createElement('div');
        msg.textContent = text;
        msg.style.position = 'fixed';
        msg.style.bottom = '30px';
        msg.style.left = '50%';
        msg.style.transform = 'translateX(-50%)';
        msg.style.background = '#EE6700';
        msg.style.color = '#fff';
        msg.style.padding = '12px 24px';
        msg.style.borderRadius = '30px';
        msg.style.fontSize = '18px';
        msg.style.fontWeight = 'bold';
        msg.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        msg.style.zIndex = 9999;
        msg.style.opacity = 0;
        msg.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
        document.body.appendChild(msg);
      
        setTimeout(() => {
          msg.style.opacity = 1;
          msg.style.transform = 'translateX(-50%) translateY(-10px)';
        }, 100);
      
        setTimeout(() => {
          msg.style.opacity = 0;
          msg.style.transform = 'translateX(-50%) translateY(0)';
          setTimeout(() => msg.remove(), 500);
        }, 3000);
      }
      
});
