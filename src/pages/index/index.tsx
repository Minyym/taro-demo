import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import "./index.scss";

const Pufa = () => {
  const data = [];
  return (
    <>
      <Button
        onClick={
          // 跳转到目的页面，在当前页面打开
          () =>
            Taro.redirectTo({
              url: "/pages/geshui/index",
            })
        }
      >
        <View>个税</View>
      </Button>
      <Button
        onClick={
          // 跳转到目的页面，在当前页面打开
          () =>
            Taro.redirectTo({
              url: "/pages/pufa/index",
            })
        }
      >
        浦发
      </Button>
    </>
  );
};
export default Pufa;
