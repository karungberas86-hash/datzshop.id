function copyPayment(number, button) {
  const originalText = button.innerText;

  function berhasil() {
    button.innerText = "✓ BERHASIL DISALIN";

    setTimeout(function () {
      button.innerText = originalText;
    }, 2000);
  }

  function gagal() {
    button.innerText = "⚠ GAGAL MENYALIN";

    setTimeout(function () {
      button.innerText = originalText;
    }, 2000);
  }

  // Cara utama
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(number)
      .then(berhasil)
      .catch(function () {
        fallbackCopy(number, berhasil, gagal);
      });
  } else {
    fallbackCopy(number, berhasil, gagal);
  }
}

function fallbackCopy(text, success, failed) {
  const textarea = document.createElement("textarea");

  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";

  document.body.appendChild(textarea);

  textarea.focus();
  textarea.select();

  try {
    const result = document.execCommand("copy");

    document.body.removeChild(textarea);

    if (result) {
      success();
    } else {
      failed();
    }
  } catch (error) {
    document.body.removeChild(textarea);
    failed();
  }
}
