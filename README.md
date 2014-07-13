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

## How to override

Color schemes and icon images are defined at `scss/_variables.scss`.
So, if you want to override them, make `your-ui.scss` like below.

```scss
// For example, jqueyr-ui-mp6 is at /vendor/jquery-ui-mp6/src
// Your ui.scss will be compiled to /assets/css/your-ui.css
//
// Change Image path to avoid 404
$image-dir: '../../vendor/jquery-ui-mp6/src/images';
// Change notification color
$notification-color: salmon;
// Change widget border color
$container-border: #888;
```

## Lisence

This source code is released under [MIT lisence](http://opensource.org/licenses/mit-license.php).