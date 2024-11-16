document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault();
  
      // Get form data
      const formData = new FormData(form);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      };
  
      // Send data to backend (replace with your backend URL)
      try {
        const response = await fetch("https://your-backend-api.com/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          responseMessage.textContent = "Thank you for your message! We will get back to you soon.";
          form.reset();
        } else {
          responseMessage.textContent = "There was an error sending your message. Please try again later.";
        }
      } catch (error) {
        responseMessage.textContent = "An unexpected error occurred. Please try again later.";
      }
    });
  });
  