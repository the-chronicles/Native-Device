import PlaceForm from "../components/Places/PlaceForm";

function AddPlace({}) {
function createPlaceHandler(place) {
   nsvigation.navigate('AllPlaces', {
    place: place
   })
}

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
