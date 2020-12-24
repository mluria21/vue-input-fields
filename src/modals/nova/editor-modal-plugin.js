import EditorModal from './EditorModal.vue'

function install (Vue, options) {
    // 1. add global method or property
    // Vue.myGlobalMethod = function () {
    //   // some logic ...
    // }
  
    // 2. add a global asset
    // Vue.directive('my-directive', {
    //   bind (el, binding, vnode, oldVnode) {
    //     // some logic ...
    //   }
      
    // })
  
    // 3. inject some component options
    // Vue.mixin({
    //   created: function () {
    //     // some logic ...
    //   }
    //   ...
    // })
  
    // 4. add an instance method
    const editorModal = Vue.prototype.$editorModal = new Vue(EditorModal).$mount()
    if(typeof document != 'undefined'){
        document.body.appendChild(editorModal.$el)
    }     
  }

  const editorModalPlugin = {
      install
  }
  
  export{editorModalPlugin}
