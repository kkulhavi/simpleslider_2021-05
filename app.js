const picArea = document.querySelector('#picArea');
let counter=0
const myPicture=new Image(150,100)
const picArray=['adidas.png','nike.png','under-armor.png']
myPicture.src='adidas.png'
picArea.append(myPicture)
myPicture.addEventListener('click',()=>{
        counter++ 
        counter>2?counter=0:console.log('ok')
        myPicture.src=picArray[counter]
        picArea.append(myPicture)
})

