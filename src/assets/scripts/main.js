/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


