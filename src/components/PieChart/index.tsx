/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
import { ResponsivePie } from '@nivo/pie'
import { PieChartProps } from '../../utils/types'

function ToolTip(props: {
  datum: {
    data: {
      max_stipend?: any
      min_stipend?: any
      avg_stipend?: any
      offers: any
      max_ctc?: any
      min_ctc?: any
      avg_ctc?: any
    }
  }
}) {
  const { max_stipend, min_stipend, avg_stipend, offers, max_ctc, min_ctc, avg_ctc } =
    props.datum.data
  return (
    <div
      style={{
        background: 'white',
        padding: '9px 12px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    >
      {'max_stipend' in props.datum.data ? (
        <>
          <div>No. of offers: {offers}</div>
          <div>Max Stipend: {max_stipend}</div>
          <div>Min Stipend: {min_stipend}</div>
          <div>Avg Stipend: {avg_stipend}</div>{' '}
        </>
      ) : (
        <>
          <div>No. of offers: {offers}</div>
          <div>Max CTC: {max_ctc}</div>
          <div>Min CTC: {min_ctc}</div>
          <div>Avg CTC: {avg_ctc}</div>
        </>
      )}
    </div>
  )
}

export default function PieChart({ data }: PieChartProps) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        tooltip={ToolTip}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'cse',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'ee',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'mech',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'ece',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'ce',
            },
            id: 'lines',
          },
        ]}
      />
    </div>
  )
}
