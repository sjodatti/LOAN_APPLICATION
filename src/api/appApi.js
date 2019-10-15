import React from 'react';

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
}

export default appApi;