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
            fetch('http://13.235.244.45:7500/v1/loanapplication', {
                method: 'POST',
                body: JSON.stringify(payload),
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
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
            fetch(`http://13.235.244.45:7500/v1/loanapplication/status?applicationId=${payload.applicationId}`, {
            }).then(response => {
                resolve(response.json())
            }).catch(error => {
                reject(error)
            })
        })

    }
}


export default appApi;