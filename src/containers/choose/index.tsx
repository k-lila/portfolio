import React, { ReactNode, useLayoutEffect, useState } from 'react'
import { MondrianGen } from '../../components/mondrianGen'
import { discoverDevice } from '../../utils/discoverdevice'
import { ChooseGrid } from './styles'
import { Modals } from './modals'

export type ChooseGridProps = {
  children: ReactNode
  $open: boolean
}

export const Choose = () => {
  const [device, setDevice] = useState(discoverDevice())
  useLayoutEffect(() => {
    const resizer = () => {
      setDevice(discoverDevice())
    }
    window.addEventListener('resize', resizer)
    return () => window.removeEventListener('resize', resizer)
  }, [])
  return (
    <>
      <Modals />
      <ChooseGrid $open>
        <MondrianGen $gridcolumns={device == 'pc' ? 'span 5' : 'span 3'} />
        <MondrianGen />
        <div />
        {device == 'pc' ? (
          <MondrianGen />
        ) : (
          <>
            <MondrianGen />
            <MondrianGen $gridcolumns="span 3" />
            <MondrianGen />
          </>
        )}
        <div />
        <MondrianGen />
        <MondrianGen $gridcolumns={device == 'pc' ? 'span 5' : 'span 3'} />
      </ChooseGrid>
    </>
  )
}
