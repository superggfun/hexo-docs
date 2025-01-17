  
module.exports = function(context) {
  return {
    name: 'docusaurus-plugin-baidu-analytics',

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://hm.baidu.com',
            },
          },
          {
            tagName: 'script',
            innerHTML: `
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?41b04999ee3d67f2acc9ce741045e68d";
                  var s = document.getElementsByTagName("script")[0]; 
                  s.parentNode.insertBefore(hm, s);
                })();
            `,
          },
        ],
      };
    },
  };
};