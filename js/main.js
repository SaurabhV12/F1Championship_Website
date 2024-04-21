/**
 * Your JS code here
 */

/**
 * Sample code
 */

      let currentSlide = 0;

      function showSlide(slideIndex) {
          const slidesContainer = document.querySelector('.slides');
          const slidesCount = document.querySelectorAll('.slide').length;

          if (slideIndex >= slidesCount) {
              currentSlide = 0;
          } else if (slideIndex < 0) {
              currentSlide = slidesCount - 1;
          } else {
              currentSlide = slideIndex;
          }

          slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
          updateIndicators();
      }

      function nextSlide() {
          showSlide(currentSlide + 1);
      }

      function prevSlide() {
          showSlide(currentSlide - 1);
      }

      function updateIndicators() {
          const indicators = document.querySelectorAll('.indicator');
          indicators.forEach((indicator, index) => {
              if (index === currentSlide) {
                  indicator.classList.add('active');
              } else {
                  indicator.classList.remove('active');
              }
          });
      }

      document.addEventListener('DOMContentLoaded', function () {
          // Set up navigation buttons
          document.querySelector('.next').addEventListener('click', nextSlide);
          document.querySelector('.prev').addEventListener('click', prevSlide);

          // Auto-slide every 3 seconds
          setInterval(nextSlide, 3000);

          // Create indicators
          const indicatorsContainer = document.createElement('div');
          indicatorsContainer.classList.add('indicators');
          document.querySelector('.slider').appendChild(indicatorsContainer);

          // Add indicators for each slide
          const slidesCount = document.querySelectorAll('.slide').length;
          for (let i = 0; i < slidesCount; i++) {
              const indicator = document.createElement('div');
              indicator.classList.add('indicator');
              indicator.addEventListener('click', () => showSlide(i));
              indicatorsContainer.appendChild(indicator);
          }

          updateIndicators();
      });

      // Function to edit team details
function editCSS(button) {
    // Find the row of the clicked button
    const row = button.closest('tr');

    // Get the values from the row
    const teamNo = row.querySelector('td:nth-child(1)').innerText;
    const teamName = row.querySelector('td:nth-child(2)').innerText;
    const headquarters = row.querySelector('td:nth-child(3)').innerText;
    const teamPrincipal = row.querySelector('td:nth-child(4)').innerText;
    const chassis = row.querySelector('td:nth-child(5)').innerText;
    const engine = row.querySelector('td:nth-child(6)').innerText;
    const drivers = row.querySelector('td:nth-child(7)').innerText;

    // Populate the popup form with the values
    document.getElementById('edit-team-no').value = teamNo;
    document.getElementById('edit-team-name').value = teamName;
    document.getElementById('edit-headquarters').value = headquarters;
    document.getElementById('edit-team-principal').value = teamPrincipal;
    document.getElementById('edit-chassis').value = chassis;
    document.getElementById('edit-engine').value = engine;
    document.getElementById('edit-drivers').value = drivers;

    // Display the popup form
    document.getElementById('edit-popup').classList.remove('hidden');
}

// Function to show the create popup form
function showCreatePopup() {
    // Reset the create form
    document.getElementById('create-form').reset();

    // Display the create popup form
    document.getElementById('create-popup').classList.remove('hidden');
}

    
    // Function to close the popup form
    function closePopup() {
        document.getElementById('edit-popup').classList.add('hidden');
    }
    
    // Handle form submission
    document.getElementById('edit-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Get the form values
        const formData = new FormData(event.target);
    
        // Handle form submission, e.g., send the data to a server or update the row directly
        // Implement your form submission logic here
    
        // Close the popup form
        closePopup();
    });
    
    
    function deletebutton(button) {
        // Get the delete confirmation popup and buttons
        const popup = document.getElementById('delete-confirmation-popup');
        const confirmDeleteButton = document.getElementById('confirm-delete');
        const cancelDeleteButton = document.getElementById('cancel-delete');
    
        // Get the table row (tr) element of the clicked button
        const row = button.parentElement.parentElement;
    
        // Show the delete confirmation popup
        popup.classList.remove('hidden');
    
        // Handle the "Delete" button click
        confirmDeleteButton.onclick = function () {
            // Delete the row
            row.remove();
    
            // Hide the popup
            popup.classList.add('hidden');
        };
    
        // Handle the "Cancel" button click
        cancelDeleteButton.onclick = function () {
            // Hide the popup
            popup.classList.add('hidden');
        };
    }
    
  
  // Function to edit driver details
  function editDriver(button) {
      // Find the row of the clicked button
      const row = button.closest('tr');
  
      // Get the values from the row
      const driverId = row.querySelector('td:nth-child(1)').innerText;
      const driverName = row.querySelector('td:nth-child(2)').innerText;
      const teamName = row.querySelector('td:nth-child(3)').innerText;
      const countryOfOrigin = row.querySelector('td:nth-child(4)').innerText;
  
      // Populate the popup form with the values
      document.getElementById('field1').value = driverId; // For driver ID
      document.getElementById('field2').value = driverName; // For driver name
      document.getElementById('field3').value = teamName; // For team name
      document.getElementById('field4').value = countryOfOrigin; // For country of origin
  
      // Display the popup form
      document.getElementById('edit-popup').classList.remove('hidden');
  }
  
  // Function to close the popup form
  function closePopup() {
      document.getElementById('edit-popup').classList.add('hidden');
  }
  
  // Handle form submission
  document.getElementById('edit-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get the form values
      const formData = new FormData(event.target);
  
      // Handle form submission (e.g., send data to a server or update the row directly)
      // Implement your form submission logic here
  
      // Close the popup form
      closePopup();
  });
  
  // Attach the function to the Edit buttons
  document.querySelectorAll('.fancy-button').forEach(button => {
      button.addEventListener('click', function() {
          editDriver(this);
      });
  });

  // Function to edit team league details
function editTeamLeague(button) {
    // Find the row of the clicked button
    const row = button.closest('tr');

    // Get the values from the row
    const teamId = row.querySelector('td:nth-child(1)').innerText;
    const teamName = row.querySelector('td:nth-child(2)').innerText;
    const league = row.querySelector('td:nth-child(3)').innerText;

    // Populate the popup form with the values
    document.getElementById('field1').value = teamId; // For team ID
    document.getElementById('field2').value = teamName; // For team name
    document.getElementById('field3').value = league; // For league

    // Display the popup form
    document.getElementById('edit-popup').classList.remove('hidden');
}

// Function to close the popup form
function closePopup() {
    document.getElementById('edit-popup').classList.add('hidden');
}

// Handle form submission
document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const formData = new FormData(event.target);

    // Handle form submission (e.g., send data to a server or update the row directly)
    // Implement your form submission logic here

    // Close the popup form
    closePopup();
});

// Attach the function to the Edit buttons
document.querySelectorAll('.fancy-button').forEach(button => {
    button.addEventListener('click', function() {
        editTeamLeague(this);
    });
});

  // Function to edit team details
function editCSS(button) {
    // Find the row of the clicked button
    const row = button.closest('tr');

    // Get the values from the row
    const teamNo = row.querySelector('td:nth-child(1)').innerText;
    const teamName = row.querySelector('td:nth-child(2)').innerText;
    const headquarters = row.querySelector('td:nth-child(3)').innerText;
    const teamPrincipal = row.querySelector('td:nth-child(4)').innerText;
    const chassis = row.querySelector('td:nth-child(5)').innerText;
    const engine = row.querySelector('td:nth-child(6)').innerText;
    const drivers = row.querySelector('td:nth-child(7)').innerText;

    // Populate the popup form with the values
    document.getElementById('team-no').value = teamNo;
    document.getElementById('team-name').value = teamName;
    document.getElementById('headquarters').value = headquarters;
    document.getElementById('team-principal').value = teamPrincipal;
    document.getElementById('chassis').value = chassis;
    document.getElementById('engine').value = engine;
    document.getElementById('drivers').value = drivers;

    // Display the popup form
    document.getElementById('edit-popup').classList.remove('hidden');
}

// Function to close the popup form
function closePopup() {
    document.getElementById('edit-popup').classList.add('hidden');
}

// Handle form submission
document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const formData = new FormData(event.target);

    // Handle form submission, e.g., send the data to a server or update the row directly
    // Implement your form submission logic here

    // Close the popup form
    closePopup();
});


// Attach the editCSS function to the Edit buttons
document.querySelectorAll('.fancy-button').forEach(button => {
    button.addEventListener('click', function() {
        editCSS(this);
    });
});

// Function to delete a row
function deleteRow(row) {
    row.remove();
}

// Function to handle delete button click
function handleDeleteButtonClick(button) {
    // Get the corresponding row
    const row = button.closest('tr');

    // Display confirmation popup
    const confirmDelete = confirm('Are you sure you want to delete this row?');
    if (confirmDelete) {
        deleteRow(row);
    }
}

// Attach the handleDeleteButtonClick function to all delete buttons
document.querySelectorAll('.fancy-delete-button').forEach(button => {
    button.addEventListener('click', function() {
        handleDeleteButtonClick(this);
    });
});





function showCreatePopup() {
    // Reset the create form if needed
    // Display the create popup form
    document.getElementById('create-popup').classList.remove('hidden');
}

function closeCreatePopup() {
    document.getElementById('create-popup').classList.add('hidden');
}

function showCreateForm() {
    document.getElementById('create-form-popup').classList.remove('hidden');
}

function closeCreateForm() {
    document.getElementById('create-form-popup').classList.add('hidden');
}

function createDriver(event) {
    event.preventDefault(); // Prevent form submission
    // Get input values
    var name = document.getElementById('driver-name').value;
    var team = document.getElementById('team').value;
    var country = document.getElementById('country').value;

    // Generate a unique ID (you may use a more robust method)
    var id = Math.floor(Math.random() * 1000);

    // Append new row to the table
    var table = document.querySelector('table tbody');
    var newRow = '<tr><td>' + id + '</td><td>' + name + '</td><td>' + team + '</td><td>' + country + '</td><td><button class="fancy-button" onclick="editDriver(this)">Edit</button></td><td><button class="fancy-delete-button" onclick="deletebutton(this)">Delete</button></td></tr>';
    table.innerHTML += newRow;

    // Close the form
    closeCreateForm();
}

////////////

function showCreateFormLeague() {
    document.getElementById('create-form-popup').classList.remove('hidden');
}

function closeCreateFormLeague() {
    document.getElementById('create-form-popup').classList.add('hidden');
}

function createTeamLeague(event) {
    event.preventDefault(); // Prevent form submission
    // Get input values
    var team = document.getElementById('team').value;
    var league = document.getElementById('league').value;

    // Generate a unique ID (you may use a more robust method)
    var id = Math.floor(Math.random() * 1000);

    // Append new row to the table
    var table = document.querySelector('table tbody');
    var newRow = '<tr><td>' + id + '</td><td>'  + team + '</td><td>' + league + '</td><td><button class="fancy-button" onclick="editDriver(this)">Edit</button></td><td><button class="fancy-delete-button" onclick="deletebutton(this)">Delete</button></td></tr>';
    table.innerHTML += newRow;

    // Close the form
    closeCreateFormLeague();
}

////////////////////////

var ctx = document.getElementById('myChart').getContext('2d');

    // Define the data for the chart
    var data = {
        labels: ['Red Bull', 'Mercedes', 'Ferrari', 'McLaren', 'AlphaTauri'],
        datasets: [{
            label: 'Wins',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [6, 10, 4, 3, 2]
        }]
    };

    // Configure the options for the chart
    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });


    