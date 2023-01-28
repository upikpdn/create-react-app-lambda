import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL

export const getPahlawanList = async() =>{
    const pahlawan = await axios.get(`${baseUrl}`)
    return pahlawan.data
}

export const searchPahlawan = async(q) =>{
    const cari = await axios.get(`${baseUrl}?name=${q}`)
    return cari.data
}