import React, { useState } from "react";
import Table from "../Table";
import GoogleMaps from "../GoogleMap/googlemap";
import API from "../../utils/API";
import Search from "../Search";

function PetContainer() {
  const [pets, setPets] = useState([]);
  const handleSubmit = async (value) => {
    let token = await API.getOAuthToken();
    token = token.data.access_token;
    let petdata = await API.getLocalPets(token, value);
    petdata = petdata.data.animals;
    setPets(petdata);
  };

  return (
    <>
      <Search handleSubmit={handleSubmit} />
      <Table pets={pets} />
      <GoogleMaps pets={pets} />
    </>
  );
}

export default PetContainer;
