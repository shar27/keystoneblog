import React from 'react'
import NavTwo from "../components/NavTwo"
import Link from 'next/link'

function EssayOne() {
    return (
        <div>
          <NavTwo/>  
          
          <div className="container p-4">
         <h5> Summarize the points made in the lecture, being sure to explain how they respond to the specific
points made in the reading passage.</h5>
</div>
<div className="container p-4">

<h5>Integrated Task</h5>
      <p>The passage and the lecture each target two different explanations for the decline of sea otters in
      Alaskan waters; the passage subscribes to the environmental pollution theory which attributes the
      decline to the prevalence of industrial waste in the regio
      n while the lecture contends that predators are
      responsible for the decline instead.</p>
      
      <p>The passage supports the environmental pollution hypothesis with specific mention to chemically
      damaged water, the decline of other sea animals in the area and the uneve
      n pattern with which otters have disappeared. The lecture responds to this by proposing an alternative explanation which can
      produce the same results that have been highlighted by the passage; that due to the decline of whales
      in the area, the orcas have had to start hunting smaller animals like otters and seals instead.</p>


      <p>The uneven pattern of decline can also be attributed to the fact that orcas are large animals. This means
      that they cannot hunt effectively in shallow or rocky waters which also happen to
      be the type of regions
      where sea otter populations have not declined. The lecture, points out that these shallow areas are also
      the same exact places where the otter population still remains relatively unchanged</p>
          </div>
          
        </div>
    )
}

export default EssayOne
