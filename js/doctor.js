export class Doctor {

  initiatePromise(api_key){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = api_key;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  getApi(promise){
    promise.then(function(response) {
      let body = JSON.parse(response);
      if(body.meta.total > 0){
        for(let i = 0; i < body.data.length +1; ++i){
        $('#output').append("Name: <h3>Dr. " + body.data[i].profile.first_name + " " + body.data[i].profile.last_name +"</h3>");
        $('#output').append("Practice: <h4>" + body.data[i].practices[0].name + "</h4>");
        $('#output').append("Phone: <h4>" + body.data[i].practices[0].phones[0].number + "</h4>");
        $('#output').append("Street: <h4>" + body.data[i].practices[0].visit_address.street + "</h4>");
        $('#output').append("City: <h4>" + body.data[i].practices[0].visit_address.city + "</h4>");
        $('#output').append("State: <h4>" + body.data[i].practices[0].visit_address.state_long + "</h4>");
        $('#output').append("Zip Code: <h4>" + body.data[i].practices[0].visit_address.zip + "</h4>");
        if(body.data[i].practices[0].accepts_new_patients){
          $('#output').append("Accepting new patients: <h4> Yes</h4>");
        }
        else{
          $('#output').append("Accepting new patients: <h4>No</h4>");
        }
      }
    }
    else{
      $('#output').append("<div class='error1'><h4>Hmm, couldn't find a doctor that matches this search query</h4></div><br>");
    }
  },
    function(error) {
      $('#error').text(`There was an error processing your request: ${error.message}`);
    });
  }

  clearApi(){
    $('#output').html('');
  }
}
