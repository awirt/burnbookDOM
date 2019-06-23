var container = $(".appendContainer");
var submitButton = $(".submitButton");

submitButton.on("click", appendText);

function appendText(event) {
  event.preventDefault();
  
  var text = $(".userInputText").val();
  
  container.append(`
    <section class="messageContainer">
      <p>${text}.</p>
      <button>Delete</button>
    </section>
    `)
  
  $(".userInputText").val("")

  deleteText();
}

function deleteText(event) {
    event.preventDefault();
    var deleteButton = $("button");
    deleteButton.on("click", deleteText);
    event.target.parentNode.remove();
    }
