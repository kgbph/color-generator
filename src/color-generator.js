'use strict';

/**
 * Color generator class
 */
export default class {

    /**
     * Class constructor
     */
    constructor() {
        this.hue = Math.random();
        this.saturation = 0.5;
        this.value = 0.95;
        this.harmony = 0.618033988749895;
    }

    /**
     * Generate color
     */
    generateColor() {
        this.hue = this.hue + this.harmony;
        this.hue = this.hue % 1;

        let h = this.hue;
        let s = this.saturation;
        let v = this.value;

        let r, g, b, i, f, p, q, t;

        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }

        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }

    /**
     * Generate RGB string
     */
    generateRGB() {
        let color = this.generateColor();

        return `rgb(${color.r}, ${color.g}, ${color.b})`;
    }

    /**
     * Generate color hex string
     */
    generateHex() {
        let color = this.generateColor();

        return '#' + ((1 << 24) + (color.r << 16) + (color.g << 8) + color.b).toString(16).slice(1);
    }
}
