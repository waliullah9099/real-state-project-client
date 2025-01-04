import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "../../models/rating-model";
import { reviewModel } from "../../models/review-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "../../utils/data-utils";

export async function getAllHotels() {
  const hotels = await hotelModel
    .find()
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();

  return replaceMongoIdInArray(hotels);
}

export async function getHotelByID(hotelId) {
  const hotel = await hotelModel.findById(hotelId).lean();
  return replaceMongoIdInObject(hotel);
}

export async function getRatingsForAHotel(hotelId) {
  const hotel = await ratingModel.find({ hotelId: hotelId }).lean();

  if (!hotel) {
    throw new Error("Hotel not found");
  }

  return replaceMongoIdInArray(hotel);
}

export async function getReviewsForAHotel(hotelId) {
  const hotel = await reviewModel.find({ hotelId: hotelId }).lean();

  if (!hotel) {
    throw new Error("Hotel not found");
  }

  return replaceMongoIdInArray(hotel);
}
