// const student = {
//     name: "ngo minh duc",
//     age: 21
// }



// function run(object){
//     let result = []
//     for (let key in object){
//         result = [...result,`Thuộc tính ${key} có giá trị ${object[key]}`]
//     }
//     return result
// }

// console.log(run(student))


// setTimeout(()=>{
//     console.log("log sau 2s")
// },5)

const asynchornus = () => {
    let number = 0
    let myPromise = new Promise(function (myResolve, myReject) {
        setTimeout(() => {
            myResolve(number = 2)
        }, 5)
    })
    myPromise.then(
        (result) => { console.log(result) }
    )
}


// xử lý bất đồng bộ
//làm việc với API - api : data của backend trả về
// callback
//promise
// asynchornus()

function tong(a, b) {
    return a + b;
}

function tru(a,b){
      return a - b;
}
function nhan (a,b){
      return a * b;
}
function chia (a,b){
      return a / b;
}
function tinhToan(a, b, hamTinh) {
    return hamTinh(a, b);
}

const arrayString = ["123","abc","xyz","456"]
Array.prototype.cauHinh = (ham)=>{
    let ketQua = []
    for(let i = 0; i< this.length ; i++){
        let traVe = ham(this[i],i);
        ketQua.push(traVe)
    }

    return ketQua
}

const newArray = arrayString.cauHinh((item,index)=>{
    return "Gia tri" + item
})

// const newArray = arrayString.map((item,index)=>{
//     return "Gia tri" +" "+ item
// })
console.log(newArray)
// console.log(nhan(3,4))
// console.log(tinhToan(3,4,nhan))

