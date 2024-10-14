import { View, Text, NavigationBar } from "@tarojs/components";
import "./index.scss";

const Pufa = () => {
  const data = [
    {
      time: "202211",
      income: "12345.12",
    },
  ];
  return (
    <>
      <View className="fixed w-full bg-[#fff]">
        <View className="  w-full text-[18px] font-normal flex justify-between px-[15px] py-[5px] items-center">
          <Text className="iconfont icon-zuojiantou text-[20px]"></Text>
          <Text className=" ">账单</Text>
          <Text className="iconfont icon-shenglvehao font-bold text-[24px]"></Text>
        </View>
        <View className="pufa-br-bottom pt-[10px]"></View>
        <View className="text-[18px] flex justify-around pt-[10px]">
          <View>
            <Text>统计</Text>
            <View className="h-[4px] bg-[#EDEDF6] mt-[5px]"></View>
          </View>
          <View className="text-[3]">
            <Text className="text-[#2E46Df] font-bold">明细</Text>
            <View className="h-[4px] bg-[#2E46D3] mt-[5px]"></View>
          </View>
        </View>
        <View className="w-full h-[10px] bg-[#F7F9FF]"></View>
        <View className="py-[10px] flex justify-between px-[20px] text-[16px]">
          <View>
            <Text>收入</Text>
            <Text className=" iconfont icon-a-teshuxiajiantou text-[#244196] font-bold pl-[5px]"></Text>
          </View>
          <View>
            <Text>时间倒序</Text>
            <Text className=" iconfont icon-a-teshuxiajiantou text-[#244196] font-bold pl-[5px]"></Text>
          </View>
          <View>
            <Text>工资奖金</Text>
            <Text className=" iconfont icon-a-teshuxiajiantou text-[#244196] font-bold pl-[5px]"></Text>
          </View>
        </View>
        <View className="flex justify-between p-[25px] bg-[#F7F9FD]">
          <Text className="text-[#244581]">2022年</Text>
          <Text className="text-[#A9ABB6] text-[14px]">收入￥1234567</Text>
        </View>
      </View>
      <View className="pt-[220px]"></View>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => {
        return (
          <View
            key={index}
            className="flex justify-between px-[25px] pt-[15px]"
          >
            <View className="iconfont icon-jinqian  text-[20px] w-[15%] flex items-center"></View>
            <View className="w-[85%]">
              <View className="flex justify-between">
                <Text>工资职工薪酬202211</Text>
                <Text className="font-bold text-[#EE5B40]">+¥15,494.17</Text>
              </View>
              <View className="text-[14px] text-[#B1B3BA] my-[10px]">
                工资奖金
              </View>
              <View className="text-[14px] text-[#B1B3BA] flex justify-between">
                <Text>借记卡（9283）</Text>
                <Text>12-10 18:41:25</Text>
              </View>
              <View className="pufa-br-bottom pt-[10px]"></View>
            </View>
          </View>
        );
      })}
      <View className="text-[#fff] rounded-3xl fixed bottom-[100px] right-[5px] py-[10px] px-[15px] bg-gradient-to-r from-[#2330CD] to-[#548BF2]">
        <Text className="iconfont icon-bi pr-[5px]"></Text>
        <Text>记一笔</Text>
      </View>
    </>
  );
};
export default Pufa;
