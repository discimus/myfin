function getRandomPastelColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    // Converter RGB para HSL para ajustar o tom
    const hsl = rgbToHsl(r, g, b);
  
    // Ajustar o tom para um valor pastel
    hsl[2] = 70 + Math.random() * 10; // Ajustar a luminosidade
    hsl[1] = 60 + Math.random() * 20; // Ajustar a saturação
  
    // Converter HSL de volta para RGB
    const rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
  
    // Converter RGB para uma string hexadecimal
    const hexColor = rgbToHex(rgb[0], rgb[1], rgb[2]);
  
    return hexColor;
  }
  
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
  
    let h, s, l;
  
    if (delta === 0) {
      h = 0;
    } else if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
  
    h = Math.round(h * 60);
  
    if (h < 0) {
      h += 360;
    }
  
    l = (max + min) / 2;
  
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
    return [h, s * 100, l * 100];
  }
  
  function hslToRgb(h, s, l) {
    h /= 60;
    s /= 100;
    l /= 100;
  
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h % 2) - 1));
    const m = l - c / 2;
  
    let r, g, b;
  
    if (h >= 0 && h < 1) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 1 && h < 2) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 2 && h < 3) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 3 && h < 4) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 4 && h < 5) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }
  
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
  
    return [r, g, b];
  }
  
  function rgbToHex(r, g, b) {
    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }