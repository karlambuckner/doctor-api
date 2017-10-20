export class Doctor {
  doctorByIssue(issue) {
      let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`;
        console.log(url);
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.response));
          }
        };

        request.open("GET", url, true);
        request.send();
      });
   }

  doctorBySearch(search) {
      let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`;
        console.log(url);
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.response));
          }
        };

        request.open("GET", url, true);
        request.send();
      });
  }
}
