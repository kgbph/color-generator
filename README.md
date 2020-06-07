# Color Generator
General purpose random color generator

[![Build Status](https://cloud.drone.io/api/badges/kgbph/color-generator/status.svg)](https://cloud.drone.io/kgbph/color-generator)
[![License](https://img.shields.io/github/license/kgbph/color-generator.svg?style=popout)](https://github.com/kgbph/color-generator/blob/master/LICENSE)
[![](https://img.shields.io/github/release/kgbph/color-generator.svg)](https://github.com/kgbph/color-generator/releases)

## Usage
 - Download [color-generator.js](https://github.com/kgbph/color-generator/releases/latest).
 - Load script.

    ``` html
    <script src="color-generator.js"></script>
    ```
 - Instantiate `ColorGenerator` object.

    ``` javascript
    var colorGenerator = new ColorGenerator();
    ```

 - Generate color (RGB).
 
    ``` javascript
    var color = colorGenerator.generateRGB();
    // rgb(xxx, xxx, xxx)
    ```

 - Generate color (Hex).
 
    ``` javascript
    var color = colorGenerator.generateHex();
    // #XXXXXX
    ```

## License
Color Generator is MIT licensed, as found in the LICENSE file.
