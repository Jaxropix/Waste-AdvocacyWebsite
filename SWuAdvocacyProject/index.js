document.addEventListener("DOMContentLoaded", function() {

  const signNowButton = document.getElementById("sign-now-button");
 
  // Add event listener for the click event
  signNowButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the validateForm function
    validateForm();
  });

  // Define the validateForm function
  function validateForm() {
    // Retrieve form inputs
    const nameInput = document.getElementById("name");
    const hometownInput = document.getElementById("hometown");
    const emailInput = document.getElementById("email");

    // Check if the form inputs are valid
    if (nameInput.value.trim() === "") {
      alert("Please enter a valid name.");
      return;
    }

    if (hometownInput.value.trim() === "") {
      alert("Please enter a valid hometown.");
      return;
    }

    if (!isValidEmail(emailInput.value.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    // If all inputs are valid, proceed to add the signature
    addSignature({
      name: nameInput.value.trim(),
      hometown: hometownInput.value.trim()
    });

    displayModal(nameInput.value.trim(), hometownInput.value.trim());
    
    // Clear the form inputs
    nameInput.value = "";
    hometownInput.value = "";
    emailInput.value = "";
    
  }

    // Display the modal with personalized message
  

  // Define the addSignature function
  function addSignature(person) {
    // Get the signatures container
    const signaturesContainer = document.querySelector('.signatures');

    // Create a new paragraph element
    const signatureParagraph = document.createElement('p');

    // Set the text content of the paragraph
    signatureParagraph.textContent = `🖊️ ${person.name} from ${person.hometown} supports this cause.`;

    // Append the paragraph to the signatures container
    signaturesContainer.appendChild(signatureParagraph);
  }

  // Define the isValidEmail function
  function isValidEmail(email) {
    // Regular expression pattern for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  // Add event listener to the close button
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', closeModal);

  function displayModal(name, hometown) {
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modal-message');

    // Set personalized message
    modalMessage.textContent = `Thank you for your support, ${name} from ${hometown}!`;

    // Show modal
    modal.style.display = 'block';

    // Hide modal after 5 seconds
    setTimeout(() => {
      modal.style.display = 'none';
    }, 5000);
  }

});
