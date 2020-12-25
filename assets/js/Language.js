$('[lang="en"]').hide();

$('#switch-lang').click(function() {
  $('[lang="gr"]').toggle();
  $('[lang="en"]').toggle();
});