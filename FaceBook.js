
// Test request : Postman
let userName = document.getElementById('userName');
let userId = document.getElementById('userId');
//Link đã tham khảo: https://stackoverflow.com/questions/523266/how-can-i-get-a-specific-parameter-from-location-search
// new URL(location.href).searchParams.get('year')
// // Returns 2008 for href = "http://localhost/search.php?year=2008".
// // Or in two steps:
// const params = new URL(location.href).searchParams;
// const year = params.get('year');

const params = new URL(location.href).searchParams;
const code = params.get('code');

//Đổi mã lấy mã truy cập
//Link đã tham khảo send by "Son Pham| PM": https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow
// GET https://graph.facebook.com/v15.0/oauth/access_token?
//    client_id={app-id}
//    &redirect_uri={redirect-uri}
//    &client_secret={app-secret}
//    &code={code-parameter}
fetch(`https://graph.facebook.com/v15.0/oauth/access_token?client_id=718763456098045&redirect_uri=https://9186-210-2-99-130.ap.ngrok.io/User.html&client_secret=7c4b2d61c9888935e89176c72b79b743&code=${code}`)
.then((response)=> response.json())
.then((responseData)=>{  //responseData is accessToken
  //Yêu cầu thông tin cá nhân của người dùng
  //Link đã tham khảo : https://viblo.asia/p/graph-api-user-access-token-L4x5xkOblBM
  // GET
  // "https://graph.facebook.com/{your-user-id}
  //   ?fields=birthday,email,hometown
  //   &access_token={your-user-access-token}"
  fetch(`https://graph.facebook.com/v15.0/me/?fields=name,id,birthday,email&access_token=${responseData.access_token}`)
    .then((response)=>response.json())
    .then((res)=>{
      userName.value=res.name,
      userId.value=res.id,
      console.log(res)
    }
        )
})
