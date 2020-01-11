axios.defaults.baseURL = 'http://localhost:7001';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


document.querySelector('#b1').onclick = function () {
    let b1 = document.querySelector('#dname').value;
    console.log(b1)
    axios.post('/dianpu', {
            dname: b1
        })
        .then(res => {
            console.log(res)
            console.log(res.data.result);
            console.log(res.data.code)
            if (res.data.code==1) {
                document.querySelector('.buttom').style.display="block"
                document.querySelector('h4').innerHTML = res.data.result.dname;
                document.querySelector('#dimg').src = res.data.result.img;
                document.querySelector('#info').innerHTML = res.data.result.info;
                document.querySelector("#a").href=res.data.result.a;
                document.querySelector("#a").innerHTML='进入店铺';
                document.querySelector('#info-box').style.backgroundColor="wheat";
            } else if(res.data.code==0){
                document.querySelector('.buttom').style.display="none";
                alert("对不起，没找到您搜索的店铺名称或编号")
                // document.querySelector('h4').innerHTML = '没有找到店铺';
                // document.querySelector('#dimg').src = '';
                // document.querySelector('#info').innerHTML = '';
                // document.querySelector("#a").src=''
                // document.querySelector("#a").innerHTML=''
                // document.querySelector('#info-box').style.backgroundColor=""
            }
        })
        .catch(err => {
            console.error(err);
        })
}

document.querySelector('#b2').onclick=function(){
    let b2=document.querySelector('#did').value;
    console.log(b2);
    axios.post('./dianpu1',{did:b2})
    .then(res => {
        console.log(res)
        if (res.data.code==1) {
            document.querySelector('.buttom').style.display="block"
            document.querySelector('h4').innerHTML = res.data.result.dname;
            document.querySelector('#dimg').src = res.data.result.img;
            document.querySelector('#info').innerHTML = res.data.result.info;
            document.querySelector("#a").href=res.data.result.a;
            document.querySelector("#a").innerHTML='进入店铺';
            document.querySelector('#info-box').style.backgroundColor="wheat";
        } else if(res.data.code==0){
           document.querySelector('.buttom').style.display="none";
           alert("对不起，没找到您搜索的店铺名称或编号")
           
        }
    })
    .catch(err => {
        console.error(err); 
    })
}
