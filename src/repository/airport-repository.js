const { Op } = require('sequelize');
const { Airport } = require('../models/index')

class AirportRepository {

    async createAirport(data) {
        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async bulkCreateAirports(data) {
        try {
            const airports = await Airport.bulkCreate(data);
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async deleteAirport(airportId) {
        try {
            const airport = await Airport.destroy({
                where: {
                    id: airportId
                }
            })
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async deleteAllAirportOfACity(cityId) {
        try {
            const airport = await Airport.destroy({
                where: {
                    cityId: cityId
                }
            })
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async updateAirport(airportId, data) {
        try {
            //const response  = await Airport.update(data,{
            //    where:{
            //        id: cityId
            //    }
            //})
            const airport = await this.getAirport(airportId);
            airport.name = data.name;
            airport.address = data.address;
            airport.cityId = data.cityId;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }

    }
    async getAirport(cityId) {
        try {
            const airport = await Airport.findByPk(cityId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async getAllAirports(name) {
        try {
            if (name) {
                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: name
                        }

                    }
                })
                return airports;
            }
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
}
module.exports = AirportRepository;