class Adapter{

  const meetupURL = 'http://localhost:3000/meetups';
  const postURL = 'http://localhost:3000/posts';


  static getMeetup() {
    return fetch(meetupURL).then(resp => resp.json())
  }


  static getPost(){
    return fetch(postURL).then(resp => resp.json())
  }

  static createPost(postContent){
    return fetch(postURL,{
      method: 'POST',
      headers: {
        'Accept': 'aplication/json'
        'Content-Type': 'application/json',
      }
      body: JSON.stringify(postContent)
    }).then(resp => resp.json())
  }
}
