/* eslint-disable @typescript-eslint/no-unused-vars */
export const replaceMongoIdInArray = (arr) => {
  const mappedArray = arr
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };

  return updatedObj;
};

export function isDateInBetween(date, from, to) {
  return (
    new Date(date).getTime() >= new Date(from).getTime() &&
    new Date(date).getTime() <= new Date(to).getTime()
  );
}

export function getDayDifference(from, to) {
  return (
    (new Date(to).getTime() - new Date(from).getTime()) /
    (24 * 60 * 60 * 1000 + 1)
  );
}
