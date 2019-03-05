flightAreaList.forEach(async (flight, x) =>{
    // calculate timestamps in 10 minute interval for last hour  / TODO: refactoring 🤬
    if(true){
      let times = [];
      for(let i = 1; i <= 5; i++){
          times.push(getTime(subMinutes(new Date(flight.time), i*10)))
      }
      await times.forEach(async (time, xx)=>{
          try{
            const flightHistoryRequest = await fetch(`${Config.apiUrl}/states/all?time=${time}&icao24=${flight.icao24}`);
            const flightHistoryResponse = await flightHistoryRequest.text() 
            console.log(flightHistoryResponse )
            if(flightHistoryResponse.states){
              console.log("ADDITIONAL STATES ARE HERE")
              const flightHistoryData = flightArrayToObject(flightHistoryResponse)
              flight.altitudeHistory.push(flightHistoryData.altitudeHistory[0])
            }
            //push altitudeHistory Object to origin flight Object
            // console.log(flightHistoryData)

          } catch (err) {
            console.log(err)
          }
      })

      //push the new flight object to a new array / TODO: refactoring 🤯 (maybe .map() does the job?)
      mergedFlightList.push(flight)
    }

})





const urls = [
    "https://opensky-network.org/api/tracks/?icao24=3c6741",
    "https://opensky-network.org/api/tracks/?icao24=3991e2",
    "https://opensky-network.org/api/tracks/?icao24=440159",
    "https://opensky-network.org/api/tracks/?icao24=3c6dce",
    "https://opensky-network.org/api/tracks/?icao24=4ca94b",
    "https://opensky-network.org/api/tracks/?icao24=4ba9ed",
    "https://opensky-network.org/api/tracks/?icao24=49d094",
    "https://opensky-network.org/api/tracks/?icao24=3c423d",
    "https://opensky-network.org/api/tracks/?icao24=3c4252]"]


urls.forEach(u=>{
    fetch(u).then(res => res.json())
    .then(res => {
        console.log(res.icao24)
    });
})


                          {/* <svg height="200" width="100" class="api-svg" viewBox="0 0 100 50"><circle r="24" cy="26" cx="50" fill="#1A1A1A"></circle><circle class="progress-svg" r="18" cy="26" cx="50" fill="transparent" stroke="#00BCFF" stroke-width="8"></circle></svg> */}
      







                                  //update trackdata
          // try{
          //   let path = await this.updateFlightTrack(`${Config.proxyApiUrl}/tracks/?icao24=${flight.icao24}`)
            
          //   if(path){
          //     flight.path = path;
          //   } else {
          //     let newPathVector = {
          //       time: format(new Date(newFlightData.time*1000), 'HH:mm'),
          //       barAlt: newFlightData.barAlt,
          //       lat: newFlightData.lat,
          //       lng: newFlightData.lng,
          //     }
          //     if(!flight.path) flight.path = fake;
          //     flight.path.push(newPathVector)
          //   }
          // } catch(error) {
          //   // if request fails, just push last information to path array
          //   let newPathVector = {
          //     time: format(new Date(newFlightData.time*1000), 'HH:mm'),
          //     barAlt: newFlightData.barAlt,
          //     lat: newFlightData.lat,
          //     lng: newFlightData.lng,
          //   }
          //   if(!flight.path) flight.path = fake;
          //   flight.path.push(newPathVector)
          // }