const { AirportRepository } = require('../repository/index')

class AirportService {

    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data) {
        try {
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        }
        catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }

    }
    async createAirports(data) {
        try {
            const airports = await this.airportRepository.bulkCreateAirports(data);
            return airports;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async deleteAirport(airportId) {

        try {
            const response = await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async updateAirport(airportId, data) {

        try {
            const response = await this.airportRepository.updateAirport(airportId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async getAirport(airportId) {
        try {
            const response = await this.airportRepository.getAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }

    }
    async getAllAirports({ name }) {
        try {
            if (name) {
                const airports = await this.airportRepository.getAllAirports(name);
                return airports;
            }
            const response = await this.airportRepository.getAllAirports();
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }


    async deleteAllAirportsOfACity(cityId) {

        try {
            const response = await this.airportRepository.deleteAllAirportOfACity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
}
module.exports = AirportService;