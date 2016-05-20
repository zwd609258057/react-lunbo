import React from 'react';
import { render } from 'react-dom';
import Slider from './sider.jsx';

const IMAGE_DATA = [
  {
    src: require('./img/400x200.png'),
    alt: 'images-1',
  },
  {
    src: require('./img/400x200.png'),
    alt: 'images-2',
  },
  {
    src: require('./img/400x200.png'),
    alt: 'images-3',
  },
];

render(
  <Slider
    items={IMAGE_DATA}
    speed={1.2}
    delay={2.1}
    pause={true}
    autoplay={true}
    dots={true}
    arrows={true}
  />,
  document.getElementById('app')
);