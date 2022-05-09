// let token = `b11d19240aa1e646db6829221e3cf7fc8a299f578c3bc7f4`
let token = `f8b81fbb32587d36e56925b2de60f75c97d80f9946a37227`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://artist-inventory-api.herokuapp.com//api/artists`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        }); 
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://artist-inventory-api.herokuapp.com//api/artists`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://artist-inventory-api.herokuapp.com//api/artists/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`https://artist-inventory-api.herokuapp.com/api/artists/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}
        
  

