
  /* clipboard js */
  const clipboardHero = new ClipboardJS('.copy-email-btn_hero');
  const clipboardContact = new ClipboardJS('.copy-email-btn_contact');
  
  // Function to handle button text change without affecting the icon
  function changeButtonText(e, newText) {
    const buttonText = e.trigger.querySelector('.button-text');
    buttonText.textContent = newText; // Only change the text inside the span
  }

  // Add click event listeners to prevent default behavior (e.g., form submission or link navigation)
  document.querySelectorAll('.copy-email-btn_hero, .copy-email-btn_contact').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior (like jumping to the top)
    });
  });

  clipboardHero.on('success', function(e) {
    changeButtonText(e, 'Copied!'); // Change the text to "Copied!"
    e.clearSelection();
    setTimeout(() => {
      changeButtonText(e, 'Copy Email'); // Revert to "Copy Email" after 2 seconds
    }, 2000);
  });
  
  clipboardContact.on('success', function(e) {
    changeButtonText(e, 'Copied!'); // Change the text to "Copied!"
    e.clearSelection();
    setTimeout(() => {
      changeButtonText(e, 'Copy Email'); // Revert to "Copy Email" after 2 seconds
    }, 2000);
  });

/*
<a href="/" data-clipboard-text="viniciusmoreira.me@gmail.com" data-discover="true" aria-current="page" class="copy-email-btn_contact">
  <div class="">
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.5V1.5H10V2.5H5ZM4.75 0.5C4.33579 0.5 4 0.835786 4 1.25V1.5H3.5C2.67157 1.5 2 2.17157 2 3V13C2 13.8284 2.67157 14.5 3.5 14.5H7V13.5H3.5C3.22386 13.5 3 13.2761 3 13V3C3 2.72386 3.22386 2.5 3.5 2.5H4V2.75C4 3.16421 4.33579 3.5 4.75 3.5H10.25C10.6642 3.5 11 3.16421 11 2.75V2.5H11.5C11.7761 2.5 12 2.72386 12 3V7.5H13V3C13 2.17157 12.3284 1.5 11.5 1.5H11V1.25C11 0.835786 10.6642 0.5 10.25 0.5H4.75ZM9 9C9 9.27614 8.77614 9.5 8.5 9.5C8.22386 9.5 8 9.27614 8 9C8 8.72386 8.22386 8.5 8.5 8.5C8.77614 8.5 9 8.72386 9 9ZM10.5 9.5C10.7761 9.5 11 9.27614 11 9C11 8.72386 10.7761 8.5 10.5 8.5C10.2239 8.5 10 8.72386 10 9C10 9.27614 10.2239 9.5 10.5 9.5ZM13 9C13 9.27614 12.7761 9.5 12.5 9.5C12.2239 9.5 12 9.27614 12 9C12 8.72386 12.2239 8.5 12.5 8.5C12.7761 8.5 13 8.72386 13 9ZM14.5 9.5C14.7761 9.5 15 9.27614 15 9C15 8.72386 14.7761 8.5 14.5 8.5C14.2239 8.5 14 8.72386 14 9C14 9.27614 14.2239 9.5 14.5 9.5ZM15 11C15 11.2761 14.7761 11.5 14.5 11.5C14.2239 11.5 14 11.2761 14 11C14 10.7239 14.2239 10.5 14.5 10.5C14.7761 10.5 15 10.7239 15 11ZM14.5 13.5C14.7761 13.5 15 13.2761 15 13C15 12.7239 14.7761 12.5 14.5 12.5C14.2239 12.5 14 12.7239 14 13C14 13.2761 14.2239 13.5 14.5 13.5ZM14.5 15.5C14.7761 15.5 15 15.2761 15 15C15 14.7239 14.7761 14.5 14.5 14.5C14.2239 14.5 14 14.7239 14 15C14 15.2761 14.2239 15.5 14.5 15.5ZM8.5 11.5C8.77614 11.5 9 11.2761 9 11C9 10.7239 8.77614 10.5 8.5 10.5C8.22386 10.5 8 10.7239 8 11C8 11.2761 8.22386 11.5 8.5 11.5ZM9 13C9 13.2761 8.77614 13.5 8.5 13.5C8.22386 13.5 8 13.2761 8 13C8 12.7239 8.22386 12.5 8.5 12.5C8.77614 12.5 9 12.7239 9 13ZM8.5 15.5C8.77614 15.5 9 15.2761 9 15C9 14.7239 8.77614 14.5 8.5 14.5C8.22386 14.5 8 14.7239 8 15C8 15.2761 8.22386 15.5 8.5 15.5ZM11 15C11 15.2761 10.7761 15.5 10.5 15.5C10.2239 15.5 10 15.2761 10 15C10 14.7239 10.2239 14.5 10.5 14.5C10.7761 14.5 11 14.7239 11 15ZM12.5 15.5C12.7761 15.5 13 15.2761 13 15C13 14.7239 12.7761 14.5 12.5 14.5C12.2239 14.5 12 14.7239 12 15C12 15.2761 12.2239 15.5 12.5 15.5Z" fill="currentColor"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="15" height="15" fill="white" transform="translate(0 0.5)"></rect>
        </clipPath>
      </defs>
    </svg>
  </div>
  <span class="w-text button-text">Copy Email</span>
</a>
*/