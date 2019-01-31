export class coordenadas {

    constructor(accuracy: number,
        altitude: number,
        altitudeAccuracy: number,
        heading: number,
        latitude: number,
        longitude: number,
        speed: number) {
            this.accuracy = accuracy;
            this.altitude = altitude;
            this.altitudeAccuracy = altitudeAccuracy;
            this.heading = heading;
            this.latitude = latitude;
            this.longitude = longitude;
            this.speed = speed;
    }

    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;

}