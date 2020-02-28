'use strict';

hexo.extend.tag.register('speakerdeck', function(args, content) {
  const id = args[0];
  let slide = args[1] == null ? 1 : args[1];

  return '\
    <script async class="speakerdeck-embed"\
      data-slide="' + slide + '"\
      data-id="' + id + '"\
      data-ratio="1.77777777777778"\
      src="//speakerdeck.com/assets/embed.js">\
    </script>';
},{
  async: true
});
