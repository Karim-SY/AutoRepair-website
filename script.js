function getSelectedService() {
    const form = document.getElementById('serviceForm');
    const selectedService = form.elements['service'].value;
    alert('Selected Service: ' + selectedService);
