var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function(){
  $("#keyword").keyup(function(){
    $("#list").empty();
    if(!$("#keyword").val()){return false;}
    var increment_text = $("#keyword").val();
    var increment_results = [];
    $.each(fruits, function(i, fruit){
      if(fruit.indexOf(increment_text) == 0){
        increment_results.push(fruit)
      }
    });
    result_return(increment_results);
  });

  $('#submit').on('click',function(){
    $("#list").empty();
    var text = $("#keyword").val();
    if(!text || text.match(/^\s+$/)){ empty_message(text); return;};
    var re =/^\s*(\S*)\s*(\S*)\s*(\S*).*$/i;
    match_text = text.match(re);

    var results = [];
    $.each(fruits, function(i, fruit){
      for(var i = 1; i <= 3; i++){
        if(!match_text[i]){return true;}
        //部分一致
        if(fruit.indexOf(match_text[i]) == 0){
          results.push(fruit)
        }
      }
    });
    if(results == false){empty_message(text)};
    result_return($.unique(results));
    $("#keyword").val("");
  });

  function result_return(results){
    $.each(results, function(i, result){
      $("#list").append("<li class=\"result\">"+result+"</li>");
    });
    return true;
  };

  function empty_message (text){
    text = text.replace(/\s+/g," ")
    $("#list").append("<li class=\"form-error\">\"" + text +"\" 一致するものがありませんでした。</li>");
    $("#keyword").val("");
    return;
  };
})
