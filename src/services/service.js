// const url = 'http://localhost:3000/api';
const url = 'https://shop-api-production-583b.up.railway.app/api';

const RestService = {
    signIn: async function(data = {}) {
        const response = await fetch(`${url}/auth/login`, { 
            method: "POST", 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify(data) 
        });

        return response.json();
    },
    signUp: async function(data = {}) {
        const response = await fetch(`${url}/auth/signup`, { 
            method: "POST", 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify(data) 
        });

        return response.json();
    },
    verifyUser: async function(token = '') {
        const response = await fetch(`${url}/users/self`, { 
            method: 'GET', 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'authorization': token
            }
        });

        return response.json();
    },
    getProducts: async function(token = '') {
        const response = await fetch(`${url}/products`, { 
            method: 'GET', 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'authorization': token
            }
        });

        return response.json();
    },
    getReviews: async function(token = '') {
        const response = await fetch(`${url}/reviews`, { 
            method: 'GET', 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'authorization': token
            }
        });

        return response.json();
    }
};

export default RestService;