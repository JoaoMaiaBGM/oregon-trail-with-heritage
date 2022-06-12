class Traveler {
  constructor (name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt () {
    return this.food += 2;
  };

  eat () {
    if (this.food === 0) {
      this.isHealthy = false;
    } else {
      this.food -= 1;
    }
  };
  
}

class Wagon {
  constructor (capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount () {
    let seat = this.capacity - this.passengers.length;
    if (seat < 0) {
      return 0
    } else {
      return seat
    }
  
  }

  join (traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  
  }

  shouldQuarantine () {
    return this.passengers.some((traveler) => traveler.isHealthy === false);
  }

  totalFood () {
    return this.passengers.reduce((traveler1, traveler2) => {
      return traveler1 + traveler2.food
    }, 0)
  }

}