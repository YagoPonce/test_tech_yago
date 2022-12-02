import { getPhoneDetailsService } from "../services/phones.services";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function PhoneDetails(props) {
  const navigate = useNavigate();
  console.log("props", props.id);
  const { id } = props.id;

  //states
  const [phonesDetails, setPhonesDetails] = useState([]);

  //for loading time
  const [isFetching, setIsFetching] = useState(true);

  //calling the API
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getPhoneDetailsService(id);
      console.log("response", response);
      setPhonesDetails(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  //if content is not loading, show spinner
  if (isFetching === true) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      {phonesDetails.map((eachDetail) => {
        return (
          <div key={eachDetail.id}>
            <p>{eachDetail.manufacturer}</p>
            <p>{eachDetail.color}</p>
            <p>{eachDetail.price}</p>
            <p>{eachDetail.screen}</p>
            <p>{eachDetail.processor}</p>
            <p>{eachDetail.ram}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PhoneDetails;
