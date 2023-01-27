import classes from "./Menu.module.css";

import { isMobile } from "react-device-detect";

const Menu = () => {
  return (
    <div className={isMobile?classes.media:classes.wrap}>

    
    <h2>喜慶迎春宴</h2>
    <div className={isMobile?classes.menu2:classes.menu}>
      <label>烧味大拼盘</label>
      <label>黄金百花球</label>
      <label>XO醬爆海參雞片</label>
      <label>鲜拆蟹肉芙蓉燕</label>
      <label>瑶柱螺鲍扒菜苗</label>
      <label>金牌手淋脆皮雞</label>
      <label>桂魚</label>
      <label>薑葸雙龍蝦</label>
      <label>闊少爺炒飯</label>
      <label>鲍汁炆伊麵</label>
      <label>合時甜品</label>
      <label>特色美點</label>
    </div>
    </div>
  );
};

export default Menu;
