// Filter Pets by Type
function filterPets(type) {
    const pets = document.querySelectorAll('.pet-card');
    pets.forEach((pet) => {
      if (type === 'all' || pet.getAttribute('data-type') === type) {
        pet.style.display = 'block';
      } else {
        pet.style.display = 'none';
      }
    });
  }
  
  // Open Adoption Form
  function openForm(petName) {
    document.getElementById('adoptionForm').style.display = 'flex';
    document.getElementById('petName').innerText = petName;
  }
  
  // Close Adoption Form
  function closeForm() {
    document.getElementById('adoptionForm').style.display = 'none';
  }
//image slidder

