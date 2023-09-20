"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form__body');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);
        if(error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message); 
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert("Wystąpił błąd podczas wysyłania danych. Spróbuj ponownie później.");
                form.classList.remove('_sending');
            }
        }
        else {
            alert('Wypełnij obowiązkowe pola!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else if (input.getAttribute("type") === "checkbox" && !input.checked) {
                    formAddError(input);
                    error++;
            }
            else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

const formInput = document.querySelector('.checkbox-custom');
const checkboxCustomLabel = document.querySelector('.checkbox-custom-label');

const observeFormInputChanges = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.attributeName === 'class') {
      const isError = formInput.classList.contains('_error');
      if (isError) {
        checkboxCustomLabel.style.color = '#FF0000D9';
        checkboxCustomLabel.style.textDecoration = 'underline';
      } else {
        checkboxCustomLabel.style.color = '#FFFFFF';
        checkboxCustomLabel.style.textDecoration = '';
      }
    }
  }
};

const observer = new MutationObserver(observeFormInputChanges);

observer.observe(formInput, { attributes: true });
});