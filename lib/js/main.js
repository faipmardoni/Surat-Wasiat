var app = new Vue({
  el: '#app',
  data: {
    name: '',
    email: '',
  },
  methods: {
    getToken() {
      let userData = {
        name: this.name,
        email: this.email
      }
      axios.post('http://35.198.212.156/request-token', userData)
      .then(result => {
        localStorage.setItem('token', result.data.user.uid)
        window.location='/main.html'
      })
      .catch(error => {
        alert('error name and email is required')
        console.log('error :', error);
      })
    },
  }
})
