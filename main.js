const getBtn = document.querySelector('#getRes');
const section = document.querySelector('#container');

const getResidents = () => {
  axios.get("https://swapi.dev/api/planets/?search=Alderaan")
  .then(res=> {
    let data = res.data.results;

    data[0].residents.map((el)=> axios.get(el).then(res=>{
        let resName = document.createElement('h2')
        resName.textContent = res.data.name;
        section.appendChild(resName)
    }))
    .catch(err=> console.log(err))
})
  .catch(err=>console.error(err))  
}
getBtn.addEventListener('click', getResidents)