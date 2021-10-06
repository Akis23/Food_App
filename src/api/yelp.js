import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer uwhI0E2Z7Vt1QCez2bcCszZL6_YhPe6aAJWYEFf9eW-vOs0tL44h3uqM0Zd8Q0HohIP6j_erUECuFdQ5xtn42QyzoVZr63YSjIVMtGzA_NuKOLppI0OMpFSzNS9cYXYx'
    }
});
