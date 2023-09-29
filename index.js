function update(){
    console.log("Updating the Data on realtime basis ")
fetch("/data.json")
.then(Response=>Response.json())
.then(rsp=>{
    console.log(rsp.data)
    rsp.data.forEach(element => {
        latitude=element.latitude
        longitude=element.longitude
        infected=element.infected

        cases=element.infected
        // Mark the Map
        if(cases==50){
            color="blue";
        }
        
        if(cases>200){
            color="red"
        }
        else{
            color="green";
        }
       
 new mapboxgl.Marker({
    draggable: false,
    color:color,
    
    })
    // Marker().styles="filter:blur(2px)"
    .setLngLat([longitude,latitude]).addTo(naksha);

    });
})
}

setInterval(update, 60000);
update()

