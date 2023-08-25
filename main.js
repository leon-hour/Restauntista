// Meta Tags preparation
var metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

var metaHttpEquiv = document.createElement('meta');
metaCharset.setAttribute('http-equiv', 'X-UA-Compatible');
metaCharset.setAttribute('content', 'IE=edge');

var metaName = document.createElement('meta');
metaCharset.setAttribute('name', 'viewport');
metaCharset.setAttribute('content', 'width=device-width, initial-scale=1.0');

// Title Tag
var titleTag = document.createElement('title');
titleTag.textContent = 'Restaurantista';

// CSS References
var cssStyle = document.createElement('link');
cssStyle.setAttribute('rel', 'stylesheet');
cssStyle.setAttribute('href', 'style.css');

var cssRoboto = document.createElement('link');
cssRoboto.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
cssRoboto.setAttribute('rel', 'stylesheet');

// Append the elements to the head section
document.head.appendChild(metaCharset);
document.head.appendChild(metaHttpEquiv);
document.head.appendChild(metaName);
document.head.appendChild(titleTag);
document.head.appendChild(cssStyle);
document.head.appendChild(cssRoboto);
