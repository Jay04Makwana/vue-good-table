import VueTableDraggable from './components/Table.vue';

const VueTableDraggablePlugin = {
  install(Vue, options) {
    Vue.component(VueTableDraggable.name, VueTableDraggable);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTableDraggablePlugin);
}

export default VueTableDraggablePlugin;
export { VueTableDraggable };
