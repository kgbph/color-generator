# Color Generator
General purpose random color generator

[![Build Status](https://travis-ci.org/kgbph/color-generator.svg?branch=master)](https://travis-ci.org/kgbph/color-generator)
[![License](https://img.shields.io/github/license/kgbph/color-generator.svg?style=popout)](https://github.com/kgbph/color-generator/blob/master/LICENSE)
[![](https://img.shields.io/github/release/kgbph/color-generator.svg)](https://github.com/kgbph/color-generator/releases)

## Setup
 - Download `color-generator.js`.
 - Include it in your project.

    ``` html
    <script src="path_to_file/color-generator.js"></script>
    ```

## Usage
 - Instantiate `ColorGenerator` object.

    ``` javascript
    var colorGenerator = new ColorGenerator();
    ```

 - Generate color.
 
    ``` javascript
    var color = colorGenerator.generateColor();
    ```

## Notes
 - The color generated is `rgb(r, g, b)` formatted string.
 - It is recommended to use the same object to generate subsequent colors.

## License
Color Generator is MIT licensed, as found in the LICENSE file.
