import axiosClient from "./axios";

const dashboardApi = {
    getById(id) {
        const url = `/${id}`;
        return axiosClient.get(url);
    }
}

export default dashboardApi;