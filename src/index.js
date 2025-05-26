import "./styles.css";

export function initDropdowns() {
    console.log("initDropdowns is running");
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        const menu = dropdown.querySelector(".dropdown-menu");
        // Return 'click' or 'hover' as options for the dropdown
        // If neither then default to 'click'
        const toggleType = dropdown.dataset.toggleOpen || "click";

        // If the dropdown is set to click to open
        if (toggleType === "click") {
            toggle.addEventListener("click", (e) => {
                e.stopPropagation();
                menu.classList.toggle("visible");
            });
            document.addEventListener("click", () => {
                menu.classList.remove("visible");
            });
        }
        // If the dropdown is set to hover to open
        else if (toggleType === "hover") {
            toggle.addEventListener("mouseenter", () => {
                // add instead of remove incase the menu was already open
                // in which case toggling would reverse functionality
                menu.classList.add("visible");
            });
            toggle.addEventListener("mouseleave", () => {
                menu.classList.remove("visible");
            });
        }
    });
}
