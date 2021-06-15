import React from "react"
import { Stage, Layer, Rect } from "react-konva"

export default function Home() {
  const width = 500
  const height = 200
  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect x={0} y={0} width={width} height={height} fill="#0000ff" />
      </Layer>
    </Stage>
  )
}
