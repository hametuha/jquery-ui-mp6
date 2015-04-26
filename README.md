# jQuery UI MP6

Simple and clean jQuery UI Theme for WordPress admin panel.

Based on Smoothness of [jQuery ThemeRoller](http://jqueryui.com/themeroller/#!).

Color scheme follows WordPress new UI [MP6](http://wordpress.org/news/2013/12/parker/).

[Examples](http://hametuha.github.io/jquery-ui-mp6/demo/) are available.

## How to Install

Download all source or simply use [Bower](http://bower.io). To do so, just type this.

```
bower install jquery-ui-mp6 --save
```

Ofcouse, your theme or plugin should be **bower ready**.

## How to use

Use `css` and `images` in `src` folder.

If you want use it with WordPress, register like this:

```php  
// Register globally.
add_action('init', function(){  
    wp_register_style('jquery-ui-mp6', 'path/to/jquery-ui.css', array(), '1.0');  
});  
```

Now can use it with [WordPress' dependency resolver](https://codex.wordpress.org/Function_Reference/wp_enqueue_style).

```php
// Load it on admin panel.
add_action('admin_enequeue_scripts', function(){
	wp_enqueue_style('jquery-ui-mp6');
});
// Or, with your nicely customized admin panel which requires jQuery UI
add_action('admin_enqueue_scripts', function(){
	wp_enqueue_style('your-plugin-style', 'path/to/your/style.css', array('jquery-ui-mp6'), '1.0');
});
```

## How to override

Color schemes and icon images are defined at `scss/_variables.scss`.
So, if you want to override them, make `your-ui.scss` like below.

```scss
// For example, jqueyr-ui-mp6 is at /bower_components/jquery-ui-mp6/src
// Your ui.scss will be compiled to /assets/css/your-ui.css
//
// Change Image path to avoid 404
$image-dir: '../../bower_components/jquery-ui-mp6/src/images';
// Change notification color
$notification-color: salmon;
// Change widget border color
$container-border: #888;
```

## Lisence

This source code is released under [MIT lisence](http://opensource.org/licenses/mit-license.php).