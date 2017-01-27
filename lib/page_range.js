module.exports = function(page, pages){
  var maxPagesPerView = 5;
  var divider = parseInt(maxPagesPerView / 2);
  page = parseInt(page);
  pages = parseInt(pages);

  if(page <= divider){
    var firstPage = page;
  }
  else {
    var firstPage = page - divider;
  }

  // var repl = require('repl'); repl.start('> ');

  if(page > pages - divider){
    if(page >= pages){
      var lastPage = page;
      firstPage = firstPage - divider;
      // firstPage = firstPage - maxPagesPerView - 2
    }
    else {
      var lastPage = pages;
      firstPage = firstPage - (divider - 1);
      // firstPage = firstPage - maxPagesPerView - 2
    }

  }
  else {
    if(page <= divider){
      var lastPage = maxPagesPerView;
    }
    else {
      var lastPage = page + divider;
    }
  }



  // console.log('PAGE: ' + page)
  // console.log('PAGES: ' + pages)
  // console.log('DIVIDER: ' + divider)
  // console.log('maxPagesPerView: ' + maxPagesPerView)
  // console.log('FIRST_PAGE: ' + firstPage)
  // console.log('LAST_PAGE: ' + lastPage)

  return {firstPage: firstPage, lastPage: lastPage}
}
