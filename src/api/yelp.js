import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 8E0OecPvZcqfzqMg9Ju9b5mM3A76lUPEeGu8-kNHvi_D5stqCdsIRvqmM7gJUw9U1korvytyscvcEMiWywsdwAZTGR3ho1Eo8TLA9uZR6NOX5A0lXehfCSE7PHWNX3Yx'
    }
});
