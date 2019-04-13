  let driverId = 0;
  let passengerId = 0;
  let tripId = 0;
  let store = { drivers: [], passengers: [], trips: [] };
class Driver {

    constructor(name) {
        this.id = ++driverId;
        this.name = name;
        store.drivers.push(this);
    }

    trips() {
      return this.trips.count();
    }

    passengers(){
      return this.passengers.count();
    }

}

class Passenger {

  constructor(name) {
      this.id = ++passengerId;
      this.name = name;
      store.passengers.push(this);
  }


}


class Trip {
  constructor(driverId, passengerId) {
      this.id = ++tripId;
      this.driverId = driverId;
      this.passengerId = passengerId;
  }

  driver(){
    dri = Driver.find(driverId);
    return dri.name;
  }
  passenger(){
    pass = Passenger.find(passengerId);
    return pass.name;
  }

}
