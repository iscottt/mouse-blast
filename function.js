var path = require('path')
add_action('init_express',()=>{
	register_static_url('/js/', path.join(__dirname,"./js") );
});

add_action('nv_head', () => {
  nv_enqueue_script(`/js/index.js`, "mouse-blast", '0.0.1');
})
