import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUp, TrendingDown, Target, BarChart3 } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, Bar, BarChart, Area, AreaChart } from "recharts";

const VisionSection = () => {
  // Chart data for each box
  const ordersData = [
    { week: "1", value: 20 },
    { week: "2", value: 25 },
    { week: "3", value: 30 },
    { week: "4", value: 35 },
    { week: "5", value: 40 },
    { week: "6", value: 43 },
    { week: "7", value: 47 },
    { week: "8", value: 50 },
  ];

  const adSpendData = [
    { month: "1", cost: 1200, roas: 2.5 },
    { month: "2", cost: 1100, roas: 3.2 },
    { month: "3", cost: 1050, roas: 4.1 },
    { month: "4", cost: 1000, roas: 5.0 },
  ];

  const conversionData = [
    { day: "السبت", rate: 2.5 },
    { day: "الأحد", rate: 2.8 },
    { day: "الاثنين", rate: 3.2 },
    { day: "الثلاثاء", rate: 3.6 },
    { day: "الأربعاء", rate: 4.0 },
    { day: "الخميس", rate: 4.5 },
    { day: "الجمعة", rate: 5.0 },
  ];

  const revenueData = [
    { month: "1", revenue: 125000 },
    { month: "2", revenue: 200000 },
    { month: "3", revenue: 300000 },
    { month: "4", revenue: 500000 },
  ];

  const chartConfig = {
    value: {
      label: "القيمة",
      color: "hsl(var(--chart-1))",
    },
    cost: {
      label: "التكلفة",
      color: "hsl(var(--chart-1))",
    },
    roas: {
      label: "العائد",
      color: "hsl(var(--chart-2))",
    },
    rate: {
      label: "النسبة",
      color: "hsl(var(--chart-1))",
    },
    revenue: {
      label: "الإيرادات",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <section className="py-12 md:py-16 section-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            تصور المستقبل
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            تخيل متجرك بعد <span className="text-primary">60 يوم</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            شوف بنفسك النتائج اللي هتحققها
          </p>
        </div>

        {/* Vision Boxes with Small Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16 lg:mb-20">
          {/* Box 1 - Daily Orders */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">طلبات يومية ثابتة</h3>
            </div>

            <div className="text-3xl font-bold text-primary mb-4">
              +50 <span className="text-sm font-normal text-muted-foreground">طلب/يوم</span>
            </div>

            <ChartContainer config={chartConfig} className="h-32 w-full">
              <AreaChart data={ordersData}>
                <defs>
                  <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <Area
                  dataKey="value"
                  type="natural"
                  fill="url(#fillValue)"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>

            <div className="mt-4 pt-4 border-t border-primary/10">
              <p className="text-sm text-muted-foreground">نمو ثابت ومستمر</p>
            </div>
          </div>

          {/* Box 2 - Ad Spend Efficiency */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-mint/20 to-mint/5 border border-mint/30 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-mint rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-teal-dark" />
              </div>
              <h3 className="text-lg font-bold text-foreground">إعلانات مربحة</h3>
            </div>

            <div className="text-3xl font-bold text-mint mb-4">
              +5 <span className="text-sm font-normal text-muted-foreground">ROAS</span>
            </div>

            <ChartContainer config={chartConfig} className="h-32 w-full">
              <BarChart data={adSpendData}>
                <Bar dataKey="roas" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>

            <div className="mt-4 pt-4 border-t border-mint/10">
              <p className="text-sm text-muted-foreground">توفير 20% من الميزانية</p>
            </div>
          </div>

          {/* Box 3 - Conversion Rate */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">بيانات واضحة</h3>
            </div>

            <div className="text-3xl font-bold text-accent mb-4">
              5% <span className="text-sm font-normal text-muted-foreground">تحويل</span>
            </div>

            <ChartContainer config={chartConfig} className="h-32 w-full">
              <LineChart data={conversionData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <Line
                  dataKey="rate"
                  type="monotone"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-1))", r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ChartContainer>

            <div className="mt-4 pt-4 border-t border-accent/10">
              <p className="text-sm text-muted-foreground">تحسين 100% في معدل التحويل</p>
            </div>
          </div>

          {/* Box 4 - Revenue Growth */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">وقت للتوسع</h3>
            </div>

            <div className="text-3xl font-bold text-teal mb-4 flex items-center gap-1">
              +500<span className="text-xl">K</span>
              <span className="text-sm font-normal text-muted-foreground">ر.س/شهر</span>
            </div>

            <ChartContainer config={chartConfig} className="h-32 w-full">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <Area
                  dataKey="revenue"
                  type="natural"
                  fill="url(#fillRevenue)"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>

            <div className="mt-4 pt-4 border-t border-teal/10">
              <p className="text-sm text-muted-foreground">نمو 300% في الإيرادات</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            خلي ده واقع بدل ما يفضل حلم
          </h3>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            مش مجرد حلم - ده واقع ممكن تحققه في أقل من شهرين
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-full"
          >
            تواصل معنا الان
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
