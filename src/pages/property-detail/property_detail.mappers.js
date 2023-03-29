export const mapPropertyDetailsApiToVm = (property) => {
    return {
      id: property.id,
      image: Array.isArray(property.images) ? property.images[0] : '',
      title: property.title,
      rooms: `${property.rooms} ${getRoomWord(property.rooms)} `,
      rooms: `${property.bathrooms} ${getBathRoomWord(property.rooms)} `,
      squareMeter: `${property.squareMeter}m2`,
      notes: `${property.notes}`,
      price: `${property.price.toLocaleString()}€`,
      
    };
  };

  const getRoomWord = (rooms) => (rooms > 1 ? 'habitaciones' : 'habitación');
export const mapFilterToQueryParams = (filter) => {
  let queryParams = '';

  if (filter.saleTypeId) {
    queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`;
  }
  if (filter.provinceId) {
    queryParams = `${queryParams}provinceId=${filter.provinceId}&`;
  }
  if (filter.minRooms) {
    queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
  }
  if (filter.minBathrooms) {
    queryParams = `${queryParams}bathrooms_gte=${filter.minBathrooms}&`;
  }
  if (filter.minPrice) {
    queryParams = `${queryParams}price_gte=${filter.minPrice}&`;
  }
  if (filter.maxPrice) {
    queryParams = `${queryParams}price_lte=${filter.maxPrice}&`;
  }
  return queryParams.slice(0, -1);
};

  /*PropertyDetail {
    id,
    title,
    notes,
    price
    city
    squareMeter
    rooms
    bathrooms
    locationUrl
    mainFeatures
    equipments
    mainImage
    images
  }*/