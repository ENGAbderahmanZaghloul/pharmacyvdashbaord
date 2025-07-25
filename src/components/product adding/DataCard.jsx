import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Users, TrendingUp, TrendingDown } from "lucide-react";
const cardData = [
  {
    title: "Cold",
    desc: "Allergy Medications",
    num: "11,789",
    icon: "/public/images/1.png",
    TrendingStatus: true,
    dateOfPublish: "since last week",
  },
  {
    title: "Heart",
    desc: "Blood Pressure",
    num: "11,789",
    icon: "/public/images/2.png",
    TrendingStatus: false,
    dateOfPublish: "since last week",
  },
  {
    title: "Antivirtal Drugs ",
    desc: "",
    num: "11,789",
    icon: "/public/images/3.png",
    TrendingStatus: true,
    dateOfPublish: "since last week",
  },
  {
    title: "Vitamins",
    desc: "Supplements",
    num: "11,789",
    icon: "/public/images/4.png",
    TrendingStatus: false,
    dateOfPublish: "since last week",
  },
  {
    title: "Pain Relief",
    desc: "Ant-Inflammatraries",
    num: "11,789",
    icon: "/public/images/5.png",
    TrendingStatus: true,
    dateOfPublish: "since last week",
  },
  {
    title: "Antibiotics",
    desc: "Injectios",
    num: "11,789",
    icon: "/public/images/6.png",
    TrendingStatus: false,
    dateOfPublish: "since last week",
  },
  {
    title: "Skin",
    desc: "Topical Treatments",
    num: "11,789",
    icon: "/public/images/7.png",
    TrendingStatus: true,
    dateOfPublish: "since last week",
  },
  {
    title: "Digestive",
    desc: "Stomach Medications",
    num: "11,789",
    icon: "/public/images/8.png",
    TrendingStatus: false,
    dateOfPublish: "since last week",
  },
];
export default function StatCard() {
  return (
    <div className="grid grid-cols-4 gap-5 px-10 py-4">
      {cardData &&
        cardData.map((item) => (
          <Card className="relative w-[260px] shadow-none">
            <CardHeader className="pb-2 h-11 mb-10">
              <CardTitle className="text-sm font-normal mb-3">
                {item.title}{" "}
                {item.desc && (
                  <>
                    &<br /> {item.desc}
                  </>
                )}
              </CardTitle>

              <img
                src="/public/images/mage_dots.png"
                alt=""
                className="absolute top-4 right-4 w-4 h-4 text-muted-foreground cursor-pointer"
              />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{item.num}</div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <img
                    src={item.icon}
                    className="h-5 w-5 text-blue-500"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                {item.TrendingStatus ? (
                  <Badge className="bg-green-100 text-green-700">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +2%
                  </Badge>
                ) : (
                  <Badge className="bg-[#FFD3D3] text-[#EF4444]">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    +2%
                  </Badge>
                )}
                <span>{item.dateOfPublish}</span>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
