function toggleSizeColorSelection() {
    const sizeColorDiv = document.querySelector('.size-color-selection');
    // Toggle visibility
    if (sizeColorDiv.style.display === 'none' || sizeColorDiv.style.display === '') {
      sizeColorDiv.style.display = 'block'; // Show the selection
    } else {
      sizeColorDiv.style.display = 'none'; // Hide the selection
    }
  }
  