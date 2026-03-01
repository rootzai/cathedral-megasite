import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';

const data = [
  {
    name: 'Archdiocese of New York',
    size: 10000,
    fill: '#8884d8',
    ev: '$10.0B+'
  },
  {
    name: 'Archdiocese of Chicago',
    size: 7000,
    fill: '#83a6ed',
    ev: '$7.0B+'
  },
  {
    name: 'Archdiocese of Boston',
    size: 5000,
    fill: '#8dd1e1',
    ev: '$5.0B+'
  },
  {
    name: 'Archdiocese of Newark',
    size: 4000,
    fill: '#82ca9d',
    ev: '$4.0B+'
  },
  {
    name: 'Archdiocese of Los Angeles',
    size: 8000,
    fill: '#a4de6c',
    ev: '$8.0B+'
  },
  {
    name: 'Archdiocese of San Francisco',
    size: 5900,
    fill: '#d0ed57',
    ev: '$5.9B+'
  },
  {
    name: 'Other Major Sees',
    size: 15000,
    fill: '#ffc658',
    ev: 'Various'
  },
];

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
            {name.split(' ').slice(-1)[0]}
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
