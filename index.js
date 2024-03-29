var container = $(".appendContainer");
var submitButton = $(".submitButton");
var deleteAllButton = $(".deleteAllButton");

submitButton.on("click", appendText);
deleteAllButton.on("click", deleteAllMessages);

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
   
  container.prepend(messageToAppend);
  
  localMessage = messageToAppend + localMessage
  localStorage.setItem("messages", localMessage);
  
  $(".userInputText").val("");
  
  var deleteButton = $("button");
  deleteButton.on("click", deleteText);
}

function deleteText(event) {
    event.preventDefault();
    event.target.parentNode.remove();
}

function deleteAllMessages(event) {
  event.preventDefault();
  localStorage.clear();
  console.log(container);
}

function refresh() {
  var allStoredMessages = localStorage.getItem("messages");
  if (allStoredMessages !== null){
    container.html(allStoredMessages);
  } else {
    container.html("");
  };
}

refresh();
