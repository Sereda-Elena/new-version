const div = document.body.appendChild(document.createElement('div'))
const titile = document.createElement('p')
const inputInput1 = document.createElement('input')
const inputInput2 = document.createElement('input')
const style = document.head.appendChild(document.createElement('style'))
const img = document.createElement('img')
const lableInput1 = document.createElement('label')
const lableInput2 = document.createElement('label')
const divForm = document.createElement('div')
const divForm2 = document.createElement('div')

  div.appendChild(titile)
  div.appendChild(divForm)
  div.appendChild(divForm2)
  divForm.appendChild(inputInput1)
  divForm2.appendChild(inputInput2)
  divForm.appendChild(lableInput1)
  divForm2.appendChild(lableInput2)

divForm.classList.add('classInput')
divForm2.classList.add('classInput')
titile.innerText = 'Выберите вариант зарузки файла'
titile.setAttribute('id','explane' )
inputInput1.type= 'radio'
inputInput1.setAttribute('id','foto' )
inputInput1.setAttribute('name','fav_language' )
inputInput1.setAttribute('value','downloadFile' )
lableInput1.setAttribute('for','foto' )
lableInput1.innerText = 'download file'
inputInput2.type = 'radio'
inputInput2.setAttribute('id','text' )
inputInput2.setAttribute('name','fav_language' )
inputInput2.setAttribute('value','download file-text' )
lableInput2.setAttribute('for','text' )
lableInput2.innerText = 'download file-text'
const wrapper = document.body.appendChild(document.createElement('div'))
const divForFileFoto = document.createElement('div')  
const inputForFileFoto = wrapper.appendChild(document.createElement('input')) 
wrapper.setAttribute('id', 'wrapper')
wrapper.appendChild(divForFileFoto)
 inputForFileFoto.type = 'file' 
 inputForFileFoto.setAttribute('id', 'file') 

style.innerText= `
  #explane{
   font-size: 19px;
   display: inline-block;
   text-align:center;
  } 
  #wrapper{
   margin:20px;
   position:relative;
  }
  #file{
   position:absolute;
   top:0;
   left:0;
   opacity: 0;
  }
  #enter{
   position:absolute;
   top:-20px;
   left:0;
   opacity: 0; 
  }
  inputForText{
   padding: 10px;
   border:2px solid red;
   border-radius : 5px;
  }  
`
 const read = new FileReader
 inputForFileFoto.onchange = function(event){
  read.readAsDataURL(event.target.files[0])
  read.onload =function(event){
   const image = document.createElement('img')
   divForFileFoto.appendChild(image) 
   image.style=`
    position:absolute;
    top:20px;
    left:0;
    border:2px solid red;
    `
    image.src = event.target.result
   }
 }
const inputForText = document.body.appendChild(document.createElement('input'))  
wrapper.appendChild(inputForText)
inputForText.type = 'file'
inputForText.setAttribute('id', 'enter')//добавила атрибут input

const reader2 = new FileReader
 inputForText.onchange = function(event){
      reader2.readAsText(event.target.files[0])
  }
  reader2.onload = function(event) {
  const pForText =  wrapper.appendChild(document.createElement('p'))
  pForText.style =`
   overflow: scroll;
   position:absolute;
   top:20px;
   left:0;
   border:2px solid red;
   width: 250px;
   height:250px; 
  `
  pForText.innerText= event.target.result
}

function func(event ){
   console.log(event.target.value);

   if (event.target.value === 'downloadFile'){
       inputForFileFoto.style.opacity='1' ;
       inputForText.style.opacity='0' ;
   }else{
       inputForFileFoto.style.opacity = '0' ;
       inputForText.style.opacity = '1' ;
        }
  }
 document.querySelectorAll('.classInput > input').forEach(input => input.addEventListener('change', func))