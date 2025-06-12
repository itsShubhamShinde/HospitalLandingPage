 AOS.init();

 function toggleDarkMode() {
   document.body.classList.toggle('dark-mode');
 }

 document.querySelectorAll('.nav-link').forEach(link => {
   link.addEventListener('click', () => {
     const navbarCollapse = document.querySelector('.navbar-collapse');
     if (navbarCollapse.classList.contains('show')) {
       const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
       bsCollapse.hide();
     }
   });
 });

 
  const appointments = [];

  
  function addAppointment(data) {
    appointments.push(data);
    updateAppointmentUI();
  }


  function updateAppointmentUI() {
    const countSpan = document.getElementById('appointmentCount');
    const list = document.getElementById('appointmentList');


    countSpan.textContent = appointments.length;

    
    list.innerHTML = '';

    
    if (appointments.length === 0) {
      list.innerHTML = '<li><span class="dropdown-item text-muted">No Appointments</span></li>';
    } else {
      appointments.forEach(app => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="dropdown-item">${app.fullName}</span>`;
        list.appendChild(li);
      });
    }
  }

 
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;

    const appointmentData = {
      fullName: form.fullName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      department: form.department.value,
      message: form.message.value.trim()
    };

    if (
      appointmentData.fullName &&
      appointmentData.email &&
      appointmentData.phone &&
      appointmentData.department
    ) {
      addAppointment(appointmentData);
      form.reset(); 
    } else {
      alert("Please fill all required fields.");
    }
  });