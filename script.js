document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    // Window Controls Logic
    document.getElementById('min-btn').addEventListener('click', () => window.electronAPI.minimize());
    document.getElementById('max-btn').addEventListener('click', () => window.electronAPI.maximize());
    document.getElementById('close-btn').addEventListener('click', () => window.electronAPI.close());

    // Math Calculation Logic
    const calculate = () => {
        let expr = display.innerText;
        try {
            // Regex to separate numbers and operators
            const tokens = expr.match(/(\d+\.?\d*)|([\+\-\*\/])/g);
            if (!tokens) return;
            
            let total = parseFloat(tokens[0]);
            for (let i = 1; i < tokens.length; i += 2) {
                const op = tokens[i];
                const val = parseFloat(tokens[i+1]);
                if (op === '+') total += val;
                if (op === '-') total -= val;
                if (op === '*') total *= val;
                if (op === '/') total /= val;
            }
            display.innerText = Number.isFinite(total) ? +total.toFixed(8) : "Error!";
        } catch {
            display.innerText = "Error!";
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.innerText;
            if (val === 'C') {
                display.innerText = '0';
            } else if (val === '=') {
                calculate();
            } else {
                if (display.innerText === '0' && val !== '.') {
                    display.innerText = val;
                } else {
                    display.innerText += val;
                }
            }
        });
    });
});
