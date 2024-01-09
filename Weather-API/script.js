
//accesing all the html values
const inputVal=document.getElementById('inputval')
const BtnEle=document.getElementById('btn')
const TempEle=document.getElementById('temp')
const DescriEle=document.getElementById('description')
const locEle=document.getElementById('location')
const IconELE=document.getElementById('icon')

 let Apikey='d5ea5784119f527f9258faad5d37bf36'
BtnEle.addEventListener('click',()=>{
    if(inputVal.value==''){
        alert('plz enter the vlaue')
    }
    else{
        let loc=inputVal.value
        //varables to store location values

            Url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${Apikey}`
            fetch(Url)
            .then((res)=>res.json())//response header converting into object from
            .then((da)=>{console.log(da)
                    const{name}=da//da.name
                    const{feels_like}=da.main//da.main.temp
                    const{description}=da.weather[0]//da.weahter[0].description
                    const{icon}=da.weather[0]//da.weather[0].icon
                    //display the data in the html page dynamically based on user locatiion
                    locEle.innerText=name
                    TempEle.innerText=Math.round(feels_like-273)//feelslike it returns the kelvin to degrees
                    DescriEle.innertext=description
                    IconELE.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
                    
                    })//object data
            .catch(()=>
            {alert('enter the correct loacation')})

    }
    inputVal.value=''
})