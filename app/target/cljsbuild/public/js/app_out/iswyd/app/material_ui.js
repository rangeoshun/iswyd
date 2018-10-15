// Compiled by ClojureScript 1.10.339 {}
goog.provide('iswyd.app.material_ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
iswyd.app.material_ui.mui = MaterialUI;
iswyd.app.material_ui.create_theme = iswyd.app.material_ui.mui.createMuiTheme;
iswyd.app.material_ui.create_generate_class_name = iswyd.app.material_ui.mui.createGenerateClassName;
iswyd.app.material_ui.theme_provider = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.MuiThemeProvider);
iswyd.app.material_ui.css_baseline = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.CssBaseline);
iswyd.app.material_ui.app_bar = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.AppBar);
iswyd.app.material_ui.toolbar = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.Toolbar);
iswyd.app.material_ui.t = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.Typography);
iswyd.app.material_ui.label = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.FormLabel);
iswyd.app.material_ui.list = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.List);
iswyd.app.material_ui.list_item = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.ListItem);
iswyd.app.material_ui.text_field = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.TextField);
iswyd.app.material_ui.popover = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.Popover);
iswyd.app.material_ui.paper = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.Paper);
iswyd.app.material_ui.menu_list = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.MenuList);
iswyd.app.material_ui.menu_item = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.MenuItem);
iswyd.app.material_ui.spinner = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.CircularProgress);
iswyd.app.material_ui.grid = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.Grid);
iswyd.app.material_ui.grow = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.Grow);
iswyd.app.material_ui.svg_icon = reagent.core.adapt_react_class.call(null,iswyd.app.material_ui.mui.SvgIcon);
iswyd.app.material_ui.github_icon = (function iswyd$app$material_ui$github_icon(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.svg_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Symbol(null,"inherit","inherit",-200283895,null),new cljs.core.Keyword(null,"d","d",1972142424),"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"], null)], null)], null);
});

//# sourceMappingURL=material_ui.js.map?rel=1539633379430
