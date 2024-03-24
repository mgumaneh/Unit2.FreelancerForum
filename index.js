

// Define an array of initial freelancers
const freelancers = [
  { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
  { name: 'Bob', occupation: 'Teacher', startingPrice: 50 } ,
  { name: `Carol`, occupation: `programmer`,startingPrice:70 }
];
const ul = document.querySelector("ul")
const button = document.querySelector("button")
function render(){
  const freelancer = freelancers.map((element)=>{
    return `<li>NAME :${element.name},OCCUPATION :${element.occupation},STARTINGPRICE :${element.startingPrice}</li>
   `
  })
  ul.innerHTML = freelancer
}
button.addEventListener('click',(event)=>{
  generateRandomFreelancer()

})
render()

function generateRandomFreelancer(){
  const randomName = Math.ceil(Math.random()* 1000)
  const name = `freelancer-${randomName}`
  const occupation = `occupation-${randomName}`
  const startingPrice = `${randomName}`
  const newfreelancer = {name : name , occupation : occupation , startingPrice : startingPrice}
  freelancers.push(newfreelancer)
 render()
}

function calculateAveragePrice() {
 
}