# Mindarc

Just a simple implementation from template located in docs folder.

The main purpose of this project is: expose my abilities in touch with Bootstrap to create a single responsive page covering some important tags in HTML5 with CSS3.

Although wasn't required to use pre-processor of CSS, but I wanted expose a few technologies I'm dealing with everyday, which involves Grunt, Express, Node JS, SASS, etc.

Is not required to run any command to run the application, just clone then open the index.html file on your favority web browser and you might see it running. 

The reason I've committed the dist files and vendors, is just to avoid extra works to test out.
If you want to run the app locally, just follow the instructions and you will be good.

Running it
---------------------

* Download all modules used on this project
```shell
	npm install
```

* Download/Update vendors ( basically Jquery and Bootstrap-Sass )
```shell
	bower install
```

* Run the following snippet to build the pre-processor and generate the lateast css file
```shell
	grunt build
```

* You can also run grunt and livereload the changes you've made
```shell
	grunt
```

* Finally on your terminal, just run it to start a node server that shall run at port 5001 
```shell
	node server
```
