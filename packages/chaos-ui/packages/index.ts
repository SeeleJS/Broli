import ChaosForm from './chaos-form';

const components = [
  ChaosForm,
];

const install = (Vue: any) => {
  if ((install as any).installed) {
    return;
  }
  components.map((component: any) => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  install,
  ChaosForm,
};
