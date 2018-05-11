let token = localStorage.getItem('token')
console.log('token :', token);
axios.get('http://35.198.212.156/api/image', {
  headers: {
    'authorization': token
  }
})
.then(response => {
  // console.log('response :', response.data.images);
  let images = response.data.images
  var app2 = new Vue({
    el: '#app2',
    data: {
      images,
      file: '',
    },
    methods: {
      submitFile() {
        let formData = new FormData();
        formData.append('image', this.file);
        axios.post('http://35.198.212.156/api/image',
          formData,
          {
            headers: {
              'authorization': localStorage.getItem('token'),
              'Content-Type': 'multipart/form-data',
            }
          }
        ).then(function () {
          console.log('SUCCESS!!');
          alert('success')
          window.location = 'http://127.0.0.1:8080/main.html'
        })
          .catch(function (error) {
            console.log('error :', error);
            console.log('FAILURE!!');
            alert('failed')
          });
      },
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      }
    }
  })
})
.catch(error => {
  console.log('error :', error);
})