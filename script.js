let entropyLevel = 0;

function increaseEntropy() {
    // LOGIC DEFECT: Entropy should never exceed 100%, but there is no ceiling check here.
    // Additionally, the percentage calculation is slightly off math-wise.
    entropyLevel += Math.random() * 15;
    updateUI();
}

function resetEntropy() {
    entropyLevel = 0;
    updateUI();
}

function updateUI() {
    const gauge = document.getElementById('gauge-fill');
    const text = document.getElementById('entropy-value');
    
    gauge.style.width = entropyLevel + '%';
    text.innerText = entropyLevel.toFixed(2) + '%';

    // TODO: Change gauge color to bright neon red when entropy > 80
    // TODO: Add sound effect on noise injection
}

// INITIALIZATION
console.log("Project Chaos: Engine Warmup...");