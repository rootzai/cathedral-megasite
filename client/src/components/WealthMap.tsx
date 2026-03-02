import { ResponsiveContainer, Tooltip, Treemap } from 'recharts';

import rawData from '@/data/wealthMapData.json';
import { safeParseData, WealthMapItem, wealthMapSchema } from '@/schemas/dataSchemas';
import { useMemo } from 'react';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-2 rounded shadow-lg text-xs z-50">
        <p className="font-bold">{payload[0].payload.name}</p>
        <p className="font-mono text-primary">{payload[0].payload.ev} EV</p>
      </div>
    );
  }
  return null;
};

const CustomContent = (props: any) => {
  const { depth, x, y, width, height, name, ev } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: props.fill || '#8884d8',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {width > 60 && height > 40 ? (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 - 6}
            textAnchor="middle"
            fill="#fff"
            fontSize={10}
            fontWeight="bold"
          >
            {typeof name === 'string' ? name.split(' ').slice(-1)[0] : ''}
          </text>
          <text
            x={x + width / 2}
            y={y + height / 2 + 8}
            textAnchor="middle"
            fill="#fff"
            fontSize={9}
          >
            {ev}
          </text>
        </>
      ) : null}
    </g>
  );
};

export default function WealthMap() {
  const data: WealthMapItem[] = useMemo(() => {
    try {
      return safeParseData(wealthMapSchema, rawData);
    } catch (e) {
      console.error(e);
      return [];
    }
  }, []);

  return (
    <div className="w-full h-full min-h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={data}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          content={<CustomContent />}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}
