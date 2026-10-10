// Rolagem suave para links de ancora internos
$(document).ready(function () {
    $("a[href^=\"#\"]").on("click", function (event) {
        var href = $.attr(this, "href");

        if (!href || href.length <= 1) {
            return;
        }

        var target = $(href);
        if (target.length) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: target.offset().top - 20
            }, 600);
        }
    });
});

// Menu mobile: abre no toque, fecha ao tocar fora, selecionar item ou pressionar Esc.
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-mobile").forEach(function (dropdown) {
        var trigger = dropdown.querySelector(".menu-mobile-botao");
        var menu = dropdown.querySelector(".menu-mobile-lista");

        if (!trigger || !menu) {
            return;
        }

        function setMenuOpen(isOpen) {
            dropdown.classList.toggle("is-open", isOpen);
            trigger.setAttribute("aria-expanded", String(isOpen));
        }

        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            setMenuOpen(!dropdown.classList.contains("is-open"));
        });

        menu.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                setMenuOpen(false);
                trigger.blur();
            }
        });

        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                setMenuOpen(false);
                trigger.blur();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setMenuOpen(false);
                trigger.blur();
            }
        });
    });
});

function setCopyFeedback(botao, isCopied) {
    botao.classList.toggle("is-copied", isCopied);
    botao.setAttribute("aria-label", isCopied ? "E-mail copiado" : "Copiar e-mail");
}

// Copiar e-mail para area de transferencia
function copiarEmail(event) {
    if (event) {
        event.preventDefault();
    }

    var email = "luimar.mota@gmail.com";
    var botao = document.getElementById("copyBtn");

    function showSuccess() {
        setCopyFeedback(botao, true);
        setTimeout(function () {
            setCopyFeedback(botao, false);
        }, 2000);
    }

    if (!navigator.clipboard) {
        var textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
            document.execCommand("copy");
            showSuccess();
        } catch (err) {
            console.error("Erro ao copiar:", err);
        }
        document.body.removeChild(textarea);
        return;
    }

    navigator.clipboard.writeText(email)
        .then(showSuccess)
        .catch(function (err) {
            console.error("Erro ao copiar:", err);
        });
}

// ============================================
// Lightbox para imagens de projetos
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("lightboxModal");
    var modalImg = document.getElementById("lightboxImg");
    var closeBtn = document.getElementById("lightboxClose");

    if (!modal || !modalImg) return;

    function openLightbox(src, alt) {
        modalImg.src = src;
        modalImg.alt = alt || "Visualização ampliada";
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Trava o scroll da página
    }

    function closeLightbox() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Restaura o scroll
        setTimeout(function () {
            modalImg.src = "";
        }, 250);
    }

    // Clique nas imagens da seção de mídia
    document.querySelectorAll(".projeto-media-item img").forEach(function (img) {
        img.addEventListener("click", function () {
            openLightbox(this.src, this.alt);
        });
    });

    // Fechar ao clicar no botão 'X'
    if (closeBtn) {
        closeBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            closeLightbox();
        });
    }

    // Fechar ao clicar fora da imagem ou na própria imagem aberta
    modal.addEventListener("click", function (e) {
        if (e.target !== closeBtn) {
            closeLightbox();
        }
    });

    // Fechar com a tecla ESC
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("is-open")) {
            closeLightbox();
        }
    });
});