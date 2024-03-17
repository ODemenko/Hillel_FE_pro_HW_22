document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userData');
    const saveButton = document.getElementById('saveButton');
    const userDataDisplay = document.getElementById('userDataDisplay');
  
    saveButton.addEventListener('click', function() {
      displayFormData();
    });
  
    function displayFormData() {
      const formData = {
        Name: form.name.value,
        Surname: form.surname.value,
        'Date of Birth': form.date.value,
        Gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
        City: form.city.value,
        Address: form.address.value,
        'Languages': [],
      };
  
      document.querySelectorAll('input[name="languages"]:checked').forEach(function(checkbox) {
        formData['Languages'].push(checkbox.value);
      });
      const table = document.createElement('table');
      const tbody = document.createElement('tbody');
  
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          const tr = document.createElement('tr');
          const th = document.createElement('th');
          const td = document.createElement('td');
  
          th.textContent = key;
          td.textContent = Array.isArray(formData[key]) ? formData[key].join(', ') : formData[key];
  
          tr.appendChild(th);
          tr.appendChild(td);
          tbody.appendChild(tr);
        }
      }
  
      table.appendChild(tbody);
  
      userDataDisplay.innerHTML = '';
      userDataDisplay.appendChild(table);
    }
});