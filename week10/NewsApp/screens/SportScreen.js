import News from "../components/List/News";
import { LISTINGS } from "../models/dummy_data";

export default function SportScreen() {
    const typeNews = "Sports";
    const displayedNews = LISTINGS.filter((NewsItem) => {
        return NewsItem.type === typeNews;
    })
  return <News news={displayedNews} />
}
