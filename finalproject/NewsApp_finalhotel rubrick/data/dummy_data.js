 import Listing from "../models/listing";

export const LISTINGS = [
  new Listing(
  1,
  "US",
  ["DC"],  // <-- add region/state codes here
  "White House Hotel",
  "A luxury hotel near the White House.",
  "https://...",
),
new Listing(
2,
  "US",
  ["CA"],  // <-- add region/state codes here
  "californa grand hotel",
  "A luxury hotel in hollywood.",
  "https://...",
),
new Listing(
    3,
    "US",
    ["NY"],
    "city escape",
    "penthouse over central park",
    "https://...",
  ),
  new Listing(
    4,
    "World",
    ["Canada"],
    "mountain retreat",
    "hotel in the mountains",
    "https://...",
  ),
  new Listing(
    5,
    "World",
    ["Spain"],
    "spanish retreat",
    "hotel in the city of barcelona",
    "https://...",
  ),
];
