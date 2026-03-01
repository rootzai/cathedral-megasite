import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "@/components/SectionHeader";
import KeyMetricCard from "@/components/KeyMetricCard";
import { Globe, Users, BookOpen, TrendingUp, TrendingDown, MapPin } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

export default function GlobalChurchMetrics() {
  // Data from Global Expansion
  const regionalGrowthData = [
    { region: "Africa", growth: 2.1, share: 19 },
    { region: "Americas", growth: 1.0, share: 48 },
    { region: "Asia", growth: 1.5, share: 11 },
    { region: "Europe", growth: 0.1, share: 21 },
    { region: "Oceania", growth: 0.8, share: 1 }
  ];

  const historicalGrowthData = [
    { year: "1995", catholics: 1027, worldPop: 5743 },
    { year: "2000", catholics: 1045, worldPop: 6143 },
    { year: "2005", catholics: 1115, worldPop: 6541 },
    { year: "2010", catholics: 1196, worldPop: 6956 },
    { year: "2015", catholics: 1285, worldPop: 7379 },
    { year: "2020", catholics: 1360, worldPop: 7794 },
    { year: "2023", catholics: 1405, worldPop: 7915 }
  ];

  // Data from Clergy & Vocations
  const clergyData = [
    { year: "2010", bishops: 5104, priests: 412236, seminarians: 118990 },
    { year: "2015", bishops: 5237, priests: 415656, seminarians: 116843 },
    { year: "2020", bishops: 5363, priests: 410219, seminarians: 111855 },
    { year: "2023", bishops: 5430, priests: 406996, seminarians: 106495 }
  ];

  // Data from Sacramental Index
  const sacramentalData = [
    { year: "1995", baptisms: 16.5, communions: 7.5, confirmations: 6.5 },
    { year: "2010", baptisms: 17.0, communions: 8.0, confirmations: 7.0 },
    { year: "2015", baptisms: 15.8, communions: 8.4, confirmations: 7.2 },
    { year: "2020", baptisms: 12.5, communions: 8.8, confirmations: 7.4 },
    { year: "2023", baptisms: 13.15, communions: 9.1, confirmations: 7.7 }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <SectionHeader 
        title="Global Church Metrics" 
        subtitle="Comprehensive analysis of demographic shifts, clergy trends, and sacramental participation (1995-2025)."
      />

      <Tabs defaultValue="expansion" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="expansion" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Global Expansion
          </TabsTrigger>
          <TabsTrigger value="clergy" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Clergy & Vocations
          </TabsTrigger>
          <TabsTrigger value="sacraments" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Sacramental Index
          </TabsTrigger>
        </TabsList>

        {/* Global Expansion Tab */}
        <TabsContent value="expansion" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KeyMetricCard 
              title="Total Catholics" 
              value="1.405 Billion" 
              change="+17.5%" 
              trend="up" 
              description="Since 2010. Outpacing world population growth."
            />
            <KeyMetricCard 
              title="Global Share" 
              value="17.8%" 
              change="+0.6 pts" 
              trend="up" 
              description="Percentage of world population identifying as Catholic."
            />
            <KeyMetricCard 
              title="Growth Driver" 
              value="Africa" 
              change="+2.1%" 
              trend="up" 
              description="Annual growth rate, the highest of any region."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Regional Distribution (2023)</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalGrowthData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="var(--border)" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="region" type="category" width={80} tick={{fill: 'var(--muted-foreground)'}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                      itemStyle={{ color: 'var(--foreground)' }}
                    />
                    <Bar dataKey="share" fill="var(--chart-1)" name="% of Global Catholics" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">30-Year Growth Trajectory</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={historicalGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="year" tick={{fill: 'var(--muted-foreground)'}} />
                    <YAxis tick={{fill: 'var(--muted-foreground)'}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                      itemStyle={{ color: 'var(--foreground)' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="catholics" stroke="var(--primary)" name="Catholics (Millions)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30 border-none">
            <CardContent className="p-6">
              <h3 className="font-serif text-lg font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                The "Southward Shift"
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The center of gravity for the Catholic Church has decisively shifted to the Global South. 
                While Europe stagnates at 0.1% growth, Africa and Asia are driving nearly all net expansion. 
                By 2050, it is projected that <strong>75% of all Catholics</strong> will live outside the West, 
                fundamentally altering the geopolitical and financial priorities of the Holy See.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Clergy & Vocations Tab */}
        <TabsContent value="clergy" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KeyMetricCard 
              title="Total Priests" 
              value="406,996" 
              change="-1.3%" 
              trend="down" 
              description="Global decline since 2010 peak."
            />
            <KeyMetricCard 
              title="Major Seminarians" 
              value="106,495" 
              change="-10.5%" 
              trend="down" 
              description="Significant drop in future clergy pipeline."
            />
            <KeyMetricCard 
              title="Bishops" 
              value="5,430" 
              change="+6.4%" 
              trend="up" 
              description="Administrative leadership continues to expand."
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">The "Vocation Crisis" (2010-2023)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={clergyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="year" tick={{fill: 'var(--muted-foreground)'}} />
                  <YAxis yAxisId="left" tick={{fill: 'var(--muted-foreground)'}} />
                  <YAxis yAxisId="right" orientation="right" tick={{fill: 'var(--muted-foreground)'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                    itemStyle={{ color: 'var(--foreground)' }}
                  />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="priests" stroke="var(--chart-1)" name="Priests" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="seminarians" stroke="var(--destructive)" name="Seminarians" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-muted/30 border-none">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-2 text-destructive flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  Western Collapse
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  North America and Europe have seen a <strong>20%+ decline</strong> in seminarians over the last decade. 
                  Many dioceses in France and Germany now ordain zero new priests annually, relying entirely on 
                  "missionary priests" imported from Nigeria, India, and the Philippines to staff historic parishes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-none">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-2 text-primary flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  African Boom
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conversely, African seminaries are at capacity, with a <strong>3-4% annual increase</strong> in vocations. 
                  This surplus is creating a new "reverse mission" dynamic, where the Global South evangelizes the 
                  secularized North, bringing with it a more orthodox and traditional theological outlook.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Sacramental Index Tab */}
        <TabsContent value="sacraments" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KeyMetricCard 
              title="Total Baptisms" 
              value="13.15 M" 
              change="-22.6%" 
              trend="down" 
              description="Sharp decline from 17M peak in 2010."
            />
            <KeyMetricCard 
              title="First Communions" 
              value="9.10 M" 
              change="+13.8%" 
              trend="up" 
              description="Steady growth, driven by Americas."
            />
            <KeyMetricCard 
              title="Confirmations" 
              value="7.70 M" 
              change="+10.0%" 
              trend="up" 
              description="Resilient youth engagement globally."
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">Sacramental Trends (1995-2023)</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sacramentalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="year" tick={{fill: 'var(--muted-foreground)'}} />
                  <YAxis tick={{fill: 'var(--muted-foreground)'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                    itemStyle={{ color: 'var(--foreground)' }}
                  />
                  <Legend />
                  <Bar dataKey="baptisms" fill="var(--chart-2)" name="Baptisms (Millions)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="communions" fill="var(--chart-3)" name="First Communions (Millions)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="confirmations" fill="var(--chart-4)" name="Confirmations (Millions)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-muted/30 border-none">
            <CardContent className="p-6">
              <h3 className="font-serif text-lg font-semibold mb-2">The "Baptism Gap"</h3>
              <p className="text-muted-foreground leading-relaxed">
                The <strong>22.6% drop in baptisms</strong> is the single most alarming metric for Church demographers. 
                It reflects not just lower birth rates in Catholic countries, but a failure to retain the children of 
                nominal Catholics. While First Communions and Confirmations remain steady (indicating strong retention 
                of <em>active</em> families), the "cultural Catholic" pipeline is drying up rapidly.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
