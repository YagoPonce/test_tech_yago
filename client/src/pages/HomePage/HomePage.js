import "./HomePage.css";
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getPhonesListService } from '../../services/phones.services';
import PhoneDetails from "../../components/PhoneDetails.jsx"

function HomePage() {

  const navigate = useNavigate();

//states
const [ phonesList, setPhonesList ] = useState([])
const [phoneDetailsIsShowing, setPhoneDetailsIsShowing] = useState(false);
  //for loading time
  const [isFetching, setIsFetching] = useState(true);

  const toggleForm = () => setPhoneDetailsIsShowing(!phoneDetailsIsShowing)

    //calling the API
    useEffect(() => {
      getData();
    }, [])

    const getData = async () => {
      try {
        const response = await getPhonesListService()
        setPhonesList(response.data)
        setIsFetching(false)
      } catch (error) {
        console.log("/error")
      }
    }

    const seeDetails = (id) => {
      return (
        <PhoneDetails id={id}/>
      )
    }

    //if content is not loading
  if (isFetching === true) {
    return (
      // <div className="spinner">
      //   <ClockLoader color="#d68736" size={100} />
      // </div>
      <div>
        Cargando...
      </div>
    )
  }
  return (
    <div>
      <h1>Welcome to The Phone Cave </h1>
      <h2>Search for your favourite mobile phone and click to see details</h2>
      {phonesList.map((eachPhone) => {
        return (
          <div key={eachPhone.id} >
          <br/>
              <div>
              <img src={`images/${eachPhone.imageFileName}`} atl="phonePic" width={150} />
              
              <p> {eachPhone.name}</p>
              </div>
              <button onClick={seeDetailsPhone => seeDetails(eachPhone.id)} > See Phone Details</button>
              
    
    
          </div>
        )
      })}
    </div>
  );
}

export default HomePage;