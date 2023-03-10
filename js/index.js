

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    function makeMulti(string) {
      let l = new String(string);
      l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
      return l;
    };
    let string = function () {
      /* 
   _____ _____ _____ _____ _____   _____ _____ _   _______ _____ _____ 
  /  ___/  __ \  _  |_   _|_   _| /  ___|_   _| | | |  _  \_   _|  _  |
  \ `--.| /  \/ | | | | |   | |   \ `--.  | | | | | | | | | | | | | | |
   `--. \ |   | | | | | |   | |    `--. \ | | | | | | | | | | | | | | |
  /\__/ / \__/\ \_/ / | |   | |   /\__/ / | | | |_| | |/ / _| |_\ \_/ /
  \____/ \____/\___/  \_/   \_/   \____/  \_/  \___/|___/  \___/ \___/ 
                                                                       
                                                                       
   */
    };
    console.log(
      `%c Mouse_blast %c 插件加载中... `,
      'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #35495e; font-weight: bold;',
      'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #41b883; font-weight: bold;',
    );

    console.log(`%c ${makeMulti(string)} `, 'color: #165dff; font-weight: bold;');
    setTimeout(() => {
      console.log(
        `%c Mouse_blast %c 插件加载完成 `,
        'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #35495e; font-weight: bold;',
        'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #41b883; font-weight: bold;',
      );
      const allScript = document.querySelectorAll('script');
      let hasScript = false;
      allScript.forEach((item) => {
        if (item.src === 'https://cdnjs.cloudflare.com/ajax/libs/mo-js/0.288.2/mo.min.js') {
          hasScript = true;
        };
      });
      if (!hasScript) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mo-js/0.288.2/mo.min.js';
        document.body.appendChild(script);
      }
      // let burst, aperture, bounce;
      let burst = ''
      let aperture = ''
      let bounce = ''
      /**
       * burst 扩散
       * aperture 红色光圈（红晕）
       * bounce 心跳
       */
      const createAnimate = (event) => {
        burst = new mojs.Burst({
          // 爆炸范围
          radius: { 0: 50 },
          // 动画延时函数
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
          // 动画延时时间
          duration: 1500,
          // 动画等待时间
          delay: 300,
          // 扩散的粒子配置
          children: {
            duration: 750,
            // 随机数范围爆炸
            radius: { 0: 'rand(20,45)' },
            shape: ['circle', 'rect', 'polygon', 'zigzag'],
            // 粒子可选色
            fill: ['#1abc9c', '#2ecc71', '#00cec9', '#3498db', '#9b59b6', '#fdcb6e', '#f1c40f', '#e67e22', '#e74c3c', '#e84393'],
            degreeShift: 'rand(-90, 90)',
            delay: 'stagger(0, 40)'
          },
          // 透明度
          opacity: 1,
          // 生成粒子数量
          count: 10,
          onComplete() {
            this.el.remove();
          }
        });
        burst.el.style.top = 0;
        burst.el.style.left = 0;
        burst.tune({ x: event.pageX, y: event.pageY });
        new mojs.Timeline().add(burst).play();
      }
      window.document.addEventListener('click', (event) => createAnimate(event), false);
    }, 2000);
  };
};


