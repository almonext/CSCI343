 import Listing from "../models/listing";

export const LISTINGS = [
  // US Listings
  new Listing(
    1,
    "US",
    ["DC"],
    "The Hay-Adams",
    "Historic luxury hotel overlooking Lafayette Square and the White House, offering refined rooms and rooftop views.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmn20s_cpypp1S8A3ZLWRxfpjHBS-ZpKkULA&s"
  ),
  new Listing(
    2,
    "US",
    ["CA"],
    "The Beverly Hills Hotel",
    "Iconic hotel in Los Angeles, known for its legendary celebrity guests, pink exterior, and lush poolside palm trees.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5umYqo2id52uajzWST0rYQfVRb2FQu5RHTQ&s"
  ),
  new Listing(
    3,
    "US",
    ["NY"],
    "The Plaza Hotel",
    "A landmark Fifth Avenue hotel beside Central Park — elegant rooms, historic charm, and classic New York luxury.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQGWzjNvEzeI8yDZINaYqA77QFkXZMrGakQ&s"
  ),
  new Listing(
    4,
    "US",
    ["AZ"],
    "Enchantment Resort",
    "Luxury desert escape tucked into the red rocks of Sedona, featuring casita-style rooms, world-class spa experiences, and breathtaking canyon views.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOKxTP9kYlrKxGl3WebFHoUl7vH-hxtKaIw&s"
  ),
  new Listing(
    5,
    "US",
    ["AR"],
    "Capital Hotel",
    "A historic Little Rock landmark known as “the front porch of the South,” blending classical architecture with modern Southern hospitality.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF7qU5BHfV0OB0TOrEe0m1QDvwcl2wj044g&s"
  ),
  new Listing(
    6,
    "US",
    ["CO"],
    "The Broadmoor",
    "Five-star lakeside resort at the base of the Rockies, offering elegant rooms, fine dining, mountain adventures, and timeless Colorado luxury.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64O8zvgJ5WIQuzr9tebeMKQlDvSUnNoiTyg&s"
  ),
  new Listing(
    7,
    "US",
    ["HI"],
    "Halekulani Hotel",
    "Oceanfront paradise on Waikiki Beach, known for serene luxury, world-class dining, and tranquil views of the Pacific.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeicK3nsxA7XVop9r14kpEn84CGhn5YQJEcA&s"
  ),
  new Listing(
    8,
    "US",
    ["ID"],
    "The Grove Hotel",
    "Downtown Boise’s premier upscale hotel with mountain views, spacious rooms, and direct access to the Boise Centre and lively urban attractions.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQUdhA63lUjY57yh-jnLgRebpvTf-NMGpaw&s"
  ),
  new Listing(
    9,
    "US",
    ["NC"],
    "The Omni Grove Park Inn",
    "Historic Asheville resort overlooking the Blue Ridge Mountains, with stonework architecture, grand views, and an iconic underground spa.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxU2JmdDZcTyUgkbObknBNsHTN3TrPpXzMWQ&s"
  ),
  new Listing(
    10,
    "US",
    ["WI"],
    "The American Club",
    "A luxury retreat in Kohler featuring elegant accommodations, award-winning dining, and access to some of the top golf courses in the U.S.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnPK2BYp4JYa17DGLj7LAd8rY-OJ5NaGusA&s"
  ),
  new Listing(
    11,
    "US",
    ["WY"],
    "Amangani",
    "Ultra-luxury hilltop resort overlooking the Grand Tetons, offering suites with panoramic mountain views and refined wilderness serenity.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EULPBDFxyN6W8kBQjstNqmzTrBry8GdAyg&s"
  ),

  // World Listings
  new Listing(
    12,
    "World",
    ["Japan"],
    "The Okura Tokyo",
    "Luxury hotel in Tokyo’s Minato district; renovated 2019, with elegant rooms and a storied history of hosting dignitaries.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosq6dp4vIRmrA7mUo40A84IlyBWgDsu0XmA&s"
  ),
  new Listing(
    13,
    "World",
    ["Brazil"],
    "Copacabana Palace",
    "Historic beachfront hotel in Rio de Janeiro, opened in 1923 — rooms, suites, and a legendary legacy along Copacabana Beach.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinBAs7DbPMnwvB03uCTUk2eJ1u-6BQY13mg&s"
  ),
  new Listing(
    14,
    "World",
    ["Australia"],
    "Capella Sydney",             // example — one of top hotels in Australia 2025 lists  
    "Boutique‑luxury hotel in Sydney with heritage charm and premium amenities, ideal for city stays.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8D9Qvu8zXD2ed5oCqhNRsfDkruDJkx-fAQ&s"
  ),
  new Listing(
    15,
    "World",
    ["UnitedKingdom"],
    "The Savoy, London",
    "Iconic historic hotel on the Thames in London, with classic rooms, elegant dining, and a legacy of hosting celebrities and royalty.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEY7Ibrd-5hIf0W_qXXdHfb97kt-ze4n5l0w&s"
  ),
  new Listing(
    16,
    "World",
    ["France"],
    "Le Bristol Paris",
    "Legendary Parisian hotel near the Champs-Élysées, offering classic elegance, refined rooms, and gourmet dining.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfjYKRbzJwHnwVVlGDHEQFzekPv8Dxc-Ztg&s"
  ),
  new Listing(
    17,
    "World",
    ["India"],
    "The Taj Mahal Palace, Mumbai",
    "Grand heritage hotel in Mumbai with opulent rooms, sea views, and a reputation as India’s classic luxury stay.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgwN5iEi_fLnSGNo0peIR9E-0mHUXmPUw0A&s"
  ),
  new Listing(
    18,
    "World",
    ["Canada"],
    "Fairmont Banff Springs",
    "A grand castle-style luxury resort located deep in the Canadian Rockies, offering breathtaking mountain views, natural hot springs, and world-class outdoor adventure",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRYvzAmlxvTS96LVET-Ebu0U1739YIYgs0g&s",
  ),
  new Listing(
    19,
    "World",
    ["Spain"],
    "Majestic Hotel & Spa Barcelona",
    "A refined five-star hotel on Passeig de Gràcia, known for elegant rooms, rooftop city views, and close access to Gaudí’s iconic architecture.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2he9jZGLfUw89W9t8rktd0h_nfU2sIlKfA&s",
  ),
  new Listing(
    20,
    "World",
    ["Italy"],
    "Grand Hotel Tremezzo",
    "A luxurious Lake Como landmark featuring waterfront suites, floating pools, lush gardens, and unrivaled views of the Alps and Bellagio.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznwLW-Tb2M3BbWyP7EPnFmOM2OmyXq0FfSw&s",
  ),
];
