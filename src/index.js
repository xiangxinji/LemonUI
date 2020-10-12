import './styles/index.scss';

import Alert from '../packages/Alert';
import Button from '../packages/Button';
import Form from '../packages/Form';
import FormItem from '../packages/FormItem';
import Icon from '../packages/Icon';
import Link from '../packages/Link';
import Menu from '../packages/Menu';
import MenuItem from '../packages/MenuItem';
import SubMenu from '../packages/SubMenu';
import Switch from '../packages/Switch';
import Transition from '../packages/Transition';
import Radio from '../packages/Radio';
import Progress from '../packages/Progress';
import Notification from '../packages/Notification';

const version = '1.0.3';

const components = [
  Alert, Button, Form, FormItem, Icon, Link, Menu, MenuItem, SubMenu, Switch, Transition, Radio, Progress, Notification,
];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version,
  install,
  Alert,
  Button,
  Form,
  FormItem,
  Icon,
  Link,
  Menu,
  MenuItem,
  SubMenu,
  Switch,
  Transition,
  Radio,
  Notification,
  Progress,
};
