// DOM-Elemente abrufen
const display = document.querySelector("#calculator-screen input") as HTMLInputElement;
const buttons = document.querySelectorAll(".calculator-button") as NodeListOf<HTMLButtonElement>; //Alle Buttons werden abgerufen

// Typen für die Berechnung
let currentInput: string = ""; // Aktuelle Eingabe
let previousInput: string = ""; // Vorherige Eingabe
let operator: string = ""; // Speichert den Operator

// Funktion zum Aktualisieren des Displays
// void, da kein wert zurückgegeben wird
const updateDisplay = (): void => {
  display.value = currentInput || "0"; // Zeige "0", wenn die Eingabe leer ist
};

const handleNumber = (number: string): void => {
  currentInput += number; // An Eingabe anhängen
  updateDisplay();
};

const handleOperator = (op: string): void => {
  if (currentInput === "") return; // Keine Aktion, wenn kein Wert eingegeben wurde
  if (previousInput !== "") {
    calculate(); // Vorherige Berechnung abschließen
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
};

const calculate = (): void => {
  if (previousInput === "" || currentInput === "") return;
  const prev: number = parseFloat(previousInput);
  const curr: number = parseFloat(currentInput);
  switch (operator) {
    case "+":
      currentInput = (prev + curr).toString();
      break;
    case "-":
      currentInput = (prev - curr).toString();
      break;
    case "×":
      currentInput = (prev * curr).toString();
      break;
    case "÷":
      currentInput = curr !== 0 ? (prev / curr).toString() : "Error";
      break;
    default:
      return;
  }
  operator = "";
  previousInput = "";
  updateDisplay();
};

const clearAll = (): void => {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
};

const handleBackspace = (): void => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
};

// Event-Listener für Buttons hinzufügen
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent || "";

    if (!isNaN(parseInt(value))) {
      handleNumber(value);
    } else if (value === "C") {
      clearAll();
    } else if (value === "←") {
      handleBackspace();
    } else if (value === "=") {
      calculate();
    } else {
      handleOperator(value);
    }
  });
});
