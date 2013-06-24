// the simplest i18n tool ever
// to use: 
//   - create a span with id i18n, set visibility:hidden
//   - add child spans with lang and data-i18n set
//   - wrap text in display content with span and data-i18n attribute set
//   - call this function whenever you want to change languages
// eg:
// <body>
//
//   <h1>
//     <span data-i18n="hello">Hello</span>
//   </h1>
//
//   <script>
//     // set language to english 
//     i18n('en-us');
//
//     // set language to chinese 
//     i18n('zh-cn');
//   </script>
//
//   <span id="i18n" style="visibility:hidden">
//     <span lang="en-us" data-i18n="hello">Hello</span>
//     <span lang="zh-cn" data-i18n="hello">你好</span>
//   </span>
// 
// </body>
//
// NOTE: This should be SEO friendly, as the hidden spans will be indexed and 
// both langauges indexed to same URL!
//

function i18n(lang) {
  // lcase the lang string
  lang = (lang || "").toLowerCase();

  // iterate over data in #i18n that matches language 
  $('#i18n [lang="' + lang + '"]').each(function () {
    var i18n_key = $(this).data('i18n');
    var i18n_text = $(this).text();
    $('[data-i18n="'+ i18n_key +'"]:not(#i18n > span)').each(function() {
      // update site text and language
      $(this).text(i18n_text);
      $(this).attr('lang', lang);
    });
  });
};
