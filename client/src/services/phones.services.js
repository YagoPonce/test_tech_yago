import service from "./config.services";

// GET the list of mobile phones
const getPhonesListService = () => {
    return service.get("/api/phones")
}

// Get one mobilephone details
const getPhoneDetailsService = (id) => {
    return service.get(`/api/phones/${id}`)
}
export {
    getPhonesListService,
    getPhoneDetailsService
}  