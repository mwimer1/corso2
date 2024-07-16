import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import AntTable from './components/AntTable.vue';

const app = createApp(AntTable);
app.use(Antd);
app.mount('#app');
