const { AirportService } = require('../services/index');

const airportService = new AirportService();
//POST /city
const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created a airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create airport",
            err: error
        });
    }

}
const creates = async (req, res) => {
    try {
        const airports = await airportService.createAirports(req.body);
        return res.status(201).json({
            data: airports,
            success: true,
            message: "Successfully created a airports",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create airports",
            err: error
        });
    }
}
//DELETE /city/:id
const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to delete airport",
            err: error
        });
    }
}
//patch /city/:id
const update = async (req, res) => {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        console.log("Response from service layer in controller", response);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to update airport",
            err: error
        });

    }

}
// GET /city/:id
const get = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched the airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch city",
            err: error
        });
    }

}

const getAll = async (req, res) => {
    try {
        const response = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all the airports",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch airports",
            err: error
        });
    }

}

module.exports = {
    create,
    creates,
    destroy,
    update,
    get,
    getAll
}