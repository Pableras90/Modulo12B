export const mapPropertyListFromApiToViewModel = propertyList => {
    return propertyList.map(property => mapPropertyFromApiToViewModel(property))
};


const mapPropertyFromApiToViewModel =
    (property) => {
        return {
            id: property.id,
            title: property.title,
            rooms: `${property.rooms} ${getRoomWord(property.rooms)} `,
            squareMeter: `${property.squareMeter}m2`,
            notes: `${property.notes.substring(0, 240)}...`,
            price: `${property.price.toLocaleString()}€`,
            image: Array.isArray(property.images) ?
                property.images[0] : '',
        };
    };


const getRoomWord = (rooms) => {
    return rooms > 1 ? 'habitaciones' :
        'habitacion';
};