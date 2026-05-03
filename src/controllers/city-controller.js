const { CityService } = require('../services/index');

const cityService = new CityService();
//POST /city
const create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Failed to create city",
            err:error
        });
    }

}
//DELETE /city/:id
const destroy =async  (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted the city",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Failed to delete city",
            err:error
        });
    }
}
//patch /city/:id
const update = async (req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        console.log("Response from service layer in controller", response );
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully updated the city",
            err:{}
        });
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Failed to fetch city",
            err:error
        });

    }

}
// GET /city/:id
const get = async (req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched the city",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Failed to fetch city",
            err:error
        });
    }

}

const getAll = async (req,res)=>{
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched all the cities",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Failed to fetch cities",
            err:error
        });
    }

}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}