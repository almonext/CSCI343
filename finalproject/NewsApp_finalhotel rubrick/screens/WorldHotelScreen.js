import Hotel from "../components/List/Hotel";
import { LISTINGS } from "../data/dummy_data";


export default function WorldHotelScreen({route}) {

    const CountryId = route.params.countryId;
    const displayedHotel = LISTINGS.filter((HotelItem) => {
        return HotelItem.regionIds.includes(CountryId);
    });
  return <Hotel news={displayedHotel} />
}



