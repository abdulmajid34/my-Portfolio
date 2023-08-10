import { defineStore } from 'pinia'

export const useContactFormStore = defineStore('contact_module', {    
    state: () => ({
        // Your state properties go here
        isLoading: false,
        isSuccess: false,
        isError: false

    }),
    getters: {
      
    },
    actions: {
      async submit_form_contact(payload) {
        this.isLoading = true        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxWj6EfrFD2N8L2tTxu2arWBMijLk_HofMdCm99LYoUg0jiG-CWydhMEpkNbBB4ANhB9A/exec';
        await fetch(scriptURL, {
            method: 'POST',
            body: new FormData(payload)
        })
        .then((resp => {
            console.log('Success!', resp)
            this.isLoading = false
            this.isSuccess = true
        }))
        .catch((err) => {
            console.log("Error!", err);
            this.isLoading = false
            this.isError = true
        })
      }
    },
  })