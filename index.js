var container = $(".appendContainer");
var submitButton = $(".submitButton");

submitButton.on("click", appendText);

function appendText(event) {
  event.preventDefault();
  
  var text = $(".userInputText").val();
  var messageToAppend = `
    <section class="messageContainer">
      <p>${text}</p>
      <button>Delete</button>
    </section>
    `;
  var localMessage = localStorage.getItem("messages");
  
  messageToAppend = messageToAppend + localMessage
  
  container.append(messageToAppend);
  localStorage.setItem("messages", messageToAppend);
  
  $(".userInputText").val("");
  
  var deleteButton = $("button");
  deleteButton.on("click", deleteText);
}

function deleteText(event) {
    event.preventDefault();
    event.target.parentNode.remove();
    }
