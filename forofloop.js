//for of loop
var resume={"name":"Arulmozhidevi Tamilmani","age":35,"address":"Navalakha Ritz","location":"kharadi","city":"Pune","Educational qualification":"B.E ComputerScience","skill":"program developing","year of passing":2010,"Training in":"Full stack development","Percentage scored":75,"Area of Interest":"listening music and reading books"}
console.log(Object.keys(resume))
for(var data of Object.keys(resume))
{
console.log(`value:${resume[data]}`)
}