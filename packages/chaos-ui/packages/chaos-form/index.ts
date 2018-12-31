import ChaosForm from './src/chaos-form.vue';

// 为组件提供 install 安装方法，供按需引入
(ChaosForm as any).install =  (Vue: any) => {
  Vue.component(ChaosForm.name, ChaosForm);
};

// 默认导出组件
export default ChaosForm;
