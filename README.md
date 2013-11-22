starter
=======

Starter JCHEBLY

Compilando SASS
=======
No diretório do projeto(raiz), execute o seguinte comando no terminal:
	sass sass/main.sass css/main.css

Se quiser sempre ficar observando e salvando o css, execute o seguinte comando no terminal:
	sass --watch sass/main.sass:css/main.css

Para minificar o css, execute o seguinte comando no terminal:
	sass sass/main.sass css/main.css --style compressed
ou
	sass --watch sass/main.sass:css/main.css --style compressed