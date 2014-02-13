# jQuery UI MP6

Simple and clean jQuery UI Theme for WordPress admin panel.

Based on Smoothness of [jQuery ThemeRoller](http://jqueryui.com/themeroller/#!).

Color scheme follows WordPress new UI [MP6](http://wordpress.org/news/2013/12/parker/).

[Examples](http://hametuha.github.io/jquery-ui-mp6/demo/) are available.

## How to use

Use `css` and `images` in `src` folder.

If you want use it with WordPress, register like this:

```php  
add_action('init', function(){  
    wp_register_script('jquery-ui-mp6', 'path/to/jquery-ui.css', array(), '1.0');  
});  
```

## Lisence

This source code is released under [MIT lisence](http://opensource.org/licenses/mit-license.php).