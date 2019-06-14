$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().trim().replace(/ /g, "-")
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
// var axios = require('axios');

// window.onload=function(){
//   console.log('works');
//   let button = document.getElementsByTagName('button');
//   let li = document.getElementsByTagName('li');

//   button[0].addEventListener("click", function () {
//     let value = document.getElementsByTagName('input').value ;
//     let todo = {item:value};

//     axios({
//       method: 'post',
//       url: '/todo',
//       data:todo
//     })
//   })

    
    //   li.addEventListener("click", function () {
    //   let value = document.getElementsByTagName('input').value ;
    //   let todo = {item:value};
  
    //   axios({
    //     method: 'delete',
    //     url: '/todo',
    //     data:todo
    //   });
    // })

// }
