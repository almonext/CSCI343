import Hotel from "../components/List/Hotel";
import { LISTINGS } from "../data/dummy_data";

export default function USHotelScreen({route}) {

    const stateId = route.params.stateId;
    const displayedHotel = LISTINGS.filter((HotelItem) => {
        return HotelItem.regionIds.includes(stateId);
    });
  return <Hotel news={displayedHotel} />
}
