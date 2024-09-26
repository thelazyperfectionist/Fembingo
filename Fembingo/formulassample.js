function calculatePercentage() {
    const atomicMass = parseFloat(document.getElementById('atomic-mass').value);
    const molarMass = parseFloat(document.getElementById('molar-mass').value);
    
    if (isNaN(atomicMass) || isNaN(molarMass) || molarMass <= 0) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }
    const percentage = (atomicMass / molarMass) * 100;
    document.getElementById('result').textContent = `Percentage Composition: ${percentage.toFixed(2)}%`;
}