// what are you doing here ??

function format_date(dateString) {
  const date = new Date(dateString + "T00:00:00");
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const language = navigator.language || "en-US";

  if (timezone === "Asia/Ho_Chi_Minh" || language.startsWith("vi")) {
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(date);
  }

  if (
    timezone.startsWith("America/") ||
    language === "en-US" ||
    language.startsWith("en-US")
  ) {
    return date.getFullYear() + "/" +
      String(date.getMonth() + 1).padStart(2, "0") + "/" +
      String(date.getDate()).padStart(2, "0");
  }

  return new Intl.DateTimeFormat(language, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date);
}

document.querySelectorAll(".updated-date").forEach(element => {
  element.textContent = format_date(element.dataset.updated);
});

function copy_script(script) {
  navigator.clipboard.writeText(script).then(function() {
    Swal.fire({
      icon: "success",
      title: "Copied!",
      text: "The script has been copied to your clipboard !",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1B1F23"
    });
  });
}