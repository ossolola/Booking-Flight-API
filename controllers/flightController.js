const {Flights} = require("../models/Flight");


// Get all Flights
exports.getFlights = async (req, res) => {
  try {
    const flight = Flights;

    res.status(200).json({
      message: "All Flights",
      flight
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}


// Add or Book Flight
exports.bookFlight = async  (req, res) => {
    try {
        const newFlight = {
            id : Flights.length + 1,
            title : req.body.title,
            time : new Date().toLocaleTimeString(),
            price : req.body.price,
            date : new Date().toLocaleDateString()
        }

        Flights.push(newFlight);
        res.status(200).json({
            message: "Flight Booked Successfully",
            newFlight
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

  
  // Get Single Flight 
  exports.getSingleFlight = async (req, res) => {
    // get flight_id from client request
    const id = req.params.id;
  
    // fetch flight with the id, if it exists
    const flight = Flights.find((flight) => {
      return flight.id === parseInt(id);
    })
  
    if (flight) {
      res.status(200).json({
        message: "flight found",
        flight
      })
    }else {
      res.status(404).json({
        message : "flight not found"
      })
    }
  }
  
  
  // Update or Edit a Flight
  exports.updateFlight = async (req, res) => {
    // get flight_id from client request
    const id = req.params.id;
  
    // fetch flight with the id, if it exists
    const flight = Flights.find((flight) => {
      return flight.id === parseInt(id);
    })
  
    if (flight) {
      flight.title = req.body.title;
      flight.price = req.body.price;
  
      res.status(200).json({
        message: "flight updated",
        flight
      })
    } else {
      res.status(404).json({
        message: "flight details not found"
      })
    }
}

// Deleting a flight
exports.deleteFlight = async (req, res) => {
    const id = req.params.id;

    const flight = Flights.find((flight) => {
        return flight.id === parseInt(id)
    });

    if (flight) {
        Flights.splice(Flights.indexOf(flight), 1);

        res.status(200).json({
            message: "flight deleted",
            flight
        })
    } else {
        res.status(404).json({
            message: "flight not found"
        })
    }
}
