// Rolagem suave para links de âncora internos
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($.attr(this, 'href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 20
            }, 600);
        }
    });
});

// Função para trocar texto do botão sem afetar o ícone
function changeButtonText(e, newText) {
    var buttonText = e.trigger.querySelector('.button-text');
    if (buttonText) {
        buttonText.textContent = newText;
    }
}

// Copiar e-mail para área de transferência
function copiarEmail() {
    var email = "luimar.mota@gmail.com";
    var botao = document.getElementById("copyBtn");

    if (!navigator.clipboard) {
        // Fallback para navegadores mais antigos
        var textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
            document.execCommand('copy');
            changeButtonText({ trigger: botao }, "Copiado!");
        } catch (err) {
            console.error("Erro ao copiar:", err);
        }
        document.body.removeChild(textarea);
        setTimeout(function () {
            changeButtonText({ trigger: botao }, 'Copiar E-mail');
        }, 2000);
        return;
    }

    navigator.clipboard.writeText(email)
        .then(function () {
            changeButtonText({ trigger: botao }, "Copiado!");
            botao.disabled = true;
            setTimeout(function () {
                changeButtonText({ trigger: botao }, 'Copiar E-mail');
                botao.disabled = false;
            }, 2000);
        })
        .catch(function (err) {
            console.error("Erro ao copiar:", err);
        });
}
