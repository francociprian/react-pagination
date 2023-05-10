import axios from "axios"

export const axiosOne = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPostsPage = async (pageParam = 1) => {
    const response = await axiosOne.get(`/posts?_page=${pageParam}`)
    return response.data
}

export const axiosTwo = axios.create({
    baseURL: 'https://reqres.in/api'
})

export const getPantonePage = async (pageParam = 1) => {
    const response = await axiosTwo.get(`/unknown?page=${pageParam}`)
    return response.data
}
