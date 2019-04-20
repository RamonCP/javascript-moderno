const frameworks = [
    {name: "Rails", language: "Ruby"},
    {name: "Vue", language: "JavaScript"},
    {name: "Laravel", language: "PHP"},
    {name: "Express", language: "JavaScript"},
    {name: "Django", language: "Python"},
    {name: "React", language: "JavaScript"},
    {name: "Spring", language: "Java"},
]

//Object Destructuring com método filter
const JavaScript = frameworks.filter( ({ language }) => language == "JavaScript" )

console.log(JavaScript)