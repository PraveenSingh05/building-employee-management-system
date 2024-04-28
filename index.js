let container=document.getElementsByClassName("container");

let data=[];

// get the data

fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data.data);
    displayData(data);
})

function displayData(data){
    data.forEach(el,i => {
        let table=document.getElementsByClassName("wrapper");
        let td1=document.createElement("td");
        td1.textContent=el.id;

        let td2=document.createElement("td");
        td2.textContent=el.name;

        let td3=document.createElement("td");
        td3.textContent=el.gender;

        let td4=document.createElement("td");
        td4.textContent=el.department;

        let td5=document.createElement("td");
        td5.textContent=el.salary;

        table.append(td1,td2,td3,td4,td5);
        container.append(table);

    });

}