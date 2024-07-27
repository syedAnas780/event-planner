const eventForm = document.getElementById('event-form');  
const eventList = document.getElementById('events');  
  
eventForm.addEventListener('submit', (e) => {  
  e.preventDefault();  
  const eventName = document.getElementById('event-name').value;  
  const eventDate = document.getElementById('event-date').value;  
  const eventTime = document.getElementById('event-time').value;  
  const eventLocation = document.getElementById('event-location').value;  
  
  const eventHTML = `  
   <li>  
    <h3>${eventName}</h3>  
    <p>Date: ${eventDate}</p>  
    <p>Time: ${eventTime}</p>  
    <p>Location: ${eventLocation}</p>  
   </li>  
  `;  
  
  eventList.innerHTML += eventHTML;  
  
  eventForm.reset();  
});
