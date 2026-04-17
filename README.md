<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enrollment Form</title>
  <link rel="stylesheet" href="./style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

</head>

<body>


  <!-- Enrollment Section -->
  <section class="enrollment-section py-5">
    <div class="container">

      <!-- Heading -->
      <div class="text-center mb-5 text-white">
        <h2 class="fw-bold">Enrollment Form</h2>
        <p class="w-75 mx-auto">
          Fill out this professional enrollment form to register your details, select your desired IT course, and begin
          your learning journey today.
        </p>
      </div>

      <!-- Form Card -->
      <div class="card form-card shadow-lg p-4">
        <form onsubmit="enrollmentData(), event.preventDefault()">

          <div class="row">
            <!-- Left Side -->
            <div class="col-md-6">

              <div class="mb-3">
                <label class="form-label">Full Name</label>
                <input type="text" id="fullname" class="form-control" required>
              </div>

              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" id="email" class="form-control" required>
              </div>

              <div class="mb-3">
                <label class="form-label">Phone #</label>
                <input type="tel" id="phone" class="form-control" required>
              </div>

              <div class="mb-3">
                <label class="form-label">Education</label>
                <input type="text" id="education" class="form-control" required>
              </div>

              <div class="mb-3">
                <label class="form-label">Age</label>
                <input type="number" id="age" class="form-control">
              </div>

            </div>

            <!-- Right Side -->
            <div class="col-md-6">

              <div class="mb-3">
                <label class="form-label d-block">Gender</label>
                <div>
                  <input type="radio" id="male" name="gender" value="male"> Male
                  <input type="radio" id="female" name="gender" value="female" class="ms-3"> Female
                  <input type="radio" id="other" name="gender" value="other" class="ms-3"> Other
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Address</label>
                <textarea id="address" class="form-control" rows="3" required></textarea>
              </div>

              <div class="mb-3">
                <label class="form-label">Interest Course</label>
                <select id="course" class="form-select" required>
                  <option value="">Select Course</option>
                  <option value="web_dev">Web Development</option>
                  <option value="app_dev">App Development</option>
                  <option value="graphic_design">Graphic Design</option>
                  <option value="digital_marketing">Digital Marketing</option>
                  <option value="data_science">Data Science</option>
                  <option value="cyber_security">Cyber Security</option>
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label">Duration</label>
                <select id="duration" class="form-select" required>
                  <option value="">Select Duration</option>
                  <option value="1_year">1 Year</option>
                  <option value="2_years">2 Years</option>
                  <option value="3_years">3 Years</option>
                  <option value="6_months">6 Months</option>
                  <option value="1_month">1 Month</option>
                </select>
              </div>

            </div> 
          </div>

          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary px-5">Submit</button>
          </div>

        </form>
      </div>
    </div>
  </section>




</body>
<script src="./script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>



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


.enrollment-section {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.form-card {
  border-radius: 15px;
  animation: fadeInUp 1s ease-in-out;
}

.form-control,
.form-select {
  border-radius: 10px;
  transition: 0.3s;
}

.form-control:focus,
.form-select:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}

button.btn {
  border-radius: 30px;
  transition: 0.3s;
}

button.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</html>
