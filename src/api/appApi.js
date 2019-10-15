import React from 'react';
import applicationStatusDetails from '../json/getApplicationStatus.json';

const offline = true;

class appApi extends React.Component {
    static createUser(payload) {
        return new Promise((resolve, reject) => {
            offline ? resolve({ name: "Sagar" }) : fetch('https://example.com', {
                credentials: 'omit'
            }).then(response => {
                resolve(response.json())
            }).catch(error => {
                reject(error)
            })
        })

    }
    static loanApplication(payload) {
        return new Promise((resolve, reject) => {
            offline ? resolve({ loanStatus: "Success" }) : fetch('https://example.com', {
                credentials: 'omit'
            }).then(response => {
                resolve(response.json())
            }).catch(error => {
                reject(error)
            })
        })

    }

    static uploadDocument(payload) {
        return new Promise((resolve, reject) => {
            offline ? resolve({ docStatus: "uploaded" }) : fetch('https://example.com', {
                credentials: 'omit'
            }).then(response => {
                resolve(response.json())
            }).catch(error => {
                reject(error)
            })
        })

    }
    static getApplicationStatus(payload) {
        return new Promise((resolve, reject) => {
            offline ? resolve(applicationStatusDetails) : fetch('https://example.com', {
                credentials: 'omit'
            }).then(response => {
                resolve(response.json())
            }).catch(error => {
                reject(error)
            })
        })

    }
}


export default appApi;