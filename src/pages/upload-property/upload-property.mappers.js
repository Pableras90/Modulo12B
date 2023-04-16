export const mapNewPropertyFromVmToApi = (property) => {
  return {
    id: property.id,
    title: property.title,
    notes: property.notes,
    email: property.email,
    phone: property.phone,
    price: property.price,
    salesTypesIds: property.salesTypesIds,
    address: property.address,
    city: property.city,
    provinceId: property.provinceId,
    squareMeter: property.squareMeter,
    rooms: property.rooms,
    bathrooms: property.bathrooms,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipmentIds: property.equipments,
    images: Array.isArray(property.images) ? property.images : [],
  };
};