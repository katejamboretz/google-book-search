import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the google books api for
export default {
    getBooks: function (query) {
        // return axios.get("/search/", { query });
        return axios.get("/api/search", { params: { q: query } });
    }
};
