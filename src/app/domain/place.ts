export interface Place {
    _id: string;
    name: string;
    location: Location;
    address: string;
    city: string;
    zipCode: number;
    image: string;
}

export interface Location {
    type: string;
    coordinates: number[];
}
