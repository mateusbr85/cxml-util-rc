# <img src="https://i.imgur.com/NXxBSjk.png" width="160">  <img src="https://i.imgur.com/ryef0f6.png" width="160"/>

**Convert XML text to Javascript object / JSON text.**

# English:

## Function for Converting cXML/XML file to JSON object.

- FormatCXML(value) : Function responsible for converting data into cXml/XML.
  
## Features
- Maintain Order of Elements: Most libraries will convert `<a/><b/><a/> to {a:[{},{}],b:{}}` which merges any node of same name into an array. This library can create the following to preserve the order of elements: `{"elements":[{"type":"element","name":"a"},{"type":"element","name":"b"},{"type":"element","name":"a"}]}`.
- **Fully XML Compliant:** Can parse: elements, attributes, texts, comments, CData, DOCTYPE, XML declarations, and Processing Instructions.
- **Minimal Dependencies:** This library depends only on one external npm module.
- **Portable Code:** Written purely in JavaScript which means it can be used in Node environment and browser environment (via bundlers like browserify/JSPM/Webpack).

# Usage

```
npm install --save cxml-util-rc
```

# Quick start
### Use in javascript
```
var {formatCXML} = require('cxml-util-rc');


var cXml = "&lt;cProd&gt; testeando &lt;/cProd&gt;";
var result  = formatCXML(cXml);
console.log(result);
```
### Use in React
```
import {formatCXML} from "cxml-util-rc";


var cXml = "&lt;cProd&gt; testeando &lt;/cProd&gt;";
var result  = formatCXML(cXml);
console.log(result);
```
## dependency
- This library uses the xml-js dependency, all credits and rights of its dependency are reserved to it. ["XML-js"](https://www.npmjs.com/package/xml-js)


# Português:

## Função para converter arquivo cXML/XML em objeto JSON.

- FormatCXML(valor): Função responsável por converter os dados em cXml/XML
  
## Features
- **Mantenha a Ordem dos Elementos:** A maioria das bibliotecas converterá para a qual mescla qualquer nó de mesmo nome em uma matriz. Esta biblioteca pode criar o seguinte para preservar a ordem dos elementos: `<a/><b/><a/>{a:[{},{}],b:{}}{"elements":[{"type":"element","name":"a"},{"type":"element","name":"b"},{"type":"element","name":"a"}]}`
- **Totalmente compatível com XML:** pode analisar: elementos, atributos, textos, comentários, CData, DOCTYPE, declarações XML e instruções de processamento.
- **Dependências mínimas:** Esta biblioteca depende apenas de um módulo npm externo.
- **Código Portátil:** Escrito puramente em JavaScript, o que significa que pode ser usado no ambiente Node e no ambiente do navegador (através de bundlers como browserify/JSPM/Webpack).

# Uso

```
npm install --save cxml-util-rc
```

# Inicialização
### Começando no JavaScript
```
var {formatCXML} = require('cxml-util-rc');


var cXml = "&lt;cProd&gt; testeando &lt;/cProd&gt;";
var result  = formatCXML(cXml);
console.log(result);
```
### Começando no React
```
import {formatCXML} from "cxml-util-rc";


var cXml = "&lt;cProd&gt; testeando &lt;/cProd&gt;";
var result  = formatCXML(cXml);
console.log(result);
```
## dependência
- Esta biblioteca utiliza a dependência xml-js, todos os créditos e direitos de sua dependência são reservados a ela. ["XML-js"](https://www.npmjs.com/package/xml-js)