import { View, Text, NavigationBar, Image } from "@tarojs/components";
import "./index.scss";

const Pufa = () => {
  const data = [
    // {
    //   time: "202407",
    //   income: "18106.76",
    //   time2: "08-09 16:13:44",
    // },
    {
      time: "202406",
      income: "18106.75",
      time2: "07-10 17:15:37",
    },
    {
      time: "202405",
      income: "18106.75",
      time2: "06-11 16:21:15",
    },
    {
      time: "202404",
      income: "18106.76",
      time2: "05-10 17:56:20",
    },
    {
      time: "202403",
      income: "18587.92",
      time2: "04-10 17:02:58",
    },
    {
      time: "202402",
      income: "19126.17",
      time2: "03-08 15:02:58",
    },
    {
      time: "202401",
      income: "19184.37",
      time2: "02-07 18:52:38",
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
          <Text className="text-[#244581]">2024年</Text>
          <Text className="text-[#A9ABB6] text-[14px]">收入￥129325.48</Text>
        </View>
      </View>
      <View className="pt-[220px]"></View>
      {data.map((i, index) => {
        return (
          <View
            key={index}
            className="flex justify-between px-[25px] pt-[15px] items-center"
          >
            <Image src={require("./componts/1.png")} className="w-[32px] h-[34px] mt-[-24px]"></Image>
            <View className="w-[85%]">
              <View className="flex justify-between">
                <Text>工资职工薪酬{i.time}</Text>
                <Text className="font-bold text-[#EE5B40]">+¥{i.income}</Text>
              </View>
              <View className="text-[14px] text-[#B1B3BA] my-[10px]">
                工资奖金
              </View>
              <View className="text-[14px] text-[#B1B3BA] flex justify-between">
                <Text>借记卡（6369）</Text>
                <Text>{i.time2}</Text>
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
