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
      return store.trips.filter(
        function(dri) {
          return dri.tripId === this.driverId;
        }.bind(this)
      );
    }

    passengers(){
      return this.trips().map(trip => {
        return trip.passenger();
    });
    }


}

class Passenger {

  constructor(name) {
      this.id = ++passengerId;
      this.name = name;
      store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(
      function(dri) {
        return dri.tripId === this.passengerId;
      }.bind(this)
    );
  }

}


class Trip {
  constructor(driverId, passengerId) {
      this.id = ++tripId;
    if (driverId) {
      this.driverId = driverId.id;
    }
    if (passengerId) {
      this.passengerId = passengerId.id;
    }
      store.trips.push(this);
  }


  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
      });
    }

}
