import elements from './sample.js';

document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('periodic-table');
    const popup = document.getElementById('element-popup');
    const closePopup = document.getElementById('close-popup');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const categoryMapping = {
        'Alkali Metals': 'alkali-metal',
        'Alkaline Earth Metals': 'alkaline-earth',
        'Transition Metals': 'transition-metal',
        'Post-Transition Metals': 'post-transition-metal',
        'Metalloids': 'metalloid',
        'Nonmetals': 'nonmetal',
        'Halogens': 'halogen',
        'Noble Gases': 'noble-gas',
        'Lanthanides': 'lanthanide',
        'Actinides': 'actinide',
    };

    function highlightGroup(category) {
        document.querySelectorAll('.element').forEach(el => {
            if (el.classList.contains(category)) {
                el.classList.remove('dimmed');
                el.classList.add('highlighted');
            } else {
                el.classList.add('dimmed');
            }
        });
        overlay.classList.add('active');
    }

    function resetHighlight() {
        document.querySelectorAll('.element').forEach(el => {
            el.classList.remove('dimmed', 'highlighted');
        });
        overlay.classList.remove('active');
    }

    const positions = {
        1: [1, 1], 2: [18, 1], // H, He
        3: [1, 2], 4: [2, 2], // Li, Be
        5: [13, 2], 6: [14, 2], 7: [15, 2], 8: [16, 2], 9: [17, 2], 10: [18, 2], // B, C, N, O, F, Ne
        11: [1, 3], 12: [2, 3], // Na, Mg
        13: [13, 3], 14: [14, 3], 15: [15, 3], 16: [16, 3], 17: [17, 3], 18: [18, 3], // Al, Si, P, S, Cl, Ar
        19: [1, 4], 20: [2, 4], // K, Ca
        21: [3, 4], 22: [4, 4], 23: [5, 4], 24: [6, 4], 25: [7, 4], 26: [8, 4], 27: [9, 4], 28: [10, 4], 29: [11, 4], 30: [12, 4], // Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn
        31: [13, 4], 32: [14, 4], 33: [15, 4], 34: [16, 4], 35: [17, 4], 36: [18, 4], // Ga, Ge, As, Se, Br, Kr
        37: [1, 5], 38: [2, 5], // Rb, Sr
        39: [3, 5], 40: [4, 5], 41: [5, 5], 42: [6, 5], 43: [7, 5], 44: [8, 5], 45: [9, 5], 46: [10, 5], 47: [11, 5], 48: [12, 5], // Y, Zr, Nb, Mo, Tc, Ru, Rh, Pd, Ag, Cd
        49: [13, 5], 50: [14, 5], 51: [15, 5], 52: [16, 5], 53: [17, 5], 54: [18, 5], // In, Sn, Sb, Te, I, Xe
        55: [1, 6], 56: [2, 6], // Cs, Ba
        72: [4, 6], 73: [5, 6], 74: [6, 6], 75: [7, 6], 76: [8, 6], 77: [9, 6], 78: [10, 6], 79: [11, 6], 80: [12, 6], // Hf, Ta, W, Re, Os, Ir, Pt, Au, Hg
        81: [13, 6], 82: [14, 6], 83: [15, 6], 84: [16, 6], 85: [17, 6], 86: [18, 6], // Tl, Pb, Bi, Po, At, Rn
        87: [1, 7], 88: [2, 7], // Fr, Ra
        104: [4, 7], 105: [5, 7], 106: [6, 7], 107: [7, 7], 108: [8, 7], 109: [9, 7], 110: [10, 7], 111: [11, 7], 112: [12, 7], // Rf, Db, Sg, Bh, Hs, Mt, Ds, Rg, Cn
        113: [13, 7], 114: [14, 7], 115: [15, 7], 116: [16, 7], 117: [17, 7], 118: [18, 7], // Nh, Fl, Mc, Lv, Ts, Og
        57: [3, 9], 58: [4, 9], 59: [5, 9], 60: [6, 9], 61: [7, 9], 62: [8, 9], 63: [9, 9], 64: [10, 9], 65: [11, 9], 66: [12, 9], 67: [13, 9], 68: [14, 9], 69: [15, 9], 70: [16, 9], 71: [17, 9], // Lanthanides
        89: [3, 10], 90: [4, 10], 91: [5, 10], 92: [6, 10], 93: [7, 10], 94: [8, 10], 95: [9, 10], 96: [10, 10], 97: [11, 10], 98: [12, 10], 99: [13, 10], 100: [14, 10], 101: [15, 10], 102: [16, 10], 103: [17, 10] // Actinides
    };

    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category}`;
        const pos = positions[element.number];

        if (pos) {
            elementDiv.style.gridColumn = pos[0];
            elementDiv.style.gridRow = pos[1];
        }

        elementDiv.innerHTML = `
            <span class="number">${element.number}</span>
            <span class="symbol">${element.symbol}</span>
            <span class="name">${element.name}</span>
        `;

        elementDiv.addEventListener('click', () => {
            document.getElementById('element-name').textContent = element.name;
            document.getElementById('discovered').textContent = element.discovered;
            document.getElementById('melting-point').textContent = element.meltingPoint;
            document.getElementById('boiling-point').textContent = element.boilingPoint;
            document.getElementById('electrons-per-shell').textContent = element.electronsPerShell;
            document.getElementById('electron-configuration').textContent = element.electronConfiguration;

            popup.classList.add('active');
        });

        tableContainer.appendChild(elementDiv);
    });

    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
        resetHighlight();
    });

    overlay.addEventListener('click', () => {
        resetHighlight();
    });

    document.querySelectorAll('.legend-item').forEach(item => {
        const legendText = item.textContent.trim();
        const category = categoryMapping[legendText];
        item.addEventListener('click', () => {
            highlightGroup(category);
        });
    });
});

const categoryTranslations = {
    'alkali-metal': 'Ալկալիական մետաղներ',
    'alkaline-earth': 'Հողալկալիական մետաղներ',
    'transition-metal': 'Անցումային մետաղներ',
    'post-transition-metal': 'Այլ մետաղներ',
    'metalloid': 'Մետաղանմաններ',
    'nonmetal': 'Այլ ոչ մետաղներներ',
    'halogen': 'Հալոգեններ',
    'noble-gas': 'Ազնիվ գազեր',
    'lanthanide': 'Լանթանիդներ',
    'actinide': 'Ակտինիդներ'
};

function highlightCategory(category) {
    document.querySelectorAll('.element').forEach(element => {
        if (element.classList.contains(category)) {
            element.classList.add('highlighted-category');
        } else {
            element.classList.remove('highlighted-category');
        }
    });
}

document.querySelectorAll('.legend-item').forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        const category = item.getAttribute('data-category');
        highlightCategory(category);
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.element') && !event.target.closest('.legend-item')) {
        document.querySelectorAll('.element').forEach(element => {
            element.classList.remove('highlighted-category');
        });
    }
});
