


function enrollmentData() {

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let education = document.getElementById("education").value;
    let age = document.getElementById("age").value;
    let male = document.getElementById("male").value;
    let female = document.getElementById("female").value;
    let other = document.getElementById("other").value;
    let address = document.getElementById("address").value;
    let course = document.getElementById("course").value;
    let duration = document.getElementById("duration").value;

    let studentData = {

        fullname: fullname,
        email: email,
        phone: phone,
        education: education,
        age: age,
        gender: [male, female, other],
        address: address,
        course: course,
        duration: duration
    }

    console.log(studentData);
    alert("Your Enrollment Successfully!😊")


    document.getElementById("fullname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("education").value = ""
    document.getElementById("age").value = ""
    document.getElementById("male").value = ""
    document.getElementById("female").value = ""
    document.getElementById("other").value = ""
    document.getElementById("address").value = ""
    document.getElementById("course").value = ""
    document.getElementById("duration").value = ""

}