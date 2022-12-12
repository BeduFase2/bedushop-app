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
    }
};

export default RestService;