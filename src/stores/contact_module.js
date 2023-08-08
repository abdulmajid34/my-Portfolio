import { defineStore } from 'pinia'

export const useContactFormStore = defineStore('contact_module', {    
    state: () => ({
        // Your state properties go here
    }),
    getters: {
      
    },
    actions: {
      async submit_form_contact(payload) {
        console.log(payload, 'payload');
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzj5JceFGwVxiVSsXE_sxG9dvT0a1SDyeS28ZCPY-nkXbQhh3UaPxZBsOnnReDqvHXH/exec';
        await fetch(scriptURL, {
            method: 'POST',
            body: new FormData(payload)
        })
        .then((resp => {
            console.log('Success!', resp)
        }))
        .catch((err) => {
            console.log("Error!", err);
        })
      }
    },
  })