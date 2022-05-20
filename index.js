var convert = require('xml-js');

function formatCXML (value) {
    var notas = value;
    var noteConverteOne = notas.split("&lt;").join("<");
    var noteConverteTwo= noteConverteOne.split("&gt;").join(">");
    var xml = noteConverteTwo.split("&quot;").join('"');
    var xmlConvertido = convert.xml2json(xml, {compact: true, spaces: 4});
    return  JSON.parse(xmlConvertido);
}

module.exports = {
    formatCXML
}