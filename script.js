document.addEventListener("DOMContentLoaded", () => {
    const entriesContainer = document.getElementById("entries");
    const totalAmountInput = document.getElementById("totalAmount");
    const addEntryButton = document.getElementById("addEntry");

    function calculateTotal() {
        let total = 0;
        document.querySelectorAll(".entry").forEach(entry => {
            const percentage = parseFloat(entry.querySelector(".percentage").value) || 0;
            const value = parseFloat(entry.querySelector(".value").value) || 0;
            total += (percentage / 100) * value;
        });
        totalAmountInput.value = total.toFixed(2);
    }

    function createEntry() {
        const entry = document.createElement("div");
        entry.className = "entry";

        // Label for Label Input
        const labelLabel = document.createElement("label");
        labelLabel.textContent = "Label";
        labelLabel.className = "input-label";
        
        const labelInput = document.createElement("input");
        labelInput.type = "text";
        labelInput.className = "label";
        labelInput.placeholder = "Label";

        // Label for Percentage Input
        const percentageLabel = document.createElement("label");
        percentageLabel.textContent = "Percentage in %";
        percentageLabel.className = "input-label";
        
        const percentageInput = document.createElement("input");
        percentageInput.type = "number";
        percentageInput.className = "percentage";
        percentageInput.placeholder = "Percentage";
        percentageInput.oninput = calculateTotal;

        // Label for Value Input
        const valueLabel = document.createElement("label");
        valueLabel.textContent = "Value";
        valueLabel.className = "input-label";
        
        const valueInput = document.createElement("input");
        valueInput.type = "number";
        valueInput.className = "value";
        valueInput.placeholder = "Value";
        valueInput.oninput = calculateTotal;

        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.onclick = () => addEntry();

        const removeButton = document.createElement("button");
        removeButton.textContent = "-";
        removeButton.onclick = () => {
            if (entriesContainer.children.length > 1) {
                entry.remove();
                calculateTotal();
            }
        };

        // Append labels and inputs in the entry
        entry.appendChild(labelLabel);
        entry.appendChild(labelInput);
        entry.appendChild(percentageLabel);
        entry.appendChild(percentageInput);
        entry.appendChild(valueLabel);
        entry.appendChild(valueInput);
        entry.appendChild(addButton);
        entry.appendChild(removeButton);

        entriesContainer.appendChild(entry);
    }

    function addEntry() {
        createEntry();
        calculateTotal();
    }

    addEntryButton.addEventListener("click", addEntry);

    // Initialize with one entry
    createEntry();
});
