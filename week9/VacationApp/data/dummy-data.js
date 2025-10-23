import State from "../models/states";
import Campground from "../models/campgrounds";

export const STATES = [
  new State("s1", "Mexico", "#f44336"), // Red
  new State("s2", "Canada", "#2196f3"), // Blue
  new State("s3", "England", "#4caf50"), // Green
  new State("s4", "France", "#ff9800"), // Orange
  new State("s5", "Spain", "#9c27b0"), // Purple
  new State("s6", "Italy", "#ffeb3b"), // Yellow
  new State("s7", "Portugal", "#03a9f4"), // Light Blue
  new State("s8", "Germany", "#8bc34a"), // Light Green
  new State("s9", "Australia", "#ff5722"), // Deep Orange
  new State("s10", "Japan", "#673ab7"), // Deep Purple
];

export const CAMPGROUNDS = [
  new Campground(
    "c1",
    "s1",
    "Cancun",
    363,
    1970,
    4.5,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczuXDGq2BOF7L30uBkBDaMDhipLq7FZqoWQ&s"
  ),
  new Campground(
    "c2",
    "s2",
    "toronto",
    410,
    1793,
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65MEXn18Q4FZLLmWipREx1n5lTja4nC3_KA&s"
  ),
  new Campground(
    "c3",
    "s3",
    "London",
    678,
    47,
    4.2,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmSH3K1JaCNLBBYlIzWLGK9xIVDK2cMchmg&s"
  ),
  new Campground(
    "c4",
    "s4",
    "Paris",
    708,
    50,
    4.7,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj_sr5heVsM5m2F9ADB_47cE6evdwKMz2_w&s"
  ),
  new Campground(
    "c5",
    "s5",
    "Madrid",
    488,
    886,
    3.8,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtj1Fk2idZ7gWbttyJ-KdElokpMhCXbAEAw&s"
  ),
  new Campground(
    "c6",
    "s6",
    "milan",
    579,
    600,
    4.1,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEunR_me3OtoN3ktV9VzjXJ7NFa-MRa3szQ&s"
  ),
  new Campground(
    "c7",
    "s7",
    "Lisbon",
    504,
    1147,
    4.3,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8KP91cF6ruxKu5eWl_RZeT7To24xJxkZhA&s"
  ),
  new Campground(
    "c8",
    "s8",
    "Berlin",
    608,
    1237,
    4.6,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHLuEfkIDUAd7WRPa1iOcD1rQg0Xmxq0GeA&s"
  ),
  new Campground(
    "c9",
    "s9",
    "Sydney",
    1298,
    1788,
    3.9,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooodmoS16no6OCA38hUPl20fX_y2J9VYyOQ&s"
  ),
  new Campground(
    "c10",
    "s10",
    "Tokyo",
    853,
    1603,
    4.8,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelE1H65RKzMfqkswsQoCuofUC2mdqPQRnpQ&s"
  ),
  new Campground(
    "c11",
    "s1",
    "mexico city",
    545,
    1325,
    4.2,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZSleFAL_LhwWVHjxZ0i15fOLZcCHsG-x5g&s"
  ),
  new Campground(
    "c12",
    "s2",
    "Banff",
    350,
    1885,
    4.3,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkk-sNL6DsXaWu6jLC8IBSI9i38QF_b0IYaA&s"
  ),
  new Campground(
    "c13",
    "s3",
    "Oxford",
    600,
    911,
    4.6,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9usp9i-pEgD9G7C-rPr14KyOvaFt0-FX40Q&s"
  ),
  new Campground(
    "c14",
    "s4",
    "Bordeaux",
    670,
    300,
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_6wk3xgTnxbzz3Wk5QwLMGc7rn_3BoAw7A&s"
  ),
  new Campground(
    "c15",
    "s5",
    "Barcelona",
    520,
    27,
    4.5,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMeOPPcrO5F0OMtm5oYFqcYpeNsI5-F_DpQ&s"
  ),
  new Campground(
    "c16",
    "s6",
    "Rome",
    561,
    753,
    4.7,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeHN7GQ3TwOKIXCLHZj0zFvLbtbJ-rGTY6Q&s"
  ),
  new Campground(
    "c17",
    "s7",
    "Porto",
    515,
    1123,
    3.8,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAcOfMc39usiT_q7IzG67rMogb-7eFbxuOw&s"
  ),
  new Campground(
    "c18",
    "s8",
    "aachen",
    587,
    814,
    4.9,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXzLQSZnmpxRwNDJ6vy8UQQzkibq1aQi_Fw&s"
  ),
  new Campground(
    "c19",
    "s9",
    "Melbourne",
    1198,
    1835,
    3.5,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19enemlqYaXuKk6ib4poCCDT_R-DDdQW0Tw&s"
  ),
  new Campground(
    "c20",
    "s10",
    "Kyoto",
    1922,
    794,
    4.4,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZS0K_0sChcfB_xsyzeVqgS_IpGj4XeUtIA&s"
  ),
];
