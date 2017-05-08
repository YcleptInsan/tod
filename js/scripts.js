////////////////// Business Logic //////////////////
function Task(title, description, time, notes) {
  this.inputTitle = title,
  this.inputDescription = description;
  this.inputTime = time,
  this.inputNotes = notes
};

////////////////// User Logic //////////////////
$(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    $("taskResults").hide();
    var inputTitle = $("#taskTitle").val();
    var inputDescription = $("#taskDescription").val();
    var inputTime = $("#taskTime").val();
    var inputNotes = $("#taskNotes").val();

    var newTask = new Task(inputTitle, inputDescription, inputTime, inputNotes);

    $(".listTask").append("<li><span class='tasks'>" + newTask.inputTitle + "</span></li>");

    $(".tasks").last().click(function() {
      $(".taskResults").show();
      $(".titleResults").text(newTask.inputTitle);
      $(".descriptionResults").text(newTask.inputDescription);
      $(".timeResults").text(newTask.inputTime);
      $(".notesResults").text(newTask.inputNotes);

      $("#delete").click(function () {
        $("li").last().remove();
      });
    });
    $(".titleResults").text("");
    $(".descriptionResults").text("");
    $(".timeResults").text("");
    $(".notesResults").text("");

  });
});
