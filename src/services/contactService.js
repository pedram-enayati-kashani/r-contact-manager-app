import axios from "axios";
import contacts from "../components/Contacts/Contacts";

const SERVER_URL = "http://localhost:9000";

// @desc Get All Contact
// @route Get http://localhost:9000/contacts
export const getAllContacts = () => {
    const url = `${SERVER_URL}/contacts`;
    return axios.get(url);
}

// @desc Get Contact With Contact ID
// @route Get http://localhost:9000/contacts/:contactId
export const getContacts = (contactID) =>{
    const url = `${SERVER_URL}/contacts/${contactID}`;
    return axios.get(url);
}

// @desc Get all groups
// @route Get http://localhost:9000/groups
export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}

// @desc Get groups With group ID
// @route Get http://localhost:9000/groups/:groupId
export const getGroup = (groupId) =>{
    const url = `${SERVER_URL}/groups/${groupId}`;
    return axios.get(url);
}

// @desc Create New Contact
// @route Get http://localhost:9000/contacts
export const createContact = (contact) =>{
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact);
}

// @desc Update Contact With Contact ID
// @route Get http://localhost:9000/contacts/:contactId
export const updateContact = (contact,contactId) =>{
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact);
}

// @desc Delete Contact With Contact ID
// @route Get http://localhost:9000/contacts/:contactId
export const deleteContact = (contactId) =>{
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url);
}