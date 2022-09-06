# Sergey Sobolevskiy
## Junior Frontend Developer
## Contacts
* Location: Minsk, Belarus
* Phone: +375 29 147-99-15
* Email: serzhkonserzh@gmail.com
* Discord: SerzhKonserzh(@SerzhKonserzh)
* Github: [https://github.com/SerzhKonserzh]SerzhKonserzh
## About Me
I am a fourth-year student of Belarusian State University of Informatics and Radioelectronics. I don't have any work experience, but i have studied Frontend technologies for about a year. 
If i don't know something,i can easily find necessary information. 
If i need to solve any task, i will do my best to create effective solution!
## Skills
* HTML
* CSS(SASS)
* JavaScript
* JQuery
* Bootstrap
* Git
## Code Example
```javascript
function expandedForm(num) {
  return String(num).split("")
                    .map((item,i,arr)=>item*(Math.pow(10,(arr.length-1-i))))
                    .filter(item=>item>0)
                    .join(" + ");
}
```