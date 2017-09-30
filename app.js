$(function(){
  $.get({
				url:	'http://127.0.0.1:8000/book/',
				dataType:	'JSON',
				data:	{}
})
.done(function(result){
  //
  var body = $("body");
  $(result).each(function(index, element){
      var newp = $('<p>')
      newp.text(element.title);
      body.append(newp);
  });


}).fail(function(xhr, status, error){
  console.log("Status: ", status, "Error ", error);
}).always(function(xhr, status){
  console.log("Status: ", status);
});
});
