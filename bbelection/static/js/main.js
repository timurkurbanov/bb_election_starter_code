document.addEventListener("DOMContentLoaded", function() {

axios.get('https://bb-election-api.herokuapp.com/')
  .then((response) => {
    let data = response.data.candidates;
    let candidateList = document.querySelector('#candidates');
    data.forEach(function (candidate) {
      let candidateInfo = document.createElement('li');
      candidateInfo.innerText = candidate.name + '\n' + 'votes:' + candidate.votes
      candidateList.appendChild(candidateInfo)
    })
  });
});