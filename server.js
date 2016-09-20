var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
  title : 'Article One',
  heading : 'Article One - HTML <style> tag for writing CSS inside the HTML',
  date : '19 Sept 2016',
  content : `
  <p>The <b>HTML &ltstyle&gt element</b> contains style information for a document, or part of a document. By default, the style instructions written inside that element are expected to be <a href = "https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>.</p>`
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

    var htmlTemplate = `
      <html>
        <head>
            <title>${title}</title>
            <meta name =viexmport content = "width-devise-width" initial-scale="1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
    	<body>
    	    <div class="container">
        	<div>
        	        <a href = "/">Home</a>
                    <a href="/article-two">Article Two</a>
                    <a href="/article-three">Article Three</a>
        	 </div>
        	 <hr/>
        	 <h1> ${heading} </h1>
            <div>
        	    ${date}
        	</div>
        	<div>
                ${content}   
            </div>
    	</body>
    </html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/aneesh.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aneesh.png'));
});

app.get('/article-one', function (req, res) {
   res.send(createTemplate(articleOne));
   // res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/facebook.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'facebook.png'));
});

app.get('/ui/twitter.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twitter.png'));
});

app.get('/ui/youtube.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'youtube.png'));
});

app.get('/ui/linkedin.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'linkedin.png'));
});

app.get('/ui/googleplus.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'googleplus.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
