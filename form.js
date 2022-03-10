


function handleSubmit() {
    let myName = document.getElementById('name').value;
    let myPass = document.getElementById('pass').value;
    // if (myName === "" && myPass === "") {
    //     alert('All the input field is mandatory');
    // return { myName, myPass };
    if( myName ==='' && myPass ===''){
        alert("Please fill all fields...!!!!!!");
        return false;
    }   

}
