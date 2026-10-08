// Bootstrap 3's JavaScript expects a global jQuery. webpack's ProvidePlugin
// supplied it; with Vite, expose it here, before bootstrap is imported.
import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = jQuery;
