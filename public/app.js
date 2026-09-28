const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-navigation");
const signalButtons = document.querySelectorAll(".signal-button");

const signalDetails = {
  order: { metric: "$48,260", change: "+12.4% vs last week", kicker: "NEW ORDER", title: "Northwind Traders", copy: "Order SO-1087 is ready for fulfillment.", sideValue: "14", sideLabel: "orders awaiting pick", note: "Warehouse queue updated now", progress: "72%" },
  stock: { metric: "$46,980", change: "Inventory signal updated", kicker: "LOW STOCK", title: "Metro Blend Coffee", copy: "Replenishment recommendation is ready.", sideValue: "3", sideLabel: "items need review", note: "Purchasing context updated now", progress: "38%" },
  margin: { metric: "$45,710", change: "Margin variance identified", kicker: "MARGIN SHIFT", title: "Coastal wholesale", copy: "Pricing context is ready for review.", sideValue: "6.8%", sideLabel: "forecast margin change", note: "Finance view updated now", progress: "56%" }
};

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}" aria-hidden="true"></i>`;
  lucide.createIcons();
});

document.querySelectorAll(".site-navigation a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

signalButtons.forEach((button) => button.addEventListener("click", () => {
  const detail = signalDetails[button.dataset.signal];
  signalButtons.forEach((item) => {
    item.classList.toggle("is-active", item === button);
    item.setAttribute("aria-selected", String(item === button));
  });
  document.querySelector("#metric-value").textContent = detail.metric;
  document.querySelector("#metric-change").textContent = detail.change;
  document.querySelector("#detail-kicker").textContent = detail.kicker;
  document.querySelector("#detail-title").textContent = detail.title;
  document.querySelector("#detail-copy").textContent = detail.copy;
  document.querySelector("#side-value").textContent = detail.sideValue;
  document.querySelector("#side-label").textContent = detail.sideLabel;
  document.querySelector("#side-note").textContent = detail.note;
  document.querySelector("#progress-bar").style.width = detail.progress;
}));

lucide.createIcons();