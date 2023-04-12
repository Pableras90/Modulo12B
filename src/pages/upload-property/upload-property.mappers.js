const getIdEquipments = (equipmentIds, equipmentList) => {
  console.log(equipmentIds);
  return equipmentIds.map((equipmentId) => equipmentList.find((equipment) => equipment.id === equipmentId)?.name
  );
};

export const mapNewPropertyFromVmToApi = (property, equipmentsList) => {
  return {
    id: property.id,
    title: property.title,
    notes: `${property.notes}`,
    price: `${property.price.toLocaleString()} €`,
    city: property.city,
    squareMeter: `${property.squareMeter}m2`,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)} `,
    bathrooms: `${property.bathrooms} ${getBathRoomWord(property.rooms)} `,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments: getIdEquipments(property.equipmentIds, equipmentsList),
    mainImage: property.images[0],
    images: Array.isArray(property.images) ? property.images : [],
  };
};

const getRoomWord = (rooms) => (rooms > 1 ? 'habitaciones' : 'habitación');
const getBathRoomWord = (bathRooms) =>
  bathRooms > 1 ? 'cuartos de baño' : 'cuarto de baño';
