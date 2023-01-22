const parser = new DOMParser();

const xmlStr = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
`;
   
const xmlDOM = parser.parseFromString(xmlStr, "text/xml");

const list = xmlDOM.querySelector('list'); 

for(i=0;i<list.children.length;i++){

const studentNode = list.children[i];
  
  
const nameNode = studentNode.querySelector('name');
const firstNode = nameNode.querySelector('first');
const secondNode = nameNode.querySelector('second');
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');


const langAttr = nameNode.getAttribute('lang');

const result = {
  lang: langAttr,
  name: firstNode.textContent,
  surname: secondNode.textContent,
  age: ageNode.textContent,
  prof: profNode.textContent
   
};

console.log(result);

}