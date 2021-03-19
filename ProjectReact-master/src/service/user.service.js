import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class UserService{

    /**
     * Get list of todos
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async list(limit = null){
        let call = await axios.get(`${baseUrl}/users`);
        let users =limit !== null ? call.data.slice(0, limit) : call.data;
        let todos = await axios.get(`${baseUrl}/todos`);

        //Correspondance entre les todos et les utilisateurs
        for (let user of users) {
            for (const todo of todos.data) {
                if(user.id === todo.userId){
                    todo.user = user;
                }
            }
        }
        return (todos);
    }

    /**
     * Create todos
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async create(data){
        return await axios.post(`${baseUrl}/users`, data);
    }
    static async detail(id){
        return await axios.get(`${baseUrl}/users/${id}`)
    }
    static async update(id,data){
        return await axios.put(`${baseUrl}/users/${id}`,data);
    }
    static async delete(id){
        return await axios.delete(`${baseUrl}/users/${id}`);
    }
}

