/*const mapPropertyDetailsListFromApiTovm = (propertylist) =>
  Array.isArray(propertylist)
    ? propertylist.map((property) => mapPropertyDetailsFromApiToVm(property))
    : [];*/





export const mapPropertyDetailsFromApiToVm = (property, equipments) => {
  return {
    id: property.id,
    title: property.title,
    notes: `${property.notes}`,
    price: `${property.price.toLocaleString()} €`,
    city: property.city,
    squareMeter: `${property.squareMeter}m2`,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)} `,
    bathrooms: `${property.bathrooms} ${getBathRoomWord(property.rooms)} `,
    location: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments: property.equipmentIds,
    mainImage: property.images[0],
    image: Array.isArray(property.images) ? property.images[0] : '',
  };
};

const getRoomWord = (rooms) => (rooms > 1 ? 'habitaciones' : 'habitación');
const getBathRoomWord = (bathRooms) =>
  bathRooms > 1 ? 'cuartos de baño' : 'cuarto de baño';
/*const transformEquipment = (property, equipments) => {
    const targetEquipmentIds = property.equipmentIds;
    const targetEquipments = targetEquipmentIds.map(id => {
      const targetEquipment = equipments.find(equipment => equipment.id === id);
      const targetEquipmentName = targetEquipment.name;
      return targetEquipmentName;
    });
    return targetEquipments;
  }*/
  
