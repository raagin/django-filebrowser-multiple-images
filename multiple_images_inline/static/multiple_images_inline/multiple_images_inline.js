(function(){
    var lang = document.querySelector('html').getAttribute('lang');
    var btn_text = (lang == 'RU') ? 'Добавить несколько' : 'Add multiple images';

    window.onload = function(){
        if (document.querySelector('body.grp-change-form')) {
            var images_id = document.querySelector('.inline-group .grp-empty-form .vFileBrowseField[name$="image"]').getAttribute('id');
            var images_exists = images_id.match(/id_([a-z]+)-__prefix__-image/);
            var selector_name,
                add_button,
                add_multiple_button,
                start_index,
                inline_images,
                id_last_inline
                ;

            if (images_exists) {
                selector_name = images_exists[1];

                // Определение id и position
                var expr = new RegExp('id_' + selector_name + '-(\\d+)-image'),
                    expr_res = false;
                    ;
                inline_images = document.querySelectorAll('.grp-dynamic-form .vFileBrowseField[name$="image"]');
                if (inline_images.length) {
                    expr_res = expr.exec(inline_images[inline_images.length - 1].getAttribute('id'));
                }
                if (expr_res.length > 1) {
                    start_index = parseInt(expr_res[1]) + 1;
                } else {
                    start_index = 0;
                }

                // Вставка кнопки
                add_button = document.querySelector('#' + selector_name + '-group .grp-module.grp-dynamic-form .grp-add-handler');
                add_multiple_button = document.createElement('a');
                add_multiple_button.id = 'add_multiple_button';
                set_multiple_button_href(selector_name, start_index);
                add_multiple_button.className = 'grp-add-handler';
                add_multiple_button.style.margin = '0 0 0 10px';
                add_multiple_button.innerHTML = '<strong>'+ btn_text +'</strong>';
                set_multiple_button_href(add_multiple_button, selector_name, start_index);
                add_button.parentNode.insertBefore(add_multiple_button, add_button.nextSibling);
            }
        }
    }

    function set_multiple_button_href(btn, selector_name, start_index){
        btn.href = "javascript:FileBrowser.show('id_" + selector_name + "-" + start_index + "-image', '/admin/filebrowser/browse/?pop=4')";
    }
    window.set_multiple_button_href = set_multiple_button_href;
})();