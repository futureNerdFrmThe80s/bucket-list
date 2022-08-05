import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../mainpage/Header'
import "../DetailPage.css"
import FavoriteButton from '../components/FavoriteButton'


function ParkDetails({ detailUrl, weatherUrl, ...props }) {
  const [park, setPark] = useState({})
  const [weather, setWeather] = useState({})
  const { id } = useParams()
  const apiKey = '2f4e32d94a78c9492aa87395ac412181'

  const free = Math.round(park.entrance_fee) === 0
  const fee = `$${Math.round(park.entrance_fee)}`

  useEffect(() => {
    async function fetchData() {
      const Url = detailUrl + id;
      const response = await fetch(Url);
      const data = await response.json();
      setPark(data);
      return response;
    }
    fetchData();
  }, [detailUrl, id])

  useEffect(() => {
    if (Object.keys(park).length) {
      async function fetchData() {
        const Url = weatherUrl + park.city + "," + park.state + ",US&appid=" + apiKey + '&units=imperial';
        const response = await fetch(Url);
        const data = await response.json();
        // setWeather(data.main);
        setWeather(data.main);
        console.log(data);
        return response;
      }
      fetchData();
    }
  }, [park, weatherUrl])

  const addFavoritePark = (park) => {
    const favorite = true;
  }


  return (
    <div> <Header />
      <div className='parkdetail shad_bottom'>
        <div className="card mb-3 shadow off_white list-border">

          <div key={park.id} className="row">
            <div className="col-12">
              <h2 className=" h1c text-center">{park.name}</h2>
              <h4 className=" text-center"><span className="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
              <p className="lead text-center">{park.description}</p>
            </div>
            <div className="col-12 mb-5 text-center">
              <img width="90%" className="img-fluid list-border-inner image-container"
                src={park.image_url} alt="" />

              <div onClick={() => addFavoritePark(park)} className='overlay align-items-center justify-content'>
                <FavoriteButton />
              </div>

            </div>
          </div>
        </div>
        <div>
          {weather
            ? <div><h5>Weather in {park.city} now: </h5><h6>Temperature: {Math.round(weather?.temp)} °F</h6><h6>Humidity: {weather?.humidity}%</h6> </div>
            : <></>
          }
        </div>
        <div className="col-12">
          {park.weather_info}
        </div>
        <div className='row row-details'>
          <h5 className="col-6">Entrance fee:  {free ? 'Free' : fee}</h5>
          <h5 className="col-6">Contact number: {park.contact_num}</h5>
        </div>

      </div>

    </div >
  )
}
export default ParkDetails

