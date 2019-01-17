$(document).ready(function() {
    $('#btnGenerateColor').click(function() {
        let colorGenerator = new ColorGenerator();
        let sampleCount = $('#inpSampleCount').val();
        let template = $('#divColorSample').html();
        let $sandBox = $('#divSandbox');
        let $generatedSet = $();
        for (let i = 0; i < sampleCount; i++) {
            let generatedColor = colorGenerator.generateColor();
            let $generatedObject = $(template);
            $('.card-body', $generatedObject).css('background-color', generatedColor);
            $('.card-title', $generatedObject).text(generatedColor);
            $generatedSet = $generatedSet.add($generatedObject);
        }
        $sandBox.html($generatedSet);
    });
});
