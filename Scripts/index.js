function getHour() {
  const date = new Date().getHours();
  const h1 = document.getElementById("cheers");

  h1.textContent =
    date >= 6 && date < 12  ? "Buenos Días!" :
    date >= 12 && date < 18 ? "Buenas Tardes!" :
    date >= 18 && date < 21 ? "Buenas Noches!":
    "Buenas Noches!";
}

function getDate() {
  const now = new Date();

  const day = now.toLocaleDateString("es-ES", { weekday: "long" });
  const dayNumber = now.toLocaleDateString("es-ES", { day: "2-digit" });
  const month = now.toLocaleDateString("es-ES", { month: "long" });

  document.getElementById("dayName").textContent = day.toUpperCase();
  document.getElementById("dayNumber").textContent = dayNumber;
  document.getElementById("month").textContent = month.toUpperCase();
}

getDate();
getHour();

